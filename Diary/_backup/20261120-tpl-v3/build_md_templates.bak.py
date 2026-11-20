# -*- coding: utf-8 -*-
"""
按「Markdown 框架不动，代码只写在格子里」的原则生成两份模板：
  Diary/_Templates/月报模板.md   6 列 × 6 个周槽（槽空显示 —），标题/说明/小节全是普通 MD
  Diary/_Templates/周报模板.md   7 列 × 7 个天槽
唯一的代码区：表格上方一个 dataviewjs 小引擎（只算格子，不生成文档）+ 每格一句 $= MR.xxx(n)
merge 因行数固定（月 8 行、周 9 行），写死不重算。
"""
import os

ROOT = r"E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长"
M_ONLY = os.path.join(ROOT, "Diary/_Templates/月报模板.md")
W_ONLY = os.path.join(ROOT, "Diary/_Templates/周报模板.md")

MONTHLY_ENGINE = r'''```dataviewjs
// ══════════════════════════════════════════════════════════════════════
//  月报格子引擎：只负责「算格子」，不生成任何 Markdown 结构
//  表格里的 `$= MR.wk(0)` / `$= await MR.act(0)` 都是调它
//  认月：文件名 202611.md → 2026 年 11 月；认不到就用当月
// ══════════════════════════════════════════════════════════════════════
const p2 = v => String(v).padStart(2, "0");
const P  = String.fromCharCode(124);                       // 竖线，格子里不能直接写
const nm = (dv.current() && dv.current().file && dv.current().file.name) || "";
const mm0 = nm.match(/(\d{4})(\d{2})/);
const Y = mm0 ? +mm0[1] : new Date().getFullYear();
const MO = mm0 ? +mm0[2] : new Date().getMonth() + 1;
const A = new Date(Y, MO - 1, 1), B = new Date(Y, MO, 0);  // 本月 1 日 / 月末
const md = d => p2(d.getMonth() + 1) + "/" + p2(d.getDate());
const ymd = d => "" + d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate());
const iso = d => {
  const u = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7));
  const z = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
  return Math.ceil(((u - z) / 864e5 + 1) / 7);
};
// 第 i 个周槽（0 起）；本月没有这一周就返回 null
const wkObj = i => {
  const c = new Date(A.getTime());
  c.setDate(c.getDate() - ((c.getDay() || 7) - 1) + 7 * i);
  if (c > B) return null;
  const e = new Date(c.getTime()); e.setDate(e.getDate() + 6);
  return { n: iso(c), s: (c < A ? new Date(A.getTime()) : c), e: (e > B ? new Date(B.getTime()) : e) };
};
const dayList = w => { const o = []; const d = new Date(w.s.getTime()); while (d <= w.e) { o.push(ymd(d)); d.setDate(d.getDate() + 1); } return o; };
const fileOf = d8 => app.vault.getMarkdownFiles().find(f => f.path.indexOf("Diary/" + Y + "/") === 0 && f.basename.indexOf(d8) === 0);
const headsOf = f => (((app.metadataCache.getFileCache(f) || {}).headings) || []).filter(h => h.level === 2 && h.heading.indexOf("📌") >= 0);
const clean = s => String(s)
  .replace(/%%[\s\S]*?%%/g, "").replace(/!\[\[[^\]]*\]\]/g, "")
  .replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g, "$2").replace(/\[\[([^\]]*)\]\]/g, "$1")
  .replace(/\*\*/g, "")
  .replace(/^\s*[-*]\s*([^:\n]{1,10})::\s*/gm, "$1：")
  .replace(/^[ \t]*(What|When)：[ \t]*$/gm, "")
  .split(P).join("／").replace(/\s+/g, " ").trim();
const cut = (s, n) => { const t = clean(s); return t.length > n ? t.slice(0, n) + "…" : t; };
const secOf = (body, name) => {
  const i = body.indexOf("### " + name);
  if (i < 0) return "";
  const rest = body.slice(i + 4 + name.length);
  const j = rest.search(/^#{2,3} /m);
  return j < 0 ? rest : rest.slice(0, j);
};
const blocksOf = async d8 => {
  const f = fileOf(d8);
  if (!f) return [];
  const raw = (await dv.io.load(f.path)).replace(/%%[\s\S]*?%%/g, "");
  return raw.split(/^##\s*📌\s*/m).slice(1);
};

globalThis.MR = {
  // 周列
  wk: i => { const w = wkObj(i); return w ? "第" + (i + 1) + "周 " + md(w.s) + "~" + md(w.e) + " · W" + w.n : "—（本月无此周）"; },
  // 事件列：当天每条 📌 一个链接
  ev: i => {
    const w = wkObj(i); if (!w) return "—";
    const out = [];
    dayList(w).forEach(d8 => {
      const f = fileOf(d8); if (!f) return;
      headsOf(f).forEach(h => {
        const t = h.heading.replace(/^[\s\S]*?📌\s*/, "").trim();
        out.push("[[" + d8 + "#" + h.heading.trim() + P + cut(t, 28) + "]]");
      });
    });
    return out.length ? out.join("<br>") : "整周无日记";
  },
  // 行动列：当天每个 📌 的 🎯 计划（一周多事件时前面加日期，防止跟事件列对不上）
  act: async i => {
    const w = wkObj(i); if (!w) return "—";
    const out = [];
    for (const d8 of dayList(w)) {
      for (const b of await blocksOf(d8)) {
        const t = cut(secOf(b, "🎯 计划"), 150);
        if (t) out.push({ d: d8, t: t });
      }
    }
    return out.length ? out.map(x => (out.length > 1 ? md(new Date(+x.d.slice(0, 4), +x.d.slice(4, 6) - 1, +x.d.slice(6, 8))) + "｜" : "") + x.t).join("<br>") : "（未写计划）";
  },
  // 结果列：当天每个 📌 的 📝 简述
  res: async i => {
    const w = wkObj(i); if (!w) return "—";
    const out = [];
    for (const d8 of dayList(w)) {
      for (const b of await blocksOf(d8)) {
        const t = cut(secOf(b, "📝 简述"), 150);
        if (t) out.push({ d: d8, t: t });
      }
    }
    return out.length ? out.map(x => (out.length > 1 ? md(new Date(+x.d.slice(0, 4), +x.d.slice(4, 6) - 1, +x.d.slice(6, 8))) + "｜" : "") + x.t).join("<br>") : "（未写简述）";
  },
  // 笔记列：每天一行 ★重要度 主题 📌×条数
  notes: i => {
    const w = wkObj(i); if (!w) return "—";
    const out = [];
    dayList(w).forEach(d8 => {
      const f = fileOf(d8); if (!f) return;
      const p = dv.page("Diary/" + Y + "/" + d8);
      const sc = p && p["重要度"] != null ? [].concat(p["重要度"]).join("/") : "?";
      const tg = p && p["主题"] != null ? [].concat(p["主题"]).join(" ") : "";
      out.push("[[" + d8 + "]] · ★" + sc + (tg ? " " + tg : "") + " · 📌×" + headsOf(f).length);
    });
    return out.length ? out.join("<br>") : "—";
  },
  // 标题 / 说明行用
  head: () => Y + " 年 " + MO + " 月月报（" + Y + p2(MO) + "）",
  path: () => mm0 ? "Diary/" + Y + "/" + Y + p2(MO) + ".md" : "⚠ 文件名请改成 " + Y + p2(MO) + ".md（现在叫 " + nm + "）",
  span: () => md(A) + " ~ " + md(B),
  weeks: () => { const o = []; for (let i = 0; wkObj(i); i++) o.push("W" + wkObj(i).n); return o.join(" / "); },
  src: () => dayList({ s: A, e: B }).filter(d8 => fileOf(d8)).length
};
// 引擎块本身不占版面
this.container.style.display = "none";
```'''

