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
  default: () => NotionBlock
});
module.exports = __toCommonJS(main_exports);
var import_obsidian11 = require("obsidian");

// src/settings.ts
var import_obsidian3 = require("obsidian");

// src/locale/helpers.ts
var import_obsidian = require("obsidian");

// src/locale/lang/en.ts
var en = {
  "settings.menuLayout.name": "Menu commands",
  "settings.menuLayout.desc": "Choose which commands appear in the main menu or under More. Drag the handles here or in the popup to reorder commands within each group. Changes save automatically.",
  "settings.menuLayout.position": "Command placement and order",
  "settings.menuLayout.expanded": "Main menu",
  "settings.menuLayout.collapsed": "Under More",
  "settings.menuLayout.reset": "Reset this group to defaults",
  "settings.hoverDelay.name": "Button hover delay",
  "settings.hoverDelay.desc": "Delay (ms) before showing handles.",
  "settings.hideDelay.name": "Button hide delay",
  "settings.hideDelay.desc": "Delay (ms) before hiding handles.",
  "settings.dateFormat.name": "Date format",
  "settings.dateFormat.desc": "Format for today/yesterday/tomorrow.",
  "settings.timeFormat.name": "Time format",
  "settings.timeFormat.desc": "Format for current time.",
  "handles.dragReorder": "Drag to reorder",
  "handles.blockActions": "Click for block actions; hold to drag",
  "drag.list": "Add list item",
  "drag.nest": "Nest under item",
  "drag.outdent": "Outdent item",
  "drag.callout": "Move into callout",
  "drag.quote": "Move into quote",
  "transfer.choose": "Choose drop action",
  "transfer.move": "Move here",
  "transfer.copy": "Copy here",
  "transfer.link": "Link to original block",
  "transfer.embed": "Embed original block",
  "transfer.expanded": "Links and embeds use complete Obsidian blocks, including the entire quote or callout when needed.",
  "transfer.cancelHint": "Escape to cancel \xB7 Arrow keys to choose",
  "transfer.changed": "Drop cancelled: a note changed or its editor closed.",
  "transfer.referenced": "This block has existing references. Copy, link or embed it to keep those references working.",
  "transfer.indexPending": "Wait for Obsidian to index all notes before moving a block with an ID.",
  "transfer.idConflict": "Block IDs conflict. Resolve duplicate IDs before moving or linking this block.",
  "transfer.unsupportedReference": "This selection cannot be referenced as an Obsidian block.",
  "transfer.anchorContainer": "Place blocks with separate block ID lines outside list and quote containers.",
  "transfer.anchorTransform": "Convert blocks with IDs one at a time, using a type that supports block references. List type changes preserve item IDs.",
  "transfer.historyBlocked": "Keep both notes open and undo later edits in the other note before undoing this transfer.",
  "transfer.failed": "The transfer failed. Source content was preserved.",
  "menu.turnInto": "Turn into",
  "menu.insert": "Insert",
  "menu.addInsert": "Add",
  "menu.back": "Back",
  "menu.moreInsert": "More add commands",
  "menu.moreTransform": "More conversions",
  "menu.reorder": "Drag to reorder; Alt + Up / Down also works",
  "menu.color": "Color",
  "menu.textColor": "Text color",
  "menu.backgroundColor": "Background color",
  "menu.callout": "Callout",
  "menu.paragraph": "Text",
  "menu.h1": "Heading 1",
  "menu.h2": "Heading 2",
  "menu.h3": "Heading 3",
  "menu.todo": "To-do list",
  "menu.bullet": "Bulleted list",
  "menu.numbered": "Numbered list",
  "menu.blockquote": "Quote",
  "menu.code": "Code block",
  "menu.math": "Math block",
  "menu.divider": "Divider",
  "menu.selectBlock": "Select whole block",
  "menu.copyLink": "Copy block link",
  "menu.delete": "Delete",
  "menu.link": "Internal link",
  "menu.extLink": "External link",
  "menu.image": "Insert image",
  "menu.table": "Table",
  "menu.today": "Today",
  "menu.time": "Current time",
  "menu.footnote": "Footnote",
  "menu.comment": "Comment",
  "color.default": "Default",
  "color.gray": "Gray",
  "color.brown": "Brown",
  "color.orange": "Orange",
  "color.yellow": "Yellow",
  "color.green": "Green",
  "color.blue": "Blue",
  "color.purple": "Purple",
  "color.pink": "Pink",
  "color.red": "Red",
  "color.textDefault": "Default text",
  "color.textGray": "Gray text",
  "color.textBrown": "Brown text",
  "color.textOrange": "Orange text",
  "color.textYellow": "Yellow text",
  "color.textGreen": "Green text",
  "color.textBlue": "Blue text",
  "color.textPurple": "Purple text",
  "color.textPink": "Pink text",
  "color.textRed": "Red text",
  "color.bgDefault": "Default background",
  "color.bgGray": "Gray background",
  "color.bgBrown": "Brown background",
  "color.bgOrange": "Orange background",
  "color.bgYellow": "Yellow background",
  "color.bgGreen": "Green background",
  "color.bgBlue": "Blue background",
  "color.bgPurple": "Purple background",
  "color.bgPink": "Pink background",
  "color.bgRed": "Red background",
  "callout.note": "Note",
  "callout.info": "Info",
  "callout.todo": "Todo",
  "callout.tip": "Tip",
  "callout.success": "Success",
  "callout.question": "Question",
  "callout.warning": "Warning",
  "callout.failure": "Failure",
  "callout.danger": "Danger",
  "callout.bug": "Bug",
  "callout.example": "Example",
  "callout.quote": "Quote",
  "notice.noActiveNote": "No active note",
  "notice.linkCopied": "Block link copied",
  "notice.linkCopyFailed": "Failed to copy block link",
  "notice.selectImage": "Please select an image file.",
  "notice.insertImageFailed": "Failed to insert image.",
  "notice.menuLayoutSaveFailed": "Could not save the menu layout. Previous layout restored.",
  "table.column": "Column"
};
var en_default = en;

// src/locale/lang/zh.ts
var zh = {
  "settings.menuLayout.name": "\u83DC\u5355\u547D\u4EE4",
  "settings.menuLayout.desc": "\u9009\u62E9\u547D\u4EE4\u5728\u4E3B\u83DC\u5355\u5C55\u5F00\uFF0C\u6216\u6536\u8FDB\u300C\u66F4\u591A\u300D\u3002\u53EF\u5728\u8FD9\u91CC\u6216\u5F39\u51FA\u83DC\u5355\u4E2D\u62D6\u52A8\u624B\u67C4\uFF0C\u8C03\u6574\u5404\u7EC4\u5185\u7684\u987A\u5E8F\u3002\u4FEE\u6539\u81EA\u52A8\u4FDD\u5B58\u3002",
  "settings.menuLayout.position": "\u547D\u4EE4\u663E\u793A\u4F4D\u7F6E\u4E0E\u987A\u5E8F",
  "settings.menuLayout.expanded": "\u4E3B\u83DC\u5355\u5C55\u5F00",
  "settings.menuLayout.collapsed": "\u6536\u5165\u66F4\u591A",
  "settings.menuLayout.reset": "\u6062\u590D\u6B64\u7EC4\u9ED8\u8BA4\u5E03\u5C40",
  "settings.hoverDelay.name": "\u60AC\u6D6E\u663E\u793A\u5EF6\u8FDF",
  "settings.hoverDelay.desc": "\u663E\u793A\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u8FDF\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.hideDelay.name": "\u60AC\u6D6E\u9690\u85CF\u5EF6\u8FDF",
  "settings.hideDelay.desc": "\u9690\u85CF\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u8FDF\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.dateFormat.name": "\u65E5\u671F\u683C\u5F0F",
  "settings.dateFormat.desc": "\u4ECA\u5929/\u6628\u5929/\u660E\u5929\u7684\u65E5\u671F\u683C\u5F0F\u3002",
  "settings.timeFormat.name": "\u65F6\u95F4\u683C\u5F0F",
  "settings.timeFormat.desc": "\u5F53\u524D\u65F6\u95F4\u7684\u683C\u5F0F\u3002",
  "handles.dragReorder": "\u62D6\u62FD\u4EE5\u91CD\u6392",
  "handles.blockActions": "\u70B9\u51FB\u6253\u5F00\u5757\u83DC\u5355\uFF0C\u6309\u4F4F\u62D6\u62FD",
  "drag.list": "\u52A0\u5165\u5217\u8868\u540C\u7EA7\u9879",
  "drag.nest": "\u6210\u4E3A\u6B64\u9879\u7684\u5B50\u9879",
  "drag.outdent": "\u51CF\u5C11\u4E00\u7EA7\u7F29\u8FDB",
  "drag.callout": "\u79FB\u5165 callout",
  "drag.quote": "\u79FB\u5165\u5F15\u7528",
  "transfer.choose": "\u9009\u62E9\u653E\u7F6E\u52A8\u4F5C",
  "transfer.move": "\u79FB\u52A8\u5230\u8FD9\u91CC",
  "transfer.copy": "\u590D\u5236\u5230\u8FD9\u91CC",
  "transfer.link": "\u94FE\u63A5\u5230\u539F\u5757",
  "transfer.embed": "\u5D4C\u5165\u539F\u5757",
  "transfer.expanded": "\u94FE\u63A5\u4E0E\u5D4C\u5165\u6309\u5B8C\u6574 Obsidian \u5757\u5F15\u7528\uFF1B\u5FC5\u8981\u65F6\u5305\u542B\u6574\u4E2A\u5F15\u7528\u5757\u6216 callout\u3002",
  "transfer.cancelHint": "Escape \u53D6\u6D88 \xB7 \u65B9\u5411\u952E\u9009\u62E9",
  "transfer.changed": "\u653E\u7F6E\u5DF2\u53D6\u6D88\uFF1A\u6587\u6863\u53D1\u751F\u53D8\u5316\u6216\u7F16\u8F91\u5668\u5DF2\u5173\u95ED\u3002",
  "transfer.referenced": "\u5DF2\u6709\u94FE\u63A5\u5F15\u7528\u6B64\u5757\u3002\u8BF7\u9009\u62E9\u590D\u5236\u3001\u94FE\u63A5\u6216\u5D4C\u5165\uFF0C\u4FDD\u7559\u65E7\u5F15\u7528\u3002",
  "transfer.indexPending": "Obsidian \u7D22\u5F15\u5C1A\u672A\u5B8C\u6210\uFF0C\u8BF7\u7A0D\u540E\u518D\u79FB\u52A8\u5E26 ID \u7684\u5757\u3002",
  "transfer.idConflict": "\u5757 ID \u51B2\u7A81\u3002\u8BF7\u5148\u89E3\u51B3\u91CD\u590D ID\uFF0C\u518D\u79FB\u52A8\u6216\u5F15\u7528\u6B64\u5757\u3002",
  "transfer.unsupportedReference": "\u6B64\u9009\u533A\u4E0D\u80FD\u4F5C\u4E3A Obsidian \u5757\u5F15\u7528\u3002",
  "transfer.anchorContainer": "\u5E26\u72EC\u7ACB\u5757 ID \u884C\u7684\u5757\uFF0C\u8BF7\u653E\u5728\u5217\u8868\u6216\u5F15\u7528\u5BB9\u5668\u5916\u3002",
  "transfer.anchorTransform": "\u5E26 ID \u7684\u5757\u8BF7\u9010\u5757\u8F6C\u6362\uFF0C\u5E76\u9009\u62E9\u652F\u6301\u5757\u5F15\u7528\u7684\u7C7B\u578B\uFF1B\u5217\u8868\u4E92\u8F6C\u53EF\u4FDD\u7559\u5404\u9879 ID\u3002",
  "transfer.historyBlocked": "\u8BF7\u4FDD\u6301\u4E24\u4EFD\u6587\u6863\u6253\u5F00\uFF0C\u5E76\u5148\u64A4\u9500\u53E6\u4E00\u4EFD\u6587\u6863\u4E2D\u7684\u540E\u7EED\u7F16\u8F91\uFF0C\u518D\u64A4\u9500\u6B64\u6B21\u4F20\u8F93\u3002",
  "transfer.failed": "\u4F20\u8F93\u5931\u8D25\uFF0C\u6E90\u5185\u5BB9\u5DF2\u4FDD\u7559\u3002",
  "menu.turnInto": "\u8F6C\u6362\u6210",
  "menu.insert": "\u65B0\u589E",
  "menu.addInsert": "\u65B0\u589E",
  "menu.back": "\u8FD4\u56DE",
  "menu.moreInsert": "\u66F4\u591A\u65B0\u589E",
  "menu.moreTransform": "\u66F4\u591A\u8F6C\u6362",
  "menu.reorder": "\u62D6\u52A8\u6392\u5E8F\uFF1B\u4E5F\u53EF\u4F7F\u7528 Alt + \u4E0A/\u4E0B\u65B9\u5411\u952E",
  "menu.color": "\u989C\u8272",
  "menu.textColor": "\u6587\u672C\u989C\u8272",
  "menu.backgroundColor": "\u80CC\u666F\u989C\u8272",
  "menu.callout": "Callout",
  "menu.paragraph": "\u6587\u672C",
  "menu.h1": "\u6807\u9898 1",
  "menu.h2": "\u6807\u9898 2",
  "menu.h3": "\u6807\u9898 3",
  "menu.todo": "\u5F85\u529E\u5217\u8868",
  "menu.bullet": "\u65E0\u5E8F\u5217\u8868",
  "menu.numbered": "\u6709\u5E8F\u5217\u8868",
  "menu.blockquote": "\u5F15\u7528",
  "menu.code": "\u4EE3\u7801\u5757",
  "menu.math": "\u6570\u5B66\u5757",
  "menu.divider": "\u5206\u5272\u7EBF",
  "menu.selectBlock": "\u9009\u62E9\u6574\u4E2A\u5757",
  "menu.copyLink": "\u62F7\u8D1D\u533A\u5757\u94FE\u63A5",
  "menu.delete": "\u5220\u9664",
  "menu.link": "\u5185\u90E8\u94FE\u63A5",
  "menu.extLink": "\u5916\u90E8\u94FE\u63A5",
  "menu.image": "\u63D2\u5165\u56FE\u7247",
  "menu.table": "\u8868\u683C",
  "menu.today": "\u4ECA\u5929",
  "menu.time": "\u5F53\u524D\u65F6\u95F4",
  "menu.footnote": "\u811A\u6CE8",
  "menu.comment": "\u6CE8\u91CA",
  "color.default": "\u9ED8\u8BA4",
  "color.gray": "\u7070\u8272",
  "color.brown": "\u68D5\u8272",
  "color.orange": "\u6A59\u8272",
  "color.yellow": "\u9EC4\u8272",
  "color.green": "\u7EFF\u8272",
  "color.blue": "\u84DD\u8272",
  "color.purple": "\u7D2B\u8272",
  "color.pink": "\u7C89\u8272",
  "color.red": "\u7EA2\u8272",
  "color.textDefault": "\u9ED8\u8BA4\u6587\u672C",
  "color.textGray": "\u7070\u8272\u6587\u672C",
  "color.textBrown": "\u68D5\u8272\u6587\u672C",
  "color.textOrange": "\u6A59\u8272\u6587\u672C",
  "color.textYellow": "\u9EC4\u8272\u6587\u672C",
  "color.textGreen": "\u7EFF\u8272\u6587\u672C",
  "color.textBlue": "\u84DD\u8272\u6587\u672C",
  "color.textPurple": "\u7D2B\u8272\u6587\u672C",
  "color.textPink": "\u7C89\u8272\u6587\u672C",
  "color.textRed": "\u7EA2\u8272\u6587\u672C",
  "color.bgDefault": "\u9ED8\u8BA4\u80CC\u666F",
  "color.bgGray": "\u7070\u8272\u80CC\u666F",
  "color.bgBrown": "\u68D5\u8272\u80CC\u666F",
  "color.bgOrange": "\u6A59\u8272\u80CC\u666F",
  "color.bgYellow": "\u9EC4\u8272\u80CC\u666F",
  "color.bgGreen": "\u7EFF\u8272\u80CC\u666F",
  "color.bgBlue": "\u84DD\u8272\u80CC\u666F",
  "color.bgPurple": "\u7D2B\u8272\u80CC\u666F",
  "color.bgPink": "\u7C89\u8272\u80CC\u666F",
  "color.bgRed": "\u7EA2\u8272\u80CC\u666F",
  "callout.note": "\u4FBF\u7B7E",
  "callout.info": "\u4FE1\u606F",
  "callout.todo": "\u5F85\u529E",
  "callout.tip": "\u63D0\u793A",
  "callout.success": "\u6210\u529F",
  "callout.question": "\u95EE\u9898",
  "callout.warning": "\u8B66\u544A",
  "callout.failure": "\u5931\u8D25",
  "callout.danger": "\u5371\u9669",
  "callout.bug": "\u7F3A\u9677",
  "callout.example": "\u793A\u4F8B",
  "callout.quote": "\u5F15\u7528",
  "notice.noActiveNote": "\u6CA1\u6709\u6D3B\u52A8\u7B14\u8BB0",
  "notice.linkCopied": "\u5DF2\u590D\u5236\u533A\u5757\u94FE\u63A5",
  "notice.linkCopyFailed": "\u590D\u5236\u533A\u5757\u94FE\u63A5\u5931\u8D25",
  "notice.selectImage": "\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\u3002",
  "notice.insertImageFailed": "\u63D2\u5165\u56FE\u7247\u5931\u8D25\u3002",
  "notice.menuLayoutSaveFailed": "\u83DC\u5355\u5E03\u5C40\u4FDD\u5B58\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u539F\u5E03\u5C40\u3002",
  "table.column": "\u5217"
};
var zh_default = zh;

// src/locale/lang/zh-tw.ts
var zhTw = {
  "settings.menuLayout.name": "\u9078\u55AE\u547D\u4EE4",
  "settings.menuLayout.desc": "\u9078\u64C7\u547D\u4EE4\u5728\u4E3B\u9078\u55AE\u5C55\u958B\uFF0C\u6216\u6536\u9032\u300C\u66F4\u591A\u300D\u3002\u53EF\u5728\u9019\u88E1\u6216\u5F48\u51FA\u9078\u55AE\u4E2D\u62D6\u52D5\u624B\u67C4\uFF0C\u8ABF\u6574\u5404\u7D44\u5167\u7684\u9806\u5E8F\u3002\u4FEE\u6539\u81EA\u52D5\u5132\u5B58\u3002",
  "settings.menuLayout.position": "\u547D\u4EE4\u986F\u793A\u4F4D\u7F6E\u8207\u9806\u5E8F",
  "settings.menuLayout.expanded": "\u4E3B\u9078\u55AE\u5C55\u958B",
  "settings.menuLayout.collapsed": "\u6536\u5165\u66F4\u591A",
  "settings.menuLayout.reset": "\u6062\u5FA9\u6B64\u7D44\u9810\u8A2D\u7248\u9762",
  "settings.hoverDelay.name": "\u61F8\u505C\u986F\u793A\u5EF6\u9072",
  "settings.hoverDelay.desc": "\u986F\u793A\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u9072\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.hideDelay.name": "\u61F8\u505C\u96B1\u85CF\u5EF6\u9072",
  "settings.hideDelay.desc": "\u96B1\u85CF\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u9072\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.dateFormat.name": "\u65E5\u671F\u683C\u5F0F",
  "settings.dateFormat.desc": "\u4ECA\u5929/\u6628\u5929/\u660E\u5929\u7684\u65E5\u671F\u683C\u5F0F\u3002",
  "settings.timeFormat.name": "\u6642\u9593\u683C\u5F0F",
  "settings.timeFormat.desc": "\u7576\u524D\u6642\u9593\u7684\u683C\u5F0F\u3002",
  "handles.dragReorder": "\u62D6\u66F3\u4EE5\u91CD\u6392",
  "handles.blockActions": "\u9EDE\u64CA\u958B\u555F\u5340\u584A\u9078\u55AE\uFF0C\u6309\u4F4F\u62D6\u66F3",
  "drag.list": "\u52A0\u5165\u5217\u8868\u540C\u7D1A\u9805",
  "drag.nest": "\u6210\u70BA\u6B64\u9805\u7684\u5B50\u9805",
  "drag.outdent": "\u6E1B\u5C11\u4E00\u7D1A\u7E2E\u6392",
  "drag.callout": "\u79FB\u5165 callout",
  "drag.quote": "\u79FB\u5165\u5F15\u7528",
  "transfer.choose": "\u9078\u64C7\u653E\u7F6E\u52D5\u4F5C",
  "transfer.move": "\u79FB\u52D5\u5230\u9019\u88E1",
  "transfer.copy": "\u8907\u88FD\u5230\u9019\u88E1",
  "transfer.link": "\u9023\u7D50\u81F3\u539F\u5340\u584A",
  "transfer.embed": "\u5D4C\u5165\u539F\u5340\u584A",
  "transfer.expanded": "\u9023\u7D50\u8207\u5D4C\u5165\u6309\u5B8C\u6574 Obsidian \u5340\u584A\u5F15\u7528\uFF1B\u5FC5\u8981\u6642\u5305\u542B\u6574\u500B\u5F15\u7528\u5340\u584A\u6216 callout\u3002",
  "transfer.cancelHint": "Escape \u53D6\u6D88 \xB7 \u65B9\u5411\u9375\u9078\u64C7",
  "transfer.changed": "\u653E\u7F6E\u5DF2\u53D6\u6D88\uFF1A\u6587\u4EF6\u767C\u751F\u8B8A\u5316\u6216\u7DE8\u8F2F\u5668\u5DF2\u95DC\u9589\u3002",
  "transfer.referenced": "\u5DF2\u6709\u9023\u7D50\u5F15\u7528\u6B64\u5340\u584A\u3002\u8ACB\u9078\u64C7\u8907\u88FD\u3001\u9023\u7D50\u6216\u5D4C\u5165\uFF0C\u4FDD\u7559\u820A\u5F15\u7528\u3002",
  "transfer.indexPending": "Obsidian \u7D22\u5F15\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u79FB\u52D5\u5E36 ID \u7684\u5340\u584A\u3002",
  "transfer.idConflict": "\u5340\u584A ID \u885D\u7A81\u3002\u8ACB\u5148\u89E3\u6C7A\u91CD\u8907 ID\uFF0C\u518D\u79FB\u52D5\u6216\u5F15\u7528\u6B64\u5340\u584A\u3002",
  "transfer.unsupportedReference": "\u6B64\u9078\u53D6\u7BC4\u570D\u4E0D\u80FD\u4F5C\u70BA Obsidian \u5340\u584A\u5F15\u7528\u3002",
  "transfer.anchorContainer": "\u5E36\u7368\u7ACB\u5340\u584A ID \u884C\u7684\u5340\u584A\uFF0C\u8ACB\u653E\u5728\u6E05\u55AE\u6216\u5F15\u7528\u5BB9\u5668\u5916\u3002",
  "transfer.anchorTransform": "\u5E36 ID \u7684\u5340\u584A\u8ACB\u9010\u584A\u8F49\u63DB\uFF0C\u4E26\u9078\u64C7\u652F\u63F4\u5340\u584A\u5F15\u7528\u7684\u985E\u578B\uFF1B\u6E05\u55AE\u4E92\u8F49\u53EF\u4FDD\u7559\u5404\u9805 ID\u3002",
  "transfer.historyBlocked": "\u8ACB\u4FDD\u6301\u5169\u4EFD\u6587\u4EF6\u958B\u555F\uFF0C\u4E26\u5148\u5FA9\u539F\u53E6\u4E00\u4EFD\u6587\u4EF6\u4E2D\u7684\u5F8C\u7E8C\u7DE8\u8F2F\uFF0C\u518D\u5FA9\u539F\u6B64\u6B21\u50B3\u8F38\u3002",
  "transfer.failed": "\u50B3\u8F38\u5931\u6557\uFF0C\u4F86\u6E90\u5167\u5BB9\u5DF2\u4FDD\u7559\u3002",
  "menu.turnInto": "\u8F49\u63DB\u6210",
  "menu.insert": "\u65B0\u589E",
  "menu.addInsert": "\u65B0\u589E",
  "menu.back": "\u8FD4\u56DE",
  "menu.moreInsert": "\u66F4\u591A\u65B0\u589E",
  "menu.moreTransform": "\u66F4\u591A\u8F49\u63DB",
  "menu.reorder": "\u62D6\u52D5\u6392\u5E8F\uFF1B\u4E5F\u53EF\u4F7F\u7528 Alt + \u4E0A/\u4E0B\u65B9\u5411\u9375",
  "menu.color": "\u984F\u8272",
  "menu.textColor": "\u6587\u5B57\u984F\u8272",
  "menu.backgroundColor": "\u80CC\u666F\u984F\u8272",
  "menu.callout": "Callout",
  "menu.paragraph": "\u6587\u5B57",
  "menu.h1": "\u6A19\u984C 1",
  "menu.h2": "\u6A19\u984C 2",
  "menu.h3": "\u6A19\u984C 3",
  "menu.todo": "\u5F85\u8FA6\u6E05\u55AE",
  "menu.bullet": "\u7121\u5E8F\u6E05\u55AE",
  "menu.numbered": "\u6709\u5E8F\u6E05\u55AE",
  "menu.blockquote": "\u5F15\u7528",
  "menu.code": "\u7A0B\u5F0F\u78BC\u5340\u584A",
  "menu.math": "\u6578\u5B78\u5340\u584A",
  "menu.divider": "\u5206\u5272\u7DDA",
  "menu.selectBlock": "\u9078\u53D6\u6574\u500B\u5340\u584A",
  "menu.copyLink": "\u8907\u88FD\u5340\u584A\u9023\u7D50",
  "menu.delete": "\u522A\u9664",
  "menu.link": "\u5167\u90E8\u9023\u7D50",
  "menu.extLink": "\u5916\u90E8\u9023\u7D50",
  "menu.image": "\u63D2\u5165\u5716\u7247",
  "menu.table": "\u8868\u683C",
  "menu.today": "\u4ECA\u5929",
  "menu.time": "\u7576\u524D\u6642\u9593",
  "menu.footnote": "\u8173\u8A3B",
  "menu.comment": "\u8A3B\u89E3",
  "color.default": "\u9810\u8A2D",
  "color.gray": "\u7070\u8272",
  "color.brown": "\u68D5\u8272",
  "color.orange": "\u6A58\u8272",
  "color.yellow": "\u9EC3\u8272",
  "color.green": "\u7DA0\u8272",
  "color.blue": "\u85CD\u8272",
  "color.purple": "\u7D2B\u8272",
  "color.pink": "\u7C89\u7D05\u8272",
  "color.red": "\u7D05\u8272",
  "color.textDefault": "\u9810\u8A2D\u6587\u5B57",
  "color.textGray": "\u7070\u8272\u6587\u5B57",
  "color.textBrown": "\u68D5\u8272\u6587\u5B57",
  "color.textOrange": "\u6A58\u8272\u6587\u5B57",
  "color.textYellow": "\u9EC3\u8272\u6587\u5B57",
  "color.textGreen": "\u7DA0\u8272\u6587\u5B57",
  "color.textBlue": "\u85CD\u8272\u6587\u5B57",
  "color.textPurple": "\u7D2B\u8272\u6587\u5B57",
  "color.textPink": "\u7C89\u7D05\u8272\u6587\u5B57",
  "color.textRed": "\u7D05\u8272\u6587\u5B57",
  "color.bgDefault": "\u9810\u8A2D\u80CC\u666F",
  "color.bgGray": "\u7070\u8272\u80CC\u666F",
  "color.bgBrown": "\u68D5\u8272\u80CC\u666F",
  "color.bgOrange": "\u6A58\u8272\u80CC\u666F",
  "color.bgYellow": "\u9EC3\u8272\u80CC\u666F",
  "color.bgGreen": "\u7DA0\u8272\u80CC\u666F",
  "color.bgBlue": "\u85CD\u8272\u80CC\u666F",
  "color.bgPurple": "\u7D2B\u8272\u80CC\u666F",
  "color.bgPink": "\u7C89\u7D05\u8272\u80CC\u666F",
  "color.bgRed": "\u7D05\u8272\u80CC\u666F",
  "callout.note": "\u4FBF\u7C3D",
  "callout.info": "\u8CC7\u8A0A",
  "callout.todo": "\u5F85\u8FA6",
  "callout.tip": "\u63D0\u793A",
  "callout.success": "\u6210\u529F",
  "callout.question": "\u554F\u984C",
  "callout.warning": "\u8B66\u544A",
  "callout.failure": "\u5931\u6557",
  "callout.danger": "\u5371\u96AA",
  "callout.bug": "\u7F3A\u9677",
  "callout.example": "\u7BC4\u4F8B",
  "callout.quote": "\u5F15\u7528",
  "notice.noActiveNote": "\u6C92\u6709\u4F5C\u7528\u4E2D\u7684\u7B46\u8A18",
  "notice.linkCopied": "\u5DF2\u8907\u88FD\u5340\u584A\u9023\u7D50",
  "notice.linkCopyFailed": "\u8907\u88FD\u5340\u584A\u9023\u7D50\u5931\u6557",
  "notice.selectImage": "\u8ACB\u9078\u64C7\u5716\u7247\u6A94\u6848\u3002",
  "notice.insertImageFailed": "\u63D2\u5165\u5716\u7247\u5931\u6557\u3002",
  "notice.menuLayoutSaveFailed": "\u9078\u55AE\u7248\u9762\u5132\u5B58\u5931\u6557\uFF0C\u5DF2\u6062\u5FA9\u539F\u7248\u9762\u3002",
  "table.column": "\u6B04"
};
var zh_tw_default = zhTw;

