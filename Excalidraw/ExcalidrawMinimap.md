```js*/
/**
 * 自动加载小地图（ExcalidrawMinimap）
 * - 在 Excalidraw 插件设置 →「Excalidraw 自动化」设置「起动脚本」，如果没有则创建
 * - 粘贴下述代码到「启动脚本 ExcalidrawStartup」文档末段，注意格式不能修改
 * - 之后重启Obsidian，Excalidraw会自动加载该脚本，之后每次打开Excalidraw都会自动加载小地图
 * - 该脚本启动时会从 app.commands.commands 中按关键字查找对应 Excalidraw 插件的ExcalidrawMinimap命令，并通过 executeCommandById() 执行。若当前视图已挂载小地图则跳过，避免再次执行命令触发「切换关闭」。
 */

const __eaMinimapRegistryKey = "__eaExcalidrawMinimapRegistry__";
const __minimapCommandKeywords = ["obsidian-excalidraw-plugin", "ExcalidrawMinimap"];

const __minimapAlreadyActive = (view) => {
    const reg = window[__eaMinimapRegistryKey];
    const container = view?.containerEl?.querySelector?.(".excalidraw-wrapper") || view?.containerEl;
    if (!reg || typeof reg.get !== "function" || !container) return false;
    return Boolean(reg.get(container));
};

const __findObsidianCommandIdByKeywords = () => {
    const commands = app?.commands?.commands;
    if (!commands) return null;

    const commandIds = Object.keys(commands).filter((key) =>
        __minimapCommandKeywords.every((keyword) => key.includes(keyword) || commands[key]?.name?.includes?.(keyword))
    );

    return commandIds[0] || null;
};

const __runExcalidrawScriptIfNeed = async (data) => {
    const { view } = data;
    if (!view) return;
    if (__minimapAlreadyActive(view)) return;

    const commandId = __findObsidianCommandIdByKeywords();
    if (!commandId) return;

    await new Promise((r) => requestAnimationFrame(r));
    app.commands.executeCommandById(commandId);
};

ea.onFileOpenHook = __runExcalidrawScriptIfNeed;
ea.onFileCreateHook = __runExcalidrawScriptIfNeed;
new Notice("🧩 已注册 Excalidraw Minimap 自启动");