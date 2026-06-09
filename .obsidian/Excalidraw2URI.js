module.exports = async (params) => {
    const { app } = params;
    try {
        // 1. 读取剪贴板内容
        const clipText = await navigator.clipboard.readText();

        // 2. 使用正则提取文件名和块 ID (匹配 [[文件名#^blockID]])
        const match = clipText.match(/\[\[(.*?)\#\^([^\|\]]+)/);

        if (!match) {
            new Notice("❌ 剪贴板中没有 Excalidraw 元素链接！请先在画板右键复制。");
            return;
        }

        const fileName = match[1];
        const blockId = match[2];

        // 3. 通过文件名获取文件在库中的完整路径 (Advanced URI 需要完整路径)
        const file = app.metadataCache.getFirstLinkpathDest(fileName, "");
        if (!file) {
            new Notice("❌ 找不到对应的文件，请确认链接是否正确。");
            return;
        }
        const filePath = file.path;

        // 4. 获取当前 Vault 的名称
        const vaultName = app.vault.getName();

        // 5. 拼接最终的 Advanced URI
        const advancedUri = `obsidian://advanced-uri?vault=${encodeURIComponent(vaultName)}&filepath=${encodeURIComponent(filePath)}&block=${blockId}`;

        // 6. 将生成的 URI 写回剪贴板
        await navigator.clipboard.writeText(advancedUri);
        new Notice("✅ 已成功转换！Advanced URI 已复制到剪贴板。");

    } catch (error) {
        console.error("转换 URI 时出错:", error);
        new Notice("❌ 转换失败，请确保 Obsidian 有读取剪贴板的权限。");
    }
};