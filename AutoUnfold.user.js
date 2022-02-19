// ==UserScript==
// @name         自动展开
// @version      1.1.5
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @author       airbash
// @description  自动展开文档	隐藏部分;长期维护、全平台支持:CSDN、简书、知乎、百家号、百度闻、新资讯、百度经验、百度知道、百度贴吧、百度新浪新闻、腾讯新闻、搜狐新闻、网易新闻、CSDN手机版、简书手机版、知乎手机版、百家号手机版、百度资讯手机版、百度经验手机版、百度知道手机版、百度贴吧手机版、百度新闻手机版、新浪新闻手机版、腾讯新闻手机版、搜狐新闻手机版、网易新闻手机版
// @match      	 *://*.jianshu.com/*
// @match        *://blog.csdn.net/*
// @match        *://www.zhihu.com/question/*
// @match        *://jingyan.baidu.com/article*
// @match        *://zhidao.baidu.com/question*
// @match        *://tieba.baidu.com/p*
// @match        *://baijiahao.baidu.com/s*
// @match        *://mbd.baidu.com/newspage/data/*
// @match        *://news.baidu.com/news*
// @match        *://m.baidu.com/sf_baijiahao/*
// @match        *://*.sina.cn/*
// @match        *://3g.163.com/*
// @match        *://m.sohu.com/a/*
// @match        *://xw.qq.com/*
// @run-at       document-body
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAAHECAYAAACnX1ofAAAABmJLR0QA/wD/AP+gvaeTAAAMeklEQVR4nO3cTY4dVxnH4Zd0Rpll4B1kwgpgBQyQsNhCBkwslsEgA0RAQgLyDZJDIrEExCLwCpCCYMSHxAAjYRh0l+Nud92uuvc9db6eR/rPzym7/dORrI4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjIVe0DTObdiPhXRPyt9kGA3b4XEW9HxJ9rHwR694OIeBERf4mIb1Y+C7DPdyPi3xHxz4j4duWzQNeWGP7vZqII/VhiuPz8iiKc6W4MRRH6cTeGoghnWouhKEL71mIoirDTQzEURWjXQzEURdhoawxFEdqzNYaiCA/YG0NRhHbsjaEowopzYyiKUN+5MRRFuOPSGIoi1HNpDEURbmTFUBTheFkxFEWmlx1DUYTjZMdQFJlWqRiKIpRXKoaiyHRKx1AUoZzSMRRFpnFUDEUR8h0VQ1FkeEfHUBQhz9ExFEWGVSuGogiXqxVDUWQ4tWMoinC+2jEURYbRSgxFEfZrJYaiSPdai6EownatxVAU6VarMRRFeFirMRRFutN6DEUR1rUeQ1GkG73EUBThdb3EUBRpXm8xFEX4Wm8xFEWa1WsMRRH6jaEo0pzeYyiKzKz3GIoizRglhqLIjEaJoShS3WgxFEVmMloMRZFqRo2hKDKDUWMoihxu9BiKIiMbPYaiyGFmiaEoMqJZYiiKFDdbDEWRkcwWQ1GkmFljKIqMYNYYiiLpZo+hKNKz2WMoiqQRw9sTRXoihrcnipxNDO+fKNIDMbx/oshuYnh6okjLxPD0RJHNxHDbRJEWieG2iSIPEsN9E0VaIob7JoqsEsPzJoq0QAzPmyjymifRdgx/FhHPGjjH2r6KiHd2f3XI8Tginkf9n4O1fR4Rf2jgHGv7R0R8a/dXZ0itvwx/fHPORxHxxwbOszYvRWpo/WX4ZUS8GRFvRcTvGzjP2rwU6SaGC1GEr/USw4Uo0qzeYrgQRegvhgtRpDm9xnAhisys1xguRJFm9B7DhSgyo95juBBFqhslhgtRZCatx/CL2BbDhShSzWgxXIgiMxgthgtR5HCjxnAhioxs1BguRJHDjB7DhSgyotFjuBBFipslhgtRZCSzxHAhihQzWwwXosgIZovhQhRJN2sMF6JIz2aN4UIUSTN7DBeiSI9mj+FCFLmYGN4mivSk9Rj+No6J4UIUOZsY3k8U6YEY3k8U2U0MTxNFWiaGp4kim4nhNqJIi8RwG1HkQWK4jyjSEjHcRxRZJYbnEUVa0EMMr4rd/nyiyGvE8DKiSE1ieBlR5CUxzCGK1CCGOUSR+E60HcPflbt6EY8i4lnU/25r+yoi3il2e472OCKeR/2/V2v7LCLeKHb7fG9FxJ+i/ndb29/j+t8YCrmKiN9E/T/otf0nIr5f7PZleClyBC/DfD+K+t9tbS8i4oflrs5CFPOJIiWJYT4x5CVRzCeKlCCG+cSQ14hiPlEkU+sx/DzEMHNiWJko5hNFMrQew0+jr/9AEyGGbCCK+USRS4hhPjFkM1HMJ4qcQwzziSG7iWI+UWSP1mP4SYhh5sSwcaKYTxTZQgzziSEXE8V8osgpYphPDEkjivlEkfuIYT4xJJ0o5hNFXiWG+cSQYkQxnygSIYYliCHFiWI+UZybGOYTQw4jivlEcU5imE8MOZwo5hPFubQew49DDDMnhoMTxXyiOAcxzCeGVCeK+URxbGKYTwxphijmE8UxiWE+MaQ5ophPFMcihvnEkGaJYj5RHIMY5hNDmieK+USxb2KYTwzphijmE8U+iWE+MaQ7ophPFPsihvnEkG6JYj5R7IMY5hNDuieK+USxbWKYTwwZhijmE8U2iWE+MWQ4ophPFNsihvnEkGGJYj5RbEPrMfwoxDBzYkgKUcwninWJYT4xZBqimE8U6xDDfGLIdEQxnygeSwzziSHTEsV8ongMMcwnhkxPFPOJYllimE8M4YYo5hPFMsQwnxjCHaKYTxRziWE+MYQVophPFHO0HsMPQwwzJ4Y0QRTzieJlxDCfGMJGophPFM8jhvnEEHYSxXyiuI8Y5hNDOJMo5hPFbcQwnxjChUQxnyieJob5xBCSiGI+UbyfGOYTQ0gmivlE8TYxzCeGUIgo5hPFa63H8IMQw8yJIUMQxXyzR1EM84khHEQU880aRTHMJ4ZwMFHMN1sUxTCfGEIlophvliiKYT4xhMpEMd/oUewhht+44H41iCE0QhTzjRpFMcwnhtAYUcw3WhTFMJ8YQqNEMd8oURTDfGIIjRPFfL1HUQzziSF0QhTz9RpFMcwnhtAZUczXWxTFMJ8YQqdEMV8vUWw9hr8KMcycGMIGVxHxNOr/wK7teUQ8Lnb7Mh5FxLOo/+3W9te4/q61z7G2n0d/MXwv6n+3tb2IiCflrg5j8VLM1/pLsdV5GebOyxDOIIr5RHHfxDB3YggXEMV8orhtYpg7MYQEophPFE9PDHMnhpBIFPOJ4v0Tw9yJIRQgivlE8fbEMHdiCAWJYj5RvN4vQwwzJ4ZwAFHMN3sUxTB3YggHEsV8s0ZRDHMnhlCBKOabLYpimDsxhIpEMd8sURTD3IkhNEAU840eRTHMnRhCQ0Qx36hRFEMxhOGJYr7RoiiGYgjTEMV8o0TxFyGGYgiTEcV8vUfx/RBDMYRJiWK+XqMohmII0xPFfL1FUQzFELghivl6iaIYiiFwhyjmaz2KYiiGwApRzNdqFN8veelCxBA4lCjmay2KYiiGwEaimK+VKIqhGAI7iWK+2lEUQzEEziSK+WpFUQzFELiQKOY7OopiKIZAElHMd1QUxVAMgWSimK90FH9y3FXSiCHQBVHMVyqKYiiGQGFXEfE06v8DtbbnEfG42O3LeBQRz2LuGL4X9f/unIrhk3JXB3rmpZgv66X40/Dr2LJj6GUInCSK+S6N4gchhmIIVCGK+c6N4ochhmIIVCWK+fZG8aOIeKPKSc8nhsCQRDHf1ih+HGIohkBTRDHfQ1H8JMRQDIEmiWK+tSh+GmIohkDTRDHf3Sh+EdffuSdiCExJFPMtUfwyIt6sfJa9xBCYmt9ok+/t6O9l6DfQAISX4uy8DAFeIYpzEkOAe4jiXMQQ4ARRnIMYAmwgimMTQ4AdRHFMYghwBlEcixgCXEAUxyCGAAlEsW9iCJBIFPskhgAFiGJfxBCgIFHsgxgCHEAU2yaGAAcSxTaJIUAFotgWMQSoSBTbIIYADRDFusQQoCGiWIcYAjRIFI8lhgANE8VjiCFAB0SxLDEE6IgoliGGAB0SxVxiCNAxUcwhhgADEMXLiCHAQETxPGIIMCBR3EcMAQYmituIIcAERPE0MQSYiCjeTwwBJiSKt4khwMRE8ZoYAjB9FMUQgJdmjaIYAvCa2aIohgCsmiWKYgjAg0aPohgCsNmoURRDAHYbLYpiCMDZRomiGAJwsd6jKIYApOk1imIIQLreoiiGABTTSxTFEIDiriLiadQPy9r+28AZTsXwyf5PDkCrWn8ptjgvQ4BBiaIYAnBDFMUQgBuiKIYA3BBFMQTghiiKIQA3RFEMAbgxcxTFEIBbZoyiGAJwr5miKIYAnDRDFMUQgE1GjqIYArDLiFEUQwDOMlIUxRCAi4wQRTEEIEXPURRDAFL1GEUxBKCInqIohgAU1UMUxRCAQ7QcRTEE4FAtRlEMAaiipSiKIQBVtRBFMQSgCTWjKIYANKVGFMUQgCYdGUUxBKBpR0RRDAHoQskoiiEAXSkRRTEEoEuZURRDALqWEUUxBGAIl0RRDAEYyjlRFEMAhrQnimIIwNC2RFEMAZjCqSiKIQBTuS+KYgjAlF6NohgCMLWriPh1iCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3fo/tBf+1ozpM9IAAAAASUVORK5CYII=
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
(function () {
	/**
	 * 网站列表
	 * @type {name/url/操作类型}
	 */
	var websites = [
		{
			name: "CSDN",
			url: "blog.csdn.net",
			handles: [
				//自动展开代码块
				{
					type: "click",
					item: ".look-more-preCode",
				},
				//移动版:弹出窗口
				{
					type: "display",
					item: ".weixin-shadowbox",
				},
				//移动版:下载App按钮
				{
					type: "display",
					item: ".feed-Sign-span",
				},
				//移动版:阅读全文
				{
					type: "display",
					item: ".btn_mod",
				},
				{
					type: "height",
					item: ".article_content",
				},
				{
					type: "display",
					item: ".readall_box",
				},
				//移动版:展开评论
				{
					type: "click",
					item: ".btn_comment_readmore",
				},
			],
		},
		{
			name: "简书",
			url: "jianshu.com/p",
			handles: [
				//移动版:弹出窗口
				{
					type: "display",
					item: ".download-app-guidance",
				},
				//移动版:下载App按钮
				{
					type: "display",
					item: ".call-app-btn",
				},
				//移动版:阅读全文
				{
					type: "display",
					item: ".collapse-tips",
				},
				{
					type: "height",
					item: ".collapse-free-content",
				},
				{
					type: "display",
					item: ".copyright",
				},
				// 移动版:允许滑动
				{
					type: "overflow",
					item: "body",
				},
			],
		},
		{
			name: "百度经验",
			url: "jingyan.baidu.com/article",
			handles: [
				{
					type: "display",
					item: ".read-whole-mask",
				},
				{
					type: "height",
					item: ".exp-content-container",
				},
				//移动版:展开内容
				{
					type: "click",
					item: ".more-img-opt",
				},
			],
		},
		{
			name: "百度知道",
			url: "zhidao.baidu.com/question",
			handles: [
				{
					type: "display",
					item: ".wgt-best-mask",
				},
				{
					type: "height",
					item: ".best-text",
				},
				{
					type: "display",
					item: ".wgt-answers-mask",
				},
				{
					type: "height",
					item: ".answer-text",
				},
				{
					type: "click",
					item: "#show-answer-hide",
				},
				{
					type: "click",
					item: ".show-hide-dispute",
				},
				//移动版:展开内容
				{
					type: "display",
					item: ".w-detail-display-btn",
				},
				{
					type: "height",
					item: ".w-detail-container",
				},
				{
					type: "click",
					item: ".show-more-replies",
				},
			],
		},
		{
			name: "百度贴吧",
			url: "tieba.baidu.com/p",
			handles: [
				//自动展开图片
				{
					type: "display",
					item: ".replace_tip",
				},
				{
					type: "height",
					item: ".replace_div",
				},
				//自动展开回复
				{
					type: "click",
					item: ".j_lzl_m",
				},
				//移动版:弹出窗口
				{
					type: "display",
					item: ".tb-backflow-defensive",
				},
				//移动版:允许滑动
				{
					type: "overflow",
					item: "body",
				},
			],
		},
		{
			name: "百家号",
			url: "baijiahao.baidu.com/s",
			handles: [
				//移动版:弹出窗口
				{
					type: "display",
					item: ".layer-wrap",
				},
				{
					type: "overflow",
					item: "body",
				},
				//移动版:阅读全文
				{
					type: "display",
					item: ".oPadding",
				},
				{
					type: "height",
					item: ".mainContent",
				},
				//移动版:悬浮按钮
				{
					type: "display",
					item: ".undefined",
				},
			],
		},
		{
			name: "百度app新闻",
			url: "mbd.baidu.com/newspage/data",
			handles: [
				//类似于百家
				//移动版:弹出窗口
				{
					type: "display",
					item: ".layer-wrap",
				},
				{
					type: "overflow",
					item: "body",
				},
				//移动版:阅读全文
				{
					type: "display",
					item: ".height-fold",
				},
				{
					type: "height",
					item: ".dynamic-item",
				},

				//类似于百度
				//移动版:阅读全文
				{
					type: "display",
					item: ".packupButton",
				},
				{
					type: "height",
					item: ".mainContent",
				},
				//移动版:悬浮按钮
				{
					type: "display",
					item: ".GcwrDCd4cJnZ_u",
				},
			],
		},
		{
			name: "百度资讯",
			url: "m.baidu.com/sf_baijiahao",
			handles: [
				//移动版:下载弹窗
				{
					type: "display",
					item: ".layer-wrap",
				},
				{
					type: "overflow",
					item: "body",
				},
				//移动版:展开全文
				{
					type: "display",
					item: ".oPadding",
				},
				{
					type: "height",
					item: ".mainContent",
				},
				//移动版:悬浮按钮
				{
					type: "display",
					item: ".undefined",
				},
			]
		},
		{
			name: "百度新闻",
			url: "news.baidu.com/news#/detail",
			handles: [
				//移动版:阅读全文
				{
					type: "display",
					item: ".show-more-btn-container",
				},
				{
					type: "display",
					item: ".show-more-end",
				},
				{
					type: "height",
					item: ".detail-content-main",
				},
			],
		},
		{
			name: "新浪新闻",
			url: "sina.cn",
			handles: [
				//移动版:展开
				{
					type: "display",
					item: ".look_more",
				},
				{
					type: "height",
					item: ".s_card",
				},
				//other:悬浮下载按钮
				{
					type: "display",
					item: "#float-btn",
				},
			],
		},
		{
			name: "网易新闻",
			url: "3g.163.com",
			handles: [
				//移动版:展开
				{
					type: "display",
					item: ".show_article",
				},
				{
					type: "height",
					item: "article",
				},
			],
		},
		{
			name: "搜狐新闻",
			url: "m.sohu.com/a",
			handles: [
				//移动版:展开
				{
					type: "click",
					item: ".look-all",
				},
			],
		},
		{
			name: "腾讯新闻",
			url: "xw.qq.com/cmsid",
			handles: [
				//移动版:展开
				{
					type: "display",
					item: ".icon-content-more",
				},
				{
					type: "display",
					item: ".mask",
				},
				{
					type: "height",
					item: ".packed",
				},
			],
		},
		{
			name: "知乎",
			url: "www.zhihu.com/question",
			handles: [
				//PC版+移动版:展开全文
				{
					type: "display",
					item: ".ContentItem-rightButton",
				},
				{
					type: "height",
					item: ".RichContent-inner",
				},
				//移动版:下载弹窗
				{
					type: "display",
					item: ".ModalWrap",
				},
				//移动版:悬浮按钮
				{
					type: "display",
					item: ".OpenInAppButton",
				},
				//移动版:允许滑动
				{
					type: "overflow",
					item: "body",
				},
				//移动版:主页悬浮
				// {
				// 	type: "display",
				// 	item: ".DownloadGuide-inner",
				// }
			],
		}
	];
	var interval = setInterval(() => {
		for (var website of websites) {
			if (location.href.indexOf(website.url) != -1) {
				for (var handle of website.handles) {
					var items = document.querySelectorAll(handle.item);
					if (items.length != 0) {
						if (handle.type == "display") {
							//使用css的display:none;隐藏遮挡部分
							for (var item of items) {
								item.style.display = "none";
							}
						} else if (handle.type == "height") {
							//加长内容部分
							for (var item of items) {
								item.style.height = "unset";
								item.style.maxHeight = "unset";
								item.style.minHeight = "unset";
								//知乎删除遮挡
								item.style.setProperty(
									"-webkit-mask-image",
									"unset",
									"important"
								);
							}
							//防止无法滑动
						} else if (handle.type == "overflow") {
							for (var item of items) {
								item.style.setProperty(
									"overflow",
									"unset",
									"important"
								);
							}
						//模拟点击,后续可能取消
						} else {
							for (var item of items) {
								if (
									item != null &&
									item.getAttribute("opened") != "yes"
								) {
									item.click();
									item.setAttribute("opened", "yes");
								}
							}
						}
					}
				}
			}
		}
	}, 100);
})();