// src/locale/helpers.ts
var localeMap = {
  en: en_default,
  zh: zh_default,
  "zh-cn": zh_default,
  "zh-tw": zh_tw_default,
  "zh-hk": zh_tw_default
};
var getLocale = () => {
  const language = ((0, import_obsidian.getLanguage)() || "en").trim().toLowerCase();
  return localeMap[language] || localeMap[language.split("-")[0]] || en_default;
};
function t(key) {
  const currentLocale = getLocale();
  return currentLocale[key] || en_default[key] || key;
}

// src/menuLayout.ts
var MENU_COMMANDS = {
  insert: [
    { id: "code", labelKey: "menu.code", icon: "code" },
    { id: "math", labelKey: "menu.math", icon: "sigma" },
    { id: "callout", labelKey: "menu.callout", icon: "pencil" },
    { id: "link", labelKey: "menu.link", icon: "link" },
    { id: "ext-link", labelKey: "menu.extLink", icon: "link-2" },
    { id: "image", labelKey: "menu.image", icon: "image" },
    { id: "table", labelKey: "menu.table", icon: "table" },
    { id: "today", labelKey: "menu.today", icon: "calendar" },
    { id: "time", labelKey: "menu.time", icon: "clock" },
    { id: "footnote", labelKey: "menu.footnote", icon: "hash" },
    { id: "comment", labelKey: "menu.comment", icon: "message-square" }
  ],
  transform: [
    { id: "paragraph", labelKey: "menu.paragraph", icon: "text" },
    { id: "h1", labelKey: "menu.h1", icon: "heading1" },
    { id: "h2", labelKey: "menu.h2", icon: "heading2" },
    { id: "h3", labelKey: "menu.h3", icon: "heading3" },
    { id: "todo", labelKey: "menu.todo", icon: "check-square" },
    { id: "bullet", labelKey: "menu.bullet", icon: "list" },
    { id: "numbered", labelKey: "menu.numbered", icon: "list-ordered" },
    { id: "blockquote", labelKey: "menu.blockquote", icon: "quote" },
    { id: "code", labelKey: "menu.code", icon: "code" },
    { id: "math", labelKey: "menu.math", icon: "sigma" },
    { id: "divider", labelKey: "menu.divider", icon: "minus" },
    { id: "callout", labelKey: "menu.callout", icon: "pencil" }
  ]
};
function asRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function knownIds(value, valid) {
  if (!Array.isArray(value)) return [];
  return value.filter((id, index) => typeof id === "string" && valid.includes(id) && value.indexOf(id) === index);
}
function normalizeMenuLayout(value) {
  const source = asRecord(value);
  const normalizeGroup = (group) => {
    const valid = MENU_COMMANDS[group].map((command) => command.id);
    const saved = asRecord(source[group]);
    const savedOrder = knownIds(saved.order, valid);
    const added = valid.filter((id) => !savedOrder.includes(id));
    const expanded = Array.isArray(saved.expanded) ? knownIds(saved.expanded, valid) : [...valid];
    if (Array.isArray(saved.order) && savedOrder.length > 0) {
      added.forEach((id) => {
        if (!expanded.includes(id)) expanded.push(id);
      });
    }
    return { order: [...savedOrder, ...added], expanded, collapsed: saved.collapsed === true };
  };
  return { insert: normalizeGroup("insert"), transform: normalizeGroup("transform") };
}
function setMenuGroupCollapsed(layout, group, collapsed) {
  const next = normalizeMenuLayout(layout);
  next[group].collapsed = collapsed;
  return next;
}
function setMenuCommandExpanded(layout, group, id, expanded) {
  const next = normalizeMenuLayout(layout);
  if (!next[group].order.includes(id)) return next;
  const direct = next[group].expanded.filter((command) => command !== id);
  if (expanded) direct.push(id);
  next[group].expanded = direct;
  return next;
}
function reorderMenuCommands(layout, group, visibleOrder) {
  const next = normalizeMenuLayout(layout);
  const valid = next[group].order;
  if (visibleOrder.some((id, index2) => !valid.includes(id) || visibleOrder.indexOf(id) !== index2)) return next;
  let index = 0;
  next[group].order = valid.map((id) => visibleOrder.includes(id) ? visibleOrder[index++] : id);
  return next;
}

// src/menuOrder.ts
var import_obsidian2 = require("obsidian");
var MenuOrderDrag = class extends import_obsidian2.Component {
  constructor(onReorder, onStart = () => {
  }) {
    super();
    this.onReorder = onReorder;
    this.onStart = onStart;
    this.drag = null;
    this.dragEvents = null;
    this.suppressClick = false;
  }
  get isDragging() {
    var _a, _b;
    return (_b = (_a = this.drag) == null ? void 0 : _a.started) != null ? _b : false;
  }
  get hasPointer() {
    return this.drag !== null;
  }
  bindRow(row, group, id) {
    row.addClass("wk-nb-order-row");
    row.dataset.menuGroup = group;
    row.dataset.itemId = id;
    const grip = row.createEl("button", {
      cls: "wk-nb-order-grip clickable-icon",
      attr: { type: "button" }
    });
    (0, import_obsidian2.setIcon)(grip, "grip-vertical");
    grip.createSpan({ cls: "wk-nb-sr-only", text: t("menu.reorder") });
    this.registerDomEvent(row, "pointerdown", () => {
      if (!this.drag) this.suppressClick = false;
    }, true);
    this.registerDomEvent(grip, "click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    this.registerDomEvent(grip, "pointerdown", (event) => this.start(event, row, group));
    this.registerDomEvent(grip, "keydown", (event) => {
      if (!event.altKey || event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
      event.preventDefault();
      event.stopPropagation();
      if (this.drag) return;
      const container = row.parentElement;
      if (!container) return;
      const rows = this.getRows(container, group);
      const index = rows.indexOf(row);
      const target = rows[index + (event.key === "ArrowUp" ? -1 : 1)];
      if (!target) return;
      container.insertBefore(row, event.key === "ArrowUp" ? target : target.nextSibling);
      this.onReorder(group, this.getIds(container, group), id);
    });
    this.registerDomEvent(row, "click", (event) => {
      if (!this.suppressClick) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      this.suppressClick = false;
    }, true);
  }
  cancel() {
    this.finish(false);
  }
  onunload() {
    this.cancel();
  }
  getRows(container, group) {
    return Array.from(container.children).filter((element) => element.hasClass("wk-nb-order-row") && element.dataset.menuGroup === group);
  }
  getIds(container, group) {
    return this.getRows(container, group).map((row) => {
      var _a;
      return (_a = row.dataset.itemId) != null ? _a : "";
    });
  }
  start(event, row, group) {
    if (event.button !== 0 || this.drag || !row.parentElement) return;
    event.preventDefault();
    event.stopPropagation();
    this.suppressClick = false;
    const container = row.parentElement;
    this.drag = {
      group,
      container,
      row,
      rows: this.getRows(container, group),
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      started: false
    };
    try {
      container.setPointerCapture(event.pointerId);
    } catch (e) {
    }
    const doc = row.ownerDocument;
    this.dragEvents = this.addChild(new import_obsidian2.Component());
    this.dragEvents.registerDomEvent(container, "lostpointercapture", (lost) => {
      var _a;
      if (lost.target === container && lost.pointerId === ((_a = this.drag) == null ? void 0 : _a.pointerId)) this.cancel();
    });
    this.dragEvents.registerDomEvent(doc, "pointermove", (move) => this.move(move), true);
    this.dragEvents.registerDomEvent(doc, "pointerup", (up) => {
      var _a;
      if (up.pointerId !== ((_a = this.drag) == null ? void 0 : _a.pointerId)) return;
      if (this.drag.started) {
        up.preventDefault();
        up.stopPropagation();
      }
      const rect = container.getBoundingClientRect();
      this.finish(up.clientX >= rect.left && up.clientX <= rect.right && up.clientY >= rect.top && up.clientY <= rect.bottom);
    }, true);
    this.dragEvents.registerDomEvent(doc, "pointercancel", (cancel) => {
      var _a;
      if (cancel.pointerId === ((_a = this.drag) == null ? void 0 : _a.pointerId)) this.cancel();
    }, true);
    const win = doc.defaultView;
    if (win) this.dragEvents.registerDomEvent(win, "blur", () => this.cancel());
    this.dragEvents.registerDomEvent(doc, "keydown", (key) => {
      if (key.key !== "Escape") return;
      key.preventDefault();
      key.stopImmediatePropagation();
      this.cancel();
    }, true);
  }
  move(event) {
    var _a;
    const drag = this.drag;
    if (!drag || event.pointerId !== drag.pointerId) return;
    if (!drag.started && Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 5) return;
    if (!drag.started) {
      drag.started = true;
      drag.row.addClass("is-sorting");
      this.onStart();
    }
    event.preventDefault();
    event.stopPropagation();
    const scroller = drag.container.closest(".wk-nb-action-menu-list, .wk-nb-menu-settings-list");
    if (scroller) {
      const rect2 = scroller.getBoundingClientRect();
      if (event.clientY < rect2.top + 24) scroller.scrollTop -= 14;
      if (event.clientY > rect2.bottom - 24) scroller.scrollTop += 14;
    }
    const target = (_a = drag.row.ownerDocument.elementFromPoint(event.clientX, event.clientY)) == null ? void 0 : _a.closest(".wk-nb-order-row");
    if (!target || target === drag.row || target.parentElement !== drag.container || target.dataset.menuGroup !== drag.group) return;
    const rect = target.getBoundingClientRect();
    drag.container.insertBefore(drag.row, event.clientY < rect.top + rect.height / 2 ? target : target.nextSibling);
  }
  finish(commit) {
    var _a;
    const drag = this.drag;
    if (!drag) return;
    const ids = this.getIds(drag.container, drag.group);
    const changed = ids.some((id, index) => id !== drag.rows[index].dataset.itemId);
    this.drag = null;
    drag.row.removeClass("is-sorting");
    try {
      drag.container.releasePointerCapture(drag.pointerId);
    } catch (e) {
    }
    if (this.dragEvents) this.removeChild(this.dragEvents);
    this.dragEvents = null;
    this.suppressClick = drag.started;
    if (!commit || !drag.started) {
      drag.rows.forEach((row) => drag.container.appendChild(row));
      return;
    }
    if (changed) this.onReorder(drag.group, ids, (_a = drag.row.dataset.itemId) != null ? _a : "");
  }
};

// src/settings.ts
var DATE_FORMAT_PLACEHOLDER = "YYYY-MM-DD";
var TIME_FORMAT_PLACEHOLDER = "HH:mm";
var DEFAULT_SETTINGS = {
  hoverDelay: 0,
  hideDelay: 200,
  dateFormat: "YYYY-MM-DD",
  timeFormat: "HH:mm",
  menuLayout: normalizeMenuLayout()
};
var BlockPluginSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.settingsEvents = null;
    this.groupEvents = {};
    this.plugin = plugin;
  }
  getSettingDefinitions() {
    const commandAliases = [
      ...Object.values(MENU_COMMANDS).flatMap((commands) => commands.map((command) => t(command.labelKey)))
    ];
    return [
      {
        name: t("settings.menuLayout.name"),
        desc: t("settings.menuLayout.desc"),
        aliases: commandAliases,
        render: (setting) => this.renderDeclarativeMenuLayout(setting)
      },
      {
        name: t("settings.hoverDelay.name"),
        desc: t("settings.hoverDelay.desc"),
        control: { type: "slider", key: "hoverDelay", defaultValue: DEFAULT_SETTINGS.hoverDelay, min: 0, max: 500, step: 50 }
      },
      {
        name: t("settings.hideDelay.name"),
        desc: t("settings.hideDelay.desc"),
        control: { type: "slider", key: "hideDelay", defaultValue: DEFAULT_SETTINGS.hideDelay, min: 0, max: 1e3, step: 50 }
      },
      {
        name: t("settings.dateFormat.name"),
        desc: t("settings.dateFormat.desc"),
        control: { type: "text", key: "dateFormat", defaultValue: DEFAULT_SETTINGS.dateFormat, placeholder: DATE_FORMAT_PLACEHOLDER }
      },
      {
        name: t("settings.timeFormat.name"),
        desc: t("settings.timeFormat.desc"),
        control: { type: "text", key: "timeFormat", defaultValue: DEFAULT_SETTINGS.timeFormat, placeholder: TIME_FORMAT_PLACEHOLDER }
      }
    ];
  }
  getControlValue(key) {
    switch (key) {
      case "hoverDelay":
        return this.plugin.settings.hoverDelay;
      case "hideDelay":
        return this.plugin.settings.hideDelay;
      case "dateFormat":
        return this.plugin.settings.dateFormat;
      case "timeFormat":
        return this.plugin.settings.timeFormat;
      default:
        return void 0;
    }
  }
  async setControlValue(key, value) {
    switch (key) {
      case "hoverDelay":
        if (typeof value !== "number" || !Number.isFinite(value)) return;
        this.plugin.settings.hoverDelay = Math.min(500, Math.max(0, Math.round(value / 50) * 50));
        break;
      case "hideDelay":
        if (typeof value !== "number" || !Number.isFinite(value)) return;
        this.plugin.settings.hideDelay = Math.min(1e3, Math.max(0, Math.round(value / 50) * 50));
        break;
      case "dateFormat":
      case "timeFormat":
        if (typeof value !== "string") return;
        this.plugin.settings[key] = value;
        break;
      default:
        return;
    }
    await this.plugin.saveSettings();
  }
  display() {
    const { containerEl } = this;
    this.hide();
    containerEl.empty();
    this.settingsEvents = this.plugin.addChild(new import_obsidian3.Component());
    new import_obsidian3.Setting(containerEl).setName(t("settings.menuLayout.name")).setDesc(t("settings.menuLayout.desc"));
    this.renderMenuGroups(containerEl);
    new import_obsidian3.Setting(containerEl).setName(t("settings.hoverDelay.name")).setDesc(t("settings.hoverDelay.desc")).addSlider((slider) => slider.setLimits(0, 500, 50).setValue(this.plugin.settings.hoverDelay).setDynamicTooltip().onChange(async (value) => {
      this.plugin.settings.hoverDelay = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.hideDelay.name")).setDesc(t("settings.hideDelay.desc")).addSlider((slider) => slider.setLimits(0, 1e3, 50).setValue(this.plugin.settings.hideDelay).setDynamicTooltip().onChange(async (value) => {
      this.plugin.settings.hideDelay = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.dateFormat.name")).setDesc(t("settings.dateFormat.desc")).addText((text) => text.setPlaceholder(DATE_FORMAT_PLACEHOLDER).setValue(this.plugin.settings.dateFormat).onChange(async (value) => {
      this.plugin.settings.dateFormat = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.timeFormat.name")).setDesc(t("settings.timeFormat.desc")).addText((text) => text.setPlaceholder(TIME_FORMAT_PLACEHOLDER).setValue(this.plugin.settings.timeFormat).onChange(async (value) => {
      this.plugin.settings.timeFormat = value;
      await this.plugin.saveSettings();
    }));
  }
  hide() {
    this.clearSettingsLifetime();
  }
  renderDeclarativeMenuLayout(setting) {
    this.clearSettingsLifetime();
    const lifetime = this.plugin.addChild(new import_obsidian3.Component());
    this.settingsEvents = lifetime;
    setting.settingEl.addClass("wk-nb-menu-settings-declarative");
    setting.controlEl.empty();
    this.renderMenuGroups(setting.controlEl);
    return () => this.clearSettingsLifetime(lifetime);
  }
  renderMenuGroups(containerEl) {
    const lifetime = this.settingsEvents;
    if (!lifetime) return;
    ["insert", "transform"].forEach((group) => {
      const section = containerEl.createEl("details", { cls: "wk-nb-menu-settings-group" });
      section.createEl("summary", { text: t(group === "insert" ? "menu.addInsert" : "menu.turnInto") });
      new import_obsidian3.Setting(section).setName(t("settings.menuLayout.position")).addExtraButton((button) => {
        button.setIcon("rotate-ccw").onClick(async () => {
          const layout = normalizeMenuLayout(this.plugin.settings.menuLayout);
          layout[group] = normalizeMenuLayout()[group];
          if (await this.persistMenuLayout(layout) && this.settingsEvents === lifetime && list.isConnected) this.renderMenuGroup(group, list);
        });
        button.extraSettingsEl.createSpan({ cls: "wk-nb-sr-only", text: t("settings.menuLayout.reset") });
      });
      const list = section.createDiv({ cls: "wk-nb-menu-settings-list" });
      this.renderMenuGroup(group, list);
    });
  }
  clearSettingsLifetime(expected) {
    if (expected && this.settingsEvents !== expected) return;
    if (this.settingsEvents) this.plugin.removeChild(this.settingsEvents);
    this.settingsEvents = null;
    this.groupEvents = {};
  }
  renderMenuGroup(group, list, focusId) {
    if (!this.settingsEvents) return;
    const lifetime = this.settingsEvents;
    const previous = this.groupEvents[group];
    if (previous) this.settingsEvents.removeChild(previous);
    const events = this.settingsEvents.addChild(new import_obsidian3.Component());
    this.groupEvents[group] = events;
    const orderDrag = events.addChild(new MenuOrderDrag((currentGroup, ids, movedId) => {
      void this.persistMenuLayout(reorderMenuCommands(this.plugin.settings.menuLayout, currentGroup, ids)).then(() => {
        if (this.settingsEvents === lifetime && list.isConnected) this.renderMenuGroup(group, list, movedId);
      });
    }));
    list.empty();
    const layout = this.plugin.settings.menuLayout[group];
    layout.order.forEach((id) => {
      var _a;
      const command = MENU_COMMANDS[group].find((item) => item.id === id);
      if (!command) return;
      const setting = new import_obsidian3.Setting(list).setName(t(command.labelKey)).addDropdown((dropdown) => dropdown.addOption("expanded", t("settings.menuLayout.expanded")).addOption("collapsed", t("settings.menuLayout.collapsed")).setValue(layout.expanded.includes(id) ? "expanded" : "collapsed").onChange(async (value) => {
        var _a2;
        const next = setMenuCommandExpanded(this.plugin.settings.menuLayout, group, id, value === "expanded");
        if (!await this.persistMenuLayout(next)) {
          dropdown.setValue(this.plugin.settings.menuLayout[group].expanded.includes(id) ? "expanded" : "collapsed");
          if (this.settingsEvents === lifetime && list.isConnected) {
            this.renderMenuGroup(group, list);
            (_a2 = list.querySelector(`[data-item-id="${id}"] select`)) == null ? void 0 : _a2.focus();
          }
        }
      }));
      orderDrag.bindRow(setting.settingEl, group, id);
      if (id === focusId) (_a = setting.settingEl.querySelector(".wk-nb-order-grip")) == null ? void 0 : _a.focus();
    });
  }
  async persistMenuLayout(layout) {
    try {
      await this.plugin.saveMenuLayout(layout);
      return true;
    } catch (e) {
      new import_obsidian3.Notice(t("notice.menuLayoutSaveFailed"));
      return false;
    }
  }
};