WEEKLY_ENGINE = r'''```dataviewjs
// ══════════════════════════════════════════════════════════════════════
//  周报格子引擎：只负责「算格子」，不生成任何 Markdown 结构
//  认周：文件名 W47.md / 2026-W47.md / 20261116.md；年从文件夹 Diary/2026 取
// ══════════════════════════════════════════════════════════════════════
const p2 = v => String(v).padStart(2, "0");
const P  = String.fromCharCode(124);
const cur = dv.current();
const nm = (cur && cur.file && cur.file.name) || "";
const pa = (cur && cur.file && cur.file.path) || "";
const fy = (pa.match(/Diary\/(\d{4})\//) || nm.match(/(20\d{2})/) || []);
const Y = fy[1] ? +fy[1] : new Date().getFullYear();
const iso = d => {
  const u = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7));
  const z = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
  return Math.ceil(((u - z) / 864e5 + 1) / 7);
};
const mw = nm.match(/[Ww](\d{1,2})/);
const md8 = nm.match(/(20\d{2})\D?(\d{2})\D?(\d{2})/);
let WK = 0;
if (mw) WK = +mw[1];
else if (md8) WK = iso(new Date(+md8[1], +md8[2] - 1, +md8[3]));
else WK = iso(new Date());
const jan4 = new Date(Y, 0, 4);
const MON = new Date(jan4.getTime());
MON.setDate(jan4.getDate() - ((jan4.getDay() || 7) - 1) + (WK - 1) * 7);
MON.setHours(0, 0, 0, 0);
const md = d => p2(d.getMonth() + 1) + "/" + p2(d.getDate());
const ymd = d => "" + d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate());
const dayNames = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const dayOf = i => { const d = new Date(MON.getTime()); d.setDate(d.getDate() + i); return d; };
const fileOf = d8 => app.vault.getMarkdownFiles().find(f => f.path.indexOf("Diary/" + Y + "/") === 0 && f.basename.indexOf(d8) === 0);
const headsOf = f => (((app.metadataCache.getFileCache(f) || {}).headings) || []).filter(h => h.level === 2 && h.heading.indexOf("📌") >= 0);
const clean = s => String(s)
  .replace(/%%[\s\S]*?%%/g, "").replace(/!\[\[[^\]]*\]\]/g, "")
  .replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g, "$2").replace(/\[\[([^\]]*)\]\]/g, "$1")
  .replace(/\*\*/g, "")
  .replace(/^\s*[-*]\s*([^:\n]{1,10})::\s*/gm, "$1：")
  .replace(/^[ \t]*(What|When)：[ \t]*$/gm, "")
  .split(P).join("／").replace(/\s+/g, " ").trim();
const cut = (s, n) => { const t = clean(s); return t.length > n ? t.slice(0, n) + "…" : t; };
const secOf = (body, name) => {
  const i = body.indexOf("### " + name);
  if (i < 0) return "";
  const rest = body.slice(i + 4 + name.length);
  const j = rest.search(/^#{2,3} /m);
  return j < 0 ? rest : rest.slice(0, j);
};
const blocksOf = async d8 => {
  const f = fileOf(d8);
  if (!f) return [];
  const raw = (await dv.io.load(f.path)).replace(/%%[\s\S]*?%%/g, "");
  return raw.split(/^##\s*📌\s*/m).slice(1);
};

globalThis.WR = {
  d: i => dayNames[i] + " " + md(dayOf(i)),
  ev: i => {
    const d8 = ymd(dayOf(i)), f = fileOf(d8);
    if (!f) return "暂无日记记录";
    const hs = headsOf(f);
    if (!hs.length) return "有日记，无 📌 事件";
    return hs.map(h => {
      const t = h.heading.replace(/^[\s\S]*?📌\s*/, "").trim();
      return "[[" + d8 + "#" + h.heading.trim() + P + cut(t, 30) + "]]";
    }).join("<br>");
  },
  mind: async i => {
    const out = [];
    for (const b of await blocksOf(ymd(dayOf(i)))) {
      const m = secOf(b, "🔍 分析").match(/^\s*-?\s*洞察::\s*([^\n]*)$/m);
      const t = m ? cut(m[1], 150) : "";
      if (t) out.push(t);
    }
    return out.length ? out.join("<br>") : "—";
  },
  act: async i => {
    const out = [];
    for (const b of await blocksOf(ymd(dayOf(i)))) {
      const t = cut(secOf(b, "🎯 计划"), 150);
      if (t) out.push(t);
    }
    const circ = ["①", "②", "③", "④", "⑤"];
    return out.length ? out.map((t, k) => (out.length > 1 ? (circ[k] || "·") + " " : "") + t).join("<br>") : "（未写计划）";
  },
  res: async i => {
    const out = [];
    for (const b of await blocksOf(ymd(dayOf(i)))) {
      const t = cut(secOf(b, "📝 简述"), 150);
      if (t) out.push(t);
    }
    const circ = ["①", "②", "③", "④", "⑤"];
    return out.length ? out.map((t, k) => (out.length > 1 ? (circ[k] || "·") + " " : "") + t).join("<br>") : "（未写简述）";
  },
  notes: i => {
    const d8 = ymd(dayOf(i)), f = fileOf(d8);
    if (!f) return "—";
    const p = dv.page("Diary/" + Y + "/" + d8);
    const sc = p && p["重要度"] != null ? [].concat(p["重要度"]).join("/") : "?";
    const tg = p && p["主题"] != null ? [].concat(p["主题"]).join(" ") : "";
    return "[[" + d8 + "]] · ★" + sc + (tg ? " " + tg : "") + " · 📌×" + headsOf(f).length;
  },
  head: () => "W" + WK + " · " + Y + "-" + md(MON).replace("/", "-") + " ~ " + md(dayOf(6)).replace("/", "-"),
  span: () => Y + "-" + md(MON).replace("/", "-") + "（周一）～ " + Y + "-" + md(dayOf(6)).replace("/", "-") + "（周日）",
  cover: () => { let n = 0, e = 0; for (let i = 0; i < 7; i++) { const f = fileOf(ymd(dayOf(i))); if (f) { n++; e += headsOf(f).length; } } return n + " / 7 天有日记｜事件 " + e + " 条"; }
};
this.container.style.display = "none";
```'''

