![[PixPin_2026-04-28_00-43-33.png|1330x1234]]


为您提供一个完整的、可直接操作的方案。该方案包括：一个发送 Bark 推送的 PowerShell 脚本，以及修改 Windows 注册表将 `marginnote4app://` 协议关联到该脚本的步骤。完成后，在 Obsidian 中点击任何 `marginnote4app://` 链接，iPad 将立即收到推送通知（点击通知可自动跳转 MarginNote）。

---

## 完整实现步骤

### 1. 准备 Bark Key
在 iPad 上安装 [Bark](https://github.com/Finb/Bark) 并获取专属推送地址，例如：
`https://api.day.app/xxxxxxxxxxxx`
记下 `xxxxxxxxxxxx`，即为你的 **Bark Key**。

### 2. 创建 PowerShell 脚本 `marginote-bridge.ps1`
在任意位置（如 `C:\scripts\`）新建文本文件，重命名为 `marginote-bridge.ps1`，内容如下：

```powershell
param([string]$URL)

$BarkKey = "jeKWoLn3uJ2VPoop9SB3H3"
$BarkServer = "https://api.day.app"

# 清理 Windows 传参时可能自带的首尾双引号和空格（非常关键）
$cleanURL = $URL.Trim().Trim('"')

if (-not $cleanURL) { Write-Warning "无 URL"; exit 1 }

# 核心修改：将显示的文本 (body) 和跳转的链接 (url) 严格区分开
$body = @{
    title     = "form ob md note"
    body      = "form ob MarginNote"
    url       = $cleanURL  # <--- Bark 靠这个字段实现点击自动跳转！
    isArchive = 1
} | ConvertTo-Json

$requestUrl = "$BarkServer/$BarkKey"

try {
    # 加上 charset=utf-8 防止中文标题在传输时乱码
    Invoke-RestMethod -Uri $requestUrl -Method Post -Body $body -ContentType "application/json; charset=utf-8" | Out-Null
    Write-Output "推送已发送: $cleanURL"
} catch {
    Write-Warning "推送失败: $_"
    exit 1
}
```

> 请将 `YOUR_BARK_KEY` 替换为你的真实 Bark Key。

### 3. 修改注册表（关联协议）
以管理员身份打开 **注册表编辑器**（Win+R → `regedit`）。

#### 3.1 创建协议主键
导航到 `HKEY_CLASSES_ROOT`，右键 → 新建 → 项，命名为 `marginnote4app`。

#### 3.2 添加 URL Protocol 标记
在右侧空白处右键 → 新建 → **字符串值**，名称为 `URL Protocol`，数值数据留空（或填写任意内容）。

#### 3.3 添加默认图标（可选）
在 `marginnote4app` 下新建项 `DefaultIcon`，修改其默认值指向一个图标文件（例如 `C:\Windows\System32\imageres.dll,4`），不设置也不影响功能。

#### 3.4 创建命令项
在 `marginnote4app` 下依次创建：`shell` → `open` → `command`。

最终的树形结构应为：
```
HKEY_CLASSES_ROOT
  └─ marginnote4app
       ├─ (默认)          [未设置]
       ├─ URL Protocol    [空字符串]
       ├─ DefaultIcon     (可选)
       └─ shell
            └─ open
                 └─ command
                      └─ (默认)  → [命令字符串]
```

#### 3.5 设置命令字符串
选中 `command` 项，双击右侧的 `(默认)` 值，修改数值数据为：

```
"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -ExecutionPolicy Bypass -File "C:\scripts\marginote-bridge.ps1" "%1"
```

> 请根据实际脚本路径调整。
> `-ExecutionPolicy Bypass` 确保脚本可以运行，不受本地执行策略限制。

### 4. 测试协议是否生效
1. 按下 `Win + R`，输入：
   `marginnote4app://test/123`
   如果弹出一个安全警告（首次运行），点击“是”或“允许访问”。
2. 片刻后，你的 iPad 应收到一条 Bark 推送，内容包含该 URL。点击推送，将自动打开 iPad 上的 MarginNote（若已安装）。

### 5. 在 Obsidian 中使用
将 Obsidian 中的 MarginNote 链接写成标准格式：
`marginnote4app://xxx`
然后直接鼠标左键点击，即可触发推送，全程无弹窗干扰（首次点击后系统会记住关联程序）。

---

## 补充说明与故障排除

### 问题 1：点击链接弹出询问“如何打开此链接？”
- 首次点击时 Windows 会询问是否允许此应用打开链接。勾选“记住选择”，并选择“marginote-bridge.ps 1”即可。

### 问题 2：推送未收到
1. 检查 Bark Key 是否正确。
2. 确认 iPad 网络正常，且 Bark App 在后台运行。
3. 在 PowerShell 中手动测试脚本：
   ```powershell
   .\marginote-bridge.ps1 "marginnote4app://test/hello"
   ```
   观察是否有错误输出（如网络超时、密钥无效）。

### 问题 3：PowerShell 执行策略限制
若遇到脚本无法执行，可将 `-ExecutionPolicy Bypass` 改为 `-ExecutionPolicy RemoteSigned`，或直接设置系统策略（不推荐）。上述命令已包含 Bypass，通常可解决。

### 问题 4：想要自定义推送内容
修改脚本中的 `$message` 部分。例如只推送“请打开 MarginNote”，而不包含具体 URL：
```powershell
$message = [System.Uri]::EscapeDataString("请打开 MarginNote")
```

---

## 最终体验效果
在 Windows Obsidian 中点击 `marginnote4app://xxx` → 立即触发电网发送 → iPad 震动并显示通知 → 点击通知自动跳转 MarginNote。全程无需键盘、鼠标右键，与 macOS 的原生体验完全一致。

🎉 享受无缝跨平台联动吧！


## 有效发送代码：

```ps1
param([string]$URL)

$BarkKey = "jeKWoLn3uJ2VPoop9SB3H3"
$BarkServer = "https://api.day.app"

# 清理 Windows 传参时可能自带的首尾双引号和空格（非常关键）
$cleanURL = $URL.Trim().Trim('"')

if (-not $cleanURL) { Write-Warning "无 URL"; exit 1 }

# 核心修改：将显示的文本 (body) 和跳转的链接 (url) 严格区分开
$body = @{
    title     = "form ob md note"
    body      = "form ob MarginNote"
    url       = $cleanURL  # <--- Bark 靠这个字段实现点击自动跳转！
    isArchive = 1
} | ConvertTo-Json

$requestUrl = "$BarkServer/$BarkKey"

try {
    # 加上 charset=utf-8 防止中文标题在传输时乱码
    Invoke-RestMethod -Uri $requestUrl -Method Post -Body $body -ContentType "application/json; charset=utf-8" | Out-Null
    Write-Output "推送已发送: $cleanURL"
} catch {
    Write-Warning "推送失败: $_"
    exit 1
}
```