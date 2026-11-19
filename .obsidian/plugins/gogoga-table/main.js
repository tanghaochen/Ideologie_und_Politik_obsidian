"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => TablePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian7 = require("obsidian");

// src/editor/i18n.ts
var zh = {
  insertRowAbove: "\u5728\u4E0A\u65B9\u63D2\u5165\u884C",
  insertRowsAbove: "\u5728\u4E0A\u65B9\u63D2\u5165 {n} \u884C",
  insertRowsBelow: "\u5728\u4E0B\u65B9\u63D2\u5165 {n} \u884C",
  insertColsLeft: "\u5728\u5DE6\u4FA7\u63D2\u5165 {n} \u5217",
  insertColsRight: "\u5728\u53F3\u4FA7\u63D2\u5165 {n} \u5217",
  duplicateRow: "\u590D\u5236\u6B64\u884C",
  duplicateCol: "\u590D\u5236\u6B64\u5217",
  sortAsc: "\u6309\u6B64\u5217\u5347\u5E8F\u6392\u5E8F",
  sortDesc: "\u6309\u6B64\u5217\u964D\u5E8F\u6392\u5E8F",
  addCheckbox: "\u53D8\u6210\u52FE\u9009\u6846",
  cmd_insertTable: "\u63D2\u5165\u8868\u683C",
  cmd_textToTable: "\u628A\u9009\u4E2D\u7684\u6587\u5B57\u8F6C\u6210\u8868\u683C",
  cmd_insert_row_above: "\u5728\u4E0A\u65B9\u63D2\u5165\u884C",
  cmd_insert_row_below: "\u5728\u4E0B\u65B9\u63D2\u5165\u884C",
  cmd_insert_col_left: "\u5728\u5DE6\u4FA7\u63D2\u5165\u5217",
  cmd_insert_col_right: "\u5728\u53F3\u4FA7\u63D2\u5165\u5217",
  cmd_duplicate_row: "\u590D\u5236\u5F53\u524D\u884C",
  cmd_duplicate_col: "\u590D\u5236\u5F53\u524D\u5217",
  cmd_delete_row: "\u5220\u9664\u5F53\u524D\u884C",
  cmd_delete_col: "\u5220\u9664\u5F53\u524D\u5217",
  cmd_sort_asc: "\u6309\u5F53\u524D\u5217\u5347\u5E8F\u6392\u5E8F",
  cmd_sort_desc: "\u6309\u5F53\u524D\u5217\u964D\u5E8F\u6392\u5E8F",
  cmd_merge_cells: "\u5408\u5E76\u9009\u4E2D\u7684\u683C\u5B50",
  cmd_unmerge_cells: "\u53D6\u6D88\u5408\u5E76",
  cmd_clear_cells: "\u6E05\u7A7A\u9009\u4E2D\u7684\u683C\u5B50",
  cmd_align_left: "\u9009\u4E2D\u7684\u5217\u5DE6\u5BF9\u9F50",
  cmd_align_center: "\u9009\u4E2D\u7684\u5217\u5C45\u4E2D",
  cmd_align_right: "\u9009\u4E2D\u7684\u5217\u53F3\u5BF9\u9F50",
  cmd_select_row: "\u9009\u4E2D\u6574\u884C",
  cmd_select_col: "\u9009\u4E2D\u6574\u5217",
  cmd_toggle_checkbox: "\u5207\u6362\u52FE\u9009\u6846",
  gridTitle: "\u63D2\u5165\u8868\u683C",
  gridHint: "{r} \u884C \xD7 {c} \u5217\uFF08\u542B\u8868\u5934\uFF09",
  removeCheckbox: "\u53BB\u6389\u52FE\u9009\u6846",
  insertRowBelow: "\u5728\u4E0B\u65B9\u63D2\u5165\u884C",
  insertColLeft: "\u5728\u5DE6\u4FA7\u63D2\u5165\u5217",
  insertColRight: "\u5728\u53F3\u4FA7\u63D2\u5165\u5217",
  deleteRow: "\u5220\u9664\u884C",
  deleteHeadRow: "\u5220\u9664\u8868\u5934\u884C\uFF08\u4E0B\u4E00\u884C\u53D8\u6210\u8868\u5934\uFF09",
  deleteCol: "\u5220\u9664\u5217",
  deleteRows: "\u5220\u9664 {n} \u884C",
  fmtBold: "\u52A0\u7C97",
  fmtItalic: "\u659C\u4F53",
  fmtStrike: "\u5220\u9664\u7EBF",
  fmtUnderline: "\u4E0B\u5212\u7EBF",
  fmtHighlight: "\u9AD8\u4EAE\uFF08==\u6587\u5B57==\uFF09",
  fmtTextColor: "\u6587\u5B57\u989C\u8272",
  fmtHighlightColor: "\u8367\u5149\u7B14",
  fmtClear: "\u6E05\u9664\u6587\u5B57\u989C\u8272\u548C\u8367\u5149\u7B14",
  mbDone: "\u5B8C\u6210",
  mbUndo: "\u64A4\u9500",
  mbRedo: "\u91CD\u505A",
  mbLink: "\u63D2\u5165\u53CC\u94FE",
  mbCheckbox: "\u52FE\u9009\u6846",
  mbNewline: "\u683C\u5185\u6362\u884C",
  mbPrevCell: "\u4E0A\u4E00\u683C",
  mbNextCell: "\u4E0B\u4E00\u683C",
  palTextMore: "\u66F4\u591A\u6587\u5B57\u989C\u8272",
  palBgMore: "\u66F4\u591A\u8367\u5149\u7B14\u989C\u8272",
  palCommon: "\u5E38\u7528",
  palRecent: "\u6700\u8FD1\u4F7F\u7528",
  palAlpha: "\u900F\u660E\u5EA6",
  palCustom: "\u81EA\u5B9A\u4E49\u2026",
  palNoText: "\u53BB\u6389\u6587\u5B57\u989C\u8272",
  palNoHighlight: "\u53BB\u6389\u8367\u5149\u7B14",
  deleteCols: "\u5220\u9664 {n} \u5217",
  deleteTable: "\u5220\u9664\u8868\u683C",
  copyTable: "\u590D\u5236\u6574\u5F20\u8868\u683C",
  copyMarkdown: "\u590D\u5236\u4E3A Markdown \u8868\u683C\uFF08\u4E0D\u5E26\u6837\u5F0F\uFF09",
  copyImage: "\u590D\u5236\u56FE\u7247",
  copiedImage: "\u5DF2\u590D\u5236\u56FE\u7247",
  deleteImage: "\u5220\u9664\u56FE\u7247",
  copiedTable: "\u5DF2\u590D\u5236\u8868\u683C\uFF1A\u7C98\u5230\u5176\u4ED6\u7B14\u8BB0\u4F1A\u4FDD\u7559\u989C\u8272\u3001\u5217\u5BBD\u3001\u5408\u5E76",
  copiedMarkdown: "\u5DF2\u590D\u5236 Markdown \u8868\u683C",
  indentTable: "\u589E\u52A0\u7F29\u8FDB\uFF08\u6302\u5230\u4E0A\u9762\u7684\u5217\u8868\u9879\u4E0B\uFF09",
  outdentTable: "\u51CF\u5C11\u7F29\u8FDB\uFF08\u79FB\u51FA\u5217\u8868\uFF09",
  moveRowUp: "\u4E0A\u79FB\u4E00\u884C",
  moveRowDown: "\u4E0B\u79FB\u4E00\u884C",
  moveColLeft: "\u5DE6\u79FB\u4E00\u5217",
  moveColRight: "\u53F3\u79FB\u4E00\u5217",
  align: "\u5BF9\u9F50",
  alignLeft: "\u5DE6\u5BF9\u9F50",
  alignCenter: "\u5C45\u4E2D",
  alignRight: "\u53F3\u5BF9\u9F50",
  vAlign_top: "\u9876\u7AEF\u5BF9\u9F50",
  vAlign_middle: "\u5782\u76F4\u5C45\u4E2D",
  vAlign_bottom: "\u5E95\u7AEF\u5BF9\u9F50",
  color: "\u5E95\u8272",
  noColor: "\u65E0\u5E95\u8272",
  autoWidth: "\u81EA\u52A8\u5217\u5BBD",
  clearCell: "\u6E05\u7A7A\u5185\u5BB9",
  mergeCells: "\u5408\u5E76\u5355\u5143\u683C",
  fill: "\u62D6\u52A8\u6309\u89C4\u5F8B\u586B\u5145\uFF0C\u6309\u4F4F \u2325 \u7167\u6284",
  tableMenu: "\u8868\u683C\u8BBE\u7F6E",
  tableStyle: "\u8FD9\u5F20\u8868\u7684\u6837\u5F0F",
  rowSpacing: "\u884C\u8DDD",
  followSettings: "\u8DDF\u968F\u8BBE\u7F6E",
  style_default: "\u9ED8\u8BA4",
  style_zebra: "\u6591\u9A6C\u7EB9",
  style_minimal: "\u6781\u7B80\u7EBF",
  style_academic: "\u4E09\u7EBF\u8868",
  textColor: "\u6587\u5B57\u989C\u8272",
  fontSize: "\u6587\u5B57\u5927\u5C0F",
  tableFontSize: "\u6574\u8868\u6587\u5B57\u5927\u5C0F",
  fontSize_xs: "\u5F88\u5C0F",
  fontSize_s: "\u5C0F",
  fontSize_m: "\u6B63\u5E38",
  fontSize_l: "\u5927",
  fontSize_xl: "\u5F88\u5927",
  calcTitle: "\u5408\u8BA1",
  calc_sum: "\u6C42\u548C",
  calc_avg: "\u5E73\u5747",
  calc_count: "\u8BA1\u6570",
  calc_max: "\u6700\u5927",
  calc_min: "\u6700\u5C0F",
  calc_none: "\u4E0D\u5408\u8BA1",
  totalLabel: "\u5408\u8BA1",
  totalLabelMixed: "\u7EDF\u8BA1",
  fxOn: "\u8BBE\u4E3A\u8BA1\u7B97\u5217\u2026",
  fxEdit: "\u7F16\u8F91\u516C\u5F0F\u2026",
  fxOff: "\u53D6\u6D88\u8BA1\u7B97\u5217",
  fxThisCol: "\u8FD9\u4E00\u5217",
  fxInsert: "\u70B9\u4E00\u4E0B\u63D2\u5165\uFF1A",
  fxNoNames: "\u522B\u7684\u5217\u90FD\u6CA1\u6709\u80FD\u5F15\u7528\u7684\u5217\u540D\uFF08\u4E0D\u80FD\u662F\u7A7A\u7684\u3001\u4E0D\u80FD\u91CD\u540D\uFF09",
  fxHint: "\u5217\u540D\u7528\u82B1\u62EC\u53F7\u62EC\u8D77\u6765\uFF1B\u53EF\u4EE5\u7528 + \u2212 \xD7 \xF7 ( )  SUM AVG MIN MAX ROUND",
  fxPlaces: "\u5C0F\u6570\u4F4D",
  fxAuto: "\u81EA\u52A8",
  fxStart: "\u5199\u4E00\u4E2A\u516C\u5F0F\uFF0C\u6BD4\u5982 {\u5355\u4EF7} * {\u6570\u91CF}",
  fxPreview: "\u7B2C 1 \u884C\uFF1A{expr} = {v}",
  fxPreviewEmpty: "\u7B2C 1 \u884C\uFF1A\u7ED3\u679C\u4E3A\u7A7A\uFF08{why}\uFF09",
  fxNoRows: "\u8FD8\u6CA1\u6709\u6570\u636E\u884C",
  fxBlank: "\u7A7A",
  fxOk: "\u786E\u5B9A",
  fxCancel: "\u53D6\u6D88",
  fxLocked: "\u8FD9\u4E00\u5217\u7531\u516C\u5F0F\u7B97\u51FA\uFF0C\u5728\u5217\u83DC\u5355\u91CC\u6539\u516C\u5F0F",
  fxBadgeTitle: "\u8BA1\u7B97\u5217\uFF1A{f}",
  fxErr_empty: "\u8FD8\u6CA1\u5199\u516C\u5F0F",
  fxErr_syntax: "\u516C\u5F0F\u5199\u5F97\u4E0D\u5BF9",
  fxErr_paren: "\u62EC\u53F7\u6CA1\u914D\u5BF9",
  fxErr_brace: "\u82B1\u62EC\u53F7\u6CA1\u914D\u5BF9\uFF1A\u5217\u540D\u8981\u5199\u6210 {\u5217\u540D}",
  fxErr_func: "\u6CA1\u6709\u300C{name}\u300D\u8FD9\u4E2A\u51FD\u6570",
  fxErr_args: "{name} \u7684\u53C2\u6570\u4E2A\u6570\u4E0D\u5BF9",
  fxErr_unknownCol: "\u627E\u4E0D\u5230\u5217\u300C{name}\u300D",
  fxErr_ambiguous: "\u6709\u597D\u51E0\u5217\u90FD\u53EB\u300C{name}\u300D\uFF0C\u5148\u6539\u4E2A\u540D",
  fxErr_self: "\u516C\u5F0F\u4E0D\u80FD\u5F15\u7528\u8FD9\u4E00\u5217\u81EA\u5DF1",
  fxErr_cycle: "\u51E0\u4E2A\u8BA1\u7B97\u5217\u4E92\u76F8\u5F15\u7528\uFF0C\u7ED5\u6210\u4E86\u4E00\u5708",
  fxEmpty_input: "\u300C{name}\u300D\u662F\u7A7A\u7684\u6216\u4E0D\u662F\u6570\u5B57",
  fxEmpty_div0: "\u9664\u4EE5 0",
  colType: "\u5217\u7C7B\u578B\uFF1A{v}",
  colTypeTitle: "\u5217\u7C7B\u578B",
  colTypeFx: "\u8BA1\u7B97\u7ED3\u679C\u7684\u683C\u5F0F",
  kind_text: "\u666E\u901A\u6587\u5B57",
  kind_status: "\u72B6\u6001\uFF08\u5355\u9009\uFF09",
  kind_multi: "\u591A\u9009\u6807\u7B7E",
  kind_date: "\u65E5\u671F",
  kind_num: "\u6570\u5B57",
  kind_bar: "\u8FDB\u5EA6\u6761",
  dateStyle: "\u5199\u6CD5",
  dateLink: "\u65E5\u8BB0\u94FE\u63A5 [[2026-11-17]]",
  numFormat: "\u6570\u5B57\u683C\u5F0F",
  numGroup: "\u5343\u5206\u4F4D 1,234",
  numPercent: "\u767E\u5206\u6BD4 12%",
  numCurrency: "\u8D27\u5E01",
  numNone: "\u65E0",
  numDecimals: "\u5C0F\u6570",
  numAuto: "\u81EA\u52A8",
  calPrev: "\u4E0A\u4E2A\u6708",
  calNext: "\u4E0B\u4E2A\u6708",
  calMonth: "{y}\u5E74{m}\u6708",
  calWeekStart: "1",
  calWeekdays: "\u65E5,\u4E00,\u4E8C,\u4E09,\u56DB,\u4E94,\u516D",
  calToday: "\u4ECA\u5929",
  calClear: "\u6E05\u7A7A",
  notDate: "\u4E0D\u662F\u65E5\u671F\uFF1A\u65E5\u5386\u548C\u6309\u65E5\u671F\u6392\u5E8F\u4E0D\u8BA4\u5B83",
  statusColor: "\u300C{v}\u300D\u7684\u989C\u8272",
  defaultText: "\u9ED8\u8BA4\u6587\u5B57\u989C\u8272",
  foldTable: "\u6298\u53E0\u8868\u683C\uFF08\u53EA\u663E\u793A\u8868\u5934\uFF09",
  unfoldRows: "\u25B8 \u5C55\u5F00 {n} \u884C",
  headerColumn: "\u7B2C\u4E00\u5217\u4F5C\u4E3A\u6807\u9898\u5217",
  freezeHeaderCol: "\u51BB\u7ED3\u6807\u9898\u5217\uFF08\u5DE6\u53F3\u6EDA\u52A8\u65F6\u4E0D\u52A8\uFF09",
  headerRows: "\u8868\u5934\u884C\u6570",
  headerRowsN: "{n} \u884C",
  distributeCols: "\u5E73\u5747\u5206\u5E03\u5217\u5BBD",
  fitWidth: "\u6491\u6EE1\u9875\u9762\u5BBD\u5EA6",
  density_comfortable: "\u8212\u9002",
  density_compact: "\u7D27\u51D1",
  alignAllLeft: "\u6574\u8868\u5DE6\u5BF9\u9F50",
  alignAllCenter: "\u6574\u8868\u5C45\u4E2D",
  alignAllRight: "\u6574\u8868\u53F3\u5BF9\u9F50",
  vAlignAll_top: "\u6574\u8868\u9876\u7AEF\u5BF9\u9F50",
  vAlignAll_middle: "\u6574\u8868\u5782\u76F4\u5C45\u4E2D",
  vAlignAll_bottom: "\u6574\u8868\u5E95\u7AEF\u5BF9\u9F50",
  autoWidthAll: "\u6240\u6709\u5217\u6062\u590D\u81EA\u52A8\u5BBD\u5EA6",
  clearAllBg: "\u6E05\u9664\u6240\u6709\u989C\u8272",
  unmergeCells: "\u53D6\u6D88\u5408\u5E76",
  addRow: "\u52A0\u4E00\u884C",
  addCol: "\u52A0\u4E00\u5217",
  addColFirst: "\u5728\u6700\u524D\u9762\u52A0\u4E00\u5217",
  addRowFirst: "\u5728\u8868\u5934\u4E0B\u9762\u52A0\u4E00\u884C",
  rowMenu: "\u884C\u64CD\u4F5C",
  colMenu: "\u5217\u64CD\u4F5C",
  resize: "\u62D6\u52A8\u6539\u5217\u5BBD\uFF0C\u53CC\u51FB\u81EA\u52A8",
  gray: "\u7070",
  red: "\u7EA2",
  orange: "\u6A59",
  yellow: "\u9EC4",
  green: "\u7EFF",
  blue: "\u84DD",
  purple: "\u7D2B"
};
var en = {
  insertRowAbove: "Insert row above",
  insertRowsAbove: "Insert {n} rows above",
  insertRowsBelow: "Insert {n} rows below",
  insertColsLeft: "Insert {n} columns left",
  insertColsRight: "Insert {n} columns right",
  duplicateRow: "Duplicate row",
  duplicateCol: "Duplicate column",
  sortAsc: "Sort by this column, A\u2192Z",
  sortDesc: "Sort by this column, Z\u2192A",
  addCheckbox: "Turn into checkbox",
  cmd_insertTable: "Insert table",
  cmd_textToTable: "Convert selected text to table",
  cmd_insert_row_above: "Insert row above",
  cmd_insert_row_below: "Insert row below",
  cmd_insert_col_left: "Insert column left",
  cmd_insert_col_right: "Insert column right",
  cmd_duplicate_row: "Duplicate row",
  cmd_duplicate_col: "Duplicate column",
  cmd_delete_row: "Delete row",
  cmd_delete_col: "Delete column",
  cmd_sort_asc: "Sort by current column, A\u2192Z",
  cmd_sort_desc: "Sort by current column, Z\u2192A",
  cmd_merge_cells: "Merge selected cells",
  cmd_unmerge_cells: "Unmerge cells",
  cmd_clear_cells: "Clear selected cells",
  cmd_align_left: "Align selected columns left",
  cmd_align_center: "Center selected columns",
  cmd_align_right: "Align selected columns right",
  cmd_select_row: "Select row",
  cmd_select_col: "Select column",
  cmd_toggle_checkbox: "Toggle checkbox",
  gridTitle: "Insert table",
  gridHint: "{r} rows \xD7 {c} columns (with header)",
  removeCheckbox: "Remove checkbox",
  insertRowBelow: "Insert row below",
  insertColLeft: "Insert column left",
  insertColRight: "Insert column right",
  deleteRow: "Delete row",
  deleteHeadRow: "Delete header row (the next row becomes the header)",
  deleteCol: "Delete column",
  deleteRows: "Delete {n} rows",
  fmtBold: "Bold",
  fmtItalic: "Italic",
  fmtStrike: "Strikethrough",
  fmtUnderline: "Underline",
  fmtHighlight: "Highlight (==text==)",
  fmtTextColor: "Text color",
  fmtHighlightColor: "Highlighter",
  fmtClear: "Clear text and highlighter colors",
  mbDone: "Done",
  mbUndo: "Undo",
  mbRedo: "Redo",
  mbLink: "Insert link",
  mbCheckbox: "Checkbox",
  mbNewline: "New line in cell",
  mbPrevCell: "Previous cell",
  mbNextCell: "Next cell",
  palTextMore: "More text colors",
  palBgMore: "More highlighter colors",
  palCommon: "Frequent",
  palRecent: "Recent",
  palAlpha: "Opacity",
  palCustom: "Custom\u2026",
  palNoText: "No text color",
  palNoHighlight: "No highlighter",
  deleteCols: "Delete {n} columns",
  deleteTable: "Delete table",
  copyTable: "Copy whole table",
  copyMarkdown: "Copy as Markdown table (no styles)",
  copyImage: "Copy image",
  copiedImage: "Image copied",
  deleteImage: "Delete image",
  copiedTable: "Table copied: pasting into another note keeps colors, widths and merges",
  copiedMarkdown: "Markdown table copied",
  indentTable: "Indent (under the list item above)",
  outdentTable: "Outdent (move out of the list)",
  moveRowUp: "Move row up",
  moveRowDown: "Move row down",
  moveColLeft: "Move column left",
  moveColRight: "Move column right",
  align: "Align",
  alignLeft: "Align left",
  alignCenter: "Align center",
  alignRight: "Align right",
  vAlign_top: "Align top",
  vAlign_middle: "Center vertically",
  vAlign_bottom: "Align bottom",
  color: "Background",
  noColor: "No background",
  autoWidth: "Auto width",
  clearCell: "Clear contents",
  mergeCells: "Merge cells",
  fill: "Drag to fill a series, hold \u2325 to copy",
  tableMenu: "Table options",
  tableStyle: "Style for this table",
  rowSpacing: "Row spacing",
  followSettings: "Follow settings",
  style_default: "Default",
  style_zebra: "Zebra",
  style_minimal: "Minimal",
  style_academic: "Three-line",
  textColor: "Text color",
  fontSize: "Text size",
  tableFontSize: "Table text size",
  fontSize_xs: "Smallest",
  fontSize_s: "Small",
  fontSize_m: "Normal",
  fontSize_l: "Large",
  fontSize_xl: "Largest",
  calcTitle: "Total",
  calc_sum: "Sum",
  calc_avg: "Average",
  calc_count: "Count",
  calc_max: "Max",
  calc_min: "Min",
  calc_none: "No total",
  totalLabel: "Total",
  totalLabelMixed: "Summary",
  fxOn: "Make calculated column\u2026",
  fxEdit: "Edit formula\u2026",
  fxOff: "Stop calculating this column",
  fxThisCol: "This column",
  fxInsert: "Click to insert:",
  fxNoNames: "No other column has a usable name (not empty, not duplicated)",
  fxHint: "Put column names in braces; you can use + \u2212 \xD7 \xF7 ( )  SUM AVG MIN MAX ROUND",
  fxPlaces: "Decimals",
  fxAuto: "Auto",
  fxStart: "Write a formula, e.g. {Price} * {Qty}",
  fxPreview: "Row 1: {expr} = {v}",
  fxPreviewEmpty: "Row 1: empty ({why})",
  fxNoRows: "No data rows yet",
  fxBlank: "empty",
  fxOk: "OK",
  fxCancel: "Cancel",
  fxLocked: "This column is calculated by a formula. Change the formula from the column menu.",
  fxBadgeTitle: "Calculated: {f}",
  fxErr_empty: "The formula is empty",
  fxErr_syntax: "The formula isn't valid",
  fxErr_paren: "Parentheses don't match",
  fxErr_brace: "Braces don't match: write column names as {Name}",
  fxErr_func: "There's no function \u201C{name}\u201D",
  fxErr_args: "Wrong number of arguments for {name}",
  fxErr_unknownCol: "No column named \u201C{name}\u201D",
  fxErr_ambiguous: "Several columns are named \u201C{name}\u201D; rename one first",
  fxErr_self: "A formula can't use its own column",
  fxErr_cycle: "Calculated columns refer to each other in a loop",
  fxEmpty_input: "\u201C{name}\u201D is empty or not a number",
  fxEmpty_div0: "Division by zero",
  colType: "Column type: {v}",
  colTypeTitle: "Column type",
  colTypeFx: "Result format",
  kind_text: "Text",
  kind_status: "Status (single select)",
  kind_multi: "Multi-select tags",
  kind_date: "Date",
  kind_num: "Number",
  kind_bar: "Progress bar",
  dateStyle: "Written as",
  dateLink: "Daily note link [[2026-11-17]]",
  numFormat: "Number format",
  numGroup: "Thousands separator 1,234",
  numPercent: "Percent 12%",
  numCurrency: "Currency",
  numNone: "None",
  numDecimals: "Decimals",
  numAuto: "Auto",
  calPrev: "Previous month",
  calNext: "Next month",
  calMonth: "{M} {y}",
  calWeekStart: "0",
  calWeekdays: "S,M,T,W,T,F,S",
  calToday: "Today",
  calClear: "Clear",
  notDate: "Not a date: the calendar and date sorting skip it",
  statusColor: "Color of \u201C{v}\u201D",
  defaultText: "Default text color",
  foldTable: "Fold table (header only)",
  unfoldRows: "\u25B8 Show {n} rows",
  headerColumn: "First column as header",
  freezeHeaderCol: "Freeze header column (stays put when scrolling sideways)",
  headerRows: "Header rows",
  headerRowsN: "{n}",
  distributeCols: "Distribute columns evenly",
  fitWidth: "Fit to page width",
  density_comfortable: "Comfortable",
  density_compact: "Compact",
  alignAllLeft: "Align table left",
  alignAllCenter: "Center table",
  alignAllRight: "Align table right",
  vAlignAll_top: "Align table top",
  vAlignAll_middle: "Center table vertically",
  vAlignAll_bottom: "Align table bottom",
  autoWidthAll: "Auto width for all columns",
  clearAllBg: "Clear all colors",
  unmergeCells: "Unmerge cells",
  addRow: "Add row",
  addCol: "Add column",
  addColFirst: "Add column at the start",
  addRowFirst: "Add row below the header",
  rowMenu: "Row actions",
  colMenu: "Column actions",
  resize: "Drag to resize, double-click for auto",
  gray: "Gray",
  red: "Red",
  orange: "Orange",
  yellow: "Yellow",
  green: "Green",
  blue: "Blue",
  purple: "Purple"
};
var lang = "en";
function setLanguage(code) {
  lang = code?.toLowerCase().startsWith("zh") ? "zh" : "en";
}
function t(key) {
  return (lang === "zh" ? zh : en)[key];
}

// src/core/format.ts
var HIGHLIGHT_COLORS = { red: "\u{1F534}", orange: "\u{1F7E0}", yellow: "\u{1F7E1}", green: "\u{1F7E2}", blue: "\u{1F535}", purple: "\u{1F7E3}" };
var HIGHLIGHT_EMOJI = {
  "\u{1F534}": "red",
  "\u{1F7E5}": "red",
  "\u{1F7E0}": "orange",
  "\u{1F7E7}": "orange",
  "\u{1F7E1}": "yellow",
  "\u{1F7E8}": "yellow",
  "\u{1F7E2}": "green",
  "\u{1F7E9}": "green",
  "\u{1F535}": "blue",
  "\u{1F7E6}": "blue",
  "\u{1F7E3}": "purple",
  "\u{1F7EA}": "purple"
};
function highlightColor(inner) {
  const cp = inner.codePointAt(0);
  if (cp === void 0) return null;
  const ch = String.fromCodePoint(cp);
  const color = HIGHLIGHT_EMOJI[ch];
  return color ? { color, length: ch.length } : null;
}
var EMOJI_ALT = Object.keys(HIGHLIGHT_EMOJI).join("|");
var HIGHLIGHT_OPEN_BEFORE = new RegExp(`==(?:${EMOJI_ALT})?$`, "u");
var WHOLE_HIGHLIGHT = new RegExp(`^==(${EMOJI_ALT})?([\\s\\S]+)==$`, "u");
var COLORED_HIGHLIGHT = new RegExp(`==(${EMOJI_ALT})(.+?)==`, "gu");
var COLOR = String.raw`#[0-9a-fA-F]{3,8}|[a-zA-Z]+|rgba?\([\d\s.,%]+\)`;
var COLOR_OPEN_SRC = String.raw`<span style="color:\s*(${COLOR})\s*;?\s*">`;
var BG_OPEN_SRC = String.raw`<mark style="background(?:-color)?:\s*(${COLOR})\s*;?\s*">`;
var TAG_RE = {
  color: new RegExp(`${COLOR_OPEN_SRC}|</span>`, "g"),
  bg: new RegExp(`${BG_OPEN_SRC}|</mark>`, "g")
};
function highlightOf(entry) {
  return HIGHLIGHT_EMOJI[entry] ?? null;
}
function openTag(kind, color) {
  return kind === "color" ? `<span style="color:${color}">` : `<mark style="background:${color}">`;
}
var closeTag = (kind) => kind === "color" ? "</span>" : "</mark>";
function pairs(text, kind) {
  const out = [];
  const stack = [];
  for (const m of text.matchAll(TAG_RE[kind])) {
    const i = m.index ?? 0;
    if (m[1] !== void 0) stack.push({ start: i, end: i + m[0].length, color: m[1] });
    else {
      const o = stack.pop();
      if (o) out.push({ openStart: o.start, openEnd: o.end, closeStart: i, closeEnd: i + m[0].length, color: o.color });
    }
  }
  return out;
}
function trimRange(text, s, e) {
  while (s < e && /\s/.test(text[s])) s++;
  while (e > s && /\s/.test(text[e - 1])) e--;
  return [s, e];
}
function wrapLines(sel, open, close) {
  return sel.split("\n").map((line) => {
    const m = /^(\s*)(.*?)(\s*)$/.exec(line);
    if (!m || !m[2]) return line;
    return `${m[1]}${open}${m[2]}${close}${m[3]}`;
  }).join("\n");
}
function toggleStrike(text, s, e) {
  if (text.slice(s - 2, s) === "~~" && text.slice(e, e + 2) === "~~") {
    return { text: text.slice(0, s - 2) + text.slice(s, e) + text.slice(e + 2), start: s - 2, end: e - 2 };
  }
  const sel = text.slice(s, e);
  if (sel.length > 4 && sel.startsWith("~~") && sel.endsWith("~~")) {
    return { text: text.slice(0, s) + sel.slice(2, -2) + text.slice(e), start: s, end: e - 4 };
  }
  const wrapped = wrapLines(sel, "~~", "~~");
  return { text: text.slice(0, s) + wrapped + text.slice(e), start: s + 2, end: s + wrapped.length - 2 };
}
function toggleUnderline(text, s, e) {
  if (text.slice(s - 3, s) === "<u>" && text.slice(e, e + 4) === "</u>") {
    return { text: text.slice(0, s - 3) + text.slice(s, e) + text.slice(e + 4), start: s - 3, end: e - 3 };
  }
  const sel = text.slice(s, e);
  if (sel.length > 7 && sel.startsWith("<u>") && sel.endsWith("</u>") && !sel.slice(3, -4).includes("<u>")) {
    return { text: text.slice(0, s) + sel.slice(3, -4) + text.slice(e), start: s, end: e - 7 };
  }
  const wrapped = wrapLines(sel, "<u>", "</u>");
  return { text: text.slice(0, s) + wrapped + text.slice(e), start: s + 3, end: s + wrapped.length - 4 };
}
function starsBefore(text, s) {
  let n = 0;
  while (s - n - 1 >= 0 && text[s - n - 1] === "*") n++;
  return n;
}
function starsAfter(text, e) {
  let n = 0;
  while (e + n < text.length && text[e + n] === "*") n++;
  return n;
}
function toggleHighlight(text, s, e, color) {
  const emoji = color ? HIGHLIGHT_COLORS[color] : "";
  const open = HIGHLIGHT_OPEN_BEFORE.exec(text.slice(0, s));
  if (open && text.slice(e, e + 2) === "==") {
    const was = highlightColor(open[0].slice(2))?.color;
    const from = s - open[0].length;
    if (was === color) return { text: text.slice(0, from) + text.slice(s, e) + text.slice(e + 2), start: from, end: from + (e - s) };
    const opener = `==${emoji}`;
    return { text: text.slice(0, from) + opener + text.slice(s), start: from + opener.length, end: from + opener.length + (e - s) };
  }
  const whole = WHOLE_HIGHLIGHT.exec(text.slice(s, e));
  if (whole) {
    const was = whole[1] ? HIGHLIGHT_EMOJI[whole[1]] : void 0;
    const inner = whole[2];
    const next = was === color ? inner : `==${emoji}${inner}==`;
    const lead = was === color ? 0 : 2 + emoji.length;
    return { text: text.slice(0, s) + next + text.slice(e), start: s + lead, end: s + lead + inner.length };
  }
  const sel = text.slice(s, e);
  const wrapped = wrapLines(sel, `==${emoji}`, "==");
  return { text: text.slice(0, s) + wrapped + text.slice(e), start: s + 2 + emoji.length, end: s + wrapped.length - 2 };
}
function removeHighlight(text, s, e) {
  const open = HIGHLIGHT_OPEN_BEFORE.exec(text.slice(0, s));
  if (open && text.slice(e, e + 2) === "==") {
    const from = s - open[0].length;
    return { text: text.slice(0, from) + text.slice(s, e) + text.slice(e + 2), start: from, end: from + (e - s) };
  }
  const whole = WHOLE_HIGHLIGHT.exec(text.slice(s, e));
  if (whole) {
    const inner = whole[2];
    return { text: text.slice(0, s) + inner + text.slice(e), start: s, end: s + inner.length };
  }
  return { text, start: s, end: e };
}
function clearHighlightColors(text, start, end) {
  let out = "";
  let last = 0;
  let [s, e] = [start, end];
  for (const m of text.matchAll(COLORED_HIGHLIGHT)) {
    const from = m.index ?? 0;
    const to = from + m[0].length;
    if (to <= start || from >= end) continue;
    const at = from + 2;
    const len = m[1].length;
    out += text.slice(last, at);
    last = at + len;
    if (at < start) s -= Math.min(len, start - at);
    if (at < end) e -= Math.min(len, end - at);
  }
  return { text: out + text.slice(last), start: s, end: e };
}
function toggleMark(text, s, e, kind) {
  const m = kind === "bold" ? "**" : "*";
  const len = m.length;
  const has = (before, after) => {
    const n = Math.min(before, after);
    return kind === "bold" ? n >= 2 : n % 2 === 1;
  };
  if (has(starsBefore(text, s), starsAfter(text, e))) {
    return { text: text.slice(0, s - len) + text.slice(s, e) + text.slice(e + len), start: s - len, end: e - len };
  }
  const sel0 = text.slice(s, e);
  const lead = /^\*+/.exec(sel0)?.[0].length ?? 0;
  const tail = /\*+$/.exec(sel0)?.[0].length ?? 0;
  if (sel0.length > lead + tail && has(lead, tail)) {
    return { text: text.slice(0, s) + sel0.slice(len, -len) + text.slice(e), start: s, end: e - len * 2 };
  }
  const sel = text.slice(s, e);
  const wrapped = wrapLines(sel, m, m);
  return { text: text.slice(0, s) + wrapped + text.slice(e), start: s + len, end: s + wrapped.length - len };
}
function dropEmpty(text, kind) {
  const re = new RegExp(`${kind === "color" ? COLOR_OPEN_SRC : BG_OPEN_SRC}${closeTag(kind).replace("/", "\\/")}`, "g");
  return text.replace(re, "");
}
var ANY_TAG = `${COLOR_OPEN_SRC}|${BG_OPEN_SRC}|</span>|</mark>`;
var LEADING_TAG = new RegExp(`^(?:${ANY_TAG})`);
var TRAILING_TAG = new RegExp(`(?:${ANY_TAG})$`);
function alignToTags(text, s, e) {
  for (let m; s < e && (m = LEADING_TAG.exec(text.slice(s, e))); ) s += m[0].length;
  for (let m; s < e && (m = TRAILING_TAG.exec(text.slice(s, e))); ) e -= m[0].length;
  if (s === e) return [s, e];
  for (let changed = true; changed; ) {
    changed = false;
    for (const p of [...pairs(text, "color"), ...pairs(text, "bg")]) {
      const openIn = p.openStart >= s && p.openStart < e;
      const closeIn = p.closeEnd > s && p.closeEnd <= e;
      if (openIn !== closeIn) {
        s = Math.min(s, p.openStart);
        e = Math.max(e, p.closeEnd);
        changed = true;
      }
    }
  }
  return [s, e];
}
function applyColor(text, s, e, kind, color) {
  const exact = pairs(text, kind).find((p) => p.openStart === s && p.closeEnd === e);
  if (exact) {
    s = exact.openEnd;
    e = exact.closeStart;
  }
  const enclosing = pairs(text, kind).filter((p) => p.openEnd <= s && p.closeStart >= e).sort((a, b) => b.openEnd - a.openEnd)[0];
  if (enclosing) {
    const other = kind === "color" ? "bg" : "color";
    for (let changed = true; changed; ) {
      changed = false;
      for (const p of pairs(text, other)) {
        if (p.openEnd === s && p.closeStart === e && p.openStart >= enclosing.openEnd && p.closeEnd <= enclosing.closeStart) {
          s = p.openStart;
          e = p.closeEnd;
          changed = true;
        }
      }
    }
  }
  let before;
  let after;
  let sel = text.slice(s, e);
  let toggledOff = false;
  if (enclosing) {
    const open = text.slice(enclosing.openStart, enclosing.openEnd);
    const close = closeTag(kind);
    before = text.slice(0, enclosing.openStart) + open + text.slice(enclosing.openEnd, s) + close;
    after = open + text.slice(e, enclosing.closeStart) + close + text.slice(enclosing.closeEnd);
    toggledOff = color !== null && enclosing.color.toLowerCase() === color.toLowerCase();
  } else {
    before = text.slice(0, s);
    after = text.slice(e);
  }
  sel = sel.replace(TAG_RE[kind], "");
  const wrapped = color !== null && !toggledOff ? wrapLines(sel, openTag(kind, color), closeTag(kind)) : sel;
  const cleanBefore = dropEmpty(before, kind);
  const cleanAfter = dropEmpty(after, kind);
  const lead = wrapped === sel ? 0 : openTag(kind, color ?? "").length;
  const tail = wrapped === sel ? 0 : closeTag(kind).length;
  return {
    text: cleanBefore + wrapped + cleanAfter,
    start: cleanBefore.length + lead,
    end: cleanBefore.length + wrapped.length - tail
  };
}
function applyInlineFormat(text, start, end, fmt2) {
  let [s, e] = start === end ? [0, text.length] : [Math.min(start, end), Math.max(start, end)];
  [s, e] = trimRange(text, s, e);
  [s, e] = alignToTags(text, s, e);
  if (s === e) return { text, start, end };
  switch (fmt2.kind) {
    case "bold":
    case "italic":
      return toggleMark(text, s, e, fmt2.kind);
    case "strike":
      return toggleStrike(text, s, e);
    case "underline":
      return toggleUnderline(text, s, e);
    case "highlight":
      return toggleHighlight(text, s, e, fmt2.color);
    case "color":
      return applyColor(text, s, e, fmt2.kind, fmt2.color);
    case "bg": {
      const h = removeHighlight(text, s, e);
      return applyColor(h.text, h.start, h.end, "bg", fmt2.color);
    }
    case "nocolor":
      return applyColor(text, s, e, "color", null);
    case "nobg": {
      const b = applyColor(text, s, e, "bg", null);
      const c = clearHighlightColors(b.text, b.start, b.end);
      return removeHighlight(c.text, c.start, c.end);
    }
    case "clear": {
      const a = applyColor(text, s, e, "color", null);
      const b = applyColor(a.text, a.start, a.end, "bg", null);
      return clearHighlightColors(b.text, b.start, b.end);
    }
  }
}

// src/core/color-palette.ts
var THEME_HIGHLIGHT = "==";
function highlightFormat(kind, color) {
  if (kind === "bg" && color === THEME_HIGHLIGHT) return { kind: "highlight" };
  const hl = kind === "bg" ? highlightOf(color) : null;
  return hl ? { kind: "highlight", color: hl } : { kind, color };
}
function colorFormat(kind, color) {
  if (color === null) return { kind: kind === "text" ? "nocolor" : "nobg" };
  return highlightFormat(kind === "text" ? "color" : "bg", color);
}
function paintColor(el, color, kind) {
  el.classList.remove("mm-hl-chip");
  delete el.dataset.highlight;
  el.style.removeProperty("background");
  if (!color) return;
  const hl = color === THEME_HIGHLIGHT ? "" : highlightOf(color);
  if (hl !== null) {
    el.classList.add("mm-hl-chip");
    if (hl) el.dataset.highlight = hl;
    return;
  }
  el.style.background = kind === "node" && /^[a-z]+$/i.test(color) ? `var(--mm-c-${color}, ${color})` : color;
}
var GRID = [
  ["#fde2e2", "#f9b4b4", "#f07070", "#e03e3e", "#b42b2b", "#7a1d1d"],
  ["#ffe8cc", "#ffc78a", "#ff9f43", "#f08c00", "#c06a00", "#7f4700"],
  ["#fff3bf", "#ffe066", "#ffd43b", "#fab005", "#c99400", "#806000"],
  ["#d3f9d8", "#8ce99a", "#51cf66", "#27ae60", "#1e7d45", "#12502c"],
  ["#c3fae8", "#63e6be", "#20c997", "#0ca678", "#087f5b", "#054c37"],
  ["#d0ebff", "#74c0fc", "#339af0", "#2f80ed", "#1864ab", "#0b3d6e"],
  ["#e5dbff", "#b197fc", "#845ef7", "#7048e8", "#5235b5", "#33206f"],
  ["#ffdeeb", "#faa2c1", "#f06595", "#d6336c", "#a61e4d", "#6b1132"],
  ["#f1f3f5", "#ced4da", "#adb5bd", "#868e96", "#495057", "#212529"],
  ["#ffffff", "#e9ecef", "#9aa0a6", "#5f6368", "#3c4043", "#000000"]
];
var RECENT_MAX = 8;
function withAlpha(hex, alpha) {
  let h = hex.replace(/^#/, "").toLowerCase();
  if (h.length === 3) h = h.replace(/./g, (c) => c + c);
  if (h.length === 8) h = h.slice(0, 6);
  if (!/^[0-9a-f]{6}$/.test(h)) return hex;
  const a = Math.max(0, Math.min(100, Math.round(alpha)));
  return a >= 100 ? `#${h}` : `#${h}${Math.round(a * 255 / 100).toString(16).padStart(2, "0")}`;
}
function pushRecent(list, color) {
  const c = color.toLowerCase();
  return [color, ...list.filter((x) => x.toLowerCase() !== c)].slice(0, RECENT_MAX);
}
function createPalette(doc, o) {
  const root = doc.createElement("div");
  root.className = "mm-palette";
  root.addEventListener("pointerdown", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
  });
  root.addEventListener("mousedown", (ev) => ev.preventDefault());
  let alpha = o.defaultAlpha;
  const preview = doc.createElement("span");
  preview.className = "mm-palette-preview";
  const hexOut = doc.createElement("span");
  hexOut.className = "mm-palette-hex";
  const show = (c) => {
    preview.style.background = c ?? "transparent";
    hexOut.textContent = c ?? "";
  };
  const swatch = (parent, title, paint, pick, hover) => {
    const b = doc.createElement("button");
    b.type = "button";
    b.className = "mm-palette-swatch";
    b.setAttribute("aria-label", title);
    o.tip?.(b, title);
    paint(b);
    b.addEventListener("click", (ev) => {
      ev.stopPropagation();
      pick();
    });
    if (hover) b.addEventListener("pointerenter", () => show(hover()));
    parent.append(b);
    return b;
  };
  const section = (title) => {
    const h = doc.createElement("div");
    h.className = "mm-palette-title";
    h.textContent = title;
    root.append(h);
    const row = doc.createElement("div");
    row.className = "mm-palette-row";
    root.append(row);
    return row;
  };
  const common = section(o.text.common);
  swatch(common, o.noneLabel, (b) => b.classList.add("is-none"), () => o.onPick(null));
  for (const x of o.extras ?? []) swatch(common, x.label, x.paint, () => o.onPick(x.value));
  for (const c of o.common) swatch(common, o.label(c), (b) => o.paint(b, c), () => o.onPick(c), () => c);
  const grid = doc.createElement("div");
  grid.className = "mm-palette-grid";
  root.append(grid);
  for (let r = 0; r < GRID[0].length; r++)
    for (const col of GRID) {
      const c = col[r];
      swatch(
        grid,
        c,
        (b) => b.style.background = c,
        () => o.onPick(o.alpha ? withAlpha(c, alpha) : c),
        () => o.alpha ? withAlpha(c, alpha) : c
      );
    }
  if (o.recent.length) {
    const recent = section(o.text.recent);
    for (const c of o.recent) swatch(recent, o.label(c), (b) => o.paint(b, c), () => o.onPick(c), () => c);
  }
  if (o.alpha) {
    const line = doc.createElement("div");
    line.className = "mm-palette-alpha";
    const name = doc.createElement("span");
    name.textContent = o.text.alpha;
    const track = doc.createElement("div");
    track.className = "mm-palette-track";
    const fill = doc.createElement("div");
    fill.className = "mm-palette-fill";
    const thumb = doc.createElement("div");
    thumb.className = "mm-palette-thumb";
    track.append(fill, thumb);
    const val = doc.createElement("span");
    val.className = "mm-palette-alpha-val";
    const set = (a) => {
      alpha = Math.max(0, Math.min(100, Math.round(a)));
      fill.style.width = `${alpha}%`;
      thumb.style.left = `${alpha}%`;
      val.textContent = `${alpha}%`;
    };
    set(alpha);
    const at = (ev) => {
      const r = track.getBoundingClientRect();
      set((ev.clientX - r.left) / Math.max(1, r.width) * 100);
    };
    track.addEventListener("pointerdown", (ev) => {
      at(ev);
      try {
        track.setPointerCapture(ev.pointerId);
      } catch {
      }
      const move = (e) => at(e);
      const up = () => {
        track.removeEventListener("pointermove", move);
        track.removeEventListener("pointerup", up);
        track.removeEventListener("pointercancel", up);
      };
      track.addEventListener("pointermove", move);
      track.addEventListener("pointerup", up);
      track.addEventListener("pointercancel", up);
    });
    line.append(name, track, val);
    root.append(line);
  }
  const foot = doc.createElement("div");
  foot.className = "mm-palette-foot";
  const left = doc.createElement("span");
  left.className = "mm-palette-current";
  left.append(preview, hexOut);
  const custom = doc.createElement("button");
  custom.type = "button";
  custom.className = "mm-palette-custom";
  custom.textContent = o.text.custom;
  custom.addEventListener("click", (ev) => {
    ev.stopPropagation();
    const apply = o.onCustom?.() ?? ((c) => o.onPick(c));
    const input = doc.createElement("input");
    input.type = "color";
    input.className = "mm-palette-native";
    doc.body.append(input);
    const done = () => {
      input.remove();
    };
    input.addEventListener("change", () => {
      apply(o.alpha ? withAlpha(input.value, alpha) : input.value);
      done();
    });
    input.addEventListener("blur", () => (doc.defaultView ?? window).setTimeout(done, 1e3));
    input.click();
  });
  foot.append(left, custom);
  root.append(foot);
  show(null);
  return root;
}
function createColorSplit(o) {
  const doc = o.doc;
  const wrap = doc.createElement("span");
  wrap.className = `mm-color-split ${o.cls}`;
  const main = doc.createElement("button");
  main.type = "button";
  main.className = "mm-color-split-main";
  main.setAttribute("aria-label", o.title);
  o.tip(main, o.title);
  const face = doc.createElement("span");
  face.className = "mm-color-split-face";
  o.face(face);
  const bar = doc.createElement("span");
  bar.className = "mm-color-split-bar";
  main.append(face, bar);
  const caret = doc.createElement("button");
  caret.type = "button";
  caret.className = "mm-color-split-caret";
  caret.setAttribute("aria-label", o.caretTitle);
  o.tip(caret, o.caretTitle);
  caret.textContent = "\u25BE";
  const refresh = () => o.paintBar(bar, o.current());
  refresh();
  main.addEventListener("click", (ev) => {
    ev.stopPropagation();
    o.onApply();
    refresh();
  });
  caret.addEventListener("click", (ev) => {
    ev.stopPropagation();
    o.onOpen(wrap);
  });
  wrap.refreshColor = refresh;
  wrap.append(main, caret);
  return wrap;
}
function refreshColorSplit(el) {
  el?.refreshColor?.();
}

// src/core/table.ts
var CELL_COLORS = ["gray", "red", "orange", "yellow", "green", "blue", "purple"];
var CALCS = ["sum", "avg", "count", "max", "min"];
var VALIGNS = ["middle", "bottom"];
var CURRENCIES = ["\xA5", "$", "\u20AC", "\xA3"];
var TABLE_STYLES = ["default", "zebra", "minimal", "academic"];
var TABLE_DENSITIES = ["comfortable", "compact"];
var FONT_SIZES = [0.75, 0.85, 1, 1.15, 1.3];
var fontSizeOk = (v) => typeof v === "number" && Number.isFinite(v) && v >= 0.5 && v <= 3;
var META_PREFIX = "gogoga-table:";
var META_RE = /^\s*<!--\s*gogoga-table:\s*(\{.*\})\s*-->\s*$/;
var DELIM_CELL_RE = /^\s*:?-+:?\s*$/;
var BR_RE = /<br\s*\/?>/gi;
function colName(c) {
  let s = "";
  for (let n = c + 1; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + (n - 1) % 26) + s;
  return s;
}
function cellRef(r, c) {
  return colName(c) + (r + 1);
}
function parseRef(ref) {
  const m = /^([A-Z]+)([1-9]\d*)$/.exec(ref);
  if (!m) return null;
  let c = 0;
  for (const ch of m[1]) c = c * 26 + (ch.charCodeAt(0) - 64);
  return { r: Number(m[2]) - 1, c: c - 1 };
}
function parseRange(s) {
  const [a, b] = s.split(":");
  const p = a ? parseRef(a) : null;
  const q = b ? parseRef(b) : null;
  if (!p || !q) return null;
  const r = { r1: Math.min(p.r, q.r), c1: Math.min(p.c, q.c), r2: Math.max(p.r, q.r), c2: Math.max(p.c, q.c) };
  return r.r1 === r.r2 && r.c1 === r.c2 ? null : r;
}
function rangeRef(r) {
  return `${cellRef(r.r1, r.c1)}:${cellRef(r.r2, r.c2)}`;
}
function splitRow(line) {
  let s = line.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);
  const out = [];
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "\\" && s[i + 1] === "|") {
      cur += "|";
      i++;
    } else if (ch === "|") {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out.map((c) => c.trim());
}
function isDelimiterRow(line) {
  if (!line.includes("-")) return false;
  const cells = splitRow(line);
  return cells.length > 0 && cells.every((c) => DELIM_CELL_RE.test(c));
}
function alignOf(cell) {
  const c = cell.trim();
  const l = c.startsWith(":");
  const r = c.endsWith(":");
  return l && r ? "center" : r ? "right" : l ? "left" : null;
}
function parseMetaLine(line) {
  const m = META_RE.exec(line);
  if (!m) return null;
  try {
    const v = JSON.parse(m[1]);
    return v && typeof v === "object" && !Array.isArray(v) ? sanitizeMeta(v) : null;
  } catch {
    return null;
  }
}
function cleanColType(x) {
  if (!x || typeof x !== "object" || Array.isArray(x)) return null;
  const o = x;
  if (o.t === "date") return o.f === "slash" || o.f === "link" ? { t: "date", f: o.f } : { t: "date" };
  if (o.t === "bar") return { t: "bar" };
  if (o.t === "multi") return { t: "multi" };
  if (o.t === "num") {
    const n = { t: "num" };
    if (o.g === 1) n.g = 1;
    if (CURRENCIES.includes(o.u)) n.u = o.u;
    if (o.p === 1) n.p = 1;
    if (typeof o.d === "number" && Number.isInteger(o.d) && o.d >= 0 && o.d <= 4) n.d = o.d;
    return n;
  }
  return null;
}
function sanitizeMeta(raw) {
  const meta = { ...raw };
  if (raw.w !== void 0) {
    if (Array.isArray(raw.w)) meta.w = raw.w.map((x) => typeof x === "number" && isFinite(x) && x > 0 ? Math.round(x) : null);
    else delete meta.w;
  }
  if (raw.headerCol !== void 0 && raw.headerCol !== true) delete meta.headerCol;
  if (raw.freeze !== void 0 && raw.freeze !== 1) delete meta.freeze;
  if (raw.wide !== void 0 && raw.wide !== 1) delete meta.wide;
  if (raw.head !== void 0 && !(raw.head === 2 || raw.head === 3)) delete meta.head;
  if (raw.calc !== void 0) {
    const calc = Array.isArray(raw.calc) ? raw.calc.map((x) => CALCS.includes(x) ? x : null) : [];
    if (calc.some(Boolean)) meta.calc = calc;
    else delete meta.calc;
  }
  if (raw.fx !== void 0) {
    const fx = Array.isArray(raw.fx) ? raw.fx.map((x) => typeof x === "string" && x.trim() ? x : null) : [];
    if (fx.some(Boolean)) meta.fx = fx;
    else delete meta.fx;
  }
  if (raw.fxd !== void 0) {
    const fxd = Array.isArray(raw.fxd) ? raw.fxd.map((x) => typeof x === "number" && Number.isInteger(x) && x >= 0 && x <= 3 ? x : null) : [];
    if (fxd.some((x) => x !== null)) meta.fxd = fxd;
    else delete meta.fxd;
  }
  if (raw.va !== void 0) {
    const va = Array.isArray(raw.va) ? raw.va.map((x) => VALIGNS.includes(x) ? x : null) : [];
    if (va.some(Boolean)) meta.va = va;
    else delete meta.va;
  }
  if (raw.ty !== void 0) {
    const ty = Array.isArray(raw.ty) ? raw.ty.map(cleanColType) : [];
    if (ty.some(Boolean)) meta.ty = ty;
    else delete meta.ty;
  }
  if (raw.opts !== void 0) {
    const opts = Array.isArray(raw.opts) ? raw.opts.map((o) => {
      if (!o || typeof o !== "object" || Array.isArray(o)) return null;
      const m = {};
      for (const [k, v] of Object.entries(o)) if (CELL_COLORS.includes(v)) m[k] = v;
      return m;
    }) : [];
    if (opts.some(Boolean)) meta.opts = opts;
    else delete meta.opts;
  }
  if (raw.fg !== void 0) {
    const fg = {};
    if (raw.fg && typeof raw.fg === "object" && !Array.isArray(raw.fg)) {
      for (const [k, v] of Object.entries(raw.fg)) {
        if (parseRef(k) && CELL_COLORS.includes(v)) fg[k] = v;
      }
    }
    if (Object.keys(fg).length) meta.fg = fg;
    else delete meta.fg;
  }
  if (raw.bg !== void 0) {
    const bg = {};
    if (raw.bg && typeof raw.bg === "object" && !Array.isArray(raw.bg)) {
      for (const [k, v] of Object.entries(raw.bg)) {
        if (parseRef(k) && CELL_COLORS.includes(v)) bg[k] = v;
      }
    }
    if (Object.keys(bg).length) meta.bg = bg;
    else delete meta.bg;
  }
  if (raw.fs !== void 0 && (!fontSizeOk(raw.fs) || raw.fs === 1)) delete meta.fs;
  if (raw.fz !== void 0) {
    const fz = {};
    if (raw.fz && typeof raw.fz === "object" && !Array.isArray(raw.fz)) {
      for (const [k, v] of Object.entries(raw.fz)) {
        if (parseRef(k) && fontSizeOk(v) && v !== 1) fz[k] = v;
      }
    }
    if (Object.keys(fz).length) meta.fz = fz;
    else delete meta.fz;
  }
  if (raw.style !== void 0 && !TABLE_STYLES.includes(raw.style)) delete meta.style;
  if (raw.density !== void 0 && !TABLE_DENSITIES.includes(raw.density)) delete meta.density;
  if (raw.merge !== void 0) {
    const merge = Array.isArray(raw.merge) ? raw.merge.filter((m) => typeof m === "string" && parseRange(m) !== null) : [];
    if (merge.length) meta.merge = merge;
    else delete meta.merge;
  }
  return meta;
}
function cellFromSource(s) {
  return s.replace(BR_RE, "\n");
}
function cellToSource(s) {
  return s.replace(/\r\n?/g, "\n").trim().replace(/\n/g, "<br>").replace(/\|/g, "\\|");
}
function parseTable(lines, meta = null) {
  if (lines.length < 2 || !isDelimiterRow(lines[1])) return null;
  const header = splitRow(lines[0]);
  const delim = splitRow(lines[1]);
  if (header.length !== delim.length) return null;
  const rows = [header, ...lines.slice(2).map(splitRow)];
  const width2 = Math.max(...rows.map((r) => r.length));
  const cells = rows.map((r) => Array.from({ length: width2 }, (_, i) => cellFromSource(r[i] ?? "")));
  const align = Array.from({ length: width2 }, (_, i) => i < delim.length ? alignOf(delim[i]) : null);
  const all = [lines[0], lines[1], ...lines.slice(2)];
  return {
    cells,
    align,
    meta: meta ?? {},
    style: { outerPipes: lines[0].trim().startsWith("|"), padded: looksPadded(all) }
  };
}
function looksPadded(lines) {
  if (lines.length < 3) return false;
  const w = displayWidth(lines[0].trimEnd());
  return w > 0 && lines.every((l) => displayWidth(l.trimEnd()) === w);
}
function displayWidth(s) {
  let w = 0;
  for (const ch of s) {
    const cp = ch.codePointAt(0) ?? 0;
    if (cp < 32 || cp >= 768 && cp <= 879 || cp === 8205 || cp >= 65024 && cp <= 65039) continue;
    w += isWide(cp) ? 2 : 1;
  }
  return w;
}
function isWide(cp) {
  return cp >= 4352 && cp <= 4447 || cp >= 11904 && cp <= 12350 || cp >= 12353 && cp <= 13311 || cp >= 13312 && cp <= 19903 || cp >= 19968 && cp <= 40959 || cp >= 40960 && cp <= 42191 || cp >= 44032 && cp <= 55203 || cp >= 63744 && cp <= 64255 || cp >= 65072 && cp <= 65103 || cp >= 65280 && cp <= 65376 || cp >= 65504 && cp <= 65510 || cp >= 127744 && cp <= 128591 || cp >= 129280 && cp <= 129535 || cp >= 131072 && cp <= 262141;
}
function delimCell(a, width2) {
  if (!width2) return a === "center" ? ":---:" : a === "right" ? "---:" : a === "left" ? ":---" : "---";
  const n = Math.max(3, width2);
  if (a === "center") return ":" + "-".repeat(Math.max(1, n - 2)) + ":";
  if (a === "right") return "-".repeat(Math.max(2, n - 1)) + ":";
  if (a === "left") return ":" + "-".repeat(Math.max(2, n - 1));
  return "-".repeat(n);
}
function metaToWrite(meta, cols) {
  const out = { ...meta };
  if (out.w) {
    const w = out.w.slice(0, cols);
    if (w.some((x) => x != null)) {
      while (w.length && w[w.length - 1] == null) w.pop();
      out.w = w;
    } else delete out.w;
  }
  if (out.bg && !Object.keys(out.bg).length) delete out.bg;
  if (out.fg && !Object.keys(out.fg).length) delete out.fg;
  if (out.fz && !Object.keys(out.fz).length) delete out.fz;
  if (out.fs === 1) delete out.fs;
  for (const key of ["calc", "opts", "va", "ty"]) {
    const a = out[key];
    if (!a) continue;
    const b = a.slice(0, cols);
    if (b.some(Boolean)) {
      while (b.length && !b[b.length - 1]) b.pop();
      out[key] = b;
    } else delete out[key];
  }
  if (out.merge && !out.merge.length) delete out.merge;
  for (const k of Object.keys(out)) if (out[k] === void 0) delete out[k];
  return Object.keys(out).length ? out : null;
}
function metaLine(meta) {
  return `<!-- ${META_PREFIX} ${JSON.stringify(meta).replace(/\|/g, "\\u007c")} -->`;
}
function serializeTable(t2) {
  const cols = t2.align.length;
  const src = t2.cells.map((row) => row.map(cellToSource));
  const widths2 = Array.from({ length: cols }, (_, c) => t2.style.padded ? Math.max(3, ...src.map((r) => displayWidth(r[c]))) : 0);
  const pad2 = (s, c) => {
    if (!t2.style.padded) return s;
    const extra = widths2[c] - displayWidth(s);
    if (extra <= 0) return s;
    const a = t2.align[c];
    if (a === "right") return " ".repeat(extra) + s;
    if (a === "center") return " ".repeat(Math.floor(extra / 2)) + s + " ".repeat(Math.ceil(extra / 2));
    return s + " ".repeat(extra);
  };
  const line = (cells) => {
    const inner = cells.map((s) => ` ${s} `).join("|");
    return t2.style.outerPipes ? `|${inner}|` : inner.trim() === "" ? inner : inner.replace(/^ /, "").replace(/ $/, "");
  };
  const out = [];
  out.push(line(src[0].map(pad2)));
  out.push(line(t2.align.map((a, c) => delimCell(a, widths2[c]))));
  for (const row of src.slice(1)) out.push(line(row.map(pad2)));
  const meta = metaToWrite(t2.meta, cols);
  if (meta) out.push(metaLine(meta));
  return out;
}
function emptyTable(rows, cols) {
  return {
    cells: Array.from({ length: Math.max(2, rows) }, () => Array.from({ length: Math.max(1, cols) }, () => "")),
    align: Array.from({ length: Math.max(1, cols) }, () => null),
    meta: {},
    style: { outerPipes: true, padded: false }
  };
}
function serializeBlock(t2, tail) {
  const lines = serializeTable(t2);
  const hasMeta = lines.length > 0 && lines[lines.length - 1].startsWith(`<!-- ${META_PREFIX}`);
  const table = hasMeta ? lines.slice(0, -1) : lines;
  const out = [...table, ...tail];
  if (hasMeta) {
    const blockId = tail.length > 0 && /^\^[A-Za-z0-9-]+\s*$/.test(tail[0]);
    if (blockId && out[out.length - 1].trim() !== "") out.push("");
    out.push(lines[lines.length - 1]);
  }
  return out;
}

// src/core/fill.ts
var LISTS = [
  ["\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D", "\u5468\u65E5"],
  ["\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D", "\u661F\u671F\u65E5"],
  ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],
  ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],
  ["\u6625", "\u590F", "\u79CB", "\u51AC"]
];
var NUM_RE = /^-?\d+(?:\.\d+)?$/;
var DATE_RE = /^(\d{4})([-/.])(\d{1,2})\2(\d{1,2})$/;
var TAIL_NUM_RE = /^(.*?)(\d+)(\D*)$/;
function decimals(s) {
  const i = s.indexOf(".");
  return i < 0 ? 0 : s.length - i - 1;
}
function fmtNum(v, places) {
  return places ? v.toFixed(places) : String(Math.round(v));
}
function parseDate(s) {
  const m = DATE_RE.exec(s.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo2 = Number(m[3]);
  const d = Number(m[4]);
  const t2 = Date.UTC(y, mo2 - 1, d);
  const back = new Date(t2);
  if (back.getUTCMonth() !== mo2 - 1 || back.getUTCDate() !== d) return null;
  return { t: t2, sep: m[2], pad: m[3].length === 2 };
}
function fmtDate(t2, sep, pad2) {
  const d = new Date(t2);
  const p = (n) => pad2 ? String(n).padStart(2, "0") : String(n);
  return `${d.getUTCFullYear()}${sep}${p(d.getUTCMonth() + 1)}${sep}${p(d.getUTCDate())}`;
}
function fillSeries(source, count, backward = false, copy = false) {
  const src = source.map((s) => s.trim());
  const n = src.length;
  if (!n || count <= 0) return [];
  const out = [];
  const at = (k) => backward ? -k : n - 1 + k;
  if (copy) {
    for (let k = 1; k <= count; k++) {
      const i = at(k);
      out.push(source[(i % n + n) % n]);
    }
    return out;
  }
  if (src.every((s) => NUM_RE.test(s))) {
    const vals = src.map(Number);
    const step = n === 1 ? 1 : (vals[n - 1] - vals[0]) / (n - 1);
    const places = Math.max(...src.map(decimals), decimals(String(step)) > 6 ? 6 : decimals(String(step)));
    for (let k = 1; k <= count; k++) out.push(fmtNum(vals[0] + step * at(k), places));
    return out;
  }
  const dates = src.map(parseDate);
  if (dates.every((d) => d)) {
    const ds = dates;
    const day = 864e5;
    const step = n === 1 ? day : (ds[n - 1].t - ds[0].t) / (n - 1);
    for (let k = 1; k <= count; k++) out.push(fmtDate(ds[0].t + step * at(k), ds[0].sep, ds[0].pad));
    return out;
  }
  for (const list of LISTS) {
    const idx = src.map((s) => list.indexOf(s));
    if (idx.every((i) => i >= 0)) {
      const step = n === 1 ? 1 : (idx[n - 1] - idx[0]) / (n - 1);
      if (Number.isInteger(step) && idx.every((v, i) => v === idx[0] + step * i)) {
        const len = list.length;
        for (let k = 1; k <= count; k++) out.push(list[((idx[0] + step * at(k)) % len + len) % len]);
        return out;
      }
    }
  }
  const parts = src.map((s) => TAIL_NUM_RE.exec(s));
  if (parts.every((m) => m) && parts.every((m) => m[1] === parts[0][1] && m[3] === parts[0][3])) {
    const ms = parts;
    const nums = ms.map((m) => Number(m[2]));
    const step = n === 1 ? 1 : (nums[n - 1] - nums[0]) / (n - 1);
    if (Number.isInteger(step) && nums.every((v, i) => v === nums[0] + step * i)) {
      const width2 = ms[0][2].length;
      const zeroPad = ms[0][2].startsWith("0") && width2 > 1;
      for (let k = 1; k <= count; k++) {
        const v = nums[0] + step * at(k);
        const body = v < 0 ? String(v) : zeroPad ? String(v).padStart(width2, "0") : String(v);
        out.push(ms[0][1] + body + ms[0][3]);
      }
      return out;
    }
  }
  for (let k = 1; k <= count; k++) {
    const i = at(k);
    out.push(source[(i % n + n) % n]);
  }
  return out;
}

// src/core/coltype.ts
var WRAP_RE = /^(\*\*|__|\*|_|==|~~|`)(.*)\1$/;
var NUM_RE2 = /^([+-])?([¥$€£])?([+-])?(\d[\d,]*(?:\.\d+)?|\.\d+)(%)?$/;
function readNumber(text) {
  let s = text.trim();
  let wrap = "";
  const w = WRAP_RE.exec(s);
  if (w) {
    wrap = w[1];
    s = w[2];
  }
  s = s.replace(/[\s，]/g, "");
  const m = NUM_RE2.exec(s);
  if (!m || m[1] && m[3]) return null;
  const digits = m[4].replace(/,/g, "");
  if (!/^\d*\.?\d+$/.test(digits)) return null;
  const neg = (m[1] ?? m[3]) === "-";
  const i = digits.indexOf(".");
  return { shown: (neg ? -1 : 1) * Number(digits), places: i < 0 ? 0 : digits.length - i - 1, pct: !!m[5], wrap };
}
function group(int) {
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function formatNumber(v, f, places) {
  if (!Number.isFinite(v)) return "";
  const shown = f.p ? v * 100 : v;
  return writeShown(shown, f, places);
}
function writeShown(shown, f, places) {
  let body;
  if (places === null) {
    const r = Math.round(Math.abs(shown) * 100) / 100;
    body = Number.isInteger(r) ? String(r) : r.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  } else body = Math.abs(shown).toFixed(places);
  if (/e/i.test(body)) return String(shown);
  const neg = shown < 0 && !/^0(\.0+)?$/.test(body);
  const [int, dec] = body.split(".");
  const num = (f.g ? group(int) : int) + (dec !== void 0 ? "." + dec : "");
  return (neg ? "-" : "") + (f.u ?? "") + num + (f.p ? "%" : "");
}
function reformatNumber(text, f) {
  const n = readNumber(text);
  if (!n) return text;
  let shown = n.shown;
  let places = n.places;
  if (!f.p && n.pct) {
    shown = n.shown / 100;
    places += 2;
    const s = shown.toFixed(places).replace(/0+$/, "");
    places = s.includes(".") ? s.length - s.indexOf(".") - 1 : 0;
  }
  const d = f.d === void 0 ? places : Math.max(f.d, places);
  return n.wrap + writeShown(shown, f, d) + n.wrap;
}
function validYmd(y, m, d) {
  if (m < 1 || m > 12 || d < 1 || y < 1e3 || y > 9999) return false;
  const back = new Date(Date.UTC(y, m - 1, d));
  return back.getUTCMonth() === m - 1 && back.getUTCDate() === d;
}
var DATE_RE2 = /(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})日?/;
var ONLY_DATE_RE = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/;
var LINK_RE = /^\[\[([^\]|#^]+)(?:[|#^][^\]]*)?\]\]$/;
function readDate(text, parseNote) {
  const s = text.trim();
  const link = LINK_RE.exec(s);
  if (link && parseNote) {
    const name = link[1].split("/").pop() ?? link[1];
    const p = parseNote(name);
    if (p) return p;
  }
  const m = DATE_RE2.exec(s);
  if (!m) return null;
  const v = { y: +m[1], m: +m[2], d: +m[3] };
  return validYmd(v.y, v.m, v.d) ? v : null;
}
var pad = (n) => String(n).padStart(2, "0");
var isoDate = (v) => `${v.y}-${pad(v.m)}-${pad(v.d)}`;
function writeDate(v, f, noteName) {
  if (f === "slash") return `${v.y}/${pad(v.m)}/${pad(v.d)}`;
  if (f === "link") return `[[${noteName ? noteName(v) : isoDate(v)}]]`;
  return isoDate(v);
}
function reformatDate(text, f) {
  if (f === "link") return text;
  const m = ONLY_DATE_RE.exec(text.trim());
  if (!m || !validYmd(+m[1], +m[2], +m[3])) return text;
  return writeDate({ y: +m[1], m: +m[2], d: +m[3] }, f);
}
var RELATIVE_DAYS = { \u524D\u5929: -2, \u6628\u5929: -1, \u4ECA\u5929: 0, \u660E\u5929: 1, \u540E\u5929: 2, yesterday: -1, today: 0, tomorrow: 1 };
function parseLooseDate(text, today) {
  const s = text.trim().toLowerCase();
  if (s in RELATIVE_DAYS) {
    const d = new Date(Date.UTC(today.y, today.m - 1, today.d + RELATIVE_DAYS[s]));
    return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate() };
  }
  let m = /^(\d{4})\s*(?:[-/.]\s*(\d{1,2})\s*[-/.]|年\s*(\d{1,2})\s*月)\s*(\d{1,2})\s*(?:日|号)?$/.exec(s);
  let v = m ? { y: +m[1], m: +(m[2] ?? m[3]), d: +m[4] } : null;
  if (!v && (m = /^(\d{4})(\d{2})(\d{2})$/.exec(s))) v = { y: +m[1], m: +m[2], d: +m[3] };
  if (!v && (m = /^(\d{1,2})\s*(?:[-/.]|月)\s*(\d{1,2})\s*(?:日|号)?$/.exec(s))) v = { y: today.y, m: +m[1], d: +m[2] };
  return v && validYmd(v.y, v.m, v.d) ? v : null;
}
function readProgress(text) {
  const s = text.trim().replace(/\s/g, "");
  const frac = /^(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/.exec(s);
  if (frac) return +frac[2] > 0 ? +frac[1] / +frac[2] : null;
  const n = readNumber(s);
  if (!n || n.wrap) return null;
  if (n.pct) return n.shown / 100;
  if (n.places > 0 && Math.abs(n.shown) <= 1) return n.shown;
  return n.shown / 100;
}
var TAG_SEP = /[,，、]/;
function splitTags(text) {
  const out = [];
  for (const x of text.split(TAG_SEP)) {
    const v = x.trim();
    if (v && !out.includes(v)) out.push(v);
  }
  return out;
}
function joinTags(tags) {
  return tags.join(", ");
}

// src/core/formula.ts
var FX_FUNCS = ["SUM", "AVG", "MIN", "MAX", "ROUND"];
var WIDE = { "\uFF08": "(", "\uFF09": ")", "\uFF0C": ",", "\xD7": "*", "\xF7": "/", "\uFF0B": "+", "\uFF0D": "-", "\u2212": "-", "\uFF0A": "*", "\uFF0F": "/", "\uFF5B": "{", "\uFF5D": "}" };
function tokenize(src) {
  const s = src.replace(/[（），×÷＋－−＊／｛｝]/g, (ch) => WIDE[ch]);
  const out = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (ch === "{") {
      const j = s.indexOf("}", i + 1);
      if (j < 0) throw new FxFail({ code: "brace" });
      const name = s.slice(i + 1, j).trim();
      if (!name || name.includes("{")) throw new FxFail({ code: "brace" });
      out.push({ t: "ref", name });
      i = j + 1;
      continue;
    }
    if (ch === "}") throw new FxFail({ code: "brace" });
    const num = /^(\d+(\.\d+)?|\.\d+)/.exec(s.slice(i));
    if (num) {
      out.push({ t: "num", v: Number(num[1]) });
      i += num[1].length;
      continue;
    }
    const id = /^[A-Za-z]+/.exec(s.slice(i));
    if (id) {
      out.push({ t: "id", name: id[0] });
      i += id[0].length;
      continue;
    }
    if ("+-*/(),".includes(ch)) {
      out.push({ t: "op", v: ch });
      i++;
      continue;
    }
    throw new FxFail({ code: "syntax" });
  }
  return out;
}
function parseFormula(src) {
  if (!src.trim()) throw new FxFail({ code: "empty" });
  const toks = tokenize(src);
  let i = 0;
  const peek = () => toks[i];
  const isOp = (v) => peek()?.t === "op" && peek().v === v;
  const expr = () => {
    let a = term();
    while (isOp("+") || isOp("-")) {
      const op = toks[i++].v;
      a = { k: "bin", op, a, b: term() };
    }
    return a;
  };
  const term = () => {
    let a = unary();
    while (isOp("*") || isOp("/")) {
      const op = toks[i++].v;
      a = { k: "bin", op, a, b: unary() };
    }
    return a;
  };
  const unary = () => {
    if (isOp("-")) {
      i++;
      return { k: "neg", a: unary() };
    }
    if (isOp("+")) {
      i++;
      return unary();
    }
    return primary();
  };
  const primary = () => {
    const tk = toks[i];
    if (!tk) throw new FxFail({ code: "syntax" });
    if (tk.t === "num") {
      i++;
      return { k: "num", v: tk.v };
    }
    if (tk.t === "ref") {
      i++;
      return { k: "ref", name: tk.name };
    }
    if (tk.t === "id") {
      const name = tk.name.toUpperCase();
      if (!FX_FUNCS.includes(name)) throw new FxFail({ code: "func", name: tk.name });
      i++;
      if (!isOp("(")) throw new FxFail({ code: "syntax" });
      i++;
      const args = [];
      if (!isOp(")")) {
        args.push(expr());
        while (isOp(",")) {
          i++;
          args.push(expr());
        }
      }
      if (!isOp(")")) throw new FxFail({ code: "paren" });
      i++;
      const ok = name === "ROUND" ? args.length === 1 || args.length === 2 : args.length >= 1;
      if (!ok) throw new FxFail({ code: "args", name });
      return { k: "fn", name, args };
    }
    if (tk.v === "(") {
      i++;
      const e = expr();
      if (!isOp(")")) throw new FxFail({ code: "paren" });
      i++;
      return e;
    }
    if (tk.v === ")") throw new FxFail({ code: "paren" });
    throw new FxFail({ code: "syntax" });
  };
  const node = expr();
  if (i < toks.length) throw new FxFail(isOp(")") ? { code: "paren" } : { code: "syntax" });
  return node;
}
var FxFail = class extends Error {
  constructor(info) {
    super("code" in info ? `formula: ${info.code}` : `formula: ${info.reason}`);
    this.info = info;
  }
};
function fxErrorOf(e) {
  return e instanceof FxFail && "code" in e.info ? e.info : null;
}
function formulaRefs(node) {
  const out = [];
  const walk = (n) => {
    if (n.k === "ref") {
      if (!out.includes(n.name)) out.push(n.name);
    } else if (n.k === "neg") walk(n.a);
    else if (n.k === "bin") {
      walk(n.a);
      walk(n.b);
    } else if (n.k === "fn") n.args.forEach(walk);
  };
  walk(node);
  return out;
}
function evalFormula(node, get) {
  const ev = (n) => {
    switch (n.k) {
      case "num":
        return n.v;
      case "ref": {
        const v = get(n.name);
        if (v === null) throw new FxFail({ reason: "input", name: n.name });
        return v;
      }
      case "neg":
        return -ev(n.a);
      case "bin": {
        const a = ev(n.a);
        const b = ev(n.b);
        if (n.op === "+") return a + b;
        if (n.op === "-") return a - b;
        if (n.op === "*") return a * b;
        if (b === 0) throw new FxFail({ reason: "div0" });
        return a / b;
      }
      case "fn": {
        if (n.name === "ROUND") {
          const v = ev(n.args[0]);
          const p = n.args[1] ? Math.max(0, Math.min(10, Math.round(ev(n.args[1])))) : 0;
          const f = 10 ** p;
          return Math.round((v + Math.sign(v) * Number.EPSILON) * f) / f;
        }
        const vals = [];
        let first = null;
        for (const a of n.args) {
          try {
            vals.push(ev(a));
          } catch (e) {
            if (!(e instanceof FxFail)) throw e;
            first ?? (first = e);
          }
        }
        if (!vals.length) throw first ?? new FxFail({ reason: "input" });
        if (n.name === "SUM") return vals.reduce((x, y) => x + y, 0);
        if (n.name === "AVG") return vals.reduce((x, y) => x + y, 0) / vals.length;
        return n.name === "MAX" ? Math.max(...vals) : Math.min(...vals);
      }
    }
  };
  return ev(node);
}
function fxEmptyOf(e) {
  return e instanceof FxFail && "reason" in e.info ? e.info : null;
}
function formatFx(v, places) {
  if (!Number.isFinite(v)) return "";
  let s;
  if (places === null) {
    const r = Math.round(v * 100) / 100;
    s = Number.isInteger(r) ? String(r) : r.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  } else s = v.toFixed(places);
  return /^-0(\.0+)?$/.test(s) ? s.slice(1) : s;
}
function nameOk(name) {
  return !!name && !/[{}]/.test(name);
}
function renameInFormula(src, from, to) {
  const esc2 = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return src.replace(new RegExp(`[{\uFF5B]\\s*${esc2}\\s*[}\uFF5D]`, "g"), () => `{${to}}`);
}
function prettyOps(src) {
  return src.replace(/\*/g, "\xD7").replace(/\//g, "\xF7");
}

// src/core/ops.ts
function cloneTable(t2) {
  return {
    cells: t2.cells.map((r) => r.slice()),
    align: t2.align.slice(),
    meta: cloneMeta(t2.meta),
    style: { ...t2.style }
  };
}
function cloneMeta(m) {
  const out = { ...m };
  if (m.w) out.w = m.w.slice();
  if (m.bg) out.bg = { ...m.bg };
  if (m.fg) out.fg = { ...m.fg };
  if (m.fz) out.fz = { ...m.fz };
  if (m.calc) out.calc = m.calc.slice();
  if (m.fx) out.fx = m.fx.slice();
  if (m.fxd) out.fxd = m.fxd.slice();
  if (m.opts) out.opts = m.opts.map((o) => o ? { ...o } : null);
  if (m.ty) out.ty = m.ty.map((x) => x ? { ...x } : null);
  if (m.merge) out.merge = m.merge.slice();
  return out;
}
var rowCount = (t2) => t2.cells.length;
var MAX_HEAD_ROWS = 3;
function headRows(t2) {
  const h = t2.meta.head;
  return typeof h === "number" && h > 1 ? Math.max(1, Math.min(h, MAX_HEAD_ROWS, t2.cells.length - 1)) : 1;
}
function canSetHead(t2, h) {
  if (h < 1 || h > MAX_HEAD_ROWS || t2.cells.length - h < 1) return false;
  return !merges(t2).some((m) => m.r1 < h && m.r2 >= h);
}
function withHead(n, h) {
  if (h > 1) n.meta.head = h;
  else delete n.meta.head;
}
var colCount = (t2) => t2.align.length;
function remapCells(meta, map) {
  for (const key of ["bg", "fg", "fz"]) {
    const src = meta[key];
    if (!src) continue;
    const next = {};
    for (const [k, v] of Object.entries(src)) {
      const p = parseRef(k);
      const to = p && map(p.r, p.c);
      if (to) next[cellRef(to[0], to[1])] = v;
    }
    meta[key] = next;
  }
}
function remapMerges(meta, fr, fc, grow) {
  if (!meta.merge) return;
  const out = [];
  const span = (a, b, f) => {
    const v = [];
    for (let i = a; i <= b; i++) {
      const x = f(i);
      if (x !== null) v.push(x);
    }
    if (!v.length) return null;
    const lo = Math.min(...v);
    const hi = Math.max(...v);
    if (!grow && hi - lo + 1 !== v.length) return null;
    return [lo, hi];
  };
  for (const m of meta.merge) {
    const r = parseRange(m);
    if (!r) continue;
    const rows = span(r.r1, r.r2, fr);
    const cols = span(r.c1, r.c2, fc);
    if (!rows || !cols || rows[0] === rows[1] && cols[0] === cols[1]) continue;
    out.push(rangeRef({ r1: rows[0], r2: rows[1], c1: cols[0], c2: cols[1] }));
  }
  meta.merge = out;
}
var COL_KEYS = ["w", "calc", "opts", "va", "fx", "fxd", "ty"];
function spliceCols(meta, n, op) {
  for (const key of COL_KEYS) {
    const src = meta[key];
    if (!src) continue;
    const a = src.slice(0, n);
    while (a.length < n) a.push(null);
    op(a);
    meta[key] = a;
  }
}
function widths(meta, n) {
  const w = (meta.w ?? []).slice(0, n);
  while (w.length < n) w.push(null);
  return w;
}
function setCell(t2, r, c, text) {
  if (t2.cells[r]?.[c] === void 0 || t2.cells[r][c] === text) return t2;
  const n = cloneTable(t2);
  n.cells[r][c] = text;
  return n;
}
function insertRow(t2, at) {
  let i = Math.max(1, Math.min(at, rowCount(t2)));
  if (hasTotal(t2) && i === rowCount(t2)) i = rowCount(t2) - 1;
  const n = cloneTable(t2);
  const h = headRows(t2);
  n.cells.splice(i, 0, Array.from({ length: colCount(t2) }, () => ""));
  remapCells(n.meta, (r, c) => [r >= i ? r + 1 : r, c]);
  remapMerges(n.meta, (r) => r >= i ? r + 1 : r, (c) => c, true);
  if (i < h) withHead(n, h + 1);
  return n;
}
function deleteRow(t2, r) {
  const h = headRows(t2);
  if (r === 0 && h === 1) return deleteFirstHeadRow(t2);
  if (r < 0 || r >= rowCount(t2) || r >= h && rowCount(t2) - h <= 1) return t2;
  const n = cloneTable(t2);
  if (r < h) withHead(n, h - 1);
  if (hasTotal(t2) && r === rowCount(t2) - 1) delete n.meta.calc;
  n.cells.splice(r, 1);
  remapCells(n.meta, (rr, c) => rr === r ? null : [rr > r ? rr - 1 : rr, c]);
  remapMerges(n.meta, (rr) => rr === r ? null : rr > r ? rr - 1 : rr, (c) => c, false);
  return n;
}
function deleteFirstHeadRow(t2) {
  const body = rowCount(t2) - 1 - (hasTotal(t2) ? 1 : 0);
  if (body < 2) return t2;
  const n = cloneTable(t2);
  n.cells.splice(0, 1);
  remapCells(n.meta, (rr, c) => rr === 0 ? null : [rr - 1, c]);
  remapMerges(n.meta, (rr) => rr === 0 ? null : rr - 1, (c) => c, false);
  if (n.meta.merge) {
    n.meta.merge = n.meta.merge.filter((m) => {
      const q = parseRange(m);
      return !q || !(q.r1 < 1 && q.r2 >= 1);
    });
    if (!n.meta.merge.length) delete n.meta.merge;
  }
  return n;
}
function insertCol(t2, at) {
  const i = Math.max(0, Math.min(at, colCount(t2)));
  const n = cloneTable(t2);
  for (const row of n.cells) row.splice(i, 0, "");
  n.align.splice(i, 0, null);
  spliceCols(n.meta, colCount(t2), (a) => a.splice(i, 0, null));
  remapCells(n.meta, (r, c) => [r, c >= i ? c + 1 : c]);
  remapMerges(n.meta, (r) => r, (c) => c >= i ? c + 1 : c, true);
  return n;
}
function deleteCol(t2, c) {
  if (c < 0 || c >= colCount(t2) || colCount(t2) <= 1) return t2;
  const n = cloneTable(t2);
  for (const row of n.cells) row.splice(c, 1);
  n.align.splice(c, 1);
  spliceCols(n.meta, colCount(t2), (a) => a.splice(c, 1));
  remapCells(n.meta, (r, cc) => cc === c ? null : [r, cc > c ? cc - 1 : cc]);
  remapMerges(n.meta, (r) => r, (cc) => cc === c ? null : cc > c ? cc - 1 : cc, false);
  return n;
}
function moveRow(t2, from, to) {
  const last = rowCount(t2) - 1 - (hasTotal(t2) ? 1 : 0);
  const h = headRows(t2);
  if (from < h || from > last) return t2;
  const dest = Math.max(h, Math.min(to, last));
  if (dest === from) return t2;
  const n = cloneTable(t2);
  const [row] = n.cells.splice(from, 1);
  n.cells.splice(dest, 0, row);
  remapCells(n.meta, (r, c) => [movedIndex(r, from, dest), c]);
  remapMerges(n.meta, (r) => movedIndex(r, from, dest), (c) => c, false);
  return n;
}
function moveCol(t2, from, to) {
  const last = colCount(t2) - 1;
  if (from < 0 || from > last) return t2;
  const dest = Math.max(0, Math.min(to, last));
  if (dest === from) return t2;
  const n = cloneTable(t2);
  for (const row of n.cells) row.splice(dest, 0, ...row.splice(from, 1));
  n.align.splice(dest, 0, ...n.align.splice(from, 1));
  spliceCols(n.meta, colCount(t2), (a) => a.splice(dest, 0, ...a.splice(from, 1)));
  remapCells(n.meta, (r, c) => [r, movedIndex(c, from, dest)]);
  remapMerges(n.meta, (r) => r, (c) => movedIndex(c, from, dest), false);
  return n;
}
function movedIndex(i, from, to) {
  if (i === from) return to;
  if (from < to && i > from && i <= to) return i - 1;
  if (from > to && i >= to && i < from) return i + 1;
  return i;
}
function setAlign(t2, c, a) {
  if (c < 0 || c >= colCount(t2) || t2.align[c] === a) return t2;
  const n = cloneTable(t2);
  n.align[c] = a;
  return n;
}
function vAlignOf(t2, c) {
  return t2.meta.va?.[c] ?? null;
}
function setVAlign(t2, c, v) {
  if (c < 0 || c >= colCount(t2) || vAlignOf(t2, c) === v) return t2;
  const n = cloneTable(t2);
  const va = (n.meta.va ?? []).slice(0, colCount(t2));
  while (va.length < colCount(t2)) va.push(null);
  va[c] = v;
  if (va.some(Boolean)) n.meta.va = va;
  else delete n.meta.va;
  return n;
}
function vAlignAll(t2, v) {
  let n = t2;
  for (let c = 0; c < colCount(t2); c++) n = setVAlign(n, c, v);
  return n;
}
function setWidth(t2, c, w) {
  if (c < 0 || c >= colCount(t2)) return t2;
  const n = cloneTable(t2);
  const ws = widths(n.meta, colCount(t2));
  ws[c] = w == null ? null : Math.max(40, Math.min(2e3, Math.round(w)));
  n.meta.w = ws;
  return n;
}
function setBg(t2, cells, color) {
  const n = cloneTable(t2);
  const bg = { ...n.meta.bg ?? {} };
  for (const { r, c } of cells) {
    if (r < 0 || r >= rowCount(t2) || c < 0 || c >= colCount(t2)) continue;
    const k = cellRef(r, c);
    if (color) bg[k] = color;
    else delete bg[k];
  }
  n.meta.bg = bg;
  return n;
}
function setFg(t2, cells, color) {
  const n = cloneTable(t2);
  const fg = { ...n.meta.fg ?? {} };
  for (const { r, c } of cells) {
    if (r < 0 || r >= rowCount(t2) || c < 0 || c >= colCount(t2)) continue;
    const k = cellRef(r, c);
    if (color) fg[k] = color;
    else delete fg[k];
  }
  n.meta.fg = fg;
  return n;
}
function setFontSize(t2, cells, size) {
  const n = cloneTable(t2);
  const fz = { ...n.meta.fz ?? {} };
  for (const p of cells) {
    const k = cellRef(p.r, p.c);
    if (size && size !== 1) fz[k] = size;
    else delete fz[k];
  }
  if (Object.keys(fz).length) n.meta.fz = fz;
  else delete n.meta.fz;
  return n;
}
function fontSizeOf(t2, r, c) {
  return t2.meta.fz?.[cellRef(r, c)] ?? null;
}
function setTableFontSize(t2, size) {
  if ((t2.meta.fs ?? null) === (size === 1 ? null : size)) return t2;
  const n = cloneTable(t2);
  if (size && size !== 1) n.meta.fs = size;
  else delete n.meta.fs;
  return n;
}
function fgOf(t2, r, c) {
  return t2.meta.fg?.[cellRef(r, c)] ?? null;
}
function setWide(t2, wide) {
  if (!!t2.meta.wide === wide) return t2;
  const n = cloneTable(t2);
  if (wide) n.meta.wide = 1;
  else delete n.meta.wide;
  return n;
}
function setWidths(t2, ws) {
  const n = cloneTable(t2);
  n.meta.w = Array.from({ length: colCount(t2) }, (_, c) => ws[c] ? Math.max(40, Math.min(2e3, Math.round(ws[c]))) : null);
  return n;
}
function bgOf(t2, r, c) {
  return t2.meta.bg?.[cellRef(r, c)] ?? null;
}
function widthOf(t2, c) {
  return t2.meta.w?.[c] ?? null;
}
var mergeCache = /* @__PURE__ */ new WeakMap();
function merges(t2) {
  const list = t2.meta.merge;
  if (!list || list.length === 0) return [];
  const rows = rowCount(t2);
  const cols = colCount(t2);
  const sig = list.join(",");
  const hit = mergeCache.get(list);
  if (hit && hit.sig === sig && hit.rows === rows && hit.cols === cols) return hit.rects.slice();
  const rects = list.map(parseRange).filter((r) => r !== null && r.r2 < rows && r.c2 < cols);
  mergeCache.set(list, { sig, rows, cols, rects });
  return rects.slice();
}
function mergeAt(t2, r, c) {
  return merges(t2).find((m) => r >= m.r1 && r <= m.r2 && c >= m.c1 && c <= m.c2) ?? null;
}
var overlaps = (a, b) => a.r1 <= b.r2 && b.r1 <= a.r2 && a.c1 <= b.c2 && b.c1 <= a.c2;
function mergeCells(t2, rect) {
  let r = { ...rect };
  for (let grew = true; grew; ) {
    grew = false;
    for (const m of merges(t2)) {
      if (overlaps(m, r) && (m.r1 < r.r1 || m.c1 < r.c1 || m.r2 > r.r2 || m.c2 > r.c2)) {
        r = { r1: Math.min(r.r1, m.r1), c1: Math.min(r.c1, m.c1), r2: Math.max(r.r2, m.r2), c2: Math.max(r.c2, m.c2) };
        grew = true;
      }
    }
  }
  r = { r1: Math.max(0, r.r1), c1: Math.max(0, r.c1), r2: Math.min(rowCount(t2) - 1, r.r2), c2: Math.min(colCount(t2) - 1, r.c2) };
  if (r.r1 === r.r2 && r.c1 === r.c2) return t2;
  if (crossesHead(t2, r)) return t2;
  const n = cloneTable(t2);
  n.meta.merge = [...merges(t2).filter((m) => !overlaps(m, r)).map(rangeRef), rangeRef(r)];
  return n;
}
function crossesHead(t2, r) {
  const h = headRows(t2);
  return r.r1 < h && r.r2 >= h;
}
function isCovered(t2, r, c) {
  const m = mergeAt(t2, r, c);
  return !!m && (m.r1 !== r || m.c1 !== c);
}
function unmergeAt(t2, r, c) {
  const m = mergeAt(t2, r, c);
  if (!m) return t2;
  const n = cloneTable(t2);
  n.meta.merge = merges(t2).filter((x) => x !== m && rangeRef(x) !== rangeRef(m)).map(rangeRef);
  return n;
}
function clearCells(t2, cells) {
  if (!cells.some(({ r, c }) => t2.cells[r]?.[c])) return t2;
  const n = cloneTable(t2);
  for (const { r, c } of cells) if (n.cells[r]?.[c] !== void 0) n.cells[r][c] = "";
  return n;
}
function pasteGrid(t2, r, c, grid) {
  if (!grid.length) return t2;
  let n = cloneTable(t2);
  const width2 = Math.max(...grid.map((row) => row.length));
  const total = () => hasTotal(n) && r < rowCount(n) - 1 ? 1 : 0;
  while (rowCount(n) - total() < r + grid.length) n = insertRow(n, rowCount(n));
  while (colCount(n) < c + width2) n = insertCol(n, colCount(n));
  grid.forEach((row, i) => row.forEach((v, j) => n.cells[r + i][c + j] = v));
  return followRenames(t2, n);
}
function fillRange(t2, src, dir, count, copy = false) {
  let n = cloneTable(t2);
  const vertical = dir === "down" || dir === "up";
  let cnt = count;
  if (dir === "up") cnt = Math.min(count, src.r1 - (src.r1 >= headRows(t2) ? headRows(t2) : 0));
  if (dir === "left") cnt = Math.min(count, src.c1);
  if (cnt <= 0) return { table: t2, filled: src };
  const total = () => hasTotal(n) && src.r2 < rowCount(n) - 1 ? 1 : 0;
  if (dir === "down") while (rowCount(n) - total() < src.r2 + 1 + cnt) n = insertRow(n, rowCount(n));
  if (dir === "right") while (colCount(n) < src.c2 + 1 + cnt) n = insertCol(n, colCount(n));
  if (vertical) {
    for (let c = src.c1; c <= src.c2; c++) {
      const source = [];
      for (let r = src.r1; r <= src.r2; r++) source.push(n.cells[r][c]);
      const vals = fillSeries(source, cnt, dir === "up", copy);
      vals.forEach((v, k) => n.cells[dir === "down" ? src.r2 + 1 + k : src.r1 - 1 - k][c] = v);
    }
  } else {
    for (let r = src.r1; r <= src.r2; r++) {
      const source = n.cells[r].slice(src.c1, src.c2 + 1);
      const vals = fillSeries(source, cnt, dir === "left", copy);
      vals.forEach((v, k) => n.cells[r][dir === "right" ? src.c2 + 1 + k : src.c1 - 1 - k] = v);
    }
  }
  const filled = dir === "down" ? { ...src, r2: src.r2 + cnt } : dir === "up" ? { ...src, r1: src.r1 - cnt } : dir === "right" ? { ...src, c2: src.c2 + cnt } : { ...src, c1: src.c1 - cnt };
  return { table: n, filled };
}
function setTableLook(t2, look) {
  if (look.head !== void 0 && !canSetHead(t2, look.head)) return t2;
  const n = cloneTable(t2);
  if (look.headerCol !== void 0) {
    if (look.headerCol) n.meta.headerCol = true;
    else {
      delete n.meta.headerCol;
      delete n.meta.freeze;
    }
  }
  if (look.freeze !== void 0) {
    if (look.freeze && n.meta.headerCol) n.meta.freeze = 1;
    else delete n.meta.freeze;
  }
  if (look.head !== void 0) withHead(n, look.head);
  if (look.style !== void 0) {
    if (look.style) n.meta.style = look.style;
    else delete n.meta.style;
  }
  if (look.density !== void 0) {
    if (look.density) n.meta.density = look.density;
    else delete n.meta.density;
  }
  return n;
}
function setFolded(t2, on) {
  if (on === (t2.meta.fold === 1)) return t2;
  if (on && rowCount(t2) <= headRows(t2)) return t2;
  const n = cloneTable(t2);
  if (on) n.meta.fold = 1;
  else delete n.meta.fold;
  return n;
}
function alignAll(t2, a) {
  const n = cloneTable(t2);
  n.align = n.align.map(() => a);
  return n;
}
function clearAllBg(t2) {
  const has = (m) => !!m && Object.keys(m).length > 0;
  if (!has(t2.meta.bg) && !has(t2.meta.fg)) return t2;
  const n = cloneTable(t2);
  delete n.meta.bg;
  delete n.meta.fg;
  return n;
}
function autoWidthAll(t2) {
  if (!t2.meta.w?.some((x) => x != null)) return t2;
  const n = cloneTable(t2);
  delete n.meta.w;
  delete n.meta.wide;
  return n;
}
function mergedText(t2, m) {
  const seen = [];
  for (let r = m.r1; r <= m.r2; r++)
    for (let c = m.c1; c <= m.c2; c++) {
      const v = t2.cells[r]?.[c] ?? "";
      if (v.trim() && !seen.includes(v)) seen.push(v);
    }
  return seen.join("\n");
}
function shownText(t2, r, c) {
  const m = mergeAt(t2, r, c);
  return m ? mergedText(t2, m) : t2.cells[r]?.[c] ?? "";
}
function editCell(t2, r, c, text) {
  const m = mergeAt(t2, r, c);
  if (!m) return followRenames(t2, setCell(t2, r, c, text));
  if (text === mergedText(t2, m)) return t2;
  const n = cloneTable(t2);
  for (let i = m.r1; i <= m.r2; i++) for (let j = m.c1; j <= m.c2; j++) n.cells[i][j] = "";
  n.cells[m.r1][m.c1] = text;
  return followRenames(t2, n);
}
var NUM_LIKE = /^[-+]?[¥$€£]?\s*[\d,]*\.?\d+\s*%?$/;
var DATE_LIKE = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/;
function compareCells(a, b) {
  const ea = !a.trim();
  const eb = !b.trim();
  if (ea || eb) return ea === eb ? 0 : ea ? 1 : -1;
  const na = NUM_LIKE.test(a.trim());
  const nb = NUM_LIKE.test(b.trim());
  if (na && nb) return parseFloat(a.replace(/[^\d.+-]/g, "")) - parseFloat(b.replace(/[^\d.+-]/g, ""));
  const da = DATE_LIKE.exec(a.trim());
  const db = DATE_LIKE.exec(b.trim());
  if (da && db) return Date.UTC(+da[1], +da[2] - 1, +da[3]) - Date.UTC(+db[1], +db[2] - 1, +db[3]);
  return a.localeCompare(b, "zh-Hans-CN", { numeric: true, sensitivity: "base" });
}
function canSortRows(t2) {
  return !merges(t2).some((m) => m.r2 > m.r1 && m.r2 >= headRows(t2));
}
function dateSortKey(text, parseNote) {
  if (!text.trim()) return { g: 2, d: 0 };
  const v = readDate(text, parseNote);
  return v ? { g: 0, d: Date.UTC(v.y, v.m - 1, v.d) } : { g: 1, d: 0 };
}
function sortRows(t2, c, desc, lastFixed = false, parseNote) {
  if (!canSortRows(t2)) return t2;
  const last = rowCount(t2) - (lastFixed ? 1 : 0);
  const h = headRows(t2);
  const idx = Array.from({ length: Math.max(0, last - h) }, (_, i) => i + h);
  const isDate = colTypeOf(t2, c)?.t === "date" && !formulaOf(t2, c);
  const keys = isDate ? new Map(idx.map((r) => [r, dateSortKey(t2.cells[r][c], parseNote)])) : null;
  const sorted = [...idx].sort((x, y) => {
    if (keys) {
      const a = keys.get(x);
      const b = keys.get(y);
      if (a.g !== b.g) return a.g - b.g || x - y;
      const d2 = a.g === 0 ? a.d - b.d : a.g === 1 ? compareCells(t2.cells[x][c], t2.cells[y][c]) : 0;
      return (desc ? -d2 : d2) || x - y;
    }
    const d = compareCells(t2.cells[x][c], t2.cells[y][c]);
    const empty = !t2.cells[x][c].trim() || !t2.cells[y][c].trim();
    return (desc && !empty ? -d : d) || x - y;
  });
  if (sorted.every((v, i) => v === idx[i])) return t2;
  const n = cloneTable(t2);
  const pos = /* @__PURE__ */ new Map();
  sorted.forEach((from, i) => {
    n.cells[i + h] = t2.cells[from].slice();
    pos.set(from, i + h);
  });
  remapCells(n.meta, (r, cc) => [pos.get(r) ?? r, cc]);
  return n;
}
function duplicateRow(t2, r) {
  if (r < 1 || r >= rowCount(t2)) return t2;
  const n = insertRow(t2, r + 1);
  n.cells[r + 1] = t2.cells[r].slice();
  for (const key of ["bg", "fg", "fz"]) {
    const m = { ...n.meta[key] ?? {} };
    for (let c = 0; c < colCount(t2); c++) {
      const v = t2.meta[key]?.[cellRef(r, c)];
      if (v) m[cellRef(r + 1, c)] = v;
    }
    n.meta[key] = m;
  }
  return n;
}
function duplicateCol(t2, c) {
  if (c < 0 || c >= colCount(t2)) return t2;
  let n = insertCol(t2, c + 1);
  for (let r = 0; r < rowCount(t2); r++) n.cells[r][c + 1] = t2.cells[r][c];
  n.align[c + 1] = t2.align[c];
  n = setVAlign(n, c + 1, vAlignOf(t2, c));
  const w = widthOf(t2, c);
  if (w) n = setWidth(n, c + 1, w);
  if (colTypeOf(t2, c)) n = setColType(n, c + 1, colTypeOf(t2, c));
  if (t2.meta.opts?.[c]) {
    n = cloneTable(n);
    const opts = Array.from({ length: colCount(n) }, (_, i) => n.meta.opts?.[i] ?? null);
    opts[c + 1] = { ...t2.meta.opts[c] };
    n.meta.opts = opts;
  }
  if (formulaOf(t2, c)) n = setFormula(n, c + 1, formulaOf(t2, c), fxPlacesOf(t2, c));
  for (const key of ["bg", "fg", "fz"]) {
    const m = { ...n.meta[key] ?? {} };
    for (let r = 0; r < rowCount(t2); r++) {
      const v = t2.meta[key]?.[cellRef(r, c)];
      if (v) m[cellRef(r, c + 1)] = v;
    }
    n.meta[key] = m;
  }
  return n;
}
function insertRows(t2, at, k) {
  let n = t2;
  for (let i = 0; i < k; i++) n = insertRow(n, at);
  return n;
}
function insertCols(t2, at, k) {
  let n = t2;
  for (let i = 0; i < k; i++) n = insertCol(n, at);
  return n;
}
var CHECK_RE = /^\[( |x|X)\](?=\s|$)/;
function toggleCheck(t2, r, c) {
  const v = t2.cells[r]?.[c];
  const m = v === void 0 ? null : CHECK_RE.exec(v);
  if (!m) return t2;
  return setCell(t2, r, c, (m[1] === " " ? "[x]" : "[ ]") + v.slice(3));
}
function hasTotal(t2) {
  return !!t2.meta.calc?.some(Boolean);
}
function parseNum(s) {
  const raw = s.trim().replace(/^(\*\*|__|\*|_|==|~~|`)(.*)\1$/, "$2").replace(/[,，\s]/g, "").replace(/^[+]/, "").replace(/^[¥$€£]/, "");
  const pct = raw.endsWith("%");
  const body = pct ? raw.slice(0, -1) : raw;
  if (!/^-?\d+(\.\d+)?$/.test(body)) return null;
  const i = body.indexOf(".");
  return { v: Number(body), places: i < 0 ? 0 : body.length - i - 1, pct };
}
function fmt(v, places, pct) {
  const p = Math.min(4, places);
  return (Number.isInteger(v) && p === 0 ? String(v) : v.toFixed(p)) + (pct ? "%" : "");
}
function calcColumn(t2, c, how) {
  const last = rowCount(t2) - 1;
  const cells = t2.cells.slice(headRows(t2), last).map((r) => r[c] ?? "");
  if (how === "count") return String(cells.filter((x) => x.trim()).length);
  const nums = cells.map(parseNum).filter((x) => !!x);
  if (!nums.length) return "";
  const places = Math.max(...nums.map((x) => x.places));
  const pct = nums.every((x) => x.pct);
  const vals = nums.map((x) => x.v);
  if (how === "sum") return fmt(vals.reduce((a, b) => a + b, 0), places, pct);
  if (how === "avg") {
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    return fmt(avg, Number.isInteger(avg) ? places : Math.max(places, 2), pct);
  }
  return fmt(how === "max" ? Math.max(...vals) : Math.min(...vals), places, pct);
}
var AUTO_LABELS = /* @__PURE__ */ new Set(["\u5408\u8BA1", "\u7EDF\u8BA1", "Total", "Summary"]);
function totalsAllSum(t2) {
  return (t2.meta.calc ?? []).every((x) => !x || x === "sum");
}
function setCalc(t2, c, how, labels = { sum: "\u5408\u8BA1", mixed: "\u7EDF\u8BA1" }) {
  const names = typeof labels === "string" ? { sum: labels, mixed: labels } : labels;
  let n = cloneTable(t2);
  const added = !!how && !hasTotal(t2);
  if (added) n.cells.push(Array.from({ length: colCount(t2) }, () => ""));
  const calc = Array.from({ length: colCount(n) }, (_, i) => n.meta.calc?.[i] ?? null);
  calc[c] = how;
  n.meta.calc = calc;
  if (!calc.some(Boolean)) delete n.meta.calc;
  if (hasTotal(n) && !calc[0]) {
    const last = rowCount(n) - 1;
    const cur = n.cells[last][0].trim();
    if (added && !cur || AUTO_LABELS.has(cur)) n.cells[last][0] = totalsAllSum(n) ? names.sum : names.mixed;
  }
  n = computeTotals(n);
  return n;
}
function computeTotals(t2) {
  if (!hasTotal(t2)) return t2;
  const last = rowCount(t2) - 1;
  let n = null;
  t2.meta.calc?.forEach((how, c) => {
    if (!how || c >= colCount(t2)) return;
    const raw = calcColumn(t2, c, how);
    const nf = how === "count" ? null : numFmtOf(t2, c);
    const v = nf && raw ? reformatNumber(raw, nf) : raw;
    if (t2.cells[last][c] !== v) {
      n ?? (n = cloneTable(t2));
      n.cells[last][c] = v;
    }
  });
  return n ?? t2;
}
var OPT_COLORS = ["blue", "green", "orange", "purple", "red", "yellow", "gray"];
function optionValues(t2, c) {
  const end = rowCount(t2) - (hasTotal(t2) ? 1 : 0);
  const out = [];
  const multi = t2.meta.ty?.[c]?.t === "multi";
  for (let r = headRows(t2); r < end; r++) {
    const raw = t2.cells[r]?.[c] ?? "";
    for (const v of multi ? splitTags(raw) : [raw.trim()]) if (v && !out.includes(v)) out.push(v);
  }
  return out;
}
function setOptionsCol(t2, c, on) {
  const n = cloneTable(t2);
  const opts = Array.from({ length: colCount(n) }, (_, i) => n.meta.opts?.[i] ?? null);
  opts[c] = on ? {} : null;
  n.meta.opts = opts;
  if (!opts.some(Boolean)) delete n.meta.opts;
  return syncOptions(n);
}
function syncOptions(t2) {
  if (!t2.meta.opts?.some(Boolean)) return t2;
  let n = null;
  t2.meta.opts.forEach((m, c) => {
    if (!m || c >= colCount(t2)) return;
    for (const v of optionValues(t2, c)) {
      const cur = (n ?? t2).meta.opts?.[c] ?? {};
      if (cur[v]) continue;
      const used = new Set(Object.values(cur));
      const color = OPT_COLORS.find((x) => !used.has(x)) ?? OPT_COLORS[Object.keys(cur).length % OPT_COLORS.length];
      n ?? (n = cloneTable(t2));
      const opts = n.meta.opts;
      opts[c] = { ...opts[c] ?? {}, [v]: color };
    }
  });
  return n ?? t2;
}
function setOptionColor(t2, c, value, color) {
  if (!t2.meta.opts?.[c]) return t2;
  const n = cloneTable(t2);
  n.meta.opts[c] = { ...n.meta.opts[c], [value.trim()]: color };
  return n;
}
function normalize(t2) {
  return computeTotals(computeFormulas(syncOptions(applyColTypes(t2))));
}
function colTypeOf(t2, c) {
  return t2.meta.ty?.[c] ?? null;
}
var COL_KINDS = ["text", "status", "multi", "date", "num", "bar"];
function colKindOf(t2, c) {
  const ty = colTypeOf(t2, c);
  if (ty) return ty.t;
  return t2.meta.opts?.[c] ? "status" : "text";
}
function setColType(t2, c, ty) {
  if (c < 0 || c >= colCount(t2)) return t2;
  const n = cloneTable(t2);
  const a = Array.from({ length: colCount(n) }, (_, i) => n.meta.ty?.[i] ?? null);
  a[c] = ty ? { ...ty } : null;
  if (a.some(Boolean)) n.meta.ty = a;
  else delete n.meta.ty;
  return applyColTypes(n);
}
function setColKind(t2, c, kind) {
  if (c < 0 || c >= colCount(t2) || colKindOf(t2, c) === kind) return t2;
  if (formulaOf(t2, c) && kind !== "text" && kind !== "num") return t2;
  const cur = colTypeOf(t2, c);
  const ty = kind === "text" || kind === "status" ? null : cur?.t === kind ? cur : { t: kind };
  let n = setColType(t2, c, ty);
  const wantOpts = kind === "status" || kind === "multi";
  if (wantOpts !== !!n.meta.opts?.[c]) n = setOptionsCol(n, c, wantOpts);
  return normalize(n);
}
function dataCells(t2, c) {
  const out = [];
  const end = rowCount(t2) - (hasTotal(t2) ? 1 : 0);
  for (let r = headRows(t2); r < end; r++) {
    const m = mergeAt(t2, r, c);
    if (m && (m.r1 !== r || m.c1 !== c)) continue;
    out.push(r);
  }
  return out;
}
function applyColTypes(t2) {
  if (!t2.meta.ty?.some(Boolean)) return t2;
  let n = null;
  t2.meta.ty.forEach((ty, c) => {
    if (!ty || c >= colCount(t2) || formulaOf(t2, c)) return;
    const fix = ty.t === "num" ? (s) => reformatNumber(s, ty) : ty.t === "date" ? (s) => reformatDate(s, ty.f) : ty.t === "multi" ? (s) => joinTags(splitTags(s)) : null;
    if (!fix) return;
    for (const r of dataCells(t2, c)) {
      const v = (n ?? t2).cells[r][c];
      const next = fix(v);
      if (next !== v) {
        n ?? (n = cloneTable(t2));
        n.cells[r][c] = next;
      }
    }
  });
  return n ?? t2;
}
function numFmtOf(t2, c) {
  const ty = colTypeOf(t2, c);
  return ty?.t === "num" ? ty : null;
}
function formulaOf(t2, c) {
  return t2.meta.fx?.[c] ?? null;
}
function fxPlacesOf(t2, c) {
  return t2.meta.fxd?.[c] ?? null;
}
function isFxCell(t2, r, c) {
  if (!formulaOf(t2, c) || r < headRows(t2) || r >= rowCount(t2)) return false;
  return !(hasTotal(t2) && r === rowCount(t2) - 1);
}
function columnNames(t2) {
  const r = headRows(t2) - 1;
  return Array.from({ length: colCount(t2) }, (_, c) => {
    const m = mergeAt(t2, r, c);
    const src = m ? t2.cells[m.r1][m.c1] : t2.cells[r]?.[c] ?? "";
    return cellFromSource(src).replace(/\\\|/g, "|").replace(/\s+/g, " ").trim();
  });
}
function nameIndex(t2) {
  const idx = /* @__PURE__ */ new Map();
  columnNames(t2).forEach((name, c) => {
    if (!nameOk(name)) return;
    idx.set(name, idx.has(name) ? -1 : c);
  });
  return idx;
}
function analyze(t2) {
  const out = /* @__PURE__ */ new Map();
  const fx = t2.meta.fx;
  if (!fx) return out;
  const idx = nameIndex(t2);
  const names = columnNames(t2);
  for (let c = 0; c < colCount(t2); c++) {
    const src = fx[c];
    if (!src) continue;
    let node;
    try {
      node = parseFormula(src);
    } catch (e) {
      out.set(c, { deps: [], error: fxErrorOf(e) ?? { code: "syntax" } });
      continue;
    }
    const deps = [];
    let error;
    for (const name of formulaRefs(node)) {
      const at = idx.get(name);
      if (at === void 0) error ?? (error = { code: "unknownCol", name });
      else if (at === -1) error ?? (error = { code: "ambiguous", name });
      else if (at === c || name === names[c]) error ?? (error = { code: "self", name });
      else deps.push(at);
    }
    out.set(c, error ? { deps: [], error } : { node, deps });
  }
  const state = /* @__PURE__ */ new Map();
  const stack = [];
  const visit = (c) => {
    const info = out.get(c);
    if (!info || info.error) return;
    if (state.get(c) === 2) return;
    if (state.get(c) === 1) {
      for (const x of stack.slice(stack.indexOf(c))) out.set(x, { deps: [], error: { code: "cycle" } });
      return;
    }
    state.set(c, 1);
    stack.push(c);
    for (const d of info.deps) visit(d);
    stack.pop();
    state.set(c, 2);
  };
  for (const c of out.keys()) visit(c);
  return out;
}
function cellNumber(s) {
  const p = parseNum(s);
  if (!p) return null;
  return p.pct ? p.v / 100 : p.v;
}
function fxRows(t2) {
  return [headRows(t2), rowCount(t2) - (hasTotal(t2) ? 1 : 0)];
}
function fxOrder(info) {
  const order = [];
  const seen = /* @__PURE__ */ new Set();
  const visit = (c) => {
    if (seen.has(c)) return;
    seen.add(c);
    const i = info.get(c);
    if (i && !i.error) i.deps.forEach(visit);
    if (i) order.push(c);
  };
  for (const c of info.keys()) visit(c);
  return order;
}
function evalRow(t2, cells, info, r, idx = nameIndex(t2)) {
  try {
    return evalFormula(info.node, (name) => {
      const c = idx.get(name);
      const m = mergeAt(t2, r, c);
      return cellNumber(m ? cells[m.r1][m.c1] : cells[r]?.[c] ?? "");
    });
  } catch (e) {
    const why = fxEmptyOf(e);
    if (why) return why;
    throw e;
  }
}
function computeFormulas(t2) {
  if (!t2.meta.fx?.some(Boolean)) return t2;
  const info = analyze(t2);
  const [r1, r2] = fxRows(t2);
  const idx = nameIndex(t2);
  let n = null;
  for (const c of fxOrder(info)) {
    const i = info.get(c);
    for (let r = r1; r < r2; r++) {
      const m = mergeAt(t2, r, c);
      if (m && (m.r1 !== r || m.c1 !== c)) continue;
      const cells = (n ?? t2).cells;
      const v = i.error ? "" : evalRow(t2, cells, i, r, idx);
      const nf = numFmtOf(t2, c);
      const text = typeof v !== "number" ? "" : nf ? formatNumber(v, nf, fxPlacesOf(t2, c) ?? nf.d ?? null) : formatFx(v, fxPlacesOf(t2, c));
      if (cells[r][c] !== text) {
        n ?? (n = cloneTable(t2));
        n.cells[r][c] = text;
      }
    }
  }
  return n ?? t2;
}
function formulaError(t2, c) {
  if (!formulaOf(t2, c)) return null;
  return analyze(t2).get(c)?.error ?? null;
}
function fxCellNote(t2, r, c) {
  if (!isFxCell(t2, r, c)) return null;
  const i = analyze(t2).get(c);
  if (!i) return null;
  if (i.error) return i.error;
  const v = evalRow(t2, t2.cells, i, r);
  return typeof v === "number" ? null : v;
}
function checkFormula(t2, c, src, places = null) {
  const n = cloneTable(t2);
  const fx = Array.from({ length: colCount(t2) }, (_, i2) => n.meta.fx?.[i2] ?? null);
  fx[c] = src.trim() || " ";
  n.meta.fx = fx;
  const i = analyze(n).get(c);
  if (i.error) return { error: i.error };
  const [r1, r2] = fxRows(n);
  const idx = nameIndex(n);
  const refs = formulaRefs(i.node).map((name) => {
    const at = idx.get(name);
    return { name, value: r1 < r2 ? cellNumber(n.cells[r1][at] ?? "") : null };
  });
  if (r1 >= r2) return { refs, result: null };
  const v = evalRow(n, n.cells, i, r1);
  return typeof v === "number" ? { refs, result: formatFx(v, places) } : { refs, result: null, empty: v };
}
function setFormula(t2, c, src, places = null) {
  if (c < 0 || c >= colCount(t2)) return t2;
  const n = cloneTable(t2);
  const len = colCount(t2);
  const fx = Array.from({ length: len }, (_, i) => n.meta.fx?.[i] ?? null);
  const fxd = Array.from({ length: len }, (_, i) => n.meta.fxd?.[i] ?? null);
  fx[c] = src?.trim() ? src.trim() : null;
  fxd[c] = fx[c] && places !== null ? places : null;
  if (fx.some(Boolean)) n.meta.fx = fx;
  else delete n.meta.fx;
  if (fxd.some((x) => x !== null)) n.meta.fxd = fxd;
  else delete n.meta.fxd;
  let m = n;
  if (fx[c] && colTypeOf(n, c) && colTypeOf(n, c).t !== "num") m = setColType(n, c, null);
  if (fx[c] && m.meta.opts?.[c]) m = setOptionsCol(m, c, false);
  return computeTotals(computeFormulas(m));
}
function followRenames(prev, next) {
  if (next === prev || !next.meta.fx?.some(Boolean)) return next;
  const a = columnNames(prev);
  const b = columnNames(next);
  const ia = nameIndex(prev);
  const ib = nameIndex(next);
  let out = next;
  for (let c = 0; c < Math.min(a.length, b.length); c++) {
    if (a[c] === b[c] || ia.get(a[c]) !== c || ib.get(b[c]) !== c) continue;
    const fx = out.meta.fx.map((f) => f ? renameInFormula(f, a[c], b[c]) : f);
    if (fx.every((f, i) => f === out.meta.fx[i])) continue;
    if (out === next) out = cloneTable(next);
    out.meta.fx = fx;
  }
  return out;
}
function keepWorkingFormulas(t2) {
  if (!t2.meta.fx?.some(Boolean)) {
    delete t2.meta.fx;
    delete t2.meta.fxd;
    return t2;
  }
  const info = analyze(t2);
  for (const [c, i] of info) {
    if (!i.error) continue;
    t2.meta.fx[c] = null;
    if (t2.meta.fxd) t2.meta.fxd[c] = null;
  }
  if (!t2.meta.fx.some(Boolean)) delete t2.meta.fx;
  if (!t2.meta.fxd?.some((x) => x !== null)) delete t2.meta.fxd;
  return t2;
}
function subTable(t2, rect) {
  const r1 = Math.max(0, rect.r1);
  const c1 = Math.max(0, rect.c1);
  const r2 = Math.min(rowCount(t2) - 1, rect.r2);
  const c2 = Math.min(colCount(t2) - 1, rect.c2);
  if (r1 === 0 && c1 === 0 && r2 === rowCount(t2) - 1 && c2 === colCount(t2) - 1) return cloneTable(t2);
  const cols = (a) => a ? a.slice(c1, c2 + 1) : void 0;
  const shift = (m) => {
    if (!m) return void 0;
    const out = {};
    for (const [k, v] of Object.entries(m)) {
      const p = parseRef(k);
      if (p && p.r >= r1 && p.r <= r2 && p.c >= c1 && p.c <= c2) out[cellRef(p.r - r1, p.c - c1)] = v;
    }
    return out;
  };
  const meta = { ...cloneMeta(t2.meta) };
  const oldHead = headRows(t2);
  const head = r1 < oldHead ? Math.max(1, oldHead - r1) : 1;
  if (head > 1) meta.head = head;
  else delete meta.head;
  meta.w = cols(t2.meta.w);
  meta.opts = cols(t2.meta.opts);
  meta.ty = cols(t2.meta.ty);
  meta.calc = hasTotal(t2) && r2 === rowCount(t2) - 1 ? cols(t2.meta.calc) : void 0;
  meta.fx = cols(t2.meta.fx);
  meta.fxd = cols(t2.meta.fxd);
  meta.bg = shift(t2.meta.bg);
  meta.fg = shift(t2.meta.fg);
  meta.fz = shift(t2.meta.fz);
  if (c1 > 0) {
    delete meta.headerCol;
    delete meta.freeze;
  }
  const crosses = (m) => m.r1 < head && m.r2 >= head;
  meta.merge = merges(t2).map((m) => ({ r1: Math.max(m.r1, r1) - r1, c1: Math.max(m.c1, c1) - c1, r2: Math.min(m.r2, r2) - r1, c2: Math.min(m.c2, c2) - c1 })).filter((m) => m.r1 <= m.r2 && m.c1 <= m.c2 && (m.r1 !== m.r2 || m.c1 !== m.c2) && !crosses(m)).map(rangeRef);
  if (!meta.merge.length) delete meta.merge;
  if (meta.bg && !Object.keys(meta.bg).length) delete meta.bg;
  if (meta.fg && !Object.keys(meta.fg).length) delete meta.fg;
  if (meta.fz && !Object.keys(meta.fz).length) delete meta.fz;
  for (const k of Object.keys(meta)) if (meta[k] === void 0) delete meta[k];
  const cells = t2.cells.slice(r1, r2 + 1).map((row) => row.slice(c1, c2 + 1));
  for (const m of merges(t2)) {
    const nr = Math.max(m.r1, r1);
    const nc = Math.max(m.c1, c1);
    if ((nr !== m.r1 || nc !== m.c1) && nr <= Math.min(m.r2, r2) && nc <= Math.min(m.c2, c2)) cells[nr - r1][nc - c1] = t2.cells[m.r1][m.c1];
  }
  const sub = {
    cells,
    align: t2.align.slice(c1, c2 + 1),
    meta,
    style: { ...t2.style }
  };
  return keepWorkingFormulas(sub);
}

// src/core/clipboard.ts
function tsvCell(s) {
  return /[\t\n"]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
function toTSV(grid) {
  return grid.map((row) => row.map(tsvCell).join("	")).join("\n");
}
function fromTSV(text) {
  const s = text.replace(/\r\n?/g, "\n");
  const rows = [];
  let row = [];
  let cell = "";
  let i = 0;
  let quoted = false;
  let atStart = true;
  while (i < s.length) {
    const ch = s[i];
    if (quoted) {
      if (ch === '"') {
        if (s[i + 1] === '"') {
          cell += '"';
          i += 2;
          continue;
        }
        quoted = false;
        i++;
        continue;
      }
      cell += ch;
      i++;
      continue;
    }
    if (ch === '"' && atStart) {
      quoted = true;
      atStart = false;
      i++;
      continue;
    }
    if (ch === "	") {
      row.push(cell);
      cell = "";
      atStart = true;
      i++;
      continue;
    }
    if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      atStart = true;
      i++;
      continue;
    }
    cell += ch;
    atStart = false;
    i++;
  }
  row.push(cell);
  rows.push(row);
  while (rows.length > 1 && rows[rows.length - 1].every((c) => c === "")) rows.pop();
  return rows;
}
var esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function toHTML(grid, headerRow) {
  const rows = grid.map((row, i) => {
    const tag = headerRow && i === 0 ? "th" : "td";
    return `<tr>${row.map((c) => `<${tag}>${esc(c).replace(/\n/g, "<br>")}</${tag}>`).join("")}</tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}
var SOURCE_ATTR = "data-ggt-src";
function sourceAttr(lines) {
  return ` ${SOURCE_ATTR}="${encodeURIComponent(lines.join("\n"))}"`;
}
function sourceFromHTML(html) {
  const m = new RegExp(`${SOURCE_ATTR}="([^"]*)"`).exec(html);
  if (!m) return null;
  try {
    const text = decodeURIComponent(m[1]);
    return text ? text.split("\n") : null;
  } catch {
    return null;
  }
}

// src/editor/cell-input.ts
var import_state2 = require("@codemirror/state");
var import_view2 = require("@codemirror/view");
var import_commands = require("@codemirror/commands");

// src/core/cm-format.ts
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");

// src/core/tokens.ts
var URL_STOP = String.raw`\s<>\]"'\x60。，、；：！？…「」『』【】〈〉《》（）“”‘’`;
var BARE_URL = String.raw`(https?:\/\/[^${URL_STOP}]*[^${URL_STOP},.;:!?])`;
var IFRAME = String.raw`<iframe\s([^>]*?)\/?>(?:\s*<\/iframe>)?`;
var TOKEN_RE = new RegExp(
  String.raw`!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]` + String.raw`|!\[([^\]]*)\]\(([^)\s]+)\)` + // $公式$ 和 $$公式$$ 共用一个分组；$$ 的按 \displaystyle 排（节点里不另起一块，只是大一号）
  String.raw`|\$\$?(?!\s)([^$\n]+?)(?<!\s)\$\$?(?!\d)` + String.raw`|\[\[([^\]|]+)(?:\|([^\]]+))?\]\]` + String.raw`|\[([^\]]+)\]\(([^)\s]+)\)` + String.raw`|\*\*(.+?)\*\*|__(.+?)__` + String.raw`|\x60([^\x60]+)\x60` + String.raw`|~~(.+?)~~|==(.+?)==` + String.raw`|(?<![\w*])\*([^*\s][^*]*?)\*(?![\w*])` + String.raw`|(?<![\w_])_([^_\s][^_]*?)_(?![\w_])` + String.raw`|(?<![\w#&])#([\p{L}\p{N}_\/-]*[\p{L}_\/-][\p{L}\p{N}_\/-]*)` + `|${BARE_URL}|${IFRAME}` + // 反斜杠转义：\<td\>、\*、\[ 之类只显示后面那个标点。反斜杠在被转义的符号前面，
  // 最左优先保证它先于以那个符号开头的标记被匹配到
  String.raw`|\\([!-/:-@[-\x60{-~])` + // 局部颜色：<span style="color:…">文字</span>、<mark style="background:…">文字</mark>，里面还能有别的格式
  `|${COLOR_OPEN_SRC}(.+?)</span>|${BG_OPEN_SRC}(.+?)</mark>` + // 不带颜色的 <mark>文字</mark>：和 ==高亮== 一样
  String.raw`|<mark>(.+?)</mark>` + // 下划线：<u>文字</u>（Markdown 没有下划线语法，Obsidian 里通行这个 HTML 写法）
  String.raw`|<u>(.+?)</u>`,
  "gu"
);

// src/core/live-preview.ts
var GROUPS = [
  { group: 10, kind: "strong", close: 2, nested: true },
  { group: 11, kind: "strong", close: 2, nested: true },
  { group: 12, kind: "code", close: 1, nested: false },
  { group: 13, kind: "del", close: 2, nested: true },
  { group: 14, kind: "mark", close: 2, nested: true },
  { group: 15, kind: "em", close: 1, nested: true },
  { group: 16, kind: "em", close: 1, nested: true },
  { group: 22, kind: "color", close: "</span>".length, nested: true, colorGroup: 21, html: true },
  { group: 24, kind: "bg", close: "</mark>".length, nested: true, colorGroup: 23, html: true },
  { group: 25, kind: "mark", close: "</mark>".length, nested: true, html: true },
  { group: 26, kind: "u", close: "</u>".length, nested: true, html: true }
];
function formatSpans(text) {
  const out = [];
  let offset = 0;
  for (const line of text.split("\n")) {
    scan(line, offset, out);
    offset += line.length + 1;
  }
  return out;
}
function scan(text, offset, out) {
  for (const m of text.matchAll(TOKEN_RE)) {
    const g = GROUPS.find((x) => m[x.group] !== void 0);
    if (!g) continue;
    const hc = g.group === 14 ? highlightColor(m[g.group]) : null;
    const inner = hc ? m[g.group].slice(hc.length) : m[g.group];
    const from = offset + (m.index ?? 0);
    const to = from + m[0].length;
    const innerTo = to - g.close;
    const innerFrom = innerTo - inner.length;
    out.push({
      kind: g.kind,
      from,
      to,
      innerFrom,
      innerTo,
      ...g.colorGroup ? { color: m[g.colorGroup] } : {},
      ...hc ? { highlight: hc.color } : {},
      ...g.html ? { html: true } : {}
    });
    if (g.nested) scan(inner, innerFrom, out);
  }
}
function revealed(span, ranges) {
  if (span.html) return false;
  const inside = (p) => p >= span.from && p <= span.to;
  return ranges.some((r) => r.from === r.to ? inside(r.from) : !(r.from <= span.from && r.to >= span.to) && (inside(r.from) || inside(r.to)));
}
function guardHiddenMarks(text, hidden, edits, backward, prevBreak, nextBreak) {
  const marks = (s) => [
    [s.from, s.innerFrom],
    [s.innerTo, s.to]
  ];
  const hits = (a, b) => hidden.some((s) => marks(s).some(([x, y]) => y > x && a < y && x < b && !(a <= s.from && b >= s.to)));
  const empties = (e) => !e.insert && hidden.some((s) => s.innerTo > s.innerFrom && e.from <= s.innerFrom && e.to >= s.innerTo && !(e.from <= s.from && e.to >= s.to));
  const needs = (e) => e.to > e.from && (hits(e.from, e.to) || empties(e));
  if (!edits.some(needs)) return null;
  const covered = (pieces, a, b) => {
    let p = a;
    for (const [x, y] of pieces) if (x <= p && y > p) p = y;
    return p >= b;
  };
  const merge = (pieces) => {
    pieces.sort((x, y) => x[0] - y[0]);
    const out2 = [];
    for (const [a, b] of pieces) {
      const last = out2[out2.length - 1];
      if (last && a <= last[1]) last[1] = Math.max(last[1], b);
      else if (b > a) out2.push([a, b]);
    }
    return out2;
  };
  const out = [];
  for (const e of edits) {
    if (!needs(e)) {
      out.push(e);
      continue;
    }
    const keep = hidden.filter((s) => !(e.from <= s.from && e.to >= s.to)).flatMap(marks);
    let pieces = [[e.from, e.to]];
    for (const [x, y] of keep) {
      if (y <= x) continue;
      pieces = pieces.flatMap(
        ([a, b]) => b <= x || a >= y ? [[a, b]] : [
          [a, x],
          [y, b]
        ].filter(([p, q]) => q > p)
      );
    }
    if (!pieces.length && !e.insert && backward !== null) {
      const all = hidden.flatMap(marks).filter(([x, y]) => y > x);
      if (backward) {
        let p = e.from;
        for (let m = all.find(([, y]) => y === p); m; m = all.find(([, y]) => y === p)) p = m[0];
        if (p > 0) pieces = [[prevBreak(p), p]];
      } else {
        let p = e.to;
        for (let m = all.find(([x]) => x === p); m; m = all.find(([x]) => x === p)) p = m[1];
        if (p < text.length) pieces = [[p, nextBreak(p)]];
      }
    }
    for (let grew = !e.insert; grew; ) {
      grew = false;
      pieces = merge(pieces);
      for (const s of hidden) {
        if (covered(pieces, s.from, s.to)) continue;
        if (s.innerTo > s.innerFrom && covered(pieces, s.innerFrom, s.innerTo)) {
          pieces.push([s.from, s.to]);
          grew = true;
        }
      }
    }
    pieces = merge(pieces);
    if (!pieces.length) {
      if (e.insert) out.push({ from: e.from, to: e.from, insert: e.insert });
      continue;
    }
    pieces.forEach(([a, b], i) => out.push({ from: a, to: b, insert: i === 0 ? e.insert : "" }));
  }
  return out;
}
function balancedSlice(text, from, to) {
  if (from >= to) return "";
  const spans = formatSpans(text);
  for (const s of spans) {
    if (from > s.from && from < s.innerFrom) from = s.from;
    if (from > s.innerTo && from < s.to) from = s.to;
    if (to > s.from && to < s.innerFrom) to = s.from;
    if (to > s.innerTo && to < s.to) to = s.to;
  }
  if (from >= to) return "";
  const pre = [];
  const post = [];
  for (const s of spans) {
    if (!(from < s.innerTo && to > s.innerFrom)) continue;
    if (from > s.from) pre.push(s);
    if (to < s.to) post.push(s);
  }
  pre.sort((a, b) => a.from - b.from);
  post.sort((a, b) => b.from - a.from);
  return pre.map((s) => text.slice(s.from, s.innerFrom)).join("") + text.slice(from, to) + post.map((s) => text.slice(s.innerTo, s.to)).join("");
}
function breakInsideFormats(text, pos) {
  const spans = formatSpans(text).filter((s) => s.innerFrom <= pos && pos <= s.innerTo && s.innerFrom < s.innerTo);
  const outer = [...spans].sort((a, b) => a.from - b.from);
  const inner = [...spans].sort((a, b) => b.from - a.from);
  return inner.map((s) => text.slice(s.innerTo, s.to)).join("") + "\n" + outer.map((s) => text.slice(s.from, s.innerFrom)).join("");
}

// src/core/cm-format.ts
var hideAll = import_state.Facet.define({ combine: (v) => v.some(Boolean) });
function hiddenSpans(state) {
  const all = state.facet(hideAll);
  return formatSpans(state.doc.toString()).filter((s) => all || !revealed(s, state.selection.ranges));
}
var keepMarksPaired = import_state.EditorState.transactionFilter.of((tr) => {
  if (!tr.docChanged || !(tr.isUserEvent("delete") || tr.isUserEvent("input.type") || tr.isUserEvent("input.paste"))) return tr;
  const st = tr.startState;
  if (st.selection.ranges.length > 1) return tr;
  const hidden = hiddenSpans(st);
  if (!hidden.length) return tr;
  const edits = [];
  tr.changes.iterChanges((from, to, _a, _b, ins) => edits.push({ from, to, insert: ins.toString() }));
  const text = st.doc.toString();
  const backward = tr.isUserEvent("delete.backward") ? true : tr.isUserEvent("delete.forward") ? false : null;
  const fixed = guardHiddenMarks(
    text,
    hidden,
    edits,
    backward,
    (p) => (0, import_state.findClusterBreak)(text, p, false),
    (p) => (0, import_state.findClusterBreak)(text, p, true)
  );
  if (!fixed) return tr;
  if (!fixed.length) return [];
  const changes = st.changes(fixed);
  const first = fixed[0];
  return {
    changes,
    selection: import_state.EditorSelection.cursor(changes.mapPos(first.from, -1) + first.insert.length),
    userEvent: tr.annotation(import_state.Transaction.userEvent),
    scrollIntoView: tr.scrollIntoView
  };
});
var HIDE = import_view.Decoration.replace({});
var prefixFacet = import_state.Facet.define({ combine: (v) => v[0] ?? "mm-ed" });
var marksCache = /* @__PURE__ */ new Map();
function marksFor(prefix) {
  let m = marksCache.get(prefix);
  if (!m) {
    const d = (k) => import_view.Decoration.mark({ class: `${prefix}-${k}` });
    m = { syntax: d("syntax"), kinds: { strong: d("strong"), em: d("em"), mark: d("mark"), del: d("del"), code: d("code"), u: d("u") } };
    marksCache.set(prefix, m);
  }
  return m;
}
function contentMark(span, prefix) {
  if (span.kind === "color") return import_view.Decoration.mark({ attributes: { style: `color: ${span.color}` } });
  if (span.highlight) return import_view.Decoration.mark({ class: `${prefix}-mark`, attributes: { "data-highlight": span.highlight } });
  if (span.kind === "bg") return import_view.Decoration.mark({ class: `${prefix}-mark`, attributes: { style: `background: ${span.color}` } });
  return marksFor(prefix).kinds[span.kind];
}
function build(state) {
  const deco = [];
  const atomic = [];
  const all = state.facet(hideAll);
  const prefix = state.facet(prefixFacet);
  const SYNTAX = marksFor(prefix).syntax;
  for (const span of formatSpans(state.doc.toString())) {
    deco.push(contentMark(span, prefix).range(span.innerFrom, span.innerTo));
    if (!all && revealed(span, state.selection.ranges)) {
      deco.push(SYNTAX.range(span.from, span.innerFrom), SYNTAX.range(span.innerTo, span.to));
    } else {
      const marks = [HIDE.range(span.from, span.innerFrom), HIDE.range(span.innerTo, span.to)];
      deco.push(...marks);
      atomic.push(...marks);
    }
  }
  return { deco: import_view.Decoration.set(deco, true), atomic: import_view.Decoration.set(atomic, true) };
}
var livePreview = import_view.ViewPlugin.fromClass(
  class {
    constructor(view) {
      ({ deco: this.deco, atomic: this.atomic } = build(view.state));
    }
    update(update) {
      if (update.docChanged || update.selectionSet) ({ deco: this.deco, atomic: this.atomic } = build(update.state));
    }
  },
  {
    decorations: (v) => v.deco,
    provide: (plugin) => import_view.EditorView.atomicRanges.of((view) => view.plugin(plugin)?.atomic ?? import_view.Decoration.none)
  }
);
function formatPreview(prefix, hideAllSyntax) {
  return [prefixFacet.of(prefix), hideAll.of(hideAllSyntax), livePreview, keepMarksPaired, balancedCopy];
}
var balancedCopy = import_view.EditorView.domEventHandlers({
  copy: (ev, view) => copySel(ev, view, false),
  cut: (ev, view) => copySel(ev, view, true)
});
function copySel(ev, view, cut) {
  const { from, to } = view.state.selection.main;
  if (from === to || !ev.clipboardData) return false;
  const text = view.state.doc.toString();
  const out = balancedSlice(text, from, to);
  if (out === text.slice(from, to)) return false;
  ev.preventDefault();
  ev.clipboardData.setData("text/plain", out);
  if (cut) view.dispatch({ changes: { from, to }, userEvent: "delete.cut" });
  return true;
}
function insertFormatBreak(view) {
  const { from, to } = view.state.selection.main;
  const text = view.state.doc.toString();
  const ins = breakInsideFormats(text.slice(0, from) + text.slice(to), from);
  view.dispatch({ changes: { from, to, insert: ins }, selection: { anchor: from + ins.length }, userEvent: "input" });
  return true;
}
function visibleSelection(view) {
  let { from, to } = view.state.selection.main;
  const hidden = view.plugin(livePreview)?.atomic;
  if (from === to || !hidden) return { from, to };
  for (let moved = true; moved && from < to; ) {
    moved = false;
    hidden.between(from, to, (a, b) => {
      if (a === from && b <= to) {
        from = b;
        moved = true;
        return false;
      }
      return void 0;
    });
  }
  for (let moved = true; moved && from < to; ) {
    moved = false;
    hidden.between(from, to, (a, b) => {
      if (b === to && a >= from) {
        to = a;
        moved = true;
        return false;
      }
      return void 0;
    });
  }
  return { from, to };
}

// src/editor/cell-input.ts
var TextareaInput = class {
  constructor(doc) {
    this.cleanups = [];
    this.comp = false;
    this.el = doc.createElement("textarea");
    this.el.className = "ggt-input";
    this.el.rows = 1;
    this.el.spellcheck = false;
    this.el.setAttribute("autocapitalize", "off");
  }
  get value() {
    return this.el.value;
  }
  set value(v) {
    this.el.value = v;
  }
  reset(text) {
    this.el.value = text;
  }
  get selectionStart() {
    return this.el.selectionStart;
  }
  get selectionEnd() {
    return this.el.selectionEnd;
  }
  setSelectionRange(start, end) {
    this.el.setSelectionRange(start, end);
  }
  detach() {
    this.el.remove();
  }
  visibleSelection() {
    return { from: this.el.selectionStart, to: this.el.selectionEnd };
  }
  atEdge(dir) {
    const ta = this.el;
    const pos = ta.selectionStart;
    if (pos !== ta.selectionEnd) return false;
    if (dir === "left") return pos === 0;
    if (dir === "right") return pos === ta.value.length;
    const doc = ta.ownerDocument;
    const cs = (doc.defaultView ?? window).getComputedStyle(ta);
    const m = doc.body.appendChild(doc.createElement("div"));
    for (const p of ["box-sizing", "width", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "font-family", "font-size", "font-weight", "font-style", "letter-spacing", "line-height", "text-transform", "word-spacing", "tab-size", "text-indent", "word-break", "overflow-wrap"])
      m.style.setProperty(p, cs.getPropertyValue(p));
    m.className = "ggt-caret-mirror";
    m.append(ta.value.slice(0, pos));
    const mark = m.appendChild(doc.createElement("span"));
    mark.textContent = "\u200B";
    m.append(ta.value.slice(pos) || "\u200B");
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.5 || 20;
    const top = mark.offsetTop - parseFloat(cs.paddingTop) - parseFloat(cs.borderTopWidth);
    const height = m.scrollHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    m.remove();
    return dir === "up" ? top < lh / 2 : top + lh * 1.5 > height;
  }
  focus() {
    this.el.focus({ preventScroll: true });
  }
  hasFocus() {
    return this.el.ownerDocument.activeElement === this.el;
  }
  contains(node) {
    return node === this.el;
  }
  sizingText() {
    return this.el.value;
  }
  get composing() {
    return this.comp;
  }
  bind(h) {
    const on = (type, fn) => {
      this.el.addEventListener(type, fn);
      this.cleanups.push(() => this.el.removeEventListener(type, fn));
    };
    on("keydown", (ev) => h.keydown(ev));
    on("copy", (ev) => h.copy(ev));
    on("cut", (ev) => h.cut(ev));
    on("paste", (ev) => h.paste(ev));
    on("input", () => h.input());
    for (const type of ["select", "keyup", "mouseup"]) on(type, () => h.select());
    on("compositionstart", () => {
      this.comp = true;
      h.compositionstart();
    });
    on("compositionend", () => {
      this.comp = false;
      h.input();
    });
    on("blur", () => h.blur());
  }
  undo() {
    this.el.focus();
    this.el.ownerDocument.execCommand("undo");
  }
  redo() {
    this.el.focus();
    this.el.ownerDocument.execCommand("redo");
  }
  destroy() {
    for (const fn of this.cleanups.splice(0)) fn();
    this.el.remove();
  }
};
var CodeMirrorInput = class {
  constructor(doc) {
    /**
     * 编辑器等到第一次选中这张表的格子才建：一篇笔记里几十张表、只点其中一两张的话，就只建一两个；
     * 滚动时重新画的表格也不用每张都建一个（建的那一下会让刚画出来的表格晚一帧吸顶）
     */
    this._view = null;
    this.handlers = null;
    /** reset() 正在换文字：这次改动不算用户输入 */
    this.resetting = false;
    this.doc = doc;
    const later = (fn) => queueMicrotask(() => this.handlers && fn());
    this.extensions = [
      // 宿主的按键、复制粘贴排在编辑器自己的前面：处理了（preventDefault）CodeMirror 就不再管
      import_state2.Prec.highest(
        import_view2.EditorView.domEventHandlers({
          keydown: (ev) => {
            this.handlers?.keydown(ev);
            return ev.defaultPrevented;
          },
          copy: (ev) => {
            this.handlers?.copy(ev);
            return ev.defaultPrevented;
          },
          cut: (ev) => {
            this.handlers?.cut(ev);
            return ev.defaultPrevented;
          },
          paste: (ev) => {
            this.handlers?.paste(ev);
            return ev.defaultPrevented;
          },
          compositionstart: () => {
            this.handlers?.compositionstart();
            return false;
          },
          compositionend: () => {
            later(() => this.handlers?.input());
            return false;
          },
          blur: () => {
            queueMicrotask(() => {
              if (!this.handlers) return;
              const d = this.view.dom.ownerDocument;
              if (!d.hasFocus() || !this.view.dom.contains(d.activeElement)) this.handlers.blur();
            });
            return false;
          }
        })
      ),
      (0, import_commands.history)(),
      // Enter、Tab、Esc 归表格（提交、走格）；格子里换行用 Shift+Enter
      import_view2.keymap.of([{ key: "Shift-Enter", run: insertFormatBreak }, ...import_commands.historyKeymap, ...import_commands.defaultKeymap.filter((b) => b.key !== "Enter" && b.key !== "Mod-Enter")]),
      import_view2.EditorView.lineWrapping,
      import_view2.EditorView.contentAttributes.of({ spellcheck: "false", autocapitalize: "off", autocorrect: "off" }),
      // 编辑器根元素的类名由 CodeMirror 管着，直接加会被它改回去
      import_view2.EditorView.editorAttributes.of({ class: "ggt-input ggt-input-cm" }),
      ...formatPreview("ggt-ed", false),
      import_view2.EditorView.updateListener.of((u) => {
        if (this.resetting) return;
        if (u.docChanged) later(() => this.handlers?.input());
        if (u.docChanged || u.selectionSet) later(() => this.handlers?.select());
      })
    ];
  }
  get view() {
    if (!this._view) {
      this._view = new import_view2.EditorView({ root: this.doc, state: import_state2.EditorState.create({ doc: "", extensions: this.extensions }) });
      this._view.contentDOM.cellInput = this;
    }
    return this._view;
  }
  get el() {
    return this.view.dom;
  }
  get composing() {
    return !!this._view?.composing;
  }
  detach() {
    this._view?.dom.remove();
  }
  get value() {
    return this._view ? this._view.state.doc.toString() : "";
  }
  set value(v) {
    if (v === this.value) return;
    this.view.dispatch({ changes: { from: 0, to: this.view.state.doc.length, insert: v }, selection: import_state2.EditorSelection.cursor(v.length), userEvent: "input.format" });
  }
  reset(text) {
    if (!this._view && !text) return;
    this.resetting = true;
    try {
      this.view.setState(import_state2.EditorState.create({ doc: text, selection: import_state2.EditorSelection.cursor(text.length), extensions: this.extensions }));
    } finally {
      this.resetting = false;
    }
  }
  get selectionStart() {
    return this._view?.state.selection.main.from ?? 0;
  }
  get selectionEnd() {
    return this._view?.state.selection.main.to ?? 0;
  }
  setSelectionRange(start, end) {
    const len = this.view.state.doc.length;
    this.view.dispatch({ selection: import_state2.EditorSelection.single(Math.min(start, len), Math.min(end, len)) });
  }
  visibleSelection() {
    return visibleSelection(this.view);
  }
  atEdge(dir) {
    const v = this._view;
    if (!v) return true;
    const r = v.state.selection.main;
    if (!r.empty) return false;
    if (dir === "left" || dir === "right") return v.moveByChar(r, dir === "right").head === r.head;
    const next = v.moveVertically(r, dir === "down");
    if (next.head === r.head) return true;
    const a = v.coordsAtPos(r.head);
    const b = v.coordsAtPos(next.head);
    return !!a && !!b && Math.abs(a.top - b.top) < 2;
  }
  focus() {
    this.syncRoot();
    this.view.contentDOM.focus({ preventScroll: true });
  }
  /**
   * 编辑器跟着它现在所在的 document 走：白板卡片编辑时 Obsidian 先在主窗口建好表格、再挪进卡片的 iframe，
   * 编辑器还当自己在主窗口，点格子里的字时 CodeMirror 把 iframe 当成别处的焦点让它失焦，这一格就保存退出了，
   * 光标挪不到想要的位置（B站反馈：白板里改格子只能全删重打）
   */
  syncRoot() {
    const v = this._view;
    if (v && v.dom.isConnected && v.root !== v.dom.ownerDocument) v.setRoot(v.dom.ownerDocument);
  }
  hasFocus() {
    return !!this._view?.hasFocus;
  }
  contains(node) {
    return !!node && !!this._view?.dom.contains(node);
  }
  /** 藏起来的标签不占位置：按看得见的字排版 */
  sizingText() {
    return this.view.contentDOM.innerText.replace(/\n$/, "");
  }
  bind(h) {
    this.handlers = h;
  }
  undo() {
    (0, import_commands.undo)(this.view);
  }
  redo() {
    (0, import_commands.redo)(this.view);
  }
  destroy() {
    this.handlers = null;
    this._view?.destroy();
    this._view = null;
  }
};

// src/editor/editor.ts
var KIND_ICONS = { text: "type", status: "tag", multi: "tags", date: "calendar", num: "hash", bar: "percent" };
var ARROW_EDGE = {
  ArrowUp: { edge: "up", dr: -1, dc: 0 },
  ArrowDown: { edge: "down", dr: 1, dc: 0 },
  ArrowLeft: { edge: "left", dr: 0, dc: -1 },
  ArrowRight: { edge: "right", dr: 0, dc: 1 }
};
function sameTable(a, b) {
  return JSON.stringify([a.cells, a.align, a.meta]) === JSON.stringify([b.cells, b.align, b.meta]);
}
var V_ICONS = { top: "align-vertical-justify-start", middle: "align-vertical-justify-center", bottom: "align-vertical-justify-end" };
function keepBlankLines(md) {
  if (!/\n[ \t]*\n/.test(md)) return md;
  const lines = md.split("\n");
  let fence = false;
  return lines.map((l, i) => {
    if (/^\s*(```|~~~)/.test(l)) fence = !fence;
    const inner = i > 0 && i < lines.length - 1;
    return !fence && inner && !l.trim() ? "&nbsp;" : l;
  }).join("\n");
}
var MIN_FIT_COL = 56;
var PLAIN_RE = /^[\p{L}\p{N}\p{Zs},.;:!?'"()%+\-/@，。、；：！？“”‘’（）《》【】…—·]*$/u;
function isPlainText(md) {
  if (!PLAIN_RE.test(md)) return false;
  if (/^\s*([-+]\s|\d+[.)](\s|$))/.test(md)) return false;
  if (/:\/\/|www\.|%%|^\s*-+\s*$/i.test(md)) return false;
  return true;
}
var lastActive = null;
function markActive(e) {
  lastActive = e;
}
function activeTableEditor() {
  return lastActive && lastActive.hasSelection() ? lastActive : null;
}
var TABLE_COMMANDS = [
  "insert-row-above",
  "insert-row-below",
  "insert-col-left",
  "insert-col-right",
  "duplicate-row",
  "duplicate-col",
  "delete-row",
  "delete-col",
  "sort-asc",
  "sort-desc",
  "merge-cells",
  "unmerge-cells",
  "clear-cells",
  "align-left",
  "align-center",
  "align-right",
  "select-row",
  "select-col",
  "toggle-checkbox"
];
var TableEditor = class {
  constructor(parent, table, host) {
    this.host = host;
    this.sel = null;
    /** 多格选区的另一头（拖选、Shift）；null 是只选了一格 */
    this.anchor = null;
    /** 选区是点行 / 列手柄选的整行 / 整列：不因为碰到合并格往外扩 */
    this.lineSel = false;
    /** 折着的表在这张编辑器里临时展开了（阅读视图点「展开」、搜索跳到藏着的行），不改文件 */
    this.localUnfold = false;
    this.editing = false;
    /** 编辑时宿主送来的新表：等这一格改完再换上 */
    this.pending = null;
    this.hover = null;
    /** 上一次滚动的时间：滚动中（和刚停下的一小会儿）不显示手柄，鼠标再动才出来（#2） */
    this.scrolledAt = 0;
    /** 最近一次是用手指点的：触屏没有悬停，手柄跟着选中的格子显示 */
    this.touched = false;
    /** 每个位置 → 显示它的格子元素（被合并盖住的位置指向左上角那格）。render 时建，大表格里不用每次 querySelector 全表 */
    this.grid = [];
    /** 上一次加了选中样式、十字高亮的格子：下次只清这些，不扫全表 */
    this.marked = [];
    this.crossed = [];
    this.popover = null;
    /** 上次提示「计算列不能改」的时间（一直打字时别一直弹） */
    this.fxNoticeAt = 0;
    /** 编辑时的补全列表（[[ 链接、# 标签） */
    this.suggest = null;
    /** 日期列编辑时的日历：view 是正在看的月份，picked 是格子里现在的日期 */
    this.cal = null;
    /** 这次编辑里打过字（日期列「自动识别日期写法」只换打过字的格子） */
    this.typed = false;
    /** 上次弹菜单的位置（列类型的二级菜单在同一处打开） */
    this.menuAt = { x: 0, y: 0 };
    this.resize = null;
    this.destroyed = false;
    /** 横向滚动条占的高度（覆盖式滚动条是 0） */
    this.scrollbarH = 0;
    /** 浮在可视区底边的横向滚动条（表格又宽又长、自己的滚动条在屏幕下面时才出来） */
    this.hbar = null;
    this.hbarSync = false;
    /** 列宽按比例缩放时缩了多少（1 = 没缩）；拖列宽时按它换算回文件里的宽度 */
    this.fitScale = 1;
    /** 上一次长按开菜单的时间（安卓随后还会来一次右键事件，忽略掉） */
    this.longPressAt = -Infinity;
    this.cleanups = [];
    this.outer = null;
    /** 找外面的滚动区（watchScroll 里定义；挂到页面上以前找不到，之后再试） */
    this.findOuter = null;
    /** 表头吸顶用滚动驱动动画（否则每次滚动后用 JS 挪，旧环境、被缩放的脑图画布里走这条） */
    this.scrollDriven = false;
    this.stickKey = "";
    /**
     * 表头往下挪 y 像素（0 是不挪）。挪每个格子，不挪整个 thead：iOS（WebKit）给 thead 加 transform 时
     * 文字跟着挪、格子底色留在原地，表头变透明压在正文上（#15）
     */
    this.headShift = 0;
    /** 十字高亮：悬停模式下鼠标所在的格子，否则（或鼠标不在表格上）选中的格子 */
    this.crossAt = null;
    // ---------- 格式栏 ----------
    this.formatBar = null;
    this.formatBarKey = "";
    // ---------- 手机上的编辑工具条 ----------
    this.mobileBar = null;
    this.mobileBarCleanup = null;
    this.table = table;
    const doc = parent.ownerDocument;
    this.root = doc.createElement("div");
    this.root.className = "ggt";
    this.scroller = this.root.appendChild(doc.createElement("div"));
    this.scroller.className = "ggt-scroll";
    this.tableEl = this.scroller.appendChild(doc.createElement("table"));
    this.tableEl.className = "ggt-table";
    this.rangeBox = this.scroller.appendChild(doc.createElement("div"));
    this.rangeBox.className = "ggt-range-box";
    this.crossBands = [0, 1, 2, 3].map(() => {
      const band = this.scroller.appendChild(doc.createElement("div"));
      band.className = "ggt-cross-band";
      return band;
    });
    this.fillPreview = this.scroller.appendChild(doc.createElement("div"));
    this.fillPreview.className = "ggt-fill-preview";
    this.fillHandle = this.scroller.appendChild(doc.createElement("div"));
    this.fillHandle.className = "ggt-fill";
    this.fillHandle.setAttribute("aria-label", t("fill"));
    this.input = host.richEdit?.() ? new CodeMirrorInput(doc) : new TextareaInput(doc);
    this.resizeBar = this.root.appendChild(doc.createElement("div"));
    this.resizeBar.className = "ggt-resize";
    this.resizeBar.setAttribute("aria-label", t("resize"));
    this.rowHandle = this.handle("ggt-row-handle", t("rowMenu"), "grip-vertical");
    this.cornerBtn = this.root.appendChild(doc.createElement("button"));
    this.cornerBtn.setAttribute("type", "button");
    this.cornerBtn.className = "ggt-corner";
    this.cornerBtn.tabIndex = -1;
    this.cornerBtn.setAttribute("aria-label", t("tableMenu"));
    if (this.host.setIcon) this.host.setIcon(this.cornerBtn, "table-2");
    else this.cornerBtn.textContent = "\u25A6";
    this.colHandle = this.handle("ggt-col-handle", t("colMenu"), "grip-horizontal");
    this.addButton("ggt-add-col", t("addCol"), () => this.apply(insertCol(this.table, colCount(this.table)), { r: this.sel?.r ?? 0, c: colCount(this.table) }));
    this.addButton("ggt-add-row", t("addRow"), () => this.apply(insertRow(this.table, rowCount(this.table)), { r: rowCount(this.table), c: this.sel?.c ?? 0 }));
    this.addButton("ggt-add-col-first", t("addColFirst"), () => this.apply(insertCol(this.table, 0), { r: this.sel?.r ?? 0, c: 0 }));
    this.addButton("ggt-add-row-first", t("addRowFirst"), () => {
      const at = headRows(this.table);
      this.apply(insertRow(this.table, at), { r: at, c: this.sel?.c ?? 0 });
    });
    let leaveTimer = 0;
    this.root.addEventListener("pointerenter", () => {
      window.clearTimeout(leaveTimer);
      this.root.classList.add("is-hot");
    });
    this.root.addEventListener("pointerleave", () => {
      window.clearTimeout(leaveTimer);
      leaveTimer = window.setTimeout(() => this.root.classList.remove("is-hot"), 400);
    });
    this.cleanups.push(() => window.clearTimeout(leaveTimer));
    this.root.classList.toggle("is-readonly", !!host.readonly);
    parent.appendChild(this.root);
    this.bind();
    this.render();
    this.watchScroll();
  }
  // ---------- 对外 ----------
  /** 宿主那边的表变了（比如撤销、别处改了文件） */
  update(table) {
    if (sameTable(table, this.table)) {
      this.table = table;
      return;
    }
    if (this.editing) {
      this.pending = table;
      return;
    }
    this.table = table;
    this.render();
  }
  getTable() {
    return this.table;
  }
  select(r, c) {
    this.revealRow(r);
    this.setSel({ r, c }, true);
  }
  /** 折着的表：在这一张编辑器里先展开（不改文件），要去的那一行藏着的时候用（搜索跳过来、宿主要选某一格） */
  revealRow(r) {
    if (!this.folded() || r < headRows(this.table)) return;
    this.localUnfold = true;
    this.render();
  }
  /** 折叠着：注释里有 fold、没在这张编辑器里临时展开、表头下面真有行 */
  folded() {
    const tb = this.table;
    return tb.meta.fold === 1 && !this.localUnfold && rowCount(tb) > headRows(tb);
  }
  /** 画出来的行数：折着时只有表头 */
  shownRows() {
    return this.folded() ? headRows(this.table) : rowCount(this.table);
  }
  /** 点「展开 N 行」：能改文件就去掉注释里的 fold；只读（阅读视图）只在这里展开，不改文件 */
  unfold() {
    if (this.host.readonly) {
      this.localUnfold = true;
      this.render();
      return;
    }
    this.applyKeepRange(setFolded(this.table, false));
  }
  /**
   * 正在编辑的这一格按输入框里现在的文字算出来的表，不结束编辑；没在编辑或没改返回 null。
   * 宿主自动保存前用（脑图视图存盘前要带上正在输入的文字）
   */
  draft() {
    if (!this.editing || !this.sel) return null;
    const text = this.input.value.replace(/\r\n?/g, "\n").replace(/^\s+|\s+$/g, "");
    const edited = editCell(this.table, this.sel.r, this.sel.c, text);
    return edited === this.table ? null : normalize(edited);
  }
  /** 结束编辑并把输入的内容交给宿主（宿主关掉、换文档、切只读之前调） */
  flush() {
    if (this.editing) this.commit();
  }
  isEditing() {
    return this.editing;
  }
  hasSelection() {
    return !this.destroyed && !!this.sel && this.root.isConnected;
  }
  /** 命令：作用在选中的格子（或选区）上。做不了返回 false */
  runCommand(id) {
    const p = this.sel;
    if (!p || this.host.readonly) return false;
    if (this.editing) this.commit();
    const tb = this.table;
    const r = this.rangeRect() ?? { r1: p.r, c1: p.c, r2: p.r, c2: p.c };
    const rows = r.r2 - r.r1 + 1;
    const cols = r.c2 - r.c1 + 1;
    switch (id) {
      case "insert-row-above":
        if (r.r1 === 0) return false;
        this.apply(insertRows(tb, r.r1, rows), { r: r.r1, c: p.c });
        return true;
      case "insert-row-below":
        this.apply(insertRows(tb, r.r2 + 1, rows), { r: r.r2 + 1, c: p.c });
        return true;
      case "insert-col-left":
        this.apply(insertCols(tb, r.c1, cols), { r: p.r, c: r.c1 });
        return true;
      case "insert-col-right":
        this.apply(insertCols(tb, r.c2 + 1, cols), { r: p.r, c: r.c2 + 1 });
        return true;
      case "duplicate-row":
        if (p.r === 0) return false;
        this.apply(duplicateRow(tb, p.r), { r: p.r + 1, c: p.c });
        return true;
      case "duplicate-col":
        this.apply(duplicateCol(tb, p.c), { r: p.r, c: p.c + 1 });
        return true;
      case "delete-row": {
        if (rows === 1 && r.r1 === 0) {
          const n2 = deleteRow(tb, 0);
          if (n2 === tb) return false;
          this.apply(n2, { r: 0, c: p.c });
          return true;
        }
        if (r.r1 === 0 || rowCount(tb) - rows < 2) return false;
        if (deleteRow(tb, r.r2) === tb) return false;
        let n = tb;
        for (let i = r.r2; i >= r.r1; i--) n = deleteRow(n, i);
        this.apply(n, { r: Math.min(r.r1, rowCount(n) - 1), c: p.c });
        return true;
      }
      case "delete-col": {
        if (colCount(tb) - cols < 1) return false;
        let n = tb;
        for (let i = r.c2; i >= r.c1; i--) n = deleteCol(n, i);
        this.apply(n, { r: p.r, c: Math.min(r.c1, colCount(n) - 1) });
        return true;
      }
      case "sort-asc":
      case "sort-desc":
        if (!canSortRows(tb)) return false;
        this.apply(sortRows(tb, p.c, id === "sort-desc", this.hasTotalRow(), this.dateParser()), p);
        return true;
      case "merge-cells":
        if (!this.isMulti()) return false;
        this.apply(mergeCells(tb, r), { r: r.r1, c: r.c1 });
        return true;
      case "unmerge-cells":
        if (!mergeAt(tb, p.r, p.c)) return false;
        this.apply(unmergeAt(tb, p.r, p.c), p);
        return true;
      case "clear-cells":
        this.applyKeepRange(clearCells(tb, this.rangeCells()));
        return true;
      case "align-left":
      case "align-center":
      case "align-right": {
        const a = id.slice(6);
        let n = tb;
        for (let c = r.c1; c <= r.c2; c++) n = setAlign(n, c, a);
        this.applyKeepRange(n);
        return true;
      }
      case "select-row":
        this.anchor = { r: p.r, c: 0 };
        this.sel = { r: p.r, c: colCount(tb) - 1 };
        this.lineSel = true;
        this.markSel();
        return true;
      case "select-col":
        this.anchor = { r: 0, c: p.c };
        this.sel = { r: rowCount(tb) - 1, c: p.c };
        this.lineSel = true;
        this.markSel();
        return true;
      case "toggle-checkbox": {
        const v = tb.cells[p.r][p.c];
        this.apply(setCell(tb, p.r, p.c, CHECK_RE.test(v) ? v.replace(CHECK_RE, "").trimStart() : `[ ] ${v}`.trimEnd()), p);
        return true;
      }
    }
    return false;
  }
  /**
   * 搜索跳到表格里（在文件中查找、全局搜索点进来）：第 r 行第 c 列格子里第 k 处 text 标出来、滚进视野（#15）。
   * 和 Obsidian 标当前这一处一样，在那几个字外面画一圈强调色的框（盖在格子底色、==高亮== 上面，不会被它们盖住）；
   * 不改格子的内容。找不到这段字（格式把字拆开了）就给整格画框
   */
  showMatch(r, c, text, k) {
    this.revealRow(r);
    const el = this.grid[r]?.[c];
    if (!el) return;
    clearSearchMark();
    el.scrollIntoView({ block: "center", inline: "nearest" });
    const content = el.querySelector(".ggt-content");
    const range = content && text ? findTextRange(content, text, k) : null;
    this.root.ownerDocument.addEventListener("pointerdown", clearSearchMark, { once: true, capture: true });
    const rects = range ? Array.from(range.getClientRects()).filter((b) => b.width > 0 && b.height > 0) : [];
    if (rects.length) {
      const k2 = this.scale();
      const box = el.getBoundingClientRect();
      const layer = el.createDiv({ cls: "ggt-search-mark" });
      for (const b of rects) {
        layer.createDiv().setCssProps({
          left: `${(b.left - box.left) / k2 - el.clientLeft}px`,
          top: `${(b.top - box.top) / k2 - el.clientTop}px`,
          width: `${b.width / k2}px`,
          height: `${b.height / k2}px`
        });
      }
      searchMarkLayer = layer;
      return;
    }
    el.classList.add("is-search-hit");
    searchMarkCell = el;
  }
  destroy() {
    this.hideFormatBar();
    this.hideMobileBar();
    if (lastActive === this) lastActive = null;
    this.destroyed = true;
    this.hbar?.remove();
    this.hbar = null;
    this.closePopover();
    this.closeSuggest();
    for (const f of this.cleanups) f();
    this.root.remove();
  }
  // ---------- 表头吸顶、横向滚动阴影 ----------
  /** 往上找会滚动的容器（编辑器、阅读视图），表头在表格滚出它顶端时贴着顶端 */
  watchScroll() {
    const win = this.root.ownerDocument.defaultView ?? window;
    const update = () => {
      if (this.destroyed) return;
      if (!this.outer) this.findOuter?.();
      const sc = this.scroller;
      this.root.classList.toggle("can-left", sc.scrollLeft > 1);
      this.root.classList.toggle("can-right", sc.scrollLeft + sc.clientWidth < sc.scrollWidth - 1);
      const bar = Math.max(0, sc.offsetHeight - sc.clientHeight);
      if (bar !== this.scrollbarH) {
        this.scrollbarH = bar;
        this.root.style.setProperty("--ggt-sb", `${bar}px`);
      }
      this.stickHeader();
      this.placeHBar();
      this.placeHandles();
      if (this.resizeBar.classList.contains("is-touch")) this.placeTouchResize();
      if (this.root.classList.contains("is-freeze") && this.crossBands.some((b) => b.classList.contains("is-shown"))) this.markCross();
    };
    const onScroll = () => win.requestAnimationFrame(update);
    const onScrollEv = () => {
      this.hideHandlesForScroll();
      onScroll();
    };
    this.on(this.scroller, "scroll", onScrollEv, { passive: true });
    const findOuter = () => {
      if (this.outer) return true;
      if (!this.root.isConnected) return false;
      let first = null;
      let found = null;
      for (let el2 = this.root.parentElement; el2; el2 = el2.parentElement) {
        const oy = win.getComputedStyle(el2).overflowY;
        if (oy !== "auto" && oy !== "scroll" || el2.classList.contains("el-table")) continue;
        first ?? (first = el2);
        if (el2.scrollHeight > el2.clientHeight + 1) {
          found = el2;
          break;
        }
      }
      const el = found ?? first;
      if (!el) return false;
      this.outer = el;
      if (win.CSS?.supports?.("animation-timeline: scroll()")) {
        el.classList.add("ggt-y-host");
        this.scrollDriven = true;
      }
      el.addEventListener("scroll", onScrollEv, { passive: true });
      this.cleanups.push(() => el.removeEventListener("scroll", onScrollEv));
      return true;
    };
    this.findOuter = findOuter;
    win.requestAnimationFrame(() => {
      findOuter();
      update();
    });
    let parentW = -1;
    const onParent = () => {
      const p = this.root.parentElement;
      const w = p ? p.clientWidth : 0;
      if (w === parentW) return;
      parentW = w;
      if (!this.resize) this.fitCols();
      onScroll();
    };
    const ro = new win.ResizeObserver(onScroll);
    ro.observe(this.scroller);
    const pro = new win.ResizeObserver(() => win.requestAnimationFrame(onParent));
    if (this.root.parentElement) pro.observe(this.root.parentElement);
    this.cleanups.push(() => pro.disconnect());
    this.cleanups.push(() => ro.disconnect());
  }
  /**
   * 又长又宽的表格：横向滚动条在表格最底下，得先翻到底才拖得到（B 站 bili_70604431418）。
   * 表格比页面宽、底边在可视区下面、上面还有一截露在可视区里时，在可视区底边浮出一条横向滚动条，和表格一起左右滚；
   * 表格的底边滚进来了就收起，用表格自己那条。被缩放的脑图画布里、触屏上不出（触屏直接左右划）
   */
  placeHBar() {
    const sc = this.scroller;
    const outer = this.outer;
    const win = this.root.ownerDocument.defaultView ?? window;
    const hide = () => this.hbar?.classList.remove("is-shown");
    if (!outer || !this.root.isConnected || sc.scrollWidth <= sc.clientWidth + 1 || Math.abs(this.scale() - 1) > 0.01 || win.matchMedia?.("(pointer: coarse)").matches) return hide();
    const o = outer.getBoundingClientRect();
    const r = sc.getBoundingClientRect();
    const bottom = Math.min(o.bottom, win.innerHeight);
    if (r.width === 0 || r.bottom <= bottom || r.top > bottom - 60) return hide();
    const left = Math.max(r.left, o.left);
    const right = Math.min(r.right, o.right);
    if (right - left < 40) return hide();
    let bar = this.hbar;
    if (!bar) {
      const doc = this.root.ownerDocument;
      bar = doc.body.appendChild(doc.createElement("div"));
      bar.className = "ggt-hbar";
      bar.appendChild(doc.createElement("div")).className = "ggt-hbar-inner";
      bar.addEventListener(
        "scroll",
        () => {
          if (this.hbarSync) {
            this.hbarSync = false;
            return;
          }
          const b = bar;
          sc.scrollLeft = b.scrollLeft / Math.max(1, b.scrollWidth - b.clientWidth) * (sc.scrollWidth - sc.clientWidth);
        },
        { passive: true }
      );
      this.hbar = bar;
    }
    const inner = bar.firstElementChild;
    const w = right - left;
    inner.style.width = `${Math.round(sc.scrollWidth / sc.clientWidth * w)}px`;
    bar.classList.add("is-shown");
    bar.style.left = `${Math.round(left)}px`;
    bar.style.width = `${Math.round(w)}px`;
    bar.style.top = `${Math.round(bottom - bar.offsetHeight)}px`;
    const target = sc.scrollLeft / Math.max(1, sc.scrollWidth - sc.clientWidth) * Math.max(0, bar.scrollWidth - bar.clientWidth);
    if (Math.abs(bar.scrollLeft - target) > 1) {
      this.hbarSync = true;
      bar.scrollLeft = target;
    }
  }
  /**
   * 编辑器被整体缩放了多少（脑图画布用 transform: scale 缩放，getBoundingClientRect 量到的是屏幕像素）。
   * 屏幕上量出来的距离要除以它，才是写进 style 的 CSS 像素
   */
  scale() {
    const w = this.root.offsetWidth;
    if (!w) return 1;
    const k = this.root.getBoundingClientRect().width / w;
    return k > 0 && Number.isFinite(k) ? k : 1;
  }
  stickHeader() {
    const head = this.tableEl.tHead;
    if (!head) return;
    const outer = this.outer;
    let offset = 0;
    if (outer) {
      const top = outer.getBoundingClientRect().top;
      const t2 = this.tableEl.getBoundingClientRect();
      const h = head.getBoundingClientRect().height;
      if (t2.top < top && t2.bottom - h > top) offset = Math.min(top - t2.top, t2.height - h * 2);
    }
    const stuck = offset > 0;
    this.root.classList.toggle("is-stuck", stuck);
    const native = !!outer && Math.abs(this.scale() - 1) < 0.01 && this.canStickNatively(outer);
    this.root.classList.toggle("is-native-stick", native);
    if (native && outer) {
      this.root.classList.remove("is-sd");
      const pad2 = parseFloat((outer.ownerDocument.defaultView ?? window).getComputedStyle(outer).paddingTop) || 0;
      this.root.style.setProperty("--ggt-sticky-top", `${-pad2}px`);
      this.moveHead(head, 0);
      return;
    }
    if (outer && this.scrollDriven && Math.abs(this.scale() - 1) < 0.01) {
      this.stickRange(outer, head);
      this.moveHead(head, 0);
      return;
    }
    this.root.classList.remove("is-sd");
    this.moveHead(head, stuck ? Math.round(offset / this.scale()) : 0);
  }
  moveHead(head, y) {
    if (y === this.headShift && !head.hasAttribute("style")) return;
    this.headShift = y;
    head.removeAttribute("style");
    for (const cell of Array.from(head.querySelectorAll(".ggt-cell"))) {
      if (y) cell.setCssProps({ transform: `translateY(${y}px)` });
      else cell.style.removeProperty("transform");
    }
  }
  /**
   * 能不能用原生吸顶：表格不用横向滚动，而且表格到外面滚动区之间没有别的会滚动、会裁切的容器
   * （阅读视图里 Obsidian 给表格套的 .el-table 是 overflow-x: auto，原生吸顶会贴到它上面去）
   */
  canStickNatively(outer) {
    const sc = this.scroller;
    if (sc.scrollWidth > sc.clientWidth + 1) return false;
    const win = this.root.ownerDocument.defaultView ?? window;
    for (let el = this.root.parentElement; el && el !== outer; el = el.parentElement) {
      const cs = win.getComputedStyle(el);
      if (cs.overflowX !== "visible" || cs.overflowY !== "visible") return false;
    }
    return true;
  }
  /**
   * 滚动驱动的吸顶：外面容器滚到「表格顶端碰到容器顶端」(a) 时表头开始跟着往下挪，挪到「表格只剩两行表头高」为止。
   * a 和长度不随滚动变，只在布局变了时更新；滚动过程中表头位置全由浏览器算
   */
  stickRange(outer, head) {
    const t2 = this.tableEl.getBoundingClientRect();
    const len = Math.round(t2.height - head.offsetHeight * 2);
    if (len <= 0) {
      this.root.classList.remove("is-sd");
      return;
    }
    const a = Math.round(outer.scrollTop + t2.top - outer.getBoundingClientRect().top - outer.clientTop);
    const dpr = (this.root.ownerDocument.defaultView ?? window).devicePixelRatio || 1;
    const key = `${a}|${len}|${dpr}`;
    if (key !== this.stickKey) {
      this.stickKey = key;
      const half = 0.5 / dpr;
      this.root.style.setProperty("--ggt-stick-a", `${a - half}px`);
      this.root.style.setProperty("--ggt-stick-b", `${a + len - half}px`);
      this.root.style.setProperty("--ggt-stick-len", `${len}px`);
      this.root.style.setProperty("--ggt-stick-steps", String(Math.max(1, Math.round(len * dpr))));
    }
    this.root.classList.add("is-sd");
  }
  /** 样式、行距：这张表自己定了就用它的，否则用宿主给的默认（data-def-*） */
  applyLook() {
    const d = this.root.dataset;
    d.preset = this.table.meta.style ?? d.defPreset ?? "default";
    d.density = this.table.meta.density ?? d.defDensity ?? "comfortable";
    this.root.classList.toggle("is-full", d.defFull === "1" && !this.table.meta.w?.some((x) => x != null));
    this.root.classList.toggle("is-strict", d.defStrict === "1");
    if (this.table.meta.fs) this.root.setCssProps({ "--ggt-fs": String(this.table.meta.fs) });
    else this.root.style.removeProperty("--ggt-fs");
  }
  // ---------- 渲染 ----------
  render() {
    const doc = this.root.ownerDocument;
    const hadFocus = this.input.hasFocus();
    const tb = this.table;
    const all = rowCount(tb);
    const folded = this.folded();
    const rows = this.shownRows();
    const cols = colCount(tb);
    if (this.sel) this.sel = this.canon({ r: Math.min(this.sel.r, rows - 1), c: Math.min(this.sel.c, cols - 1) });
    if (this.anchor) this.anchor = { r: Math.min(this.anchor.r, rows - 1), c: Math.min(this.anchor.c, cols - 1) };
    this.root.classList.toggle("is-folded", folded);
    const ms = merges(tb);
    this.applyLook();
    this.tableEl.replaceChildren();
    this.grid = Array.from({ length: all }, () => new Array(cols));
    this.marked = [];
    this.crossed = [];
    const colgroup = this.tableEl.appendChild(doc.createElement("colgroup"));
    const ws = Array.from({ length: cols }, (_, c) => widthOf(tb, c) ?? 0);
    const set = ws.filter((w) => w > 0);
    const avg = set.length ? set.reduce((a, b) => a + b, 0) / set.length : 0;
    const total = ws.reduce((a, w) => a + (w || avg), 0);
    if (set.length) this.tableEl.setCssProps({ "--ggt-total": `${Math.ceil(total)}px` });
    else this.tableEl.style.removeProperty("--ggt-total");
    for (let c = 0; c < cols; c++) {
      const col = colgroup.appendChild(doc.createElement("col"));
      const w = ws[c];
      if (w) col.style.width = `${w}px`;
      if (set.length) col.setCssProps({ "--ggt-pct": `${((w || avg) / total * 100).toFixed(3)}%` });
    }
    const thead = this.tableEl.appendChild(doc.createElement("thead"));
    this.headShift = 0;
    const tbody = this.tableEl.appendChild(doc.createElement("tbody"));
    const head = headRows(tb);
    const freeze = !!tb.meta.headerCol && tb.meta.freeze === 1;
    this.root.classList.toggle("is-freeze", freeze);
    for (let r = 0; r < rows; r++) {
      const tr = (r < head ? thead : tbody).appendChild(doc.createElement("tr"));
      for (let c = 0; c < cols; c++) {
        const m = ms.find((x) => r >= x.r1 && r <= x.r2 && c >= x.c1 && c <= x.c2);
        if (m && (m.r1 !== r || m.c1 !== c)) continue;
        const cell = tr.appendChild(doc.createElement(r < head ? "th" : "td"));
        cell.className = "ggt-cell";
        if (m) {
          cell.colSpan = m.c2 - m.c1 + 1;
          cell.rowSpan = Math.min(m.r2, rows - 1) - m.r1 + 1;
          cell.classList.add("is-merged");
          for (let i = m.r1; i <= m.r2; i++) for (let j = m.c1; j <= m.c2; j++) this.grid[i][j] = cell;
        } else this.grid[r][c] = cell;
        cell.dataset.r = String(r);
        cell.dataset.c = String(c);
        const a = tb.align[c];
        if (a) cell.dataset.align = a;
        const va = vAlignOf(tb, c);
        if (va) cell.dataset.valign = va;
        const bg = bgOf(tb, r, c);
        if (bg) cell.dataset.bg = bg;
        const fg = fgOf(tb, r, c);
        if (fg) cell.dataset.fg = fg;
        const fz = fontSizeOf(tb, r, c);
        if (fz) cell.setCssProps({ "--ggt-fz": String(fz) });
        if (tb.meta.headerCol && c === 0 && r >= head) cell.classList.add("is-head-col");
        if (freeze && c === 0 && (!m || m.c2 === 0)) cell.classList.add("is-frozen");
        if (!m && !widthOf(tb, c)) cell.classList.add("is-auto-width");
        else if (!m) cell.classList.add("is-set-width");
        const content = cell.appendChild(doc.createElement("div"));
        content.className = "ggt-content";
        if (r === all - 1 && r >= head && hasTotal(tb)) cell.classList.add("is-total-row");
        const ty = colTypeOf(tb, c);
        if (ty && r >= head) cell.dataset.ty = ty.t;
        this.fillCell(content, r, c, m ? mergedText(tb, m) : tb.cells[r][c]);
        if (formulaOf(tb, c)) this.markFx(cell, r, c);
        if (cell.classList.contains("is-total-row")) this.markCalc(cell, content, c);
      }
    }
    if (folded) {
      const bar = tbody.createEl("tr").createEl("td");
      bar.className = "ggt-fold-bar";
      bar.colSpan = cols;
      const btn = bar.createEl("button");
      btn.type = "button";
      btn.className = "ggt-fold-btn";
      btn.textContent = t("unfoldRows").replace("{n}", String(all - head));
      btn.addEventListener("pointerdown", (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
      });
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.unfold();
      });
    }
    this.fitCols();
    this.markSel();
    if (hadFocus && this.sel) this.input.focus();
    this.stickHeader();
    if (!this.resize) this.resizeBar.classList.remove("is-shown", "is-active");
    this.placeTouchResize();
  }
  /** 状态列的数据格画成彩色标签，别的照常 */
  fillCell(el, r, c, md) {
    const opts = this.table.meta.opts?.[c];
    const ty = colTypeOf(this.table, c);
    const isData = r >= headRows(this.table) && !(hasTotal(this.table) && r === rowCount(this.table) - 1);
    if (opts && ty?.t === "multi" && isData && md.trim()) {
      el.replaceChildren();
      el.classList.remove("is-empty");
      const wrap = el.appendChild(el.ownerDocument.createElement("span"));
      wrap.className = "ggt-pills";
      for (const v of splitTags(md)) {
        const pill = wrap.appendChild(el.ownerDocument.createElement("span"));
        pill.className = "ggt-pill";
        pill.dataset.c = opts[v] ?? "gray";
        pill.textContent = v;
      }
      return;
    }
    const prog = ty?.t === "bar" && isData ? readProgress(md) : null;
    if (prog !== null) {
      el.replaceChildren();
      el.classList.remove("is-empty");
      const bar = el.appendChild(el.ownerDocument.createElement("span"));
      bar.className = "ggt-bar";
      if (prog >= 1) bar.dataset.done = "1";
      const track = bar.appendChild(el.ownerDocument.createElement("span"));
      track.className = "ggt-bar-track";
      const fill = track.appendChild(el.ownerDocument.createElement("span"));
      fill.className = "ggt-bar-fill";
      fill.setCssProps({ "--ggt-p": `${Math.round(Math.max(0, Math.min(1, prog)) * 1e3) / 10}%` });
      const label = bar.appendChild(el.ownerDocument.createElement("span"));
      label.className = "ggt-bar-text";
      label.textContent = md.trim();
      return;
    }
    if (opts && isData && md.trim()) {
      el.replaceChildren();
      el.classList.remove("is-empty");
      const pill = el.appendChild(el.ownerDocument.createElement("span"));
      pill.className = "ggt-pill";
      pill.dataset.c = opts[md.trim()] ?? "gray";
      pill.textContent = md.trim();
      return;
    }
    this.fill(el, md);
    const daily = ty?.t === "date" && isData && md.trim() ? this.dailyNote() : null;
    const notDate = ty?.t === "date" && isData && !!md.trim() && !readDate(md, daily ? (n) => daily.parse(n) : void 0);
    el.classList.toggle("is-not-date", notDate);
    if (notDate) el.title = t("notDate");
    else if (el.title === t("notDate")) el.removeAttribute("title");
  }
  fill(el, md) {
    el.replaceChildren();
    el.removeAttribute("dir");
    if (!md.trim()) {
      el.classList.add("is-empty");
      return;
    }
    el.classList.remove("is-empty");
    el.classList.toggle("is-plain", !this.host.renderMarkdown);
    const check = CHECK_RE.exec(md);
    if (check) {
      const box = el.appendChild(el.ownerDocument.createElement("input"));
      box.type = "checkbox";
      box.className = "ggt-check task-list-item-checkbox";
      box.checked = check[1] !== " ";
      box.tabIndex = -1;
      const rest = md.slice(3).trim();
      if (!rest) return;
      const span = el.appendChild(el.ownerDocument.createElement("span"));
      span.className = "ggt-check-text";
      if (this.host.renderMarkdown) this.host.renderMarkdown(span, keepBlankLines(rest));
      else span.textContent = rest;
      return;
    }
    if (this.host.renderMarkdown && !isPlainText(md)) this.host.renderMarkdown(el, keepBlankLines(md));
    else {
      el.textContent = md;
      if (this.host.renderMarkdown) el.dir = "auto";
    }
  }
  /** 格子元素；落在合并区域里的取左上角那格 */
  cellEl(p) {
    return this.grid[p.r]?.[p.c] ?? null;
  }
  /** 落在合并区域里的位置换成左上角 */
  canon(p) {
    const m = mergeAt(this.table, p.r, p.c);
    return m ? { r: m.r1, c: m.c1 } : p;
  }
  /** 选区矩形（碰到的合并区域整块算进来）；没选中是 null */
  rangeRect() {
    if (!this.sel) return null;
    const a = this.anchor ?? this.sel;
    let r = { r1: Math.min(a.r, this.sel.r), c1: Math.min(a.c, this.sel.c), r2: Math.max(a.r, this.sel.r), c2: Math.max(a.c, this.sel.c) };
    if (this.lineSel && this.anchor) return r;
    for (let grew = true; grew; ) {
      grew = false;
      for (const m of merges(this.table)) {
        const hit = m.r1 <= r.r2 && r.r1 <= m.r2 && m.c1 <= r.c2 && r.c1 <= m.c2;
        if (hit && (m.r1 < r.r1 || m.c1 < r.c1 || m.r2 > r.r2 || m.c2 > r.c2)) {
          r = { r1: Math.min(r.r1, m.r1), c1: Math.min(r.c1, m.c1), r2: Math.max(r.r2, m.r2), c2: Math.max(r.c2, m.c2) };
          grew = true;
        }
      }
    }
    return r;
  }
  /** 选了不止一格（一整块合并的格子算一格） */
  isMulti() {
    const r = this.rangeRect();
    if (!r || r.r1 === r.r2 && r.c1 === r.c2) return false;
    const m = mergeAt(this.table, r.r1, r.c1);
    return !(m && m.r1 === r.r1 && m.c1 === r.c1 && m.r2 === r.r2 && m.c2 === r.c2);
  }
  /** 选区里的所有格子（含被合并盖住的） */
  rangeCells() {
    const r = this.rangeRect();
    if (!r) return [];
    const out = [];
    for (let i = r.r1; i <= r.r2; i++) for (let j = r.c1; j <= r.c2; j++) out.push({ r: i, c: j });
    return out;
  }
  /** 选区（或选中的一格）在滚动容器里的位置 */
  selBox() {
    const r = this.rangeRect();
    if (!r) return null;
    const top = this.lineBox(r.r1, true);
    const bottom = this.lineBox(r.r2, true);
    const left = this.lineBox(r.c1, false);
    const right = this.lineBox(r.c2, false);
    if (bottom.b > top.a && right.b > left.a) {
      const base2 = this.scroller.getBoundingClientRect();
      const k2 = this.scale();
      return { x: (left.a - base2.left) / k2 + this.scroller.scrollLeft, y: (top.a - base2.top) / k2 + this.scroller.scrollTop, w: (right.b - left.a) / k2, h: (bottom.b - top.a) / k2 };
    }
    let box = null;
    for (const el of Array.from(this.tableEl.querySelectorAll(".ggt-cell"))) {
      const er = Number(el.dataset.r);
      const ec = Number(el.dataset.c);
      if (er < r.r1 || er > r.r2 || ec < r.c1 || ec > r.c2) continue;
      const b = el.getBoundingClientRect();
      box = box ? { l: Math.min(box.l, b.left), t: Math.min(box.t, b.top), r: Math.max(box.r, b.right), b: Math.max(box.b, b.bottom) } : { l: b.left, t: b.top, r: b.right, b: b.bottom };
    }
    if (!box) return null;
    const base = this.scroller.getBoundingClientRect();
    const k = this.scale();
    return { x: (box.l - base.left) / k + this.scroller.scrollLeft, y: (box.t - base.top) / k + this.scroller.scrollTop, w: (box.r - box.l) / k, h: (box.b - box.t) / k };
  }
  /** 填充柄放在选区右下角；没选中、在编辑、只读时不显示 */
  placeFill() {
    const box = !this.editing && !this.host.readonly && !this.folded() ? this.selBox() : null;
    this.fillHandle.classList.toggle("is-shown", !!box);
    if (box) this.fillHandle.setAttribute("style", `left:${box.x + box.w - 4}px;top:${box.y + box.h - 4}px`);
  }
  /**
   * 十字高亮（设置里开，data-cross = select / hover）：把那一格所在的整行、整列铺一层淡色，看大表不串行。
   * 合并格按它占的范围算；那一格自己不铺（它有选中框）
   */
  markCross() {
    for (const el of this.crossed) el.classList.remove("is-cross");
    this.crossed = [];
    const hide = () => {
      for (const b of this.crossBands) b.classList.remove("is-shown");
    };
    const mode = this.root.dataset.cross;
    if (mode !== "select" && mode !== "hover") return hide();
    const p = (mode === "hover" ? this.crossAt : null) ?? this.sel;
    if (!p || !this.grid[p.r]?.[p.c]) return hide();
    const m = mergeAt(this.table, p.r, p.c);
    const r1 = m?.r1 ?? p.r;
    const r2 = m?.r2 ?? p.r;
    const c1 = m?.c1 ?? p.c;
    const c2 = m?.c2 ?? p.c;
    const base = this.scroller.getBoundingClientRect();
    const k = this.scale();
    const tb = this.tableEl.getBoundingClientRect();
    const x = (v) => (v - base.left) / k + this.scroller.scrollLeft;
    const y = (v) => (v - base.top) / k + this.scroller.scrollTop;
    const top = y(this.lineBox(r1, true).a);
    const bottom = y(this.lineBox(r2, true).b);
    const left = x(this.lineBox(c1, false).a);
    const right = x(this.lineBox(c2, false).b);
    const tl = x(tb.left);
    const tr = x(tb.right);
    const tt = y(tb.top);
    const tbm = y(tb.bottom);
    const frozen = this.root.classList.contains("is-freeze");
    let colLeft = left;
    if (frozen) {
      const f = this.grid[0]?.[0];
      const fw = f?.classList.contains("is-frozen") ? f.getBoundingClientRect().width / k : 0;
      colLeft = Math.max(left, this.scroller.scrollLeft + fw);
      const own = this.grid[r1]?.[c1];
      const add = (el) => {
        if (!el || el === own || !el.classList.contains("is-frozen") || this.crossed.includes(el)) return;
        el.classList.add("is-cross");
        this.crossed.push(el);
      };
      for (let r = r1; r <= r2; r++) add(this.grid[r]?.[0]);
      if (c1 === 0) for (let r = 0; r < this.grid.length; r++) add(this.grid[r]?.[0]);
    }
    const rects = [
      [tl, top, left - tl, bottom - top],
      [right, top, tr - right, bottom - top],
      [colLeft, tt, right - colLeft, top - tt],
      [colLeft, bottom, right - colLeft, tbm - bottom]
    ];
    rects.forEach(([bx, by, bw, bh], i) => {
      const band = this.crossBands[i];
      const show = bw > 0.5 && bh > 0.5;
      band.classList.toggle("is-shown", show);
      if (show) band.setAttribute("style", `left:${bx}px;top:${by}px;width:${bw}px;height:${bh}px`);
    });
  }
  markSel() {
    for (const el of this.marked) el.classList.remove("is-selected", "is-sel-head", "is-in-range");
    this.marked = [];
    const multi = this.isMulti();
    this.root.classList.toggle("has-range", multi);
    const r = multi ? this.rangeRect() : null;
    let any = false;
    if (r) {
      const seen = /* @__PURE__ */ new Set();
      for (let i = r.r1; i <= r.r2; i++)
        for (let j = r.c1; j <= r.c2; j++) {
          const el = this.grid[i]?.[j];
          if (!el || seen.has(el)) continue;
          seen.add(el);
          if (Number(el.dataset.r) < r.r1 || Number(el.dataset.c) < r.c1) continue;
          el.classList.add("is-in-range");
          this.marked.push(el);
          any = true;
        }
    }
    const cell = this.sel && this.cellEl(this.sel);
    if (cell && this.sel) {
      cell.classList.add("is-selected");
      this.marked.push(cell);
      const head = headRows(this.table);
      const headCell = this.sel.r >= head ? this.cellEl({ r: head - 1, c: this.sel.c }) : null;
      if (headCell) {
        headCell.classList.add("is-sel-head");
        this.marked.push(headCell);
      }
      if (this.input.el.parentElement !== cell) cell.appendChild(this.input.el);
    } else this.input.detach();
    const sb = any ? this.selBox() : null;
    this.rangeBox.classList.toggle("is-shown", !!sb);
    if (sb) this.rangeBox.setAttribute("style", `left:${sb.x}px;top:${sb.y}px;width:${sb.w}px;height:${sb.h}px`);
    this.rangeBox.classList.toggle("is-under-frozen", !!sb && this.root.classList.contains("is-freeze") && (this.rangeRect()?.c1 ?? 0) > 0);
    this.markCross();
    if (cell) this.placeFill();
    this.placeHandles();
    this.placeTouchResize();
  }
  // ---------- 选中、编辑 ----------
  /** extend：保留选区的另一头（Shift、拖选），否则只选这一格 */
  setSel(p, focus, extend = false) {
    if (this.editing) this.commit();
    this.lineSel = false;
    if (extend && this.sel && p) this.anchor = this.anchor ?? this.sel;
    else this.anchor = null;
    this.sel = p && this.canon(p);
    if (p) markActive(this);
    if (this.anchor && this.sel && this.anchor.r === this.sel.r && this.anchor.c === this.sel.c) this.anchor = null;
    this.markSel();
    if (p && focus && !this.host.readonly) {
      this.input.reset("");
      this.input.focus();
      this.cellEl(p)?.scrollIntoView({ block: "nearest", inline: "nearest" });
      this.host.onFocus?.();
    }
  }
  /** 进入编辑：keep 为 true 在原内容上改，否则从输入框里已经打进去的字开始 */
  startEdit(keep) {
    if (!this.sel || this.host.readonly) return;
    const cell = this.cellEl(this.sel);
    if (!cell) return;
    if (isFxCell(this.table, this.sel.r, this.sel.c)) {
      this.input.reset("");
      if (Date.now() - this.fxNoticeAt > 1500) {
        this.fxNoticeAt = Date.now();
        this.host.notice?.(t("fxLocked"));
      }
      return;
    }
    if (this.anchor) {
      this.anchor = null;
      this.markSel();
    }
    this.editing = true;
    this.typed = false;
    cell.classList.add("is-editing");
    this.fillHandle.classList.remove("is-shown");
    this.showMobileBar();
    if (keep) {
      this.input.reset(shownText(this.table, this.sel.r, this.sel.c));
      const end = this.input.value.length;
      this.input.setSelectionRange(end, end);
    }
    if (!this.input.hasFocus()) this.input.focus();
    this.autosize();
    this.updateSuggest();
    this.host.onFocus?.();
  }
  /**
   * 编辑框跟着内容长高：格子里的内容区换成编辑框里的原文（看不见），编辑框盖在上面，
   * 格子按这段原文的高度排版，不用量高度、设内联样式
   */
  autosize() {
    const content = this.sel && this.cellEl(this.sel)?.querySelector(".ggt-content");
    if (!content) return;
    content.classList.remove("is-empty");
    content.textContent = this.input.sizingText() + "\u200B";
    this.refreshCross();
  }
  refreshCross() {
    if (this.crossBands.some((b) => b.classList.contains("is-shown"))) this.markCross();
  }
  /** 编辑结束：内容区换回渲染好的样子 */
  restoreContent(p) {
    const content = this.cellEl(p)?.querySelector(".ggt-content");
    if (content) this.fillCell(content, p.r, p.c, shownText(this.table, p.r, p.c));
    this.refreshCross();
  }
  /** 编辑完：内容变了就交给宿主 */
  commit() {
    this.closeSuggest();
    this.hideFormatBar();
    this.hideMobileBar();
    if (!this.editing || !this.sel) return;
    const p = this.sel;
    this.editing = false;
    this.cellEl(p)?.classList.remove("is-editing");
    const text = this.smartDate(p, this.input.value.replace(/\r\n?/g, "\n").replace(/^\s+|\s+$/g, ""));
    this.input.reset("");
    const edited = editCell(this.table, p.r, p.c, text);
    const next = edited === this.table ? edited : normalize(edited);
    const pending = this.pending;
    this.pending = null;
    if (next !== this.table) {
      const prev = this.table;
      this.table = next;
      if (hasTotal(next) || next.meta.opts?.some(Boolean) || next.meta.fx?.some(Boolean)) this.render();
      else this.restoreContent(p);
      this.host.onChange(next, prev);
    } else if (pending) {
      this.table = pending;
      this.render();
    } else this.restoreContent(p);
  }
  /**
   * 日期列里改过的一格：整格是 1/5、2026年1月5日、20260105、今天 这类写法时，换成这一列的写法（日记链接列写成 [[日记]]）。
   * 这次没打过字的不动：以前存的「今天」进编辑再按 Enter，不会被换成那一天
   */
  smartDate(p, text) {
    const ty = colTypeOf(this.table, p.c);
    if (ty?.t !== "date" || this.host.smartDate?.() === false || !text || !this.typed) return text;
    if (p.r < headRows(this.table) || hasTotal(this.table) && p.r === rowCount(this.table) - 1 || formulaOf(this.table, p.c)) return text;
    const now = /* @__PURE__ */ new Date();
    const v = parseLooseDate(text, { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() });
    if (!v) return text;
    const daily = ty.f === "link" ? this.dailyNote() : null;
    return writeDate(v, ty.f, daily ? (x) => daily.name(x) : void 0);
  }
  cancel() {
    this.closeSuggest();
    this.hideFormatBar();
    this.hideMobileBar();
    if (!this.editing || !this.sel) return;
    this.editing = false;
    this.cellEl(this.sel)?.classList.remove("is-editing");
    this.input.reset("");
    if (this.pending) {
      this.table = this.pending;
      this.pending = null;
      this.render();
    } else this.restoreContent(this.sel);
  }
  /** 换一张表，选区原样留着（批量设底色、对齐之后可以接着操作） */
  applyKeepRange(next) {
    const anchor = this.anchor;
    this.apply(next, this.sel ?? void 0);
    if (anchor) {
      this.anchor = anchor;
      this.markSel();
    }
  }
  /** 换一张表并交给宿主，选中挪到 sel */
  apply(nextRaw, sel) {
    if (this.editing) this.commit();
    const next = nextRaw === this.table ? nextRaw : normalize(nextRaw);
    if (next === this.table) return;
    const prev = this.table;
    this.table = next;
    if (sel) this.sel = sel;
    this.render();
    this.host.onChange(next, prev);
    if (sel) this.setSel(this.sel, true);
  }
  /** 方向键、Tab、Enter 走格；extend 是 Shift+方向键扩大选区。从合并的格子出发时从它的边上走出去 */
  move(dr, dc, wrap = false, extend = false) {
    if (!this.sel) return;
    const rows = this.shownRows();
    const cols = colCount(this.table);
    const m = mergeAt(this.table, this.sel.r, this.sel.c);
    let { r, c } = this.sel;
    if (m) {
      if (dr > 0) r = m.r2;
      if (dc > 0) c = m.c2;
    }
    if (extend) {
      const nr = Math.max(0, Math.min(rows - 1, r + dr));
      const nc = Math.max(0, Math.min(cols - 1, c + dc));
      this.setSel({ r: nr, c: nc }, true, true);
      return;
    }
    c += dc;
    if (wrap && c >= cols) {
      c = 0;
      r++;
    } else if (wrap && c < 0) {
      c = cols - 1;
      r--;
    }
    r += dr;
    if (r < 0) {
      this.setSel(null, false);
      this.host.onLeave?.("above");
      return;
    }
    if (r >= rows) {
      if (wrap && !this.folded()) {
        this.apply(insertRow(this.table, rows), { r: rows, c: 0 });
        return;
      }
      this.setSel(null, false);
      this.host.onLeave?.("below");
      return;
    }
    this.setSel({ r, c: Math.max(0, Math.min(cols - 1, c)) }, true);
  }
  // ---------- 事件 ----------
  on(el, type, fn, opts) {
    el.addEventListener(type, fn, opts);
    this.cleanups.push(() => el.removeEventListener(type, fn, opts));
  }
  /** 输入框的事件交给编辑器（换输入框以后也要重新接） */
  bindInput() {
    const doc = this.root.ownerDocument;
    this.input.bind({
      keydown: (ev) => this.onKey(ev),
      copy: (ev) => this.onCopy(ev, false),
      cut: (ev) => this.onCopy(ev, true),
      paste: (ev) => this.onPaste(ev),
      input: () => {
        if (!this.editing) this.startEdit(false);
        else this.autosize();
        this.typed = true;
        this.updateSuggest();
        this.updateFormatBar();
      },
      // 编辑时选中文字：浮出格式栏
      select: () => this.updateFormatBar(),
      compositionstart: () => {
        if (!this.editing) this.startEdit(false);
      },
      blur: () => {
        window.setTimeout(() => {
          if (this.destroyed || this.input.hasFocus()) return;
          if (this.popover && this.popover.contains(doc.activeElement)) return;
          if (this.editing) this.commit();
        }, 0);
      }
    });
  }
  /** 设置改了「所见即所得」：换一种输入框（正在编辑的这一格先保存） */
  refreshInput() {
    const rich = !!this.host.richEdit?.();
    if (rich === this.input instanceof CodeMirrorInput) return;
    const hadFocus = this.input.hasFocus();
    if (this.editing) this.commit();
    this.input.destroy();
    this.input = rich ? new CodeMirrorInput(this.root.ownerDocument) : new TextareaInput(this.root.ownerDocument);
    this.bindInput();
    this.markSel();
    if (hadFocus && this.sel) this.input.focus();
  }
  bind() {
    const doc = this.root.ownerDocument;
    this.on(this.tableEl, "pointerdown", (ev) => {
      const target = ev.target;
      if (this.input.contains(target)) return;
      const cell = target.closest(".ggt-cell");
      if (!cell || this.host.readonly) return;
      if (target.closest("a, .tag, input[type=checkbox]")) return;
      const p = { r: Number(cell.dataset.r), c: Number(cell.dataset.c) };
      if (ev.pointerType === "touch") {
        this.touched = true;
        return this.touchStart(ev, p);
      }
      this.host.dismissMenus?.();
      if (ev.button === 1) return;
      ev.preventDefault();
      if (ev.button !== 0) return;
      if (ev.shiftKey && this.sel) {
        this.setSel(p, true, true);
        return;
      }
      const same = this.sel && this.sel.r === p.r && this.sel.c === p.c;
      if (!same || !this.editing) this.setSel(p, true);
      this.dragSelect(ev);
    });
    this.on(this.tableEl, "click", (ev) => {
      const link = ev.target.closest("a.internal-link");
      if (!link || !link.closest(".ggt-cell") || !this.host.openLink) return;
      ev.preventDefault();
      ev.stopPropagation();
      this.host.openLink(link.dataset.href ?? link.getAttribute("href") ?? "", ev);
    });
    this.on(this.tableEl, "auxclick", (ev) => {
      const link = ev.target.closest("a.internal-link");
      if (!link || ev.button !== 1 || !this.host.openLink) return;
      ev.preventDefault();
      this.host.openLink(link.dataset.href ?? link.getAttribute("href") ?? "", ev);
    });
    this.on(this.tableEl, "mouseover", (ev) => {
      const link = ev.target.closest("a.internal-link");
      const href = link?.dataset.href ?? link?.getAttribute("href");
      if (link && href) this.host.hoverLink?.(ev, href, link);
    });
    this.on(this.tableEl, "click", (ev) => {
      const box = ev.target.closest("input.ggt-check");
      const cell = box?.closest(".ggt-cell");
      if (!box || !cell) return;
      ev.preventDefault();
      if (this.host.readonly) return;
      const p = { r: Number(cell.dataset.r), c: Number(cell.dataset.c) };
      this.apply(toggleCheck(this.table, p.r, p.c), p);
    });
    this.on(this.tableEl, "dblclick", (ev) => {
      const target = ev.target;
      const img = !this.editing && target.closest(".ggt-cell") ? target.closest(".ggt-content img") : null;
      if (img) {
        ev.preventDefault();
        ev.stopPropagation();
        this.openLightbox(img);
        return;
      }
      if (target.closest(".ggt-cell") && !this.editing) this.startEdit(true);
    });
    this.on(this.tableEl, "contextmenu", (ev) => {
      const target = ev.target;
      const cellEl = target.closest(".ggt-cell");
      if (!cellEl || this.editing && this.input.contains(target)) return;
      const p = { r: Number(cellEl.dataset.r), c: Number(cellEl.dataset.c) };
      const img = target.closest(".ggt-content img");
      if (img && this.host.imageMenu) {
        ev.preventDefault();
        ev.stopPropagation();
        const link = img.closest(".internal-embed")?.getAttribute("src") ?? null;
        this.host.imageMenu(ev, img, link, link && !this.host.readonly ? () => this.removeEmbed(p, link) : null);
        return;
      }
      const a = target.closest(".ggt-content a.internal-link");
      const href = a?.dataset.href ?? a?.getAttribute("href");
      if (a && href && this.host.linkMenu) {
        ev.preventDefault();
        ev.stopPropagation();
        this.host.linkMenu(ev, href);
      }
    }, { capture: true });
    this.on(this.tableEl, "contextmenu", (ev) => {
      const cell = ev.target.closest(".ggt-cell");
      if (!cell || this.host.readonly || this.editing && this.input.contains(ev.target)) return;
      ev.preventDefault();
      ev.stopPropagation();
      if (performance.now() - this.longPressAt < 1e3) return;
      const p = { r: Number(cell.dataset.r), c: Number(cell.dataset.c) };
      const r = this.rangeRect();
      const inRange = this.isMulti() && r && p.r >= r.r1 && p.r <= r.r2 && p.c >= r.c1 && p.c <= r.c2;
      if (!inRange) this.setSel(p, true);
      else this.input.focus();
      const items = this.cellMenu(inRange && this.sel ? this.sel : p);
      this.openMenu(items, ev.clientX, ev.clientY);
      const pop = this.popover;
      this.host.eventMenuItems?.(ev, (extra) => {
        if (!extra.length || this.popover !== pop) return;
        this.openMenu([...items, { separator: true }, ...extra], ev.clientX, ev.clientY);
      });
    });
    this.on(this.resizeBar, "pointerdown", (ev) => this.startResize(ev, this.resizeBar));
    this.on(this.fillHandle, "pointerdown", (ev) => this.fillDrag(ev));
    this.on(this.root, "ggt-restyle", () => {
      this.refreshInput();
      this.applyLook();
      this.fitCols();
      this.markCross();
    });
    this.on(this.tableEl, "pointermove", (ev) => {
      if (this.root.dataset.cross !== "hover") return;
      const cell = ev.target.closest(".ggt-cell");
      const pos = cell ? { r: Number(cell.dataset.r), c: Number(cell.dataset.c) } : null;
      if (pos?.r === this.crossAt?.r && pos?.c === this.crossAt?.c) return;
      this.crossAt = pos;
      this.markCross();
    });
    this.on(this.tableEl, "pointerleave", () => {
      if (!this.crossAt) return;
      this.crossAt = null;
      this.markCross();
    });
    this.on(this.cornerBtn, "pointerdown", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    this.on(this.cornerBtn, "click", (ev) => {
      ev.preventDefault();
      if (this.host.readonly) return;
      if (this.editing) this.commit();
      const rect = this.cornerBtn.getBoundingClientRect();
      this.openMenu(this.tableMenu(), rect.left, rect.bottom + 4);
    });
    this.on(this.resizeBar, "dblclick", (ev) => {
      ev.preventDefault();
      const c = Number(this.resizeBar.dataset.c);
      if (!Number.isNaN(c)) this.apply(setWidth(this.table, c, null));
    });
    this.on(this.root, "pointermove", (ev) => {
      if (!this.resize && ev.pointerType !== "touch" && !this.host.readonly) this.placeResizeBar(ev.clientX, ev.clientY);
      if (this.resize || ev.pointerType === "touch" || this.root.classList.contains("is-dragging")) return;
      this.touched = false;
      if (performance.now() - this.scrolledAt < 150) return;
      const cell = ev.target.closest(".ggt-cell");
      if (!cell || !this.tableEl.contains(cell)) return;
      const p = { r: Number(cell.dataset.r), c: Number(cell.dataset.c) };
      if (!this.hover || this.hover.r !== p.r || this.hover.c !== p.c) {
        this.hover = p;
        this.placeHandles();
      }
    });
    this.on(this.root, "pointerleave", () => {
      if (!this.resize && !this.resizeBar.classList.contains("is-touch")) this.resizeBar.classList.remove("is-shown");
      if (this.popover) return;
      this.hover = null;
      this.placeHandles();
    });
    this.on(this.scroller, "scroll", () => this.placeHandles(), { passive: true });
    this.bindInput();
    this.cleanups.push(() => this.input.destroy());
    this.on(doc, "scroll", () => this.formatBar && this.updateFormatBar(), { capture: true, passive: true });
    this.on(doc, "pointerdown", (ev) => {
      const target = ev.target;
      if (this.formatBar?.contains(target)) return;
      if (this.mobileBar?.contains(target)) return;
      if (this.suggest?.el.contains(target) || this.cal?.el.contains(target)) return;
      if (this.popover && !this.popover.contains(target)) this.closePopover();
      if (this.sel && !this.root.contains(target) && !(this.popover && this.popover.contains(target))) {
        if (this.editing) this.commit();
        this.sel = null;
        this.markSel();
      }
    }, { capture: true });
  }
  onKey(ev) {
    if (ev.isComposing || ev.key === "Process") return;
    const mod = ev.metaKey || ev.ctrlKey;
    if (this.editing) {
      if (this.suggest && this.onSuggestKey(ev)) {
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      if (this.formatKey(ev)) {
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      const arrow = ARROW_EDGE[ev.key];
      if (arrow && !ev.shiftKey && !ev.altKey && !mod && this.input.atEdge(arrow.edge)) {
        ev.preventDefault();
        this.commit();
        this.move(arrow.dr, arrow.dc);
      } else if (ev.key === "Enter" && !ev.shiftKey && !ev.altKey && !mod) {
        ev.preventDefault();
        this.commit();
        this.move(1, 0);
      } else if (ev.key === "Tab") {
        ev.preventDefault();
        this.commit();
        this.move(0, ev.shiftKey ? -1 : 1, true);
      } else if (ev.key === "Escape") {
        ev.preventDefault();
        ev.stopPropagation();
        this.commit();
      }
      ev.stopPropagation();
      return;
    }
    const key = ev.key;
    const stop = () => {
      ev.preventDefault();
      ev.stopPropagation();
    };
    if (mod && key.toLowerCase() === "z") {
      stop();
      if (ev.shiftKey) this.host.redo?.();
      else this.host.undo?.();
      return;
    }
    if (mod && key.toLowerCase() === "y") {
      stop();
      this.host.redo?.();
      return;
    }
    if (mod || ev.altKey) {
      ev.stopPropagation();
      return;
    }
    switch (key) {
      case "ArrowUp":
        stop();
        return this.move(-1, 0, false, ev.shiftKey);
      case "ArrowDown":
        stop();
        return this.move(1, 0, false, ev.shiftKey);
      case "ArrowLeft":
        stop();
        return this.move(0, -1, false, ev.shiftKey);
      case "ArrowRight":
        stop();
        return this.move(0, 1, false, ev.shiftKey);
      case "Tab":
        stop();
        return this.move(0, ev.shiftKey ? -1 : 1, true);
      case " ":
        if (this.sel && CHECK_RE.test(this.table.cells[this.sel.r][this.sel.c])) {
          stop();
          this.apply(toggleCheck(this.table, this.sel.r, this.sel.c), this.sel);
          return;
        }
        stop();
        return this.startEdit(true);
      case "Enter":
      case "F2":
        stop();
        return this.startEdit(true);
      case "Backspace":
      case "Delete":
        stop();
        if (this.sel) {
          const keep = this.anchor;
          this.apply(clearCells(this.table, this.rangeCells()), this.sel);
          if (keep) {
            this.anchor = keep;
            this.markSel();
          }
        }
        return;
      case "Escape":
        stop();
        if (this.popover) {
          this.closePopover();
          return;
        }
        if (this.isMulti() && this.sel) {
          this.setSel(this.sel, true);
          return;
        }
        this.setSel(null, false);
        this.host.onLeave?.("escape");
        return;
    }
    ev.stopPropagation();
  }
  /** 按住拖过几个格子：选中一片 */
  dragSelect(ev) {
    const doc = this.root.ownerDocument;
    const move = (e) => {
      if (!(e.buttons & 1)) return up();
      if (this.editing) return;
      const el = doc.elementFromPoint(e.clientX, e.clientY)?.closest(".ggt-cell");
      if (!el || !this.tableEl.contains(el)) return;
      const p = { r: Number(el.dataset.r), c: Number(el.dataset.c) };
      if (this.sel && (p.r !== this.sel.r || p.c !== this.sel.c)) this.setSel(p, true, true);
    };
    const up = () => {
      doc.removeEventListener("pointermove", move, true);
      doc.removeEventListener("pointerup", up, true);
      doc.removeEventListener("pointercancel", up, true);
    };
    doc.addEventListener("pointermove", move, true);
    doc.addEventListener("pointerup", up, true);
    doc.addEventListener("pointercancel", up, true);
  }
  // ---------- 编辑时的格式和补全 ----------
  /**
   * 加粗 ⌘B、斜体 ⌘I、删除线 ⌘⇧X、高亮 ⌘⇧H、链接 ⌘K。编辑中改选中的字；只选中格子时给整格加 / 去掉。
   * 处理了返回 true（Obsidian 那边的快捷键作用域也调这里，免得它改到正文）
   */
  formatKey(ev) {
    const mod = ev.metaKey || ev.ctrlKey;
    if (!mod || ev.altKey || !this.sel || this.host.readonly) return false;
    const k = ev.key.toLowerCase();
    const mark = !ev.shiftKey && k === "b" ? "**" : !ev.shiftKey && k === "i" ? "*" : ev.shiftKey && k === "x" ? "~~" : ev.shiftKey && k === "h" ? "==" : null;
    const link = !ev.shiftKey && k === "k";
    if (!ev.shiftKey && k === "u" && this.editing) {
      this.applyFormat({ kind: "underline" });
      return true;
    }
    if (!mark && !link) return false;
    return this.formatMark(mark);
  }
  /** 按 Obsidian 命令做格式（用户把加粗、斜体这些命令改成了别的快捷键时，keys.ts 按命令调这里） */
  formatCommand(kind) {
    if (!this.sel || this.host.readonly) return false;
    const marks = { bold: "**", italic: "*", strike: "~~", highlight: "==" };
    return this.formatMark(kind === "link" ? null : marks[kind]);
  }
  /** mark 是 null 时插链接 */
  formatMark(mark) {
    if (!this.sel) return false;
    if (this.editing) {
      const kinds = { "**": { kind: "bold" }, "*": { kind: "italic" }, "~~": { kind: "strike" }, "==": { kind: "highlight" } };
      if (mark && this.input instanceof CodeMirrorInput && this.input.selectionStart !== this.input.selectionEnd) this.applyFormat(kinds[mark]);
      else if (mark) this.wrapSelection(mark);
      else this.insertLink();
      return true;
    }
    if (!mark) return true;
    const cells = (this.rangeCells().length ? this.rangeCells() : [this.sel]).filter((p) => !isCovered(this.table, p.r, p.c) && this.table.cells[p.r][p.c].trim());
    const wrapped = (v) => v.length >= mark.length * 2 && v.startsWith(mark) && v.endsWith(mark);
    const all = cells.length > 0 && cells.every((p) => wrapped(this.table.cells[p.r][p.c].trim()));
    let next = this.table;
    for (const p of cells) {
      const v = this.table.cells[p.r][p.c].trim();
      next = setCell(next, p.r, p.c, all ? v.slice(mark.length, -mark.length) : `${mark}${v}${mark}`);
    }
    this.applyKeepRange(next);
    return true;
  }
  /** 选中的文字两边加上 / 去掉标记（** * ~~ ==）；没选文字时插一对，光标放中间 */
  wrapSelection(mark) {
    const el = this.input;
    const { selectionStart: a, selectionEnd: b, value: v } = el;
    const before = v.slice(0, a);
    const after = v.slice(b);
    if (before.endsWith(mark) && after.startsWith(mark)) {
      el.value = before.slice(0, -mark.length) + v.slice(a, b) + after.slice(mark.length);
      el.setSelectionRange(a - mark.length, b - mark.length);
    } else {
      el.value = before + mark + v.slice(a, b) + mark + after;
      el.setSelectionRange(a + mark.length, b + mark.length);
    }
    this.autosize();
  }
  /** 编辑中选中了文字、宿主给了颜色：在这一格上方显示格式栏；否则收起 */
  updateFormatBar() {
    const el = this.input;
    const colors = this.editing && !this.host.readonly && this.sel && el.selectionStart !== el.selectionEnd ? this.host.formatColors?.() : null;
    const cell = colors && this.sel ? this.cellEl(this.sel) : null;
    if (!colors || !cell) return this.hideFormatBar();
    const key = JSON.stringify(colors);
    if (!this.formatBar || this.formatBarKey !== key) {
      this.hideFormatBar();
      this.formatBar = this.buildFormatBar(colors);
      this.formatBarKey = key;
    }
    const bar = this.formatBar;
    const win = this.root.ownerDocument.defaultView ?? window;
    const r = cell.getBoundingClientRect();
    const w = bar.offsetWidth;
    const h = bar.offsetHeight;
    const left = Math.max(8, Math.min(win.innerWidth - w - 8, r.left + r.width / 2 - w / 2));
    const top = r.top - h - 6 >= 8 ? r.top - h - 6 : r.bottom + 6;
    bar.style.left = `${Math.round(left)}px`;
    bar.style.top = `${Math.round(top)}px`;
  }
  hideFormatBar() {
    this.formatBar?.remove();
    this.formatBar = null;
  }
  /** 给编辑框里选中的字加格式（和脑图节点的格式栏同一套写法：**、*、~~、<u>、==、<span style>、<mark style>） */
  applyFormat(fmt2) {
    const el = this.input;
    const { from, to } = el.visibleSelection();
    if (from === to) return;
    const r = applyInlineFormat(el.value, from, to, fmt2);
    if (r.text !== el.value) {
      el.value = r.text;
      el.setSelectionRange(r.start, r.end);
      this.autosize();
    }
    this.updateFormatBar();
  }
  buildFormatBar(colors) {
    const doc = this.root.ownerDocument;
    const bar = doc.createElement("div");
    bar.className = "ggt-format-bar";
    bar.addEventListener("pointerdown", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    bar.addEventListener("mousedown", (ev) => ev.preventDefault());
    const btn = (cls, title, fmt2, fill) => {
      const b = doc.createElement("button");
      b.type = "button";
      b.className = `ggt-format-btn ${cls}`;
      b.setAttribute("aria-label", title);
      b.title = title;
      fill(b);
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        this.applyFormat(fmt2);
      });
      bar.append(b);
    };
    const sep = () => {
      const s = doc.createElement("span");
      s.className = "ggt-format-sep";
      bar.append(s);
    };
    const iconBtn = (name, fallback) => (b) => {
      if (this.host.setIcon) this.host.setIcon(b, name);
      else b.textContent = fallback;
    };
    btn("is-bold", t("fmtBold"), { kind: "bold" }, (b) => b.textContent = "B");
    btn("is-italic", t("fmtItalic"), { kind: "italic" }, (b) => b.textContent = "I");
    btn("is-strike", t("fmtStrike"), { kind: "strike" }, (b) => b.textContent = "S");
    btn("is-underline", t("fmtUnderline"), { kind: "underline" }, (b) => b.textContent = "U");
    sep();
    const local = {};
    const mem = this.host.colorMemory?.() ?? {
      last: (k) => local[k] ?? null,
      recent: () => [],
      remember: (k, c) => local[k] = c
    };
    const common = (kind) => kind === "text" ? colors.text : colors.highlight;
    const current = (kind) => mem.last(kind) ?? common(kind)[0] ?? (kind === "bg" ? THEME_HIGHLIGHT : null);
    const tip = (el, text) => el.title = text;
    let open = null;
    const closePalette = () => {
      open?.el.remove();
      open = null;
    };
    const split = (kind) => {
      const el = createColorSplit({
        doc,
        cls: kind === "text" ? "is-text-color" : "is-highlighter",
        title: kind === "text" ? t("fmtTextColor") : t("fmtHighlightColor"),
        caretTitle: kind === "text" ? t("palTextMore") : t("palBgMore"),
        face: (f) => {
          if (kind === "text") f.textContent = "A";
          else iconBtn("highlighter", "H")(f);
        },
        current: () => current(kind),
        paintBar: (b, c) => paintColor(b, c, kind),
        tip,
        onApply: () => {
          const c = current(kind);
          if (!c) return;
          closePalette();
          this.applyFormat(colorFormat(kind, c));
        },
        onOpen: (anchor) => {
          if (open?.kind === kind) return closePalette();
          closePalette();
          const pick = (c, apply = (f) => this.applyFormat(f)) => {
            closePalette();
            if (c !== null) mem.remember(kind, c);
            refreshColorSplit(anchor);
            apply(colorFormat(kind, c));
          };
          const pal = createPalette(doc, {
            text: { common: t("palCommon"), recent: t("palRecent"), alpha: t("palAlpha"), custom: t("palCustom") },
            common: common(kind),
            recent: mem.recent(kind),
            alpha: true,
            defaultAlpha: kind === "text" ? 100 : 60,
            paint: (b, c) => paintColor(b, c, kind),
            label: (c) => c === THEME_HIGHLIGHT ? t("fmtHighlight") : c,
            noneLabel: kind === "text" ? t("palNoText") : t("palNoHighlight"),
            extras: kind === "bg" && !common("bg").includes(THEME_HIGHLIGHT) ? [{ value: THEME_HIGHLIGHT, label: t("fmtHighlight"), paint: (b) => paintColor(b, THEME_HIGHLIGHT, "bg") }] : [],
            onPick: (c) => pick(c),
            onCustom: () => {
              const apply = this.customColorTarget();
              return (c) => pick(c, apply);
            },
            tip
          });
          pal.classList.add("ggt-format-palette");
          bar.append(pal);
          pal.style.left = `${Math.max(0, anchor.offsetLeft)}px`;
          open = { kind, el: pal };
        }
      });
      bar.append(el);
    };
    split("text");
    split("bg");
    sep();
    btn("is-clear", t("fmtClear"), { kind: "clear" }, iconBtn("eraser", "\u232B"));
    doc.body.append(bar);
    return bar;
  }
  /**
   * 色板里点「自定义…」：系统取色器会拿走焦点，格子可能已经保存退出编辑了。先记下是哪一格、选的哪几个字，
   * 选好颜色后还在编辑这一格就照常上格式，否则直接改这一格的源码
   */
  customColorTarget() {
    const pos = this.sel ? { ...this.sel } : null;
    const { from, to } = this.input.visibleSelection();
    return (fmt2) => {
      if (!pos || from === to) return;
      if (this.editing && this.sel && this.sel.r === pos.r && this.sel.c === pos.c) {
        this.input.focus();
        this.input.setSelectionRange(from, to);
        this.applyFormat(fmt2);
        return;
      }
      const cur = this.table.cells[pos.r]?.[pos.c];
      if (cur === void 0) return;
      const r = applyInlineFormat(cur, from, to, fmt2);
      if (r.text !== cur) this.apply(setCell(this.table, pos.r, pos.c, r.text), pos);
    };
  }
  /**
   * 手机、平板上编辑格子时，键盘上方的一排按钮：完成、撤销重做、加粗斜体删除线高亮、双链、勾选框、格内换行、上一格 / 下一格。
   * Obsidian 自己的手机工具条在焦点离开笔记编辑器时会收起来（它的按钮也只管笔记正文），所以表格自己出一条
   */
  showMobileBar() {
    const doc = this.root.ownerDocument;
    if (this.mobileBar || this.host.readonly || !doc.body.classList.contains("is-mobile")) return;
    const win = doc.defaultView ?? window;
    const bar = doc.createElement("div");
    bar.className = "ggt-mobile-bar";
    bar.addEventListener("pointerdown", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    bar.addEventListener("mousedown", (ev) => ev.preventDefault());
    const btn = (icon, fallback, title, run) => {
      const b = doc.createElement("button");
      b.type = "button";
      b.className = "ggt-mobile-btn";
      b.setAttribute("aria-label", title);
      if (this.host.setIcon) this.host.setIcon(b, icon);
      else b.textContent = fallback;
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        run();
      });
      bar.append(b);
    };
    const sep = () => {
      const s = doc.createElement("span");
      s.className = "ggt-mobile-sep";
      bar.append(s);
    };
    btn("check", "\u2713", t("mbDone"), () => this.commit());
    btn("undo-2", "\u21B6", t("mbUndo"), () => this.input.undo());
    btn("redo-2", "\u21B7", t("mbRedo"), () => this.input.redo());
    sep();
    btn("bold", "B", t("fmtBold"), () => this.formatOrInsert({ kind: "bold" }, "**", "**"));
    btn("italic", "I", t("fmtItalic"), () => this.formatOrInsert({ kind: "italic" }, "*", "*"));
    btn("strikethrough", "S", t("fmtStrike"), () => this.formatOrInsert({ kind: "strike" }, "~~", "~~"));
    btn("highlighter", "H", t("fmtHighlight"), () => this.formatOrInsert({ kind: "highlight" }, "==", "=="));
    sep();
    btn("link-2", "[[", t("mbLink"), () => this.insertAround("[[", "]]"));
    btn("square-check", "\u2611", t("mbCheckbox"), () => this.toggleEditCheckbox());
    btn("corner-down-left", "\u21B5", t("mbNewline"), () => this.insertAround("\n", ""));
    sep();
    btn("arrow-left", "\u2190", t("mbPrevCell"), () => this.editNext(-1));
    btn("arrow-right", "\u2192", t("mbNextCell"), () => this.editNext(1));
    doc.body.append(bar);
    const vv = win.visualViewport;
    const place = () => {
      const bottom = vv ? Math.max(0, win.innerHeight - (vv.offsetTop + vv.height)) : 0;
      bar.style.setProperty("--ggt-kb", `${Math.round(bottom)}px`);
    };
    place();
    vv?.addEventListener("resize", place);
    vv?.addEventListener("scroll", place);
    this.mobileBarCleanup = () => {
      vv?.removeEventListener("resize", place);
      vv?.removeEventListener("scroll", place);
    };
    this.mobileBar = bar;
  }
  hideMobileBar() {
    this.mobileBarCleanup?.();
    this.mobileBarCleanup = null;
    this.mobileBar?.remove();
    this.mobileBar = null;
  }
  /** 选了字就给选中的字上格式；没选就插一对标记、光标放中间，接着打的字就是这个格式 */
  formatOrInsert(fmt2, open, close) {
    const { from, to } = this.input.visibleSelection();
    if (from !== to) this.applyFormat(fmt2);
    else this.insertAround(open, close);
  }
  /** 在光标（选区）两边插入 open、close，光标留在中间；插 [[ ]] 时接着弹出笔记补全 */
  insertAround(open, close) {
    if (!this.editing) return;
    const el = this.input;
    const a = el.selectionStart;
    const b = el.selectionEnd;
    const v = el.value;
    el.value = v.slice(0, a) + open + v.slice(a, b) + close + v.slice(b);
    el.setSelectionRange(a + open.length, b + open.length);
    this.autosize();
    this.updateSuggest();
  }
  /** 格子开头加上 / 去掉勾选框 */
  toggleEditCheckbox() {
    if (!this.editing) return;
    const el = this.input;
    const v = el.value;
    const next = CHECK_RE.test(v) ? v.replace(CHECK_RE, "").trimStart() : `[ ] ${v}`;
    el.value = next;
    el.setSelectionRange(next.length, next.length);
    this.autosize();
  }
  /** 保存这一格，接着编辑上一格 / 下一格（行尾接下一行开头，和 Tab 一样） */
  editNext(dir) {
    if (!this.editing) return;
    this.commit();
    this.move(0, dir, true);
    this.startEdit(true);
  }
  /** ⌘K：选中的文字变成 [文字]()，光标放进括号里填网址 */
  insertLink() {
    const el = this.input;
    const { selectionStart: a, selectionEnd: b, value: v } = el;
    const text = v.slice(a, b);
    el.value = `${v.slice(0, a)}[${text}]()${v.slice(b)}`;
    const pos = a + text.length + 3;
    el.setSelectionRange(pos, pos);
    this.autosize();
  }
  /** 看光标前面是不是在输 [[ 链接或 # 标签，是就弹出补全 */
  updateSuggest() {
    if (!this.editing) return this.closeSuggest();
    const el = this.input;
    if (el.composing) return;
    {
      const v = el.value;
      const caret = el.selectionStart;
      let text = v;
      const cn = text.slice(0, caret).lastIndexOf("\u3010\u3010");
      if (cn >= 0 && text.slice(0, caret).lastIndexOf("[[") < cn) text = text.slice(0, cn) + "[[" + text.slice(cn + 2);
      if (text.slice(0, caret).endsWith("\u3011\u3011")) text = text.slice(0, caret - 2) + "]]" + text.slice(caret);
      if (text !== v) {
        el.value = text;
        el.setSelectionRange(caret, caret);
      }
    }
    const before = el.value.slice(0, el.selectionStart);
    const link = /\[\[([^[\]|#^\n]*)$/.exec(before);
    const tag = /(?:^|\s)#([^\s#[\]|,.;:!?，。；：！？]*)$/.exec(before);
    let kind = null;
    let query = "";
    let start = 0;
    if (link && this.host.suggestLinks) {
      kind = "link";
      query = link[1];
      start = before.length - link[1].length;
    } else if (tag && this.host.suggestTags) {
      kind = "tag";
      query = tag[1];
      start = before.length - tag[1].length;
    }
    const dataRow = !!this.sel && this.sel.r >= headRows(this.table) && !(hasTotal(this.table) && this.sel.r === rowCount(this.table) - 1);
    if (!kind && dataRow && this.sel && colTypeOf(this.table, this.sel.c)?.t === "date") {
      this.closeSuggestList();
      this.showCalendar();
      return;
    }
    this.closeCalendar();
    const opts = dataRow && this.sel ? this.table.meta.opts?.[this.sel.c] : null;
    let multi;
    if (!kind && opts && this.sel && colTypeOf(this.table, this.sel.c)?.t === "multi") {
      const caret = el.selectionStart;
      const v = el.value;
      const segStart = Math.max(v.lastIndexOf(",", caret - 1), v.lastIndexOf("\uFF0C", caret - 1), v.lastIndexOf("\u3001", caret - 1)) + 1;
      const restSep = v.slice(caret).search(/[,，、]/);
      const segEnd = restSep < 0 ? v.length : caret + restSep;
      multi = { before: splitTags(v.slice(0, segStart)), after: splitTags(v.slice(segEnd)) };
      const q = v.slice(segStart, segEnd).trim();
      const chosen = /* @__PURE__ */ new Set([...multi.before, ...multi.after]);
      const left = Object.keys(opts).filter((x) => !chosen.has(x));
      const items2 = !q || opts[q] ? left.filter((x) => x !== q) : left.filter((x) => x.toLowerCase().includes(q.toLowerCase()));
      if (!items2.length) return this.closeSuggest();
      this.openSuggestList("option", segStart, items2, multi);
      return;
    }
    if (!kind && opts) {
      kind = "option";
      query = el.value.trim();
      start = 0;
    }
    const items = kind === "link" ? this.host.suggestLinks?.(query) ?? [] : kind === "tag" ? this.host.suggestTags?.(query) ?? [] : kind === "option" && opts ? (
      // 还是原来的值（刚开始编辑）或空着：列出全部；打了字就按字过滤
      !query || opts[query] ? Object.keys(opts) : Object.keys(opts).filter((x) => x.toLowerCase().includes(query.toLowerCase()))
    ) : [];
    if (!kind || !items.length) return this.closeSuggest();
    this.openSuggestList(kind, start, items);
  }
  /** 补全列表：multi（多选列）时默认不选中任何一项，Enter 照常完成编辑，按 ↓ 才挑 */
  openSuggestList(kind, start, items, multi) {
    const doc = this.root.ownerDocument;
    const box = this.suggest?.el ?? doc.body.appendChild(doc.createElement("div"));
    box.className = "ggt-suggest";
    box.replaceChildren();
    const first = multi ? -1 : 0;
    items.forEach((it, i) => {
      const row = box.appendChild(doc.createElement("div"));
      row.className = "ggt-suggest-item" + (i === first ? " is-active" : "");
      row.textContent = kind === "tag" ? `#${it}` : it;
      row.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        if (this.suggest) this.suggest.index = i;
        this.acceptSuggest();
      });
    });
    const cell = this.sel && this.cellEl(this.sel);
    const r = (cell ?? this.input.el).getBoundingClientRect();
    box.setAttribute("style", `left:${Math.round(r.left)}px;top:${Math.round(r.bottom + 4)}px`);
    this.suggest = { kind, start, items, index: first, el: box, multi };
  }
  /** 补全列表开着时的按键：上下选、Enter / Tab 确认、Esc 关掉。处理了返回 true */
  onSuggestKey(ev) {
    const sg = this.suggest;
    if (!sg) return false;
    if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
      sg.index = sg.index < 0 && ev.key === "ArrowUp" ? sg.items.length - 1 : (sg.index + (ev.key === "ArrowDown" ? 1 : -1) + sg.items.length) % sg.items.length;
      Array.from(sg.el.children).forEach((c, i) => c.classList.toggle("is-active", i === sg.index));
      return true;
    }
    if (ev.key === "Enter" || ev.key === "Tab") {
      if (sg.index < 0) {
        this.closeSuggest();
        return false;
      }
      this.acceptSuggest();
      return true;
    }
    if (ev.key === "Escape") {
      this.closeSuggest();
      return true;
    }
    return false;
  }
  acceptSuggest() {
    const sg = this.suggest;
    if (!sg) return;
    const el = this.input;
    const v = el.value;
    const caret = el.selectionStart;
    const pick = sg.items[sg.index];
    let insert = pick;
    let rest = v.slice(caret);
    if (sg.kind === "option" && sg.multi) {
      const tags = [...sg.multi.before, pick, ...sg.multi.after];
      el.value = tags.join(", ") + ", ";
      el.setSelectionRange(el.value.length, el.value.length);
      this.closeSuggest();
      this.autosize();
      this.updateSuggest();
      return;
    }
    if (sg.kind === "option") {
      el.value = pick;
      el.setSelectionRange(pick.length, pick.length);
      this.closeSuggest();
      this.autosize();
      return;
    }
    if (sg.kind === "link") {
      if (rest.startsWith("]]")) rest = rest.slice(2);
      insert = `${pick}]]`;
    } else insert = `${pick} `;
    el.value = v.slice(0, sg.start) + insert + rest;
    const pos = sg.start + insert.length;
    el.setSelectionRange(pos, pos);
    this.closeSuggest();
    this.autosize();
  }
  closeSuggest() {
    this.closeSuggestList();
    this.closeCalendar();
  }
  closeSuggestList() {
    this.suggest?.el.remove();
    this.suggest = null;
  }
  // ---------- 日期列的日历 ----------
  dailyNote() {
    return this.host.dailyNote?.() ?? null;
  }
  /** 排序日期列时读日记链接用 */
  dateParser() {
    const daily = this.dailyNote();
    return daily ? (n) => daily.parse(n) : void 0;
  }
  /** 编辑日期列的格子时在格子下面弹日历：格子里的日期选中、看它那个月；输入了新日期就跟着跳过去 */
  showCalendar() {
    if (!this.sel) return;
    const daily = this.dailyNote();
    const picked = readDate(this.input.value, daily ? (n) => daily.parse(n) : void 0);
    const key = picked ? isoDate(picked) : "";
    const now = /* @__PURE__ */ new Date();
    if (!this.cal) {
      const doc = this.root.ownerDocument;
      const el = doc.body.appendChild(doc.createElement("div"));
      el.className = "ggt-cal";
      el.addEventListener("pointerdown", (e) => e.preventDefault());
      el.addEventListener("mousedown", (e) => e.preventDefault());
      this.cal = { el, y: picked?.y ?? now.getFullYear(), m: picked?.m ?? now.getMonth() + 1, key };
    } else if (key !== this.cal.key) {
      this.cal.key = key;
      if (picked) {
        this.cal.y = picked.y;
        this.cal.m = picked.m;
      }
    }
    this.renderCalendar(picked);
  }
  renderCalendar(picked) {
    const cal = this.cal;
    if (!cal) return;
    const doc = this.root.ownerDocument;
    const el = cal.el;
    el.replaceChildren();
    const btn = (parent, cls, text, run, label) => {
      const b = parent.appendChild(doc.createElement("button"));
      b.type = "button";
      b.className = cls;
      b.textContent = text;
      if (label) b.setAttribute("aria-label", label);
      b.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        run();
      });
      return b;
    };
    const shift = (k) => {
      const d = new Date(cal.y, cal.m - 1 + k, 1);
      cal.y = d.getFullYear();
      cal.m = d.getMonth() + 1;
      this.renderCalendar(picked);
    };
    const head = el.appendChild(doc.createElement("div"));
    head.className = "ggt-cal-head";
    btn(head, "ggt-cal-nav", "\u2039", () => shift(-1), t("calPrev"));
    const title = head.appendChild(doc.createElement("span"));
    title.className = "ggt-cal-title";
    title.textContent = t("calMonth").replace("{y}", String(cal.y)).replace("{m}", String(cal.m)).replace("{M}", new Date(cal.y, cal.m - 1, 1).toLocaleString("en", { month: "long" }));
    btn(head, "ggt-cal-nav", "\u203A", () => shift(1), t("calNext"));
    const grid = el.appendChild(doc.createElement("div"));
    grid.className = "ggt-cal-grid";
    const weekStart = Number(t("calWeekStart"));
    const names = t("calWeekdays").split(",");
    for (let i = 0; i < 7; i++) grid.appendChild(doc.createElement("span")).textContent = names[(i + weekStart) % 7];
    for (const s of Array.from(grid.children)) s.className = "ggt-cal-wd";
    const first = new Date(cal.y, cal.m - 1, 1);
    const lead = (first.getDay() - weekStart + 7) % 7;
    const now = /* @__PURE__ */ new Date();
    const today = { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() };
    for (let i = 0; i < 42; i++) {
      const d = new Date(cal.y, cal.m - 1, 1 - lead + i);
      const v = { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() };
      const b = btn(grid, "ggt-cal-day", String(v.d), () => this.pickDate(v), isoDate(v));
      if (v.m !== cal.m) b.classList.add("is-other");
      if (isoDate(v) === isoDate(today)) b.classList.add("is-today");
      if (picked && isoDate(v) === isoDate(picked)) b.classList.add("is-picked");
    }
    const foot = el.appendChild(doc.createElement("div"));
    foot.className = "ggt-cal-foot";
    btn(foot, "ggt-cal-btn", t("calToday"), () => this.pickDate(today));
    btn(foot, "ggt-cal-btn", t("calClear"), () => this.pickDate(null));
    const cell = this.sel && this.cellEl(this.sel);
    const r = (cell ?? this.input.el).getBoundingClientRect();
    const vw = doc.documentElement.clientWidth;
    const vh = doc.documentElement.clientHeight;
    const box = el.getBoundingClientRect();
    const left = Math.max(8, Math.min(r.left, vw - box.width - 8));
    const top = r.bottom + 4 + box.height > vh - 8 && r.top - 4 - box.height > 8 ? r.top - 4 - box.height : r.bottom + 4;
    el.setAttribute("style", `left:${Math.round(left)}px;top:${Math.round(top)}px`);
  }
  /** 日历里点了一天（null 是清空）：按列的写法写进格子并完成编辑 */
  pickDate(v) {
    if (!this.editing || !this.sel) return;
    const ty = colTypeOf(this.table, this.sel.c);
    const daily = ty?.t === "date" && ty.f === "link" ? this.dailyNote() : null;
    this.input.reset(v ? writeDate(v, ty?.t === "date" ? ty.f : void 0, daily ? (x) => daily.name(x) : void 0) : "");
    this.commit();
    this.input.focus();
  }
  closeCalendar() {
    this.cal?.el.remove();
    this.cal = null;
  }
  // ---------- 下拉填充 ----------
  /** 按住填充柄往下 / 上 / 左 / 右拖：虚线框出要填的地方，松开按规律填上，拖出表格就加行加列 */
  fillDrag(ev) {
    const src = this.rangeRect();
    if (!src || this.host.readonly) return;
    ev.preventDefault();
    ev.stopPropagation();
    const handle = this.fillHandle;
    try {
      handle.setPointerCapture(ev.pointerId);
    } catch {
    }
    this.root.classList.add("is-filling");
    const state = { plan: null, copy: ev.altKey };
    const rows = Array.from({ length: rowCount(this.table) }, (_, r) => this.lineBox(r, true));
    const cols = Array.from({ length: colCount(this.table) }, (_, c) => this.lineBox(c, false));
    const indexAt = (v, lines) => {
      for (let i = 0; i < lines.length; i++) if (v < lines[i].b) return i;
      const last = lines[lines.length - 1];
      return lines.length - 1 + Math.ceil((v - last.b) / Math.max(20, last.b - last.a));
    };
    const move = (e) => {
      state.copy = e.altKey;
      this.root.classList.toggle("is-fill-copy", e.altKey);
      const r = indexAt(e.clientY, rows);
      const c = indexAt(e.clientX, cols);
      const down = r - src.r2;
      const up2 = src.r1 - r;
      const right = c - src.c2;
      const left = src.c1 - c;
      const best = Math.max(down, up2, right, left);
      state.plan = best <= 0 ? null : best === down ? { dir: "down", count: down } : best === right ? { dir: "right", count: right } : best === up2 ? { dir: "up", count: up2 } : { dir: "left", count: left };
      this.showFillPreview(src, state.plan, rows, cols);
    };
    const up = (e) => {
      if (e && e.type === "pointerup") state.copy = e.altKey;
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", cancel);
      this.root.classList.remove("is-filling", "is-fill-copy");
      this.fillPreview.classList.remove("is-shown");
      const p = state.plan;
      if (!p) return;
      const { table, filled } = fillRange(this.table, src, p.dir, p.count, state.copy);
      if (table === this.table) return;
      this.apply(table, { r: filled.r2, c: filled.c2 });
      this.anchor = { r: filled.r1, c: filled.c1 };
      this.markSel();
    };
    const cancel = () => {
      state.plan = null;
      up();
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", cancel);
  }
  /** 第 i 行（或列）在屏幕上的起止 */
  lineBox(i, row) {
    if (row) {
      const tr = this.tableEl.rows[i];
      const b2 = tr?.getBoundingClientRect();
      return b2 ? { a: b2.top, b: b2.bottom } : { a: 0, b: 0 };
    }
    const b = this.tableEl.querySelectorAll("col")[i]?.getBoundingClientRect();
    return b ? { a: b.left, b: b.right } : { a: 0, b: 0 };
  }
  showFillPreview(src, plan, rows, cols) {
    const pv = this.fillPreview;
    if (!plan) {
      pv.classList.remove("is-shown");
      return;
    }
    const ext = (lines, i) => {
      if (i < lines.length && i >= 0) return lines[i];
      const last = lines[lines.length - 1];
      const size = Math.max(20, last.b - last.a);
      const k2 = i - (lines.length - 1);
      return { a: last.b + (k2 - 1) * size, b: last.b + k2 * size };
    };
    const r1 = plan.dir === "up" ? src.r1 - plan.count : plan.dir === "down" ? src.r2 + 1 : src.r1;
    const r2 = plan.dir === "down" ? src.r2 + plan.count : plan.dir === "up" ? src.r1 - 1 : src.r2;
    const c1 = plan.dir === "left" ? src.c1 - plan.count : plan.dir === "right" ? src.c2 + 1 : src.c1;
    const c2 = plan.dir === "right" ? src.c2 + plan.count : plan.dir === "left" ? src.c1 - 1 : src.c2;
    const top = ext(rows, Math.max(0, r1)).a;
    const bottom = ext(rows, r2).b;
    const left = ext(cols, Math.max(0, c1)).a;
    const right = ext(cols, c2).b;
    const base = this.scroller.getBoundingClientRect();
    const k = this.scale();
    pv.setAttribute("style", `left:${(left - base.left) / k + this.scroller.scrollLeft}px;top:${(top - base.top) / k + this.scroller.scrollTop}px;width:${(right - left) / k}px;height:${(bottom - top) / k}px`);
    pv.classList.add("is-shown");
  }
  // ---------- 复制粘贴 ----------
  /** 选区里的内容（被合并盖住的格子是空的） */
  rangeGrid() {
    const r = this.rangeRect();
    if (!r) return [];
    const grid = [];
    for (let i = r.r1; i <= r.r2; i++) {
      const row = [];
      for (let j = r.c1; j <= r.c2; j++) row.push(isCovered(this.table, i, j) ? "" : shownText(this.table, i, j));
      grid.push(row);
    }
    return grid;
  }
  onCopy(ev, cut) {
    if (this.editing || !this.sel || !ev.clipboardData) return;
    ev.preventDefault();
    const grid = this.rangeGrid();
    const r = this.rangeRect();
    ev.clipboardData.setData("text/plain", toTSV(grid));
    ev.clipboardData.setData("text/html", r ? this.styledHTML(r, this.sourceOf(r)) : toHTML(grid, false));
    if (cut && !this.host.readonly) this.applyKeepRange(clearCells(this.table, this.rangeCells()));
  }
  /**
   * 带样式的 HTML：格子实际显示的底色、文字颜色、加粗、对齐、列宽、合并都写成内联样式，
   * 粘到 Word、飞书、邮件里保留样子。标上 data-ggt，粘回我们自己的表格时用纯文本（Markdown 原文）
   */
  /** 这片格子截成的表格原文（带设置注释）：至少 2 行 2 列才算一张表，不然返回 null */
  sourceOf(rect) {
    if (rect.r2 - rect.r1 < 1 || rect.c2 - rect.c1 < 1) return null;
    return serializeTable(subTable(this.table, rect));
  }
  /** 表格菜单里的复制：整张表带样式（粘到别的笔记原样还原），或者只要 Markdown 表格 */
  copyWhole(markdownOnly) {
    if (this.editing) this.commit();
    const tb = this.table;
    const lines = markdownOnly ? serializeTable({ ...tb, meta: {} }) : serializeTable(tb);
    const text = lines.join("\n");
    const win = this.root.ownerDocument.defaultView ?? window;
    const clip = win.navigator.clipboard;
    const done = () => this.host.notice?.(t(markdownOnly ? "copiedMarkdown" : "copiedTable"));
    const html = this.styledHTML({ r1: 0, c1: 0, r2: rowCount(tb) - 1, c2: colCount(tb) - 1 }, lines, markdownOnly);
    const item = new win.ClipboardItem({
      "text/plain": new win.Blob([text], { type: "text/plain" }),
      "text/html": new win.Blob([html], { type: "text/html" })
    });
    void clip.write([item]).then(done);
  }
  /**
   * 复制出去的 HTML 表格（粘到 Word、飞书、邮件）。颜色一律按浅色主题取、半透明的叠在白底上算成实色：
   * 暗色主题下屏幕上的表头、标签是深底浅字，原样带过去在白纸上很难看。plain：只要表格，不带任何颜色
   */
  styledHTML(rect, source = null, plain = false) {
    const body = this.root.ownerDocument.body;
    const dark = body.classList.contains("theme-dark");
    if (dark && !plain) body.classList.replace("theme-dark", "theme-light");
    try {
      return this.buildHTML(rect, source, plain);
    } finally {
      if (dark && !plain) body.classList.replace("theme-light", "theme-dark");
    }
  }
  buildHTML(rect, source, plain) {
    const tb = this.table;
    const esc2 = (v) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const win = this.root.ownerDocument.defaultView ?? window;
    const cols = Array.from(this.tableEl.querySelectorAll("col"));
    let html = `<table data-ggt="1"${source ? sourceAttr(source) : ""} style="border-collapse:collapse">`;
    html += "<colgroup>";
    const k = this.scale();
    for (let c = rect.c1; c <= rect.c2; c++) html += `<col style="width:${Math.round((cols[c]?.getBoundingClientRect().width ?? 80 * k) / k)}px">`;
    html += "</colgroup>";
    for (let r = rect.r1; r <= rect.r2; r++) {
      html += "<tr>";
      for (let c = rect.c1; c <= rect.c2; c++) {
        const m = mergeAt(tb, r, c);
        if (m && (m.r1 !== r || m.c1 !== c) && m.r1 >= rect.r1 && m.c1 >= rect.c1) continue;
        const el = this.cellEl({ r, c });
        const cs = el ? win.getComputedStyle(el) : null;
        const styles = ["border:1px solid #d9d9d9", "padding:6px 10px", `vertical-align:${vAlignOf(tb, c) ?? "top"}`];
        const a = tb.align[c];
        if (a) styles.push(`text-align:${a}`);
        if (cs) {
          const bg = plain ? null : onWhite(cs.backgroundColor);
          if (bg && bg !== "rgb(255, 255, 255)") styles.push(`background-color:${bg}`);
          if (!plain && fgOf(tb, r, c)) styles.push(`color:${onWhite(cs.color) ?? cs.color}`);
          if (Number(cs.fontWeight) >= 600) styles.push("font-weight:600");
        }
        const size = (tb.meta.fs ?? 1) * (fontSizeOf(tb, r, c) ?? 1);
        if (!plain && size !== 1) styles.push(`font-size:${Math.round(size * 100)}%`);
        let span = "";
        if (m && m.r1 === r && m.c1 === c) {
          const cs2 = Math.min(m.c2, rect.c2) - c + 1;
          const rs2 = Math.min(m.r2, rect.r2) - r + 1;
          if (cs2 > 1) span += ` colspan="${cs2}"`;
          if (rs2 > 1) span += ` rowspan="${rs2}"`;
        }
        let inner = esc2(shownText(tb, r, c)).replace(/\n/g, "<br>");
        const content = el?.querySelector(".ggt-content");
        if (content && el && !el.classList.contains("is-editing")) {
          const clone = content.cloneNode(true);
          clone.querySelectorAll("input.ggt-check").forEach((b) => b.replaceWith(b.checked ? "\u2611 " : "\u2610 "));
          clone.querySelectorAll(".ggt-pill").forEach((pill, i) => {
            const orig = content.querySelectorAll(".ggt-pill")[i];
            const ps = orig && !plain ? win.getComputedStyle(orig) : null;
            if (ps) pill.setAttribute("style", `background:${onWhite(ps.backgroundColor) ?? ps.backgroundColor};color:${onWhite(ps.color) ?? ps.color};padding:0 8px;border-radius:10px`);
            else pill.removeAttribute("style");
          });
          clone.querySelectorAll("textarea").forEach((x) => x.remove());
          clone.querySelectorAll(":scope > p").forEach((para, i) => {
            if (i > 0) para.before(clone.ownerDocument.createElement("br"));
            para.replaceWith(...Array.from(para.childNodes));
          });
          inner = clone.innerHTML;
        }
        const tag = r < headRows(this.table) ? "th" : "td";
        html += `<${tag}${span} style="${styles.join(";")}">${inner}</${tag}>`;
      }
      html += "</tr>";
    }
    return html + "</table>";
  }
  onPaste(ev) {
    if (!this.sel || this.host.readonly || !ev.clipboardData) return;
    const grid = this.editing ? null : gridFromClipboard(ev.clipboardData, this.root.ownerDocument);
    const image = this.host.saveImage && !(grid && (grid.length > 1 || grid[0].length > 1)) ? imageFrom(ev.clipboardData) : null;
    if (image) {
      ev.preventDefault();
      void this.pasteImage(image);
      return;
    }
    if (!grid) return;
    ev.preventDefault();
    const r = this.rangeRect() ?? { r1: this.sel.r, c1: this.sel.c, r2: this.sel.r, c2: this.sel.c };
    if (grid.length === 1 && grid[0].length === 1 && this.isMulti()) {
      let next2 = this.table;
      for (const p of this.rangeCells()) {
        const m = mergeAt(next2, p.r, p.c);
        if (!m || m.r1 === p.r && m.c1 === p.c) next2 = setCell(next2, p.r, p.c, grid[0][0]);
      }
      this.applyKeepRange(next2);
      return;
    }
    const next = pasteGrid(this.table, r.r1, r.c1, grid);
    this.anchor = null;
    this.apply(next, { r: r.r1, c: r.c1 });
    if (grid.length > 1 || grid[0].length > 1) this.setSel({ r: r.r1 + grid.length - 1, c: r.c1 + Math.max(...grid.map((x) => x.length)) - 1 }, true, true);
  }
  /** 从格子里去掉一张图的嵌入 ![[文件名]]（带 |100 这类尺寸的也算），前后多出的空格一起收掉 */
  removeEmbed(p, link) {
    const cur = shownText(this.table, p.r, p.c);
    const esc2 = link.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const next = cur.replace(new RegExp(`[ \\t]?!\\[\\[${esc2}(?:\\|[^\\]]*)?\\]\\]`), "").trim();
    if (next !== cur) this.apply(editCell(this.table, p.r, p.c, next), p);
  }
  /** 双击格子里的图片：盖住整个窗口看原图，点一下或按 Esc 关掉 */
  openLightbox(img) {
    const doc = this.root.ownerDocument;
    if (doc.querySelector(".ggt-lightbox")) return;
    const box = doc.body.appendChild(doc.createElement("div"));
    box.className = "ggt-lightbox";
    const big = box.appendChild(doc.createElement("img"));
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    const close = () => {
      box.remove();
      doc.removeEventListener("keydown", onKey, true);
    };
    const onKey = (ev) => {
      if (ev.key !== "Escape") return;
      ev.preventDefault();
      ev.stopPropagation();
      close();
    };
    box.addEventListener("click", close);
    doc.addEventListener("keydown", onKey, true);
  }
  /** 图片存好以后插进格子：编辑中插在光标处；只是选中就接在格子原有内容后面（不覆盖） */
  async pasteImage(file) {
    const p = this.sel;
    const editing = this.editing;
    const from = editing ? this.input.selectionStart : 0;
    const to = editing ? this.input.selectionEnd : 0;
    const md = await this.host.saveImage?.(file);
    if (!md || this.destroyed || !p) return;
    if (editing && this.editing && this.sel?.r === p.r && this.sel.c === p.c) {
      const v = this.input.value;
      this.input.value = v.slice(0, from) + md + v.slice(to);
      this.input.setSelectionRange(from + md.length, from + md.length);
      this.autosize();
      return;
    }
    if (this.editing) this.commit();
    const cur = shownText(this.table, p.r, p.c);
    this.apply(editCell(this.table, p.r, p.c, cur.trim() ? `${cur} ${md}` : md), p);
  }
  // ---------- 触屏 ----------
  /**
   * 手指按在格子上：轻点是选中并进入编辑（键盘弹出来），按住不动半秒是菜单，滑动是滚动（什么都不做）。
   * 不在按下时 preventDefault，滚动照常
   */
  touchStart(ev, p) {
    const x0 = ev.clientX;
    const y0 = ev.clientY;
    let moved = false;
    let pressed = false;
    const timer = window.setTimeout(() => {
      if (moved) return;
      pressed = true;
      this.longPressAt = performance.now();
      this.setSel(p, false);
      this.openMenu(this.cellMenu(p), x0, y0);
    }, 500);
    const move = (e) => {
      if (Math.hypot(e.clientX - x0, e.clientY - y0) > 8) {
        moved = true;
        window.clearTimeout(timer);
      }
    };
    const end = (e) => {
      window.clearTimeout(timer);
      this.tableEl.removeEventListener("pointermove", move);
      this.tableEl.removeEventListener("pointerup", end);
      this.tableEl.removeEventListener("pointercancel", end);
      if (moved || pressed || e.type === "pointercancel") return;
      const same = this.sel && this.sel.r === p.r && this.sel.c === p.c;
      if (same && this.editing) return;
      this.setSel(p, true);
      this.startEdit(true);
    };
    this.tableEl.addEventListener("pointermove", move);
    this.tableEl.addEventListener("pointerup", end);
    this.tableEl.addEventListener("pointercancel", end);
  }
  // ---------- 列宽 ----------
  /** 指针离哪条列边线（每列的右边）不到 4 像素，就把调列宽的线放到那里；不在附近就藏起来 */
  placeResizeBar(x, y) {
    const bar = this.resizeBar;
    bar.classList.remove("is-touch");
    const t2 = this.tableEl.getBoundingClientRect();
    let hit = -1;
    let at = 0;
    const fb = this.fillHandle.classList.contains("is-shown") ? this.fillHandle.getBoundingClientRect() : null;
    const onFill = !!fb && x >= fb.left - 4 && x <= fb.right + 4 && y >= fb.top - 4 && y <= fb.bottom + 4;
    if (!onFill && y >= t2.top && y <= t2.bottom && !this.root.classList.contains("is-dragging")) {
      const under = Array.from(this.tableEl.querySelectorAll(".ggt-cell")).find((el) => {
        const b = el.getBoundingClientRect();
        return x >= b.left - 4 && x <= b.right + 4 && y >= b.top && y <= b.bottom && el.colSpan > 1;
      });
      const c1 = under ? Number(under.dataset.c) : -1;
      const c2 = under ? c1 + under.colSpan - 1 : -1;
      const cols = Array.from(this.tableEl.querySelectorAll("col"));
      cols.forEach((col, c) => {
        if (c >= c1 && c < c2) return;
        const right = col.getBoundingClientRect().right;
        if (hit < 0 && Math.abs(x - right) <= 4) {
          hit = c;
          at = right;
        }
      });
    }
    if (hit < 0) {
      bar.classList.remove("is-shown");
      return;
    }
    const base = this.root.getBoundingClientRect();
    bar.dataset.c = String(hit);
    const k = this.scale();
    bar.setAttribute("style", `left:${(at - base.left) / k - 4}px;top:${(t2.top - base.top) / k}px;height:${t2.height / k}px`);
    bar.classList.add("is-shown");
  }
  /**
   * 触屏上没有「鼠标移到列边线」：点选一格后，在这一列的右边线上放一个能拖的把手（同一根调列宽的线，带个圆点），
   * 拖动改列宽、双击恢复自动列宽。只在最近一次是用手指点的、选着一格时出现（轻点进了编辑也在，拖之前先保存这一格）
   */
  placeTouchResize() {
    const bar = this.resizeBar;
    if (this.resize) return;
    const cell = this.touched && this.sel && !this.isMulti() && !this.host.readonly ? this.cellEl(this.sel) : null;
    if (!cell || !cell.isConnected) {
      if (bar.classList.contains("is-touch")) bar.classList.remove("is-shown", "is-touch");
      return;
    }
    const c = Number(cell.dataset.c) + (cell.colSpan || 1) - 1;
    const col = this.tableEl.querySelectorAll("col")[c];
    if (!col) return;
    const t2 = this.tableEl.getBoundingClientRect();
    const base = this.root.getBoundingClientRect();
    const k = this.scale();
    const at = col.getBoundingClientRect().right;
    bar.dataset.c = String(c);
    bar.setAttribute("style", `left:${(at - base.left) / k - 4}px;top:${(t2.top - base.top) / k}px;height:${t2.height / k}px`);
    const cb = cell.getBoundingClientRect();
    bar.style.setProperty("--ggt-grip-y", `${(cb.top + cb.height / 2 - t2.top) / k}px`);
    bar.classList.add("is-shown", "is-touch");
  }
  startResize(ev, handle) {
    if (this.host.readonly) return;
    ev.preventDefault();
    ev.stopPropagation();
    if (this.editing) this.commit();
    const c = Number(handle.dataset.c);
    const col = this.tableEl.querySelectorAll("col")[c];
    if (!col || Number.isNaN(c)) return;
    const k = this.scale();
    this.resize = { c, startX: ev.clientX, startW: col.getBoundingClientRect().width / k, col, fitW: this.root.classList.contains("is-fit") ? parseFloat(this.tableEl.style.width) || 0 : 0, scale: this.fitScale };
    const startLeft = parseFloat(handle.style.left) || 0;
    const grip = handle.style.getPropertyValue("--ggt-grip-y");
    handle.classList.add("is-active");
    this.root.classList.add("is-resizing");
    try {
      handle.setPointerCapture(ev.pointerId);
    } catch {
    }
    const move = (e) => {
      const r = this.resize;
      if (!r) return;
      const w = Math.max(40, Math.round(r.startW + (e.clientX - r.startX) / k));
      r.col.style.width = `${w}px`;
      if (r.fitW) this.tableEl.style.width = `${r.fitW - r.startW + w}px`;
      const tr = this.tableEl.getBoundingClientRect();
      const base = this.root.getBoundingClientRect();
      handle.setAttribute("style", `left:${startLeft + (w - r.startW)}px;top:${(tr.top - base.top) / k}px;height:${tr.height / k}px`);
      if (grip) handle.style.setProperty("--ggt-grip-y", grip);
      this.placeHandles();
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      handle.classList.remove("is-active");
      this.root.classList.remove("is-resizing");
      const r = this.resize;
      this.resize = null;
      if (!r) return;
      const w = parseFloat(r.col.style.width);
      if (Math.abs(w - r.startW) < 1) {
        this.fitCols();
        return;
      }
      const fit = this.root.dataset.defFit === "1";
      const avail = this.availWidth();
      const wide = fit && avail > 0 && this.tableEl.offsetWidth > avail + 1;
      if (wide) this.apply(setWide(r.scale !== 1 ? setWidths(this.table, this.colWidths()) : setWidth(this.table, r.c, w), true));
      else {
        const n = setWidth(this.table, r.c, Math.round(w / r.scale));
        this.apply(fit ? setWide(n, false) : n);
      }
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
  }
  // ---------- 手柄、加号 ----------
  handle(cls, label, icon) {
    const doc = this.root.ownerDocument;
    const el = this.root.appendChild(doc.createElement("button"));
    el.type = "button";
    el.className = `ggt-handle ${cls}`;
    el.setAttribute("aria-label", label);
    el.tabIndex = -1;
    if (this.host.setIcon) this.host.setIcon(el, icon);
    else el.textContent = cls.includes("row") ? "\u22EE" : "\u22EF";
    const row = cls.includes("row");
    el.addEventListener("pointerdown", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      if (ev.button !== 0 || el.dataset.r === void 0) return;
      const p = { r: Number(el.dataset.r), c: Number(el.dataset.c) };
      this.handleDrag(ev, el, row, p);
    });
    el.addEventListener("click", (ev) => ev.preventDefault());
    return el;
  }
  /** 按住行 / 列手柄：拖出去超过几像素就是拖动换位置，否则松开时打开菜单 */
  handleDrag(ev, handle, row, p) {
    if (this.editing) this.commit();
    const x0 = ev.clientX;
    const y0 = ev.clientY;
    const from = row ? p.r : p.c;
    let dragging = false;
    let target = null;
    const doc = this.root.ownerDocument;
    const line = doc.createElement("div");
    line.className = "ggt-drop-line" + (row ? " is-row" : " is-col");
    try {
      handle.setPointerCapture(ev.pointerId);
    } catch {
    }
    const marked = () => Array.from(this.tableEl.querySelectorAll(row ? `.ggt-cell[data-r="${from}"]` : `.ggt-cell[data-c="${from}"]`));
    const slotAt = (x, y) => {
      const cells = row ? Array.from({ length: rowCount(this.table) - 1 }, (_, i) => this.cellEl({ r: i + 1, c: 0 })) : Array.from({ length: colCount(this.table) }, (_, c) => this.cellEl({ r: 0, c }));
      const rects = cells.map((c) => c?.getBoundingClientRect()).filter((r) => !!r);
      let slot = rects.length;
      for (let i = 0; i < rects.length; i++) {
        const mid = row ? rects[i].top + rects[i].height / 2 : rects[i].left + rects[i].width / 2;
        if ((row ? y : x) < mid) {
          slot = i;
          break;
        }
      }
      const edge = slot < rects.length ? row ? rects[slot].top : rects[slot].left : row ? rects[rects.length - 1].bottom : rects[rects.length - 1].right;
      const fromIdx = row ? from - 1 : from;
      const dest = slot > fromIdx ? slot - 1 : slot;
      return { index: row ? dest + 1 : dest, at: edge };
    };
    const fixed = row && from === 0;
    const move = (e) => {
      if (fixed) return;
      if (!dragging) {
        if (Math.hypot(e.clientX - x0, e.clientY - y0) < 5) return;
        dragging = true;
        this.root.classList.add("is-dragging");
        for (const c of marked()) c.classList.add("is-drag-source");
        this.root.appendChild(line);
      }
      const { index, at } = slotAt(e.clientX, e.clientY);
      target = index;
      const base = this.root.getBoundingClientRect();
      const t2 = this.tableEl.getBoundingClientRect();
      const k = this.scale();
      if (row) line.setAttribute("style", `top:${(at - base.top) / k - 1}px;left:${(t2.left - base.left) / k}px;width:${t2.width / k}px`);
      else line.setAttribute("style", `left:${(at - base.left) / k - 1}px;top:${(t2.top - base.top) / k}px;height:${t2.height / k}px`);
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", cancel);
      line.remove();
      this.root.classList.remove("is-dragging");
      for (const c of marked()) c.classList.remove("is-drag-source");
      if (!dragging) {
        if (this.editing) this.commit();
        this.anchor = row ? { r: p.r, c: 0 } : { r: 0, c: p.c };
        this.sel = row ? { r: p.r, c: colCount(this.table) - 1 } : { r: this.shownRows() - 1, c: p.c };
        this.lineSel = true;
        this.markSel();
        this.input.focus();
        const rect = handle.getBoundingClientRect();
        this.openMenu(row ? this.rowMenu(p) : this.colMenu(p), rect.left, rect.bottom + 4);
        return;
      }
      if (target === null || target === from) return;
      if (row) this.apply(moveRow(this.table, from, target), { r: target, c: p.c });
      else this.apply(moveCol(this.table, from, target), { r: p.r, c: target });
    };
    const cancel = () => {
      dragging = false;
      target = null;
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", cancel);
      line.remove();
      this.root.classList.remove("is-dragging");
      for (const c of marked()) c.classList.remove("is-drag-source");
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", cancel);
  }
  addButton(cls, label, run) {
    const doc = this.root.ownerDocument;
    const el = this.root.appendChild(doc.createElement("button"));
    el.type = "button";
    el.className = `ggt-add ${cls}`;
    el.setAttribute("aria-label", label);
    el.tabIndex = -1;
    if (this.host.setIcon) this.host.setIcon(el, "plus");
    else el.textContent = "+";
    el.addEventListener("pointerdown", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    el.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (!this.host.readonly) run();
    });
    return el;
  }
  /** 行手柄放在悬停（或选中）那一行的左边框上，列手柄放在那一列的上边框上 */
  /** 滚动区域在屏幕上看得见的那一块（表格横向 / 纵向滚动时，手柄不能跟着跑到外面去） */
  visibleBox() {
    const sc = this.scroller;
    const r = sc.getBoundingClientRect();
    const k = this.scale();
    const left = r.left + sc.clientLeft * k;
    const top = r.top + sc.clientTop * k;
    return { left, top, right: left + sc.clientWidth * k, bottom: top + sc.clientHeight * k };
  }
  placeHandles() {
    const vis = this.visibleBox();
    {
      const base2 = this.root.getBoundingClientRect();
      const tr = this.tableEl.getBoundingClientRect();
      const k2 = this.scale();
      const x = Math.max(tr.left, vis.left);
      const y = Math.max(tr.top, vis.top);
      this.cornerBtn.setAttribute("style", `left:${(x - base2.left) / k2}px;top:${(y - base2.top) / k2}px`);
    }
    const off = () => {
      this.rowHandle.classList.remove("is-shown");
      this.colHandle.classList.remove("is-shown");
    };
    if (this.host.readonly || this.resize) return off();
    const head = Math.max(1, headRows(this.table));
    const h = this.hover;
    const line = this.lineSel && this.anchor && this.sel ? { a: this.anchor, b: this.sel } : null;
    const lineRow = line && line.a.r === line.b.r ? { r: line.a.r, c: 0 } : null;
    const lineCol = line && line.a.c === line.b.c ? { r: 0, c: line.a.c } : null;
    const touchSel = this.touched && !h ? this.sel : null;
    const atRowStart = (q) => {
      if (q.c === 0) return true;
      let covered = true;
      for (let c = 0; c < q.c && covered; c++) covered = isCovered(this.table, q.r, c);
      if (covered) return true;
      const el = this.cellEl(q);
      return !!el && el.getBoundingClientRect().left <= vis.left + 1;
    };
    const rowP = this.folded() ? null : (h && atRowStart(h) ? h : null) ?? lineRow ?? touchSel;
    const colP = (h && h.r < head ? h : null) ?? lineCol ?? touchSel;
    this.rowHandle.classList.toggle("is-shown", !!rowP);
    this.colHandle.classList.toggle("is-shown", !!colP);
    const base = this.root.getBoundingClientRect();
    const k = this.scale();
    if (rowP) {
      const first = this.cellEl({ r: rowP.r, c: 0 });
      if (!first) this.rowHandle.classList.remove("is-shown");
      else {
        const fr = first.getBoundingClientRect();
        const rowMid = fr.top + fr.height / 2;
        if (rowMid < vis.top || rowMid > vis.bottom) this.rowHandle.classList.remove("is-shown");
        this.rowHandle.style.top = `${(rowMid - base.top) / k}px`;
        this.rowHandle.style.left = `${(Math.max(fr.left, vis.left) - base.left) / k}px`;
        this.rowHandle.dataset.r = String(rowP.r);
        this.rowHandle.classList.toggle("is-fixed", rowP.r < headRows(this.table));
        this.rowHandle.dataset.c = String(rowP.c);
      }
    }
    if (colP) {
      const headCell = this.cellEl({ r: 0, c: colP.c });
      if (!headCell) this.colHandle.classList.remove("is-shown");
      else {
        const hr = headCell.getBoundingClientRect();
        const colMid = hr.left + hr.width / 2;
        if (colMid < vis.left || colMid > vis.right) this.colHandle.classList.remove("is-shown");
        this.colHandle.style.left = `${(colMid - base.left) / k}px`;
        const outerTop = this.outer ? this.outer.getBoundingClientRect().top : -Infinity;
        const half = this.colHandle.offsetHeight * k / 2 + 1;
        const top = Math.max(hr.top, vis.top, outerTop + half);
        this.colHandle.style.top = `${(top - base.top) / k}px`;
        this.colHandle.dataset.r = String(colP.r);
        this.colHandle.dataset.c = String(colP.c);
      }
    }
  }
  /** 滚动中：忘掉悬停的格子、藏起手柄（菜单开着、整行整列选着的不动） */
  hideHandlesForScroll() {
    this.scrolledAt = performance.now();
    if (this.popover) return;
    this.hover = null;
  }
  // ---------- 菜单 ----------
  /** 整张表的菜单（左上角按钮） */
  tableMenu() {
    const tb = this.table;
    const keep = (next) => this.applyKeepRange(next);
    const look = (style) => ({
      title: style ? t(`style_${style}`) : t("followSettings"),
      checked: (tb.meta.style ?? null) === style,
      run: () => keep(setTableLook(this.table, { style }))
    });
    const dens = (density) => ({
      title: density ? t(`density_${density}`) : t("followSettings"),
      checked: (tb.meta.density ?? null) === density,
      run: () => keep(setTableLook(this.table, { density }))
    });
    const align = (a, title, icon) => ({
      title,
      icon,
      inline: true,
      checked: tb.align.every((x) => (x ?? "left") === a),
      run: () => keep(alignAll(this.table, a))
    });
    return [
      { title: t("tableStyle") },
      look(null),
      ...TABLE_STYLES.map((x) => look(x)),
      { separator: true },
      { title: t("rowSpacing") },
      dens(null),
      ...TABLE_DENSITIES.map((x) => dens(x)),
      ...this.sizeItems(t("tableFontSize"), tb.meta.fs ?? 1, (v) => keep(setTableFontSize(this.table, v))),
      { separator: true },
      { title: t("align") },
      align("left", t("alignAllLeft"), "align-left"),
      align("center", t("alignAllCenter"), "align-center"),
      align("right", t("alignAllRight"), "align-right"),
      ...["top", "middle", "bottom"].map((v) => {
        const val = v === "top" ? null : v;
        return {
          title: t(`vAlignAll_${v}`),
          icon: V_ICONS[v],
          inline: true,
          checked: Array.from({ length: colCount(tb) }, (_, c) => vAlignOf(tb, c)).every((x) => x === val),
          run: () => keep(vAlignAll(this.table, val))
        };
      }),
      { separator: true },
      // 表头行数排成一排（1 2 3），菜单矮一些，矮窗口里不用滚
      ...Array.from({ length: MAX_HEAD_ROWS }, (_, i) => ({
        chipText: String(i + 1),
        rowLabel: i === 0 ? t("headerRows") : void 0,
        title: t("headerRowsN").replace("{n}", String(i + 1)),
        checked: headRows(tb) === i + 1,
        disabled: headRows(tb) !== i + 1 && !canSetHead(tb, i + 1),
        run: () => keep(setTableLook(this.table, { head: i + 1 }))
      })),
      { separator: true },
      {
        title: t("foldTable"),
        icon: "chevrons-down-up",
        checked: tb.meta.fold === 1,
        disabled: tb.meta.fold !== 1 && rowCount(tb) <= headRows(tb),
        run: () => {
          this.localUnfold = false;
          keep(setFolded(this.table, this.table.meta.fold !== 1));
        }
      },
      { title: t("headerColumn"), icon: "panel-left", checked: !!tb.meta.headerCol, run: () => keep(setTableLook(this.table, { headerCol: !this.table.meta.headerCol })) },
      // 冻结是标题列的选项：标题列开着才出现
      ...tb.meta.headerCol ? [{ title: t("freezeHeaderCol"), icon: "pin", checked: tb.meta.freeze === 1, run: () => keep(setTableLook(this.table, { freeze: this.table.meta.freeze !== 1 })) }] : [],
      { separator: true },
      { title: t("distributeCols"), icon: "columns-3", run: () => keep(setWidths(this.table, this.colWidths().map((_, _i, all) => all.reduce((a, b) => a + b, 0) / all.length))) },
      { title: t("fitWidth"), icon: "move-horizontal", run: () => keep(setWide(setWidths(this.table, this.fitWidths()), false)) },
      { title: t("autoWidthAll"), icon: "move-horizontal", disabled: !tb.meta.w?.some((x) => x != null), run: () => keep(autoWidthAll(this.table)) },
      { title: t("clearAllBg"), icon: "paintbrush", disabled: !Object.keys(tb.meta.bg ?? {}).length && !Object.keys(tb.meta.fg ?? {}).length, run: () => keep(clearAllBg(this.table)) },
      { separator: true },
      { title: t("copyTable"), icon: "copy", run: () => this.copyWhole(false) },
      { title: t("copyMarkdown"), icon: "file-code", run: () => this.copyWhole(true) },
      ...this.host.indentTable ? [
        { separator: true },
        ...[1, -1].map((dir) => ({
          title: t(dir > 0 ? "indentTable" : "outdentTable"),
          icon: dir > 0 ? "indent-increase" : "indent-decrease",
          disabled: !this.host.canIndentTable?.(dir),
          run: () => {
            if (this.editing) this.commit();
            this.host.indentTable?.(dir);
          }
        }))
      ] : [],
      ...this.host.onDeleteTable ? [
        { separator: true },
        {
          title: t("deleteTable"),
          icon: "trash-2",
          danger: true,
          run: () => {
            if (this.editing) this.cancel();
            this.host.onDeleteTable?.();
          }
        }
      ] : []
    ];
  }
  /** 每列现在实际的宽度 */
  colWidths() {
    const k = this.scale();
    return Array.from(this.tableEl.querySelectorAll("col")).map((c) => c.getBoundingClientRect().width / k);
  }
  /**
   * 设置「列宽按比例缩放」（#10）：设过列宽的表格比正文宽时，各列按现在的比例缩到正好放下，不出横向滚动条。
   * 只改显示（col 的 style），文件里还是原来的像素列宽。每列最窄 MIN_FIT_COL，列太多缩不下的照样横向滚动
   */
  fitCols() {
    const tb = this.table;
    const t2 = this.tableEl;
    const cols = Array.from(t2.querySelectorAll("colgroup > col"));
    if (this.fitScale !== 1 || this.root.classList.contains("is-fit")) {
      cols.forEach((col, c) => {
        const w = widthOf(tb, c);
        col.style.width = w ? `${w}px` : "";
      });
      t2.style.removeProperty("width");
      this.root.classList.remove("is-fit");
      this.fitScale = 1;
    }
    if (this.root.dataset.defFit !== "1" || tb.meta.wide || !tb.meta.w?.some((x) => x != null) || this.resize) return;
    const avail = this.availWidth();
    const natural = t2.offsetWidth;
    if (avail <= 0 || !natural || natural <= avail + 1) return;
    const k = this.scale();
    const ws = cols.map((c) => c.getBoundingClientRect().width / k);
    const sum = ws.reduce((a, b) => a + b, 0);
    if (!sum) return;
    const f = avail / sum;
    const px = ws.map((w) => Math.max(MIN_FIT_COL, Math.floor(w * f)));
    cols.forEach((col, c) => col.style.width = `${px[c]}px`);
    t2.style.width = `${px.reduce((a, b) => a + b, 0)}px`;
    this.root.classList.add("is-fit");
    this.fitScale = f;
  }
  /** 正文给表格的宽度（量外层，表格自己比它宽时就要横向滚动） */
  availWidth() {
    const host = this.root.parentElement;
    return host ? host.clientWidth - 2 : 0;
  }
  /** 撑满页面：按现在各列的比例放大 / 缩小到正文的可用宽度 */
  fitWidths() {
    const ws = this.colWidths();
    const sum = ws.reduce((a, b) => a + b, 0) || 1;
    const host = this.root.parentElement;
    const avail = (host?.clientWidth ?? sum) - 4;
    return ws.map((w) => w / sum * avail);
  }
  rowMenu(p) {
    const tb = this.table;
    const head = p.r < headRows(tb);
    return [
      ...this.insertRowItems(p),
      { title: t("duplicateRow"), icon: "copy-plus", disabled: p.r === 0, run: () => this.apply(duplicateRow(tb, p.r), { r: p.r + 1, c: p.c }) },
      { separator: true },
      { title: t("moveRowUp"), icon: "arrow-up", disabled: head || moveRow(tb, p.r, p.r - 1) === tb, run: () => this.apply(moveRow(tb, p.r, p.r - 1), { r: p.r - 1, c: p.c }) },
      { title: t("moveRowDown"), icon: "arrow-down", disabled: head || moveRow(tb, p.r, p.r + 1) === tb, run: () => this.apply(moveRow(tb, p.r, p.r + 1), { r: p.r + 1, c: p.c }) },
      { separator: true },
      ...this.colorItems(Array.from({ length: colCount(tb) }, (_, c) => ({ r: p.r, c }))),
      { separator: true },
      // 选中了好几行时和插入一样按选区来
      this.isMulti() ? this.deleteItems(p)[0] : { title: p.r === 0 ? t("deleteHeadRow") : t("deleteRow"), icon: "trash-2", danger: true, disabled: deleteRow(tb, p.r) === tb, run: () => this.apply(deleteRow(tb, p.r), { r: Math.min(p.r, rowCount(tb) - 2), c: p.c }) }
    ];
  }
  colMenu(p) {
    const tb = this.table;
    return [
      ...this.insertColItems(p),
      { title: t("duplicateCol"), icon: "copy-plus", run: () => this.apply(duplicateCol(tb, p.c), { r: p.r, c: p.c + 1 }) },
      { separator: true },
      ...this.calcItems(p.c),
      { title: t("colType").replace("{v}", t(`kind_${colKindOf(tb, p.c)}`)), icon: KIND_ICONS[colKindOf(tb, p.c)], run: () => this.openTypeMenu(p) },
      ...formulaOf(tb, p.c) ? [
        { title: t("fxEdit"), icon: "calculator", run: () => this.openFormula(p.c) },
        { title: t("fxOff"), icon: "calculator", run: () => this.apply(setFormula(tb, p.c, null), p) }
      ] : [{ title: t("fxOn"), icon: "calculator", run: () => this.openFormula(p.c) }],
      { separator: true },
      { title: t("sortAsc"), icon: "arrow-down-a-z", disabled: !canSortRows(tb), run: () => this.apply(sortRows(tb, p.c, false, this.hasTotalRow(), this.dateParser()), p) },
      { title: t("sortDesc"), icon: "arrow-up-z-a", disabled: !canSortRows(tb), run: () => this.apply(sortRows(tb, p.c, true, this.hasTotalRow(), this.dateParser()), p) },
      { separator: true },
      { title: t("moveColLeft"), icon: "arrow-left", disabled: p.c === 0, run: () => this.apply(moveCol(tb, p.c, p.c - 1), { r: p.r, c: p.c - 1 }) },
      { title: t("moveColRight"), icon: "arrow-right", disabled: p.c >= colCount(tb) - 1, run: () => this.apply(moveCol(tb, p.c, p.c + 1), { r: p.r, c: p.c + 1 }) },
      { separator: true },
      ...this.alignItems(p.c),
      { title: t("autoWidth"), icon: "move-horizontal", disabled: widthOf(tb, p.c) == null, run: () => this.apply(setWidth(tb, p.c, null), p) },
      { separator: true },
      ...this.colorItems(Array.from({ length: rowCount(tb) }, (_, r) => ({ r, c: p.c }))),
      { separator: true },
      this.isMulti() ? this.deleteItems(p)[1] : { title: t("deleteCol"), icon: "trash-2", danger: true, disabled: colCount(tb) <= 1, run: () => this.apply(deleteCol(tb, p.c), { r: p.r, c: Math.min(p.c, colCount(tb) - 2) }) }
    ];
  }
  cellMenu(p) {
    const tb = this.table;
    const multi = this.isMulti();
    const rect = this.rangeRect();
    const merged = mergeAt(tb, p.r, p.c);
    const mergeItems = [];
    if (multi && rect) mergeItems.push({ title: t("mergeCells"), icon: "combine", disabled: crossesHead(tb, rect), run: () => this.apply(mergeCells(tb, rect), { r: rect.r1, c: rect.c1 }) });
    if (merged) mergeItems.push({ title: t("unmergeCells"), icon: "split", run: () => this.apply(unmergeAt(tb, p.r, p.c), { r: merged.r1, c: merged.c1 }) });
    const cells = multi ? this.rangeCells() : [p];
    const cols = multi && rect ? Array.from({ length: rect.c2 - rect.c1 + 1 }, (_, i) => rect.c1 + i) : [p.c];
    return [
      ...this.insertRowItems(p, merged?.r2),
      ...this.insertColItems(p, merged?.c2),
      { separator: true },
      ...mergeItems,
      ...mergeItems.length ? [{ separator: true }] : [],
      ...this.alignItems(cols),
      { separator: true },
      ...this.statusColorItems(p),
      ...this.colorItems(cells),
      ...(() => {
        const sizes = new Set(cells.map((q) => fontSizeOf(tb, q.r, q.c) ?? 1));
        return this.sizeItems(t("fontSize"), sizes.size === 1 ? [...sizes][0] : void 0, (v) => this.applyKeepRange(setFontSize(this.table, cells, v)));
      })(),
      { separator: true },
      { title: CHECK_RE.test(tb.cells[p.r][p.c]) ? t("removeCheckbox") : t("addCheckbox"), icon: "square-check", disabled: multi, run: () => this.apply(setCell(tb, p.r, p.c, CHECK_RE.test(tb.cells[p.r][p.c]) ? tb.cells[p.r][p.c].replace(CHECK_RE, "").trimStart() : `[ ] ${tb.cells[p.r][p.c]}`.trimEnd()), p) },
      { title: t("clearCell"), icon: "eraser", disabled: !cells.some((c) => tb.cells[c.r][c.c]), run: () => this.apply(clearCells(tb, cells), this.sel ?? p) },
      ...this.deleteItems(p)
    ];
  }
  /**
   * 删除行 / 列：选区跨了几行（几列）就一次删几行（#4）；至少留下表头和一行、一列。
   * 只选着表头那一行时也能删，下一行变成表头（#17）；选了好几行时表头还是删不了
   */
  deleteItems(p) {
    const tb = this.table;
    const r = this.isMulti() && this.rangeRect() || { r1: p.r, c1: p.c, r2: p.r, c2: p.c };
    const rows = r.r2 - r.r1 + 1;
    const cols = r.c2 - r.c1 + 1;
    return [
      {
        title: rows > 1 ? t("deleteRows").replace("{n}", String(rows)) : r.r1 === 0 ? t("deleteHeadRow") : t("deleteRow"),
        icon: "trash-2",
        danger: true,
        disabled: rows === 1 ? deleteRow(tb, r.r1) === tb : r.r1 === 0 || rowCount(tb) - rows < 2 || deleteRow(tb, r.r2) === tb,
        run: () => this.runCommand("delete-row")
      },
      {
        title: cols > 1 ? t("deleteCols").replace("{n}", String(cols)) : t("deleteCol"),
        icon: "trash-2",
        danger: true,
        disabled: colCount(tb) - cols < 1,
        run: () => this.runCommand("delete-col")
      }
    ];
  }
  /** 插入行：选区跨了几行就一次插几行 */
  insertRowItems(p, below = p.r) {
    const tb = this.table;
    const r = this.rangeRect();
    const k = this.isMulti() && r ? r.r2 - r.r1 + 1 : 1;
    const top = this.isMulti() && r ? r.r1 : p.r;
    const bottom = this.isMulti() && r ? r.r2 : below;
    const n = (key) => t(key).replace("{n}", String(k));
    return [
      { title: n(k > 1 ? "insertRowsAbove" : "insertRowAbove"), icon: "arrow-up-to-line", disabled: top === 0, run: () => this.apply(insertRows(tb, top, k), { r: top, c: p.c }) },
      { title: n(k > 1 ? "insertRowsBelow" : "insertRowBelow"), icon: "arrow-down-to-line", run: () => this.apply(insertRows(tb, bottom + 1, k), { r: bottom + 1, c: p.c }) }
    ];
  }
  /** 插入列：选区跨了几列就一次插几列 */
  insertColItems(p, right = p.c) {
    const tb = this.table;
    const r = this.rangeRect();
    const k = this.isMulti() && r ? r.c2 - r.c1 + 1 : 1;
    const left = this.isMulti() && r ? r.c1 : p.c;
    const rr = this.isMulti() && r ? r.c2 : right;
    const n = (key) => t(key).replace("{n}", String(k));
    return [
      { title: n(k > 1 ? "insertColsLeft" : "insertColLeft"), icon: "arrow-left-to-line", run: () => this.apply(insertCols(tb, left, k), { r: p.r, c: left }) },
      { title: n(k > 1 ? "insertColsRight" : "insertColRight"), icon: "arrow-right-to-line", run: () => this.apply(insertCols(tb, rr + 1, k), { r: p.r, c: rr + 1 }) }
    ];
  }
  /** 列类型的二级菜单：普通、状态、多选、日期、数字、进度条，下面是这种类型的选项（日期写法、数字格式） */
  openTypeMenu(p) {
    const { x, y } = this.menuAt;
    const again = (next) => {
      this.apply(next, p);
      this.openTypeMenu(p);
    };
    this.openMenu(this.typeItems(p, again), x, y);
  }
  typeItems(p, again) {
    const tb = this.table;
    const c = p.c;
    const kind = colKindOf(tb, c);
    const fx = !!formulaOf(tb, c);
    const kinds = fx ? ["text", "num"] : COL_KINDS;
    const items = [{ title: fx ? t("colTypeFx") : t("colTypeTitle") }];
    for (const k of kinds) items.push({ title: t(`kind_${k}`), icon: KIND_ICONS[k], checked: kind === k, run: () => k === "text" || k === "status" || k === "multi" ? this.apply(setColKind(tb, c, k), p) : again(setColKind(tb, c, k)) });
    const ty = colTypeOf(tb, c);
    if (ty?.t === "date") {
      const set = (f) => again(setColType(tb, c, f ? { t: "date", f } : { t: "date" }));
      items.push({ separator: true }, { title: t("dateStyle") });
      items.push({ title: "2026-11-17", checked: !ty.f, run: () => set(void 0) });
      items.push({ title: "2026/11/17", checked: ty.f === "slash", run: () => set("slash") });
      items.push({ title: t("dateLink"), checked: ty.f === "link", run: () => set("link") });
    }
    if (ty?.t === "num") {
      const set = (patch) => {
        const n = { ...ty, ...patch };
        for (const k of Object.keys(n)) if (n[k] === void 0) delete n[k];
        again(setColType(tb, c, n));
      };
      items.push({ separator: true }, { title: t("numFormat") });
      items.push({ title: t("numGroup"), checked: !!ty.g, run: () => set({ g: ty.g ? void 0 : 1 }) });
      items.push({ title: t("numPercent"), checked: !!ty.p, run: () => set({ p: ty.p ? void 0 : 1, u: void 0 }) });
      items.push({ rowLabel: t("numCurrency"), chipText: t("numNone"), title: t("numNone"), checked: !ty.u, run: () => set({ u: void 0 }) });
      for (const u of CURRENCIES) items.push({ chipText: u, title: u, checked: ty.u === u, run: () => set(ty.u ? { u } : { u, p: void 0, g: 1, d: ty.d ?? 2 }) });
      if (!fx) {
        items.push({ separator: true });
        items.push({ rowLabel: t("numDecimals"), chipText: t("numAuto"), title: t("numAuto"), checked: ty.d === void 0, run: () => set({ d: void 0 }) });
        for (const d of [0, 1, 2, 3]) items.push({ chipText: String(d), title: String(d), checked: ty.d === d, run: () => set({ d }) });
      }
    }
    return items;
  }
  /** 状态列的格子：改这个状态的颜色（整列同一个状态一起变） */
  statusColorItems(p) {
    const raw = this.table.cells[p.r][p.c];
    const opts = this.table.meta.opts?.[p.c];
    if (!opts || !raw.trim() || p.r < headRows(this.table)) return [];
    const values = colTypeOf(this.table, p.c)?.t === "multi" ? splitTags(raw).slice(0, 3) : [raw.trim()];
    return values.flatMap((v) => [
      { title: t("statusColor").replace("{v}", v) },
      ...CELL_COLORS.map((color) => ({ swatch: color, title: t(color), checked: opts[v] === color, run: () => this.applyKeepRange(setOptionColor(this.table, p.c, v, color)) })),
      { separator: true }
    ]);
  }
  /** 合计：这一列怎么算（求和、平均……），勾着的是现在的 */
  calcItems(c) {
    const cur = this.table.meta.calc?.[c] ?? null;
    const item = (how) => ({
      title: how ? t(`calc_${how}`) : t("calc_none"),
      checked: cur === how,
      disabled: !how && !cur,
      run: () => this.apply(setCalc(this.table, c, how, { sum: t("totalLabel"), mixed: t("totalLabelMixed") }), this.sel ?? void 0)
    });
    return [{ title: t("calcTitle") }, ...CALCS.map((x) => item(x)), item(null), { separator: true }];
  }
  /** 有没有合计行 */
  hasTotalRow() {
    return hasTotal(this.table);
  }
  /** 对齐（一列或选区里的几列） */
  alignItems(c) {
    const cols = Array.isArray(c) ? c : [c];
    const cur = new Set(cols.map((x) => this.table.align[x] ?? "left"));
    const one = cur.size === 1 ? [...cur][0] : null;
    const keep = () => ({ sel: this.sel, anchor: this.anchor });
    const item = (a, title, icon) => ({
      title,
      icon,
      inline: true,
      checked: one === a,
      run: () => {
        const k = keep();
        let next = this.table;
        for (const x of cols) next = setAlign(next, x, a);
        this.apply(next, k.sel ?? void 0);
        if (k.anchor) {
          this.anchor = k.anchor;
          this.markSel();
        }
      }
    });
    const vCur = new Set(cols.map((x) => vAlignOf(this.table, x)));
    const vOne = vCur.size === 1 ? [...vCur][0] : void 0;
    const vItem = (v) => {
      const val = v === "top" ? null : v;
      return {
        title: t(`vAlign_${v}`),
        icon: V_ICONS[v],
        inline: true,
        checked: vOne === val,
        run: () => {
          const k = keep();
          let next = this.table;
          for (const x of cols) next = setVAlign(next, x, val);
          this.apply(next, k.sel ?? void 0);
          if (k.anchor) {
            this.anchor = k.anchor;
            this.markSel();
          }
        }
      };
    };
    return [
      { title: t("align") },
      item("left", t("alignLeft"), "align-left"),
      item("center", t("alignCenter"), "align-center"),
      item("right", t("alignRight"), "align-right"),
      vItem("top"),
      vItem("middle"),
      vItem("bottom")
    ];
  }
  /** 底色：一排色块，标题是「底色」 */
  colorItems(cells) {
    const current = new Set(cells.map((p) => bgOf(this.table, p.r, p.c) ?? "none"));
    const one = current.size === 1 ? [...current][0] : null;
    const fgs = new Set(cells.map((p) => fgOf(this.table, p.r, p.c) ?? "none"));
    const oneFg = fgs.size === 1 ? [...fgs][0] : null;
    return [
      { title: t("color") },
      { swatch: "none", title: t("noColor"), checked: one === "none", run: () => this.applyKeepRange(setBg(this.table, cells, null)) },
      ...CELL_COLORS.map((color) => ({ swatch: color, title: t(color), checked: one === color, run: () => this.applyKeepRange(setBg(this.table, cells, color)) })),
      { title: t("textColor") },
      { swatch: "none", textSwatch: true, title: t("defaultText"), checked: oneFg === "none", run: () => this.applyKeepRange(setFg(this.table, cells, null)) },
      ...CELL_COLORS.map((color) => ({ swatch: color, textSwatch: true, title: t(color), checked: oneFg === color, run: () => this.applyKeepRange(setFg(this.table, cells, color)) }))
    ];
  }
  /** 文字大小：一排大小不同的「A」。current 是现在的倍数（几格不一样时是 undefined，哪个都不勾） */
  sizeItems(title, current, set) {
    const names = ["fontSize_xs", "fontSize_s", "fontSize_m", "fontSize_l", "fontSize_xl"];
    return FONT_SIZES.map((v, i) => ({ sizeChip: v, rowLabel: i === 0 ? title : void 0, title: t(names[i]), checked: current === v, run: () => set(v === 1 ? null : v) }));
  }
  /** 自己画的弹出菜单：样式统一，色块能排成一行，手机上也好点 */
  openMenu(items, x, y) {
    this.closePopover();
    this.menuAt = { x, y };
    const doc = this.root.ownerDocument;
    const pop = doc.body.appendChild(doc.createElement("div"));
    pop.className = "ggt-menu";
    pop.setAttribute("role", "menu");
    let swatches = null;
    for (const item of items) {
      if (item.separator) {
        swatches = null;
        if (pop.lastElementChild && !pop.lastElementChild.classList.contains("ggt-menu-sep")) pop.appendChild(doc.createElement("div")).className = "ggt-menu-sep";
        continue;
      }
      if (item.sizeChip || item.chipText) {
        if (!swatches || !swatches.classList.contains("ggt-menu-sizes")) {
          swatches = pop.appendChild(doc.createElement("div"));
          swatches.className = "ggt-menu-sizes";
          if (item.rowLabel) {
            const label = swatches.appendChild(doc.createElement("span"));
            label.className = "ggt-menu-sizes-label";
            label.textContent = item.rowLabel;
          }
        }
        const b2 = swatches.appendChild(doc.createElement("button"));
        b2.type = "button";
        b2.className = "ggt-size-chip" + (item.checked ? " is-checked" : "");
        b2.textContent = item.chipText ?? "A";
        if (item.sizeChip) b2.setCssProps({ "--ggt-chip": String(item.sizeChip) });
        b2.disabled = !!item.disabled;
        b2.setAttribute("aria-label", item.title ?? "");
        b2.title = item.title ?? "";
        b2.addEventListener("click", () => {
          this.closePopover();
          item.run?.();
        });
        continue;
      }
      if (item.swatch) {
        if (!swatches || !swatches.classList.contains("ggt-menu-swatches")) {
          swatches = pop.appendChild(doc.createElement("div"));
          swatches.className = "ggt-menu-swatches";
        }
        const b2 = swatches.appendChild(doc.createElement("button"));
        b2.type = "button";
        b2.className = "ggt-swatch" + (item.checked ? " is-checked" : "") + (item.textSwatch ? " is-text" : "");
        if (item.textSwatch) {
          b2.dataset.fg = item.swatch;
          b2.textContent = "A";
        } else b2.dataset.bg = item.swatch;
        b2.setAttribute("aria-label", item.title ?? "");
        b2.title = item.title ?? "";
        b2.addEventListener("click", () => {
          this.closePopover();
          item.run?.();
        });
        continue;
      }
      if (item.inline && item.run) {
        if (!swatches || !swatches.classList.contains("ggt-menu-icons")) {
          swatches = pop.appendChild(doc.createElement("div"));
          swatches.className = "ggt-menu-icons";
        }
        if (item.inline && swatches.childElementCount && swatches.lastElementChild.dataset.group !== (item.icon?.startsWith("align-vertical") ? "v" : "h")) swatches.appendChild(doc.createElement("span")).className = "ggt-menu-icons-sep";
        const b2 = swatches.appendChild(doc.createElement("button"));
        b2.type = "button";
        b2.className = "ggt-menu-item is-icon" + (item.checked ? " is-checked" : "");
        b2.dataset.group = item.icon?.startsWith("align-vertical") ? "v" : "h";
        b2.disabled = !!item.disabled;
        b2.setAttribute("role", "menuitem");
        b2.setAttribute("aria-label", item.title ?? "");
        b2.title = item.title ?? "";
        if (item.icon && this.host.setIcon) this.host.setIcon(b2, item.icon);
        else b2.textContent = (item.title ?? "").slice(0, 2);
        b2.addEventListener("click", () => {
          this.closePopover();
          item.run?.();
        });
        continue;
      }
      if (swatches?.classList.contains("ggt-menu-icons")) swatches = null;
      if (!item.run) {
        swatches = null;
        const label = pop.appendChild(doc.createElement("div"));
        label.className = "ggt-menu-label";
        label.textContent = item.title ?? "";
        continue;
      }
      const b = pop.appendChild(doc.createElement("button"));
      b.type = "button";
      b.className = "ggt-menu-item" + (item.danger ? " is-danger" : "") + (item.checked ? " is-checked" : "");
      b.disabled = !!item.disabled;
      b.setAttribute("role", "menuitem");
      const ic = b.appendChild(doc.createElement("span"));
      ic.className = "ggt-menu-icon";
      if (item.icon && this.host.setIcon) this.host.setIcon(ic, item.icon);
      else if (item.iconNode) ic.appendChild(item.iconNode.cloneNode(true));
      b.appendChild(doc.createElement("span")).textContent = item.title ?? "";
      if (item.checked) {
        const ck = b.appendChild(doc.createElement("span"));
        ck.className = "ggt-menu-check";
        if (this.host.setIcon) this.host.setIcon(ck, "check");
        else ck.textContent = "\u2713";
      }
      b.addEventListener("click", () => {
        this.closePopover();
        item.run?.();
      });
    }
    if (pop.lastElementChild?.classList.contains("ggt-menu-sep")) pop.lastElementChild.remove();
    const vw = doc.documentElement.clientWidth;
    const vh = doc.documentElement.clientHeight;
    const r = pop.getBoundingClientRect();
    pop.style.left = `${Math.max(8, Math.min(x, vw - r.width - 8))}px`;
    pop.style.top = `${Math.max(8, y + r.height > vh - 8 ? Math.max(8, y - r.height) : y)}px`;
    pop.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        ev.stopPropagation();
        this.closePopover();
        this.input.focus();
      }
    });
    this.popover = pop;
  }
  closePopover() {
    this.popover?.remove();
    this.popover = null;
  }
  /**
   * 合计行的格子：鼠标停上去说是怎么算的；各列不全是求和时（混着平均、最大、计数），数字前面加个小标签（B 站 lucent2019）。
   * 标签只是显示，格子里还是纯数字
   */
  markCalc(cell, content, c) {
    const how = this.table.meta.calc?.[c];
    if (!how) return;
    cell.title = t(`calc_${how}`);
    if (totalsAllSum(this.table)) return;
    const tag = this.root.ownerDocument.createElement("span");
    tag.className = "ggt-calc-tag";
    tag.textContent = t(`calc_${how}`);
    content.prepend(tag);
  }
  // ---------- 计算列 ----------
  /** 公式出错 / 某一格算不出来的原因 */
  fxText(e) {
    const key = "code" in e ? `fxErr_${e.code}` : `fxEmpty_${e.reason}`;
    return t(key).replace("{name}", e.name ?? "");
  }
  /** 计算列：表头（最后一行）挂 ƒx 标记，数据格加上样式，空着的格子鼠标停上去说原因 */
  markFx(cell, r, c) {
    const tb = this.table;
    if (r === headRows(tb) - 1) {
      const err = formulaError(tb, c);
      const badge = cell.appendChild(this.root.ownerDocument.createElement("span"));
      badge.className = "ggt-fx-badge" + (err ? " is-error" : "");
      badge.appendChild(this.root.ownerDocument.createElement("span")).textContent = "\u0192x";
      badge.title = err ? this.fxText(err) : t("fxBadgeTitle").replace("{f}", formulaOf(tb, c) ?? "");
      cell.classList.add("has-fx");
      if (!this.host.readonly) {
        badge.addEventListener("click", (ev) => {
          ev.stopPropagation();
          this.openFormula(c);
        });
      }
      return;
    }
    if (!isFxCell(tb, r, c)) return;
    cell.classList.add("is-fx");
    if (!tb.cells[r][c]) {
      const note = fxCellNote(tb, r, c);
      if (note) cell.title = this.fxText(note);
    }
  }
  /** 计算列的公式编辑框：挂在这一列的表头下面。输入 { 补全列名、点列名插入、边输入边用第一行数据预览 */
  openFormula(c) {
    if (this.host.readonly) return;
    if (this.editing) this.commit();
    this.closePopover();
    const tb = this.table;
    const doc = this.root.ownerDocument;
    const names = columnNames(tb);
    const usable = names.filter((n, i) => i !== c && nameOk(n) && names.indexOf(n) === names.lastIndexOf(n));
    let places = fxPlacesOf(tb, c);
    const el = (parent, tag, cls, text) => {
      const e = parent.appendChild(doc.createElement(tag));
      e.className = cls;
      if (text !== void 0) e.textContent = text;
      return e;
    };
    const pop = doc.body.appendChild(doc.createElement("div"));
    pop.className = "ggt-menu ggt-fx";
    el(pop, "div", "ggt-fx-title", `${names[c] || t("fxThisCol")} =`);
    const input = el(pop, "input", "ggt-fx-input");
    input.type = "text";
    input.spellcheck = false;
    input.value = formulaOf(tb, c) ?? "";
    input.placeholder = usable.length >= 2 ? `{${usable[0]}} * {${usable[1]}}` : usable.length ? `{${usable[0]}} * 2` : "1 + 2";
    const list = el(pop, "div", "ggt-fx-suggest");
    const chips = el(pop, "div", "ggt-fx-chips");
    el(chips, "span", "ggt-fx-label", usable.length ? t("fxInsert") : t("fxNoNames"));
    for (const name of usable) {
      const b = el(chips, "button", "ggt-fx-chip", name);
      b.type = "button";
      b.addEventListener("click", () => insert(`{${name}}`));
    }
    el(pop, "div", "ggt-fx-hint", t("fxHint"));
    const placeRow = el(pop, "div", "ggt-fx-places");
    el(placeRow, "span", "ggt-fx-label", t("fxPlaces"));
    const placeBtns = [];
    for (const v of [null, 0, 1, 2, 3]) {
      const b = el(placeRow, "button", "ggt-fx-place", v === null ? t("fxAuto") : String(v));
      b.type = "button";
      b.dataset.v = String(v);
      b.addEventListener("click", () => {
        places = v;
        update();
        input.focus();
      });
      placeBtns.push(b);
    }
    const preview = el(pop, "div", "ggt-fx-preview");
    const actions = el(pop, "div", "ggt-fx-actions");
    const cancel = el(actions, "button", "ggt-fx-cancel", t("fxCancel"));
    cancel.type = "button";
    const ok = el(actions, "button", "ggt-fx-ok mod-cta", t("fxOk"));
    ok.type = "button";
    let picks = [];
    let active = 0;
    const brace = () => {
      const pos = input.selectionStart ?? input.value.length;
      const before = input.value.slice(0, pos).replace(/｛/g, "{").replace(/｝/g, "}");
      const i = before.lastIndexOf("{");
      if (i < 0 || before.lastIndexOf("}") > i) return null;
      return { start: i, end: pos, q: before.slice(i + 1).trim().toLowerCase() };
    };
    const showList = () => {
      const b = brace();
      picks = b ? usable.filter((n) => n.toLowerCase().includes(b.q)) : [];
      active = Math.min(active, Math.max(0, picks.length - 1));
      list.replaceChildren();
      list.classList.toggle("is-shown", picks.length > 0);
      picks.forEach((name, i) => {
        const it = el(list, "div", "ggt-suggest-item" + (i === active ? " is-active" : ""), name);
        it.addEventListener("pointerdown", (ev) => {
          ev.preventDefault();
          pick(name);
        });
      });
    };
    const pick = (name) => {
      const b = brace();
      if (!b) return;
      let rest = input.value.slice(b.end);
      if (/^\s*[}｝]/.test(rest)) rest = rest.replace(/^\s*[}｝]/, "");
      input.value = input.value.slice(0, b.start) + `{${name}}` + rest;
      const at = b.start + name.length + 2;
      input.setSelectionRange(at, at);
      update();
    };
    const insert = (text) => {
      const a = input.selectionStart ?? input.value.length;
      const b = input.selectionEnd ?? a;
      input.value = input.value.slice(0, a) + text + input.value.slice(b);
      input.focus();
      input.setSelectionRange(a + text.length, a + text.length);
      update();
    };
    const update = () => {
      placeBtns.forEach((b) => b.classList.toggle("is-checked", b.dataset.v === String(places)));
      const src = input.value;
      const res = checkFormula(this.table, c, src, places);
      preview.classList.remove("is-error");
      if ("error" in res) {
        ok.disabled = true;
        preview.textContent = src.trim() ? this.fxText(res.error) : t("fxStart");
        preview.classList.toggle("is-error", !!src.trim());
      } else {
        ok.disabled = false;
        const vals = new Map(res.refs.map((x) => [x.name, x.value]));
        const expr = prettyOps(src.trim()).replace(/[{｛]([^}｝]*)[}｝]/g, (_, n) => {
          const v = vals.get(n.trim());
          return v === null || v === void 0 ? t("fxBlank") : formatFx(v, null);
        });
        if (headRows(this.table) >= rowCount(this.table) - (hasTotal(this.table) ? 1 : 0)) preview.textContent = t("fxNoRows");
        else if (res.result !== null) preview.textContent = t("fxPreview").replace("{expr}", expr).replace("{v}", res.result);
        else preview.textContent = t("fxPreviewEmpty").replace("{why}", res.empty ? this.fxText(res.empty) : "");
      }
      showList();
    };
    const close = () => {
      this.closePopover();
      this.input.focus();
    };
    const confirm = () => {
      if (ok.disabled) return;
      const src = input.value.trim();
      this.closePopover();
      this.apply(setFormula(this.table, c, src, places), this.sel ?? { r: headRows(this.table) - 1, c });
      this.input.focus();
    };
    cancel.addEventListener("click", close);
    ok.addEventListener("click", confirm);
    input.addEventListener("input", update);
    input.addEventListener("click", showList);
    input.addEventListener("keyup", (ev) => {
      if (ev.key === "ArrowLeft" || ev.key === "ArrowRight" || ev.key === "Home" || ev.key === "End") showList();
    });
    pop.addEventListener("keydown", (ev) => {
      if (ev.isComposing) return;
      const listOpen = picks.length > 0 && ev.target === input;
      if (listOpen && (ev.key === "ArrowDown" || ev.key === "ArrowUp")) {
        ev.preventDefault();
        active = (active + (ev.key === "ArrowDown" ? 1 : -1) + picks.length) % picks.length;
        showList();
      } else if (listOpen && (ev.key === "Enter" || ev.key === "Tab")) {
        ev.preventDefault();
        pick(picks[active]);
      } else if (ev.key === "Escape") {
        ev.preventDefault();
        if (listOpen) {
          picks = [];
          list.classList.remove("is-shown");
        } else close();
      } else if (ev.key === "Enter" && ev.target === input) {
        ev.preventDefault();
        confirm();
      } else return;
      ev.stopPropagation();
    });
    const anchor = this.cellEl({ r: headRows(tb) - 1, c }) ?? this.root;
    const ar = anchor.getBoundingClientRect();
    const vw = doc.documentElement.clientWidth;
    const vh = doc.documentElement.clientHeight;
    const pr = pop.getBoundingClientRect();
    pop.style.left = `${Math.max(8, Math.min(ar.left, vw - pr.width - 8))}px`;
    pop.style.top = `${ar.bottom + 4 + pr.height > vh - 8 ? Math.max(8, ar.top - 4 - pr.height) : ar.bottom + 4}px`;
    this.popover = pop;
    update();
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
};
var searchMarkLayer = null;
var searchMarkCell = null;
function clearSearchMark() {
  window.CSS?.highlights?.delete("ggt-search");
  searchMarkLayer?.remove();
  searchMarkLayer = null;
  searchMarkCell?.classList.remove("is-search-hit");
  searchMarkCell = null;
}
function findTextRange(root, text, k) {
  const doc = root.ownerDocument;
  const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let all = "";
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    nodes.push(n);
    all += n.data;
  }
  const hits = [];
  for (let i = all.indexOf(text); i >= 0; i = all.indexOf(text, i + text.length)) hits.push(i);
  if (!hits.length) return null;
  const start = hits[Math.min(k, hits.length - 1)];
  const at = (pos) => {
    let acc = 0;
    for (const n of nodes) {
      if (pos <= acc + n.data.length) return [n, pos - acc];
      acc += n.data.length;
    }
    const last = nodes[nodes.length - 1];
    return [last, last.data.length];
  };
  const range = doc.createRange();
  const [sn, so] = at(start);
  const [en2, eo] = at(start + text.length);
  range.setStart(sn, so);
  range.setEnd(en2, eo);
  return range;
}
function htmlCellText(el) {
  const parts = [];
  const walk = (n) => {
    if (n.nodeType === 3) parts.push(n.textContent ?? "");
    else if (n.nodeName === "BR") parts.push("\n");
    else {
      const block = /^(P|DIV|LI)$/.test(n.nodeName) && parts.length && !parts[parts.length - 1].endsWith("\n");
      if (block) parts.push("\n");
      n.childNodes.forEach(walk);
    }
  };
  walk(el);
  return parts.join("").replace(/\u00a0/g, " ").trim();
}
function onWhite(color) {
  const m = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/.exec(color);
  if (!m) return /transparent/.test(color) ? null : color;
  let a = m[4] === void 0 ? 1 : parseFloat(m[4]);
  if (m[4]?.endsWith("%")) a /= 100;
  if (a <= 0) return null;
  const mix = (v) => Math.round(parseFloat(v) * a + 255 * (1 - a));
  return `rgb(${mix(m[1])}, ${mix(m[2])}, ${mix(m[3])})`;
}
function imageFrom(data) {
  for (const f of Array.from(data.files ?? [])) if (f.type.startsWith("image/")) return f;
  for (const it of Array.from(data.items ?? [])) {
    if (it.kind !== "file" || !it.type.startsWith("image/")) continue;
    const f = it.getAsFile();
    if (f) return f;
  }
  return null;
}
function gridFromClipboard(data, doc) {
  const html = data.getData("text/html");
  if (html && /data-ggt="1"/.test(html) && data.getData("text/plain")) return fromTSV(data.getData("text/plain"));
  if (html && /<table/i.test(html)) {
    const parsed = new (doc.defaultView ?? window).DOMParser().parseFromString(html, "text/html");
    const table = parsed.querySelector("table");
    if (table) {
      const grid = Array.from(table.querySelectorAll("tr")).map((tr) => Array.from(tr.querySelectorAll("td, th")).map(htmlCellText));
      if (grid.length && grid.some((r) => r.length)) return grid;
    }
  }
  const text = data.getData("text/plain");
  if (!text) return null;
  const lines = text.replace(/\r\n?/g, "\n").trim().split("\n");
  if (lines.length >= 2 && lines[0].includes("|") && isDelimiterRow(lines[1])) {
    const t2 = parseTable(lines);
    if (t2) return t2.cells;
  }
  return fromTSV(text);
}

// src/obsidian/insert.ts
var import_obsidian = require("obsidian");
var MAX_R = 10;
var MAX_C = 8;
function insertTableText(editor, lines) {
  const cur = editor.getCursor();
  const line = editor.getLine(cur.line);
  const prevBlank = cur.line === 0 || editor.getLine(cur.line - 1).trim() === "";
  if (line.trim() === "") {
    const text = (prevBlank ? "" : "\n") + lines.join("\n") + "\n";
    editor.replaceRange(text, { line: cur.line, ch: 0 }, { line: cur.line, ch: line.length });
    editor.setCursor({ line: cur.line + (prevBlank ? 0 : 1) + lines.length, ch: 0 });
  } else {
    const text = "\n\n" + lines.join("\n") + "\n";
    editor.replaceRange(text, { line: cur.line, ch: line.length });
    editor.setCursor({ line: cur.line + 2 + lines.length, ch: 0 });
  }
}
var GridModal = class extends import_obsidian.Modal {
  constructor(app, pick) {
    super(app);
    this.pick = pick;
  }
  onOpen() {
    this.titleEl.setText(t("gridTitle"));
    this.modalEl.addClass("ggt-grid-modal");
    const grid = this.contentEl.createDiv({ cls: "ggt-grid" });
    const hint = this.contentEl.createDiv({ cls: "ggt-grid-hint" });
    const cells = [];
    const mark = (r, c) => {
      cells.forEach((row, i) => row.forEach((el, j) => el.toggleClass("is-on", i <= r && j <= c)));
      hint.setText(t("gridHint").replace("{r}", String(r + 1)).replace("{c}", String(c + 1)));
    };
    for (let r = 0; r < MAX_R; r++) {
      const row = [];
      for (let c = 0; c < MAX_C; c++) {
        const el = grid.createDiv({ cls: "ggt-grid-cell" });
        el.addEventListener("pointerenter", () => mark(r, c));
        el.addEventListener("click", () => {
          this.close();
          this.pick(Math.max(2, r + 1), c + 1);
        });
        row.push(el);
      }
      cells.push(row);
    }
    mark(2, 2);
  }
  onClose() {
    this.contentEl.empty();
  }
};
function textToTable(text) {
  const raw = text.replace(/\r\n?/g, "\n").trim();
  if (!raw) return null;
  const rows = raw.includes("	") ? fromTSV(raw) : raw.split("\n").map(splitCSV);
  if (!rows.length) return null;
  const width2 = Math.max(...rows.map((r) => r.length));
  const t2 = emptyTable(Math.max(2, rows.length), width2);
  rows.forEach((row, i) => row.forEach((v, j) => t2.cells[i][j] = v.trim()));
  return t2;
}
function splitCSV(line) {
  const out = [];
  let cur = "";
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') q = false;
      else cur += ch;
    } else if (ch === '"' && !cur.trim()) q = true;
    else if (ch === "," || ch === "\uFF0C") {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

// src/obsidian/paste.ts
var import_language = require("@codemirror/language");

// src/core/find.ts
var TBLFM_RE = /^<!--\s*TBLFM:.*-->\s*$/;
var BLOCK_ID_RE = /^\^[A-Za-z0-9-]+\s*$/;
var FENCE_RE = /^[ \t]*(`{3,}|~{3,})/;
var LIST_RE = /^[ \t]*(?:[-*+]|\d{1,9}[.)])(?:[ \t]|$)/;
function indentOf(line) {
  return /^[ \t]*/.exec(line)[0];
}
function indentWidth(ws) {
  let w = 0;
  for (const ch of ws) w += ch === "	" ? 4 : 1;
  return w;
}
function strip(line, indent) {
  if (line === void 0 || !line.startsWith(indent)) return null;
  const rest = line.slice(indent.length);
  return /^\s/.test(rest) ? null : rest;
}
function ownerOf(lines, i, indent) {
  const w = indentWidth(indent);
  for (let j = i - 1; j >= 0; j--) {
    const l = lines[j];
    if (!l.trim()) continue;
    if (indentWidth(indentOf(l)) < w) return LIST_RE.test(l) ? j : null;
  }
  return null;
}
function rowLike(line) {
  if (!line.trim() || !line.includes("|")) return false;
  if (/^\s/.test(line) || line.startsWith(">") || line.startsWith("<!--")) return false;
  return true;
}
function blockBoundary(line) {
  const t2 = line.trim();
  return t2 === "" || /^#{1,6}\s/.test(t2) || t2.startsWith("<!--") && t2.endsWith("-->");
}
function findTables(lines) {
  const out = [];
  let i = 0;
  if (lines[0]?.trim() === "---") {
    const close = lines.findIndex((l, j) => j > 0 && (l.trim() === "---" || l.trim() === "..."));
    if (close > 0) i = close + 1;
  }
  let fence = null;
  for (; i < lines.length; i++) {
    const line = lines[i];
    const f = FENCE_RE.exec(line);
    if (fence) {
      if (f && f[1][0] === fence[0] && f[1].length >= fence.length && line.trim() === f[1].trim()) fence = null;
      continue;
    }
    if (f) {
      fence = f[1];
      continue;
    }
    const indent = indentOf(line);
    const head = line.slice(indent.length);
    const delim = strip(lines[i + 1], indent);
    if (!rowLike(head) || delim === null || !isDelimiterRow(delim)) continue;
    if (splitRow(head).length !== splitRow(delim).length) continue;
    let owner = null;
    if (indent) {
      owner = ownerOf(lines, i, indent);
      if (owner === null || indentWidth(indent) <= indentWidth(indentOf(lines[owner]))) continue;
      if (i - 1 !== owner && lines[i - 1].trim() !== "") continue;
    } else if (i > 0 && !blockBoundary(lines[i - 1])) {
      continue;
    }
    let end = i + 2;
    for (; ; ) {
      const row = strip(lines[end], indent);
      if (row === null || !rowLike(row)) break;
      end++;
    }
    const tail = [];
    let k = end;
    const at = (n) => strip(lines[n], indent);
    if (k < lines.length && BLOCK_ID_RE.test(at(k) ?? "")) {
      tail.push(at(k++));
      if (k < lines.length && lines[k].trim() === "") {
        tail.push("");
        k++;
      }
    } else {
      while (k < lines.length && TBLFM_RE.test(at(k) ?? "")) tail.push(at(k++));
    }
    const blockIdNoBlank = tail.length === 1 && BLOCK_ID_RE.test(tail[0]);
    const metaText = k < lines.length ? at(k) : null;
    const meta = !blockIdNoBlank && metaText !== null ? parseMetaLine(metaText) : null;
    const metaLine2 = meta ? k : null;
    const stop = meta ? k + 1 : k;
    out.push({ start: i, end, metaLine: metaLine2, meta, stop, tail, indent, owner });
    i = stop - 1;
  }
  return out;
}
function blockRows(lines, b) {
  return lines.slice(b.start, b.end).map((l) => l.slice(b.indent.length));
}
function writeBlock(t2, b) {
  return serializeBlock(t2, b.tail).map((l) => l === "" ? l : b.indent + l);
}
function blockTable(lines, b) {
  return parseTable(blockRows(lines, b), b.meta);
}

// src/obsidian/paste.ts
var squash = (s) => s.replace(/\s+/g, "");
function isTsvTable(text) {
  if (!text.includes("	")) return false;
  const rows = fromTSV(text.replace(/[\r\n]+$/, ""));
  if (rows.length < 2 || rows[0].length < 2 || !rows.every((r) => r.length === rows[0].length)) return false;
  return !rows.every((r) => r[0] === "");
}
function pastedGrid(data, doc) {
  const html = data.getData("text/html");
  const text = data.getData("text/plain");
  let ok = isTsvTable(text);
  if (!ok && html && /<table/i.test(html)) {
    const body = new (doc.defaultView ?? window).DOMParser().parseFromString(html, "text/html").body;
    const tables = body.querySelectorAll("table");
    ok = tables.length === 1 && squash(body.textContent ?? "") === squash(tables[0].textContent ?? "");
  }
  if (!ok) return null;
  const grid = gridFromClipboard(data, doc);
  if (!grid || grid.length < 2) return null;
  const width2 = Math.max(...grid.map((r) => r.length));
  return width2 >= 2 ? grid : null;
}
function pastedSource(data) {
  const html = data.getData("text/html");
  if (!html || !/data-ggt="1"/.test(html)) return null;
  const lines = sourceFromHTML(html);
  if (!lines) return null;
  const last = lines[lines.length - 1];
  const meta = parseMetaLine(last);
  const body = meta ? lines.slice(0, -1) : lines;
  const t2 = parseTable(body, meta);
  return t2 && t2.cells.length >= 2 ? lines : null;
}
function gridToTable(grid) {
  const width2 = Math.max(...grid.map((r) => r.length));
  const t2 = emptyTable(grid.length, width2);
  grid.forEach((row, i) => row.forEach((v, j) => t2.cells[i][j] = v.trim()));
  return t2;
}
function inFence(lines, line) {
  if (lines[0]?.trim() === "---") {
    const end = lines.findIndex((l, i) => i > 0 && /^(---|\.\.\.)\s*$/.test(l));
    if (end < 0 || line <= end) return true;
  }
  let fence = null;
  for (let i = 0; i < line; i++) {
    const m = /^\s*(`{3,}|~{3,}|\$\$)/.exec(lines[i]);
    if (!m) continue;
    const mark = m[1].startsWith("$") ? "$$" : m[1];
    if (fence === null) fence = mark;
    else if (mark[0] === fence[0] && mark.length >= fence.length) fence = null;
  }
  return fence !== null;
}
function canPasteTableAt(editor) {
  const from = editor.getCursor("from");
  const lines = Array.from({ length: editor.lineCount() }, (_, i) => editor.getLine(i));
  if (findTables(lines).some((b) => b.start <= from.line && from.line < b.stop)) return false;
  if (inFence(lines, from.line)) return false;
  const cm = editor.cm;
  if (!cm) return true;
  const pos = cm.state.selection.main.from;
  for (let n = (0, import_language.syntaxTree)(cm.state).resolveInner(pos, -1); n; n = n.parent) {
    if (/code|math|frontmatter|table/i.test(n.name)) return false;
  }
  const line = cm.state.doc.lineAt(pos);
  const head = line.text.slice(0, pos - line.from);
  if ((head.match(/`/g)?.length ?? 0) % 2 === 1 || (head.match(/\$/g)?.length ?? 0) % 2 === 1) return false;
  return true;
}
function insertTableAtSelection(editor, lines) {
  const from = editor.getCursor("from");
  const to = editor.getCursor("to");
  const before = editor.getRange({ line: from.line, ch: 0 }, from).replace(/\s+$/, "");
  const after = editor.getRange(to, { line: to.line, ch: editor.getLine(to.line).length }).replace(/^\s+/, "");
  const prevBlank = from.line === 0 || editor.getLine(from.line - 1).trim() === "";
  const nextBlank = to.line + 1 >= editor.lineCount() || editor.getLine(to.line + 1).trim() === "";
  const lead = before ? `${before}

` : prevBlank ? "" : "\n";
  const tail = after ? `

${after}` : nextBlank ? "" : "\n";
  editor.replaceRange(lead + lines.join("\n") + tail, { line: from.line, ch: 0 }, { line: to.line, ch: editor.getLine(to.line).length });
  const end = from.line + (lead.match(/\n/g)?.length ?? 0) + lines.length - 1;
  editor.setCursor({ line: Math.min(editor.lineCount() - 1, end + (after ? 2 : 1)), ch: 0 });
}

// src/obsidian/host.ts
var import_obsidian4 = require("obsidian");

// src/obsidian/keys.ts
var import_obsidian2 = require("obsidian");
var FORMAT_COMMANDS = {
  "editor:toggle-bold": "bold",
  "editor:toggle-italics": "italic",
  "editor:toggle-strikethrough": "strike",
  "editor:toggle-highlight": "highlight",
  "editor:insert-link": "link"
};
function editorHotkeys(app) {
  const a = app;
  const hm = a.hotkeyManager;
  const cmds = Object.values(a.commands?.commands ?? {});
  const out = [];
  for (const c of cmds) {
    if (!c.editorCallback && !c.editorCheckCallback) continue;
    const keys = hm?.getHotkeys(c.id) ?? hm?.getDefaultHotkeys(c.id) ?? [];
    out.push(...keys.map((k) => ({ ...k, command: c.id })));
  }
  return out;
}
var OWN = [
  { modifiers: ["Mod"], key: "B" },
  { modifiers: ["Mod"], key: "I" },
  { modifiers: ["Mod"], key: "K" },
  { modifiers: ["Mod", "Shift"], key: "X" },
  { modifiers: ["Mod", "Shift"], key: "H" }
];
var FALLBACK = ["B", "I", "K", "/", "L", "Enter", "]", "["].map((key) => ({ modifiers: ["Mod"], key }));
function guardEditorHotkeys(app, editor) {
  let scope = null;
  const onIn = () => {
    if (scope) return;
    scope = new import_obsidian2.Scope(app.scope);
    const list = editorHotkeys(app);
    const keys = [...list.length ? list : FALLBACK, ...OWN];
    const seen = /* @__PURE__ */ new Set();
    for (const hk of keys) {
      const id = [...hk.modifiers].sort().join("+") + "+" + hk.key.toLowerCase();
      if (seen.has(id)) continue;
      seen.add(id);
      const format = hk.command ? FORMAT_COMMANDS[hk.command] : void 0;
      scope.register(hk.modifiers, hk.key, (ev) => {
        if (!editor.formatKey(ev) && format) editor.formatCommand(format);
        return false;
      });
    }
    app.keymap.pushScope(scope);
  };
  const onOut = () => {
    if (!scope) return;
    app.keymap.popScope(scope);
    scope = null;
  };
  const root = editor.root;
  root.addEventListener("focusin", onIn);
  root.addEventListener("focusout", onOut);
  return () => {
    onOut();
    root.removeEventListener("focusin", onIn);
    root.removeEventListener("focusout", onOut);
  };
}

// src/obsidian/daily.ts
var import_obsidian3 = require("obsidian");
var mo = import_obsidian3.moment;
function noteFormat(app) {
  const internal = app.internalPlugins;
  const daily = internal?.getPluginById?.("daily-notes");
  const fmt2 = daily?.enabled !== false && daily?.instance?.options?.format || "YYYY-MM-DD";
  return fmt2.split("/").pop() || "YYYY-MM-DD";
}
function dailyNote(app) {
  return {
    name: (v) => mo({ year: v.y, month: v.m - 1, date: v.d }).format(noteFormat(app)),
    parse: (name) => {
      const m = mo(name, noteFormat(app), true);
      return m.isValid() ? { y: m.year(), m: m.month() + 1, d: m.date() } : null;
    }
  };
}

// src/obsidian/host.ts
var FORMAT_TEXT_COLORS = ["#e03e3e", "#2f80ed", "#27ae60"];
var FORMAT_HIGHLIGHT_COLORS = ["#ffd43b99", "#69db7c99", "#ff8fab99"];
var DEFAULT_SETTINGS = {
  enabled: true,
  preset: "default",
  density: "comfortable",
  crosshair: "off",
  formatBar: false,
  richEdit: false,
  smartDate: true,
  readingReadonly: true,
  fullWidth: false,
  fitCols: true,
  strictStyle: true,
  cellPadX: 10
};
function linkContextMenu(app, menu, linktext, sourcePath) {
  const ws = app.workspace;
  ws.handleLinkContextMenu?.(menu, linktext, sourcePath);
}
function foreignMenuItems(menu) {
  const raw = menu.items;
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const r of raw) {
    const title = r?.titleEl?.textContent?.trim();
    if (!title || r.submenu || typeof r.handleEvent !== "function" || r.dom?.hasClass("is-label")) continue;
    out.push({
      title,
      iconNode: r.iconEl?.firstElementChild ?? void 0,
      disabled: !!r.disabled,
      checked: !!r.checked,
      danger: !!r.dom?.hasClass("is-warning"),
      run: () => r.handleEvent?.(new MouseEvent("click"))
    });
  }
  return out;
}
async function copyImage(app, img, file) {
  try {
    const doc = img.ownerDocument;
    const win = doc.defaultView ?? window;
    const src = img.currentSrc || img.src;
    const toPng = (source, w, h) => {
      const canvas = doc.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d")?.drawImage(source, 0, 0);
      return new Promise((ok, fail) => canvas.toBlob((b) => b ? ok(b) : fail(new Error("toBlob")), "image/png"));
    };
    let blob = null;
    if (file) blob = new Blob([await app.vault.readBinary(file)], { type: file.extension.toLowerCase() === "png" ? "image/png" : "" });
    else if (/^https?:/i.test(src)) {
      const res = await (0, import_obsidian4.requestUrl)({ url: src });
      blob = new Blob([res.arrayBuffer], { type: res.headers["content-type"] ?? "" });
    }
    let png;
    if (blob?.type === "image/png") png = blob;
    else if (blob) {
      const bmp = await win.createImageBitmap(blob);
      png = await toPng(bmp, bmp.width, bmp.height);
    } else {
      await img.decode();
      png = await toPng(img, img.naturalWidth, img.naturalHeight);
    }
    await win.navigator.clipboard.write([new win.ClipboardItem({ "image/png": png })]);
    return true;
  } catch (e) {
    new import_obsidian4.Notice(e.message);
    return false;
  }
}
var shownMenu = null;
function keepMenu(menu) {
  shownMenu = menu;
  menu.onHide(() => {
    if (shownMenu === menu) shownMenu = null;
  });
}
function stamp(d = /* @__PURE__ */ new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}
function makeFactory(app, settings, persist = () => {
}) {
  const colorMemory = {
    last: (k) => settings().colorMemory?.last?.[k] ?? null,
    recent: (k) => settings().colorMemory?.recent?.[k] ?? [],
    remember: (k, c) => {
      var _a;
      const m = (_a = settings()).colorMemory ?? (_a.colorMemory = {});
      m.last = { ...m.last ?? {}, [k]: c };
      m.recent = { ...m.recent ?? {}, [k]: pushRecent(m.recent?.[k] ?? [], c) };
      persist();
    }
  };
  return {
    enabled: () => settings().enabled,
    readingReadonly: () => settings().readingReadonly,
    host: (sourcePath, owner, own) => {
      const hoverParent = { hoverPopover: null };
      return {
        renderMarkdown: (el, md) => {
          void import_obsidian4.MarkdownRenderer.render(app, md, el, sourcePath, owner);
        },
        setIcon: (el, name) => (0, import_obsidian4.setIcon)(el, name),
        notice: (message) => new import_obsidian4.Notice(message),
        // 格子里的双链：照 Obsidian 的习惯，⌘/Ctrl 点在新标签打开，⌘⌥ 点在右侧分屏
        openLink: (href, ev) => {
          void app.workspace.openLinkText(href, sourcePath, import_obsidian4.Keymap.isModEvent(ev));
        },
        // 悬停预览：和笔记里的链接一样（实时预览里要按住 ⌘/Ctrl，按「页面预览」设置）
        hoverLink: (event, linktext, targetEl) => {
          app.workspace.trigger("hover-link", {
            event,
            source: "editor",
            hoverParent,
            targetEl,
            linktext,
            sourcePath
          });
        },
        // 右键格子里的双链：和笔记里一样的原生菜单（新标签页打开、重命名、移动、在访达中显示……，别的插件加的项也在）
        // 用 Menu.forEvent：这次右键只有一个菜单，别的插件（比如 adjustable-media）往同一个右键事件里加的项也进这个菜单。
        // 自己 new Menu() 的话，别的插件会另弹一个菜单把这个顶掉，开着「原生菜单」时就什么都看不到（#9）。它会在下一刻自己弹出来
        linkMenu: (ev, href) => {
          const menu = import_obsidian4.Menu.forEvent(ev);
          keepMenu(menu);
          linkContextMenu(app, menu, href, sourcePath);
        },
        // 右键格子里的图片：复制图片 + 原生的文件菜单 + 删除图片（删文件前用 Obsidian 自己的确认框，删了再把格子里的嵌入去掉）
        imageMenu: (ev, img, link, remove) => {
          const menu = import_obsidian4.Menu.forEvent(ev);
          keepMenu(menu);
          const file = link ? app.metadataCache.getFirstLinkpathDest(link, sourcePath) : null;
          menu.addItem(
            (item) => item.setSection("action").setTitle(t("copyImage")).setIcon("copy").onClick(() => void copyImage(app, img, file).then((ok) => ok && new import_obsidian4.Notice(t("copiedImage"))))
          );
          if (link && file) linkContextMenu(app, menu, link, sourcePath);
          if (file && remove)
            menu.addItem(
              (item) => item.setSection("danger").setTitle(t("deleteImage")).setIcon("trash-2").setWarning(true).onClick(async () => {
                if (await app.fileManager.promptForDeletion(file)) remove();
              })
            );
        },
        dismissMenus: () => shownMenu?.hide(),
        // 右键普通格子：表格弹的是自己画的菜单。别的插件用 Menu.forEvent 往这次右键里加项，Obsidian 会另弹一个只有那几项的菜单
        // （开着「原生菜单」时还盖在表格菜单上面，#9）。这里先认领这次右键的菜单，不让它弹，把里面的项交给表格菜单
        eventMenuItems: (ev, take) => {
          const menu = import_obsidian4.Menu.forEvent(ev);
          menu.showAtMouseEvent = () => {
            take(foreignMenuItems(menu));
            return menu;
          };
        },
        // 粘贴的图片按 Obsidian 的附件设置存，名字和 Obsidian 自己粘贴的一样
        saveImage: async (file) => {
          try {
            const ext = (file.type.split("/")[1] || "png").replace("jpeg", "jpg").replace(/\+.*$/, "");
            const name = file.name && file.name !== "image.png" ? file.name : `Pasted image ${stamp()}.${ext}`;
            const path = await app.fileManager.getAvailablePathForAttachment(name, sourcePath);
            const saved = await app.vault.createBinary(path, await file.arrayBuffer());
            return `![[${app.metadataCache.fileToLinktext(saved, sourcePath)}]]`;
          } catch (e) {
            new import_obsidian4.Notice(e.message);
            return null;
          }
        },
        richEdit: () => settings().richEdit,
        smartDate: () => settings().smartDate,
        formatColors: () => settings().formatBar ? { text: FORMAT_TEXT_COLORS, highlight: FORMAT_HIGHLIGHT_COLORS } : null,
        colorMemory: () => colorMemory,
        dailyNote: () => dailyNote(app),
        // [[ 补全：笔记按名字找（名字开头的排前面），插的是 Obsidian 生成的最短链接
        suggestLinks: (query) => {
          const q = query.toLowerCase();
          const files = app.vault.getFiles().filter((f) => f.basename.toLowerCase().includes(q));
          files.sort((a, b) => Number(b.basename.toLowerCase().startsWith(q)) - Number(a.basename.toLowerCase().startsWith(q)) || a.basename.length - b.basename.length);
          return files.slice(0, 12).map((f) => {
            const text = app.metadataCache.fileToLinktext(f, sourcePath, true);
            return text;
          });
        },
        // # 补全：库里已有的标签
        suggestTags: (query) => {
          const q = query.toLowerCase();
          const all = Object.keys(
            app.metadataCache.getTags?.() ?? {}
          ).map((x) => x.replace(/^#/, ""));
          return all.filter((x) => x.toLowerCase().includes(q)).sort((a, b) => Number(b.toLowerCase().startsWith(q)) - Number(a.toLowerCase().startsWith(q)) || a.length - b.length).slice(0, 12);
        },
        ...own
      };
    },
    attach: (editor) => guardEditorHotkeys(app, editor),
    // 设置里的是默认值：表格自己在注释里定了样式就用表格的（编辑器收到 ggt-restyle 后重新套）
    style: (root) => {
      root.dataset.defPreset = settings().preset;
      root.dataset.defDensity = settings().density;
      root.dataset.cross = settings().crosshair;
      root.dataset.defFull = settings().fullWidth ? "1" : "";
      root.dataset.defFit = settings().fitCols ? "1" : "";
      root.dataset.defStrict = settings().strictStyle ? "1" : "";
      const pad2 = settings().cellPadX;
      if (pad2 !== 10 && [4, 6, 8].includes(pad2)) root.style.setProperty("--ggt-pad-user", `${pad2}px`);
      else root.style.removeProperty("--ggt-pad-user");
      root.dispatchEvent(new Event("ggt-restyle"));
    }
  };
}

// src/obsidian/live-preview.ts
var import_state3 = require("@codemirror/state");
var import_view3 = require("@codemirror/view");
var import_commands2 = require("@codemirror/commands");
var import_obsidian5 = require("obsidian");

// src/core/diff.ts
var isHigh = (s, i) => {
  const c = s.charCodeAt(i);
  return c >= 55296 && c <= 56319;
};
var isLow = (s, i) => {
  const c = s.charCodeAt(i);
  return c >= 56320 && c <= 57343;
};
function diffOne(a, b) {
  if (a === b) return null;
  const max = Math.min(a.length, b.length);
  let p = 0;
  while (p < max && a.charCodeAt(p) === b.charCodeAt(p)) p++;
  if (p > 0 && isHigh(a, p - 1)) p--;
  let s = 0;
  while (s < max - p && a.charCodeAt(a.length - 1 - s) === b.charCodeAt(b.length - 1 - s)) s++;
  if (s > 0 && isLow(a, a.length - s)) s--;
  return { from: p, to: a.length - s, insert: b.slice(p, b.length - s) };
}
function diffText(oldText, newText, base = 0) {
  if (oldText === newText) return [];
  const a = oldText.split("\n");
  const b = newText.split("\n");
  if (a.length !== b.length) {
    const d = diffOne(oldText, newText);
    return [{ from: base + d.from, to: base + d.to, insert: d.insert }];
  }
  const out = [];
  let at = base;
  for (let i = 0; i < a.length; i++) {
    const d = diffOne(a[i], b[i]);
    if (d) out.push({ from: at + d.from, to: at + d.to, insert: d.insert });
    at += a[i].length + 1;
  }
  return out;
}

// src/core/indent.ts
var LIST_RE2 = /^([ \t]*)((?:[-*+]|\d{1,9}[.)])(?:[ \t]+|$))/;
function indentOf2(line) {
  return /^[ \t]*/.exec(line)[0];
}
function width(ws) {
  let w = 0;
  for (const ch of ws) w += ch === "	" ? 4 : 1;
  return w;
}
function itemAbove(lines, start) {
  let j = start - 1;
  while (j >= 0 && !lines[j].trim()) j--;
  if (j < 0) return null;
  for (let k = j; k >= 0; k--) {
    const l = lines[k];
    if (!l.trim()) continue;
    if (LIST_RE2.test(l)) return k;
    if (!width(indentOf2(l))) return null;
  }
  return null;
}
function unitFor(lines, item) {
  const own = indentOf2(item);
  if (own.includes("	")) return "	";
  let spaces = 0;
  for (const l of lines) {
    const m = LIST_RE2.exec(l);
    if (!m || !m[1]) continue;
    if (m[1].includes("	")) return "	";
    if (!spaces || m[1].length < spaces) spaces = m[1].length;
  }
  return spaces ? " ".repeat(spaces) : "	";
}
function canIndent(lines, block, dir) {
  if (dir < 0) return block.owner !== null;
  const item = itemAbove(lines, block.start);
  return item !== null && item !== block.owner;
}
function indentTable(lines, block, dir) {
  if (!canIndent(lines, block, dir)) return null;
  const table = blockTable(lines, block);
  if (!table) return null;
  if (dir > 0) {
    const item = itemAbove(lines, block.start);
    const indent = indentOf2(lines[item]) + unitFor(lines, lines[item]);
    const body2 = writeBlock(table, { tail: block.tail, indent });
    let from = block.start;
    while (from - 1 > item && !lines[from - 1].trim()) from--;
    const out = [...lines.slice(0, from), ...body2, ...lines.slice(block.stop)];
    const next = from + body2.length;
    if (next < out.length && out[next].trim() && !width(indentOf2(out[next])) && !LIST_RE2.test(out[next])) out.splice(next, 0, "");
    return out;
  }
  const body = writeBlock(table, { tail: block.tail, indent: "" });
  const rest = [...lines.slice(0, block.start), ...lines.slice(block.stop)];
  let at = block.start;
  if (at > 0 && at < rest.length && !rest[at - 1].trim() && !rest[at].trim()) rest.splice(at, 1);
  let end = at;
  for (; end < rest.length; end++) {
    const l = rest[end];
    if (l.trim() && !width(indentOf2(l)) && !LIST_RE2.test(l)) break;
  }
  while (end > 0 && !rest[end - 1].trim()) end--;
  at = end;
  const ins = [...body];
  if (at > 0) ins.unshift("");
  if (at < rest.length && rest[at].trim()) ins.push("");
  rest.splice(at, 0, ...ins);
  return rest;
}

// src/obsidian/live-preview.ts
function docLines(doc) {
  const out = [];
  for (let i = 1; i <= doc.lines; i++) out.push(doc.line(i).text);
  return out;
}
var TableWidget = class extends import_view3.WidgetType {
  constructor(table, source, factory, depth = 0) {
    super();
    this.table = table;
    this.source = source;
    this.factory = factory;
    this.depth = depth;
    this.editor = null;
  }
  eq(other) {
    return other.source === this.source && other.depth === this.depth;
  }
  toDOM(view) {
    const wrap = document.createElement("div");
    wrap.className = "ggt-lp";
    if (this.depth) {
      wrap.classList.add("is-in-list");
      wrap.style.setProperty("--ggt-depth", String(this.depth));
    }
    for (const type of ["pointerdown", "pointerup", "mousedown", "mouseup", "click", "dblclick", "contextmenu", "keydown", "keyup", "keypress", "beforeinput", "input", "compositionstart", "compositionupdate", "compositionend", "focusin", "focusout", "paste", "copy", "cut", "dragstart", "drop"]) {
      wrap.addEventListener(type, (ev) => ev.stopPropagation());
    }
    const owner = new import_obsidian5.Component();
    owner.load();
    wrap.ggtOwner = owner;
    const editor = new TableEditor(wrap, this.table, this.factory.host(view.state.field(import_obsidian5.editorInfoField, false)?.file?.path ?? "", owner, {
      onChange: (next) => writeBack(view, wrap, next),
      undo: () => (0, import_commands2.undo)(view),
      redo: () => (0, import_commands2.redo)(view),
      onLeave: (where) => leave(view, wrap, where),
      onDeleteTable: () => removeTable(view, wrap),
      indentTable: (dir) => indentAt(view, wrap, dir),
      canIndentTable: (dir) => {
        const at = blockAt(view, wrap);
        return !!at && canIndent(docLines(view.state.doc), at.block, dir);
      }
    }));
    this.factory.style(editor.root);
    wrap.ggtCleanup = this.factory.attach(editor);
    this.editor = editor;
    wrap.ggtEditor = editor;
    return wrap;
  }
  /** 内容变了但还是这张表：沿用原来的编辑器，只换数据（不丢焦点、不闪） */
  updateDOM(dom) {
    const editor = dom.ggtEditor;
    if (!editor) return false;
    dom.classList.toggle("is-in-list", this.depth > 0);
    if (this.depth) dom.style.setProperty("--ggt-depth", String(this.depth));
    else dom.style.removeProperty("--ggt-depth");
    editor.update(this.table);
    this.editor = editor;
    return true;
  }
  destroy(dom) {
    const d = dom;
    d.ggtCleanup?.();
    d.ggtEditor?.destroy();
    d.ggtOwner?.unload();
  }
  ignoreEvent() {
    return true;
  }
  get estimatedHeight() {
    return 38 * this.table.cells.length + 40;
  }
};
var revealEffect = import_state3.StateEffect.define();
function cellOfRange(doc, tableFrom, from, to) {
  const first = doc.lineAt(tableFrom).number;
  const line = doc.lineAt(from);
  if (to > line.to) return null;
  const idx = line.number - first;
  if (idx === 1) return null;
  const r = idx === 0 ? 0 : idx - 1;
  const t2 = line.text;
  const off = from - line.from;
  const lead = t2.length - t2.trimStart().length;
  let pipes = 0;
  let cellStart = lead;
  for (let i = lead; i < off; i++) {
    if (t2[i] === "\\") {
      i++;
      continue;
    }
    if (t2[i] === "|") {
      pipes++;
      cellStart = i + 1;
    }
  }
  for (let i = off; i < to - line.from; i++) if (t2[i] === "|" && t2[i - 1] !== "\\") return null;
  const c = t2.trimStart().startsWith("|") ? pipes - 1 : pipes;
  if (c < 0) return null;
  const text = doc.sliceString(from, to);
  const before = t2.slice(cellStart, off);
  let k = 0;
  for (let i = before.indexOf(text); i >= 0; i = before.indexOf(text, i + text.length)) k++;
  return { r, c, text, k };
}
function findBarOpen(view) {
  const box = view.dom.closest(".workspace-leaf-content")?.querySelector(".document-search-container");
  return !!box && box.offsetParent !== null;
}
function findBarMatch(view, tables) {
  if (!tables || tables.size === 0) return null;
  const want = findBarOpen(view) ? ["obsidian-search-match-highlight", "is-flashing"] : ["is-flashing"];
  const sources = view.state.facet(import_view3.EditorView.decorations).map((d) => typeof d === "function" ? d(view) : d);
  let out = null;
  tables.between(0, view.state.doc.length, (tFrom, tTo, value) => {
    if (!value.spec.widget) return void 0;
    for (const set of sources) {
      set.between(tFrom, tTo, (from, to, d) => {
        const cls = d.spec.class ?? "";
        if (from >= tFrom && to <= tTo && to > from && want.some((w) => cls.split(/\s+/).includes(w))) {
          out = { tableFrom: tFrom, from, to };
          return false;
        }
        return void 0;
      });
      if (out) return false;
    }
    return void 0;
  });
  return out;
}
function blockAt(view, dom) {
  let pos;
  try {
    pos = view.posAtDOM(dom);
  } catch {
    return null;
  }
  const doc = view.state.doc;
  const line = doc.lineAt(Math.min(pos, doc.length)).number - 1;
  const block = findTables(docLines(doc)).find((b) => b.start <= line && line < b.end) ?? findTables(docLines(doc)).find((b) => b.start === line);
  if (!block) return null;
  const from = doc.line(block.start + 1).from;
  const to = doc.line(block.stop).to;
  return { block, from, to };
}
function writeBack(view, dom, table) {
  const at = blockAt(view, dom);
  if (!at) return;
  const text = writeBlock(table, at.block).join("\n");
  const old = view.state.sliceDoc(at.from, at.to);
  if (old === text) return;
  view.dispatch({ changes: diffText(old, text, at.from), userEvent: "input.table" });
}
function indentAt(view, dom, dir) {
  const at = blockAt(view, dom);
  if (!at) return;
  const doc = view.state.doc;
  const next = indentTable(docLines(doc), at.block, dir);
  if (!next) return;
  view.dispatch({ changes: diffText(doc.toString(), next.join("\n")), userEvent: "input.table" });
}
function removeTable(view, dom) {
  const at = blockAt(view, dom);
  if (!at) return;
  const doc = view.state.doc;
  let from = at.from;
  let to = at.to;
  if (to < doc.length) to += 1;
  else if (from > 0) from -= 1;
  const before = from > 0 ? doc.lineAt(from - 1) : null;
  const after = to < doc.length ? doc.lineAt(to) : null;
  if (before && after && before.text.trim() === "" && after.text.trim() === "") to = Math.min(doc.length, after.to + 1);
  view.dispatch({ changes: { from, to, insert: "" }, selection: { anchor: from }, userEvent: "delete.table" });
  view.focus();
}
function leave(view, dom, where) {
  const at = blockAt(view, dom);
  if (!at) return;
  const doc = view.state.doc;
  const pos = where === "above" ? Math.max(0, at.from - 1) : Math.min(doc.length, at.to + 1);
  view.dispatch({ selection: { anchor: where === "above" ? doc.lineAt(pos).from : pos }, scrollIntoView: true });
  view.focus();
}
function depthOf(indent) {
  let w = 0;
  for (const ch of indent) w += ch === "	" ? 4 : 1;
  return Math.round(w / 4);
}
function build2(state, factory) {
  if (!factory.enabled() || !state.field(import_obsidian5.editorLivePreviewField, false)) return import_view3.Decoration.none;
  const doc = state.doc;
  const lines = docLines(doc);
  const builder = new import_state3.RangeSetBuilder();
  for (const b of findTables(lines)) {
    const table = blockTable(lines, b);
    if (!table) continue;
    const from = doc.line(b.start + 1).from;
    const to = doc.line(b.end).to;
    const source = lines.slice(b.start, b.stop).join("\n");
    builder.add(from, to, import_view3.Decoration.replace({ block: true, widget: new TableWidget(table, source, factory, depthOf(b.indent)) }));
    if (b.metaLine !== null) {
      const m = doc.line(b.metaLine + 1);
      builder.add(m.from, m.to, import_view3.Decoration.replace({ block: true }));
    }
  }
  return builder.finish();
}
function livePreviewTables(factory) {
  const field = import_state3.StateField.define({
    create: (state) => build2(state, factory),
    update(deco, tr) {
      const lpChanged = tr.startState.field(import_obsidian5.editorLivePreviewField, false) !== tr.state.field(import_obsidian5.editorLivePreviewField, false);
      if (tr.docChanged || lpChanged) return build2(tr.state, factory);
      return deco;
    },
    provide: (f) => import_state3.Prec.highest(import_view3.EditorView.decorations.from(f))
  });
  const keepCursorOut = import_state3.Prec.highest(
    import_state3.EditorState.transactionFilter.of((tr) => {
      if (!tr.selection && !tr.docChanged) return tr;
      const deco = tr.state.field(field, false);
      if (!deco || deco.size === 0) return tr;
      const doc = tr.state.doc;
      let moved = false;
      let append = false;
      const pointer = !tr.docChanged && tr.isUserEvent("select.pointer");
      let reveal = null;
      const main = tr.state.selection.main;
      if (!tr.docChanged && !main.empty && !tr.annotation(import_state3.Transaction.userEvent)) {
        deco.between(main.from, main.from, (from, to, value) => {
          if (value.spec.widget && main.from >= from && main.to <= to) {
            reveal = { tableFrom: from, from: main.from, to: main.to };
            return false;
          }
          return void 0;
        });
      }
      const ranges = tr.state.selection.ranges.map((r) => {
        let head = r.head;
        let anchor = r.anchor;
        const out = (pos) => {
          let res = pos;
          let back = false;
          for (let guard = 0; guard < 8; guard++) {
            let hit = null;
            deco.between(res, res, (from, to) => {
              if (res >= from && res <= to) {
                hit = { from, to };
                return false;
              }
              return void 0;
            });
            if (!hit) break;
            const h = hit;
            moved = true;
            if (!back && h.to < doc.length) res = doc.lineAt(h.to + 1).from;
            else {
              if (!back && pointer && r.empty && pos >= h.from) {
                append = true;
                return doc.length + 1;
              }
              back = true;
              if (h.from === 0) return 0;
              res = h.from - 1;
            }
          }
          return res;
        };
        head = out(head);
        anchor = r.empty ? head : out(anchor);
        return import_state3.EditorSelection.range(anchor, head);
      });
      if (!moved) return tr;
      if (append) {
        return {
          changes: { from: doc.length, insert: "\n" },
          selection: import_state3.EditorSelection.create(ranges, tr.state.selection.mainIndex),
          effects: tr.effects,
          scrollIntoView: true,
          annotations: [import_state3.Transaction.userEvent.of("input.table")]
        };
      }
      return {
        changes: tr.changes,
        selection: import_state3.EditorSelection.create(ranges, tr.state.selection.mainIndex),
        effects: reveal ? [...tr.effects, revealEffect.of(reveal)] : tr.effects,
        scrollIntoView: tr.scrollIntoView,
        annotations: tr.annotation(import_state3.Transaction.userEvent) ? [import_state3.Transaction.userEvent.of(tr.annotation(import_state3.Transaction.userEvent))] : []
      };
    })
  );
  const blockReformat = import_state3.Prec.highest(
    import_state3.EditorState.transactionFilter.of((tr) => {
      if (!tr.docChanged || tr.isUserEvent("input.table") || tr.isUserEvent("undo") || tr.isUserEvent("redo")) return tr;
      const deco = tr.startState.field(field, false);
      if (!deco || deco.size === 0) return tr;
      const oldDoc = tr.startState.doc;
      const newDoc = tr.newDoc;
      let reformat = false;
      let other = false;
      tr.changes.iterChangedRanges((fromA, toA) => {
        let inTable = false;
        deco.between(fromA, toA, (from, to, value) => {
          if (!(value.spec.widget instanceof TableWidget)) return;
          if (toA < from || fromA > to) return;
          inTable = true;
          if (fromA < from || toA > to) {
            other = true;
            return;
          }
          const before = parseAt(oldDoc, from, to);
          const nf = tr.changes.mapPos(from, -1);
          const nt = tr.changes.mapPos(to, 1);
          const after = parseAt(newDoc, nf, nt);
          if (before && after && sameTable(before, after)) reformat = true;
          else other = true;
        });
        if (!inTable) other = true;
      });
      if (reformat && !other) return [];
      return tr;
    })
  );
  let shown = "";
  let fromBar = false;
  clearSearchMark();
  const revealListener = import_view3.EditorView.updateListener.of((u) => {
    let hit = null;
    for (const tr of u.transactions) for (const e of tr.effects) if (e.is(revealEffect)) hit = e.value;
    const bar = findBarOpen(u.view);
    if (!hit) hit = findBarMatch(u.view, u.state.field(field, false));
    if (!hit) {
      if (shown && (u.selectionSet || u.docChanged || bar || fromBar)) {
        shown = "";
        clearSearchMark();
      }
      return;
    }
    const key = `${hit.from}:${hit.to}`;
    if (key === shown && !u.docChanged) return;
    shown = key;
    fromBar = bar;
    const where = cellOfRange(u.state.doc, hit.tableFrom, hit.from, hit.to);
    if (!where) return;
    const view = u.view;
    const at = hit.tableFrom;
    view.dom.win.requestAnimationFrame(() => {
      let node = null;
      try {
        node = view.domAtPos(at + 1).node;
      } catch {
        return;
      }
      const el = node.instanceOf(HTMLElement) ? node : node.parentElement;
      const wrap = el?.closest(".ggt-lp") ?? el?.querySelector(".ggt-lp") ?? null;
      wrap?.ggtEditor?.showMatch(where.r, where.c, where.text, where.k);
    });
  });
  return [field, keepCursorOut, blockReformat, revealListener];
}
function parseAt(doc, from, to) {
  const a = doc.lineAt(Math.max(0, Math.min(from, doc.length))).number;
  const b = doc.lineAt(Math.max(0, Math.min(to, doc.length))).number;
  const lines = [];
  for (let i = a; i <= b; i++) lines.push(doc.line(i).text.trimStart());
  return parseTable(lines, null);
}

// src/obsidian/reading.ts
var import_obsidian6 = require("obsidian");
var TableChild = class extends import_obsidian6.MarkdownRenderChild {
  constructor() {
    super(...arguments);
    this.editor = null;
    /** 换下来的原生表格（或列表项那一段）：卸载时（关掉插件、重新加载）放回去，缓存着的段落不会变成空白 */
    this.original = null;
    /** 列表项那一段被拆成了「前半段、表格、后半段」：卸载时这几块一起换回原来的一段 */
    this.extra = [];
    /** 包着表格的 .el-table：接管期间加 ggt-el-table（样式里放开它的横向滚动，见 styles.css），卸载时去掉 */
    this.wrap = null;
  }
  onunload() {
    this.editor?.destroy();
    if (this.original) {
      for (const e of this.extra) e.remove();
      this.containerEl.replaceWith(this.original);
    }
    if (this.wrap && !this.wrap.querySelector(":scope > .ggt-reading")) this.wrap.removeClass("ggt-el-table");
  }
};
function markWrap(child, holder) {
  const wrap = holder.parentElement;
  if (!wrap?.hasClass("el-table")) return;
  wrap.addClass("ggt-el-table");
  child.wrap = wrap;
}
function spliceLines(p, first, count, holder) {
  const nodes = Array.from(p.childNodes);
  const rows = [[]];
  for (const n of nodes) {
    if (n.nodeName === "BR") rows.push([]);
    else rows[rows.length - 1].push(n);
  }
  if (rows.length < first + count) return null;
  const original = p.cloneNode(true);
  const after = p.ownerDocument.createElement("p");
  const rest = rows.slice(first + count);
  rest.forEach((row, i) => {
    if (i > 0) after.appendChild(p.ownerDocument.createElement("br"));
    for (const n of row) after.appendChild(n);
  });
  p.replaceChildren();
  rows.slice(0, first).forEach((row, i) => {
    if (i > 0) p.appendChild(p.ownerDocument.createElement("br"));
    for (const n of row) p.appendChild(n);
  });
  p.after(holder);
  const hasRest = Array.from(after.childNodes).some((n) => n.nodeName !== "#comment" && (n.textContent ?? "").trim() !== "");
  if (hasRest) holder.after(after);
  holder.ggtSplit = [p, ...hasRest ? [after] : []];
  return original;
}
function leadText(li) {
  const p = Array.from(li.children).find((c) => c.tagName === "P");
  if (p) return p;
  const lead = [];
  for (const n of Array.from(li.childNodes)) {
    if (n.nodeName === "UL" || n.nodeName === "OL") break;
    lead.push(n);
  }
  if (!lead.some((n) => n.nodeName === "BR")) return null;
  const span = li.ownerDocument.createElement("span");
  span.className = "ggt-li-text";
  lead[0].before(span);
  span.append(...lead);
  return span;
}
function locate(lines, base, near) {
  return findTables(lines).filter((b) => {
    const t2 = blockTable(lines, b);
    return t2 && sameTable(t2, base);
  }).map((b) => ({ from: b.start, to: b.stop, block: b, dist: Math.abs(b.start - near) })).sort((a, b) => a.dist - b.dist);
}
async function sectionText(app, ctx, text) {
  if (text) return text;
  let found = "";
  app.workspace.iterateAllLeaves((leaf) => {
    if (!found && leaf.view instanceof import_obsidian6.MarkdownView && leaf.view.file?.path === ctx.sourcePath) found = leaf.view.data;
  });
  if (found) return found;
  const file = app.vault.getAbstractFileByPath(ctx.sourcePath);
  return file instanceof import_obsidian6.TFile ? app.vault.cachedRead(file) : "";
}
function domSize(tableEl) {
  const rows = Array.from(tableEl.rows);
  return [rows.length, rows[0]?.cells.length ?? 0];
}
async function exportProcessor(app, factory, el, ctx, strict = false) {
  const file = app.vault.getAbstractFileByPath(ctx.sourcePath);
  if (!(file instanceof import_obsidian6.TFile)) return;
  const tables = Array.from(el.querySelectorAll("table")).filter(
    (t2) => !t2.closest(".ggt, blockquote, .callout, .internal-embed, .markdown-embed")
  );
  if (!tables.length) return;
  const lines = (await app.vault.cachedRead(file)).split("\n");
  const blocks = findTables(lines).filter((b) => !b.indent || lines[b.start - 1]?.trim() === "");
  const promises = ctx.promises;
  const local = [];
  const sized = [];
  const pairs2 = [];
  let bi = 0;
  for (const tableEl of tables) {
    const [rows, cols] = domSize(tableEl);
    let hit = -1;
    for (let j = bi; j < blocks.length; j++) {
      const t2 = blockTable(lines, blocks[j]);
      if (t2 && t2.cells.length === rows && (t2.cells[0]?.length ?? 0) === cols && (!strict || headerLooksSame(tableEl, t2))) {
        hit = j;
        break;
      }
    }
    const table = hit < 0 ? null : blockTable(lines, blocks[hit]);
    if (!table) {
      if (strict) return;
      continue;
    }
    bi = hit + 1;
    pairs2.push([tableEl, table]);
  }
  for (const [tableEl, table] of pairs2) {
    const holder = createDiv({ cls: "ggt-reading" });
    tableEl.replaceWith(holder);
    const child = new TableChild(holder);
    child.original = tableEl;
    markWrap(child, holder);
    ctx.addChild(child);
    const host = factory.host(ctx.sourcePath, child, { onChange: () => {
    }, readonly: true });
    if (host.renderMarkdown) {
      host.renderMarkdown = (cell, md) => {
        const p = import_obsidian6.MarkdownRenderer.render(app, md, cell, ctx.sourcePath, child);
        local.push(p);
        promises?.push(p);
      };
    }
    const editor = new TableEditor(holder, table, host);
    child.editor = editor;
    factory.style(editor.root);
    if (table.meta.w?.some((w) => w)) {
      if (strict) fitStoredWidths(editor.root, table.meta.w);
      else sized.push(editor);
    }
  }
  if (!sized.length) return;
  await Promise.all(local);
  for (const editor of sized) fitWidths(editor.root);
}
function fitWidths(root) {
  const tableEl = root.querySelector("table.ggt-table");
  const cols = tableEl ? Array.from(tableEl.querySelectorAll("colgroup > col")) : [];
  if (!tableEl || !cols.length) return;
  const widths2 = cols.map((_, c) => {
    let w = 0;
    tableEl.querySelectorAll(`.ggt-cell[data-c="${c}"]`).forEach((cell) => {
      if (cell.colSpan === 1) w = Math.max(w, cell.getBoundingClientRect().width);
    });
    return w;
  });
  const total = widths2.reduce((a, b) => a + b, 0);
  if (!total || widths2.some((w) => !w)) return;
  applyFit(tableEl, cols, widths2, total);
}
function applyFit(tableEl, cols, widths2, total) {
  cols.forEach((col, c) => col.setCssProps({ "--ggt-fit-col": `${(widths2[c] / total * 100).toFixed(3)}%` }));
  tableEl.setCssProps({ "--ggt-fit-w": `${Math.ceil(total)}px` });
  tableEl.addClass("ggt-fitted");
}
var squash2 = (s) => s.replace(/\s+/g, "");
function headerLooksSame(tableEl, table) {
  const head = tableEl.rows[0];
  if (!head) return false;
  return Array.from(head.cells).every((cell, c) => {
    const shown = squash2(cell.textContent ?? "");
    if (!shown || cell.querySelector(".math, img, .internal-embed, a")) return true;
    return squash2(table.cells[0]?.[c] ?? "").includes(shown);
  });
}
var pendingDetached = /* @__PURE__ */ new Map();
var detachedTimer = 0;
function queueDetached(app, factory, el, ctx) {
  pendingDetached.set(el, ctx);
  if (detachedTimer) return;
  detachedTimer = window.setTimeout(() => {
    detachedTimer = 0;
    const roots = /* @__PURE__ */ new Map();
    for (const [sec, c] of pendingDetached) {
      let root = sec;
      while (root.parentElement) root = root.parentElement;
      if (root.isConnected || roots.has(root)) continue;
      roots.set(root, c);
    }
    pendingDetached.clear();
    for (const [root, c] of roots) void exportProcessor(app, factory, root, c, true);
  }, 0);
}
function fitStoredWidths(root, stored) {
  const tableEl = root.querySelector("table.ggt-table");
  const cols = tableEl ? Array.from(tableEl.querySelectorAll("colgroup > col")) : [];
  if (!tableEl || !cols.length) return;
  const set = stored.filter((w) => !!w && w > 0);
  const avg = set.reduce((a, b) => a + b, 0) / set.length;
  const widths2 = cols.map((_, c) => stored[c] || avg);
  const total = widths2.reduce((a, b) => a + b, 0);
  applyFit(tableEl, cols, widths2, total);
}
function readingProcessor(app, factory) {
  return async (el, ctx) => {
    if (!factory.enabled()) return;
    const info = ctx.getSectionInfo(el);
    if (!info) {
      if (el.closest(".print")) await exportProcessor(app, factory, el, ctx);
      else if (!el.isConnected && el.querySelector("table")) queueDetached(app, factory, el, ctx);
      return;
    }
    const text = info.text || await sectionText(app, ctx, info.text);
    if (!text) return;
    const lines = text.split("\n");
    const blocks = findTables(lines).filter((b) => b.start >= info.lineStart && b.start <= info.lineEnd);
    if (!blocks.length) return;
    const native = blocks.filter((b) => !b.indent || lines[b.start - 1]?.trim() === "");
    const tables = Array.from(new Set(el.querySelectorAll("table")));
    const slots = [];
    native.forEach((block, i) => {
      const tableEl = tables[i];
      if (!tableEl || tableEl.closest(".ggt")) return;
      slots.push({
        block,
        mount: (holder) => {
          tableEl.replaceWith(holder);
          return tableEl;
        }
      });
    });
    for (const block of blocks) {
      if (native.includes(block) || block.owner === null) continue;
      const li = el.querySelector(`li[data-line="${block.owner - info.lineStart}"]`);
      if (!li || li.closest(".ggt")) continue;
      const owner = block.owner;
      slots.push({
        block,
        mount: (holder) => {
          const p = leadText(li);
          return p ? spliceLines(p, block.start - owner, block.end - block.start, holder) : null;
        }
      });
    }
    for (const { block, mount } of slots) {
      const table = blockTable(lines, block);
      if (!table) continue;
      const holder = createDiv({ cls: "ggt-reading" });
      const original = mount(holder);
      if (!original) continue;
      const child = new TableChild(holder);
      child.original = original;
      markWrap(child, holder);
      child.extra = holder.ggtSplit ?? [];
      ctx.addChild(child);
      const editor = new TableEditor(holder, table, factory.host(ctx.sourcePath, child, {
        // 设置「阅读视图里表格只读」（默认开）：和 Obsidian 的阅读视图一致，点格子不进编辑、没有手柄和加号
        readonly: factory.readingReadonly(),
        onChange: (next, prev) => {
          const file = app.vault.getAbstractFileByPath(ctx.sourcePath);
          if (!(file instanceof import_obsidian6.TFile)) return;
          const near = ctx.getSectionInfo(el)?.lineStart ?? block.start;
          let written = false;
          void app.vault.process(file, (data) => {
            const all = data.split("\n");
            const at = locate(all, prev, near)[0];
            if (!at) return data;
            all.splice(at.from, at.to - at.from, ...writeBlock(next, at.block));
            written = true;
            return all.join("\n");
          }).then(() => {
            if (!written) {
              editor.update(prev);
              return;
            }
            window.setTimeout(() => {
              if (!holder.isConnected) editor.update(prev);
            }, 800);
          });
        },
        // 往里缩 / 移出列表：按现在显示的这张在文件里找到，算出新文件
        indentTable: (dir) => {
          const file = app.vault.getAbstractFileByPath(ctx.sourcePath);
          if (!(file instanceof import_obsidian6.TFile)) return;
          const near = ctx.getSectionInfo(el)?.lineStart ?? block.start;
          const base = editor.getTable();
          void app.vault.process(file, (data) => {
            const all = data.split("\n");
            const at = locate(all, base, near)[0];
            const next = at && indentTable(all, at.block, dir);
            return next ? next.join("\n") : data;
          });
        },
        canIndentTable: (dir) => canIndent(lines, block, dir),
        // 删除整张表：按现在显示的这张在文件里找到，连同注释删掉；前后都是空行时多删一个
        onDeleteTable: () => {
          const file = app.vault.getAbstractFileByPath(ctx.sourcePath);
          if (!(file instanceof import_obsidian6.TFile)) return;
          const near = ctx.getSectionInfo(el)?.lineStart ?? block.start;
          const base = editor.getTable();
          void app.vault.process(file, (data) => {
            const all = data.split("\n");
            const at = locate(all, base, near)[0];
            if (!at) return data;
            let { from, to } = at;
            if ((all[from - 1] ?? "").trim() === "" && (all[to] ?? "").trim() === "" && to < all.length) to += 1;
            all.splice(from, to - from);
            return all.join("\n");
          });
        }
      }));
      child.editor = editor;
      factory.style(editor.root);
      child.register(factory.attach(editor));
    }
  };
}

// src/main.ts
var TablePlugin = class extends import_obsidian7.Plugin {
  constructor() {
    super(...arguments);
    this.settings = { ...DEFAULT_SETTINGS };
    /** 注册给编辑器的扩展：关掉接管时清空，再 updateOptions，Obsidian 会整个重建（原生表格也回来） */
    this.extensions = [];
    this.livePreview = null;
    this.factory = null;
    this.persistTimer = null;
  }
  async onload() {
    setLanguage((0, import_obsidian7.getLanguage)());
    this.settings = { ...DEFAULT_SETTINGS, ...await this.loadData() };
    const factory = makeFactory(this.app, () => this.settings, () => {
      if (this.persistTimer !== null) window.clearTimeout(this.persistTimer);
      this.persistTimer = window.setTimeout(() => {
        this.persistTimer = null;
        void this.saveData(this.settings);
      }, 1e3);
    });
    this.factory = factory;
    this.livePreview = livePreviewTables(factory);
    if (this.settings.enabled) this.extensions.push(this.livePreview);
    this.registerEditorExtension(this.extensions);
    this.registerMarkdownPostProcessor(readingProcessor(this.app, factory));
    this.addSettingTab(new TableSettingTab(this.app, this));
    this.addCommand({
      id: "insert-table",
      name: t("cmd_insertTable"),
      icon: "table",
      editorCallback: (editor) => new GridModal(this.app, (r, c) => insertTableText(editor, serializeTable(emptyTable(r, c)))).open()
    });
    this.addCommand({
      id: "text-to-table",
      name: t("cmd_textToTable"),
      editorCheckCallback: (checking, editor) => {
        const table = textToTable(editor.getSelection());
        if (!table) return false;
        if (!checking) editor.replaceSelection(serializeTable(table).join("\n"));
        return true;
      }
    });
    this.registerEvent(
      this.app.workspace.on("editor-paste", (evt, editor) => {
        if (evt.defaultPrevented || !this.settings.enabled || !evt.clipboardData) return;
        const source = pastedSource(evt.clipboardData);
        const grid = source ? null : pastedGrid(evt.clipboardData, activeDocument);
        const lines = source ?? (grid ? serializeTable(gridToTable(grid)) : null);
        if (!lines || !canPasteTableAt(editor)) return;
        evt.preventDefault();
        insertTableAtSelection(editor, lines);
      })
    );
    for (const id of TABLE_COMMANDS) {
      this.addCommand({
        id,
        name: t(`cmd_${id.replace(/-/g, "_")}`),
        checkCallback: (checking) => {
          const ed = activeTableEditor();
          if (!ed) return false;
          if (!checking) ed.runCommand(id);
          return true;
        }
      });
    }
    this.app.workspace.onLayoutReady(() => this.refresh());
  }
  onunload() {
    window.setTimeout(() => this.refresh(), 0);
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.refresh();
  }
  /** 设置改了：打开着的笔记重新画一遍表格（阅读视图只重画正在显示的，藏着的重画会变成空白） */
  refresh() {
    this.extensions.length = 0;
    if (this.settings.enabled && this.livePreview) this.extensions.push(this.livePreview);
    this.app.workspace.updateOptions();
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (!(leaf.view instanceof import_obsidian7.MarkdownView)) return;
      leaf.view.containerEl.querySelectorAll(".ggt").forEach((root) => this.factory?.style(root));
      if (leaf.view.getMode() === "preview") leaf.view.previewMode.rerender(true);
    });
  }
};
function settingSpecs() {
  const zh2 = (0, import_obsidian7.getLanguage)().startsWith("zh");
  return [
    {
      key: "enabled",
      name: zh2 ? "\u63A5\u7BA1 Markdown \u8868\u683C" : "Enhance Markdown tables",
      desc: zh2 ? "\u5173\u6389\u540E\u5B8C\u5168\u6062\u590D Obsidian \u539F\u751F\u8868\u683C\uFF1B\u6587\u4EF6\u91CC\u7684\u6CE8\u91CA\u7559\u7740\uFF0C\u4E0D\u5F71\u54CD\u663E\u793A\u3002" : "Turn off to go back to Obsidian's own tables. Comments already in your notes stay and do no harm.",
      type: "toggle"
    },
    {
      key: "preset",
      name: zh2 ? "\u6837\u5F0F" : "Style",
      type: "dropdown",
      options: zh2 ? { default: "\u9ED8\u8BA4", zebra: "\u6591\u9A6C\u7EB9", minimal: "\u6781\u7B80\u7EBF", academic: "\u4E09\u7EBF\u8868" } : { default: "Default", zebra: "Zebra", minimal: "Minimal", academic: "Three-line" }
    },
    {
      key: "cellPadX",
      name: zh2 ? "\u683C\u5B50\u5DE6\u53F3\u5185\u8FB9\u8DDD" : "Cell side padding",
      desc: zh2 ? "\u683C\u5B50\u91CC\u6587\u5B57\u79BB\u5DE6\u53F3\u8FB9\u6846\u591A\u8FDC\u3002\u5ACC\u683C\u5B50\u4E24\u8FB9\u7A7A\u5F97\u591A\u53EF\u4EE5\u8C03\u5C0F\uFF1B\u884C\u8DDD\u9009\u300C\u7D27\u51D1\u300D\u7684\u8868\u683C\u6700\u591A 8\u3002" : "How far text sits from a cell's left and right borders. Lower it if cells feel too roomy; Compact tables use at most 8.",
      type: "dropdown",
      options: zh2 ? { "4": "4\uFF08\u5F88\u7A84\uFF09", "6": "6", "8": "8", "10": "10\uFF08\u9ED8\u8BA4\uFF09" } : { "4": "4 (tight)", "6": "6", "8": "8", "10": "10 (default)" }
    },
    {
      key: "density",
      name: zh2 ? "\u884C\u8DDD" : "Row spacing",
      type: "dropdown",
      options: zh2 ? { comfortable: "\u8212\u9002", compact: "\u7D27\u51D1" } : { comfortable: "Comfortable", compact: "Compact" }
    },
    {
      key: "fullWidth",
      name: zh2 ? "\u8868\u683C\u9ED8\u8BA4\u6491\u6EE1\u9875\u9762\u5BBD\u5EA6" : "Tables fill the page width",
      desc: zh2 ? "\u6CA1\u62D6\u8FC7\u5217\u5BBD\u7684\u8868\u683C\u94FA\u6EE1\u6B63\u6587\u5BBD\u5EA6\uFF0C\u5404\u5217\u6309\u5185\u5BB9\u591A\u5C11\u5206\uFF1B\u62D6\u8FC7\u5217\u5BBD\u7684\u8868\u683C\u8FD8\u6309\u8BBE\u7684\u5BBD\u5EA6\u3002\u53EA\u6539\u663E\u793A\uFF0C\u4E0D\u5F80\u7B14\u8BB0\u91CC\u5199\u4E1C\u897F\u3002\u5355\u5F20\u8868\u4E5F\u53EF\u4EE5\u7528\u8868\u683C\u5DE6\u4E0A\u89D2\u83DC\u5355\u91CC\u7684\u300C\u6491\u6EE1\u9875\u9762\u5BBD\u5EA6\u300D\u3002" : "Tables whose column widths you haven't set stretch to the page width, with columns sized by their content; tables with set widths keep them. Display only \u2014 nothing is written to your notes. For a single table you can also use Fit to page width in its table menu.",
      type: "toggle"
    },
    {
      key: "strictStyle",
      name: zh2 ? "\u8868\u683C\u6837\u5F0F\u4F18\u5148\u4E8E\u4E3B\u9898" : "Table style over theme",
      desc: zh2 ? "\u6709\u7684\u4E3B\u9898\uFF08OnePage\u3001Minimal\u3001Blue Topaz\u3001Border\u3001phycat \u7B49\uFF09\u4F1A\u7528 !important \u6539\u8868\u683C\u7684\u8FB9\u6846\u3001\u8868\u5934\u5E95\u8272\u548C\u6587\u5B57\u989C\u8272\uFF0C\u628A\u8868\u683C\u63D2\u4EF6\u7684\u6837\u5F0F\u76D6\u6389\u3002\u6253\u5F00\u540E\u8868\u683C\u6309\u63D2\u4EF6\u81EA\u5DF1\u7684\u6837\u5F0F\u753B\uFF08\u8FB9\u6846\u3001\u8868\u5934\u3001\u6781\u7B80\u7EBF\u548C\u4E09\u7EBF\u8868\u8FD9\u4E9B\u6837\u5F0F\uFF09\uFF0C\u5173\u6389\u5C31\u8BA9\u4E3B\u9898\u7684\u8868\u683C\u6837\u5F0F\u751F\u6548\u3002" : "Some themes (OnePage, Minimal, Blue Topaz, Border, phycat and others) restyle table borders, header backgrounds and text colors with !important, overriding this plugin. On: tables keep this plugin's look (borders, header, the Minimal and Three-line styles). Off: the theme's table style wins.",
      type: "toggle"
    },
    {
      key: "fitCols",
      name: zh2 ? "\u5217\u5BBD\u6309\u6BD4\u4F8B\u7F29\u653E" : "Scale column widths to fit",
      desc: zh2 ? "\u62D6\u8FC7\u5217\u5BBD\u7684\u8868\u683C\u6BD4\u6B63\u6587\u5BBD\u65F6\uFF08\u6BD4\u5982\u6253\u5F00\u4E86\u4FA7\u680F\uFF09\uFF0C\u5404\u5217\u6309\u6BD4\u4F8B\u7F29\u5C0F\u5230\u6B63\u597D\u653E\u4E0B\uFF0C\u4E0D\u51FA\u6A2A\u5411\u6EDA\u52A8\u6761\uFF1B\u6B63\u6587\u53D8\u5BBD\u540E\u6062\u590D\u539F\u6765\u7684\u5BBD\u5EA6\u3002\u53EA\u6539\u663E\u793A\uFF0C\u7B14\u8BB0\u91CC\u8FD8\u662F\u539F\u6765\u7684\u5217\u5BBD\u3002\u5217\u592A\u591A\u3001\u7F29\u5230\u5F88\u7A84\u65F6\u7167\u6837\u6A2A\u5411\u6EDA\u52A8\u3002" : "When a table with set column widths is wider than the page (say, with a sidebar open), its columns shrink proportionally to fit instead of scrolling sideways, and grow back when there's room. Display only \u2014 your notes keep the original widths. Tables with too many columns still scroll.",
      type: "toggle"
    },
    {
      key: "readingReadonly",
      name: zh2 ? "\u9605\u8BFB\u89C6\u56FE\u91CC\u8868\u683C\u53EA\u8BFB" : "Read-only tables in Reading view",
      desc: zh2 ? "\u548C Obsidian \u7684\u9605\u8BFB\u89C6\u56FE\u4E00\u81F4\uFF1A\u8868\u683C\u53EA\u770B\u4E0D\u6539\uFF0C\u70B9\u683C\u5B50\u4E0D\u4F1A\u8FDB\u5165\u7F16\u8F91\uFF0C\u6CA1\u6709\u624B\u67C4\u548C\u52A0\u53F7\uFF0C\u94FE\u63A5\u7167\u5E38\u80FD\u70B9\u3002\u5173\u6389\u540E\u5728\u9605\u8BFB\u89C6\u56FE\u91CC\u4E5F\u80FD\u76F4\u63A5\u6539\u8868\u683C\u3002" : "Like the rest of Reading view: tables are view-only, clicking a cell doesn't start editing, and there are no handles or add buttons; links still work. Turn off to edit tables directly in Reading view.",
      type: "toggle"
    },
    {
      key: "crosshair",
      name: zh2 ? "\u5341\u5B57\u9AD8\u4EAE" : "Crosshair highlight",
      desc: zh2 ? "\u9009\u4E2D\u683C\u5B50\u65F6\uFF0C\u628A\u5B83\u6240\u5728\u7684\u6574\u884C\u548C\u6574\u5217\u94FA\u4E00\u5C42\u6DE1\u8272\uFF0C\u770B\u5927\u8868\u683C\u4E0D\u5BB9\u6613\u4E32\u884C\u3002\u300C\u60AC\u505C\u65F6\u300D\u8DDF\u7740\u9F20\u6807\u8D70\uFF0C\u9F20\u6807\u79BB\u5F00\u8868\u683C\u540E\u56DE\u5230\u9009\u4E2D\u7684\u683C\u5B50\u3002" : "Tint the whole row and column of the selected cell so large tables are easier to follow. On hover follows the mouse, falling back to the selected cell when the mouse leaves the table.",
      type: "dropdown",
      options: zh2 ? { off: "\u5173", select: "\u9009\u4E2D\u683C\u5B50\u65F6", hover: "\u9009\u4E2D\u548C\u60AC\u505C\u65F6" } : { off: "Off", select: "On the selected cell", hover: "On selected and hovered cells" }
    },
    {
      key: "richEdit",
      name: zh2 ? "\u7F16\u8F91\u683C\u5B50\u65F6\u76F4\u63A5\u663E\u793A\u683C\u5F0F" : "Show formatting while editing a cell",
      desc: zh2 ? "\u7F16\u8F91\u683C\u5B50\u65F6\uFF0C\u52A0\u7C97\u3001\u659C\u4F53\u3001\u6587\u5B57\u989C\u8272\u3001\u8367\u5149\u7B14\u3001\u4E0B\u5212\u7EBF\u76F4\u63A5\u663E\u793A\u6548\u679C\uFF0C<span style=\u2026> \u8FD9\u7C7B\u6807\u7B7E\u85CF\u8D77\u6765\uFF0C\u5220\u5B57\u65F6\u6807\u7B7E\u4FDD\u6301\u6210\u5BF9\uFF0C\u548C gogoga Mind Map \u7684\u8282\u70B9\u7F16\u8F91\u4E00\u6837\u3002\u5173\u6389\u65F6\u663E\u793A\u539F\u59CB\u7684 Markdown \u548C HTML\u3002" : "While editing a cell, bold, italic, text colors, highlighter colors and underline show as formatted, with tags like <span style=\u2026> hidden and kept paired when you delete text, as in gogoga Mind Map's node editor. When off, the raw Markdown and HTML are shown.",
      type: "toggle"
    },
    {
      key: "formatBar",
      name: zh2 ? "\u7F16\u8F91\u683C\u5B50\u65F6\u9009\u4E2D\u6587\u5B57\u663E\u793A\u683C\u5F0F\u680F" : "Format bar when selecting text in a cell",
      desc: zh2 ? "\u7F16\u8F91\u683C\u5B50\u65F6\u9009\u4E2D\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E0A\u65B9\u6D6E\u51FA\u4E00\u6392\u6309\u94AE\uFF1A\u52A0\u7C97\u3001\u659C\u4F53\u3001\u5220\u9664\u7EBF\u3001\u4E0B\u5212\u7EBF\u3001\u9AD8\u4EAE\u3001\u6587\u5B57\u989C\u8272\u3001\u8367\u5149\u7B14\u548C\u6E05\u9664\uFF0C\u548C gogoga Mind Map \u7684\u683C\u5F0F\u680F\u4E00\u6837\u3002\u4E0D\u6253\u5F00\u4E5F\u80FD\u7528\u5FEB\u6377\u952E\uFF1A\u2318B\u3001\u2318I\u3001\u2318U\u3001\u2318\u21E7X\u3001\u2318\u21E7H\u3002" : "While editing a cell, selecting text shows a bar above it: bold, italic, strikethrough, underline, highlight, text colors, highlighter colors and clear, the same as in gogoga Mind Map. Without it, use the shortcuts: Mod+B, Mod+I, Mod+U, Mod+Shift+X, Mod+Shift+H.",
      type: "toggle"
    },
    {
      key: "smartDate",
      name: zh2 ? "\u65E5\u671F\u5217\u81EA\u52A8\u8BC6\u522B\u65E5\u671F\u5199\u6CD5" : "Recognize dates typed in date columns",
      desc: zh2 ? "\u5728\u65E5\u671F\u5217\u91CC\u6253 1/5\u300111-17\u30012026\u5E741\u67085\u65E5\u300120260105\u3001\u4ECA\u5929\u3001\u660E\u5929\u3001\u6628\u5929\uFF0C\u6309 Enter \u540E\u6362\u6210\u8FD9\u4E00\u5217\u7684\u5199\u6CD5\uFF08\u6BD4\u5982 2026-01-05\uFF0C\u6216\u65E5\u8BB0\u94FE\u63A5 [[2026-01-05]]\uFF09\uFF1B\u6CA1\u5199\u5E74\u7684\u7B97\u4ECA\u5E74\u3002\u5173\u6389\u65F6\u53EA\u7EDF\u4E00 2026-1-5 \u8FD9\u79CD\u5199\u6CD5\uFF0C\u522B\u7684\u539F\u6837\u4FDD\u5B58\u3002" : "In date columns, typing 1/5, 11-17, 2026\u5E741\u67085\u65E5, 20260105, today, tomorrow or yesterday becomes the column's date style when you press Enter (such as 2026-01-05, or a daily note link [[2026-01-05]]). Dates without a year use the current year. When off, only dates like 2026-1-5 are tidied and everything else is kept as typed.",
      type: "toggle"
    }
  ];
}
var TableSettingTab = class extends import_obsidian7.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  getSettingDefinitions() {
    return settingSpecs().map((x) => ({
      name: x.name,
      desc: x.desc,
      control: x.type === "toggle" ? { type: "toggle", key: x.key } : { type: "dropdown", key: x.key, options: x.options ?? {} }
    }));
  }
  getControlValue(key) {
    const v = this.plugin.settings[key];
    return typeof v === "number" ? String(v) : v;
  }
  async setControlValue(key, value) {
    const k = key;
    const s = this.plugin.settings;
    s[k] = typeof DEFAULT_SETTINGS[k] === "number" ? Number(value) : value;
    await this.plugin.saveSettings();
  }
  /** Obsidian 1.13 以前没有声明式设置：照同一份清单画 */
  display() {
    const { containerEl } = this;
    containerEl.empty();
    for (const x of settingSpecs()) {
      const row = new import_obsidian7.Setting(containerEl).setName(x.name);
      if (x.desc) row.setDesc(x.desc);
      if (x.type === "toggle") row.addToggle((tg) => tg.setValue(this.getControlValue(x.key)).onChange((v) => this.setControlValue(x.key, v)));
      else row.addDropdown((dd) => dd.addOptions(x.options ?? {}).setValue(this.getControlValue(x.key)).onChange((v) => this.setControlValue(x.key, v)));
    }
  }
};

/* nosourcemap */