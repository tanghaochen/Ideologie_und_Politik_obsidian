const fs = require("fs"), path = require("path");
const ROOT = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长";
const AF = Object.getPrototypeOf(async function () {}).constructor;

function walk(d, o) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) { if (!f.name.startsWith(".")) walk(p, o); }
    else if (f.name.endsWith(".md")) o.push(p);
  }
  return o;
}
const abs = walk(ROOT, []);
const files = abs.map(p => ({ path: path.relative(ROOT, p).split(path.sep).join("/"), basename: path.basename(p, ".md") }));
const contents = new Map(files.map(f => [f.path, fs.readFileSync(path.join(ROOT, f.path), "utf8")]));

// 简易 metadataCache：从文件里抓二级标题
const cache = new Map();
const getFileCache = f => {
  if (!cache.has(f.path)) {
    const raw = contents.get(f.path) || "";
    const body = raw.replace(/^---\n[\s\S]*?\n---/, "");
    const headings = [];
    let m;
    const re = /^(#{1,6})\s+(.+)$/gm;
    while ((m = re.exec(body))) headings.push({ level: m[1].length, heading: m[2].trim() });
    cache.set(f.path, { headings });
  }
  return cache.get(f.path);
};
const app = { vault: { getMarkdownFiles: () => files }, metadataCache: { getFileCache } };

const mkDv = (name, pth) => {
  const self = {
    current: () => ({ file: { name, path: pth } }),
    io: { load: async p => contents.get(p) || fs.readFileSync(path.join(ROOT, p), "utf8") },
    page: p => {
      const f = files.find(x => x.path === p + ".md");
      if (!f) return null;
      const raw = contents.get(f.path) || "";
      const score = (raw.match(/^- 重要度::\s*(\S+)/m) || [])[1] || "";
      const tags = (raw.match(/^- 主题::\s*(.+)$/m) || [])[1] || "";
      return { file: { path: f.path }, "重要度": score ? Number(score) || score : null, "主题": tags || null };
    }
  };
  return self;
};

async function render(file, name, pth) {
  const md = fs.readFileSync(path.join(ROOT, file), "utf8");
  const engine = md.match(/```dataviewjs\r?\n([\s\S]*?)\r?\n```/)[1];
  const dv = mkDv(name, pth);
  // 1) 跑引擎块（里面有 this.container）
  await new AF("dv", "app", engine).call({ container: { style: {} } }, dv, app);
  // 2) 按顺序跑所有 $= 表达式
  const cells = [...md.matchAll(/`(\$=[^`]*)`/g)].map(m => m[1].slice(2));
  const out = [];
  for (const expr of cells) {
    try { out.push(String(await new AF("dv", "app", "return (" + expr + ")")(dv, app))); }
    catch (e) { out.push("❗" + e.message); }
  }
  return out;
}

(async () => {
  for (const [f, n, p] of [
    ["Diary/_Templates/月报模板.md", "202611", "Diary/2026/202611.md"],
    ["Diary/_Templates/月报模板.md", "2026-09", "Diary/2026/2026-09.md"],
    ["Diary/_Templates/月报模板.md", "2026年03月月报", "Diary/2026/2026年03月月报.md"],
    ["Diary/_Templates/月报模板.md", "11月月报", "Diary/2026/11月月报.md"],
    ["Diary/_Templates/月报模板.md", "月报", "Diary/2026/月报.md"]
  ]) {
    const out = await render(f, n, p);
    console.log("\n════ 月报 " + n + " ════");
    out.forEach((s, i) => console.log(" ", String(i).padStart(2), "|", s.slice(0, 110).split("\n").join(" ⏎ ")));
  }
  for (const [n, p] of [["2026-W45", "Diary/2026/2026-W45.md"], ["周报", "Diary/2026/周报.md"], ["20261119", "Diary/2026/20261119.md"]]) {
    const out = await render("Diary/_Templates/周报模板.md", n, p);
    console.log("\n════ 周报 " + n + " ════");
    out.forEach((s, i) => console.log(" ", String(i).padStart(2), "|", s.slice(0, 110).split("\n").join(" ⏎ ")));
  }
})();
