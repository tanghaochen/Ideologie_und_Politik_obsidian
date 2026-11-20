import re, os, json

ROOT = r"E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长"
SRC = os.path.join(ROOT, "OBSetting/templater/月报.md")
DST = os.path.join(ROOT, "Diary/_Templates/月报模板.md")

src = open(SRC, encoding="utf-8").read()

# ── 从你还原的模板里原样取出三个 $= 片段 ─────────────────────
snippets = re.findall(r"`(\$=[^`]*)`", src)
uniq = []
for s in snippets:
    if s not in uniq:
        uniq.append(s)
print("找到不同的 $= 片段:", len(uniq))
act0 = next(s for s in uniq if "🎯 计划" in s)
res0 = next(s for s in uniq if "📝 简述" in s)
note0 = next(s for s in uniq if "重要度" in s)
print("计划片段长度:", len(act0), "| 简述:", len(res0), "| 笔记:", len(note0))
assert "slice(1)[0]" in act0 and "slice(1)[0]" in res0

def js_lit(s):
    """把片段变成一个 JS 单引号字符串字面量；[0] 换成索引占位。"""
    s = s.replace("slice(1)[0]", "slice(1)[__IDX__]")
    s = s.replace("{{YYYYMMDD}}", "__D8__").replace("{{YYYY}}", "__Y__")
    s = s.replace('"Diary/2026/', '"Diary/__Y__/')      # 年号改成占位，插入时替换
    s = s.replace("\\", "\\\\").replace("'", "\\'")
    return "'" + s + "'"

ACT, RES, NOTE = js_lit(act0), js_lit(res0), js_lit(note0)

