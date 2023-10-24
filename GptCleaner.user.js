// ==UserScript==
// @name         GPT清理助手
// @namespace    airbash/GptCleaner
// @author       airbash
// @homepageURL  https://github.com/AirBashX/UserScript
// @version      0.0.1
// @description  每次进入gpt页面,删除之前的聊天记录
// @match        *://c.binjie.fun/*
// @license      GPL-3.0
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";
    localStorage.removeItem("chatStorage");
})();
