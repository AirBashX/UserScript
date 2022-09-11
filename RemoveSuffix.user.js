// ==UserScript==
// @name         移除复制后缀
// @version      1.0.0
// @namespace    airbash/RemoveSuffix
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  移除复制后缀,手机、电脑全平台通用,长期维护:CSDN、简书、掘金、知乎专栏、B站专栏
// @match        *://*.csdn.net/*
// @match        *://*.juejin.cn/*
// @match      	 *://*.jianshu.com/*
// @match        *://www.zhihu.com/*
// @match        *://www.bilibili.com/read/mobile*
// @run-at       document-body
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function () {
	function addLink(e) {
		//删除默认事件
		e.preventDefault();
		//选择区域
		var copytext = window.getSelection().toString();
		//添加到剪切板
		navigator.clipboard.writeText(copytext);
	}
	document.addEventListener("copy", addLink);
})();
