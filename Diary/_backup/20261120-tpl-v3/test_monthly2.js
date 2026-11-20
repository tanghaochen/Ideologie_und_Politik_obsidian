const fs = require("fs"), path = require("path");
const ROOT = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长";
const AF = Object.getPrototypeOf(async function () {}).constructor;
const BS = String.fromCharCode(92), PIPE = String.fromCharCode(124), SENT = String.fromCharCode(1), ESC = BS + PIPE;

const tpl = fs.readFileSync(path.join(ROOT, "Diary/_Templates/月报模板.md"), "utf8");
const body = tpl.match(/<%([\s\S]*?)%>/)[1].replace(/^\*/, "");

function walk(d, o) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) { if (!f.name.startsWith(".")) walk(p, o); }
    else if (f.name.endsWith(".md")) o.push(p);
  }
  return o;
}
const files = walk(ROOT, []).map(p => ({ path: path.relative(ROOT, p).split(path.sep).join("/"), name: path.basename(p), basename: path.basename(p, ".md") }));
const app = { vault: { getMarkdownFiles: () => files, adapter: { read: async p => fs.readFileSync(path.join(ROOT, p), "utf8") } } };
const run = (title) => new AF("tp", "tR", "app", body + "\n;return tR;")({ file: { title, folder: () => "Diary/2026" } }, "", app);

const splitRow = l => l.split(ESC).join(SENT).split(PIPE).slice(1, -1).map(s => s.split(SENT).join(ESC).trim());

(async () => {
  for (const t of ["202611", "202609", "202703", "无标题"]) {
    const out = await run(t);
    const lines = out.split("\n");
    const tbl = lines.filter(l => l.trim().startsWith(PIPE));
    const cells = tbl.map(splitRow);
    const dataRows = cells.length - 2;
    const cfg = JSON.parse(lines.find(l => l.includes("gogoga-table:")).match(/gogoga-table: (\{.*\})/)[1]);
    const maxRow = dataRows + 1;
    const bad = [];
    for (const mv of cfg.merge) {
      const [a, b] = mv.split(":");
      const ca = a.match(/^([A-Z])(\d+)$/), cb = b.match(/^([A-Z])(\d+)$/);
      if (+ca[2] < 2 || +cb[2] > maxRow) bad.push("行越界:" + mv + " max=" + maxRow);
      const ci = ca[1].charCodeAt(0) - 65;
      if (!cells[+ca[2]] || !cells[+ca[2]][ci]) bad.push("左上为空:" + mv);
      for (let r = +ca[2] + 1; r <= +cb[2]; r++) if (cells[r] && cells[r][ci] !== "") bad.push("从属非空:" + ca[1] + r);
    }
    // $= 代码语法检查
    let jsBad = 0;
    for (const c of cells.slice(2)) for (const x of c) {
      const clean = x.split(String.fromCharCode(96)).join("");
      const m = clean.match(/(\$\=[\s\S]*)/);
      if (!m) continue;
      try { new AF("dv", "app", m[1].slice(2)); } catch (e) { jsBad++; console.log("  语法错:", e.message, "→", m[1].slice(0, 70)); }
    }
    console.log(`${t}: 数据行=${dataRows} 列数=${[...new Set(cells.map(c => c.length))]} merge=${cfg.merge.join(" ")} $=语法错=${jsBad} ${bad.length ? "问题:" + JSON.stringify(bad) : "OK"}`);
    if (t === "202611") {
      console.log("\n--- 前 6 个数据行（周 / 事件 / 行动片段首 40 字 / 结果片段首 40 字）---");
      for (const c of cells.slice(2, 12)) {
        const act = (c[2].match(/Diary\/\d+\/(\d{8})/) || [])[1];
        const idx = (c[2].match(/slice\(1\)\[(\d+)\]/) || [])[1];
        console.log("•", (c[0] || "(合并)").padEnd(20), "|", c[1].slice(0, 34), "| 抓:", act, "idx", idx, "|", c[2].slice(0, 42));
      }
      console.log("\n--- 尾部 ---\n" + lines.slice(-8).join("\n"));
    }
  }
})();
