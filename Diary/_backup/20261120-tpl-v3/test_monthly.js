const fs = require("fs"), path = require("path");
const ROOT = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长";
const BT = String.fromCharCode(96);
const raw = fs.readFileSync(path.join(ROOT, "Diary/_Templates/月报模板.md"), "utf8");
const blocks = [...raw.matchAll(/<%([\s\S]*?)%>/g)].map(m => m[1].replace(/^\*/, ""));
console.log("Templater 块数:", blocks.length);

const run = (b, title) => new Function("tp", "tR", b + "\n;return tR;")({ file: { title } }, "");

for (const title of ["202611", "202609", "202702", "无标题"]) {
  const head = run(blocks[0], title);
  const tail = run(blocks[1], title);
  const lines = tail.split("\n").filter(l => l.trim().startsWith("|"));
  const dataRows = lines.length - 2;
  const cfg = JSON.parse(tail.split("\n").find(l => l.includes("gogoga-table:")).match(/gogoga-table: (\{.*\})/)[1]);
  const maxRow = dataRows + 1;
  let bad = [];
  for (const mv of cfg.merge) {
    const [a, b] = mv.split(":");
    const ca = a.match(/^([A-Z])(\d+)$/), cb = b.match(/^([A-Z])(\d+)$/);
    if (+cb[2] > maxRow) bad.push("越界:" + mv + " max=" + maxRow);
    if (cb[1].charCodeAt(0) - 65 > 5) bad.push("列越界:" + mv);
  }
  const wk = [...tail.matchAll(/MRE\.wk\("(W\d+)"\)/g)].map(m => m[1]);
  console.log(`${title}: 数据行=${dataRows} 周=${wk.join(",")} 列数=${[...new Set(lines.map(l => l.split("|").length - 2))]} merge=${cfg.merge.join(" ")} ${bad.length ? "问题:" + bad : "OK"}`);
  if (title === "202611") { console.log("--- 头部 ---\n" + head + "\n--- 表格 ---\n" + lines.join("\n")); }
}
