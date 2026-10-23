const fs = require("fs");

const OUT = "E:/obsidianData/obsidianNote-master/obsidianNote-master/政治思想文化成长/_AI-Diagrams/简单逻辑学-全书逻辑图谱.excalidraw";

const C = {
  blueBg: "#e7f5ff",
  blueLight: "#d0ebff",
  blueBorder: "#a5d8ff",
  blue: "#1971c2",
  greenBg: "#d3f9d8",
  greenLight: "#b2f2bb",
  green: "#2f9e44",
  redBg: "#fff5f5",
  redLight: "#ffe3e3",
  redBorder: "#ffc9c9",
  red: "#e03131",
  yellow: "#ffd43b",
  yellowLine: "#f08c00",
  grayBg: "#f1f3f5",
  grayBorder: "#dee2e6",
  gray: "#868e96",
  ink: "#1e1e1e",
  sub: "#495057"
};

let elements = [];
let seq = 0;
let seed = 1000;

function nid(prefix) {
  seq += 1;
  return `${prefix}-${seq}`;
}

function ns() {
  seed += 7;
  return seed;
}

function el(type, o) {
  const id = o.id || nid(o.prefix || type);
  const e = {
    id,
    type,
    x: o.x,
    y: o.y,
    width: o.width,
    height: o.height,
    angle: 0,
    strokeColor: o.strokeColor || C.ink,
    backgroundColor: o.backgroundColor || "transparent",
    fillStyle: "solid",
    strokeWidth: o.strokeWidth === undefined ? 2 : o.strokeWidth,
    strokeStyle: o.strokeStyle || "solid",
    roughness: 0,
    opacity: 100,
    groupIds: [],
    frameId: null,
    roundness:
      o.roundness === undefined
        ? type === "rectangle"
          ? { type: 3 }
          : type === "ellipse" || type === "text"
            ? null
            : { type: 2 }
        : o.roundness,
    seed: ns(),
    version: 1,
    versionNonce: ns(),
    isDeleted: false,
    boundElements:
      o.boundElements === undefined
        ? type === "rectangle" || type === "ellipse"
          ? []
          : null
        : o.boundElements,
    updated: 1,
    link: null,
    locked: false
  };
  if (o.extra) Object.assign(e, o.extra);
  elements.push(e);
  return e;
}

function rect(prefix, x, y, w, h, o = {}) {
  return el("rectangle", {
    prefix,
    x,
    y,
    width: w,
    height: h,
    strokeColor: o.stroke || C.blue,
    backgroundColor: o.fill || "transparent",
    strokeWidth: o.sw === undefined ? 2 : o.sw,
    strokeStyle: o.dash ? "dashed" : "solid",
    roundness: o.roundness === undefined ? { type: 3 } : o.roundness
  });
}

function ellipse(prefix, x, y, w, h, o = {}) {
  return el("ellipse", {
    prefix,
    x,
    y,
    width: w,
    height: h,
    strokeColor: o.stroke || C.blue,
    backgroundColor: o.fill || "transparent",
    strokeWidth: o.sw === undefined ? 2 : o.sw,
    strokeStyle: o.dash ? "dashed" : "solid",
    roundness: null
  });
}

function line(prefix, pts, o = {}) {
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  return el("line", {
    prefix,
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
    strokeColor: o.stroke || C.ink,
    strokeWidth: o.sw === undefined ? 2 : o.sw,
    strokeStyle: o.dash ? "dashed" : "solid",
    boundElements: null,
    roundness: { type: 2 },
    extra: {
      points: pts.map((p) => [p[0] - minX, p[1] - minY]),
      lastCommittedPoint: null,
      startBinding: null,
      endBinding: null,
      startArrowhead: null,
      endArrowhead: null
    }
  });
}