MONTHLY = r'''%%【月报模板】结构就是这张 MD 表，代码只在格子里（调 MR 的那一句），开头那个 dataviewjs 只算格子、不生成文档。文件名写成 202611.md 就自动认月份；6 个周槽里用不到的会显示「—（本月无此周）」，删掉那几行记得把 merge 的 A8:F8 改成新的总结行号。%%
__ENGINE__

# `$= MR.head()`

> 路径：`$= MR.path()`
>
> 覆盖：**`$= MR.span()`**，涉及 ISO 第 `$= MR.weeks()` 周（本自然月实际覆盖段）
>
> 数据来源：`$= MR.src()` 篇日记；每一格由 `$= MR.xxx(槽号)` 现算，行动 / 结果直接从当天日记的 🎯 计划 / 📝 简述里取，截断 150 字
>
> 一张表两层：**周**一周一格（本周全部事件在这个格里换行）→ **事件**逐条链到当天那一条；**最后一行**是整月总结，`A8:F8` 横向合并

## 月报说明

| 周 | 事件（链到当天那一条） | 行动 | 结果 | 备注 | 笔记 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `$= MR.wk(0)` | `$= MR.ev(0)` | `$= await MR.act(0)` | `$= await MR.res(0)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= MR.notes(0)` |
| `$= MR.wk(1)` | `$= MR.ev(1)` | `$= await MR.act(1)` | `$= await MR.res(1)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= MR.notes(1)` |
| `$= MR.wk(2)` | `$= MR.ev(2)` | `$= await MR.act(2)` | `$= await MR.res(2)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= MR.notes(2)` |
| `$= MR.wk(3)` | `$= MR.ev(3)` | `$= await MR.act(3)` | `$= await MR.res(3)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= MR.notes(3)` |
| `$= MR.wk(4)` | `$= MR.ev(4)` | `$= await MR.act(4)` | `$= await MR.res(4)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= MR.notes(4)` |
| `$= MR.wk(5)` | `$= MR.ev(5)` | `$= await MR.act(5)` | `$= await MR.res(5)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= MR.notes(5)` |
| 总结：这个月真正发生了什么——几条主线的走向、可核对的结果、最稳定的模式、最大的卡点、下月只做一件事。压到 300–500 字，上限 2000 字。 |  |  |  |  |  |
<!-- gogoga-table: {"w":[120,645,null,null,110,150],"merge":["A8:F8"],"va":["middle"],"headerCol":true} -->

> 为了让大家在这个表格里面一眼就能完全明白这一周或这一天干了什么，先以短幅度的文字描述概括，后面才是正文。
>
> 表内空白格表示与上一行同组（合并单元格，需 gogoga Table 插件）。最后一行是总结行，横向合并整行。

## 二、本月结论（补充说明，可选）

- **必须带走的一件事**：（做法层面，一句）
- **下月只做一件事**：（行动层面，一句）

%%
【用法】
1. 文件名必须是 202611.md 这种 YYYYMM；改月份就改文件名，格子自己跟着变，不用改代码。
2. 一格可以写多行：`MR.xxx()` 内部已经是 `<br>` 拼接，直接读就行，不要手动加。
3. 事件 ID（event-YYYY-NNN）和备注状态词机器判断不了，手写在格首即可。
4. 只有 6 个周槽是有意的：多数月份 4～6 周，用不到的槽会显示「—（本月无此周）」。删行以后要把 merge 的 A8:F8 换成新的总结行号。
5. 整行想手写就把那格的 MR 调用换成文字，其它格不受影响。
%%'''