// src/blockHandles.ts
var import_view = require("@codemirror/view");
var import_obsidian8 = require("obsidian");

// src/notionActionMenu.ts
var import_obsidian6 = require("obsidian");

// src/blockTransform.ts
var import_state3 = require("@codemirror/state");
var import_obsidian4 = require("obsidian");

// src/blockRange.ts
var CALLOUT_HEADER = /^ {0,3}>[ \t]?\[!([^\]]+)\]([+-]?)(?:[ \t]+(.*))?$/;
var STANDALONE_BLOCK_ID = /^\^([A-Za-z0-9-]+)[ \t]*$/;
var QUOTE_PREFIX = /^ {0,3}>[ \t]?/;
var FENCE = /^ {0,3}(`{3,}|~{3,})(.*)$/;
var DIVIDER = /^ {0,3}(?:(?:\*[ \t]*){3,}|(?:-[ \t]*){3,}|(?:_[ \t]*){3,})$/;
var SETEXT = /^ {0,3}(?:=+|-+)[ \t]*$/;
var cache = /* @__PURE__ */ new WeakMap();
function indentation(text) {
  var _a, _b;
  return ((_b = (_a = text.match(/^[ \t]*/)) == null ? void 0 : _a[0]) != null ? _b : "").replace(/\t/g, "    ").length;
}
function listMarker(text) {
  const match = text.match(/^([ \t]*)(?:[-+*]|(\d+[.)]))[ \t]+(?:\[([^\]])\](?:[ \t]+|$))?/);
  if (!match) return null;
  return { type: match[3] !== void 0 ? "todo" : match[2] ? "numbered" : "bullet", indent: indentation(text) };
}
function isTableDelimiter(text) {
  if (!text.includes("|")) return false;
  const cells = text.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
  return cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell.trim()));
}
function standaloneType(doc, lineNo) {
  const text = doc.line(lineNo).text;
  if (FENCE.test(text) || text.trim() && indentation(text) >= 4) return "code";
  if (/^ {0,3}\$\$/.test(text)) return "math";
  if (/^ {0,3}%%/.test(text)) return "comment";
  if (CALLOUT_HEADER.test(text)) return "callout";
  if (QUOTE_PREFIX.test(text)) return "blockquote";
  if (DIVIDER.test(text)) return "divider";
  const list = listMarker(text);
  if (list) return list.type;
  if (/^ {0,3}#{1,6}(?:[ \t]+|$)/.test(text)) return "heading";
  if (lineNo < doc.lines && text.includes("|") && isTableDelimiter(doc.line(lineNo + 1).text)) return "table";
  if (/^ {0,3}!\s*(?:\[\[.*\]\]|\[.*\]\(.*\))[ \t]*$/.test(text)) return "embed";
  if (/^ {0,3}\[\^[^\]]+\]:/.test(text)) return "footnote";
  return "paragraph";
}
function range(doc, startLine, endLine, type) {
  return { from: doc.line(startLine).from, to: doc.line(endLine).to, startLine, endLine, type };
}
function getBlockRanges(doc) {
  const cached = cache.get(doc);
  if (cached) return cached;
  const blocks = [];
  for (let start = 1; start <= doc.lines; ) {
    const first = doc.line(start).text;
    let type = standaloneType(doc, start);
    let end = start;
    const fence = first.match(FENCE);
    if (start === 1 && first === "---") {
      let closing = start + 1;
      while (closing <= doc.lines && !/^(?:---|\.\.\.)[ \t]*$/.test(doc.line(closing).text)) closing++;
      if (closing <= doc.lines) {
        type = "frontmatter";
        end = closing;
      }
    } else if (fence) {
      while (end < doc.lines) {
        end++;
        const close = doc.line(end).text.match(FENCE);
        if (close && close[1][0] === fence[1][0] && close[1].length >= fence[1].length && !close[2].trim()) break;
      }
    } else if (type === "math") {
      if (!first.trim().slice(2).includes("$$")) {
        while (end < doc.lines) {
          end++;
          if (/\$\$[ \t]*$/.test(doc.line(end).text)) break;
        }
      }
    } else if (type === "comment") {
      if (!first.slice(first.indexOf("%%") + 2).includes("%%")) {
        while (end < doc.lines) {
          end++;
          if (doc.line(end).text.includes("%%")) break;
        }
      }
    } else if (type === "callout" || type === "blockquote") {
      while (end < doc.lines && QUOTE_PREFIX.test(doc.line(end + 1).text) && !CALLOUT_HEADER.test(doc.line(end + 1).text)) end++;
    } else if (type === "bullet" || type === "numbered" || type === "todo" || type === "footnote") {
      const baseIndent = indentation(first);
      while (end < doc.lines) {
        const next = doc.line(end + 1).text;
        const marker2 = listMarker(next);
        if (next.trim() && (indentation(next) > baseIndent || (marker2 == null ? void 0 : marker2.indent) === baseIndent && marker2.type === type)) {
          end++;
        } else if (!next.trim()) {
          let following = end + 2;
          while (following <= doc.lines && !doc.line(following).text.trim()) following++;
          if (following > doc.lines || indentation(doc.line(following).text) <= baseIndent) break;
          end = following;
        } else break;
      }
    } else if (type === "table") {
      end++;
      while (end < doc.lines && doc.line(end + 1).text.includes("|") && standaloneType(doc, end + 1) === "paragraph") end++;
    } else if (type === "code") {
      while (end < doc.lines) {
        let next = end + 1;
        while (next <= doc.lines && !doc.line(next).text.trim()) next++;
        if (next > doc.lines || indentation(doc.line(next).text) < 4) break;
        end = next;
      }
    } else if (type === "paragraph" && first.trim()) {
      while (end < doc.lines) {
        const next = doc.line(end + 1).text;
        if (SETEXT.test(next)) {
          end++;
          type = "heading";
          break;
        }
        if (!next.trim() || standaloneType(doc, end + 1) !== "paragraph") break;
        end++;
      }
    }
    if (first.trim() && type !== "frontmatter" && type !== "comment" && !STANDALONE_BLOCK_ID.test(first)) {
      let anchor = end + 1;
      while (anchor <= doc.lines && !doc.line(anchor).text.trim()) anchor++;
      if (anchor <= doc.lines && STANDALONE_BLOCK_ID.test(doc.line(anchor).text)) end = anchor;
    }
    blocks.push(range(doc, start, end, type));
    start = end + 1;
  }
  cache.set(doc, blocks);
  return blocks;
}

// src/blockDrag.ts
var import_state = require("@codemirror/state");
var structures = /* @__PURE__ */ new WeakMap();
var LIST_TYPES = ["bullet", "numbered", "todo"];
function columns(text) {
  let width = 0;
  for (const char of text) width += char === "	" ? 4 - width % 4 : 1;
  return width;
}
function stripIndent(text, width) {
  let at = 0, used = 0;
  while (at < text.length && used < width && /[ \t]/.test(text[at])) {
    used += text[at] === "	" ? 4 - used % 4 : 1;
    at++;
  }
  return " ".repeat(Math.max(0, used - width)) + text.slice(at);
}
function marker(text) {
  var _a;
  const match = text.match(/^([ \t]*)([-+*]|\d+[.)])([ \t]+)(?:\[([^\]])\]([ \t]+|$))?(.*)$/);
  if (!match) return null;
  const indent = columns(match[1]);
  return {
    indent,
    width: columns(match[1] + match[2] + match[3]),
    token: match[2],
    number: /^\d/.test(match[2]) ? parseInt(match[2], 10) : null,
    check: (_a = match[4]) != null ? _a : null,
    content: match[6]
  };
}
function isDragList(node) {
  return !node.item && LIST_TYPES.includes(node.type);
}
function isDragQuote(node) {
  return !node.item && (node.type === "callout" || node.type === "blockquote");
}
function parseScope(doc, lines, startLine, prefix, parent) {
  if (!lines.length) return [];
  const local = import_state.Text.of(lines);
  const ranges = [];
  for (const block of getBlockRanges(local)) {
    const previous = ranges[ranges.length - 1];
    const head = marker(local.line(block.startLine).text);
    const previousHead = previous ? marker(local.line(previous.startLine).text) : null;
    if (previous && LIST_TYPES.includes(previous.type) && LIST_TYPES.includes(block.type) && previous.endLine + 1 === block.startLine && (previousHead == null ? void 0 : previousHead.number) !== null && (head == null ? void 0 : head.number) !== null && previousHead && head && previousHead.indent === head.indent) {
      previous.endLine = block.endLine;
      previous.to = block.to;
    } else ranges.push({ ...block });
  }
  return ranges.map((block) => {
    const first = startLine + block.startLine - 1, last = startLine + block.endLine - 1;
    const content = lines.slice(block.startLine - 1, block.endLine);
    const anchor = content.findIndex((text) => STANDALONE_BLOCK_ID.test(text));
    const body = anchor < 0 ? content : content.slice(0, anchor);
    if (anchor >= 0) while (body.length && !body[body.length - 1].trim()) body.pop();
    const node = {
      from: doc.line(first).from,
      to: doc.line(last).to,
      startLine: first,
      endLine: last,
      type: block.type,
      item: false,
      parent,
      children: [],
      prefix,
      lines: content,
      marker: marker(content[0])
    };
    if (isDragQuote(node)) {
      const header = node.type === "callout" ? 1 : 0;
      node.children = parseScope(
        doc,
        body.slice(header).map((line) => line.replace(/^ {0,3}>[ \t]?/, "")),
        first + header,
        prefix + "> ",
        node
      );
    } else if (isDragList(node) && node.marker) {
      const starts = [0];
      for (let i = 1; i < body.length; i++) {
        const next = marker(body[i]);
        if ((next == null ? void 0 : next.indent) === node.marker.indent) starts.push(i);
      }
      node.children = starts.map((at, index) => {
        var _a;
        const end = ((_a = starts[index + 1]) != null ? _a : body.length) - 1;
        const itemLines = body.slice(at, end + 1);
        const head = marker(itemLines[0]);
        const item = {
          from: doc.line(first + at).from,
          to: doc.line(first + end).to,
          startLine: first + at,
          endLine: first + end,
          type: node.type,
          item: true,
          parent: node,
          children: [],
          prefix,
          lines: itemLines,
          marker: head
        };
        if (head) {
          const firstContent = (head.check === null ? "" : `[${head.check}] `) + head.content;
          item.children = parseScope(
            doc,
            [firstContent, ...itemLines.slice(1).map((line) => stripIndent(line, head.width))],
            item.startLine,
            prefix + " ".repeat(head.width),
            item
          );
        }
        return item;
      });
    }
    return node;
  });
}
function getDragStructure(doc) {
  const cached = structures.get(doc);
  if (cached) return cached;
  const nodes = parseScope(doc, Array.from({ length: doc.lines }, (_, i) => doc.line(i + 1).text), 1, "", null);
  structures.set(doc, nodes);
  return nodes;
}
function getDragPath(doc, lineNo) {
  const path = [];
  let nodes = getDragStructure(doc);
  for (; ; ) {
    const node = nodes.find((item) => item.startLine <= lineNo && lineNo <= item.endLine);
    if (!node) return path;
    path.push(node);
    nodes = node.children;
  }
}
function carryOwner(node) {
  for (let parent = node.parent; parent; parent = parent.parent) {
    if (parent.item && parent.startLine === node.startLine) return parent;
  }
  return node;
}
function sourceNode(doc, path, lineNo, selection) {
  if (selection) {
    const complete = path.find((node) => (isDragList(node) || isDragQuote(node)) && node.startLine === lineNo && node.startLine >= selection.first && node.endLine <= selection.last);
    if (complete) return carryOwner(complete);
  }
  const leaf = path[path.length - 1];
  if (leaf.type === "paragraph" || leaf.item) {
    for (let i = path.length - 1; i >= 0; i--) {
      if (isDragQuote(path[i])) break;
      if (path[i].item) return path[i];
    }
  }
  if (leaf.type === "paragraph" && leaf.parent && isDragQuote(leaf.parent)) {
    const line = doc.line(lineNo);
    return carryOwner({
      ...leaf,
      from: line.from,
      to: line.to,
      startLine: lineNo,
      endLine: lineNo,
      lines: [leaf.lines[lineNo - leaf.startLine]],
      children: []
    });
  }
  if (selection && leaf.type === "paragraph") {
    const first = Math.max(leaf.startLine, selection.first), last = Math.min(leaf.endLine, selection.last);
    return {
      ...leaf,
      from: doc.line(first).from,
      to: doc.line(last).to,
      startLine: first,
      endLine: last,
      lines: leaf.lines.slice(first - leaf.startLine, last - leaf.startLine + 1),
      children: []
    };
  }
  return carryOwner(leaf);
}
function sharedParent(nodes) {
  let parent = nodes[0].parent;
  while (parent) {
    const candidate = parent;
    if (nodes.every((node) => {
      for (let current = node.parent; current; current = current.parent) if (current === candidate) return true;
      return false;
    })) return parent;
    parent = parent.parent;
  }
  return null;
}
function getBlockSource(state, lineNo) {
  var _a, _b;
  const doc = state.doc;
  const selection = state.selection.ranges.find((range2) => !range2.empty && doc.lineAt(range2.from).number <= lineNo && doc.lineAt(range2.to - 1).number >= lineNo);
  let nodes;
  if (selection) {
    const first2 = doc.lineAt(selection.from).number, last2 = doc.lineAt(selection.to - 1).number;
    nodes = [];
    for (let at = first2; at <= last2; ) {
      const node = sourceNode(doc, getDragPath(doc, at), at, { first: first2, last: last2 });
      nodes.push(node);
      at = node.endLine + 1;
    }
  } else nodes = [sourceNode(doc, getDragPath(doc, lineNo), lineNo)];
  const first = Math.min(...nodes.map((node) => node.startLine)), last = Math.max(...nodes.map((node) => node.endLine));
  const from = doc.line(first).from, to = doc.line(last).to;
  const parent = sharedParent(nodes);
  const scope = parent ? parent.children : getDragStructure(doc);
  const scopeLines = parent ? isDragQuote(parent) ? parent.lines.slice(parent.type === "callout" ? 1 : 0).map((text) => text.replace(/^ {0,3}>[ \t]?/, "")) : parent.item && parent.marker ? [parent.marker.content, ...parent.lines.slice(1).map((text) => {
    var _a2, _b2;
    return stripIndent(text, (_b2 = (_a2 = parent.marker) == null ? void 0 : _a2.width) != null ? _b2 : 0);
  })] : parent.lines : [];
  let content;
  let prefix = nodes.length === 1 ? nodes[0].prefix : parent ? parent.prefix + (isDragQuote(parent) ? "> " : parent.item && parent.marker ? " ".repeat(parent.marker.width) : "") : "";
  if (nodes.length === 1) content = nodes[0].lines.join("\n");
  else if (parent && scope.length) {
    const base = parent.startLine + (parent.type === "callout" && !parent.item ? 1 : 0);
    content = scopeLines.slice(first - base, last - base + 1).join("\n");
  } else content = doc.sliceString(from, to);
  const indent = (_b = (_a = marker(content.split("\n")[0])) == null ? void 0 : _a.indent) != null ? _b : 0;
  if (indent) {
    content = content.split("\n").map((text) => stripIndent(text, indent)).join("\n");
    prefix += " ".repeat(indent);
  }
  return {
    from,
    to,
    startLine: first,
    endLine: last,
    type: nodes[0].type,
    text: doc.sliceString(from, to),
    content,
    prefix,
    nodes,
    document: doc
  };
}
function getWholeBlockRange(doc, lineNo) {
  var _a;
  const path = getDragPath(doc, lineNo);
  return carryOwner((_a = [...path].reverse().find((node) => isDragList(node) || isDragQuote(node))) != null ? _a : sourceNode(doc, path, lineNo));
}
function listTarget(list, item, line, prefix = list.prefix, parentItem = null) {
  var _a, _b;
  const head = (_a = item.marker) != null ? _a : list.marker;
  return {
    line,
    mode: "list",
    prefix: prefix + " ".repeat(parentItem ? 0 : (_b = head == null ? void 0 : head.indent) != null ? _b : 0),
    container: list,
    item: parentItem,
    marker: head,
    depth: columns(prefix.replace(/>/g, " "))
  };
}
function getDropTarget(doc, lineNo, after, inside, indent = 0, quoteOnly = false) {
  var _a, _b, _c, _d;
  const path = getDragPath(doc, lineNo), root = path[0];
  const outside = () => ({
    line: after ? root.endLine + 1 : root.startLine,
    mode: "outside",
    prefix: "",
    container: null,
    item: null,
    marker: null,
    depth: 0
  });
  if (!inside) return outside();
  const list = [...path].reverse().find(isDragList);
  const quote = [...path].reverse().find(isDragQuote);
  if (list && !quoteOnly && (!quote || path.indexOf(list) > path.indexOf(quote))) {
    const item = (_a = list.children.find((node) => node.startLine <= lineNo && lineNo <= node.endLine)) != null ? _a : list.children[0];
    if (indent < 0) {
      for (let parent = list.parent; parent; parent = parent.parent) {
        if (parent.item && parent.parent && isDragList(parent.parent)) {
          return listTarget(parent.parent, parent, after ? parent.endLine + 1 : parent.startLine);
        }
      }
      if (!quote) return outside();
    } else if (indent > 0 && item.marker) {
      const childList = [...item.children].reverse().find(isDragList);
      if (childList) return listTarget(
        childList,
        childList.children[0],
        childList.endLine + 1,
        childList.prefix + " ".repeat((_c = (_b = childList.marker) == null ? void 0 : _b.indent) != null ? _c : 0),
        item
      );
      const target = listTarget(list, item, item.endLine + 1, list.prefix + " ".repeat(item.marker.width), item);
      if (((_d = target.marker) == null ? void 0 : _d.number) !== null && target.marker) target.marker = { ...target.marker, number: 1 };
      return target;
    } else return listTarget(list, item, after ? item.endLine + 1 : item.startLine);
  }
  if (quote) {
    const child = quote.children.find((node) => node.startLine <= lineNo && lineNo <= node.endLine);
    const item = child && isDragList(child) ? path.find((node) => node.item && node.parent === child) : null;
    const boundary = (child == null ? void 0 : child.type) === "paragraph" ? { startLine: lineNo, endLine: lineNo } : item != null ? item : child;
    return {
      line: boundary ? after ? boundary.endLine + 1 : boundary.startLine : quote.startLine + 1,
      mode: "quote",
      prefix: quote.prefix + "> ",
      container: quote,
      item: null,
      marker: null,
      depth: 0
    };
  }
  return outside();
}
function itemText(lines, head, destination) {
  var _a;
  const token = destination.number === null ? destination.token : `${destination.number}${destination.token.slice(-1)}`;
  const check = (_a = head.check) != null ? _a : destination.check === null ? null : " ";
  const first = token + " " + (check === null ? "" : `[${check}] `) + head.content;
  const width = token.length + 1;
  return [first, ...lines.slice(1).map((text) => text.trim() ? " ".repeat(width) + stripIndent(text, head.width) : "")];
}
function adoptList(content, destination) {
  const lines = content.split("\n"), doc = import_state.Text.of(lines);
  const output = [];
  for (const node of getDragStructure(doc)) {
    if (isDragList(node)) {
      for (const item of node.children) if (item.marker) output.push(...itemText(item.lines, item.marker, destination));
    } else if (node.lines.some((text) => text.trim())) {
      const token = destination.number === null ? destination.token : `${destination.number}${destination.token.slice(-1)}`;
      const prefix = token + " ";
      const check = destination.check === null ? "" : "[ ] ";
      output.push(prefix + check + node.lines[0], ...node.lines.slice(1).map((text) => text.trim() ? " ".repeat(prefix.length) + text : ""));
    } else if (output.length) output.push("");
  }
  if (!output.length) {
    const token = destination.number === null ? destination.token : `${destination.number}${destination.token.slice(-1)}`;
    output.push(token + " " + (destination.check === null ? "" : "[ ] "));
  }
  return output;
}
function allLists(nodes) {
  return nodes.reduce((result, node) => [...result, ...isDragList(node) ? [node] : [], ...allLists(node.children)], []);
}
function affectedLists(source, target) {
  var _a;
  const result = /* @__PURE__ */ new Set();
  for (const node of (_a = source == null ? void 0 : source.nodes) != null ? _a : []) {
    if (isDragList(node)) result.add(node);
    for (let parent = node.parent; parent; parent = parent.parent) if (isDragList(parent)) result.add(parent);
  }
  if (target.container && isDragList(target.container)) result.add(target.container);
  return result;
}
function renumber(lines, original, affected, target) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  if (!lines.length) return;
  const doc = import_state.Text.of(lines.map((line) => line.text));
  for (const list of allLists(getDragStructure(doc)).reverse()) {
    if (((_a = list.marker) == null ? void 0 : _a.number) === null || ((_b = list.marker) == null ? void 0 : _b.number) === void 0) continue;
    const itemOrigins = list.children.map((item) => lines[item.startLine - 1]);
    const related = [...affected].filter((old) => itemOrigins.some((line) => line.origin !== null && old.children.some((item) => item.startLine === line.origin)));
    if (!related.length && !(itemOrigins.some((line) => line.inserted) && target.mode === "list" && list.prefix + " ".repeat(list.marker.indent) === target.prefix)) continue;
    const existing = itemOrigins.find((line) => !line.inserted && line.origin !== null);
    const previous = existing ? allLists(getDragStructure(original)).find((old) => old.children.some((item) => item.startLine === existing.origin)) : null;
    let number = (_g = (_f = (_c = previous == null ? void 0 : previous.marker) == null ? void 0 : _c.number) != null ? _f : (_e = (_d = related[0]) == null ? void 0 : _d.marker) == null ? void 0 : _e.number) != null ? _g : list.marker.number;
    if (target.container && related.includes(target.container)) number = (_i = (_h = target.container.marker) == null ? void 0 : _h.number) != null ? _i : number;
    if (target.item && list.prefix + " ".repeat(list.marker.indent) === target.prefix && ((_j = target.container) == null ? void 0 : _j.prefix) !== target.prefix) number = (_l = (_k = target.marker) == null ? void 0 : _k.number) != null ? _l : number;
    for (const item of list.children) {
      const head = item.marker;
      if (!head || head.number === null) continue;
      const row = lines[item.startLine - 1];
      const oldToken = head.token, newToken = `${number++}${oldToken.slice(-1)}`;
      const raw = row.text.match(/^([ \t]*(?:>[ \t]*)*)(\d+[.)])[ \t]+/);
      if (!raw) continue;
      const at = raw[1].length;
      row.text = row.text.slice(0, at) + newToken + row.text.slice(at + oldToken.length);
      const delta = newToken.length - oldToken.length;
      if (delta) for (let i = item.startLine; i < item.endLine; i++) {
        if (!lines[i].text.trim()) continue;
        const prefix = (_n = (_m = lines[i].text.match(/^(?:[ \t]*>[ \t]?)+/)) == null ? void 0 : _m[0]) != null ? _n : "";
        const text = lines[i].text.slice(prefix.length);
        lines[i].text = prefix + (delta > 0 ? " ".repeat(delta) + text : stripIndent(text, -delta));
      }
    }
  }
}
function canDrop(source, target) {
  if (target.mode !== "outside" && source.content.split("\n").some((line) => STANDALONE_BLOCK_ID.test(line))) return false;
  if (target.item && target.item.startLine >= source.startLine && target.item.endLine <= source.endLine) return false;
  if (target.container && target.container.startLine >= source.startLine && target.container.endLine <= source.endLine) return false;
  return target.line <= source.startLine || target.line > source.endLine;
}
function getDropEdit(doc, source, target) {
  if (doc !== source.document || !canDrop(source, target)) return null;
  return dropEdit(doc, source.content, target, source);
}
function getInsertEdit(doc, text, target) {
  return dropEdit(doc, text, target, null);
}
function dropEdit(doc, text, target, source) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let content = target.mode === "list" && target.marker ? adoptList(text, target.marker) : text.split("\n");
  content = content.map((text2) => target.prefix + text2);
  if (source && (target.line === source.startLine || target.line === source.endLine + 1) && content.join("\n") === source.text) return null;
  const lines = Array.from({ length: doc.lines }, (_, i) => ({ text: doc.line(i + 1).text, origin: i + 1, inserted: false }));
  if (!source && doc.length === 0) lines.length = 0;
  const count = source ? source.endLine - source.startLine + 1 : 0;
  if (source) lines.splice(source.startLine - 1, count);
  let at = target.line - 1 - (source && target.line > source.endLine ? count : 0);
  at = Math.max(0, Math.min(at, lines.length));
  const moved = content.map((text2, i) => ({ text: text2, origin: source && source.startLine + i <= source.endLine ? source.startLine + i : null, inserted: true }));
  if (target.mode === "outside") {
    const previous = (_b = (_a = lines[at - 1]) == null ? void 0 : _a.text) != null ? _b : "";
    const first = (_c = content[0]) != null ? _c : "";
    if (previous.trim() && first.trim() && !/^(?: {0,3}(?:>|#{1,6}\s|`{3,}|~{3,}|[-+*]\s|\d+[.)]\s|\$\$))/.test(first) && (/^ {0,3}>/.test(previous) || marker(previous))) moved.unshift({ text: "", origin: null, inserted: false });
    if (/^ {0,3}>/.test(first) && /^ {0,3}>/.test(previous) && !CALLOUT_HEADER.test(first)) moved.unshift({ text: "", origin: null, inserted: false });
    const next = (_e = (_d = lines[at]) == null ? void 0 : _d.text) != null ? _e : "";
    if (((_f = content[content.length - 1]) == null ? void 0 : _f.trim()) && next.trim() && /^ {0,3}>/.test(content[content.length - 1]) && /^ {0,3}>/.test(next) && !CALLOUT_HEADER.test(next)) moved.push({ text: "", origin: null, inserted: false });
    if (!source && previous.trim() && ((_g = moved[0]) == null ? void 0 : _g.text.trim())) moved.unshift({ text: "", origin: null, inserted: false });
    if (!source && next.trim() && ((_h = moved[moved.length - 1]) == null ? void 0 : _h.text.trim())) moved.push({ text: "", origin: null, inserted: false });
  }
  lines.splice(at, 0, ...moved);
  renumber(lines, doc, affectedLists(source, target), target);
  const before = doc.toString(), after = lines.map((line) => line.text).join("\n");
  if (before === after) return null;
  let from = 0, oldTo = before.length, newTo = after.length;
  while (from < oldTo && from < newTo && before[from] === after[from]) from++;
  while (oldTo > from && newTo > from && before[oldTo - 1] === after[newTo - 1]) {
    oldTo--;
    newTo--;
  }
  const firstMoved = lines.findIndex((line) => line.inserted), lastMoved = lines.length - 1 - [...lines].reverse().findIndex((line) => line.inserted);
  const position = (line) => lines.slice(0, line).reduce((sum, item) => sum + item.text.length + 1, 0);
  return {
    changes: { from, to: oldTo, insert: after.slice(from, newTo) },
    selection: { anchor: position(firstMoved), head: position(lastMoved) + lines[lastMoved].text.length }
  };
}
function getRemoveEdit(doc, source) {
  if (doc !== source.document) return null;
  const lines = Array.from({ length: doc.lines }, (_, i) => ({ text: doc.line(i + 1).text, origin: i + 1, inserted: false }));
  lines.splice(source.startLine - 1, source.endLine - source.startLine + 1);
  const outside = { line: 1, mode: "outside", prefix: "", container: null, item: null, marker: null, depth: 0 };
  renumber(lines, doc, affectedLists(source, outside), outside);
  const after = lines.map((line) => line.text).join("\n");
  if (after === doc.toString()) return null;
  return { changes: { from: 0, to: doc.length, insert: after }, selection: { anchor: Math.min(source.from, after.length), head: Math.min(source.from, after.length) } };
}

