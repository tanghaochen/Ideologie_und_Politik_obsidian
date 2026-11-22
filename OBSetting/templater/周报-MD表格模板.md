<%*
// 若尚未重启 Obsidian，插入模板时顺手启动一次引擎
if (typeof window.WR !== "function") {
  const ef = app.vault.getAbstractFileByPath("OBSetting/templater/启动-周报引擎.md");
  if (ef) {
    const raw = await app.vault.cachedRead(ef);
    const code = raw.replace(/^\s*<%\*[\r\n]*/, "").replace(/[\r\n]*%>\s*$/, "");
    Function(code)();
  }
}

const p2 = n => String(n).padStart(2, "0");
const fmtMD = d => `${p2(d.getMonth() + 1)}/${p2(d.getDate())}`;
const fmtYMD = d => `${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}`;
const fmtDash = d => `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
const DAYS = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

const isoWeekInfo = d => {
  const u = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  u.setUTCDate(u.getUTCDate() + 4 - (u.getUTCDay() || 7));
  const isoYear = u.getUTCFullYear();
  const z = new Date(Date.UTC(isoYear, 0, 1));
  return { year: isoYear, week: Math.ceil(((u - z) / 864e5 + 1) / 7) };
};

const title = String(tp.file.title || "");
const fullPath = String(tp.file.path(true) || "");
const probe = `${title} ${fullPath}`;
const yHit = probe.match(/Diary\/(\d{4})\//) || probe.match(/(20\d{2})/);
let Y = yHit ? +yHit[1] : isoWeekInfo(new Date()).year;
let WK = 0;

const mW = probe.match(/(?:^|[^A-Za-z])[Ww](\d{1,2})(?!\d)/);
const m8 = probe.match(/(20\d{2})\D?(\d{2})\D?(\d{2})(?!\d)/);
if (mW) {
  WK = +mW[1];
} else if (m8) {
  const info = isoWeekInfo(new Date(+m8[1], +m8[2] - 1, +m8[3]));
  Y = info.year;
  WK = info.week;
}
if (!(WK >= 1 && WK <= 53)) {
  const nowInfo = isoWeekInfo(new Date());
  Y = nowInfo.year;
  WK = nowInfo.week;
}

const jan4 = new Date(Y, 0, 4);
const MON = new Date(jan4.getTime());
MON.setDate(jan4.getDate() - ((jan4.getDay() || 7) - 1) + (WK - 1) * 7);
MON.setHours(0, 0, 0, 0);
const dayOf = i => { const d = new Date(MON.getTime()); d.setDate(d.getDate() + i); return d; };
const SUN = dayOf(6);

const allMd = app.vault.getMarkdownFiles();
const findDiary = dObj => {
  const d8 = fmtYMD(dObj);
  const prefix = `Diary/${dObj.getFullYear()}/`;
  return (
    allMd.find(f => f.path.startsWith(prefix) && f.basename === d8) ||
    allMd.find(f => f.path.startsWith(prefix) && f.basename.startsWith(d8)) ||
    null
  );
};

const BT = String.fromCharCode(96);
const cell = (kind, i, k) => `${BT}$= WR(dv,'${kind}',${i},${k})${BT}`;

let body = "";
const merges = [];
let rowNo = 1;

for (let i = 0; i < 7; i++) {
  const dObj = dayOf(i);
  const f = findDiary(dObj);
  let n = 1;
  if (f) {
    const raw = (await app.vault.cachedRead(f))
      .replace(/\r\n?/g, "\n")
      .replace(/%%[\s\S]*?%%/g, "");
    n = Math.max(1, raw.split(/^##[ \t]*📌[ \t]*/m).slice(1).length);
  }
  const start = rowNo + 1;
  for (let k = 0; k < n; k++) {
    rowNo++;
    const colA = k === 0 ? `${DAYS[i]} ${fmtMD(dObj)}` : "";
    body += `| ${colA} | ${cell("ev", i, k)} | ${cell("mind", i, k)} | ${cell("act", i, k)} | ${cell("res", i, k)} |  | ${cell("notes", i, k)} |\n`;
  }
  if (n > 1) merges.push(`A${start}:A${rowNo}`);
}

const sumRow = rowNo + 1;
merges.push(`A${sumRow}:G${sumRow}`);

const spanTitle = `${fmtDash(MON)} ~ ${
  SUN.getFullYear() === MON.getFullYear() ? fmtMD(SUN).replace("/", "-") : fmtDash(SUN)
}`;

const gogoga = JSON.stringify({
  w: [88, 190, null, null, null, 120, 150],
  merge: merges,
  va: ["middle"],
  headerCol: true,
});

let S = "";
S += `# W${WK} · ${spanTitle}（ISO 第 ${WK} 周）\n\n`;
S += `> 周期：**${fmtDash(MON)}（周一）～ ${fmtDash(SUN)}（周日）**\n`;
S += `> 覆盖：${BT}$= WR(dv,'cover')${BT}\n\n`;
S += `| 日期 | 事件（一句话，链到日记那一条） | 内心 | 行动 | 结果 | 备注 | 笔记 |\n`;
S += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;
S += body;
S += `| 总结：（主线 / 最大变化 / 可核对的结果 / 没解决的事 / 下周只做一件事） |  |  |  |  |  |  |\n`;
S += `<!-- gogoga-table: ${gogoga} -->\n\n`;
S += `> 表内空白格表示与上一行同组（合并单元格，需 gogoga Table 插件）。最后一行是总结行，横向合并整行。\n`;

tR += S;
%>