# 使用 CooudFlare Workers 搭建
### 注意事项

不要使用关键字容易被平台检测封号：proxy，VPN等等

免费域名
[DigitalPlat Domain Dashboard](https://dash.domain.digitalplat.org/panel/main?page=%2Fpanel%2Foverview)

cloudflare worker 部署代码：
[Cloudflare-vless-trojan/Vless_workers_pages at main · yonggekkk/Cloudflare-vless-trojan](https://github.com/yonggekkk/Cloudflare-vless-trojan/tree/main/Vless_workers_pages)

![[Pasted image 20251005002039.png]]

## 已搭建完成，导入链接：
[aaa.installguider.dpdns.org/95550bdb-cf38-464c-b05c-4d2757b43083](http://aaa.installguider.dpdns.org/95550bdb-cf38-464c-b05c-4d2757b43083)


# GoogleCoud 搭建
[永久“白嫖”谷歌云服务器 | 更新整合版 | 创建永久免费VPS、搭建科学上网 | 如何避免反撸扣费 | 每月200G流量 | 试用期过后如何重新激活 - YouTube](https://www.youtube.com/watch?v=12goOU6jG9w)


已部署实例： [概览 – Compute Engine – My First Project – Google Cloud 控制台](https://console.cloud.google.com/compute/overview?walkthrough_id=connecting_to_gce_instances&project=abstract-banner-474913-d9)


补充 
- 可能需要设置权限：[IAM – IAM 和管理 – My First Project – Google Cloud 控制台](https://console.cloud.google.com/iam-admin/iam?referrer=search&orgonly=true&authuser=1&project=abstract-banner-474913-d9&supportedpurview=organizationId,folder,project)
- 设置 ssh 密钥[元数据 – Compute Engine – Default Gemini Proj… – Google Cloud 控制台](https://console.cloud.google.com/compute/metadata?chat=true&project=gen-lang-client-0573676752&scopeTab=projectMetadata&resourceTab=sshkeys): ![[PixPin_2026-05-02_16-44-34.png|1923x1061]]
	- 需要现在本地生成: ![[PixPin_2026-05-02_16-45-02.png|566x182]]
	- 然后才能通过 gcloud 连接，并且 ssh 私钥可能是无法连接成功 ![[PixPin_2026-05-02_16-46-05.png|1746x667]]
	- 通过浏览器 SSH 连接成功的本质是因为本地有了正确的 SSH 私钥，需要通过命令行生成，否则是无法连接成功的，如果更换了账号需要清除本地 SSH 再进行连接
# rustdesk
阿里[[083f86bf7bad3fdcef22613e185581f9_MD5.jpg|Open: Pasted image 20251109232627.png]]
![[083f86bf7bad3fdcef22613e185581f9_MD5.jpg]]
v4eCwYljgrsBxsxMP1oqh6FfUm2vNnV7Kefp2hyLr7c
http://47.97.29.82/21116
