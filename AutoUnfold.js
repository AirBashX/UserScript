// ==UserScript==
// @name         自动展开
// @description  自动展开文档	隐藏部分
// @version      1.1.0
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @author       airbash
// @match      	 *://jianshu.com/p/*
// @match		 *://blog.csdn.net/*
// @match		 *://jingyan.baidu.com/article*
// @match		 *://zhidao.baidu.com/question*
// @match		 *://tieba.baidu.com/p*
// @grant        none
// @license      GPL-3.0
// @icon 		 data:image/png;base64,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
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
					handle: 'click',
					item: '.look-more-preCode'
				},
				//移动版:展开评论
				{
					handle: 'click',
					item: '.btn_comment_readmore'
				}
			]
		},
		{
			name: "百度经验",
			url: 'jingyan.baidu.com/article',
			handles: [
				{
					type: 'disaplay',
					item: ".read-whole-mask"
				},
				{
					type: 'heiht',
					item: '.exp-content-container'
				}
			]
		},
		{
			name: "百度知道",
			url: 'zhidao.baidu.com/question',
			handles: [
				{
					type: 'disaplay',
					item: ".wgt-best-mask"
				},
				{
					type: 'height',
					item: ".best-text",
				},
				{
					type: 'disaplay',
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
				}
			]
		},
		{
			name: "百度贴吧",
			url: 'tieba.baidu.com/p',
			handles: [
				//自动展开图片
				{
					type: 'disaplay',
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
				}
			]
		}
	];

	var website = GetWebsite();
	var interval = setInterval(() => {
		for (var handle of website.handles) {
			var items = document.querySelectorAll(handle.item);
			if (handle.type == 'disaplay') {
				//使用css的display:none;隐藏遮挡部分
				for (var item of items) {
					item.style.display = "none";
				}
			} else if (handle.type == 'height') {
				//加长内容部分
				for (var item of items) {
					item.style.height = 'unset';
					item.style.maxHeight = 'unset';
					item.style.maxHeight = 'unset';
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
	}, 100);

	/**
	 * 校验当前网站是否匹配
	 * @return     {Website}  当前网站对象
	 */
	function GetWebsite() {
		for (var website of websites) {
			if (location.href.indexOf(website.url) != -1) {
				return website;
			}
		}
	}
})();