WEEKLY = r'''%%【周报模板】结构就是这张 MD 表，代码只在格子里（调 WR 的那一句），开头那个 dataviewjs 只算格子、不生成文档。文件名写成 W47.md（或 2026-W47.md / 20261116.md），放在 Diary/2026 下就自动认那一周；7 个天槽固定，不会多也不会少。%%
__ENGINE__

# `$= WR.head()`

> 周期：**`$= WR.span()`**，ISO 第 `$= dv.current().file.name.match(/[Ww](\d+)/) ? dv.current().file.name.match(/[Ww](\d+)/)[1] : "?"` 周
>
> 覆盖：`$= WR.cover()`
>
> 每格由 `$= WR.xxx(星期序号)` 现算：内心取 🔍 洞察，行动取 🎯 计划，结果取 📝 简述，各自截断 150 字；一天多件事在格里换行
>
> 一张表两层：**日期**一天一格（当天全部事件在这个格里换行）→ **事件**逐条链到当天那一条；**最后一行**是总结，`A9:G9` 横向合并

## 一、本周事件总表

| 日期 | 事件（链到当天那一条） | 内心 | 行动 | 结果 | 备注 | 笔记 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `$= WR.d(0)` | `$= WR.ev(0)` | `$= await WR.mind(0)` | `$= await WR.act(0)` | `$= await WR.res(0)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= WR.notes(0)` |
| `$= WR.d(1)` | `$= WR.ev(1)` | `$= await WR.mind(1)` | `$= await WR.act(1)` | `$= await WR.res(1)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= WR.notes(1)` |
| `$= WR.d(2)` | `$= WR.ev(2)` | `$= await WR.mind(2)` | `$= await WR.act(2)` | `$= await WR.res(2)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= WR.notes(2)` |
| `$= WR.d(3)` | `$= WR.ev(3)` | `$= await WR.mind(3)` | `$= await WR.act(3)` | `$= await WR.res(3)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= WR.notes(3)` |
| `$= WR.d(4)` | `$= WR.ev(4)` | `$= await WR.mind(4)` | `$= await WR.act(4)` | `$= await WR.res(4)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= WR.notes(4)` |
| `$= WR.d(5)` | `$= WR.ev(5)` | `$= await WR.mind(5)` | `$= await WR.act(5)` | `$= await WR.res(5)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= WR.notes(5)` |
| `$= WR.d(6)` | `$= WR.ev(6)` | `$= await WR.mind(6)` | `$= await WR.act(6)` | `$= await WR.res(6)` | （新起 / 延续 / 调整 / 转折 / 收束 / 单独） | `$= WR.notes(6)` |
| 总结：本周到底干了什么——主线、最大的变化、可核对的结果、没解决的事、下周只做一件事。先压到 200 字，上限 2000 字。 |  |  |  |  |  |  |
<!-- gogoga-table: {"w":[88,190,null,null,null,120,150],"merge":["A9:G9"],"va":["middle"],"headerCol":true} -->

> 表内空白格表示与上一行同组（合并单元格，需 gogoga Table 插件）。最后一行是总结行，横向合并整行。

## 二、本周小结（补充说明，可选）

- **未解决**：（带到下周的问题）
- **下周重点**：① （…） ② （…） ③ （…）
- **德语**：练习次数 / 材料 / 反复错误 / 有无可核对数据

%%
【用法】
1. 文件名写成 W47.md；年号从文件夹 Diary/2026 取，取不到就用当年。
2. 7 个天槽固定，缺日记的那天写「暂无日记记录」，不会少行也不会多行，所以 merge 永远是 A9:G9。
3. 事件 ID 与备注状态词要手写。
4. 整行想手写就把那格的 WR 调用换成文字。
%%'''

MONTHLY = MONTHLY.replace("__ENGINE__", MONTHLY_ENGINE).replace("__N__", "MR")
WEEKLY = WEEKLY.replace("__ENGINE__", WEEKLY_ENGINE)
# 占位符错误：MONTHLY 里我误用 __N__，去掉
MONTHLY = MONTHLY.replace("__N__", "MR")

open(M_ONLY, "w", encoding="utf-8").write(MONTHLY)
open(W_ONLY, "w", encoding="utf-8").write(WEEKLY)
print("月报模板:", len(MONTHLY), "字符 ->", os.path.basename(M_ONLY))
print("周报模板:", len(WEEKLY), "字符 ->", os.path.basename(W_ONLY))