function arrow(prefix, pts, o = {}) {
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  const a = el("arrow", {
    prefix,
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
    strokeColor: o.stroke || C.ink,
    strokeWidth: o.sw === undefined ? 2 : o.sw,
    strokeStyle: o.dash ? "dashed" : "solid",
    boundElements: null,
    roundness: { type: 2 },
    extra: {
      points: pts.map((p) => [p[0] - minX, p[1] - minY]),
      lastCommittedPoint: null,
      startBinding: null,
      endBinding: null,
      startArrowhead: o.startArrowhead || null,
      endArrowhead: o.endArrowhead === undefined ? "arrow" : o.endArrowhead
    }
  });
  if (o.startEl) {
    a.startBinding = { elementId: o.startEl.id, focus: 0, gap: 4 };
    o.startEl.boundElements.push({ type: "arrow", id: a.id });
  }
  if (o.endEl) {
    a.endBinding = { elementId: o.endEl.id, focus: 0, gap: 4 };
    o.endEl.boundElements.push({ type: "arrow", id: a.id });
  }
  return a;
}

function measure(s, fs) {
  let w = 0;
  for (const ch of String(s)) {
    if (/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(ch)) w += fs;
    else if (/[\u2190-\u21ff]/.test(ch)) w += fs * 0.95;
    else if (ch === " ") w += fs * 0.35;
    else w += fs * 0.58;
  }
  return Math.ceil(w + 4);
}

function txt(prefix, x, y, s, o = {}) {
  const fs = o.fontSize || 14;
  const lines = String(s).split("\n");
  const tw = Math.max(...lines.map((l) => measure(l, fs)));
  const w = Math.max(o.width || 0, tw);
  const h = o.height || Math.ceil(lines.length * fs * (o.lineHeight || 1.3));
  return el("text", {
    prefix,
    x,
    y,
    width: w,
    height: h,
    strokeColor: o.color || C.ink,
    strokeWidth: 1,
    roundness: null,
    boundElements: null,
    extra: {
      text: String(s),
      fontSize: fs,
      fontFamily: 5,
      textAlign: o.align || "left",
      verticalAlign: o.verticalAlign || "top",
      containerId: o.containerId || null,
      originalText: String(s),
      autoResize: o.autoResize === undefined ? true : o.autoResize,
      lineHeight: o.lineHeight || 1.3
    }
  });
}

function bound(container, s, o = {}) {
  const fs = o.fontSize || 18;
  const lines = String(s).split("\n");
  const h = Math.ceil(lines.length * fs * 1.25);
  const w = container.width - 12;
  const x = container.x + 6;
  const y = container.y + (container.height - h) / 2;
  const t = txt("bt", x, y, s, {
    fontSize: fs,
    color: o.color || C.ink,
    width: w,
    height: h,
    align: "center",
    verticalAlign: "middle",
    containerId: container.id,
    autoResize: false
  });
  container.boundElements.push({ type: "text", id: t.id });
  return t;
}

/* ---------- 1. 章节底色分区 ---------- */
const bgCh1 = rect("bg-ch1", 100, 260, 740, 760, {
  fill: C.blueBg,
  stroke: C.blueBorder,
  sw: 1,
  dash: true
});
const bgCh2 = rect("bg-ch2", 940, 260, 800, 760, {
  fill: C.blueBg,
  stroke: C.blueBorder,
  sw: 1,
  dash: true
});
const bgCh3 = rect("bg-ch3", 1860, 260, 1640, 760, {
  fill: C.blueBg,
  stroke: C.blueBorder,
  sw: 1,
  dash: true
});
const bgCh4 = rect("bg-ch4", 2200, 1520, 1300, 760, {
  fill: C.redBg,
  stroke: C.redBorder,
  sw: 1,
  dash: true
});
const bgCh5 = rect("bg-ch5", 500, 1520, 1400, 760, {
  fill: C.redBg,
  stroke: C.redBorder,
  sw: 1,
  dash: true
});
const bgRuler = rect("bg-ruler", 1000, 1200, 1500, 70, {
  fill: C.greenBg,
  stroke: C.green,
  sw: 2
});

/* ---------- 2. 线与箭头 ---------- */
line("l-underline", [[100, 92], [620, 92]], { stroke: C.yellowLine, sw: 3 });

