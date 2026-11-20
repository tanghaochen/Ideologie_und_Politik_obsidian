// 复现用户的问题：先在 202610 里跑过引擎，再在 202611 里渲染格子，看会不会串月
const fs = require("fs"), path = require("path");
const ROOT = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长";
const AF = Object.getPrototypeOf(async function () {}).constructor;

function walk(d, o) { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) { if (!f.name.startsWith(".")) walk(p, o); } else if (f.name.endsWith(".md")) o.push(p); } return o; }
const files = walk(ROOT, []).map(p => ({ path: path.relative(ROOT, p).split(path.sep).join("/"), basename: path.basename(p, ".md") }));
const contents = new Map(files.map(f => [f.path, fs.readFileSync(path.join(ROOT, f.path), "utf8")]));
const cache = new Map();
const getFileCache = f => { if (!cache.has(f.path)) { const raw = contents.get(f.path) || ""; const hs = []; let m; const re = /^(#{1,6})\s+(.+)$/gm; while ((m = re.exec(raw))) hs.push({ level: m[1].length, heading: m[2].trim() }); cache.set(f.path, { headings: hs }); } return cache.get(f.path); };
const app = { vault: { getMarkdownFiles: () => files }, metadataCache: { getFileCache }, workspace: { getActiveFile: () => null } };
const mkDv = (name, pth) => ({
  current: () => ({ file: { name, path: pth } }),
  io: { load: async p => contents.get(p) },
  page: p => { const f = files.find(x => x.path === p + ".md"); if (!f) return null; const raw = contents.get(f.path) || ""; const s = (raw.match(/^- 重要度::\s*(\S+)/m) || [])[1] || ""; const t = (raw.match(/^- 主题::\s*(.+)$/m) || [])[1] || ""; return { file: { path: f.path }, "重要度": s ? Number(s) || s : null, "主题": t || null }; }
});

(async () => {
  const md = fs.readFileSync(path.join(ROOT, "Diary/_Templates/月报模板.md"), "utf8");
  const engine = md.match(/```dataviewjs\r?\n([\s\S]*?)\r?\n```/)[1];

  // ① 先在 202610 这个「文件」里跑引擎（模拟你之前开过 10 月）
  await new AF("dv", "app", engine).call({ container: { style: {} } }, mkDv("202610", "Diary/2026/202610.md"), app);
  console.log("① 引擎先在 202610 的上下文里执行");

  // ② 再用 202611 的 dv 渲染格子（注意：没有再跑引擎）
  const dvNov = mkDv("202611", "Diary/2026/202611.md");
  for (const [expr, label] of [["MRF(dv).head()", "标题"], ["MRF(dv).path()", "路径"], ["MRF(dv).wk(0)", "第1周"], ["MRF(dv).wk(3)", "第4周"], ["MRF(dv).notes(3)", "第4周笔记"]]) {
    const v = await new AF("dv", "app", "return (" + expr + ")")(dvNov, app);
    console.log("  " + label + ":", String(v).slice(0, 90));
  }

  // ③ 反向：再回到 202610 的 dv
  const dvOct = mkDv("202610", "Diary/2026/202610.md");
  console.log("  回到 202610:", String(await new AF("dv", "app", "return (MRF(dv).head())")(dvOct, app)));
})();
