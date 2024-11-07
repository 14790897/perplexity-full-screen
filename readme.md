# PERPLEXITY-FULL-SCREEN 用户脚本

## 概述

**PERPLEXITY-FULL-SCREEN** 用户脚本旨在通过自动删除在 [Perplexity.ai](https://www.perplexity.ai) 网站上动态加载的 `.col-span-4` 元素，提升用户体验。该脚本利用 `MutationObserver` API 监控 DOM 的变化，并通过调整列跨度来扩大聊天区域。

## 功能

- **自动删除**：该脚本会自动删除添加到页面中的任何 `.col-span-4` 元素。
- **动态调整**：将聊天元素的类从 `.col-span-8` 修改为 `.col-span-12`，使其占据整个宽度。
- **实时监控**：持续观察 DOM 的变化并应用必要的调整。

## 安装

要使用此用户脚本，您需要安装一个用户脚本管理器，例如 [Tampermonkey](https://www.tampermonkey.net/)。

### 安装步骤

1. **安装 Tampermonkey**：在您的浏览器中下载并安装 Tampermonkey 扩展（适用于 Chrome、Firefox、Safari 等）。

2. **安装用户脚本**：单击以下链接以安装用户脚本：

   [**安装 PERPLEXITY-FULL-SCREEN 用户脚本**](https://greasyfork.org/zh-CN/scripts/516259-perplexity-full-screen)

## 使用方法

安装并启用后，该脚本将在 Perplexity.ai 网站上自动运行。它会检查并删除任何添加到 DOM 中的 `.col-span-4` 元素，从而允许聊天区域扩展，提升整体用户体验。

## 调试

- 打开浏览器的开发者控制台（通常按 F12 或右键点击 → 检查 → 控制台）以查看日志信息，确认元素是否被成功删除。

## 注意事项

- 此脚本专为 Perplexity.ai 网站设计。
- 请确保您使用的是最新版本的 Tampermonkey，以获得最佳功能。

## 许可证

此脚本按“原样”提供，不提供任何形式的保证。使用时请自行承担风险。
