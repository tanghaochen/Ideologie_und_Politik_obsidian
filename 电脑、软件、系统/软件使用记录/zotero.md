
## 注释生成模板设置
![[image-465.png|1405x614]]

`extensions.zotero.annotations.noteTemplates.highlight`

以下这个设置可以更改付制或生成注释笔记每条笔记的格式都是通过这个模板生成的。
下面这个是用于高量增持以及复制所生成的翻译。
```
<p>{{highlight}} | {{citation}} {{if comment}}<br/> > {{comment}} {{endif}}</p>
```


上面这个是直接复制高亮内容不需要携带其他信息
```
<p>{{highlight}} | {{citation}}</p>
```