// src/blockTransfer.ts
var import_state2 = require("@codemirror/state");
var TransferError = class extends Error {
};
function mapLiveLines(text, rewrite) {
  const doc = import_state2.Text.of(text.split("\n"));
  const first = /^---[ \t]*\n/.test(text) ? getBlockRanges(doc)[0] : null;
  const yamlEnd = (first == null ? void 0 : first.type) === "frontmatter" ? first.endLine : 0;
  let offset = 0, number = 0, fence = null, math = false, comment = false;
  return text.split("\n").map((line) => {
    var _a, _b, _c, _d, _e, _f, _g;
    number++;
    const body = line.replace(/^ {0,3}(?:>[ \t]*)+/, "");
    const indentation2 = (_b = (_a = body.match(/^[ \t]*/)) == null ? void 0 : _a[0].replace(/\t/g, "    ").length) != null ? _b : 0;
    const syntax = indentation2 < 4 || ((_c = getDragPath(doc, number).slice(-1)[0]) == null ? void 0 : _c.type) !== "code";
    const literal = body.trimStart().replace(/^(?:[-+*]|\d+[.)])[ \t]+(?:\[[^\]]\][ \t]+)?/, "");
    const match = literal.match(/^(`{3,}|~{3,})/);
    let live = false;
    if (number <= yamlEnd) {
    } else if (fence) {
      if (match && match[1][0] === fence[0] && match[1].length >= fence.length) fence = null;
    } else if (math) {
      if (/\$\$[ \t]*$/.test(literal)) math = false;
    } else if (comment) {
      if (((_e = (_d = literal.match(/%%/g)) == null ? void 0 : _d.length) != null ? _e : 0) % 2) comment = false;
    } else if (match && syntax) fence = match[1];
    else if (syntax && literal.startsWith("$$")) math = !/^\$\$.*\$\$[ \t]*$/.test(literal);
    else if (syntax && ((_g = (_f = literal.match(/%%/g)) == null ? void 0 : _f.length) != null ? _g : 0) % 2) comment = true;
    else if (syntax && !literal.startsWith("%%")) live = true;
    const result = live ? rewrite(line, offset) : line;
    offset += line.length + 1;
    return result;
  }).join("\n");
}
function idPositions(text) {
  const ids = [];
  mapLiveLines(text, (line, offset) => {
    const anchor = line.match(/(?:^|\s)\^([A-Za-z0-9-]+)[ \t]*$/);
    if (anchor) {
      const at = line.lastIndexOf("^" + anchor[1]);
      ids.push({ id: anchor[1], from: offset + at + 1, to: offset + at + 1 + anchor[1].length });
    }
    return line;
  });
  return ids;
}
function getBlockIds(text) {
  return idPositions(text).map((item) => item.id);
}
function freshId(used, generate) {
  for (let attempt = 0; attempt < 100; attempt++) {
    const id = generate();
    if (/^[A-Za-z0-9-]+$/.test(id) && !used.has(id)) {
      used.add(id);
      return id;
    }
  }
  throw new TransferError("idConflict");
}
function applyEdits(text, edits) {
  for (const edit of edits.sort((a, b) => b.from - a.from)) text = text.slice(0, edit.from) + edit.insert + text.slice(edit.to);
  return text;
}
function nativeNode(source, node) {
  var _a;
  const path = getDragPath(source.document, node.startLine);
  const quote = path.find(isDragQuote);
  if (quote) return quote;
  if (!node.item && ["bullet", "numbered", "todo"].includes(node.type)) return node;
  return (_a = [...path].reverse().find((item) => item.item)) != null ? _a : path[path.length - 1];
}
function createReferencePlan(source, generate) {
  var _a;
  const doc = source.document, before = doc.toString(), existing = getBlockIds(before), used = new Set(existing);
  const seen = /* @__PURE__ */ new Set(), ids = [], edits = [];
  let expanded = false;
  for (const selected of source.nodes) {
    if (!selected.lines.some((line) => line.trim())) continue;
    const node = nativeNode(source, selected);
    if (!node || ["frontmatter", "comment", "divider", "footnote"].includes(node.type) || !node.lines.some((line) => line.trim())) throw new TransferError("unsupportedReference");
    const key = `${node.from}:${node.to}`;
    if (seen.has(key)) continue;
    seen.add(key);
    expanded || (expanded = node.from < source.from || node.to > source.to);
    const last = doc.line(node.endLine), first = doc.line(node.startLine);
    const standalone = last.text.match(STANDALONE_BLOCK_ID);
    const inline = (node.item ? first.text : last.text).match(/\s\^([A-Za-z0-9-]+)[ \t]*$/);
    const simple = node.item || ["paragraph", "embed"].includes(node.type) || node.type === "heading" && /^ {0,3}#{1,6}[ \t]/.test(first.text);
    const id = (_a = standalone == null ? void 0 : standalone[1]) != null ? _a : simple ? inline == null ? void 0 : inline[1] : void 0;
    if (id) {
      if (existing.filter((value) => value === id).length !== 1) throw new TransferError("idConflict");
      ids.push(id);
    } else {
      const next = freshId(used, generate);
      const at = node.item ? first.to : last.to;
      const followingBlank = node.endLine < doc.lines && !doc.line(node.endLine + 1).text.trim();
      const insert = simple ? ` ^${next}` : `

^${next}` + (followingBlank || node.endLine === doc.lines ? "" : "\n");
      edits.push({ from: at, to: at, insert });
      ids.push(next);
    }
  }
  if (!ids.length) throw new TransferError("unsupportedReference");
  return { after: applyEdits(before, edits), ids, expanded };
}
function createTransferPlan(source, targetDoc, target, mode, options) {
  let sourceAfter = source.document.toString(), content = source.content, expanded = false;
  const ids = /* @__PURE__ */ new Map();
  if (mode === "link" || mode === "embed") {
    const references = createReferencePlan(source, options.newId);
    sourceAfter = references.after;
    expanded = references.expanded;
    content = references.ids.map((id) => (mode === "embed" ? "!" : "") + options.blockLink(id)).join("\n");
  } else {
    const positions = idPositions(content), used = new Set(getBlockIds(targetDoc.toString()));
    if (target.mode !== "outside" && content.split("\n").some((line) => STANDALONE_BLOCK_ID.test(line))) throw new TransferError("anchorContainer");
    for (const item of positions) {
      if (ids.has(item.id) || mode === "move" && used.has(item.id)) throw new TransferError("idConflict");
      ids.set(item.id, mode === "copy" ? freshId(used, options.newId) : item.id);
    }
    if (mode === "copy") content = applyEdits(content, positions.map((item) => {
      var _a;
      return { ...item, insert: (_a = ids.get(item.id)) != null ? _a : item.id };
    }));
    content = options.rewriteLinks(content, ids);
    if (mode === "move") {
      const removal = getRemoveEdit(source.document, source);
      if (!removal) throw new TransferError("changed");
      sourceAfter = import_state2.ChangeSet.of(removal.changes, source.document.length).apply(source.document).toString();
    }
  }
  const insertion = getInsertEdit(targetDoc, content, target);
  if (!insertion) throw new TransferError("changed");
  const targetAfter = import_state2.ChangeSet.of(insertion.changes, targetDoc.length).apply(targetDoc).toString();
  return { sourceAfter, targetAfter, targetSelection: insertion.selection, expanded };
}
function relativePath(from, to) {
  const parent = from.split("/").slice(0, -1), path = to.split("/");
  while (parent.length && path.length && parent[0] === path[0]) {
    parent.shift();
    path.shift();
  }
  return [...parent.map(() => ".."), ...path].join("/");
}
function splitLink(text) {
  const at = text.indexOf("#");
  return at < 0 ? [text, ""] : [text.slice(0, at), text.slice(at)];
}
function rewriteContentLinks(text, destinationPath, resolve, wikiPath) {
  const rewrite = (segment) => segment.replace(
    /(!?\[\[([^\]\n]+)\]\])|(!?\[([^\]\n]*)\]\((<[^>\n]*>|(?:\\.|[^\\()\s]|\([^()\n]*\))+)([ \t]+(?:"[^"\n]*"|'[^'\n]*'))?\))/g,
    (whole, wiki, body, markdown, label, url, title) => {
      if (wiki && body) {
        const separator = body.indexOf("|"), caption = separator < 0 ? "" : body.slice(separator);
        const [path2, subpath2] = splitLink(separator < 0 ? body : body.slice(0, separator));
        const file2 = resolve(path2, subpath2, false);
        return file2 ? `${wiki.startsWith("!") ? "!" : ""}[[${wikiPath(file2.path)}${file2.subpath}${caption}]]` : whole;
      }
      if (!markdown || !url) return whole;
      let decoded;
      try {
        decoded = decodeURIComponent(url.replace(/^<|>$/g, "").replace(/\\([()])/g, "$1"));
      } catch (e) {
        return whole;
      }
      if (/^(?:[A-Za-z][A-Za-z0-9+.-]*:|\/\/)/.test(decoded)) return whole;
      const [path, subpath] = splitLink(decoded), file = resolve(path, subpath, true);
      if (!file) return whole;
      const fragment = file.subpath ? "#" + encodeURIComponent(file.subpath.slice(1)).replace(/%5E/g, "^") : "";
      const target = relativePath(destinationPath, file.path).split("/").map((part) => encodeURIComponent(part)).join("/") + fragment;
      return `${markdown.startsWith("!") ? "!" : ""}[${label != null ? label : ""}](${target}${title != null ? title : ""})`;
    }
  );
  return mapLiveLines(text, (line) => line.split(/(`+[^`]*`+)/).map((part) => part.startsWith("`") ? part : rewrite(part)).join(""));
}
function textChange(before, after) {
  const old = before.toString();
  let from = 0, to = old.length, end = after.length;
  while (from < to && from < end && old[from] === after[from]) from++;
  while (to > from && end > from && old[to - 1] === after[end - 1]) {
    to--;
    end--;
  }
  return { from, to, insert: after.slice(from, end) };
}

// src/blockTransform.ts
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set(["avif", "bmp", "gif", "jpeg", "jpg", "png", "svg", "webp"]);
function stripPrefix(lineText) {
  var _a;
  const callout = lineText.match(CALLOUT_HEADER);
  if (callout) return (_a = callout[3]) != null ? _a : "";
  const comment = lineText.match(/^%%(.*)%%$/);
  if (comment) return comment[1];
  return lineText.replace(/^([ \t]*)(?:#{1,6}(?:[ \t]+|$)|[-*+][ \t]+(?:\[[^\]]\](?:[ \t]+|$))?|\d+[.)][ \t]+|>[ \t]?)/, "$1");
}
async function insertImageFiles(plugin, view, lineNo, files) {
  var _a, _b;
  const imageFiles = files.filter(isImageFile);
  if (imageFiles.length === 0) {
    new import_obsidian4.Notice(t("notice.selectImage"));
    return;
  }
  try {
    const sourcePath = (_b = (_a = plugin.app.workspace.getActiveFile()) == null ? void 0 : _a.path) != null ? _b : "";
    const links = [];
    for (const file of imageFiles) {
      const safeName = sanitizeAttachmentName(file.name);
      const targetPath = await plugin.app.fileManager.getAvailablePathForAttachment(safeName, sourcePath);
      const savedFile = await plugin.app.vault.createBinary(targetPath, await file.arrayBuffer());
      links.push(toEmbedLink(plugin, savedFile, sourcePath));
    }
    insertTextAtLineEnd(view, lineNo, links.join("\n"), true);
  } catch (e) {
    new import_obsidian4.Notice(t("notice.insertImageFailed"));
  }
}
function insertTextAtLineEnd(view, lineNo, insertText, insertAsBlock) {
  const line = view.state.doc.line(lineNo);
  const needsNewLine = insertAsBlock && line.text.trim().length > 0;
  const prefix = needsNewLine ? "\n" : "";
  const pos = line.to;
  view.dispatch({
    changes: {
      from: pos,
      insert: prefix + insertText
    },
    selection: { anchor: pos + prefix.length + insertText.length },
    scrollIntoView: true,
    userEvent: "insert.block"
  });
}
function isImageFile(file) {
  const ext = getFileExtension(file.name);
  return IMAGE_EXTENSIONS.has(ext);
}
function sanitizeAttachmentName(name) {
  return name.replace(/[\\/\r\n\t]/g, "-").trim() || "image.png";
}
function getFileExtension(name) {
  const index = name.lastIndexOf(".");
  if (index < 0) return "";
  return name.slice(index + 1).toLowerCase();
}
function toEmbedLink(plugin, file, sourcePath) {
  return `!${plugin.app.fileManager.generateMarkdownLink(file, sourcePath)}`;
}
function reindentContinuation(text, oldWidth, newWidth) {
  if (!text.trim()) return text;
  let at = 0, width = 0;
  while (at < text.length && width < oldWidth && /[ \t]/.test(text[at])) {
    width += text[at] === "	" ? 4 - width % 4 : 1;
    at++;
  }
  return " ".repeat(newWidth + Math.max(0, width - oldWidth)) + text.slice(at);
}
function transformContent(doc, unwrapFences) {
  var _a;
  const result = [];
  for (const block of getBlockRanges(doc)) {
    const start = block.startLine, end = block.endLine;
    const lines = Array.from({ length: end - start + 1 }, (_, i) => doc.line(start + i).text);
    const preservePrefix = !["bullet", "numbered", "todo", "heading"].includes(block.type);
    if (block.type === "callout" || block.type === "blockquote") {
      for (const line of lines) {
        const header = line.match(CALLOUT_HEADER);
        if (header) {
          if (header[3]) result.push({ text: header[3], preservePrefix: true });
        } else result.push({ text: line.replace(/^ {0,3}>[ \t]?/, ""), preservePrefix: true });
      }
    } else if (unwrapFences && start === block.startLine && end === block.endLine) {
      const openingFence = block.type === "code" ? lines[0].match(/^ {0,3}(`{3,}|~{3,})/) : null;
      if (openingFence) {
        lines.shift();
        const closingFence = ((_a = lines[lines.length - 1]) != null ? _a : "").match(/^ {0,3}(`{3,}|~{3,})[ \t]*$/);
        if (closingFence && closingFence[1][0] === openingFence[1][0] && closingFence[1].length >= openingFence[1].length) lines.pop();
      } else if (block.type === "code") {
        for (let i = 0; i < lines.length; i++) lines[i] = lines[i].replace(/^(?: {4}| {0,3}\t)/, "");
      } else if (block.type === "math") {
        lines[0] = lines[0].replace(/^ {0,3}\$\$[ \t]*/, "");
        const last = lines.length - 1;
        lines[last] = lines[last].replace(/[ \t]*\$\$[ \t]*$/, "");
        if (lines.length > 1 && !lines[0]) lines.shift();
        if (lines.length > 1 && !lines[lines.length - 1]) lines.pop();
      } else if (block.type === "comment") {
        lines[0] = lines[0].replace(/^ {0,3}%%[ \t]?/, "");
        const last = lines.length - 1;
        lines[last] = lines[last].replace(/[ \t]?%%[ \t]*$/, "");
        if (lines.length > 1 && !lines[0]) lines.shift();
        if (lines.length > 1 && !lines[lines.length - 1]) lines.pop();
      } else if (block.type === "heading" && lines.length > 1) lines.pop();
      result.push(...lines.map((text) => ({ text, preservePrefix })));
    } else result.push(...lines.map((text) => ({ text, preservePrefix })));
  }
  return result.length ? result : [{ text: "", preservePrefix: true }];
}
function transformLine(view, lineNo, targetType) {
  var _a, _b, _c, _d, _e, _f;
  const selected = getBlockSource(view.state, lineNo);
  const selectedContent = selected.content;
  if (typeof selectedContent !== "string") return;
  let original = selectedContent;
  const anchored = getBlockIds(original);
  const listTarget2 = ["bullet", "numbered", "todo", "toggle"].includes(targetType);
  if (anchored.length && (["comment", "divider"].includes(targetType) || anchored.length > 1 && !listTarget2)) {
    new import_obsidian4.Notice(t("transfer.anchorTransform"));
    return;
  }
  let anchor = null;
  const separate = selected.nodes.length === 1 ? original.match(/\n[ \t\n]*\^([A-Za-z0-9-]+)[ \t]*$/) : null;
  if (separate) {
    anchor = separate[1];
    original = original.slice(0, separate.index);
  } else if (selected.nodes.length === 1) {
    const node = selected.nodes[0];
    const item = node.item || isDragList(node) && node.children.length === 1;
    const lines2 = original.split("\n"), at = item ? 0 : lines2.length - 1;
    const selectedType = selected.type;
    if (item || selectedType === "paragraph" || selectedType === "heading" || selectedType === "embed") {
      const sourceLine = lines2[at];
      if (typeof sourceLine !== "string") return;
      const inline = /[ \t]+\^([A-Za-z0-9-]+)[ \t]*$/.exec(sourceLine);
      if (inline) {
        const blockId = inline[1];
        if (typeof blockId !== "string") return;
        anchor = blockId;
        lines2[at] = sourceLine.slice(0, inline.index);
        original = lines2.join("\n");
      }
    }
  }
  if (anchored.length && !anchor && (targetType.startsWith("callout-") || ["blockquote", "code", "math"].includes(targetType))) {
    new import_obsidian4.Notice(t("transfer.anchorTransform"));
    return;
  }
  const contentDoc = import_state3.Text.of(original.split("\n"));
  const block = getBlockRanges(contentDoc).find((block2) => block2.from === 0 && block2.to === contentDoc.length);
  if ((block == null ? void 0 : block.type) === targetType && (targetType === "math" || targetType === "comment" || targetType === "code" && /^ {0,3}(?:`{3,}|~{3,})/.test(original))) return;
  const callout = targetType.startsWith("callout-") ? targetType.slice(8) : null;
  const wrap = callout !== null || targetType === "blockquote";
  const contentLines = transformContent(contentDoc, !wrap);
  const lines = contentLines.map((line) => line.text);
  let newText;
  if (callout !== null) {
    const header = original.split("\n")[0].match(CALLOUT_HEADER);
    if (header && (block == null ? void 0 : block.type) === "callout") {
      const sourceLines = original.split("\n");
      sourceLines[0] = `> [!${callout}]${header[2]}${header[3] !== void 0 ? ` ${header[3]}` : ""}`;
      newText = sourceLines.join("\n");
    } else newText = `> [!${callout}]
` + lines.map((line) => line ? `> ${line}` : ">").join("\n");
  } else if (targetType === "blockquote") {
    newText = lines.map((line) => line ? `> ${line}` : ">").join("\n");
  } else if (targetType === "code") {
    const content = lines.join("\n");
    const runs = (_a = content.match(/`{3,}/g)) != null ? _a : [];
    const fence = "`".repeat(Math.max(3, ...runs.map((run) => run.length + 1)));
    newText = `${fence}
${content}
${fence}`;
  } else if (targetType === "math") {
    newText = `$$
${lines.join("\n")}
$$`;
  } else if (targetType === "comment") {
    newText = `%%
${lines.join("\n")}
%%`;
  } else if (targetType === "divider") {
    newText = "---";
  } else {
    let number = 0;
    const convertLine = ({ text: line, preservePrefix }) => {
      var _a2, _b2, _c2, _d2;
      const content = preservePrefix ? line : stripPrefix(line);
      const indent = (_b2 = (_a2 = content.match(/^[ \t]*/)) == null ? void 0 : _a2[0]) != null ? _b2 : "";
      const body = content.slice(indent.length);
      if (!body && contentLines.length > 1) return content;
      switch (targetType) {
        case "h1":
          return `${indent}# ${body}`;
        case "h2":
          return `${indent}## ${body}`;
        case "h3":
          return `${indent}### ${body}`;
        case "bullet":
        case "toggle":
          return `${indent}- ${body}`;
        case "numbered":
          return `${indent}${++number}. ${body}`;
        case "todo": {
          const status = (_d2 = (_c2 = line.match(/^[ \t]*[-*+][ \t]+\[([^\]])\]/)) == null ? void 0 : _c2[1]) != null ? _d2 : " ";
          return `${indent}- [${status}] ${body}`;
        }
        default:
          return content;
      }
    };
    const convertedLines = [];
    for (const node of getDragStructure(contentDoc)) {
      if (!isDragList(node)) {
        for (const line of transformContent(import_state3.Text.of(node.lines), true)) convertedLines.push(convertLine(line));
        continue;
      }
      for (const item of node.children) {
        const first = convertLine({ text: item.lines[0], preservePrefix: false });
        const head = (_c = (_b = first.match(/^([ \t]*(?:[-+*]|\d+[.)])[ \t]+)/)) == null ? void 0 : _b[1]) != null ? _c : "";
        const width = head.replace(/\t/g, "    ").length;
        convertedLines.push(first);
        for (const line of item.lines.slice(1)) {
          convertedLines.push(reindentContinuation(line, (_e = (_d = item.marker) == null ? void 0 : _d.width) != null ? _e : 0, width));
        }
      }
    }
    newText = convertedLines.join("\n");
  }
  if (anchor) {
    const output = import_state3.Text.of(newText.split("\n")), first = getBlockRanges(output).find((range2) => output.sliceString(range2.from, range2.to).trim());
    if (first) {
      const item = ((_f = selected.nodes[0]) == null ? void 0 : _f.item) && listTarget2;
      const simple = item || first.type === "paragraph" || first.type === "heading" && /^ {0,3}#{1,6}[ \t]/.test(output.line(first.startLine).text);
      const at = item ? output.line(first.startLine).to : output.line(first.endLine).to;
      const tail = newText.slice(at);
      newText = newText.slice(0, at) + (simple ? ` ^${anchor}` : `

^${anchor}` + (tail && !tail.startsWith("\n\n") ? "\n" : "")) + tail;
    }
  }
  newText = newText.split("\n").map((line) => selected.prefix + line).join("\n");
  if (newText === selected.text) return;
  view.dispatch({
    changes: { from: selected.from, to: selected.to, insert: newText },
    selection: { anchor: selected.from, head: selected.from + newText.length },
    scrollIntoView: true,
    userEvent: "transform.block"
  });
}
function selectWholeBlock(view, lineNo) {
  const block = getWholeBlockRange(view.state.doc, lineNo);
  view.dispatch({ selection: { anchor: block.from, head: block.to }, scrollIntoView: true, userEvent: "select.block" });
}
function insertBlock(plugin, view, lineNo, targetType) {
  const line = view.state.doc.line(lineNo);
  const settings = plugin.settings;
  let insertText = "";
  let cursorOffset = 0;
  let isMetadata = false;
  let customPos = null;
  if (targetType.startsWith("callout-")) {
    const type = targetType.replace("callout-", "");
    insertText = `> [!${type}]
> `;
    cursorOffset = insertText.length;
  } else {
    switch (targetType) {
      case "h1":
        insertText = "# ";
        break;
      case "h2":
        insertText = "## ";
        break;
      case "h3":
        insertText = "### ";
        break;
      case "todo":
        insertText = "- [ ] ";
        break;
      case "toggle":
      case "bullet":
        insertText = "- ";
        break;
      case "numbered":
        insertText = "1. ";
        break;
      case "blockquote":
        insertText = "> ";
        break;
      case "paragraph":
        insertText = "";
        break;
      case "code":
        insertText = "```\n\n```";
        cursorOffset = 4;
        break;
      case "math":
        insertText = "$$\n\n$$";
        cursorOffset = 3;
        break;
      case "divider":
        insertText = "---\n";
        break;
      // Advanced types
      case "link":
        insertText = "[[]]";
        cursorOffset = 2;
        break;
      case "ext-link":
        insertText = "[]()";
        cursorOffset = 1;
        break;
      case "embed":
        insertText = "![[]]";
        cursorOffset = 3;
        break;
      case "tag":
        insertText = "#";
        cursorOffset = 1;
        break;
      case "comment":
        insertText = "%%  %%";
        cursorOffset = 3;
        break;
      case "today":
        insertText = (0, import_obsidian4.moment)().format(settings.dateFormat);
        break;
      case "yesterday":
        insertText = (0, import_obsidian4.moment)().subtract(1, "days").format(settings.dateFormat);
        break;
      case "tomorrow":
        insertText = (0, import_obsidian4.moment)().add(1, "days").format(settings.dateFormat);
        break;
      case "time":
        insertText = (0, import_obsidian4.moment)().format(settings.timeFormat);
        break;
      case "table": {
        const col1 = `${t("table.column")} 1`;
        const col2 = `${t("table.column")} 2`;
        const col3 = `${t("table.column")} 3`;
        insertText = `| ${col1} | ${col2} | ${col3} |
| --- | --- | --- |
|  |  |  |
|  |  |  |`;
        cursorOffset = 7 + col1.length + col2.length;
        break;
      }
      case "frontmatter": {
        isMetadata = true;
        const firstLine = view.state.doc.line(1);
        if (firstLine.text === "---") {
          return;
        }
        insertText = "---\n\n---\n";
        customPos = 0;
        cursorOffset = 4;
        break;
      }
      case "footnote": {
        const footnoteId = Math.floor(Math.random() * 1e3);
        insertText = `[^${footnoteId}]`;
        const docEnd = view.state.doc.length;
        view.dispatch({
          changes: { from: docEnd, insert: `

[^${footnoteId}]: ` }
        });
        break;
      }
      default:
        insertText = "";
        break;
    }
  }
  const pos = customPos !== null ? customPos : line.to;
  const isNewLine = !isMetadata && !["link", "ext-link", "embed", "tag", "comment", "today", "yesterday", "tomorrow", "time"].includes(targetType);
  const needsNewLine = isNewLine && line.text.trim().length > 0;
  view.dispatch({
    changes: {
      from: pos,
      insert: (needsNewLine ? "\n" : "") + insertText
    },
    selection: { anchor: (customPos !== null ? 0 : pos) + (needsNewLine ? 1 : 0) + (cursorOffset || insertText.length) },
    scrollIntoView: true,
    userEvent: "insert.block"
  });
}

