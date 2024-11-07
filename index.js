// ==UserScript==
// @name         Delete .col-span-4 Element on Perplexity.ai with MutationObserver
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  通过 MutationObserver 自动删除 Perplexity.ai 页面中动态加载的 .col-span-4 元素
// @author       liuweiqing
// @match        https://www.perplexity.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  // 函数：删除所有匹配 .col-span-4 的元素
  function removeColSpanElements() {
    const elements = document.querySelectorAll(".col-span-4");
    elements.forEach((element) => {
      element.remove();
      console.log("删除 .col-span-4 元素");
    });
  }

  // 初始删除
  removeColSpanElements();

  // 创建 MutationObserver 以监控 DOM 变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // 检查是否为元素节点
          const element =
            node.querySelector(".col-span-4") ||
            (node.classList && node.classList.contains("col-span-4")
              ? node
              : null);
          const chatElement = document.querySelector(".col-span-8");
          if (element) {
            element.remove();
            console.log("通过 MutationObserver 删除 .col-span-4 元素");
          }
          if (chatElement) {
            chatElement.classList.remove("col-span-8"); // 移除旧的类
            chatElement.classList.add("col-span-12"); // 添加新的类
          }
        }
      });
    });
  });

  // 配置 MutationObserver 监控整个文档的子元素变化
  observer.observe(document.body, {
    childList: true, // 监控直接子元素的变化
    subtree: true, // 监控整个子树（包括嵌套元素）
  });
})();
