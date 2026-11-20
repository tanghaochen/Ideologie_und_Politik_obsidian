# -*- coding: utf-8 -*-
"""
以你还原的月报模板里的 $= 片段为唯一来源，生成两份模板：
  Diary/_Templates/月报模板.md   6 列：一周一格 + 事件一行一条（你的结构）
  Diary/_Templates/周报模板.md   7 列：一天一组 + 事件一行一条（同结构）
两份都靠文件名认周期，插入即生成行与 merge，格子仍是 $= 实时读日记。
"""
import re, os

ROOT = r"E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长"
SRC = os.path.join(ROOT, "OBSetting/templater/月报.md")
M_ONLY = os.path.join(ROOT, "Diary/_Templates/月报模板.md")
W_ONLY = os.path.join(ROOT, "Diary/_Templates/周报模板.md")

src = open(SRC, encoding="utf-8").read()
uniq = []
for s in re.findall(r"`(\$=[^`]*)`", src):
    if s not in uniq:
        uniq.append(s)
act0 = next(s for s in uniq if "🎯 计划" in s)
res0 = next(s for s in uniq if "📝 简述" in s)
note0 = next(s for s in uniq if "重要度" in s)


def polish(s):
    """只做一处增强：把残留的 "- What:: 内容" 变成 "What：内容"，空字段仍丢弃。"""
    seg = r'.split(/\r?\n/).filter(l => !/^\s*-\s*\S+::\s*$/.test(l))'
    rep = (r'.split(/\r?\n/)'
           r'.map(l => l.replace(/^\s*[-*]\s*([^:\n]{1,8})::\s*(\S.*)$/, "$1：$2"))'
           r'.filter(l => !/^\s*[-*]?\s*\S+::\s*$/.test(l))')
    assert seg in s, "找不到原片段"
    return s.replace(seg, rep)


act0, res0 = polish(act0), polish(res0)


def js_lit(s):
    s = s.replace("slice(1)[0]", "slice(1)[__IDX__]")
    s = s.replace("{{YYYYMMDD}}", "__D8__").replace("{{YYYY}}", "__Y__")
    s = s.replace('"Diary/2026/', '"Diary/__Y__/')
    s = s.replace("\\", "\\\\").replace("'", "\\'")
    return "'" + s + "'"


MIND_RAW = (r'$= const r = await dv.io.load("Diary/2026/{{YYYYMMDD}}"); '
            r'const b = r.split(/^## 📌 /m).slice(1)[0] ?? ""; '
            r'const s = (b.split(/^### 🔍 分析$/m)[1] ?? "").split(/^### /m)[0]; '
            r'const P = String.fromCharCode(124); '
            r'const f = s.match(/^\s*-?\s*洞察::\s*([^\n]*)$/m); '
            r'const t = f ? f[1].split(P).join(" ").replace(/\s+/g, " ").trim() : ""; '
            r'return t.length > 150 ? t.slice(0, 150) + "…" : (t ? t : "（本节未写）");')

ACT, RES, NOTE, MIND = js_lit(act0), js_lit(res0), js_lit(note0), js_lit(MIND_RAW)

MONTHLY = r'''%%【月报模板 · Templater + 内联抓取】文件名写成 202611.md 就自动认月份；插入时按本月实际覆盖的 ISO 周、逐条事件生成行，merge 自动算。表格结构不变（6 列、事件一行一条、行动/结果用 $= 读当天日记）。%%
<%*
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
const ws = [];
let cur = new Date(first.getTime());
cur.setDate(cur.getDate() - ((cur.getDay() || 7) - 1));
while (cur <= last) {
  const mon = new Date(cur.getTime()), sun = new Date(cur.getTime());
  sun.setDate(sun.getDate() + 6);
  ws.push({ n: iso(mon), s: (mon < first ? new Date(first.getTime()) : mon), e: (sun > last ? new Date(last.getTime()) : sun) });
  cur.setDate(cur.getDate() + 7);
}
const dayMap = {};
let fileCnt = 0;
try {
  const dir = "Diary/" + Y + "/";
  for (const f of app.vault.getMarkdownFiles()) {
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
} catch (e) {}
const L = [];
L.push("# " + Y + " 年 " + M + " 月月报（" + ym + "）");
L.push("");
L.push("> 路径：`Diary/" + Y + "/" + ym + ".md`");
L.push(">");
L.push("> 覆盖：**" + md(first) + " ~ " + md(last) + "**，涉及 ISO 第 " + ws.map(w => "W" + w.n).join(" / ") + " 周（本自然月实际覆盖段）");
L.push(">");
L.push("> 数据来源：" + fileCnt + " 篇日记；行动 / 结果 / 笔记由每格 `$= dv.io.load(...)` 实时展开当天原文（截断 150 字）。");
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
  const rows = [];
  const c0 = new Date(w.s.getTime());
  while (c0 <= w.e) {
    const d8 = ymd(c0);
    if (dayMap[d8]) dayMap[d8].forEach(function (t, i) { rows.push({ d8: d8, i: i, title: t }); evTotal++; });
    c0.setDate(c0.getDate() + 1);
  }
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
L.push("自动生成：本月 " + ws.length + " 个 ISO 周、" + fileCnt + " 篇日记、" + evTotal + " 条事件、" + (rowNo - 1) + " 个数据行");
L.push("merge 已按行数算好：" + merges.join(" "));
L.push("事件 ID（event-YYYY-NNN）与备注状态词不自动推断，需要时补在事件格 / 备注格最前面。");
L.push("%%");
tR += L.join("\n");
%>
'''