// src/notionInsertMenu.ts
var import_obsidian5 = require("obsidian");
var CALLOUT_OPTIONS = [
  { type: "note", label: "note" },
  { type: "info", label: "info" },
  { type: "todo", label: "todo" },
  { type: "tip", label: "tip" },
  { type: "success", label: "success" },
  { type: "question", label: "question" },
  { type: "warning", label: "warning" },
  { type: "failure", label: "failure" },
  { type: "danger", label: "danger" },
  { type: "bug", label: "bug" },
  { type: "example", label: "example" },
  { type: "quote", label: "quote" }
];
var CALLOUT_ICONS = {
  note: "pencil",
  abstract: "clipboard-list",
  summary: "clipboard-list",
  tldr: "clipboard-list",
  info: "info",
  todo: "check-circle",
  tip: "flame",
  hint: "flame",
  important: "flame",
  success: "check",
  check: "check",
  done: "check",
  question: "help-circle",
  help: "help-circle",
  faq: "help-circle",
  warning: "alert-triangle",
  caution: "alert-triangle",
  attention: "alert-triangle",
  failure: "x-circle",
  fail: "x-circle",
  missing: "x-circle",
  danger: "zap",
  error: "zap",
  bug: "bug",
  example: "list",
  quote: "quote",
  cite: "quote"
};
var NotionBlockInsertActions = class extends import_obsidian5.Component {
  constructor(plugin, view, lineNo, closeMenu) {
    super();
    this.plugin = plugin;
    this.view = view;
    this.lineNo = lineNo;
    this.closeMenu = closeMenu;
    this.imageInput = null;
    this.ownerDocument = view.dom.ownerDocument;
  }
  getItems() {
    return MENU_COMMANDS.insert.map((command) => ({
      id: command.id,
      label: t(command.labelKey),
      icon: command.icon,
      ...command.id === "callout" ? { page: "callout" } : { action: () => command.id === "image" ? this.openImagePicker() : this.insert(command.id) }
    }));
  }
  getCalloutItems() {
    return CALLOUT_OPTIONS.map((option) => ({
      id: `callout-${option.type}`,
      label: t(`callout.${option.type}`),
      icon: this.getCalloutIcon(option.type),
      action: () => this.insert(`callout-${option.type}`)
    }));
  }
  insert(type) {
    insertBlock(this.plugin, this.view, this.lineNo, type);
  }
  openImagePicker() {
    var _a;
    (_a = this.imageInput) == null ? void 0 : _a.remove();
    const input = this.ownerDocument.body.createEl("input", {
      cls: "wk-nb-hidden-file-input",
      attr: {
        type: "file",
        accept: ".avif,.bmp,.gif,.jpeg,.jpg,.png,.svg,.webp,image/avif,image/bmp,image/gif,image/jpeg,image/png,image/svg+xml,image/webp",
        multiple: "true"
      }
    });
    this.imageInput = input;
    const cleanup = () => {
      input.remove();
      this.imageInput = null;
      this.closeMenu();
    };
    this.registerDomEvent(input, "change", () => {
      var _a2;
      const files = Array.from((_a2 = input.files) != null ? _a2 : []);
      void insertImageFiles(this.plugin, this.view, this.lineNo, files).finally(cleanup);
    }, { once: true });
    this.registerDomEvent(input, "cancel", cleanup, { once: true });
    input.click();
    return true;
  }
  getCalloutIcon(type) {
    var _a;
    return (_a = CALLOUT_ICONS[type.toLowerCase()]) != null ? _a : CALLOUT_ICONS.note;
  }
  onunload() {
    var _a;
    (_a = this.imageInput) == null ? void 0 : _a.remove();
    this.imageInput = null;
  }
};

