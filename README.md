# 打火机散件及自动化设备网站维护指南

这是一个静态网站项目，主页面是 `index.html`，详情页和产品目录页直接引用本地图片与脚本。

## 本地预览

推荐用本地服务器预览，避免部分浏览器对 `file://` 路径的限制：

```text
http://127.0.0.1:4179/index.html
```

如果页面没有刷新到最新样式，可以在地址后加版本号：

```text
http://127.0.0.1:4179/index.html?v=1
```

## 文件用途

```text
index.html                 首页，包含五个主题内容和主要交互
exploded-details.html      部件拆解图详情页
more-lighters.html         更多打火机产品页
more-molds.html            更多模具页
production-details.html    生产工艺详情页
page-i18n.js               详情页/产品页多语言文本
page-i18n.css              详情页/产品页公共样式
factory1-catalog.js        工厂一产品目录数据
factory2-catalog.js        工厂二产品目录数据
site.webmanifest           浏览器/PWA 图标配置
robots.txt                 搜索引擎抓取配置
sitemap.xml                搜索引擎站点地图
images/                    网站所有图片资源
```

这些文件目前都被页面或 SEO 配置引用，不要随意删除。

## 首页维护入口

打开 `index.html` 后，优先搜索这些标记：

```text
CONTENT_EDIT_ENTRY / 内容维护入口
Richard Mattka inspired theme switcher
Richard Mattka final lock layer
Single-screen section switcher
function renderMaterials
function renderMolds
function renderMachines
function renderProcessFlow
initFloatingWidget
```

常见修改位置：

```text
导航/单屏切换：搜索 Single-screen section switcher 和 Nav Highlight
主题颜色：搜索 Richard Mattka inspired theme switcher
底部友情链接：搜索 <footer class="footer">
部件拆解数据：搜索 Part Data / 部件拆解数据
原材料供应：搜索 function renderMaterials
模具系统：搜索 function renderMolds
注塑机适配：搜索 function renderMachines
生产工艺：搜索 function renderProcessFlow
右侧浮窗：搜索 initFloatingWidget
```

## 图片目录说明

```text
images/00-联系浮窗/                 WhatsApp 等联系图片
images/01-部件拆解/                 首页部件拆解和拆解详情页
images/03-模具系统/                 首页模具系统图片
images/03-模具系统透明背景/         首页模具小图
images/03-模具系统-临时打火机占位/  more-molds.html 正在使用的模具占位图库
images/05-生产工艺/                 生产流程和工艺详情页
images/07-工厂一/                   工厂一产品目录
images/08-工厂二/                   工厂二产品目录
images/08-分享预览/                 分享预览图片
```

注意：`临时打火机占位`、`待命名` 这类文件名看起来像临时文件，但当前页面仍在使用，删除前必须先确认页面不再引用。

## 删除文件规则

删除前至少检查三件事：

```text
1. 是否在 index.html / 详情页 / more 页面中直接引用
2. 是否在 factory1-catalog.js / factory2-catalog.js / page-i18n.js 中作为数据引用
3. 是否在 sitemap.xml / robots.txt / site.webmanifest 中作为 SEO 或图标资源引用
```

推荐搜索命令：

```powershell
rg -n "文件名或目录名"
```

如果是图片，最好同时搜索完整路径和文件名。

## 发布注意

这是静态站点，发布时需要上传整个项目目录，不能只上传 `index.html`。否则图片、详情页、工厂目录数据和多语言文件会丢失。