const aMain1 = arrow("a-main1", [[840, 640], [940, 640]], {
  startEl: bgCh1,
  endEl: bgCh2,
  stroke: C.blue,
  sw: 3
});
const aMain2 = arrow("a-main2", [[1740, 640], [1860, 640]], {
  startEl: bgCh2,
  endEl: bgCh3,
  stroke: C.blue,
  sw: 3
});
const aMain3 = arrow("a-main3", [[3150, 1020], [3150, 1520]], {
  startEl: bgCh3,
  endEl: bgCh4,
  stroke: C.red,
  sw: 3
});
const aMain4 = arrow("a-main4", [[2200, 1900], [1900, 1900]], {
  startEl: bgCh4,
  endEl: bgCh5,
  stroke: C.red,
  sw: 3
});
const aReturn = arrow(
  "a-return",
  [[500, 1900], [40, 1900], [40, 640], [100, 640]],
  { stroke: C.red, sw: 2, dash: true }
);
const aSpine = arrow("a-spine", [[300, 390], [300, 880]], {
  stroke: C.blue,
  sw: 2
});

const aPremise = arrow("a-premise", [[2200, 540], [2420, 515]], {
  stroke: C.blue,
  sw: 2
});
const aBranch1 = arrow("a-branch1", [[2740, 515], [2920, 482]], {
  stroke: C.blue,
  sw: 2
});
const aBranch2 = arrow("a-branch2", [[2740, 515], [2920, 682]], {
  stroke: C.blue,
  sw: 2
});

const aRulerFromCh3 = arrow("a-ruler-ch3", [[2600, 1020], [2480, 1200]], {
  stroke: C.green,
  sw: 2,
  dash: true
});
const aRulerToCh4 = arrow("a-ruler-ch4", [[2300, 1270], [2300, 1520]], {
  stroke: C.red,
  sw: 2,
  dash: true
});
const aRulerToCh5 = arrow("a-ruler-ch5", [[1150, 1270], [1150, 1520]], {
  stroke: C.red,
  sw: 2,
  dash: true
});

const aFunnel1 = arrow("a-funnel1", [[2930, 1705], [2930, 1745]], {
  stroke: C.red,
  sw: 2
});
const aFunnel2 = arrow("a-funnel2", [[2930, 1800], [2930, 1840]], {
  stroke: C.red,
  sw: 2
});
const aFunnel3 = arrow("a-funnel3", [[2930, 1895], [2930, 1935]], {
  stroke: C.red,
  sw: 2
});
const aRoots = arrow("a-roots", [[2560, 1775], [2670, 1678]], {
  stroke: C.red,
  sw: 2
});

/* ---------- 3. 形状 ---------- */
const dots = [
  ellipse("sh-dot1", 289, 400, 22, 22, { fill: C.blueLight, stroke: C.blue }),
  ellipse("sh-dot2", 289, 510, 22, 22, { fill: C.blueLight, stroke: C.blue }),
  ellipse("sh-dot3", 289, 620, 22, 22, { fill: C.blueLight, stroke: C.blue }),
  ellipse("sh-dot4", 289, 730, 22, 22, { fill: C.blueLight, stroke: C.blue }),
  ellipse("sh-dot5", 289, 850, 22, 22, { fill: C.blueLight, stroke: C.blue })
];

const pillars = [
  rect("sh-pillar1", 1040, 430, 130, 230, { fill: C.blueLight, stroke: C.blue }),
  rect("sh-pillar2", 1190, 430, 130, 230, { fill: C.blueLight, stroke: C.blue }),
  rect("sh-pillar3", 1340, 430, 130, 230, { fill: C.blueLight, stroke: C.blue }),
  rect("sh-pillar4", 1490, 430, 130, 230, { fill: C.blueLight, stroke: C.blue })
];

const shBase = rect("sh-base", 1020, 730, 620, 36, {
  fill: C.greenLight,
  stroke: C.green,
  sw: 2
});

const shPremise = rect("sh-premise", 1950, 455, 250, 175, {
  fill: C.blueLight,
  stroke: C.blue,
  sw: 2
});
const shConclusion = rect("sh-conclusion", 2420, 470, 320, 90, {
  fill: C.yellow,
  stroke: C.yellowLine,
  sw: 2
});
const shWheel1 = ellipse("sh-wheel1", 2390, 605, 130, 130, {
  fill: C.greenLight,
  stroke: C.green,
  sw: 2
});
const shWheel2 = ellipse("sh-wheel2", 2640, 605, 130, 130, {
  fill: C.greenLight,
  stroke: C.green,
  sw: 2
});
line("l-axle-v", [[2580, 560], [2580, 670]], { stroke: C.green, sw: 2 });
line("l-axle-h", [[2455, 670], [2705, 670]], { stroke: C.green, sw: 2 });