// src/notionActionMenu.ts
var TEXT_COLORS = [
  { id: "default", label: "\u9ED8\u8BA4\u6587\u672C", value: "", className: "is-default" },
  { id: "gray", label: "\u7070\u8272\u6587\u672C", value: "var(--text-muted)", className: "is-gray" },
  { id: "brown", label: "\u68D5\u8272\u6587\u672C", value: "var(--color-orange)", className: "is-brown" },
  { id: "orange", label: "\u6A59\u8272\u6587\u672C", value: "var(--color-orange)", className: "is-orange" },
  { id: "yellow", label: "\u9EC4\u8272\u6587\u672C", value: "var(--color-yellow)", className: "is-yellow" },
  { id: "green", label: "\u7EFF\u8272\u6587\u672C", value: "var(--color-green)", className: "is-green" },
  { id: "blue", label: "\u84DD\u8272\u6587\u672C", value: "var(--color-blue)", className: "is-blue" },
  { id: "purple", label: "\u7D2B\u8272\u6587\u672C", value: "var(--color-purple)", className: "is-purple" },
  { id: "pink", label: "\u7C89\u8272\u6587\u672C", value: "var(--color-pink)", className: "is-pink" },
  { id: "red", label: "\u7EA2\u8272\u6587\u672C", value: "var(--color-red)", className: "is-red" }
];
var BACKGROUND_COLORS = [
  { id: "default", label: "\u9ED8\u8BA4\u80CC\u666F", value: "", className: "is-default" },
  { id: "gray", label: "\u7070\u8272\u80CC\u666F", value: "rgba(var(--mono-rgb-100), 0.08)", className: "is-gray" },
  { id: "brown", label: "\u68D5\u8272\u80CC\u666F", value: "rgba(var(--color-orange-rgb), 0.16)", className: "is-brown" },
  { id: "orange", label: "\u6A59\u8272\u80CC\u666F", value: "rgba(var(--color-orange-rgb), 0.16)", className: "is-orange" },
  { id: "yellow", label: "\u9EC4\u8272\u80CC\u666F", value: "rgba(var(--color-yellow-rgb), 0.18)", className: "is-yellow" },
  { id: "green", label: "\u7EFF\u8272\u80CC\u666F", value: "rgba(var(--color-green-rgb), 0.16)", className: "is-green" },
  { id: "blue", label: "\u84DD\u8272\u80CC\u666F", value: "rgba(var(--color-blue-rgb), 0.16)", className: "is-blue" },
  { id: "purple", label: "\u7D2B\u8272\u80CC\u666F", value: "rgba(var(--color-purple-rgb), 0.16)", className: "is-purple" },
  { id: "pink", label: "\u7C89\u8272\u80CC\u666F", value: "rgba(var(--color-pink-rgb), 0.16)", className: "is-pink" },
  { id: "red", label: "\u7EA2\u8272\u80CC\u666F", value: "rgba(var(--color-red-rgb), 0.16)", className: "is-red" }
];
var CALLOUT_OPTIONS2 = [
  { type: "note", label: "note" },
  { type: "info", label: "info" },
  { type: "todo", label: "todo" },
  { type: "tip", label: "tip" },
  { type: "success", label: "success" },
  { type: "question", label: "question" },
  { type: "warning", label: "warning" },
  { type: "failure", label: "failure" },
  { type: "danger", label: "danger" },
  { type: "bug", label: "bug" },
  { type: "example", label: "example" },
  { type: "quote", label: "quote" }
];
var CALLOUT_ICONS2 = {
  note: "pencil",
  abstract: "clipboard-list",
  summary: "clipboard-list",
  tldr: "clipboard-list",
  info: "info",
  todo: "check-circle",
  tip: "flame",
  hint: "flame",
  important: "flame",
  success: "check",
  check: "check",
  done: "check",
  question: "help-circle",
  help: "help-circle",
  faq: "help-circle",
  warning: "alert-triangle",
  caution: "alert-triangle",
  attention: "alert-triangle",
  failure: "x-circle",
  fail: "x-circle",
  missing: "x-circle",
  danger: "zap",
  error: "zap",
  bug: "bug",
  example: "list",
  quote: "quote",
  cite: "quote"
};
var OPEN_MENUS = /* @__PURE__ */ new Set();
function showNotionBlockActionMenu(plugin, view, lineNo, pos, initialPage = "actions") {
  closeNotionBlockActionMenus();
  const menu = new NotionBlockActionMenu(plugin, view, lineNo, pos, initialPage);
  OPEN_MENUS.add(menu);
  plugin.addChild(menu);
  menu.open();
}
function closeNotionBlockActionMenus() {
  OPEN_MENUS.forEach((menu) => menu.close(false));
  OPEN_MENUS.clear();
}
var NotionBlockActionMenu = class extends import_obsidian6.Component {
  constructor(plugin, view, lineNo, pos, initialPage) {
    var _a;
    super();
    this.rootEl = null;
    this.submenuEl = null;
    this.listEl = null;
    this.footerEl = null;
    this.activeIndex = 0;
    this.returnPage = "actions";
    this.listEvents = null;
    this.submenuEvents = null;
    this.visibleItems = [];
    this.orderDrag = null;
    this.layoutSaving = false;
    this.handlePointerDown = (event) => this.onPointerDown(event);
    this.handleKeyDown = (event) => this.onKeyDown(event);
    this.plugin = plugin;
    this.view = view;
    this.lineNo = lineNo;
    this.pos = pos;
    this.ownerDocument = view.dom.ownerDocument;
    this.ownerWindow = (_a = this.ownerDocument.defaultView) != null ? _a : activeWindow;
    this.currentPage = initialPage;
    this.insertActions = this.addChild(new NotionBlockInsertActions(plugin, view, lineNo, () => this.close()));
  }
  open() {
    this.rootEl = this.ownerDocument.body.createDiv({ cls: "wk-nb-action-menu" });
    this.rootEl.setAttribute("role", "menu");
    this.rootEl.tabIndex = -1;
    this.rootEl.setCssStyles({ left: `${this.pos.x}px`, top: `${this.pos.y}px` });
    this.listEl = this.rootEl.createDiv({ cls: "wk-nb-action-menu-list" });
    this.footerEl = this.rootEl.createDiv({ cls: "wk-nb-action-menu-footer" });
    this.renderList();
    this.reposition();
    this.rootEl.focus();
    this.registerDomEvent(this.ownerDocument, "pointerdown", this.handlePointerDown, true);
    this.registerDomEvent(this.ownerDocument, "keydown", this.handleKeyDown, true);
    this.registerDomEvent(this.ownerWindow, "resize", () => {
      this.reposition();
      this.positionFloatingSubmenu();
    });
  }
  close(restoreFocus = true) {
    this.plugin.removeChild(this);
    if (restoreFocus && this.view.dom.isConnected) this.view.focus();
  }
  onunload() {
    var _a;
    this.closeFloatingSubmenu();
    (_a = this.rootEl) == null ? void 0 : _a.remove();
    this.rootEl = null;
    OPEN_MENUS.delete(this);
  }
  renderList(preserveScroll = false) {
    if (!this.rootEl || !this.listEl || !this.footerEl) return;
    const scrollTop = preserveScroll ? this.listEl.scrollTop : 0;
    if (this.listEvents) this.removeChild(this.listEvents);
    this.listEl.empty();
    this.footerEl.empty();
    this.listEvents = this.addChild(new import_obsidian6.Component());
    this.orderDrag = this.listEvents.addChild(new MenuOrderDrag((group, ids, movedId) => {
      void this.saveMenuOrder(group, ids, movedId);
    }, () => this.closeFloatingSubmenu()));
    const main = this.currentPage === "actions";
    this.rootEl.toggleClass("is-main", main);
    this.rootEl.toggleClass("wk-nb-insert-menu", this.currentPage === "insert" || this.currentPage === "insert-more");
    this.rootEl.dataset.page = this.currentPage;
    this.listEl.toggleClass("wk-nb-menu-groups", main);
    this.visibleItems = [];
    if (main) {
      this.renderGroup(this.listEl.createDiv({ cls: "wk-nb-menu-group" }), "transform", true);
      this.renderGroup(this.listEl.createDiv({ cls: "wk-nb-menu-group" }), "insert", true);
      const colorItems = this.getColorEntryItems();
      const blockItems = this.getBlockActionItems();
      this.visibleItems.push(...colorItems, ...blockItems);
      this.renderSeparator(this.footerEl);
      this.renderSection(this.footerEl, "", colorItems);
      this.renderSeparator(this.footerEl);
      this.renderSection(this.footerEl, "", blockItems);
    } else {
      const backItem = {
        id: "back",
        label: t("menu.back"),
        icon: "arrow-left",
        destination: this.currentPage === "insert" ? "actions" : this.returnPage
      };
      this.visibleItems.push(backItem);
      this.renderSection(this.listEl, "", [backItem]);
      this.renderSeparator(this.listEl);
      this.renderGroup(this.listEl, this.currentPage === "transform-more" ? "transform" : "insert", this.currentPage === "insert");
    }
    this.activeIndex = Math.min(this.activeIndex, Math.max(0, this.visibleItems.length - 1));
    this.refreshActiveRows();
    this.listEl.scrollTop = scrollTop;
    if (this.layoutSaving) this.rootEl.setAttribute("aria-busy", "true");
    else this.rootEl.removeAttribute("aria-busy");
    this.reposition();
  }
  renderGroup(container, group, expanded) {
    const groupLabel = t(group === "insert" ? "menu.addInsert" : "menu.turnInto");
    container.setAttribute("role", "group");
    const layout = this.plugin.settings.menuLayout[group];
    const allItems = group === "insert" ? this.insertActions.getItems().map((item) => ({ ...item, group })) : this.getTurnIntoItems();
    const items = layout.order.map((id) => allItems.find((item) => item.id === id)).filter((item) => !!item && layout.expanded.includes(item.id) === expanded);
    if (this.currentPage === "actions") {
      const header = {
        id: `group-${group}`,
        label: groupLabel,
        toggleGroup: group,
        icon: layout.collapsed ? "chevron-right" : "chevron-down"
      };
      this.visibleItems.push(header);
      this.renderItem(container, header);
      if (layout.collapsed) return;
    } else {
      container.createDiv({ cls: "wk-nb-action-menu-section", text: groupLabel });
    }
    this.visibleItems.push(...items);
    const commands = container.createDiv({ cls: "wk-nb-menu-command-list" });
    items.forEach((item) => this.renderItem(commands, item));
    if (expanded && layout.expanded.length < layout.order.length) {
      const more = {
        id: `more-${group}`,
        label: t(group === "insert" ? "menu.moreInsert" : "menu.moreTransform"),
        icon: "ellipsis",
        destination: group === "insert" ? "insert-more" : "transform-more"
      };
      this.visibleItems.push(more);
      this.renderItem(container, more);
    }
  }
  getTurnIntoItems() {
    return MENU_COMMANDS.transform.map((command) => ({
      id: command.id,
      label: t(command.labelKey),
      group: "transform",
      icon: command.id === "callout" ? this.getCurrentCalloutIcon() : command.icon,
      ...command.id === "callout" ? { page: "callout" } : { action: () => this.runTransform(command.id) }
    }));
  }
  getColorEntryItems() {
    return [
      { id: "color", label: t("menu.color"), icon: "paint-roller", page: "color" }
    ];
  }
  getBlockActionItems() {
    return [
      { id: "select-block", label: t("menu.selectBlock"), icon: "text-select", action: () => selectWholeBlock(this.view, this.lineNo) },
      { id: "copy-link", label: t("menu.copyLink"), icon: "link", shortcut: "\u2318\u2303L", action: () => this.copyBlockLink() },
      { id: "delete", label: t("menu.delete"), icon: "trash-2", shortcut: "Del", action: () => this.deleteLine() }
    ];
  }
  getTextColorItems() {
    return TEXT_COLORS.map((color) => ({
      id: `text-${color.id}`,
      label: t(`color.text${color.id.charAt(0).toUpperCase() + color.id.slice(1)}`),
      icon: "letter-text",
      action: () => this.applyTextColor(color)
    }));
  }
  getBackgroundColorItems() {
    return BACKGROUND_COLORS.map((color) => ({
      id: `bg-${color.id}`,
      label: t(`color.bg${color.id.charAt(0).toUpperCase() + color.id.slice(1)}`),
      icon: "paint-bucket",
      action: () => this.applyBackgroundColor(color)
    }));
  }
  getCalloutItems() {
    return CALLOUT_OPTIONS2.map((option) => ({
      id: `callout-${option.type}`,
      label: t(`callout.${option.type}`),
      icon: this.getCalloutIcon(option.type),
      action: () => this.runTransform(`callout-${option.type}`)
    }));
  }
  renderSection(container, title, items) {
    if (items.length === 0) return;
    if (title) {
      container.createDiv({ cls: "wk-nb-action-menu-section", text: title });
    }
    items.forEach((item) => this.renderItem(container, item));
  }
  renderSeparator(container) {
    container.createDiv({ cls: "wk-nb-action-menu-separator" });
  }
  renderItem(container, item) {
    var _a, _b, _c, _d, _e;
    const index = this.visibleItems.indexOf(item);
    const row = container.createDiv({
      cls: `wk-nb-action-menu-row${index === this.activeIndex ? " is-active" : ""}`,
      attr: { role: "menuitem", "data-item-id": item.id }
    });
    const iconWrap = row.createSpan({ cls: "wk-nb-action-menu-icon" });
    (0, import_obsidian6.setIcon)(iconWrap, item.icon);
    row.createSpan({ cls: "wk-nb-action-menu-label", text: item.label });
    if (item.shortcut) {
      row.createSpan({ cls: "wk-nb-action-menu-shortcut", text: item.shortcut });
    }
    if (item.page || ((_a = item.destination) == null ? void 0 : _a.endsWith("-more"))) {
      row.setAttribute("aria-haspopup", "menu");
      (0, import_obsidian6.setIcon)(row.createSpan({ cls: "wk-nb-action-menu-chevron" }), "chevron-right");
    }
    if (item.group) {
      (_b = this.orderDrag) == null ? void 0 : _b.bindRow(row, item.group, item.id);
      const grip = row.querySelector(".wk-nb-order-grip");
      if (grip) grip.disabled = this.layoutSaving;
    }
    if (item.toggleGroup) {
      row.addClass("wk-nb-menu-group-header");
      row.setAttribute("aria-expanded", String(!this.plugin.settings.menuLayout[item.toggleGroup].collapsed));
      row.setAttribute("aria-disabled", String(this.layoutSaving));
      row.tabIndex = 0;
      (_c = this.listEvents) == null ? void 0 : _c.registerDomEvent(row, "focus", () => {
        this.activeIndex = index;
        this.refreshActiveRows();
      });
    }
    (_d = this.listEvents) == null ? void 0 : _d.registerDomEvent(row, "mouseenter", () => {
      var _a2;
      if ((_a2 = this.orderDrag) == null ? void 0 : _a2.hasPointer) return;
      this.activeIndex = Math.max(0, index);
      this.refreshActiveRows();
      this.syncFloatingSubmenuForItem(item);
    });
    (_e = this.listEvents) == null ? void 0 : _e.registerDomEvent(row, "click", () => {
      var _a2;
      if ((_a2 = this.orderDrag) == null ? void 0 : _a2.hasPointer) return;
      void this.activateItem(item);
    });
  }
  renderFloatingSubmenu(page, group) {
    if (!this.rootEl) return;
    this.closeFloatingSubmenu();
    this.submenuEl = this.ownerDocument.body.createDiv({ cls: `wk-nb-action-menu wk-nb-action-submenu is-${page}` });
    this.submenuEl.setAttribute("role", "menu");
    this.submenuEvents = this.addChild(new import_obsidian6.Component());
    if (page === "color") {
      this.renderFloatingSection(this.submenuEl, t("menu.textColor"), this.getTextColorItems(), TEXT_COLORS);
      this.submenuEl.createDiv({ cls: "wk-nb-action-menu-separator" });
      this.renderFloatingSection(this.submenuEl, t("menu.backgroundColor"), this.getBackgroundColorItems(), BACKGROUND_COLORS);
    } else {
      const items = group === "insert" ? this.insertActions.getCalloutItems() : this.getCalloutItems();
      this.renderFloatingSection(this.submenuEl, t("menu.callout"), items);
    }
    this.positionFloatingSubmenu();
  }
  closeFloatingSubmenu() {
    var _a;
    (_a = this.submenuEl) == null ? void 0 : _a.remove();
    this.submenuEl = null;
    if (this.submenuEvents) this.removeChild(this.submenuEvents);
    this.submenuEvents = null;
  }
  syncFloatingSubmenuForItem(item) {
    if (item == null ? void 0 : item.page) {
      this.renderFloatingSubmenu(item.page, item.group);
      return;
    }
    this.closeFloatingSubmenu();
  }
  renderFloatingSection(container, title, items, colors) {
    container.createDiv({ cls: "wk-nb-action-menu-section", text: title });
    items.forEach((item) => {
      var _a;
      const color = colors == null ? void 0 : colors.find((option) => item.id.endsWith(option.id));
      const row = container.createDiv({ cls: "wk-nb-action-menu-row", attr: { role: "menuitem", "data-item-id": item.id } });
      const iconWrap = row.createSpan({ cls: "wk-nb-action-menu-icon" });
      if (color) {
        iconWrap.addClass("wk-nb-action-menu-color-icon", color.className);
        iconWrap.setText(item.id.startsWith("text-") ? "A" : "");
      } else {
        (0, import_obsidian6.setIcon)(iconWrap, item.icon);
      }
      row.createSpan({ cls: "wk-nb-action-menu-label", text: item.label });
      (_a = this.submenuEvents) == null ? void 0 : _a.registerDomEvent(row, "click", () => {
        void this.activateItem(item);
      });
    });
  }
  refreshActiveRows() {
    if (!this.rootEl) return;
    const rows = Array.from(this.rootEl.querySelectorAll(".wk-nb-action-menu-row"));
    rows.forEach((row, index) => {
      row.toggleClass("is-active", index === this.activeIndex);
    });
  }
  async activateItem(item) {
    if (item.toggleGroup) {
      await this.setGroupCollapsed(item.toggleGroup, !this.plugin.settings.menuLayout[item.toggleGroup].collapsed);
      return;
    }
    if (item.destination) {
      this.switchPage(item.destination);
      return;
    }
    if (item.page) {
      this.renderFloatingSubmenu(item.page, item.group);
      return;
    }
    if (item.action) {
      const keepOpen = await item.action();
      if (keepOpen !== true) this.close();
    }
  }
  switchPage(page) {
    var _a;
    this.closeFloatingSubmenu();
    if (page.endsWith("-more")) this.returnPage = this.currentPage === "insert" ? "insert" : "actions";
    this.currentPage = page;
    this.activeIndex = page === "insert" ? 1 : 0;
    this.renderList();
    (_a = this.rootEl) == null ? void 0 : _a.focus();
  }
  async saveMenuOrder(group, ids, movedId) {
    var _a;
    if (this.layoutSaving || !this.rootEl) return;
    this.layoutSaving = true;
    this.rootEl.setAttribute("aria-busy", "true");
    this.rootEl.querySelectorAll(".wk-nb-order-grip").forEach((grip) => {
      grip.disabled = true;
    });
    this.rootEl.querySelectorAll(".wk-nb-menu-group-header").forEach((header) => header.setAttribute("aria-disabled", "true"));
    try {
      await this.plugin.saveMenuLayout(reorderMenuCommands(this.plugin.settings.menuLayout, group, ids));
    } catch (e) {
      new import_obsidian6.Notice(t("notice.menuLayoutSaveFailed"));
    } finally {
      this.layoutSaving = false;
    }
    if (!this.rootEl) return;
    this.renderList(true);
    this.rootEl.removeAttribute("aria-busy");
    const index = this.visibleItems.findIndex((item) => item.group === group && item.id === movedId);
    if (index >= 0) this.activeIndex = index;
    this.refreshActiveRows();
    (_a = this.rootEl.querySelector(`[data-menu-group="${group}"][data-item-id="${movedId}"] .wk-nb-order-grip`)) == null ? void 0 : _a.focus({ preventScroll: true });
  }
  async setGroupCollapsed(group, collapsed) {
    if (this.layoutSaving || !this.rootEl || this.plugin.settings.menuLayout[group].collapsed === collapsed) return;
    this.layoutSaving = true;
    this.closeFloatingSubmenu();
    const write = this.plugin.saveMenuLayout(setMenuGroupCollapsed(this.plugin.settings.menuLayout, group, collapsed));
    this.renderList(true);
    this.focusGroupHeader(group);
    try {
      await write;
    } catch (e) {
      new import_obsidian6.Notice(t("notice.menuLayoutSaveFailed"));
    } finally {
      this.layoutSaving = false;
    }
    if (!this.rootEl) return;
    this.renderList(true);
    this.focusGroupHeader(group);
  }
  focusGroupHeader(group) {
    var _a, _b, _c;
    this.activeIndex = Math.max(0, this.visibleItems.findIndex((item) => item.toggleGroup === group));
    this.refreshActiveRows();
    (_b = (_a = this.rootEl) == null ? void 0 : _a.querySelector(`[data-item-id="group-${group}"]`)) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
    (_c = this.rootEl) == null ? void 0 : _c.focus({ preventScroll: true });
  }
  onPointerDown(event) {
    var _a, _b;
    if ((_a = this.rootEl) == null ? void 0 : _a.contains(event.target)) return;
    if ((_b = this.submenuEl) == null ? void 0 : _b.contains(event.target)) return;
    this.close(false);
  }
  onKeyDown(event) {
    var _a, _b, _c, _d;
    if (!this.rootEl) return;
    if (event.key === "Escape") {
      event.preventDefault();
      if ((_a = this.orderDrag) == null ? void 0 : _a.hasPointer) {
        this.orderDrag.cancel();
        return;
      }
      this.close();
      return;
    }
    if (event.altKey) return;
    if ((_b = this.orderDrag) == null ? void 0 : _b.hasPointer) return;
    const target = event.target;
    if (((_c = target == null ? void 0 : target.closest) == null ? void 0 : _c.call(target, ".wk-nb-order-grip")) && (event.key === "Enter" || event.key === " ")) return;
    const activeItem = this.visibleItems[this.activeIndex];
    if ((activeItem == null ? void 0 : activeItem.toggleGroup) && (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === " ")) {
      event.preventDefault();
      const group = activeItem.toggleGroup;
      const collapsed = event.key === " " ? !this.plugin.settings.menuLayout[group].collapsed : event.key === "ArrowLeft";
      void this.setGroupCollapsed(group, collapsed);
      return;
    }
    if (event.key === "ArrowLeft" && this.currentPage !== "actions") {
      event.preventDefault();
      this.switchPage(this.currentPage === "insert" ? "actions" : this.returnPage);
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      const length = Math.max(this.visibleItems.length, 1);
      this.activeIndex = (this.activeIndex + delta + length) % length;
      this.refreshActiveRows();
      this.rootEl.focus({ preventScroll: true });
      (_d = this.rootEl.querySelector(".wk-nb-action-menu-row.is-active")) == null ? void 0 : _d.scrollIntoView({ block: "nearest" });
      this.syncFloatingSubmenuForItem(this.visibleItems[this.activeIndex]);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const item = this.visibleItems[this.activeIndex];
      if (item) void this.activateItem(item);
    }
  }
  runTransform(type) {
    transformLine(this.view, this.lineNo, type);
  }
  getCurrentCalloutIcon() {
    const line = this.view.state.doc.line(this.lineNo);
    const match = line.text.match(/^>\s*\[!([^\]\s|+-]+)/);
    return this.getCalloutIcon(match == null ? void 0 : match[1]);
  }
  getCalloutIcon(type) {
    var _a;
    if (!type) return CALLOUT_ICONS2.note;
    return (_a = CALLOUT_ICONS2[type.toLowerCase()]) != null ? _a : CALLOUT_ICONS2.note;
  }
  deleteLine() {
    const line = this.view.state.doc.line(this.lineNo);
    const from = line.number === 1 ? line.from : line.from - 1;
    const to = line.number === 1 && this.view.state.doc.lines > 1 ? line.to + 1 : line.to;
    this.view.dispatch({
      changes: { from, to, insert: "" },
      scrollIntoView: true,
      userEvent: "delete.block"
    });
  }
  async copyBlockLink() {
    var _a;
    const file = this.plugin.app.workspace.getActiveFile();
    if (!file) {
      new import_obsidian6.Notice(t("notice.noActiveNote"));
      return;
    }
    const line = this.view.state.doc.line(this.lineNo);
    const existingId = (_a = line.text.match(/\s\^([A-Za-z0-9-]+)$/)) == null ? void 0 : _a[1];
    const blockId = existingId != null ? existingId : `nb-${Date.now().toString(36)}`;
    if (!existingId) {
      this.view.dispatch({
        changes: { from: line.to, insert: ` ^${blockId}` },
        userEvent: "input.block-id"
      });
    }
    const link = `[[${file.basename}#^${blockId}]]`;
    try {
      await this.ownerWindow.navigator.clipboard.writeText(link);
      new import_obsidian6.Notice(t("notice.linkCopied"));
    } catch (e) {
      new import_obsidian6.Notice(t("notice.linkCopyFailed"));
    }
  }
  applyTextColor(color) {
    this.wrapLineContent(color.value ? "span" : "", color.value ? `color: ${color.value};` : "");
  }
  applyBackgroundColor(color) {
    this.wrapLineContent(color.value ? "mark" : "", color.value ? `background-color: ${color.value}; color: inherit;` : "");
  }
  wrapLineContent(tagName, style) {
    const line = this.view.state.doc.line(this.lineNo);
    const parts = this.splitMarkdownLine(line.text);
    const unwrapped = parts.content.replace(/^<span style="[^"]*">(.*)<\/span>$/u, "$1").replace(/^<mark style="[^"]*">(.*)<\/mark>$/u, "$1");
    const nextContent = tagName ? `<${tagName} style="${style}">${unwrapped}</${tagName}>` : unwrapped;
    const nextText = `${parts.prefix}${nextContent}${parts.suffix}`;
    this.view.dispatch({
      changes: { from: line.from, to: line.to, insert: nextText },
      scrollIntoView: true,
      userEvent: "input.block-color"
    });
  }
  splitMarkdownLine(text) {
    var _a, _b;
    const blockIdMatch = text.match(/(\s\^[A-Za-z0-9-]+)$/);
    const suffix = (_a = blockIdMatch == null ? void 0 : blockIdMatch[1]) != null ? _a : "";
    const body = suffix ? text.slice(0, -suffix.length) : text;
    const prefixMatch = body.match(/^(#{1,6}\s+|[-*+]\s+\[[ xX]\]\s+|[-*+]\s+|\d+\.\s+|>\s+)/);
    const prefix = (_b = prefixMatch == null ? void 0 : prefixMatch[1]) != null ? _b : "";
    return {
      prefix,
      content: body.slice(prefix.length).trim(),
      suffix
    };
  }
  reposition() {
    if (!this.rootEl) return;
    const rect = this.rootEl.getBoundingClientRect();
    const padding = 8;
    let left = this.pos.x;
    let top = this.pos.y;
    if (left + rect.width > this.ownerWindow.innerWidth - padding) {
      left = Math.max(padding, this.ownerWindow.innerWidth - rect.width - padding);
    }
    if (top + rect.height > this.ownerWindow.innerHeight - padding) {
      top = Math.max(padding, this.ownerWindow.innerHeight - rect.height - padding);
    }
    this.rootEl.setCssStyles({ left: `${Math.max(padding, left)}px`, top: `${Math.max(padding, top)}px` });
    this.positionFloatingSubmenu();
  }
  positionFloatingSubmenu() {
    if (!this.rootEl || !this.submenuEl) return;
    const rootRect = this.rootEl.getBoundingClientRect();
    const submenuRect = this.submenuEl.getBoundingClientRect();
    const padding = 8;
    let left = rootRect.right + 8;
    let top = rootRect.top;
    if (left + submenuRect.width > this.ownerWindow.innerWidth - padding) {
      left = Math.max(padding, rootRect.left - submenuRect.width - 8);
    }
    if (top + submenuRect.height > this.ownerWindow.innerHeight - padding) {
      top = Math.max(padding, this.ownerWindow.innerHeight - submenuRect.height - padding);
    }
    this.submenuEl.setCssStyles({ left: `${Math.max(padding, left)}px`, top: `${Math.max(padding, top)}px` });
  }
};

// src/dragDrop.ts
var import_obsidian7 = require("obsidian");

// src/blockGeometry.ts
function visibleRect(element) {
  const rect = element.getBoundingClientRect();
  return rect.width && rect.height ? rect : null;
}
function firstContentRect(element) {
  const range2 = element.ownerDocument.createRange();
  range2.setStart(element, 0);
  const block = Array.from(element.childNodes).findIndex((node) => node.nodeType === 1 && /^(?:UL|OL|BLOCKQUOTE|DIV|PRE|TABLE|P)$/.test(node.nodeName));
  range2.setEnd(element, block < 0 ? element.childNodes.length : block);
  const rect = range2.getBoundingClientRect();
  return rect.width && rect.height ? rect : visibleRect(element);
}
function paragraphRows(element, count) {
  if (count < 2) return [];
  const ranges = [], doc = element.ownerDocument;
  let start = { node: element, offset: 0 }, afterBreak = false;
  const finish = (node, offset) => {
    const range2 = doc.createRange();
    range2.setStart(start.node, start.offset);
    range2.setEnd(node, offset);
    ranges.push(range2);
  };
  const visit = (parent) => {
    var _a;
    for (let i = 0; i < parent.childNodes.length; i++) {
      const child = parent.childNodes[i];
      if (child.nodeType === 3) {
        const text = (_a = child.textContent) != null ? _a : "";
        for (let at = 0; at < text.length; at++) {
          if (text[at] !== "\n") {
            afterBreak = false;
            continue;
          }
          if (!afterBreak) finish(child, at);
          start = { node: child, offset: at + 1 };
          afterBreak = false;
        }
      } else if (child.nodeName === "BR") {
        finish(parent, i);
        start = { node: parent, offset: i + 1 };
        afterBreak = true;
      } else if (/^(?:UL|OL|BLOCKQUOTE|DIV|PRE|TABLE|P)$/.test(child.nodeName)) {
        finish(parent, i);
        return;
      } else visit(child);
    }
    if (parent === element) finish(element, element.childNodes.length);
  };
  visit(element);
  while (ranges.length > count && !ranges[ranges.length - 1].toString().trim()) ranges.pop();
  if (ranges.length !== count) return [];
  const rows = ranges.map((range2) => range2.getBoundingClientRect());
  return rows.every((rect) => rect.width && rect.height) ? rows : [];
}
function matchesBlock(node, element) {
  var _a;
  if (isDragList(node)) return element.tagName === (((_a = node.marker) == null ? void 0 : _a.number) === null ? "UL" : "OL");
  if (node.type === "callout") return element.hasClass("callout");
  if (node.type === "blockquote") return element.tagName === "BLOCKQUOTE";
  if (node.type === "heading") return /^H[1-6]$/.test(element.tagName);
  if (node.type === "code") return element.tagName === "PRE" || element.hasClass("el-pre");
  if (node.type === "table") return element.tagName === "TABLE" || !!element.querySelector("table");
  if (node.type === "math") return element.hasClass("math") || element.hasClass("math-block") || !!element.querySelector(".math-block");
  if (node.type === "divider") return element.tagName === "HR";
  if (node.type === "embed") return element.hasClass("internal-embed") || !!element.querySelector(".internal-embed,img");
  return element.tagName === "P";
}
function measureBlockLayout(view) {
  var _a;
  const doc = view.state.doc, mapped = /* @__PURE__ */ new Map();
  const ownerElement = (_a = view.dom.ownerDocument.defaultView) == null ? void 0 : _a.HTMLElement;
  const bindScope = (nodes, parent) => {
    const elements = Array.from(parent.children).filter((el) => !!ownerElement && el.instanceOf(ownerElement));
    let cursor = 0;
    for (const node of nodes) {
      if (!node.lines.some((line) => line.trim()) || node.type === "comment" || node.type === "frontmatter") continue;
      const at = elements.findIndex((element, index) => index >= cursor && matchesBlock(node, element));
      if (at < 0) continue;
      bind(node, elements[at]);
      cursor = at + 1;
    }
  };
  const bind = (node, element) => {
    if (!visibleRect(element)) return;
    let head = null;
    if (node.type === "callout") {
      const calloutTitleElement = Array.from(element.children).find((el) => el.hasClass("callout-title"));
      if (ownerElement && (calloutTitleElement == null ? void 0 : calloutTitleElement.instanceOf(ownerElement))) head = visibleRect(calloutTitleElement);
    } else if (node.item) head = firstContentRect(element);
    mapped.set(node, { element, head, rows: node.type === "paragraph" ? paragraphRows(element, node.lines.length) : [] });
    if (isDragList(node)) {
      const items = Array.from(element.children).filter((el) => !!ownerElement && el.instanceOf(ownerElement) && el.tagName === "LI");
      node.children.forEach((item, index) => {
        if (items[index]) bind(item, items[index]);
      });
    } else if (isDragQuote(node)) {
      const content = node.type === "callout" ? Array.from(element.children).find((el) => el.hasClass("callout-content")) : element;
      if (ownerElement && (content == null ? void 0 : content.instanceOf(ownerElement))) bindScope(node.children, content);
    } else if (node.item) {
      const first = node.children[0];
      const paragraph = element.querySelector(":scope > p");
      const inline = (first == null ? void 0 : first.type) === "paragraph" && first.startLine === node.startLine;
      if (inline) mapped.set(first, {
        element: paragraph != null ? paragraph : element,
        head: paragraph ? visibleRect(paragraph) : head,
        rows: paragraphRows(paragraph != null ? paragraph : element, first.lines.length)
      });
      bindScope(inline ? node.children.slice(1) : node.children, element);
    }
  };
  for (const root of getDragStructure(doc)) {
    if (root.type !== "callout" || root.to < view.viewport.from || root.from > view.viewport.to) continue;
    const position = view.domAtPos(root.from);
    const element = ownerElement && position.node.instanceOf(ownerElement) ? position.node : position.node.parentElement;
    const candidates = [element, position.node.childNodes[position.offset], position.node.childNodes[position.offset - 1]];
    for (const candidate of candidates) {
      if (!ownerElement || !(candidate == null ? void 0 : candidate.instanceOf(ownerElement))) continue;
      const widget = candidate.matches(".cm-callout") ? candidate : candidate.closest(".cm-callout");
      const callout = widget == null ? void 0 : widget.querySelector(".callout");
      if (callout) {
        bind(root, callout);
        break;
      }
    }
  }
  const nodeRect = (node, head = false) => {
    const rendered = mapped.get(node);
    if (rendered) return head && rendered.head ? rendered.head : visibleRect(rendered.element);
    const start = view.coordsAtPos(node.from), end = view.coordsAtPos(node.to);
    return start && end ? { left: Math.min(start.left, end.left), right: Math.max(start.right, end.right), top: start.top, bottom: end.bottom } : start;
  };
  const lineRect = (lineNo) => {
    const path = getDragPath(doc, lineNo);
    for (let i = path.length - 1; i >= 0; i--) {
      const node = path[i], rendered = mapped.get(node);
      if (!rendered) continue;
      const row = rendered.rows[lineNo - node.startLine];
      if (row) return row;
      if (node.startLine !== lineNo && (node.item || isDragQuote(node))) {
        const siblings = node.children;
        const previous = [...siblings].reverse().find((child) => child.endLine < lineNo && mapped.has(child));
        const next = siblings.find((child) => child.startLine > lineNo && mapped.has(child));
        const before = previous ? nodeRect(previous) : rendered.head;
        const after = next ? nodeRect(next) : nodeRect(node);
        if (before && after) {
          const top = before.bottom, bottom = Math.max(top, next ? after.top : after.bottom);
          return { left: next ? after.left : before.left, right: after.right, top, bottom };
        }
      }
      return nodeRect(node, true);
    }
    return view.coordsAtPos(doc.line(lineNo).from);
  };
  const lineAtY = (y) => {
    for (const root of getDragStructure(doc)) {
      if (!mapped.has(root)) continue;
      const rect = nodeRect(root);
      if (!rect || y < rect.top || y > rect.bottom) continue;
      let closest = root.startLine, distance = Infinity;
      for (const [node, rendered] of mapped) {
        if (node.startLine < root.startLine || node.endLine > root.endLine) continue;
        const rows = rendered.rows.length ? rendered.rows : [nodeRect(node, true)];
        rows.forEach((rect2, index) => {
          if (!rect2) return;
          const nextDistance = y < rect2.top ? rect2.top - y : y > rect2.bottom ? y - rect2.bottom : 0;
          if (nextDistance <= distance) {
            closest = node.startLine + index;
            distance = nextDistance;
          }
        });
      }
      return closest;
    }
    return null;
  };
  return {
    node: nodeRect,
    line: lineRect,
    lineAtY,
    rendered: (lineNo) => getDragPath(doc, lineNo).some((node) => mapped.has(node)),
    itemContent: (item) => {
      var _a2, _b;
      return (_b = (_a2 = mapped.get(item)) == null ? void 0 : _a2.head) != null ? _b : null;
    }
  };
}

// src/dragDrop.ts
var DragManager = class extends import_obsidian7.Component {
  constructor(view, onStopped, transfers) {
    var _a;
    super();
    this.view = view;
    this.onStopped = onStopped;
    this.transfers = transfers;
    this.ghostEl = null;
    this.indicatorEl = null;
    this.containerEl = null;
    this.labelEl = null;
    this.isDragging = false;
    this.startBlock = null;
    this.currentTargetLine = null;
    this.currentTarget = null;
    this.activePointerId = null;
    this.pointerCaptureEl = null;
    this.dragEvents = null;
    this.targetDocument = null;
    this.lastPoint = { x: 0, y: 0 };
    this.onMouseMove = (event) => {
      if (!this.isDragging) return;
      this.handleMove(event);
    };
    this.onPointerMove = (event) => {
      if (!this.isDragging || event.pointerId !== this.activePointerId) return;
      event.preventDefault();
      this.handleMove(event);
    };
    this.onMouseUp = (event) => {
      this.handleMove(event);
      this.stopDrag();
    };
    this.onPointerUp = (event) => {
      if (event.pointerId !== this.activePointerId) return;
      event.preventDefault();
      this.handleMove(event);
      this.stopDrag();
    };
    this.onPointerCancel = (event) => {
      if (event.pointerId !== this.activePointerId) return;
      this.stopDrag(false);
    };
    this.targetView = view;
    this.ownerDocument = view.dom.ownerDocument;
    this.ownerWindow = (_a = this.ownerDocument.defaultView) != null ? _a : activeWindow;
  }
  startDrag(lineNo, event, captureEl) {
    var _a;
    this.stopDrag(false);
    this.isDragging = true;
    this.startBlock = getBlockSource(this.view.state, lineNo);
    (_a = this.ownerWindow.getSelection()) == null ? void 0 : _a.removeAllRanges();
    const text = this.startBlock.text;
    this.ghostEl = this.ownerDocument.body.createDiv({
      cls: "block-drag-ghost",
      text: text.slice(0, 50) + (text.length > 50 ? "..." : "")
    });
    this.updateGhostPosition(event.clientX, event.clientY);
    this.indicatorEl = this.ownerDocument.body.createDiv({
      cls: "block-drag-indicator"
    });
    this.labelEl = this.indicatorEl.createSpan({ cls: "block-drag-label" });
    this.containerEl = this.ownerDocument.body.createDiv({ cls: "block-drag-container" });
    this.dragEvents = this.addChild(new import_obsidian7.Component());
    this.dragEvents.registerDomEvent(this.ownerWindow, "blur", () => this.stopDrag(false));
    this.dragEvents.registerDomEvent(this.ownerDocument, "keydown", (event2) => {
      if (event2.key !== "Escape") return;
      event2.preventDefault();
      this.stopDrag(false);
    }, true);
    if ("pointerId" in event) {
      this.activePointerId = event.pointerId;
      this.capturePointer(event, captureEl);
      if (captureEl) this.dragEvents.registerDomEvent(captureEl, "lostpointercapture", (lost) => {
        if (this.isDragging && lost.pointerId === this.activePointerId) this.stopDrag(false);
      });
      this.dragEvents.registerDomEvent(this.ownerDocument, "pointermove", this.onPointerMove);
      this.dragEvents.registerDomEvent(this.ownerDocument, "pointerup", this.onPointerUp, true);
      this.dragEvents.registerDomEvent(this.ownerDocument, "pointercancel", this.onPointerCancel, true);
    } else {
      this.dragEvents.registerDomEvent(this.ownerDocument, "mousemove", this.onMouseMove);
      this.dragEvents.registerDomEvent(this.ownerDocument, "mouseup", this.onMouseUp, true);
    }
    this.ownerDocument.body.addClass("is-dragging-block");
  }
  handleMove(point) {
    var _a;
    this.lastPoint = { x: point.clientX, y: point.clientY };
    this.updateGhostPosition(point.clientX, point.clientY);
    if (((_a = this.startBlock) == null ? void 0 : _a.document) !== this.view.state.doc) {
      this.stopDrag(false);
      return;
    }
    const view = this.transfers ? this.transfers.targetAt(this.view, point.clientX, point.clientY) : this.view;
    if (!view) {
      this.clearTarget();
      return;
    }
    this.targetView = view;
    const rect = view.scrollDOM.getBoundingClientRect();
    if (point.clientY < rect.top || point.clientY > rect.bottom || point.clientX < rect.left - 80 || point.clientX > rect.right) {
      this.clearTarget();
      return;
    }
    const renderedLine = measureBlockLayout(view).lineAtY(point.clientY);
    if (renderedLine !== null) {
      this.updateIndicator(renderedLine, point.clientY, point.clientX);
      return;
    }
    const pos = view.posAtCoords({ x: Math.max(rect.left + 2, Math.min(rect.right - 2, point.clientX)), y: point.clientY });
    if (pos !== null) {
      const line = view.state.doc.lineAt(pos);
      this.updateIndicator(line.number, point.clientY, point.clientX);
    } else this.clearTarget();
  }
  stopDrag(commit = true) {
    var _a, _b;
    if (!this.isDragging) return;
    const source = this.startBlock, target = this.currentTarget;
    const targetView = this.targetView, targetDocument = this.targetDocument;
    this.isDragging = false;
    this.startBlock = null;
    this.currentTargetLine = null;
    this.currentTarget = null;
    this.targetDocument = null;
    if (this.ghostEl) {
      this.ghostEl.remove();
      this.ghostEl = null;
    }
    if (this.indicatorEl) {
      this.indicatorEl.remove();
      this.indicatorEl = null;
    }
    (_a = this.containerEl) == null ? void 0 : _a.remove();
    this.containerEl = null;
    this.labelEl = null;
    this.releasePointer();
    if (this.dragEvents) this.removeChild(this.dragEvents);
    this.dragEvents = null;
    this.ownerDocument.body.removeClass("is-dragging-block");
    (_b = this.onStopped) == null ? void 0 : _b.call(this);
    if (commit && source && target && source.document === this.view.state.doc && targetDocument === targetView.state.doc) {
      if (this.transfers && !this.transfers.sameFile(this.view, targetView)) this.transfers.offer(this.view, source, targetView, target, this.lastPoint);
      else if (this.view.state.doc.toString() === targetView.state.doc.toString()) this.moveBlock(source, target);
    }
  }
  onunload() {
    this.stopDrag(false);
  }
  capturePointer(event, captureEl) {
    var _a;
    const target = captureEl != null ? captureEl : event.currentTarget;
    const ownerElement = (_a = this.ownerDocument.defaultView) == null ? void 0 : _a.Element;
    if (!ownerElement || !(target instanceof ownerElement)) return;
    try {
      target.setPointerCapture(event.pointerId);
      this.pointerCaptureEl = target;
    } catch (e) {
    }
  }
  releasePointer() {
    if (this.pointerCaptureEl && this.activePointerId !== null) {
      try {
        this.pointerCaptureEl.releasePointerCapture(this.activePointerId);
      } catch (e) {
      }
    }
    this.pointerCaptureEl = null;
    this.activePointerId = null;
  }
  updateGhostPosition(x, y) {
    if (this.ghostEl) {
      this.ghostEl.setCssStyles({
        left: `${Math.max(4, Math.min(x + 10, this.ownerWindow.innerWidth - this.ghostEl.offsetWidth - 4))}px`,
        top: `${Math.max(4, Math.min(y + 10, this.ownerWindow.innerHeight - this.ghostEl.offsetHeight - 4))}px`
      });
    }
  }
  clearTarget() {
    var _a, _b;
    this.targetDocument = null;
    this.currentTarget = null;
    this.currentTargetLine = null;
    (_a = this.indicatorEl) == null ? void 0 : _a.setCssStyles({ display: "none" });
    (_b = this.containerEl) == null ? void 0 : _b.setCssStyles({ display: "none" });
  }
  updateIndicator(lineNo, mouseY, mouseX) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (!this.indicatorEl) return;
    try {
      const view = this.targetView;
      const line = view.state.doc.line(lineNo);
      const layout = measureBlockLayout(view);
      const coords = layout.line(lineNo);
      if (!coords) {
        this.clearTarget();
        return;
      }
      const endCoords = layout.rendered(lineNo) ? coords : (_a = view.coordsAtPos(line.to)) != null ? _a : coords;
      const after = mouseY > coords.top + (endCoords.bottom - coords.top) / 2;
      let left = coords.left;
      let label = "";
      const path = getDragPath(view.state.doc, lineNo), root = path[0];
      const bounds = layout.node(root);
      const first = bounds != null ? bounds : coords;
      const last = bounds != null ? bounds : endCoords;
      const containers = path.filter((node) => isDragList(node) || isDragQuote(node));
      const inside = mouseX !== void 0 && containers.length > 0 && mouseX >= first.left - 8 && mouseY > first.top + 3 && mouseY < last.bottom - 3;
      let indent = 0, quoteOnly = false;
      const item = [...path].reverse().find((node) => node.item);
      if (inside && (item == null ? void 0 : item.marker) && mouseX !== void 0) {
        const raw = view.state.doc.line(item.startLine).text;
        const prefix = (_c = (_b = raw.match(/^[ \t]*(?:>[ \t]*)*(?:[-+*]|\d+[.)])[ \t]+/)) == null ? void 0 : _b[0].length) != null ? _c : 0;
        const contentCoords = (_e = (_d = layout.itemContent(item)) != null ? _d : view.coordsAtPos(item.from + prefix)) != null ? _e : coords;
        const step = Math.max(16, view.defaultCharacterWidth * item.marker.width);
        indent = mouseX >= contentCoords.left + step ? 1 : mouseX < contentCoords.left - step * 0.8 ? -1 : 0;
        quoteOnly = indent < 0 && path.some(isDragQuote) && !path.some((node) => node.item && node !== item);
        left = contentCoords.left + (indent > 0 ? step : indent < 0 ? -step : 0);
      }
      const target = getDropTarget(view.state.doc, lineNo, after, inside, indent, quoteOnly);
      if (target.mode === "list") label = t(indent > 0 ? "drag.nest" : indent < 0 ? "drag.outdent" : "drag.list");
      if (target.mode === "quote") label = t(((_f = target.container) == null ? void 0 : _f.type) === "callout" ? "drag.callout" : "drag.quote");
      if (this.startBlock && (!this.transfers || this.transfers.sameFile(this.view, view)) && !canDrop(this.startBlock, target)) {
        this.clearTarget();
        return;
      }
      this.currentTarget = target;
      this.targetDocument = view.state.doc;
      this.currentTargetLine = target.line;
      const doc = view.state.doc;
      const edge = target.line > doc.lines ? layout.line(doc.lines) : layout.line(target.line);
      const top = target.line > doc.lines ? (edge != null ? edge : endCoords).bottom : (edge != null ? edge : coords).top;
      const contentRect = view.contentDOM.getBoundingClientRect();
      left = Math.max(contentRect.left, Math.min(left, contentRect.right - 24));
      if (target.mode === "outside") left = contentRect.left;
      this.indicatorEl.setCssStyles({ top: `${top}px`, left: `${left}px`, width: `${Math.max(24, contentRect.right - left)}px`, display: "block" });
      this.indicatorEl.toggleClass("is-container-drop", target.mode !== "outside");
      (_g = this.labelEl) == null ? void 0 : _g.setText(this.transfers && !this.transfers.sameFile(this.view, view) ? [`${t("transfer.choose")} \u2192 ${this.transfers.nameOf(view)}`, label].filter(Boolean).join(" \xB7 ") : label);
      if (target.container) {
        const start = (_h = layout.node(target.container)) != null ? _h : coords;
        const end = start;
        const viewport = view.scrollDOM.getBoundingClientRect();
        const highlightTop = Math.max(viewport.top, start.top);
        (_i = this.containerEl) == null ? void 0 : _i.setCssStyles({
          display: "block",
          left: `${Math.max(contentRect.left, start.left - 4)}px`,
          top: `${highlightTop}px`,
          width: `${Math.max(24, contentRect.right - Math.max(contentRect.left, start.left - 4))}px`,
          height: `${Math.max(0, Math.min(viewport.bottom, end.bottom) - highlightTop)}px`
        });
      } else (_j = this.containerEl) == null ? void 0 : _j.setCssStyles({ display: "none" });
    } catch (e) {
      this.clearTarget();
    }
  }
  moveBlock(startBlock, target) {
    const doc = this.view.state.doc;
    const drop = typeof target === "number" ? { line: target, mode: "outside", prefix: "", container: null, item: null, marker: null, depth: 0 } : target;
    const edit = getDropEdit(doc, startBlock, drop);
    if (edit) this.view.dispatch({ ...edit, scrollIntoView: true, userEvent: "move.block" });
  }
};

