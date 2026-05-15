
# 学习原则

人不是机器, 不需要全都记住. 
需要的时候查阅笔记和文档,而看文档也不是必要的,跟着文档谁都会,重要的是领悟本质的能力.
了解一个事情,**先宏观后微观**. 先了解大体,然后拆分,逐个击破.否者很容易被细节困住,不能了解全貌.
2023.1.12-今天的感悟是觉得**先要学会大概的理论知识再实践**,不然开发的时候回踩很多坑,都不知道是什么原因,就像是想要读书才能实践(思考用什么 → 优缺点/区别 → 具体怎么实现)，如果直接就使用代码，可能会因为优缺点，适用性导致代码推翻重来，浪费了这部分时间。

![](media/1644222468347-9b7a42a1-b31e-4364-b199-72eb10b488e1.jpeg.jpg)

1. 遇到 bug: 不仅仅是一行代码解决了,而是要探寻这个 bug 背后出现的原因,刨根问题
	1. 刨根问题之一: 他为什么这样设计,推敲框架,作者的思路和想法,总结其中的利弊才会有更深的领悟.
2. 有这一届的大神在 github 跟大家交流,也会比较全面的和大家交流,why/how/when/where,你提这个问题的需求是什么

---

## 笔记怎么记
- 依照顺序描述一个技术，描述的时候要通俗易懂，用费曼学习法。
	1. 场景（When/Where），在什么地方用，什么时候用要先搞清楚
	2. 优缺点(why?为什么用)
		1. 对比：有类似的技术，做对比
		2. 改进，思考缺点和本来就有的东西能不能改进
	3. 怎样用(How)
	4. 源码，本质是怎样

## 二八原则
我们学习的东西都特别复杂，但是只需要学会 20%就能满足平时 80%的使用，不需要一定要学完某个东西的全部，这样会得不偿失，比如说我们的考试：
60 分：认真听课
80 分：只需要额外努力一下
90 分：多付出哦一点努力
95 分：拼命学
95 以上：靠运气

要求越全面意味着原本花 1 天能得一份，越到后面的级别 10 天才能得一分，越往后越多收获反而是要付出甚至 10 倍的努力，我们要先把基础分得到，不要贪多，慢慢补全。

# 阅读源码
## 方法

- 教程来源
视频、博客、手动源码、书籍、通过面试题补基础
尚硅谷、黑马程序、慕课网
通过大佬带入门，再通过自己入门比较容易
博客长的话一定要锻炼自己的阅读能力

- 方法
做好笔记（！！！）之后能将将项目按照笔记里面的内容复现出来。
由易到难：对阅读源码很有效，不应该一行一行的读代码，
debugger：应该通过代码、打断点等
通过英文单词猜测
看报错、日志、打印变量

**手写代码**
很多大场面试都需要手写代码，只有会写才能完成学习的输出闭环，如果看不懂，一般是基础的问题，再回去打基础

**面试**
通过牛客网 借鉴别人的面试经历来补充自己
大大大都督周瑜 方法：
![image.png](media/image-227.png)