const shBranch1 = rect("sh-branch1", 2920, 435, 240, 95, {
  fill: C.blueLight,
  stroke: C.blue,
  sw: 2
});
const shBranch2 = rect("sh-branch2", 2920, 635, 240, 95, {
  fill: C.blueLight,
  stroke: C.blue,
  sw: 2
});
const shValidNote = rect("sh-validnote", 2935, 765, 500, 52, {
  fill: C.redBg,
  stroke: C.redBorder,
  sw: 1,
  dash: true
});

const bars = [
  rect("sh-bar1", 2670, 1650, 520, 55, { fill: C.redLight, stroke: C.red, sw: 2 }),
  rect("sh-bar2", 2710, 1745, 440, 55, { fill: C.redLight, stroke: C.red, sw: 2 }),
  rect("sh-bar3", 2750, 1840, 360, 55, { fill: C.redLight, stroke: C.red, sw: 2 }),
  rect("sh-bar4", 2790, 1935, 280, 55, { fill: C.redLight, stroke: C.red, sw: 2 })
];

const rows = [
  rect("sh-row1", 540, 1650, 620, 90, { fill: C.redLight, stroke: C.redBorder, sw: 1 }),
  rect("sh-row2", 540, 1755, 620, 90, { fill: C.redLight, stroke: C.redBorder, sw: 1 }),
  rect("sh-row3", 540, 1860, 760, 90, { fill: C.redLight, stroke: C.redBorder, sw: 1 }),
  rect("sh-row4", 540, 1965, 1240, 90, { fill: C.redLight, stroke: C.redBorder, sw: 1 }),
  rect("sh-row5", 540, 2070, 980, 90, { fill: C.redLight, stroke: C.redBorder, sw: 1 })
];

const chips = [
  rect("sh-chip1", 2500, 58, 16, 16, { fill: C.blueBorder, stroke: C.blueBorder, sw: 1 }),
  rect("sh-chip2", 2610, 58, 16, 16, { fill: C.greenLight, stroke: C.green, sw: 1 }),
  rect("sh-chip3", 2740, 58, 16, 16, { fill: C.redBorder, stroke: C.red, sw: 1 }),
  rect("sh-chip4", 2860, 58, 16, 16, { fill: C.yellow, stroke: C.yellowLine, sw: 1 }),
  rect("sh-chip5", 2960, 58, 16, 16, { fill: C.grayBorder, stroke: C.gray, sw: 1 })
];

/* ---------- 4. 文字 ---------- */
// 标题区
txt("t-title", 100, 48, "让思想对准事实，让结论守住前提", {
  fontSize: 28,
  width: 700
});
txt(
  "t-subtitle",
  100,
  108,
  "《简单的逻辑学》D.Q. 麦克伦尼｜5 章 · 74 节 · 28 种谬误 · 一条正路 + 一条歧路",
  { fontSize: 18, width: 2100, color: C.sub }
);
txt("t-legend-title", 2450, 54, "图例", { fontSize: 14, color: C.sub });
txt("t-legend1", 2522, 56, "建设线", { fontSize: 14, color: C.sub });
txt("t-legend2", 2632, 56, "共同标准", { fontSize: 14, color: C.sub });
txt("t-legend3", 2762, 56, "诊断线", { fontSize: 14, color: C.sub });
txt("t-legend4", 2882, 56, "关键", { fontSize: 14, color: C.sub });
txt("t-legend5", 2982, 56, "辅助", { fontSize: 14, color: C.sub });
txt("t-readnote", 3100, 56, "读法：先上后下，再回左上", {
  fontSize: 14,
  color: C.gray
});
txt("t-closing", 900, 2320, "逻辑不是赢得辩论，而是让思想与实在相符。", {
  fontSize: 18,
  width: 1800,
  align: "center",
  color: C.sub
});