// src/blockHandles.ts
var DESKTOP_DRAG_DELAY_MS = 150;
var MOBILE_DRAG_DELAY_MS = 300;
var HEADING_HANDLE_GAP_PX = 6;
var HANDLE_EDGE_GAP_PX = 4;
var blockHandlesExtension = (plugin) => import_view.ViewPlugin.fromClass(class extends import_obsidian8.Component {
  constructor(view) {
    var _a;
    super();
    this.handleEl = null;
    this.dragButton = null;
    this.hoveredLine = null;
    this.hideTimeout = null;
    this.dragTimeout = null;
    this.dragManager = null;
    this.isMouseOverHandle = false;
    this.handleInset = 0;
    this.ownerWindow = (_a = view.dom.ownerDocument.defaultView) != null ? _a : activeWindow;
    plugin.addChild(this);
    this.register(() => {
      this.clearDragTimeout();
      if (this.hideTimeout !== null) this.ownerWindow.clearTimeout(this.hideTimeout);
    });
    this.createHandle(view);
  }
  createHandle(view) {
    this.handleEl = view.dom.createDiv({ cls: "block-handle-wrap is-hidden" });
    this.handleEl.toggleClass("is-mobile", this.isMobileView());
    const originalMarginLeft = view.scrollDOM.style.marginLeft;
    this.register(() => view.scrollDOM.setCssStyles({ marginLeft: originalMarginLeft }));
    this.registerDomEvent(view.dom, "mousemove", (event) => this.handleMouseMove(view, event));
    this.registerDomEvent(view.dom, "mouseleave", () => this.handleMouseLeave());
    this.registerDomEvent(view.scrollDOM, "scroll", () => this.updatePosition(view));
    this.registerDomEvent(view.dom, "pointerdown", (event) => this.handlePointerDown(view, event));
    this.dragButton = this.handleEl.createDiv({
      cls: "block-handle-button drag-button",
      attr: { role: "button", tabindex: "0" }
    });
    (0, import_obsidian8.setIcon)(this.dragButton, "grip-vertical");
    this.dragButton.createSpan({ cls: "wk-nb-sr-only", text: t("handles.blockActions") });
    this.registerDomEvent(this.handleEl, "mouseenter", () => {
      this.isMouseOverHandle = true;
      this.clearHideTimeout();
    });
    this.registerDomEvent(this.handleEl, "mouseleave", () => {
      this.isMouseOverHandle = false;
      this.handleMouseLeave();
    });
    let isDragging = false;
    let suppressClick = false;
    let pointerId = null;
    const openMenu = () => {
      const button = this.dragButton;
      if (this.hoveredLine === null || !button) return;
      this.clearHideTimeout();
      const rect = button.getBoundingClientRect();
      showNotionBlockActionMenu(plugin, view, this.hoveredLine, { x: rect.left, y: rect.bottom });
    };
    this.registerDomEvent(this.dragButton, "pointerdown", (event) => {
      if (this.hoveredLine === null || pointerId !== null) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      this.clearHideTimeout();
      event.preventDefault();
      event.stopPropagation();
      isDragging = false;
      suppressClick = false;
      pointerId = event.pointerId;
      const lineNo = this.hoveredLine;
      const delay = this.isMobilePointer(event) ? MOBILE_DRAG_DELAY_MS : DESKTOP_DRAG_DELAY_MS;
      this.dragTimeout = this.ownerWindow.setTimeout(() => {
        var _a;
        this.dragTimeout = null;
        isDragging = true;
        suppressClick = true;
        if (!this.dragManager) this.dragManager = this.addChild(new DragManager(view, () => {
          pointerId = null;
          this.clearDragTimeout();
        }, plugin.transfers));
        this.dragManager.startDrag(lineNo, event, (_a = this.dragButton) != null ? _a : void 0);
      }, delay);
    });
    this.registerDomEvent(this.dragButton, "pointerup", (event) => {
      if (event.pointerId !== pointerId) return;
      event.preventDefault();
      event.stopPropagation();
      pointerId = null;
      this.clearDragTimeout();
      if (!isDragging) openMenu();
    });
    this.registerDomEvent(this.dragButton, "pointercancel", (event) => {
      if (event.pointerId !== pointerId) return;
      event.stopPropagation();
      pointerId = null;
      this.clearDragTimeout();
    });
    const cancelPendingPress = (event) => {
      var _a;
      if (event.pointerId !== pointerId || isDragging) return;
      const target = event.targetNode;
      if (target && ((_a = this.dragButton) == null ? void 0 : _a.contains(target))) return;
      pointerId = null;
      this.clearDragTimeout();
    };
    this.registerDomEvent(view.dom.ownerDocument, "pointerup", cancelPendingPress, true);
    this.registerDomEvent(view.dom.ownerDocument, "pointercancel", cancelPendingPress, true);
    this.registerDomEvent(this.dragButton, "click", (event) => {
      if (suppressClick) event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    });
    this.registerDomEvent(this.dragButton, "keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      openMenu();
    });
    this.registerDomEvent(this.dragButton, "contextmenu", (event) => {
      if (this.hoveredLine === null) return;
      const lineNo = this.hoveredLine;
      const menu = new import_obsidian8.Menu();
      menu.addItem((item) => {
        item.setTitle(t("menu.selectBlock")).setIcon("text-select").onClick(() => {
          selectWholeBlock(view, lineNo);
          view.focus();
        });
      });
      menu.showAtMouseEvent(event);
      event.preventDefault();
    });
  }
  update(update) {
    if (update.selectionSet && this.isMobileView() && this.hoveredLine !== null) {
      this.revealHandleAtSelection(update.view);
      return;
    }
    if ((update.docChanged || update.geometryChanged || update.selectionSet) && this.hoveredLine !== null) {
      this.updatePosition(update.view);
    }
  }
  updatePosition(view) {
    if (this.hoveredLine === null || !this.handleEl) return;
    view.requestMeasure({
      key: this,
      read: () => this.measurePosition(view),
      write: (position) => {
        if (!this.handleEl || this.hoveredLine === null) return;
        if (!position) {
          this.hideHandle();
          return;
        }
        if (position.lineNo !== this.hoveredLine) return;
        if (position.inset > this.handleInset) {
          this.handleInset = position.inset;
          view.scrollDOM.setCssStyles({ marginLeft: `${position.marginLeft}px` });
          this.updatePosition(view);
          return;
        }
        this.handleEl.setCssStyles({
          left: `${position.left}px`,
          transform: `translate3d(0, ${Math.round(position.top)}px, 0)`
        });
        this.handleEl.removeClass("is-hidden");
      }
    });
  }
  measurePosition(view) {
    var _a;
    if (this.hoveredLine === null || !this.handleEl) return null;
    try {
      const line = view.state.doc.line(this.hoveredLine);
      const coords = (_a = measureBlockLayout(view).line(this.hoveredLine)) != null ? _a : view.coordsAtPos(line.from);
      if (!coords) return null;
      const editorRect = view.dom.getBoundingClientRect();
      const scrollerRect = view.scrollDOM.getBoundingClientRect();
      if (coords.bottom <= scrollerRect.top || coords.top >= scrollerRect.bottom) return null;
      const lineHeight = Math.min(view.defaultLineHeight, coords.bottom - coords.top);
      const handleHeight = this.handleEl.offsetHeight || 24;
      const mobile = this.handleEl.hasClass("is-mobile") || this.isMobileView();
      const fallbackWidth = mobile ? 34 : 20;
      const width = this.handleEl.offsetWidth || fallbackWidth;
      const foldRect = this.getHeadingFoldRect(view, line.from);
      const left = this.getHandleLeft(view, width, editorRect, foldRect);
      const minLeft = Math.max(HANDLE_EDGE_GAP_PX, HANDLE_EDGE_GAP_PX - editorRect.left);
      const maxLeft = Math.min(editorRect.right, this.ownerWindow.innerWidth) - editorRect.left - width - HANDLE_EDGE_GAP_PX;
      if (maxLeft < minLeft) return null;
      let inset = this.handleInset;
      const scrollerStyle = this.ownerWindow.getComputedStyle(view.scrollDOM);
      const currentMargin = parseFloat(scrollerStyle.marginLeft) || 0;
      if (left < minLeft) {
        const contentLeft = view.contentDOM.getBoundingClientRect().left;
        const gap = Math.max(mobile ? 6 : 8, foldRect ? HEADING_HANDLE_GAP_PX + contentLeft - foldRect.left : 0);
        const paddingLeft = parseFloat(scrollerStyle.paddingLeft) || 0;
        const baseLeft = scrollerRect.left - editorRect.left - this.handleInset + paddingLeft;
        inset = Math.max(inset, Math.ceil(minLeft + width + gap - baseLeft));
      }
      const minTop = Math.max(scrollerRect.top, 0) - editorRect.top;
      const maxTop = Math.min(scrollerRect.bottom, this.ownerWindow.innerHeight) - editorRect.top - handleHeight;
      return {
        lineNo: this.hoveredLine,
        left: Math.min(Math.max(left, minLeft), maxLeft),
        top: Math.min(Math.max(coords.top - editorRect.top + (lineHeight - handleHeight) / 2, minTop), maxTop),
        inset,
        marginLeft: currentMargin - this.handleInset + inset
      };
    } catch (e) {
      return null;
    }
  }
  handleMouseMove(view, event) {
    var _a, _b;
    const rect = view.dom.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (x < -100 || x > rect.width + 100 || y < 0 || y > rect.height) {
      this.handleMouseLeave();
      return;
    }
    const target = event.targetNode;
    const ownerHTMLElement = (_a = view.dom.ownerDocument.defaultView) == null ? void 0 : _a.HTMLElement;
    if (ownerHTMLElement && (target == null ? void 0 : target.instanceOf(ownerHTMLElement)) && target.closest(".block-handle-wrap")) {
      this.clearHideTimeout();
      if ((_b = this.handleEl) == null ? void 0 : _b.hasClass("is-hidden")) {
        this.handleEl.removeClass("is-hidden");
        if (this.hoveredLine === null) this.hoveredLine = this.getLineAtClientY(view, event.clientY);
        this.updatePosition(view);
      }
      return;
    }
    const lineNo = this.getLineAtClientY(view, event.clientY);
    if (lineNo === null) {
      this.handleMouseLeave();
      return;
    }
    if (this.hoveredLine !== lineNo) this.revealHandleAtLine(view, lineNo);
    else this.updatePosition(view);
    this.clearHideTimeout();
  }
  handlePointerDown(view, event) {
    var _a;
    if (event.pointerType === "mouse" || !this.isMobilePointer(event)) return;
    const target = event.targetNode;
    const ownerHTMLElement = (_a = view.dom.ownerDocument.defaultView) == null ? void 0 : _a.HTMLElement;
    if (!ownerHTMLElement || !(target == null ? void 0 : target.instanceOf(ownerHTMLElement))) return;
    if (target.closest(".block-handle-wrap") || target.closest(".wk-nb-action-menu")) return;
    const rect = view.dom.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
    const lineNo = this.getLineAtClientPoint(view, event.clientX, event.clientY);
    if (lineNo !== null) this.revealHandleAtLine(view, lineNo, true);
  }
  handleMouseLeave() {
    this.clearHideTimeout();
    this.hideTimeout = this.ownerWindow.setTimeout(() => {
      var _a;
      this.hideTimeout = null;
      if (this.isMouseOverHandle) return;
      this.hoveredLine = null;
      (_a = this.handleEl) == null ? void 0 : _a.addClass("is-hidden");
    }, plugin.settings.hideDelay);
  }
  clearHideTimeout() {
    if (this.hideTimeout !== null) this.ownerWindow.clearTimeout(this.hideTimeout);
    this.hideTimeout = null;
  }
  clearDragTimeout() {
    if (this.dragTimeout !== null) this.ownerWindow.clearTimeout(this.dragTimeout);
    this.dragTimeout = null;
  }
  hideHandle() {
    var _a;
    this.hoveredLine = null;
    (_a = this.handleEl) == null ? void 0 : _a.addClass("is-hidden");
    this.clearHideTimeout();
  }
  destroy() {
    plugin.removeChild(this);
  }
  onunload() {
    var _a;
    closeNotionBlockActionMenus();
    (_a = this.handleEl) == null ? void 0 : _a.remove();
    this.handleEl = null;
  }
  getHandleLeft(view, width, editorRect, foldRect) {
    var _a;
    const mobile = ((_a = this.handleEl) == null ? void 0 : _a.hasClass("is-mobile")) || this.isMobileView();
    const left = view.contentDOM.getBoundingClientRect().left - editorRect.left - width - (mobile ? 6 : 8);
    return foldRect ? Math.min(left, foldRect.left - editorRect.left - width - HEADING_HANDLE_GAP_PX) : left;
  }
  getHeadingFoldRect(view, lineFrom) {
    var _a;
    const node = view.domAtPos(lineFrom).node;
    const ownerHTMLElement = (_a = view.dom.ownerDocument.defaultView) == null ? void 0 : _a.HTMLElement;
    const element = ownerHTMLElement && node.instanceOf(ownerHTMLElement) ? node : node.parentElement;
    const lineEl = element == null ? void 0 : element.closest(".cm-line");
    if (!(lineEl == null ? void 0 : lineEl.hasClass("HyperMD-header"))) return null;
    const foldEl = lineEl.querySelector(".collapse-indicator");
    if (!foldEl) return null;
    const rect = foldEl.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 ? rect : null;
  }
  getLineAtClientY(view, clientY) {
    const contentRect = view.contentDOM.getBoundingClientRect();
    return this.getLineAtClientPoint(view, contentRect.left + 5, clientY);
  }
  getLineAtClientPoint(view, clientX, clientY) {
    const renderedLine = measureBlockLayout(view).lineAtY(clientY);
    if (renderedLine !== null) return renderedLine;
    const rect = view.contentDOM.getBoundingClientRect();
    const clampedX = Math.min(Math.max(clientX, rect.left + 1), rect.right - 1);
    for (const x of [clampedX, rect.left + 5, rect.left + rect.width / 2]) {
      const pos = view.posAtCoords({ x, y: clientY });
      if (pos === null) continue;
      try {
        return view.state.doc.lineAt(pos).number;
      } catch (e) {
      }
    }
    return null;
  }
  revealHandleAtSelection(view) {
    try {
      this.revealHandleAtLine(view, view.state.doc.lineAt(view.state.selection.main.head).number);
    } catch (e) {
    }
  }
  revealHandleAtLine(view, lineNo, forceMobile = false) {
    var _a;
    this.hoveredLine = lineNo;
    (_a = this.handleEl) == null ? void 0 : _a.toggleClass("is-mobile", forceMobile || this.isMobileView());
    this.updatePosition(view);
    this.clearHideTimeout();
  }
  isMobileView() {
    return import_obsidian8.Platform.isMobile || this.ownerWindow.matchMedia("(pointer: coarse)").matches;
  }
  isMobilePointer(event) {
    return this.isMobileView() || event.pointerType === "touch" || event.pointerType === "pen";
  }
});