## 阅读源码工具
java 源码阅读
源码阅读网：[http://www.coderead.cn/home/index.html#project](http://www.coderead.cn/home/index.html#project)
![image.png](media/image-222.png)
idea 插件：SequenceDiagram
![image.png](media/image-219.png)
idea 方法二
![image.png](media/image-223.png)
通过右键类，点击 diagrams

### doxygen
用 doxygen 类的工具生成调用关系图，用 git log 看文件修改纪录

### sourcegraph
包括浏览器插件

# 综合类导航网站
[https://www.xiaolvji.com/u/ljyandlwl](https://www.xiaolvji.com/u/ljyandlwl)
# VPN
[https://17yxyy.cc/#/knowledge](https://17yxyy.cc/#/knowledge)
如果不能添加节点，复制订阅地址
![image.png](media/image-217.png)
放到浏览器获取这串字符 ![image.png](media/image-216.png)
如果这串字符不能访问，则更改域名为网站名
![image.png](media/image-224.png)

![image.png](media/image-218.png)


>clash
>使用 clash 兼容性更好, 并且可以直接导入

这次通过 clash 的 tun 模式解决了 `copilot` 不能连接服务的问题: ![[asset/Pasted image 20220628213614.png]]
具体配置如下 ![[asset/Pasted image 20220628213620.png]]

## 网络配置
![[asset/Pasted image 20220628224809.png]]
## 备用
2 官网地址
[poi.aoao.me](https://poi.aoao.me/)

[https://sakura.camdvr.org/user](https://sakura.camdvr.org/user)

### 3 推荐
[一元机场 (xn--4gq62f52gdss.com)](https://xn--4gq62f52gdss.com/#/dashboard)

## 推荐码
大哥，给推荐两个梯子吧，他们界面用法都是一样的，只有具体的节点不一样
一元机场：https://xn--4gq62f52gdss.com/#/register?code=KVg1s20n
特点：便宜
nightCloud：https://a.17yxyy.cc/#/register?code=vfS76hs6
特点：贵一点，稳定好用

# 阿里学习教程

[https://edu.aliyun.com/course/explore?spm=5176.10731491.category.1.10f03054ganmL3&filter%5Btype%5D=all&filter%5Bprice%5D=all&filter%5BcurrentLevelId%5D=all&orderBy=studentNum&title=](https://edu.aliyun.com/course/explore?spm=5176.10731491.category.1.10f03054ganmL3&filter%5Btype%5D=all&filter%5Bprice%5D=all&filter%5BcurrentLevelId%5D=all&orderBy=studentNum&title=)
开发者课堂
[https://edu.aliyun.com/developer?spm=a2c6h.17661949.0.0.32781543BH3ZMV](https://edu.aliyun.com/developer?spm=a2c6h.17661949.0.0.32781543BH3ZMV)
## 华为官方教程程
[https://education.huaweicloud.com/programs/1ecdf4b3-15db-4ca4-b1b9-8026effafc4c/about?isAuth=0&from=hwc](https://education.huaweicloud.com/programs/1ecdf4b3-15db-4ca4-b1b9-8026effafc4c/about?isAuth=0&from=hwc)
在线课程
[https://edu.huaweicloud.com/courses](https://edu.huaweicloud.com/courses)
云计算
[https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX243+Self-paced/courseware/e0581225d29841debc619a72063585a9/7f1efda2356c4eebb3ef39ea52dd734c/](https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX243+Self-paced/courseware/e0581225d29841debc619a72063585a9/7f1efda2356c4eebb3ef39ea52dd734c/)

AI
[https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE072+Self-paced/courseware/139fec7ea1584c9e9659ecea691e4d99/f615ab3e900446d3b94ab04268857883/](https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE072+Self-paced/courseware/139fec7ea1584c9e9659ecea691e4d99/f615ab3e900446d3b94ab04268857883/)

# 浏览器插件
保存标签
### oneTab
![image.png](media/image-221.png)

### 保存网页 离线
![image.png](media/image-223.png)



# 电子书
### 搜索
[https://zh.sa1lib.org/](https://zh.sa1lib.org/)
（如果失效搜索 1 lib）
**最新地址：** [https://zh.fr1lib.org/](https://pangniao.net/go/aHR0cHM6Ly96aC5mcjFsaWIub3JnLw==) [https://zh.1lib.pl/](https://pangniao.net/go/aHR0cHM6Ly96aC4xbGliLnBsLw==)
[https://1lib.domains](https://pangniao.net/go/aHR0cHM6Ly8xbGliLmRvbWFpbnM=)（这个地址会自动跳转到能正常访问的新地址）

[https://book4you.org/](https://book4you.org/)



 
### pdf 处理
[https://www.ilovepdf.com/zh-cn](https://www.ilovepdf.com/zh-cn)
![image.png](media/image-220.png)
pdf 格式转换
[https://cloudconvert.com/epub-to-pdf](https://cloudconvert.com/epub-to-pdf)

[https://epub.to/pdf-epub](https://epub.to/pdf-epub)
[https://tools.pdf24.org/en/](https://tools.pdf24.org/en/)

### 电子书 加目录
![image.png](media/image-225.png)

## AD 插件自动加目录
### AutoBookMark
[https://blog.csdn.net/weixin_30568715/article/details/96413531](https://blog.csdn.net/weixin_30568715/article/details/96413531)
[pdf转MarkDown](https://www.itspxx.com/thread-5944-1-1.html)

## 全球最大的盗版网站
[http://rutracker.org/forum/profile.php?mode=register](http://rutracker.org/forum/profile.php?mode=register)

