# {{YYYY}} 年 {{M}} 月月报（{{YYYYMM}}）

> **路径**：`Diary/{{YYYY}}/{{YYYYMM}}.md`（月报固定放这里）
>
> **覆盖**：**{{起}} ~ {{止}}**，涉及 ISO 第 {{…}} 周（只算本自然月实际覆盖的日期段）
>
> **数据来源**：引擎实时读 `Diary/{{YYYY}}` 下 `YYYYMMDD*.md` 的日记；不读周报、不读月报本身，不会自己统计自己
>
> **一行 = 一周**：周 / 事件 / 行动 / 结果 / 备注 / 笔记 六列全部由 `MRE.xxx("W36")` 这类内联调用现算。字数由引擎统一裁切（**格 150 字 / 一句 30 字 / 字段 50 字**），所以格子永远不会撑破表格；要看全文点「事件」列的链接跳到日记那一节。

## 月报说明

> 一眼看完整月：每行先给自动统计，细节点「事件」列的链接。

```dataviewjs
// ═══════════════════════════════════════════════════════════════
//  MRE · 月报格子引擎（本块不要删：下面每个 $= 都靠它）
//  · 只改顶部 CFG；格子里的调用形如  $= MRE.ev("W36")
//  · 字数限制沿用旧脚本：格 150 / 一句话 30 / 单条 50
// ═══════════════════════════════════════════════════════════════
const MRE = globalThis.MRE = (() => {

  // ─────────── ⚙️ 配置：只改这里 ───────────
  const CFG = {
    month: "",          // "" = 用本文件名（202609.md → 202609）；也可写死 "202609"
    folder: "Diary",    // Vault 内相对路径（Vault 根 = 政治思想文化成长）
    limCell: 150,       // 每格正文上限
    limLabel: 30,       // 事件一句话上限
    limField: 50,       // 单条字句上限（原脚本 MAX_FIELD = 50）
    limSum: 2000,       // 总结行上限
    topN: 3,            // 每格最多展示几条事件
    clipMonth: true,    // 日期范围自动裁到本自然月
    br: "<br>",
  };

  // ─────────── ✂️ 字数限制逻辑（唯一从旧脚本搬来的部分）───────────
  const SP = s => String(s ?? "").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  const cut = (s, n) => { const t = SP(s); return !t ? "" : (t.length > n ? t.slice(0, n) + "…" : t); };
  const clean = s => String(s ?? "")
    .replace(/%%[\s\S]*?%%/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\\\|/g, "|");

  // ─────────── 📥 解析一篇日记 → 事件数组 ───────────
  function parse(raw, date) {
    const out = [];
    for (const b of clean(raw).split(/^##\s*📌\s*/m).slice(1)) {
      const L = b.split("\n");
      const ev = { date, title: SP(L[0]), score: 0, tags: [], fields: {}, free: {} };
      let sec = "";
      for (const line of L.slice(1)) {
        const h = line.match(/^###\s*(.+)/);
        if (h) { sec = h[1].replace(/[^\u4e00-\u9fa5A-Za-z]/g, ""); continue; }
        const f = line.match(/^\s*-?\s*([\u4e00-\u9fa5A-Za-z]+)::\s*(.*)$/);
        if (f) {
          const k = f[1], v = SP(f[2]);
          if (!v) continue;
          if (k === "重要度") ev.score = Math.min(5, parseInt(v) || 0);
          else if (k === "主题") ev.tags = v.split(/[\s,，]+/).filter(t => t.startsWith("#"));
          else ev.fields[k] = ev.fields[k] ? ev.fields[k] + "；" + v : v;
          continue;
        }
        const t = line.trim();
        if (sec && t && !t.startsWith("#")) ev.free[sec] = (ev.free[sec] || "") + t + " ";
      }
      for (const k in ev.free) ev.free[k] = SP(ev.free[k]);
      out.push(ev);
    }
    return out;
  }

  // ─────────── 🗂 状态 ───────────
  const D = new Map();
  const state = { month: "", files: 0, evs: 0 };

  const month = dv => {
    let c = CFG.month;
    if (!c) { try { c = dv.current().file.name; } catch (e) { c = ""; } }
    const m = String(c ?? "").match(/(\d{6})/);
    return m ? m[1] : "";
  };

  function init(m) { D.clear(); state.month = m || ""; state.files = 0; state.evs = 0; }

  function add(name, raw) {
    const d = String(name).slice(0, 8);
    if (!/^\d{8}$/.test(d)) return;
    const evs = parse(raw, d);
    state.files++; state.evs += evs.length;
    if (!D.has(d)) D.set(d, []);
    D.get(d).push(...evs);
  }

  // ─────────── 🗓 日期工具 ───────────
  const ymd = d => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  function isoOf(s1) {
    const d = new Date(+s1.slice(0, 4), +s1.slice(4, 6) - 1, +s1.slice(6, 8));
    const u = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7));
    const y0 = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
    return Math.ceil(((u - y0) / 864e5 + 1) / 7);
  }

  // 范围：W36 / 01-06 / 0901-0906 / 20260901-20260906 / ("0901","0930")
  function bounds(a, b) {
    const M = state.month || "000000";
    const y = M.slice(0, 4), mm = M.slice(4, 6);
    let s1, s2;
    const raw = String(a ?? "").replace(/[~–—]/g, "-").trim();
    const w = raw.match(/^[Ww](\d{1,2})$/);
    if (w) {
      const j4 = new Date(Date.UTC(+y, 0, 4));
      const mon = new Date(Date.UTC(+y, 0, 4 - ((j4.getUTCDay() || 7) - 1) + (+w[1] - 1) * 7));
      s1 = ymd(new Date(mon.getUTCFullYear(), mon.getUTCMonth(), mon.getUTCDate()));
      s2 = ymd(new Date(mon.getUTCFullYear(), mon.getUTCMonth(), mon.getUTCDate() + 6));
    } else if (b !== undefined) { s1 = String(a); s2 = String(b); }
    else { const t = (raw || `${mm}01-${mm}31`).split("-"); s1 = t[0]; s2 = t[1] || t[0]; }
    const norm = x => {
      x = String(x).replace(/\D/g, "");
      if (x.length === 8) return x;
      if (x.length === 4) return y + x;
      if (x.length === 2) return `${y}${mm}${x}`;
      return x;
    };
    s1 = norm(s1); s2 = norm(s2);
    if (CFG.clipMonth && /^\d{6}$/.test(M)) {
      const first = M + "01";
      const last = M + String(new Date(+y, +mm, 0).getDate()).padStart(2, "0");
      if (s1 < first) s1 = first;
      if (s2 > last) s2 = last;
    }
    return [s1, s2];
  }

  const byDate = es => es.slice().sort((x, y) => (x.date < y.date ? -1 : x.date > y.date ? 1 : 0));
  const pickTop = (es, n) => byDate(es.slice().sort((x, y) => (y.score || 0) - (x.score || 0)).slice(0, n || CFG.topN));

  function events(a, b) {
    const [s1, s2] = bounds(a, b);
    const out = [];
    for (const [d, evs] of D) if (d >= s1 && d <= s2) out.push(...evs);
    return byDate(out);
  }

  const monthStat = () => {
    const M = state.month, r = { days: 0, evs: 0 };
    if (!/^\d{6}$/.test(M)) return r;
    for (const [d, es] of D) if (d.startsWith(M)) { r.days++; r.evs += es.length; }
    return r;
  };

  function hint() {
    if (!state.month) return "⟳ 待生成";
    if (!monthStat().days) return `⚠ 无日记（${CFG.folder}/${state.month.slice(0, 4)}）`;
    return "";
  }

  // ─────────── 🧩 格子 API ───────────
  function wk(a, b) {
    const [s1, s2] = bounds(a, b);
    return `${s1.slice(4, 6)}/${s1.slice(6, 8)}~${s2.slice(4, 6)}/${s2.slice(6, 8)} · W${isoOf(s1)}`;
  }

  function ev(a, b, n) {
    const h = hint(); if (h) return h;
    const es = events(a, b);
    if (!es.length) return "整周无日记";
    const chosen = pickTop(es, n);
    const more = es.length - chosen.length;
    return chosen.map(e => `[[${e.date}#📌 ${e.title}|${cut(e.title, CFG.limLabel)}]]${e.score ? " ★" + e.score : ""}`)
      .join(CFG.br) + (more > 0 ? `${CFG.br}…另 ${more} 条` : "");
  }

  function act(a, b, n) {
    const h = hint(); if (h) return h;
    const es = pickTop(events(a, b), n);
    if (!es.length) return "暂无记录";
    const parts = [], used = new Set();
    for (const e of es) {
      let t = e.free["计划"], src = "";
      if (!t && e.fields["改进"]) { t = e.fields["改进"]; src = "改进｜"; }
      if (!t && e.free["简述"]) { t = e.free["简述"]; src = "简述｜"; }
      if (!t) continue;
      parts.push((used.has(src) ? "" : src) + cut(t, CFG.limField));
      used.add(src);
    }
    return cut(parts.join("；") || "暂无记录", CFG.limCell);
  }

  function res(a, b, n) {
    const h = hint(); if (h) return h;
    const es = pickTop(events(a, b), n);
    if (!es.length) return "暂无记录";
    const buf = [];
    let fallback = false;
    for (const e of es) {
      const txt = e.free["简述"] || "";
      const hit = txt.split(/[。；;!?！？\n]/).map(SP).filter(s => s && /\d/.test(s)).slice(0, 2);
      if (hit.length) buf.push(...hit.map(s => cut(s, CFG.limField)));
      else if (txt) { buf.push((fallback ? "" : "简述｜") + cut(txt, CFG.limField)); fallback = true; }
    }
    return cut(buf.join("；") || "尚无结果", CFG.limCell);
  }

  function stat(a, b) {
    const h = hint(); if (h) return h;
    const es = events(a, b);
    if (!es.length) return "—";
    const n = es.length;
    const c = k => es.filter(e => (e.fields[k] || "").trim()).length;
    const noPlan = es.filter(e => !(e.free["计划"] || "").trim()).length;
    const avg = (es.reduce((s, e) => s + (e.score || 0), 0) / n).toFixed(1);
    const tag = {};
    es.forEach(e => e.tags.forEach(t => (tag[t] = (tag[t] || 0) + 1)));
    const tg = Object.entries(tag).sort((x, y) => y[1] - x[1]).slice(0, 3).map(([t, v]) => `${t}×${v}`).join(" ");
    return `★均${avg} · 📌×${n} · 洞察${c("洞察")} · 改进${c("改进")} · 空计划${noPlan}` + (tg ? CFG.br + tg : "");
  }

  function notes(a, b) {
    const h = hint(); if (h) return h;
    const es = events(a, b);
    if (!es.length) return "—";
    const m = new Map();
    es.forEach(e => { if (!m.has(e.date)) m.set(e.date, []); m.get(e.date).push(e); });
    return [...m.keys()].sort().map(d => {
      const g = m.get(d);
      const tg = [...new Set(g.flatMap(e => e.tags))].join(" ");
      const mx = Math.max(...g.map(e => e.score || 0));
      return `[[${d}]] · ★${mx}${tg ? " " + tg : ""} · 📌×${g.length}`;
    }).join(CFG.br);
  }

  function sum(a, b) {
    const h = hint(); if (h) return h;
    const [s1, s2] = bounds(a, b);
    const es = events(a, b);
    const n = es.length;
    const c = k => es.filter(e => (e.fields[k] || "").trim()).length;
    const avg = n ? (es.reduce((s, e) => s + (e.score || 0), 0) / n).toFixed(1) : "—";
    const withNum = es.filter(e => /\d/.test(e.free["简述"] || "")).length;
    const noPlan = es.filter(e => !(e.free["计划"] || "").trim()).length;
    const tag = {};
    es.forEach(e => e.tags.forEach(t => (tag[t] = (tag[t] || 0) + 1)));
    const tg = Object.entries(tag).sort((x, y) => y[1] - x[1]).slice(0, 4).map(([t, v]) => `${t}×${v}`).join(" ");
    let days = 0;
    for (const d of D.keys()) if (d >= s1 && d <= s2) days++;
    const span = Math.round((new Date(+s2.slice(0, 4), +s2.slice(4, 6) - 1, +s2.slice(6, 8))
      - new Date(+s1.slice(0, 4), +s1.slice(4, 6) - 1, +s1.slice(6, 8))) / 864e5) + 1;
    return cut(`自动统计 · 📌×${n} · ★均${avg} · 有数字的简述 ${withNum}/${n} · 洞察${c("洞察")} · 改进${c("改进")}`
      + ` · 空计划${noPlan} · 日记 ${days} 天 / 缺 ${span - days} 天` + (tg ? ` · 主题 ${tg}` : ""), CFG.limSum);
  }

  function status() {
    if (!state.month) return "⛔ 月份未识别：把本文件命名为 YYYYMM.md，或在引擎块里写 CFG.month = \"202609\"";
    const m = monthStat();
    return `✅ 月份 ${state.month} · 本月日记 ${m.days} 篇 · 事件 ${m.evs} 条 · 本月涉及 ISO 周：${weekList()}`;
  }

  function weekList() {
    const M = state.month; if (!/^\d{6}$/.test(M)) return "—";
    const y = +M.slice(0, 4), mm = +M.slice(4, 6);
    const last = new Date(y, mm, 0);
    let d = new Date(y, mm - 1, 1);
    d.setDate(d.getDate() - ((d.getDay() || 7) - 1));
    const out = [];
    while (d <= last) { out.push("W" + isoOf(ymd(d))); d.setDate(d.getDate() + 7); }
    return [...new Set(out)].join(" ");
  }

  return { CFG, parse, month, init, add, bounds, events, wk, ev, act, res, stat, notes, sum, status, weekList, cut, state, D };
})();