// src/crossDocument.ts
var import_state4 = require("@codemirror/state");
var import_view2 = require("@codemirror/view");
var import_commands = require("@codemirror/commands");
var import_obsidian10 = require("obsidian");

// src/transferMenu.ts
var import_obsidian9 = require("obsidian");
var TransferMenu = class extends import_obsidian9.Component {
  constructor(doc, position, title, paths, disabled, expanded, choose, cancel) {
    super();
    this.doc = doc;
    this.position = position;
    this.title = title;
    this.paths = paths;
    this.disabled = disabled;
    this.expanded = expanded;
    this.choose = choose;
    this.cancel = cancel;
    this.root = null;
    this.buttons = [];
  }
  open() {
    var _a;
    const win = this.doc.defaultView;
    if (!win) return;
    this.root = this.doc.body.createDiv({ cls: "wk-nb-action-menu wk-nb-transfer-menu", attr: { role: "menu" } });
    this.root.createDiv({ cls: "wk-nb-transfer-title", text: this.title, attr: { title: this.paths } });
    const icons = { move: "scissors", copy: "copy", link: "link", embed: "panel-top" };
    for (const mode of ["move", "copy", "link", "embed"]) {
      const button = this.root.createEl("button", { cls: "wk-nb-transfer-option", attr: { role: "menuitem", "data-action": mode } });
      (0, import_obsidian9.setIcon)(button.createSpan({ cls: "wk-nb-transfer-icon" }), icons[mode]);
      const text = button.createSpan({ cls: "wk-nb-transfer-text" });
      text.createSpan({ text: t(`transfer.${mode}`) });
      if (this.disabled[mode]) {
        button.disabled = true;
        text.createSpan({ cls: "wk-nb-transfer-description", text: this.disabled[mode] });
      }
      this.buttons.push(button);
      this.registerDomEvent(button, "click", () => this.choose(mode));
    }
    if (this.expanded) this.root.createDiv({ cls: "wk-nb-transfer-hint", text: t("transfer.expanded") });
    this.root.createDiv({ cls: "wk-nb-transfer-hint", text: t("transfer.cancelHint") });
    this.root.setCssStyles({
      left: `${Math.max(8, Math.min(this.position.x, win.innerWidth - this.root.offsetWidth - 8))}px`,
      top: `${Math.max(8, Math.min(this.position.y, win.innerHeight - this.root.offsetHeight - 8))}px`
    });
    (_a = this.buttons.find((button) => !button.disabled)) == null ? void 0 : _a.focus();
    this.registerDomEvent(this.doc, "pointerdown", (event) => {
      var _a2;
      const target = event.targetNode;
      if (target && !((_a2 = this.root) == null ? void 0 : _a2.contains(target))) this.cancel(false);
    }, true);
    this.registerDomEvent(this.doc, "keydown", (event) => {
      var _a2;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        this.cancel(true);
      }
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        const enabled = this.buttons.filter((button) => !button.disabled), at = enabled.findIndex((button) => button === this.doc.activeElement);
        (_a2 = enabled[(at + (event.key === "ArrowDown" ? 1 : enabled.length - 1) + enabled.length) % enabled.length]) == null ? void 0 : _a2.focus();
      }
      if (event.key === "Tab") {
        event.preventDefault();
        this.cancel(true);
      }
    }, true);
    this.registerDomEvent(win, "resize", () => this.cancel(false));
    this.registerDomEvent(win, "blur", () => this.cancel(false));
  }
  onunload() {
    var _a;
    (_a = this.root) == null ? void 0 : _a.remove();
    this.root = null;
    this.buttons = [];
  }
};

// src/crossDocument.ts
var historySignal = import_state4.StateEffect.define();
var applyingTransfer = import_state4.Annotation.define();
function signalValue(value) {
  if (typeof value !== "object" || value === null || !("kind" in value) || value.kind !== "notion-block.transfer" || !("direction" in value) || value.direction !== "undo" && value.direction !== "redo" || !("record" in value) || typeof value.record !== "object" || value.record === null) return null;
  const record = value.record;
  if (!("id" in record) || typeof record.id !== "string" || !("entries" in record) || !Array.isArray(record.entries) || record.entries.length < 1 || record.entries.length > 2) return null;
  const entries = record.entries;
  if (!entries.every((entry) => typeof entry === "object" && entry !== null && "path" in entry && typeof entry.path === "string" && "before" in entry && typeof entry.before === "string" && "after" in entry && typeof entry.after === "string")) return null;
  return value;
}
function signals(tr) {
  return tr.effects.map((effect) => signalValue(effect.value)).filter((value) => value !== null);
}
function fileOf(view) {
  var _a, _b;
  return (_b = (_a = view.state.field(import_obsidian10.editorInfoField, false)) == null ? void 0 : _a.file) != null ? _b : null;
}
var CrossDocumentDrag = class extends import_obsidian10.Component {
  constructor(app) {
    super();
    this.app = app;
    this.views = /* @__PURE__ */ new Set();
    this.menu = null;
    this.pending = null;
    this.preparingHistory = false;
    this.replayingHistory = false;
    this.replays = /* @__PURE__ */ new Map();
    this.denied = /* @__PURE__ */ new Set();
    this.repairs = /* @__PURE__ */ new Map();
    this.serial = 0;
    this.register(() => {
      for (const [timer, repair] of this.repairs) {
        repair.win.clearTimeout(timer);
        repair.restore();
      }
      this.repairs.clear();
    });
  }
  extension() {
    const attach = (view) => {
      this.views.add(view);
    };
    const update = (value) => this.onUpdate(value);
    const detach = (view) => {
      var _a, _b;
      this.views.delete(view);
      this.replays.clear();
      if (((_a = this.pending) == null ? void 0 : _a.sourceView) === view || ((_b = this.pending) == null ? void 0 : _b.targetView) === view) this.closeMenu(false);
    };
    return [
      import_view2.ViewPlugin.fromClass(class {
        constructor(view) {
          this.view = view;
          attach(view);
        }
        update(value) {
          update(value);
        }
        destroy() {
          detach(this.view);
        }
      }),
      import_state4.Prec.highest(import_view2.keymap.of([
        { key: "Mod-z", run: (view) => this.runHistory(view, "undo") },
        { key: "Mod-Shift-z", run: (view) => this.runHistory(view, "redo") },
        { key: "Mod-y", run: (view) => this.runHistory(view, "redo") }
      ])),
      import_state4.Prec.highest(import_view2.EditorView.domEventHandlers({ beforeinput: (event, view) => {
        const direction = event.inputType === "historyUndo" ? "undo" : event.inputType === "historyRedo" ? "redo" : null;
        if (!direction || !this.runHistory(view, direction)) return false;
        event.preventDefault();
        return true;
      } })),
      // Native history uses filter:false, but extenders still observe its markers.
      import_state4.EditorState.transactionExtender.of((tr) => {
        this.prepareHistory(tr);
        return null;
      }),
      import_commands.invertedEffects.of((tr) => signals(tr).map((signal) => historySignal.of({ ...signal, direction: signal.direction === "undo" ? "redo" : "undo" })))
    ];
  }
  sameFile(a, b) {
    var _a, _b;
    return a === b || fileOf(a) !== null && ((_a = fileOf(a)) == null ? void 0 : _a.path) === ((_b = fileOf(b)) == null ? void 0 : _b.path);
  }
  nameOf(view) {
    var _a, _b;
    return (_b = (_a = fileOf(view)) == null ? void 0 : _a.basename) != null ? _b : "";
  }
  targetAt(source, x, y) {
    var _a;
    const doc = source.dom.ownerDocument, hit = doc.elementFromPoint(x, y);
    for (const view of this.views) {
      if (view.dom.ownerDocument !== doc || !view.dom.isConnected || view.state.readOnly || view !== source && ((_a = fileOf(view)) == null ? void 0 : _a.extension) !== "md") continue;
      const rect = view.scrollDOM.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1 || x < rect.left - 80 || x > rect.right || y < rect.top || y > rect.bottom) continue;
      if (hit && !view.dom.contains(hit)) continue;
      return view;
    }
    return null;
  }
  offer(sourceView, source, targetView, target, point) {
    this.closeMenu(false);
    const sourceFile = fileOf(sourceView), targetFile = fileOf(targetView);
    if (!sourceFile || !targetFile || this.sameFile(sourceView, targetView) || source.document !== sourceView.state.doc || targetView.state.readOnly) return;
    this.pending = { sourceView, source, targetView, target, sourceFile, targetFile, sourcePath: sourceFile.path, targetPath: targetFile.path, targetState: targetView.state };
    const disabled = {};
    const incoming = this.incomingReferenceReason(sourceFile, source);
    if (incoming) disabled.move = t(`transfer.${incoming}`);
    let expanded = false;
    try {
      expanded = createReferencePlan(source, () => this.newId(sourceView)).expanded;
    } catch (error) {
      disabled.link = disabled.embed = t(`transfer.${error instanceof TransferError ? error.message : "unsupportedReference"}`);
    }
    if (target.mode !== "outside" && source.content.split("\n").some((line) => /^\^[A-Za-z0-9-]+[ \t]*$/.test(line))) disabled.move = disabled.copy = t("transfer.anchorContainer");
    this.menu = this.addChild(new TransferMenu(
      targetView.dom.ownerDocument,
      point,
      `${sourceFile.basename} \u2192 ${targetFile.basename}`,
      `${sourceFile.path} \u2192 ${targetFile.path}`,
      disabled,
      expanded,
      (mode) => this.execute(mode),
      (focus) => this.closeMenu(focus)
    ));
    this.menu.open();
  }
  valid(drop) {
    return this.views.has(drop.sourceView) && this.views.has(drop.targetView) && drop.sourceView.dom.isConnected && drop.targetView.dom.isConnected && fileOf(drop.sourceView) === drop.sourceFile && fileOf(drop.targetView) === drop.targetFile && drop.sourceFile.path === drop.sourcePath && drop.targetFile.path === drop.targetPath && drop.sourceView.state.doc === drop.source.document && drop.targetView.state.doc === drop.targetState.doc && !drop.sourceView.state.readOnly && !drop.targetView.state.readOnly;
  }
  execute(mode) {
    const drop = this.pending;
    if (!drop || !this.valid(drop)) {
      this.closeMenu(false);
      new import_obsidian10.Notice(t("transfer.changed"));
      return;
    }
    try {
      const incoming = mode === "move" ? this.incomingReferenceReason(drop.sourceFile, drop.source) : null;
      if (incoming) throw new TransferError(incoming);
      const movedHeadings = new Set(drop.source.content.split("\n").map((line) => {
        var _a;
        return (_a = line.match(/^#{1,6}\s+(.+?)(?:\s+#+)?$/)) == null ? void 0 : _a[1];
      }).filter((value) => !!value));
      const plan = createTransferPlan(drop.source, drop.targetState.doc, drop.target, mode, {
        newId: () => this.newId(drop.sourceView),
        blockLink: (id) => `[[${this.app.metadataCache.fileToLinktext(drop.sourceFile, drop.targetFile.path, true)}#^${id}]]`,
        rewriteLinks: (text, ids) => rewriteContentLinks(text, drop.targetFile.path, (path, subpath, markdown) => {
          var _a;
          const file = this.resolveFile(path, drop.sourceFile, markdown);
          if (!file) return null;
          const id = subpath.startsWith("#^") ? subpath.slice(2) : null;
          if (file === drop.sourceFile && (id !== null && ids.has(id) || movedHeadings.has(subpath.slice(1)))) {
            return { path: drop.targetFile.path, subpath: id === null ? subpath : `#^${(_a = ids.get(id)) != null ? _a : id}` };
          }
          return { path: file.path, subpath };
        }, (path) => {
          const file = this.app.vault.getAbstractFileByPath(path);
          return file instanceof import_obsidian10.TFile ? this.app.metadataCache.fileToLinktext(file, drop.targetFile.path, true) : path;
        })
      });
      const changes = [
        { view: drop.targetView, path: drop.targetFile.path, before: drop.targetState.doc.toString(), after: plan.targetAfter, selection: plan.targetSelection },
        { view: drop.sourceView, path: drop.sourceFile.path, before: drop.source.document.toString(), after: plan.sourceAfter, selection: void 0 }
      ].filter((entry) => entry.before !== entry.after);
      const record = { id: `${Date.now()}-${++this.serial}`, entries: changes.map(({ path, before, after }) => ({ path, before, after })) };
      const signal = { kind: "notion-block.transfer", record, direction: "redo" };
      const prepared = changes.map((entry) => ({ ...entry, transaction: entry.view.state.update({
        changes: textChange(entry.view.state.doc, entry.after),
        selection: entry.selection,
        effects: historySignal.of(signal),
        annotations: [applyingTransfer.of(true), import_commands.isolateHistory.of("full")],
        userEvent: "move.block.cross-document"
      }) }));
      if (prepared.some((entry) => entry.transaction.newDoc.toString() !== entry.after)) throw new TransferError("changed");
      this.closeMenu(false);
      const applied = [];
      try {
        for (const entry of prepared) {
          if (entry.view.state !== entry.transaction.startState) throw new TransferError("changed");
          try {
            entry.view.dispatch(entry.transaction);
          } catch (error) {
            if (entry.view.state.doc.toString() === entry.after) applied.push(entry);
            throw error;
          }
          if (entry.view.state.doc.toString() !== entry.after) throw new TransferError("changed");
          applied.push(entry);
        }
      } catch (error) {
        this.replayingHistory = true;
        try {
          for (const entry of applied.reverse()) (0, import_commands.undo)(entry.view);
        } finally {
          this.replayingHistory = false;
        }
        throw error;
      }
      drop.targetView.focus();
      if (plan.expanded) new import_obsidian10.Notice(t("transfer.expanded"));
    } catch (error) {
      this.closeMenu(false);
      new import_obsidian10.Notice(t(`transfer.${error instanceof TransferError ? error.message : "failed"}`));
    }
  }
  resolveFile(path, source, markdown) {
    if (!path) return source;
    if (markdown) {
      const parts = path.startsWith("/") ? [] : source.path.split("/").slice(0, -1);
      for (const part of path.split("/")) {
        if (part === "..") parts.pop();
        else if (part && part !== ".") parts.push(part);
      }
      const file = this.app.vault.getAbstractFileByPath((0, import_obsidian10.normalizePath)(parts.join("/")));
      if (file instanceof import_obsidian10.TFile) return file;
    }
    return this.app.metadataCache.getFirstLinkpathDest(path, source.path);
  }
  incomingReferenceReason(file, source) {
    var _a, _b;
    const ids = new Set(getBlockIds(source.text));
    if (!ids.size) return null;
    for (const note of this.app.vault.getMarkdownFiles()) {
      const live = [...this.views].filter((view) => fileOf(view) === note);
      if (live.length) {
        let referenced = false;
        for (const view of live) {
          const doc = view.state.doc;
          const text = note === file ? doc.sliceString(0, source.from) + "\n" + doc.sliceString(source.to) : doc.toString();
          rewriteContentLinks(text, note.path, (path, subpath, markdown) => {
            if (subpath.startsWith("#^") && ids.has(subpath.slice(2)) && this.resolveFile(path, note, markdown) === file) referenced = true;
            return null;
          }, (path) => path);
        }
        if (referenced) return "referenced";
        continue;
      }
      const cache2 = this.app.metadataCache.getFileCache(note);
      if (!cache2) return "indexPending";
      for (const link of [...(_a = cache2 == null ? void 0 : cache2.links) != null ? _a : [], ...(_b = cache2 == null ? void 0 : cache2.embeds) != null ? _b : []]) {
        if (note === file && link.position.start.offset >= source.from && link.position.end.offset <= source.to) continue;
        const { path, subpath } = (0, import_obsidian10.parseLinktext)(link.link);
        if (subpath.startsWith("#^") && ids.has(subpath.slice(2)) && this.resolveFile(path, note, false) === file) return "referenced";
        let referenced = false;
        rewriteContentLinks(link.original, note.path, (path2, subpath2, markdown) => {
          if (subpath2.startsWith("#^") && ids.has(subpath2.slice(2)) && this.resolveFile(path2, note, markdown) === file) referenced = true;
          return null;
        }, (path2) => path2);
        if (referenced) return "referenced";
      }
    }
    return null;
  }
  newId(view) {
    var _a;
    const bytes = new Uint32Array(2);
    (_a = view.dom.ownerDocument.defaultView) == null ? void 0 : _a.crypto.getRandomValues(bytes);
    return `nb-${bytes[0].toString(36)}${bytes[1].toString(36)}`;
  }
  runHistory(view, direction) {
    let predicted = null;
    this.preparingHistory = true;
    try {
      (direction === "undo" ? import_commands.undo : import_commands.redo)({ state: view.state, dispatch: (value) => {
        predicted = value;
      } });
    } finally {
      this.preparingHistory = false;
    }
    const transaction = predicted;
    if (!transaction) return false;
    if (this.prepareHistory(transaction, false)) view.dispatch(transaction);
    return true;
  }
  prepareHistory(tr, markDenied = true) {
    var _a, _b, _c;
    if (this.preparingHistory || this.replayingHistory || tr.annotation(applyingTransfer)) return true;
    const signal = signals(tr)[0];
    if (!signal || !tr.isUserEvent(signal.direction)) return true;
    const path = (_b = (_a = tr.startState.field(import_obsidian10.editorInfoField, false)) == null ? void 0 : _a.file) == null ? void 0 : _b.path;
    const own = signal.record.entries.find((entry) => entry.path === path);
    const expected = (entry) => signal.direction === "undo" ? entry.after : entry.before;
    const result = (entry) => signal.direction === "undo" ? entry.before : entry.after;
    const replay = [];
    let valid = own && tr.startState.doc.toString() === expected(own) && tr.newDoc.toString() === result(own);
    if (valid) for (const entry of signal.record.entries.filter((entry2) => entry2 !== own)) {
      let peer = null;
      for (const view of this.views) {
        if (((_c = fileOf(view)) == null ? void 0 : _c.path) !== entry.path || !view.dom.isConnected || view.state.readOnly || view.state.doc.toString() !== expected(entry)) continue;
        let predicted = null;
        this.preparingHistory = true;
        try {
          (signal.direction === "undo" ? import_commands.undo : import_commands.redo)({ state: view.state, dispatch: (value) => {
            predicted = value;
          } });
        } finally {
          this.preparingHistory = false;
        }
        const transaction = predicted;
        if (transaction && transaction.newDoc.toString() === result(entry) && signals(transaction).some((other) => other.record.id === signal.record.id && other.direction === signal.direction)) {
          peer = { view, transaction };
          break;
        }
      }
      if (!peer) {
        valid = false;
        break;
      }
      replay.push(peer);
    }
    if (!valid) {
      if (markDenied) this.denied.add(signal.record.id + signal.direction);
      new import_obsidian10.Notice(t("transfer.historyBlocked"));
      return false;
    }
    this.denied.delete(signal.record.id + signal.direction);
    this.replays.set(signal.record.id + signal.direction, replay);
    return true;
  }
  onUpdate(update) {
    if (this.pending && !this.valid(this.pending)) this.closeMenu(false);
    if (this.replayingHistory) return;
    for (const tr of update.transactions) {
      if (tr.annotation(applyingTransfer)) continue;
      for (const signal of signals(tr)) {
        const key = signal.record.id + signal.direction;
        if (this.denied.delete(key)) {
          const win = update.view.dom.ownerDocument.defaultView;
          if (win) {
            const restore = () => {
              if (update.view.state.doc !== tr.newDoc) return;
              this.replayingHistory = true;
              try {
                (signal.direction === "undo" ? import_commands.redo : import_commands.undo)(update.view);
              } finally {
                this.replayingHistory = false;
              }
            };
            const timer = win.setTimeout(() => {
              this.repairs.delete(timer);
              restore();
            }, 0);
            this.repairs.set(timer, { win, restore });
          }
          continue;
        }
        const replay = this.replays.get(key);
        if (!replay) continue;
        this.replays.delete(key);
        this.replayingHistory = true;
        try {
          for (const entry of replay) entry.view.dispatch(entry.transaction);
        } finally {
          this.replayingHistory = false;
        }
      }
    }
  }
  closeMenu(focus) {
    var _a;
    const target = (_a = this.pending) == null ? void 0 : _a.targetView;
    this.pending = null;
    if (this.menu) this.removeChild(this.menu);
    this.menu = null;
    if (focus && (target == null ? void 0 : target.dom.isConnected)) target.focus();
  }
  onunload() {
    this.closeMenu(false);
    this.views.clear();
    this.replays.clear();
    this.denied.clear();
  }
};

// src/main.ts
var NotionBlock = class extends import_obsidian11.Plugin {
  constructor() {
    super(...arguments);
    this.settingsSaveQueue = Promise.resolve();
    this.savedMenuLayout = normalizeMenuLayout();
  }
  async onload() {
    await this.loadSettings();
    this.transfers = this.addChild(new CrossDocumentDrag(this.app));
    this.registerEditorExtension([blockHandlesExtension(this), this.transfers.extension()]);
    this.addSettingTab(new BlockPluginSettingTab(this.app, this));
  }
  onunload() {
  }
  async loadSettings() {
    const data = await this.loadData();
    const saved = typeof data === "object" && data !== null ? data : {};
    const { dragGranularity: _retiredMode, enabled: _retiredEnabled, showAddButton: _retiredAddButton, ...current } = saved;
    this.settings = Object.assign({}, DEFAULT_SETTINGS, current);
    this.settings.menuLayout = normalizeMenuLayout(saved.menuLayout);
    this.savedMenuLayout = normalizeMenuLayout(this.settings.menuLayout);
  }
  async saveSettings(refreshEditor = true) {
    const snapshot = { ...this.settings, menuLayout: normalizeMenuLayout(this.settings.menuLayout) };
    const write = this.settingsSaveQueue.then(async () => {
      await this.saveData(snapshot);
      this.savedMenuLayout = snapshot.menuLayout;
    });
    this.settingsSaveQueue = write.catch(() => {
    });
    await write;
    if (refreshEditor) this.app.workspace.updateOptions();
  }
  async saveMenuLayout(layout) {
    const next = normalizeMenuLayout(layout);
    this.settings.menuLayout = next;
    try {
      await this.saveSettings(false);
    } catch (error) {
      if (this.settings.menuLayout === next) this.settings.menuLayout = normalizeMenuLayout(this.savedMenuLayout);
      throw error;
    }
  }
};

/* nosourcemap */