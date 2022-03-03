// ==UserScript==
// @name         骚扰拦截
// @version      1.0
// @namespace    airbash/AnnoyancesInterception
// @homepage     https://github.com/AirBashX/airbash/
// @author       airbash
// @description  自动拦截或删除`下载弹窗`、`悬浮按钮`等影响用户体验的元素;长期维护:CSDN、简书、知乎、百家号、百度贴吧、百度新闻、新浪新闻
// @match        *://blog.csdn.net/*
// @match      	 *://*.jianshu.com/*
// @match        *://www.zhihu.com/question/*
// @match        *://tieba.baidu.com/p*
// @match        *://baijiahao.baidu.com/s*
// @match        *://mbd.baidu.com/newspage/data/*
// @match        *://news.baidu.com/news*
// @match        *://m.baidu.com/sf_baijiahao/*
// @match        *://*.sina.cn/*
// @run-at       document-body
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function () {
	/**
	 * 规则列表
	 * @type {name/url/items}
	 */
	var websites = [
		{
			name: "CSDN",
			url: "blog.csdn.net",
			items: [
				//下载弹窗
				".weixin-shadowbox",
				//悬浮按钮:APP内打开
				".feed-Sign-span",
			],
		},
		{
			name: "简书",
			url: "jianshu.com/p",
			items: [
				//下载弹窗
				".download-app-guidance",
				//悬浮按钮:打开App,看更多相似好文
				".call-app-btn",
			],
			overflow: true,
		},
		{
			name: "知乎",
			url: "www.zhihu.com/question",
			items: [
				//下载弹窗
				".ModalWrap",
				//悬浮按钮:下载
				".OpenInAppButton",
				//悬浮按钮:主页
				".DownloadGuide-inner",
			],
			overflow: true,
		},
		{
			name: "百度贴吧",
			url: "tieba.baidu.com/p",
			items: [
				//下载弹窗
				".tb-backflow-defensive",
				//悬浮按钮:打开百度贴吧
				".nav-bar-bottom",
			],
			overflow: true,
		},
		{
			name: "百家号",
			url: "baijiahao.baidu.com/s",
			items: [
				//下载弹窗
				".layer-wrap",
				//悬浮按钮:xxx独家语音
				".undefined",
			],
			overflow: true,
		},
		{
			//类似于百家号+百度资讯
			name: "百度app新闻",
			url: "mbd.baidu.com/newspage/data",
			items: [
				//下载弹窗
				".layer-wrap",
			],
			overflow: true,
		},
		{
			name: "百度资讯",
			url: "m.baidu.com/sf_baijiahao",
			items: [
				//下载弹窗
				".layer-wrap",
				//悬浮按钮:xxx独家语音
				".undefined",
			],
			overflow: true,
		},
		{
			name: "新浪新闻",
			url: "sina.cn",
			items: [
				//悬浮按钮:主页
				"#float-btn",
			],
		},
	];

	/**
	 * 主体部分
	 */
	for (website of websites) {
		if (location.href.indexOf(website.url) != -1) {
			//修复移动版页面不允许滑动
			if (website.overflow) {
				document.body.style.setProperty("overflow", "unset", "important");
			}
			//隐藏/拦截骚扰元素
			for (var item of website.items) {
				var css = document.createElement("style");
				css.innerText += item + "{display: none !important}";
				document.head.appendChild(css);
			}
		}
	}
})();
