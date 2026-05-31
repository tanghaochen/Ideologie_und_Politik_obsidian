/*
#exclude
```js*/
// ====== Excalidraw Minimap 调试版启动脚本 ======

console.log("[Minimap Debug] 1. 脚本文件已被读取...");

const __eaMinimapRegistryKey = "__eaExcalidrawMinimapRegistry__";

const __findObsidianCommandIdByKeywords = () => {
    const commands = app?.commands?.commands;
    if (!commands) return null;

    const commandIds = Object.keys(commands).filter((key) => {
        const cmd = commands[key];
        const name = (cmd?.name || "").toLowerCase();
        const id = key.toLowerCase();
        return (id.includes("minimap") || name.includes("minimap")) &&
               (id.includes("excalidraw") || name.includes("excalidraw"));
    });
    
    console.log("[Minimap Debug] 找到的相关命令列表:", commandIds);
    return commandIds[0] || null;
};

const __runExcalidrawScriptIfNeed = async (isNewFile, view) => {
    console.log("[Minimap Debug] 2. 触发了打开文件事件！");
    
    if (!view) view = ea.targetView; 
    if (!view) {
        console.warn("[Minimap Debug] 失败：无法获取当前 Excalidraw 视图");
        return;
    }

    const commandId = __findObsidianCommandIdByKeywords();
    if (!commandId) {
        new Notice("❌ 找不到 Minimap 命令，请检查插件是否启用！");
        console.error("[Minimap Debug] 失败：未找到包含 minimap 的命令 ID");
        return;
    }

    console.log("[Minimap Debug] 3. 准备执行命令:", commandId);

    // 加大延迟，确保 DOM 完全加载
    setTimeout(() => {
        console.log("[Minimap Debug] 4. 正在尝试触发小地图...");
        app.commands.executeCommandById(commandId);
    }, 500); 
};

ea.onFileOpenHook = __runExcalidrawScriptIfNeed;
ea.onFileCreateHook = __runExcalidrawScriptIfNeed;
new Notice("🛠️ 调试版自启动脚本已挂载");