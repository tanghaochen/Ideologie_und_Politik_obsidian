
[配置·ObsidianToAnki/Obsidian_to_Anki 维基 --- Config · ObsidianToAnki/Obsidian_to_Anki Wiki](https://github.com/ObsidianToAnki/Obsidian_to_Anki/wiki/Config)

上面就是声明加入的牌组

### 填空

![[image-137.png|1288x1004]]
  
Q: Can the question
run over multiple lines?
A: Yes, and
So can the answer

Q: Does the answer need to be immediately after the question?


A: No, and preceding whitespace will be ignored.

Q: How is this possible?
A: The 'magic' of regular expressions!
## 注释
Q: How do you use this styl 111e?
A: Just like this.
START

Basic

This is a test

Back: Test successful!

[笔记格式 ·ObsidianToAnki/Obsidian_to_Anki 维基 --- Note formatting · ObsidianToAnki/Obsidian_to_Anki Wiki](https://github.com/ObsidianToAnki/Obsidian_to_Anki/wiki/Note-formatting)

![[image-170.png|1048x951]]

asdfasd
START
Tags:
END{fasdfa}
## 单行

[Inline notes · ObsidianToAnki/Obsidian_to_Anki Wiki](https://github.com/ObsidianToAnki/Obsidian_to_Anki/wiki/Inline-notes)

## 更新

![[image-141.png|911x447]]

# 🧠 Obsidian to Anki 插件使用指南

## 1. 核心运行机制

- **单向同步与无损更新**：Obsidian 是你的“核心资料库”。在 Obsidian 中写的笔记会被提取并同步到 Anki。如果在 Obsidian 中修改了卡片内容，再次同步会自动更新 Anki 中的卡片，且**完全保留你在 Anki 的复习进度和调度信息**。
- **自动绑定 ID**：每次同步成功后，插件会在 Obsidian 笔记的相关段落后自动插入一行 HTML 注释（如 ``）。**切勿手动修改或删除这行 ID**，这是两者联通的唯一凭证。

## 2. 基础环境配置 (前置条件)

要让插件正常工作，你的电脑上必须满足以下条件：

1. **Anki 后台运行**：每次在 Obsidian 中点击同步时，Anki 必须处于打开状态。
2. **安装 AnkiConnect**：在 Anki 中安装 `AnkiConnect` 插件。
3. **配置端口**：在 AnkiConnect 的设置中，必须将 `webCorsOriginList` 里添加 `"app://obsidian.md"`，以便允许 Obsidian 读取 Anki 的数据。

## 3. 核心界面配置解析（基于你的截图） #ak

### ⚙️ Defaults (默认行为设置)

- **Scan Directory (扫描目录)**：
    - _用法_：如果你只希望将某个特定文件夹（比如 `学习笔记/Anki卡片`）同步到 Anki，在这里填入路径。
    - _建议_：截图当前为空，这意味着插件会扫描**整个 Obsidian 知识库 (Vault)**。如果你的笔记很多，建议指定特定文件夹以加快扫描速度。
- **Tag (默认标签)**：
    - _用法_：同步过去的所有卡片都会自动打上截图中的 `Obsidian_to_Anki` 标签，方便你在 Anki 的浏览器中一键筛选出从 Obsidian 导出的卡片。
START
这是卡片的正面 (Front)
你可以写问题。

这是卡片的背面 (Back)
你可以写详细的答案。
END
### 🏷️ Syntax Settings (语法与触发词设置)

这里定义了如何告诉插件“这部分文字是一张卡片”。截图中的配置非常标准，以下是具体对应在 Markdown 笔记中的书写方法：

#### A. 基础多行卡片 ( `START` / `END` )

最常用的卡片格式。

Markdown

```text
START
这是卡片的正面 (Front)
你可以写问题。

这是卡片的背面 (Back)
你可以写详细的答案。
END
```

#### B. 单行/行内卡片 ( `STARTI` / `ENDI` )

适合快速、简短的问答 (Q&A)。

Markdown

```text
STARTI 卢梭的代表作是什么？ :: 《社会契约论》 ENDI
```

#### C. 指定牌组 ( `TARGET DECK` )

默认情况下，卡片会进入 Anki 的默认牌组。如果你想让当前文件里的卡片进入特定牌组，可以在笔记的任意位置（通常推荐在文档开头）加上：

Markdown

```text
TARGET DECK: 你的Anki目标牌组名称
```

#### D. 指定文件标签 ( `FILE TAGS` )

除了默认的 `Obsidian_to_Anki`，你可以为当前文档专门指定额外标签：

Markdown

```text
FILE TAGS: 历史, 法国大革命, 必考题
```

#### E. 冻结字段 ( `FROZEN` )

用于生成多个带有相同上下文的卡片时，冻结某个字段不被清空。通常搭配高级自定义卡片模板使用。

#### F. 安全删除卡片 ( `DEL` )*

_(注：根据你的截图，你的删除指令是 `DEL`，而官方默认是 `DELETE`，请以你的设定为准)_。

**避坑警告**：千万不要直接在 Anki 里删除卡片！这会导致 Obsidian 再次同步时重新生成它。正确的删除姿势是：

1. 在 Obsidian 中清空该卡片的内容。
2. 在该卡片底部的 `` 上方写上 `DEL`。

Markdown

```text
DEL
```

下次同步时，插件就会指挥 Anki 把这张卡片删掉。

---

## 4. 进阶玩法：正则表达式 (Regex)

虽然 `START` 和 `END` 很好用，但写多了容易影响笔记的排版美观。该插件支持在配置文件的 `Regex` 设置中开启高级匹配。开启后，你可以实现：

- **标题-正文法 (Header paragraph style)**：自动把 Markdown 的 `# 标题` 识别为正面，标题下的段落识别为背面。
- **无缝填空法 (Cloze Paragraph style)**：直接在笔记中使用 `{填空内容}`，插件会自动将其转换为 Anki 的 `{{c1::填空内容}}` 格式。

---

## 5. 日常使用工作流 (Workflow)

1. 启动 Anki，挂在后台。
2. 在 Obsidian 中按上述语法记笔记。
3. 点击 Obsidian 左侧边栏的 **Anki 图标**（或 `Ctrl/Cmd+P` 呼出命令面板输入 `Scan Vault`）。
4. 插件右上角提示同步成功，打开 Anki 开始复习。

---

你可以直接将以上内容复制到你的 Obsidian 中作为软件使用文档。

**接下来，你是否需要我为你提供 AnkiConnect 的具体 JSON 配置代码，或者是高级正则 (Regex) 模板（比如无缝填空和标题转卡片）的配置方法？**
