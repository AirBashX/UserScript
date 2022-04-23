// ==UserScript==
// @name         链接管理
// @version      1.1.2
// @namespace    airbash/LinkManager
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  取消点击链接后跳转到安全页面,减少操作时间;支持`百度贴吧`+`掘金`+`简书`+`开源中国`
// @match        *://tieba.baidu.com/*
// @match        *://juejin.cn/*
// @match        *://www.jianshu.com/p/*
// @match        *://my.oschina.net/*
// @match        *://gitee.com/*
// @match        *://*.zhihu.com/*
// @match        *://m.so.com/s?*
// @icon         data:image/png;base64,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
// @grant        none
// @license      GPL-3.0
// @run-at       document-body
// ==/UserScript==
(function () {
	var websites = [
		{
			//https://www.zhihu.com/question/465346075/answer/2048804228
			//https://zhuanlan.zhihu.com/p/95937067
			name: "知乎",
			url: "zhihu.com",
			handlers: [
				{
					selector: ".external,.LinkCard",
					start: "?target=",
					type: "sub",
				},
			],
		},
		{
			//https://juejin.cn/post/6844903688524267534
			name: "掘金",
			url: "juejin.cn",
			handlers: [
				{
					selector: "a[href]",
					start: "?target=",
					type: "sub",
				},
			],
		},
		{
			//https://www.jianshu.com/p/cf7dc734dd6d
			name: "简书",
			url: "www.jianshu.com/p",
			handlers: [
				{
					selector: "a[href]",
					start: "go?to=",
					type: "sub",
				},
			],
		},
		{
			//https://tieba.baidu.com/p/6313991324
			name: "百度贴吧",
			url: "tieba.baidu.com/p/",
			handlers: [
				//PC版
				{
					selector: ".j-no-opener-url",
					start: "jump.bdimg.com",
					type: "text",
				},
				{
					selector: ".j-no-opener-url",
					start: "jump2.bdimg.com",
					type: "text",
				},
				//手机版
				{
					selector: ".rich-link",
					start: "checkurl?url=",
					end: "&urlrefer=",
					type: "sub",
				},
			],
		},
		{
			//https://my.oschina.net/lorryluMyRest/blog/731722
			name: "开源中国",
			url: "my.oschina.net",
			handlers: [
				{
					selector: "a[href]",
					start: "GoToLink?url=",
					type: "sub",
				},
			],
		},
		{
			//https://gitee.com/hlmd/PostmanCn
			name: "gitee",
			url: "gitee.com",
			handlers: [
				{
					selector: "a[href]",
					start: "link?target=",
					type: "sub",
				},
			],
		},
		{
			//https://m.so.com/s?q=%E4%BD%A0%E5%A5%BD
			name: "360搜索手机版",
			url: "m.so.com",
			handlers: [
				{
					selector: "a[href]",
					start: "jump?u=",
					end: "&m=",
					type: "sub",
				},
			],
		},
		// {
		// 	//https://blog.csdn.net/qq_39221436/article/details/115898858
		// 	name: "CSDN",
		// 	url: "blog.csdn.net",
		// 	start: "",
		// 	type: "",
		// },
	];

	/**
	 * 主体部分
	 */
	var time = 0;
	var interval = setInterval(() => {
		if (++time == 100) {
			clearInterval(interval);
		}
		for (website of websites) {
			if (location.href.includes(website.url)) {
				for (handler of website.handlers) {
					var items = document.querySelectorAll(handler.selector);
					for (item of items) {
						if (item.getAttribute("href").includes(handler.start)) {
							if (handler.type == "sub") {
								//截取href中的地址
								var href = item.getAttribute("href");
								var start_index = href.indexOf(handler.start) + handler.start.length;
								if (handler.end != null) {
									var end_index = href.indexOf(handler.end);
									var str = href.substring(start_index, end_index);
								} else {
									var str = href.substring(start_index);
								}
								var url = decodeURIComponent(str);
								item.setAttribute("href", url);
							} else {
								//从文本中获取地址
								item.setAttribute("href", item.innerText);
							}
						}
					}
				}
			}
		}
	}, 100);
})();