// 第1章
txt("t-ch1-num", 140, 278, "01", { fontSize: 28, color: C.blue });
txt("t-ch1-title", 200, 286, "思想准备", { fontSize: 18, color: C.blue });
txt("t-ch1-role", 140, 322, "认识论地基｜我是否对准事实？", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch1-dot1", 340, 395, "全神贯注", { fontSize: 18 });
txt("t-ch1-d1", 340, 423, "注意力是第一道闸门", { fontSize: 14, color: C.sub });
txt("t-ch1-dot2", 340, 505, "确认事实", { fontSize: 18 });
txt("t-ch1-d2", 340, 533, "先问发生了什么", { fontSize: 14, color: C.sub });
txt("t-ch1-dot3", 340, 615, "观念 ↔ 对象", { fontSize: 18 });
txt("t-ch1-d3", 340, 643, "观念必须指向对象", { fontSize: 14, color: C.sub });
txt("t-ch1-d3b", 340, 668, "追问本源 · 回到事实", { fontSize: 14, color: C.sub });
txt("t-ch1-dot4", 340, 725, "语言说清", { fontSize: 18 });
txt("t-ch1-d4", 340, 753, "模糊 · 多义 · 闪避", { fontSize: 14, color: C.sub });
txt("t-ch1-d4b", 340, 778, "先对齐词义再争论", { fontSize: 14, color: C.sub });
txt("t-ch1-dot5", 340, 845, "真相", { fontSize: 18 });
txt("t-ch1-d5", 340, 873, "陈述与事实相符", { fontSize: 14, color: C.sub });
txt("t-ch1-count", 140, 955, "10 节 · 从注意到真相", {
  fontSize: 14,
  color: C.gray
});

// 第2章
txt("t-ch2-num", 980, 278, "02", { fontSize: 28, color: C.blue });
txt("t-ch2-title", 1040, 286, "基本原理", { fontSize: 18, color: C.blue });
txt("t-ch2-role", 980, 322, "思维宪法｜必须遵守哪些底线？", {
  fontSize: 14,
  color: C.sub
});
bound(pillars[0], "同一律", { fontSize: 18 });
bound(pillars[1], "矛盾律", { fontSize: 18 });
bound(pillars[2], "排中律", { fontSize: 18 });
bound(pillars[3], "充足理由律", { fontSize: 18 });
txt("t-ch2-pd1", 1030, 680, "A 就是 A", {
  fontSize: 14,
  width: 150,
  align: "center",
  color: C.sub
});
txt("t-ch2-pd2", 1180, 680, "不能既真又假", {
  fontSize: 14,
  width: 150,
  align: "center",
  color: C.sub
});
txt("t-ch2-pd3", 1330, 680, "非真即假", {
  fontSize: 14,
  width: 150,
  align: "center",
  color: C.sub
});
txt("t-ch2-pd4", 1480, 680, "判断要有理由", {
  fontSize: 14,
  width: 150,
  align: "center",
  color: C.sub
});
txt("t-ch2-base", 1160, 738, "四律 = 思维的宪法", {
  fontSize: 14,
  width: 340,
  align: "center",
  color: C.ink
});
txt("t-ch2-base-note", 1120, 778, "违反 → 语言失去可理解性", {
  fontSize: 14,
  width: 420,
  align: "center",
  color: C.sub
});
txt("t-ch2-g1", 980, 835, "因果追问", { fontSize: 18 });
txt("t-ch2-g1a", 980, 865, "万物有源 · 别停近因", { fontSize: 14, color: C.sub });
txt("t-ch2-g1b", 980, 890, "区分质料/形式/动力/目的", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch2-g2", 1250, 835, "定义术语", { fontSize: 18 });
txt("t-ch2-g2a", 1250, 865, "属 + 种差", { fontSize: 14, color: C.sub });
txt("t-ch2-g2b", 1250, 890, "不循环 · 不过宽窄", { fontSize: 14, color: C.sub });
txt("t-ch2-g3", 1490, 835, "命题工具", { fontSize: 18 });
txt("t-ch2-g3a", 1490, 865, "直言 A/E/I/O", { fontSize: 14, color: C.sub });
txt("t-ch2-g3b", 1490, 890, "普遍命题怕反例", { fontSize: 14, color: C.sub });
txt("t-ch2-gray", 980, 940, "灰色地带：承认复杂，不逃避判断", {
  fontSize: 14,
  width: 620,
  color: C.sub
});
txt("t-ch2-count", 1640, 970, "8 节", {
  fontSize: 14,
  width: 60,
  align: "right",
  color: C.gray
});

// 第3章
txt("t-ch3-num", 1900, 278, "03", { fontSize: 28, color: C.blue });
txt("t-ch3-title", 1960, 286, "论证：逻辑学的语言", {
  fontSize: 18,
  color: C.blue
});
txt("t-ch3-role", 1900, 322, "逻辑学的语言｜怎样从前提推出结论？", {
  fontSize: 14,
  color: C.sub
});
txt(
  "t-ch3-toolbox",
  1900,
  358,
  "断言可判真假 · 否定看范围 · 比较≠证明 · 条件看前后件 · 三段论中项周延",
  { fontSize: 14, width: 1500, color: C.sub }
);
txt("t-ch3-cartlabel", 2300, 398, "论证 = 前提 → 结论", { fontSize: 18 });
txt("t-ch3-premise-label", 1950, 420, "前提（理由）", { fontSize: 18 });
txt("t-ch3-premise", 1970, 475, "事实前提\n定义前提\n价值前提", {
  fontSize: 14,
  width: 210,
  lineHeight: 1.6,
  color: C.ink
});
txt("t-ch3-support", 2280, 490, "支持", { fontSize: 14, color: C.sub });
bound(shConclusion, "结论（主张）", { fontSize: 18 });
bound(shWheel1, "真前提", { fontSize: 18 });
bound(shWheel2, "有效形式", { fontSize: 18 });
txt("t-ch3-wheelsnote", 2370, 748, "好论证的两个轮子，缺一不可", {
  fontSize: 14,
  width: 360,
  align: "center",
  color: C.sub
});
bound(shBranch1, "演绎", { fontSize: 18 });
txt("t-ch3-b1d", 2940, 538, "全称 → 特称 · 必然", {
  fontSize: 14,
  color: C.sub
});
bound(shBranch2, "归纳", { fontSize: 18 });
txt("t-ch3-b2d", 2940, 738, "特称 → 全称 · 或然", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch3-a1label", 2820, 470, "推出", { fontSize: 14, color: C.sub });
txt("t-ch3-a2label", 2820, 640, "概括", { fontSize: 14, color: C.sub });
txt(
  "t-ch3-validnote",
  2950,
  772,
  "有效 ≠ 可靠：形式对、前提假，仍不可信",
  { fontSize: 14, width: 480, color: C.red }
);
txt("t-ch3-check-title", 1900, 830, "评定五问", { fontSize: 18 });
txt("t-ch3-c1", 1900, 865, "① 前提真？", { fontSize: 14, color: C.sub });
txt("t-ch3-c2", 2120, 865, "② 相关？", { fontSize: 14, color: C.sub });
txt("t-ch3-c3", 2340, 865, "③ 是→应当？", { fontSize: 14, color: C.sub });
txt("t-ch3-c4", 2560, 865, "④ 形式有效？", { fontSize: 14, color: C.sub });
txt("t-ch3-c5", 2780, 865, "⑤ 量/质越界？", { fontSize: 14, color: C.sub });
txt("t-ch3-build-title", 1900, 930, "构造五步", { fontSize: 18 });
txt(
  "t-ch3-build",
  2020,
  935,
  "定结论 → 找前提 → 选形式 → 查真假 → 预演反例",
  { fontSize: 14, width: 800, color: C.sub }
);
txt("t-ch3-count", 3400, 970, "19 节", {
  fontSize: 14,
  width: 60,
  align: "right",
  color: C.gray
});

// 中间尺
txt("t-ruler-title", 1030, 1145, "同一把尺", { fontSize: 18, color: C.green });
txt("t-ruler-sub", 1030, 1172, "建设线与诊断线共用", {
  fontSize: 14,
  color: C.sub
});
txt("t-ruler-formula", 1180, 1222, "好论证 = 真前提 + 相关 + 有效形式", {
  fontSize: 18,
  width: 1140,
  align: "center"
});
txt("t-ruler-t1", 1240, 1300, "前提真？", {
  fontSize: 14,
  width: 120,
  align: "center",
  color: C.sub
});
txt("t-ruler-t2", 1510, 1300, "相关？", {
  fontSize: 14,
  width: 120,
  align: "center",
  color: C.sub
});
txt("t-ruler-t3", 1780, 1300, "形式有效？", {
  fontSize: 14,
  width: 120,
  align: "center",
  color: C.sub
});
txt("t-ruler-t4", 2050, 1300, "结论不越界？", {
  fontSize: 14,
  width: 120,
  align: "center",
  color: C.sub
});
txt("t-ruler-verdict", 2520, 1090, "验收", { fontSize: 14, color: C.green });
txt("t-ruler-root", 2312, 1380, "病根", { fontSize: 14, color: C.red });
txt("t-ruler-symptom", 1162, 1380, "症状", { fontSize: 14, color: C.red });
txt("t-return-label", 60, 1300, "修正事实与语言，再来一轮", {
  fontSize: 14,
  width: 260,
  color: C.red
});
txt("t-main1", 845, 596, "修好心智", { fontSize: 14, color: C.blue });
txt("t-main2", 1745, 596, "备好材料", { fontSize: 14, color: C.blue });
txt("t-main3", 3165, 1230, "论证失败？\n查根源", {
  fontSize: 14,
  width: 120,
  color: C.red
});
txt("t-main4", 1970, 1850, "向下追根", { fontSize: 14, color: C.red });

// 第4章
txt("t-ch4-num", 2240, 1540, "04", { fontSize: 28, color: C.red });
txt("t-ch4-title", 2300, 1546, "非逻辑思维的根源", {
  fontSize: 18,
  color: C.red
});
txt("t-ch4-role", 2240, 1584, "心态诊断｜人为什么会想错？", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch4-roots-title", 2240, 1625, "9 种病根", { fontSize: 18 });
txt("t-ch4-c1", 2240, 1660, "逃避判断", { fontSize: 18 });
txt(
  "t-ch4-c1d",
  2240,
  1688,
  "怀疑论 · 逃避性不可知论\n玩世不恭 / 盲目乐观",
  { fontSize: 14, width: 300, color: C.sub }
);
txt("t-ch4-c2", 2240, 1755, "立场先行", { fontSize: 18 });
txt(
  "t-ch4-c2d",
  2240,
  1783,
  "眼界狭窄 · 情感干扰\n为赢而辩 · 争吵代替论证",
  { fontSize: 14, width: 300, color: C.sub }
);
txt("t-ch4-c3", 2240, 1855, "免检假设", { fontSize: 18 });
txt("t-ch4-c3d", 2240, 1883, "真诚的局限\n常识的局限", {
  fontSize: 14,
  width: 300,
  color: C.sub
});
txt("t-ch4-chainlabel", 2670, 1615, "一条失控链", {
  fontSize: 14,
  color: C.sub
});
bound(bars[0], "态度偏差", { fontSize: 18 });
bound(bars[1], "选择性注意", { fontSize: 18 });
bound(bars[2], "前提失真", { fontSize: 18 });
bound(bars[3], "结论失控", { fontSize: 18 });
txt("t-ch4-cause1", 2942, 1710, "导致", { fontSize: 14, color: C.red });
txt("t-ch4-cause2", 2942, 1805, "于是", { fontSize: 14, color: C.red });
txt("t-ch4-cause3", 2942, 1900, "终致", { fontSize: 14, color: C.red });
txt("t-ch4-feed", 2580, 1720, "汇成", { fontSize: 14, color: C.red });
txt("t-ch4-shared", 2670, 2020, "共同结构：先替结论站队，再补理由", {
  fontSize: 18
});
txt("t-ch4-vs", 2670, 2055, "论证求真理，争吵求胜负", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch4-sincerity", 2670, 2085, "真诚 ≠ 正确 · 常识 ≠ 免检", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch4-self-title", 2240, 2060, "态度自检", { fontSize: 18 });
txt("t-ch4-self1", 2240, 2090, "我预设结论了吗？", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch4-self2", 2240, 2118, "我在求真还是求胜？", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch4-self3", 2240, 2146, "我敢看反例吗？", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch4-close", 2240, 2185, "病根不除，谬误清单背得再熟也会重犯", {
  fontSize: 14,
  width: 500,
  color: C.red
});
txt("t-ch4-count", 3420, 2200, "9 节", {
  fontSize: 14,
  width: 60,
  align: "right",
  color: C.gray
});

// 第5章
txt("t-ch5-num", 540, 1540, "05", { fontSize: 28, color: C.red });
txt("t-ch5-title", 600, 1546, "非逻辑思维的主要形式", {
  fontSize: 18,
  color: C.red
});
txt("t-ch5-role", 540, 1584, "谬误清单｜想错时具体长什么样？", {
  fontSize: 14,
  color: C.sub
});
txt("t-ch5-28", 1730, 1540, "28", { fontSize: 28, color: C.red });
txt("t-ch5-28u", 1785, 1556, "种", { fontSize: 14, color: C.red });
txt("t-ch5-note", 540, 1615, "五族为教学归纳｜原书按 01–28 排列", {
  fontSize: 14,
  width: 600,
  color: C.gray
});
txt("t-ch5-cap", 1240, 1618, "条带越长 = 家族越大", {
  fontSize: 14,
  color: C.gray
});

txt("t-row1-family", 560, 1662, "形式结构", { fontSize: 18 });
txt("t-row1-count", 710, 1652, "3", { fontSize: 28, color: C.red });
txt("t-row1-list", 770, 1670, "否定前件 · 肯定后件 · 中项不周延", {
  fontSize: 14,
  width: 370,
  color: C.ink
});

txt("t-row2-family", 560, 1767, "语言分类", { fontSize: 18 });
txt("t-row2-count", 710, 1757, "3", { fontSize: 28, color: C.red });
txt("t-row2-list", 770, 1775, "偷换概念 · 分类错误 · 混淆视听", {
  fontSize: 14,
  width: 370,
  color: C.ink
});

txt("t-row3-family", 560, 1872, "预设论题", { fontSize: 18 });
txt("t-row3-count", 710, 1862, "5", { fontSize: 28, color: C.red });
txt(
  "t-row3-list",
  770,
  1880,
  "窃取论题 · 虚假假设 · 两难陷阱 · 无力反驳 · 避免结论",
  { fontSize: 14, width: 510, color: C.ink }
);

txt("t-row4-family", 560, 1977, "相干性", { fontSize: 18 });
txt("t-row4-count", 710, 1962, "10", { fontSize: 28, color: C.red });
txt(
  "t-row4-list",
  770,
  1985,
  "稻草人 · 误用传统 · 以暴易暴 · 民主谬误 · 对人不对事 · 压制理性 · 滥用专家 · 以笑饰非 · 以泪掩过 · 情感误导",
  { fontSize: 14, width: 990, color: C.ink }
);

txt("t-row5-family", 560, 2082, "解释简化", { fontSize: 18 });
txt("t-row5-count", 710, 2072, "7", { fontSize: 28, color: C.red });
txt(
  "t-row5-list",
  770,
  2090,
  "质的量化 · 以出身论英雄 · 止于分析 · 简化主义 · 以先后论因果 · 功利误导 · 简化推理",
  { fontSize: 14, width: 730, color: C.ink }
);

txt("t-ch5-rule", 540, 2185, "一切谬误 = 前提有问题 或 结论越界", {
  fontSize: 18,
  width: 800,
  color: C.red
});
txt(
  "t-ch5-steps",
  540,
  2225,
  "识别三步：找前提 → 找结论 → 问缺了哪一步",
  { fontSize: 14, width: 700, color: C.sub }
);

/* ---------- 5. 输出 ---------- */
const doc = {
  type: "excalidraw",
  version: 2,
  source: "https://excalidraw.com",
  elements,
  appState: { viewBackgroundColor: "#ffffff" },
  files: {}
};

fs.writeFileSync(OUT, JSON.stringify(doc, null, 2), "utf8");
console.log("wrote", OUT);
console.log("elements", elements.length);
console.log("texts", elements.filter((e) => e.type === "text").length);
console.log("arrows", elements.filter((e) => e.type === "arrow").length);
console.log("bounds", {
  maxX: Math.max(...elements.map((e) => e.x + e.width)),
  maxY: Math.max(...elements.map((e) => e.y + e.height))
});
