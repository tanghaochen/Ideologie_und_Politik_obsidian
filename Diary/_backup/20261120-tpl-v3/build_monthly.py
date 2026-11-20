import re, os

ROOT = r"E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长"
MRE_SRC = os.path.join(ROOT, "Diary/_backup/20261120-tpl-v3/月报模板_MRE引擎版.md")
DST = os.path.join(ROOT, "Diary/_Templates/月报模板.md")

src = open(MRE_SRC, encoding="utf-8").read()
m = re.search(r"```dataviewjs\n[\s\S]*?\n```", src)
engine = m.group(0)
print("引擎块长度:", len(engine))
print("引擎块首行:", engine.split("\n")[0])
print("引擎块末行:", engine.split("\n")[-1])

HEAD = r'''%%【月报模板 v3 · Templater + MRE 引擎】文件名必须是 202611.md 这种 YYYYMM。
插入时自动算出本月的 ISO 周、生成每一行的  $= MRE.xxx("W44")  内联调用、按行数算好 merge；
插入后每格由 dataviewjs 引擎实时从 Diary/2026/202611*.md 抓取。要改逻辑只改下面引擎块顶部的 CFG。%%
<%*
// ── 只在插入时跑一次：算本月覆盖的 ISO 周，写标题和说明行 ──
const p2 = n => (n < 10 ? "0" + n : "" + n);
let hit = true, Y, M;
const g = String((tp && tp.file && tp.file.title) || "").match(/(20\d{2})\D?(0[1-9]|1[0-2])/);
if (g) { Y = parseInt(g[1], 10); M = parseInt(g[2], 10); }
else { hit = false; const n = new Date(); Y = n.getFullYear(); M = n.getMonth() + 1; }
const ym = "" + Y + p2(M);
const first = new Date(Y, M - 1, 1), last = new Date(Y, M, 0);
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
  const mon = new Date(cur.getTime());
  ws.push({ w: iso(mon), m: p2(mon.getMonth() + 1) });
  cur.setDate(cur.getDate() + 7);
}
const L = [];
if (!hit) L.push("> ⚠ 文件名里没有 YYYYMM，下面按「今天所在月」生成；请把文件改名为 " + ym + ".md 后重新插入。", "");
L.push("# " + Y + " 年 " + M + " 月月报（" + ym + "）", "");
L.push("> **路径**：`Diary/" + Y + "/" + ym + ".md`（月报固定放这里）");
L.push(">");
L.push("> **覆盖**：**" + p2(M) + "/01 ~ " + p2(M) + "/" + p2(last.getDate()) + "**，涉及 ISO 第 " + ws.map(x => "W" + x.w).join(" / ") + " 周（引擎会把日期段自动裁到本自然月）");
L.push(">");
L.push("> **数据来源**：引擎实时读 `Diary/" + Y + "` 下 `" + ym + "DD*.md` 的日记；不读周报、不读月报自己，不会自己统计自己。");
L.push(">");
L.push("> **一行 = 一周**：周 / 事件 / 行动 / 结果 / 备注 / 笔记 六列由 `MRE.xxx(\"W" + (ws[0] ? ws[0].w : 36) + "\")` 这类内联调用现算，字数由引擎统一裁切（格 150 / 一句 30 / 字段 50）。");
L.push("");
L.push("## 月报说明");
L.push("");
L.push("> 一眼看完整月：每行先给自动统计，细节点「事件」列的链接。");
L.push("");
tR += L.join("\n");
%>
'''

TAIL = r'''<%*
// ── 只在插入时跑一次：按本月实际的周数生成行 + 算好 merge ──
const BT = String.fromCharCode(96);   // 反引号：单元格里的内联查询要用
const p2b = n => (n < 10 ? "0" + n : "" + n);
let Yb, Mb;
const gb = String((tp && tp.file && tp.file.title) || "").match(/(20\d{2})\D?(0[1-9]|1[0-2])/);
if (gb) { Yb = parseInt(gb[1], 10); Mb = parseInt(gb[2], 10); }
else { const n = new Date(); Yb = n.getFullYear(); Mb = n.getMonth() + 1; }
const firstb = new Date(Yb, Mb - 1, 1), lastb = new Date(Yb, Mb, 0);
const isob = d => {
  const u = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7));
  const y0 = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
  return Math.ceil(((u - y0) / 864e5 + 1) / 7);
};
const WKS = [];
let cb = new Date(firstb.getTime());
cb.setDate(cb.getDate() - ((cb.getDay() || 7) - 1));
while (cb <= lastb) { WKS.push("W" + isob(cb)); cb.setDate(cb.getDate() + 7); }

const R = [];
R.push("| 周 | 事件（一句话） | 行动 | 结果 | 备注 | 笔记 |");
R.push("| :--- | :--- | :--- | :--- | :--- | :--- |");
WKS.forEach(function (w, i) {
  const q = function (k, extra) { return BT + "$= MRE." + k + "(\"" + w + "\")" + BT + (extra || ""); };
  R.push("| 第" + (i + 1) + "周 " + q("wk") + " | " + q("ev") + " | " + q("act") + " | " + q("res") +
    " | （新起 / 延续 / 调整 / 转折 / 收束 / 单独）· " + q("stat") + " | " + q("notes") + " |");
});
const sumRow = 2 + WKS.length;
R.push("| 总结：" + BT + "$= MRE.sum()" + BT + "<br>（上面是自动统计；再手写 300–500 字人话结论：主线走向、可核对结果、最稳定的模式、最大卡点、下月只做一件事） |  |  |  |  |  |");
R.push('<!-- gogoga-table: ' + JSON.stringify({ w: [120, 214, 382, 454, 231, 150], merge: ["A" + sumRow + ":F" + sumRow], va: ["middle"], headerCol: true }) + ' -->');
R.push("");
R.push("> 表内空白格表示与上一行同组（合并单元格，需 gogoga Table 插件）。最后一行是总结行，横向合并整行。");
R.push("");
R.push("## 二、本月结论（补充说明，可选）");
R.push("");
R.push("- **必须带走的一件事**：（做法层面，一句）");
R.push("- **下月只做一件事**：（行动层面，一句）");
R.push("");
R.push("## 附：引擎自检（确认引擎跑起来了再删本节）");
R.push("");
R.push(BT + BT + BT + "dataviewjs");
R.push("dv.paragraph(\"**MRE**｜\" + (globalThis.MRE ? MRE.status() : \"⛔ 引擎未加载：本文件上方的 dataviewjs 块被删了\"));");
R.push("if (globalThis.MRE && MRE.state.month) {");
R.push("  const ws = MRE.weekList().split(\" \").filter(Boolean);");
R.push("  dv.paragraph(\"**每周事件数**｜\" + ws.map(function (w) { return w + \"：\" + MRE.events(w).length + \" 条\"; }).join(\"　\"));");
R.push("}");
R.push(BT + BT + BT);
tR += R.join("\n");
%>
'''

out = HEAD + "\n" + engine + "\n" + TAIL
open(DST, "w", encoding="utf-8").write(out)
print("写入:", DST, len(out), "字节")
print("引擎块是否原样保留:", engine in open(DST, encoding="utf-8").read())
