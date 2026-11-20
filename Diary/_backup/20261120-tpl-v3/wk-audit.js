const fs = require("fs"), path = require("path");
const BASE = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长";
const AF = Object.getPrototypeOf(async function () {}).constructor;
const BS = String.fromCharCode(92);          // 反斜杠
const PIPE = String.fromCharCode(124);       // |
const SENT = String.fromCharCode(1);         // 占位符
const ESC = BS + PIPE;                       // 转义后的竖线

const body = fs.readFileSync(path.join(BASE, "Diary/_Templates/周报模板.md"), "utf8").match(/<%([\s\S]*?)%>/)[1].replace(/^\*/, "");

function walk(d, o) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) { if (!f.name.startsWith(".")) walk(p, o); }
    else if (f.name.endsWith(".md")) o.push(p);
  }
  return o;
}
const files = walk(BASE, []).map(p => ({
  path: path.relative(BASE, p).split(path.sep).join("/"),
  name: path.basename(p), basename: path.basename(p, ".md")
}));
const app = { vault: { getMarkdownFiles: () => files, adapter: { read: async p => fs.readFileSync(path.join(BASE, p), "utf8") } } };
const run = async (t, f) => new AF("tp", "tR", "app", body + "\n;return tR;")({ file: { title: t, folder: () => f } }, "", app);

const splitRow = l => l.split(ESC).join(SENT).split(PIPE).slice(1, -1).map(s => s.split(SENT).join(ESC).trim());

(async () => {
  for (const [t, f] of [["W47", "Diary/2026"], ["W40", "Diary/2026"], ["W41", "Diary/2026"], ["2026-W45", "Diary/2026"], ["W36", "Diary/2026"], ["20261116", "Diary/2026"]]) {
    const out = await run(t, f);
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
      if (!ca || !cb) { bad.push("格式:" + mv); continue; }
      if (+ca[2] < 2 || +cb[2] > maxRow) bad.push("行越界:" + mv + " max=" + maxRow);
      const ci = ca[1].charCodeAt(0) - 65;
      if (!cells[+ca[2]]) { bad.push("行不存在:" + mv); continue; }
      if (!cells[+ca[2]][ci]) bad.push("左上为空:" + mv);
      for (let r = +ca[2] + 1; r <= +cb[2]; r++) {
        if (!cells[r]) { bad.push("行缺:" + r); break; }
        if (cells[r][ci] !== "") bad.push("从属非空:" + ca[1] + r + "=" + cells[r][ci].slice(0, 20));
      }
    }
    console.log(`${t}(${f}): 数据行=${dataRows} 列数=${[...new Set(cells.map(c => c.length))]} merge=${cfg.merge.join(" ")} 问题=${bad.length ? JSON.stringify(bad) : "无"}`);
  }

  const out = await run("W47", "Diary/2026");
  const rows = out.split("\n").filter(l => l.trim().startsWith(PIPE)).slice(2, -1).map(splitRow);
  console.log("\n===== W47 逐行（行动 / 结果 各截 70 字）=====");
  for (const c of rows) console.log("•", (c[0] || "(合并)").padEnd(9), "|", c[1].slice(0, 24), "\n     行动:", c[3].slice(0, 70), "\n     结果:", c[4].slice(0, 70));
})();
