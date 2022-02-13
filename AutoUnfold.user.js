// ==UserScript==
// @name         自动展开
// @description  自动展开文档	隐藏部分
// @version      1.1.2
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @author       airbash
// @match      	 *://*.jianshu.com/p/*
// @match        *://blog.csdn.net/*
// @match        *://jingyan.baidu.com/article*
// @match        *://zhidao.baidu.com/question*
// @match        *://tieba.baidu.com/p*
// @match        *://zx.sina.cn/sh/*
// @run-at       document-body
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
			url: 'blog.csdn.net',
			handles: [
				//自动展开代码块
				{
					type: 'click',
					item: '.look-more-preCode'
				},
				//移动版:弹出窗口
				{
					type: 'display',
					item: '.weixin-shadowbox'
				},
				//移动版:下载App按钮
				{
					type: 'display',
					item: '.feed-Sign-span'
				},
				//移动版:阅读全文
				{
					type: 'display',
					item: '.btn_mod'
				},
				{
					type: 'height',
					item: '.article_content'

				},
				{
					type: 'display',
					item: '.readall_box'
				},
				//移动版:展开评论
				{
					type: 'click',
					item: '.btn_comment_readmore'
				}
			]
		},
		{
			name: "简书",
			url: 'jianshu.com/p',
			handles: [
				//移动版:弹出窗口
				{
					type: 'display',
					item: '.download-app-guidance'
				},
				//移动版:下载App按钮/
				{
					type: 'display',
					item: '.call-app-btn'
				},
				//移动版:阅读全文
				{
					type: 'display',
					item: '.collapse-tips'
				},
				{
					type: 'height',
					item: '.collapse-free-content'
				},
				{
					type: 'display',
					item: '.copyright'
				},
				// 移动版:允许滑动
				{
					type: 'overflow',
					item: 'body'
				}
			]
		},
		{
			name: "百度经验",
			url: 'jingyan.baidu.com/article',
			handles: [
				{
					type: 'display',
					item: ".read-whole-mask"
				},
				{
					type: 'height',
					item: '.exp-content-container'
				},
				//移动版:
				{
					type: 'click',
					item: '.more-img-opt'
				}
			]
		},
		{
			name: "百度知道",
			url: 'zhidao.baidu.com/question',
			handles: [
				{
					type: 'display',
					item: ".wgt-best-mask"
				},
				{
					type: 'height',
					item: ".best-text",
				},
				{
					type: 'display',
					item: ".wgt-answers-mask"
				},
				{
					type: 'height',
					item: ".answer-text",
				},
				{
					type: 'click',
					item: "#show-answer-hide"
				},
				{
					type: 'click',
					item: ".show-hide-dispute"
				},
				//移动版
				{
					type: 'display',
					item: '.w-detail-display-btn'
				},
				{
					type: 'height',
					item: '.w-detail-container'
				},
				{
					type: 'click',
					item: '.show-more-replies'
				},
			]
		},
		{
			name: "百度贴吧",
			url: 'tieba.baidu.com/p',
			handles: [
				//自动展开图片
				{
					type: 'display',
					item: ".replace_tip"
				},
				{
					type: 'height',
					item: '.replace_div'
				},
				//自动展开回复
				{
					type: 'click',
					item: ".j_lzl_m"
				},
				//移动版:弹出窗口
				{
					type: 'display',
					item: ".tb-backflow-defensive"
				},
				//移动版:允许滑动
				{
					type: 'overflow',
					item: 'body'
				}
			]
		},
		{
			name: "新浪资讯",
			url: 'zx.sina.cn/sh',
			handles: [
				//移动版:展开
				{
					type: 'display',
					item: ".look_more"
				},
				{
					type: 'height',
					item: ".s_card"
				}
			]
		}
	];
	var interval = setInterval(() => {
		for (var website of websites) {
			if (location.href.indexOf(website.url) != -1) {
				for (var handle of website.handles) {
					var items = document.querySelectorAll(handle.item);
					if (items.length != 0) {
						if (handle.type == 'display') {
							//使用css的display:none;隐藏遮挡部分
							for (var item of items) {
								item.style.display = "none";
							}
						} else if (handle.type == 'height') {
							//加长内容部分
							for (var item of items) {
								item.style.height = 'unset';
								item.style.maxHeight = 'unset';
								item.style.minHeight = 'unset';
							}
							//防止无法滑动
						} else if (handle.type == 'overflow') {
							for (var item of items) {
								item.style.overflow = 'unset';
							}
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