DOC = r'''%%【月报模板 · Templater + 内联抓取】文件名写成 202611.md 就自动认月份；插入时按本月实际覆盖的 ISO 周、逐条事件生成行，merge 自动算。表格结构保持不变（6 列、事件一行一条、行动/结果用 $= 读当天日记）。%%
<%*
// ══════════════════════════════════════════════════════════════════
//  1) 从文件名认月份 → 2) 算本月覆盖的 ISO 周 → 3) 读 Diary/<年>/ 下当月日记
//  → 4) 每个 📌 生成一行（行动/结果仍是 $= 内联查询，实时读原日记）
//  → 5) 按实际行数算 merge。读不到文件不会崩，退化成占位行。
// ══════════════════════════════════════════════════════════════════
const ACT  = __ACT__;
const RES  = __RES__;
const NOTE = __NOTE__;
const BT = String.fromCharCode(96);

const p2 = n => (n < 10 ? "0" + n : "" + n);
const g = String((tp && tp.file && tp.file.title) || "").match(/(20\d{2})\D?(0[1-9]|1[0-2])/);
const nowD = new Date();
const Y = g ? parseInt(g[1], 10) : nowD.getFullYear();
const M = g ? parseInt(g[2], 10) : nowD.getMonth() + 1;
const ym = String(Y) + p2(M);
const first = new Date(Y, M - 1, 1), last = new Date(Y, M, 0);
const md = d => p2(d.getMonth() + 1) + "/" + p2(d.getDate());
const ymd = d => String(d.getFullYear()) + p2(d.getMonth() + 1) + p2(d.getDate());
const iso = d => {
  const u = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7));
  const y0 = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
  return Math.ceil(((u - y0) / 864e5 + 1) / 7);
};

// ── 本月覆盖的 ISO 周 ──
const ws = [];
let cur = new Date(first.getTime());
cur.setDate(cur.getDate() - ((cur.getDay() || 7) - 1));
while (cur <= last) {
  const mon = new Date(cur.getTime()), sun = new Date(cur.getTime());
  sun.setDate(sun.getDate() + 6);
  ws.push({ n: iso(mon), s: (mon < first ? new Date(first.getTime()) : mon), e: (sun > last ? new Date(last.getTime()) : sun) });
  cur.setDate(cur.getDate() + 7);
}

// ── 读当月日记，记下每天有几条 📌 ──
const dayMap = {};
let fileCnt = 0;
try {
  const dir = "Diary/" + Y + "/";
  const fs2 = app.vault.getMarkdownFiles();
  for (const f of fs2) {
    if (f.path.indexOf(dir) !== 0) continue;
    const d8 = f.basename.slice(0, 8);
    if (!/^\d{8}$/.test(d8) || d8.slice(0, 6) !== ym) continue;
    let raw = "";
    try { raw = await app.vault.adapter.read(f.path); } catch (e) { raw = ""; }
    const body = String(raw).replace(/%%[\s\S]*?%%/g, "");
    const titles = [];
    const re = /^##[ \t]*📌[ \t]*(.+)$/gm;
    let m2;
    while ((m2 = re.exec(body))) titles.push(m2[1].trim().split("|").join("／"));
    if (titles.length) { dayMap[d8] = titles; fileCnt++; }
  }
} catch (e) { /* 读不到就全占位 */ }

// ── 生成文档 ──
const L = [];
L.push("# " + Y + " 年 " + M + " 月月报（" + ym + "）");
L.push("");
L.push("> 路径：`Diary/" + Y + "/" + ym + ".md`");
L.push(">");
L.push("> 覆盖：**" + md(first) + " ~ " + md(last) + "**，涉及 ISO 第 " + ws.map(w => "W" + w.n).join(" / ") + " 周（本自然月实际覆盖段）");
L.push(">");
L.push("> 数据来源：" + fileCnt + " 篇日记；行动 / 结果由每格 `$= dv.io.load(...)` 实时展开当天原文（截断 150 字）。");
L.push(">");
L.push("> 一张表两层合并：**周**一周一格（合并该周全部事件行）→ **事件**逐条展开；**最后一行**是整月总结，横向合并、最多 2000 字。");
L.push("");
L.push("## 月报说明");
L.push("");
L.push("| 周 | 事件（链到当天那一条） | 行动 | 结果 | 备注 | 笔记 |");
L.push("| :--- | :--- | :--- | :--- | :--- | :--- |");

const merges = [];
let rowNo = 2, evTotal = 0;
ws.forEach(function (w, wi) {
  const firstRow = rowNo;
  const days = [];
  const c0 = new Date(w.s.getTime());
  while (c0 <= w.e) { days.push(new Date(c0.getTime())); c0.setDate(c0.getDate() + 1); }
  const rows = [];
  days.forEach(function (d) {
    const d8 = ymd(d);
    const ts = dayMap[d8];
    if (!ts) return;
    ts.forEach(function (t, i) { rows.push({ d8: d8, i: i, title: t, cnt: ts.length }); evTotal++; });
  });
  const head = "第" + (wi + 1) + "周 " + md(w.s) + "~" + md(w.e);
  if (!rows.length) {
    L.push("| " + head + " | 整周无日记 | — | — | — | — |");
    rowNo++;
    return;
  }
  rows.forEach(function (r) {
    const cellOf = function (tpl) {
      return BT + tpl.split("__D8__").join(r.d8).split("__Y__").join(String(Y)).split("__IDX__").join(String(r.i)) + BT;
    };
    const alias = r.title.length > 30 ? r.title.slice(0, 30) + "…" : r.title;
    L.push("| " + (rowNo === firstRow ? head : "") +
      " | [[" + r.d8 + "#📌 " + r.title + "\\|" + alias + "]]" +
      " | " + cellOf(ACT) +
      " | " + cellOf(RES) +
      " | （新起 / 延续 / 调整 / 转折 / 收束 / 单独）" +
      " | [[" + r.d8 + "]]<br>" + cellOf(NOTE) + " |");
    rowNo++;
  });
  if (rows.length > 1) merges.push("A" + firstRow + ":A" + (rowNo - 1));
});

L.push("| 总结：这个月真正发生了什么——几条主线的走向、可核对的结果、最稳定的模式、最大的卡点、下月只做一件事。压到 300–500 字，上限 2000 字。 |  |  |  |  |  |");
merges.push("A" + rowNo + ":F" + rowNo);
L.push('<!-- gogoga-table: ' + JSON.stringify({ w: [120, 645, null, null, 110, 150], merge: merges, va: ["middle"], headerCol: true }) + ' -->');
L.push("");
L.push("> 表内空白格表示与上一行同组（合并单元格，需 gogoga Table 插件）。最后一行是总结行，横向合并整行。");
L.push("");
L.push("## 二、本月结论（补充说明，可选）");
L.push("");
L.push("- **必须带走的一件事**：（做法层面，一句）");
L.push("- **下月只做一件事**：（行动层面，一句）");
L.push("");
L.push("%%");
L.push("自动生成信息：本月 " + ws.length + " 个 ISO 周、日记 " + fileCnt + " 篇、事件 " + evTotal + " 条、数据行 " + (rowNo - 1) + " 行");
L.push("merge 已按实际行数算好：" + merges.join(" "));
L.push("事件 ID（event-YYYY-NNN）和备注状态词不自动推断，需要时手动补在事件格最前面 / 备注格最前面。");
L.push("%%");
tR += L.join("\n");
%>
'''

DOC = DOC.replace("__ACT__", ACT).replace("__RES__", RES).replace("__NOTE__", NOTE)
open(DST, "w", encoding="utf-8").write(DOC)
print("写入:", DST, len(DOC), "字符")