WEEKLY = r'''%%【周报模板 · Templater + 内联抓取】文件名写成 W47.md（或 2026-W47.md / 20261116.md），插进 Diary/2026 里就自动认那一周；7 列、一天一组、事件一行一条，内心/行动/结果/笔记用 $= 实时读日记。%%
<%*
const ACT  = __ACT__;
const RES  = __RES__;
const NOTE = __NOTE__;
const MIND = __MIND__;
const BT = String.fromCharCode(96);
const p2 = n => (n < 10 ? "0" + n : "" + n);
const title = String((tp && tp.file && tp.file.title) || "");
let folder = "";
try { folder = String(tp.file.folder() || ""); } catch (e) { folder = ""; }
const fy = folder.match(/20\d{2}/) || title.match(/20\d{2}/);
const nowD = new Date();
const Y = fy ? parseInt(fy[0], 10) : nowD.getFullYear();
const iso = d => {
  const u = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7));
  const y0 = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
  return Math.ceil(((u - y0) / 864e5 + 1) / 7);
};
const mW = title.match(/[Ww](\d{1,2})/);
const mD = title.match(/(20\d{2})\D?(\d{2})\D?(\d{2})/);
let week = 0;
if (mW) week = parseInt(mW[1], 10);
else if (mD) week = iso(new Date(parseInt(mD[1], 10), parseInt(mD[2], 10) - 1, parseInt(mD[3], 10)));
else week = iso(nowD);
const jan4 = new Date(Y, 0, 4);
const mon = new Date(jan4.getTime());
mon.setDate(jan4.getDate() - ((jan4.getDay() || 7) - 1) + (week - 1) * 7);
mon.setHours(0, 0, 0, 0);
const sun = new Date(mon.getTime()); sun.setDate(sun.getDate() + 6);
const md = d => p2(d.getMonth() + 1) + "/" + p2(d.getDate());
const ymd = d => String(d.getFullYear()) + p2(d.getMonth() + 1) + p2(d.getDate());
const dayNames = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const days = [];
try {
  const dir = "Diary/" + Y + "/";
  const fs2 = app.vault.getMarkdownFiles();
  for (let i = 0; i < 7; i++) {
    const d = new Date(mon.getTime()); d.setDate(d.getDate() + i);
    const d8 = ymd(d);
    let titles = [], found = false;
    const hit = fs2.filter(f => f.path.indexOf(dir) === 0 && f.basename.indexOf(d8) === 0);
    if (hit.length) {
      found = true;
      let raw = "";
      try { raw = await app.vault.adapter.read(hit[0].path); } catch (e) { raw = ""; }
      const body = String(raw).replace(/%%[\s\S]*?%%/g, "");
      const re = /^##[ \t]*📌[ \t]*(.+)$/gm;
      let m2;
      while ((m2 = re.exec(body))) titles.push(m2[1].trim().split("|").join("／"));
    }
    days.push({ d: d, d8: d8, i: i, found: found, titles: titles });
  }
} catch (e) {
  for (let i = 0; i < 7; i++) { const d = new Date(mon.getTime()); d.setDate(d.getDate() + i); days.push({ d: d, d8: ymd(d), i: i, found: false, titles: [] }); }
}
const L = [];
const merges = [];
let rowNo = 2, evTotal = 0, dayWith = 0;
const missDays = [];
days.forEach(function (x) { if (x.titles.length) { dayWith++; evTotal += x.titles.length; } else missDays.push(md(x.d)); });
L.push("# W" + week + " · " + String(Y) + "-" + md(mon).replace("/", "-") + " ~ " + md(sun).replace("/", "-") + "（ISO 第 " + week + " 周）");
L.push("");
L.push("> 周期：**" + String(Y) + "-" + md(mon).replace("/", "-") + "（周一）～ " + String(Y) + "-" + md(sun).replace("/", "-") + "（周日）**，ISO 第 " + week + " 周");
L.push(">");
L.push("> 覆盖：**" + dayWith + "** / 7 天有日记｜事件 **" + evTotal + "** 条" + (missDays.length ? "｜无日记：" + missDays.join("、") : ""));
L.push(">");
L.push("> 每格由 `$= dv.io.load(...)` 实时读当天日记（截断 150 字）；**日期**一天一格、合并该天全部事件行，**最后一行**总结横向合并。");
L.push("");
L.push("## 一、本周事件总表");
L.push("");
L.push("| 日期 | 事件（链到当天那一条） | 内心 | 行动 | 结果 | 备注 | 笔记 |");
L.push("| :--- | :--- | :--- | :--- | :--- | :--- | :--- |");
days.forEach(function (x) {
  const head = dayNames[x.i] + " " + md(x.d);
  if (!x.titles.length) {
    L.push("| " + head + " | " + (x.found ? "有日记，无 📌 事件" : "暂无日记记录") + " | — | — | — | — | " + (x.found ? "[[" + x.d8 + "]]" : "—") + " |");
    rowNo++;
    return;
  }
  const firstRow = rowNo;
  x.titles.forEach(function (t, i) {
    const cellOf = function (tpl) {
      return BT + tpl.split("__D8__").join(x.d8).split("__Y__").join(String(Y)).split("__IDX__").join(String(i)) + BT;
    };
    const alias = t.length > 30 ? t.slice(0, 30) + "…" : t;
    L.push("| " + (rowNo === firstRow ? head : "") +
      " | [[" + x.d8 + "#📌 " + t + "\\|" + alias + "]]" +
      " | " + cellOf(MIND) +
      " | " + cellOf(ACT) +
      " | " + cellOf(RES) +
      " | （新起 / 延续 / 调整 / 转折 / 收束 / 单独）" +
      " | " + (i === 0 ? "[[" + x.d8 + "]]<br>" + cellOf(NOTE) : "") + " |");
    rowNo++;
  });
  if (x.titles.length > 1) merges.push("A" + firstRow + ":A" + (rowNo - 1), "G" + firstRow + ":G" + (rowNo - 1));
});
L.push("| 总结：本周 " + dayWith + "/7 天有日记、事件 " + evTotal + " 条。手写这一周到底干了什么：主线 / 最大的变化 / 可核对的结果 / 没解决的事 / 下周只做一件事。先压到 200 字，上限 2000。 |  |  |  |  |  |  |");
merges.push("A" + rowNo + ":G" + rowNo);
L.push('<!-- gogoga-table: ' + JSON.stringify({ w: [88, 190, null, null, null, 120, 150], merge: merges, va: ["middle"], headerCol: true }) + ' -->');
L.push("");
L.push("> 表内空白格表示与上一行同组（合并单元格，需 gogoga Table 插件）。最后一行是总结行，横向合并整行。");
L.push("");
L.push("## 二、本周小结（补充说明，可选）");
L.push("");
L.push("- **未解决**：（带到下周的问题）");
L.push("- **下周重点**：① （…） ② （…） ③ （…）");
L.push("- **德语**：练习次数 / 材料 / 反复错误 / 有无可核对数据");
L.push("");
L.push("%%");
L.push("自动生成：W" + week + "（" + md(mon) + "~" + md(sun) + "）、" + dayWith + " 天有日记、" + evTotal + " 条事件、" + (rowNo - 1) + " 个数据行");
L.push("merge 已按行数算好：" + merges.join(" "));
L.push("%%");
tR += L.join("\n");
%>
'''

MONTHLY = MONTHLY.replace("__ACT__", ACT).replace("__RES__", RES).replace("__NOTE__", NOTE)
WEEKLY = WEEKLY.replace("__ACT__", ACT).replace("__RES__", RES).replace("__NOTE__", NOTE).replace("__MIND__", MIND)

open(M_ONLY, "w", encoding="utf-8").write(MONTHLY)
open(W_ONLY, "w", encoding="utf-8").write(WEEKLY)
print("月报模板:", len(MONTHLY), "字符")
print("周报模板:", len(WEEKLY), "字符")
print("月报表头仍是 6 列:", "| 周 | 事件（链到当天那一条） | 行动 | 结果 | 备注 | 笔记 |" in MONTHLY)
