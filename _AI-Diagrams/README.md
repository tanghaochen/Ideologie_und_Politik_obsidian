# _AI-Diagrams

这个目录是 **AI（MCP）专用输出区**，由 `mcp-excalidraw-server` 写入。

## 规则（给人和 AI 看）

- AI **只往这个目录写**，不读改 vault 里任何既有文件（`Excalidraw/`、`国家/`、`思想思维心理哲学/` 等目录下的图都保持原样）。
- 这里的文件可以随时删，删了不影响你的笔记——建议用「链接/嵌入」引用，而不是把内容搬进来。
- 两种格式：
  - `*.excalidraw` —— 明文 JSON，AI 可读可 diff，适合当"源文件"反复重排；
  - `*.excalidraw.md` —— Obsidian Excalidraw 插件原生格式（绘图存在 `compressed-json` 里），适合嵌进笔记、双链。

## 在 Obsidian 里打开

1. 文件列表里点开 `_AI-Diagrams` 下的 `*.excalidraw.md`（插件 2.29.0 直接渲染）；
2. 或在 Excalidraw 空画布左上角菜单 → `Open` → 选文件；
3. 想要图谱视图/双链，用 `[[文件名.excalidraw.md]]` 引用。

## 常用命令（在 vault 外跑）

```bash
# 把画布上的图导出到本目录
npx -y mcp-excalidraw-server export --out "<vault>\_AI-Diagrams\x.excalidraw" --format json
npx -y mcp-excalidraw-server export --out "<vault>\_AI-Diagrams\x.excalidraw.md" --format obsidian

# 把本目录的图读回画布继续改（会替换画布内容，不动文件）
npx -y mcp-excalidraw-server import "<vault>\_AI-Diagrams\x.excalidraw" --replace

# 出图（不需要浏览器）
npx -y mcp-excalidraw-server render "<vault>\_AI-Diagrams\x.excalidraw" --out "$env:TEMP\x.png" --scale 2
```

## 注意

- 你的 vault 启用了 **obsidian-git**（每 500 分钟自动 commit / push）。本目录的文件会被一起提交；想排除就在 vault 的 `.gitignore` 加一行 `_AI-Diagrams/`。
- **格式别手改**：MCP 导出的 `*.excalidraw.md` 里是明文 ```json``` 块；而插件自己保存时可能写成 `compressed-json`（LZString 压缩）。插件两种都认（源码里 `DRAWING_REG` 与 `DRAWING_COMPRESSED_REG` 两套正则），**但人别去改那一段**——要改就走 `import` / `export`，或者干脆只维护 `.excalidraw` 明文文件。
