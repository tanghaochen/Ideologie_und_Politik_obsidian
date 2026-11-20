const fs = require("fs"), path = require("path");
const ROOT = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长";
const AF = Object.getPrototypeOf(async function () {}).constructor;
const BT = String.fromCharCode(96), BS = String.fromCharCode(92), PIPE = String.fromCharCode(124), SENT = String.fromCharCode(1), ESC = BS + PIPE;

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
const dv = { io: { load: async p => fs.readFileSync(path.join(ROOT, p + ".md"), "utf8") }, page: p => ({ file: { path: p + ".md" } }) };

const load = f => { const t = fs.readFileSync(path.join(ROOT, f), "utf8"); return t.match(/<%([\s\S]*?)%>/)[1].replace(/^\*/, ""); };
const gen = (body, title, folder) => new AF("tp", "tR", "app", body + "\n;return tR;")({ file: { title, folder: () => folder } }, "", app);

async function runCell(code) {
  const clean = code.split(SENT).join(ESC).split(BT).join("");
  const m = clean.match(/(\$=[\s\S]*)/);
  if (!m) return code;
  try { return String(await new AF("dv", "app", m[1].slice(2))(dv, app)); }
  catch (e) { return "错误:" + e.message; }
}

async function audit(name, body, title, folder) {
  const out = await gen(body, title, folder);
  const lines = out.split("\n");
  const tbl = lines.filter(l => l.trim().startsWith(PIPE));
  const cells = tbl.map(l => l.split(ESC).join(SENT).split(PIPE).slice(1, -1).map(s => s.split(SENT).join(ESC).trim()));
  const dataRows = cells.length - 2;
  const cfg = JSON.parse(lines.find(l => l.includes("gogoga-table:")).match(/gogoga-table: (\{.*\})/)[1]);
  const maxRow = dataRows + 1, bad = [];
  for (const mv of cfg.merge) {
    const [a, b] = mv.split(":");
    const ca = a.match(/^([A-Z])(\d+)$/), cb = b.match(/^([A-Z])(\d+)$/);
    if (+ca[2] < 2 || +cb[2] > maxRow) bad.push("行越界:" + mv + " max=" + maxRow);
    const ci = ca[1].charCodeAt(0) - 65;
    if (!cells[+ca[2]] || !cells[+ca[2]][ci]) bad.push("左上为空:" + mv);
    for (let r = +ca[2] + 1; r <= +cb[2]; r++) if (cells[r] && cells[r][ci] !== "") bad.push("从属非空:" + ca[1] + r);
  }
  let jsBad = 0;
  for (const c of cells.slice(2)) for (const x of c) {
    const m = x.split(BT).join("").match(/(\$=[\s\S]*)/);
    if (!m) continue;
    try { new AF("dv", "app", m[1].slice(2)); } catch (e) { jsBad++; }
  }
  console.log(`\n【${name} ${title}】数据行=${dataRows} 列数=${[...new Set(cells.map(c => c.length))]} merge=${cfg.merge.join(" ")} $=语法错=${jsBad} ${bad.length ? "问题:" + JSON.stringify(bad) : ""}`);
  return { out, cells };
}

(async () => {
  const M = load("Diary/_Templates/月报模板.md");
  const W = load("Diary/_Templates/周报模板.md");

  const m1 = await audit("月报", M, "202611", "Diary/2026");
  console.log("--- 月报逐行（渲染后）---");
  for (const c of m1.cells.slice(2)) {
    console.log("●", (c[0] || "(同周)").padEnd(18), "|", c[1].slice(0, 40));
    console.log("    行动:", (await runCell(c[2])).slice(0, 70));
    console.log("    结果:", (await runCell(c[3])).slice(0, 70));
  }

  await audit("月报", M, "202609", "Diary/2026");
  await audit("月报", M, "无标题", "Diary/2026");

  const w1 = await audit("周报", W, "W47", "Diary/2026");
  console.log("--- 周报逐行（渲染后）---");
  for (const c of w1.cells.slice(2)) {
    console.log("●", (c[0] || "(同天)").padEnd(12), "|", c[1].slice(0, 34));
    console.log("    内心:", (await runCell(c[2])).slice(0, 60));
    console.log("    行动:", (await runCell(c[3])).slice(0, 60));
    console.log("    结果:", (await runCell(c[4])).slice(0, 60));
  }
  await audit("周报", W, "W40", "Diary/2026");
  await audit("周报", W, "2026-W45", "Diary/2026");
  await audit("周报", W, "W48", "Diary/2026");
})();
