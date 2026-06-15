# 打火机网站修改指南

这个网站是静态网页，主要文件是 `index.html`。图片都放在 `images` 文件夹里，按栏目分类。

## 快速预览

在本地预览时，打开：

```text
http://127.0.0.1:4179/index.html
```

如果浏览器没有刷新最新图片，可以在网址后加时间戳，例如：

```text
http://127.0.0.1:4179/index.html?v=1
```

## 文件结构

```text
lighter-website/
  index.html              主页面
  more-lighters.html      更多打火机页面
  more-molds.html         更多模具页面
  images/
    00-联系浮窗/
    01-部件拆解/
    02-原材料供应/
    03-模具系统/
    04-注塑机适配/
    05-生产工艺/
    06-更多打火机/
```

## 修改入口

打开 `index.html` 后，可以直接搜索下面这些关键词：

```text
内容维护入口
```

常用栏目对应位置：

```text
部件拆解：搜索 Part Data / 部件拆解数据
原材料供应：搜索 function renderMaterials
模具系统：搜索 function renderMolds
注塑机适配：搜索 function renderMachines
生产工艺：搜索 function renderProcessFlow
右侧浮窗：搜索 floating-widget 或 initFloatingWidget
```

## 替换图片

建议保持原来的文件名，直接覆盖对应图片，这样不用改代码。

如果要改成新文件名，需要同步修改 `index.html` 里的图片路径，例如：

```js
img:'images/03-模具系统/底座模具.png'
photo:'images/01-部件拆解/砂轮打火机/海绵.png'
```

## 修改文字

动态生成的文字大多在 JavaScript 数据里：

```js
{name:'底座模具', img:'images/03-模具系统/底座模具.png', size:'320×300×300mm'}
```

只改引号里的内容即可。注意不要删除逗号、冒号、引号。

## 修改布局样式

样式在 `index.html` 顶部的 `<style>` 中。最终生效的主要样式在文件靠后位置，可以搜索：

```text
Final layout
Mold card final layout
Production flow
Production card image emphasis
```

如果只是调整大小、间距、列数，优先改这些最终样式段。

## 发布上线

Netlify 部署时，把整个 `lighter-website` 文件夹上传或连接 Git 仓库即可。不要只上传 `index.html`，否则图片路径会失效。
