const fs = require("fs"), path = require("path");
const ROOT = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长";
const AF = Object.getPrototypeOf(async function () {}).constructor;
const BT = String.fromCharCode(96), BS = String.fromCharCode(92), PIPE = String.fromCharCode(124), SENT = String.fromCharCode(1), ESC = BS + PIPE;

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
const files = walk(ROOT, []).map(p => ({ path: path.relative(ROOT, p).split(path.sep).join("/"), basename: path.basename(p, ".md") }));
const app = { vault: { getMarkdownFiles: () => files, adapter: { read: async p => fs.readFileSync(path.join(ROOT, p), "utf8") } } };

const dv = {
  io: { load: async p => fs.readFileSync(path.join(ROOT, p + ".md"), "utf8") },
  page: p => ({ file: { path: p + ".md" } })
};

async function runCell(code) {
  const m = code.match(/(\$=[\s\S]*)/);
  if (!m) return code;
  try { return String(await new AF("dv", "app", m[1].slice(2))(dv, app)); }
  catch (e) { return "错误: " + e.message; }
}

(async () => {
  const out = await new AF("tp", "tR", "app", body + "\n;return tR;")({ file: { title: "202611", folder: () => "Diary/2026" } }, "", app);
  const rows = out.split("\n").filter(l => l.trim().startsWith(PIPE)).slice(2, -1)
    .map(l => l.split(ESC).join(SENT).split(PIPE).slice(1, -1).map(s => s.split(SENT).join(ESC).trim()));

  for (const r of rows) {
    const cells = r.map(c => c.split(BT).join(""));
    const ev = cells[1].replace(/^\[\[([^#\]]+)#📌 (.*?)\\?\|.*$/, "$1 ｜ $2").slice(0, 50);
    console.log("●", (cells[0] || "(同周)").padEnd(18), "|", ev);
    console.log("   行动:", (await runCell(cells[2])).slice(0, 90));
    console.log("   结果:", (await runCell(cells[3])).slice(0, 90));
    console.log("   笔记:", (await runCell(cells[4])).slice(0, 70));
  }
})();