// ── 载入本月日记：异步只发生在这里，格子里的调用全是同步的 ──
MRE.init(MRE.month(dv));
if (MRE.state.month) {
  for (const p of dv.pages(`"${MRE.CFG.folder}/${MRE.state.month.slice(0, 4)}"`)
      .where(x => /^\d{8}/.test(x.file.name))) {
    try { MRE.add(p.file.name, await dv.io.load(p.file.path)); } catch (e) {}
  }
}
// 这块代码本身不占版面
this.container.style.display = "none";
```

| 周 | 事件（一句话） | 行动 | 结果 | 备注 | 笔记 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 第1周 `$= MRE.wk("W36")` | `$= MRE.ev("W36")` | `$= MRE.act("W36")` | `$= MRE.res("W36")` | {{状态}} · `$= MRE.stat("W36")` | `$= MRE.notes("W36")` |
| 第2周 `$= MRE.wk("W37")` | `$= MRE.ev("W37")` | `$= MRE.act("W37")` | `$= MRE.res("W37")` | {{状态}} · `$= MRE.stat("W37")` | `$= MRE.notes("W37")` |
| 第3周 `$= MRE.wk("W38")` | `$= MRE.ev("W38")` | `$= MRE.act("W38")` | `$= MRE.res("W38")` | {{状态}} · `$= MRE.stat("W38")` | `$= MRE.notes("W38")` |
| 第4周 `$= MRE.wk("W39")` | `$= MRE.ev("W39")` | `$= MRE.act("W39")` | `$= MRE.res("W39")` | {{状态}} · `$= MRE.stat("W39")` | `$= MRE.notes("W39")` |
| 第5周 `$= MRE.wk("W40")` | `$= MRE.ev("W40")` | `$= MRE.act("W40")` | `$= MRE.res("W40")` | {{状态}} · `$= MRE.stat("W40")` | `$= MRE.notes("W40")` |
| 总结：{{这个月真正发生了什么——几条主线的走向、可核对的结果、最稳定的模式、最大的卡点、下月只做一件事。300–500 字，上限 2000。}}<br>`$= MRE.sum()` |  |  |  |  |  |
<!-- gogoga-table: {"w":[120,190,null,null,110,150],"merge":["A7:F7"],"va":["middle"],"headerCol":true} -->

> 表内除「总结」行横向合并整行外，不做纵向合并——**一行就是一周**。若某周要拆成多行，见文末用法第 4 条，合并坐标必须同步重算。

## 二、本月结论（补充说明，可选）

- **必须带走的一件事**：（做法层面，一句）
- **下月只做一件事**：（行动层面，一句）

## 附：引擎自检（模板自用，套用后请删除本节）

```dataviewjs
dv.paragraph("**MRE**｜" + (globalThis.MRE ? MRE.status() : "⛔ 引擎未加载：本文件上方缺少 MRE 代码块"));
if (globalThis.MRE && MRE.state.month) {
  const ws = MRE.weekList().split(" ").filter(Boolean);
  dv.paragraph("**每周事件数**｜" + ws.map(w => `${w}：${MRE.events(w).length} 条`).join("　"));
  dv.paragraph("**缺日记的周**｜" + ws.map(w => `${w}：${MRE.events(w).length ? "有" : "整周空"}`).join("　"));
}
```

%%
【模板使用说明 · 新建报告后请删除本节】

1. **复制到** `Diary/{{YYYY}}/{{YYYYMM}}.md`，改标题和路径行。文件名必须是 `YYYYMM.md`——引擎靠它判断月份；否则每格显示「⟳ 待生成」。
2. **换周号**：模板里是 `W36`…`W40`（9 月的示例）。打开上面的自检块，看「本月涉及 ISO 周」，把 5 行里的 `W36/W37/…` 全部替换成当月实际的周号；行数按实际周数增减（4～6 行）。
3. **每格代码对照**（括号里传同一个周号，也可传 `"0901-0906"` 或 `"20260901-20260906"` 这样的日期段）：
   - 周 `MRE.wk("W36")` → `09/01~09/06 · W36`
   - 事件 `MRE.ev("W36")` → 重要度最高的 3 条 `[[日期#📌 标题|一句话]]`，多出来的显示「…另 N 条」
   - 行动 `MRE.act("W36")` → 🎯计划 正文；计划为空就退回「改进｜」「简述｜」并标出来源（**标了来源就不是他做过的事**）
   - 结果 `MRE.res("W36")` → 📝简述里**带数字的句子**（可核对点）；一句都没有时退回「简述｜」
   - 备注 `MRE.stat("W36")` → `★均/📌×n/洞察/改进/空计划` + 主题计数，用来核对有没有漏事件
   - 笔记 `MRE.notes("W36")` → `[[日期]] · ★N #主题 · 📌×n`
4. **一周要拆多行**：复制该行，把两行的范围换成具体日期段（如 `MRE.ev("0928-0930")` / `MRE.ev("1001-1004")`），再给 A 列补 `A2:A3` 这样的纵向合并。**行数一变，`merge` 全部重算**，否则合并会安静地错位。
5. **事件 ID 不会被自动生成**：日记里没有 `event-YYYY-NNN`。要挂事件链，就把 `event-2026-005<br>` 手写在事件格代码**前面**（静态锚点 + 自动内容共存）。
6. **状态词手写**：`{{状态}}` 只能人工判断，六选一：新起 / 延续 / 调整 / 转折 / 收束 / 单独。
7. **字数在三处改**：引擎块顶部 `CFG.limCell`（每格 150）、`limLabel`（事件一句话 30）、`limField`（单条 50）；`CFG.topN` 控制每格列几条事件。
8. **单元格里绝不能出现裸 `|`**：会把表拆成两列。要写竖线就写 `\|`（在 JS 字符串里 `\|` 就是 `|`，两边都对）。
9. **合并注释三件事**：紧贴表格最后一行、中间不许空行；必须单行、JSON 合法；坐标随行数重算（第 1 行是表头，`---` 不计行号）。
10. **`## 月报说明` 这个标题不要改**——年报 Excalidraw 按它嵌入本表；表下那行说明也别删。
11. **引擎不统计自己**：只认 `Diary/{{YYYY}}` 下 `^\d{8}` 开头的日记，`W*.md`、`M*.md`、`YYYYMM.md`、模板都不会被读进来。
12. **换了月份要重跑**：改完文件名/周号后，切到阅读视图看一眼；仍是「⟳ 待生成」就说明文件名不是 `YYYYMM` 或引擎块没加载。
13. **被嵌入时（Excalidraw / 年报）**：嵌入环境里 `dv.current()` 可能拿不到本文件名，格子会显示「⟳ 待生成」——此时把引擎块顶部 `CFG.month` 写死成 `"202609"` 即可。注意：同一画布嵌入多个月报时，各文件的引擎块会互相覆盖同一个 `globalThis.MRE`，有串月风险，这一块留到年报阶段解决（现在一次只嵌一个月）。
14. **哪格想手写就删哪格的代码**：把 `$= MRE.xxx("W39")` 直接换成文字即可，其余格子不受影响；事件 ID、状态词就是这么加进去的。
%%
