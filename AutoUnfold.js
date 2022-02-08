// ==UserScript==
// @name         自动展开
// @description  自动展开文档	隐藏部分
// @version      1.0.3
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @author       airbash
// @match      	 *://jianshu.com/p/*
// @match		 *://blog.csdn.net/*
// @match		 *://jingyan.baidu.com/article*
// @match		 *://zhidao.baidu.com/question*
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
				{
					handle: 'click_item',
					type: 'class',
					item: 'look-more-preCode contentImg-no-view'
				},
				{
					//移动版:展开评论
					handle: 'click_item',
					type: 'class',
					item: 'btn_comment_readmore'
				}
			]

		},
		{
			name: "百度经验",
			url: 'jingyan.baidu.com/article',
			handles: [
				{
					handle: 'disaplay_item',
					type: "class",
					item: "read-whole-mask"
				},
				{
					handle: 'heiht_item',
					type: 'class',
					item: 'exp-content-container fold'
				}
			]
		},
		{
			name: "百度知道",
			url: 'zhidao.baidu.com/question',
			handles: [
				{
					handle: 'disaplay_item',
					type: "class",
					item: "wgt-best-mask"
				},
				{
					handle: 'disaplay_item',
					type: "class",
					item: "wgt-answers-mask"
				},
				{
					handle: 'height_item',
					type: "class",
					item: "best-text mb-10",
				},
				{
					handle: 'height_item',
					type: "class",
					item: "answer-text mb-10",
				},
				{
					handle: 'click_item',
					type: "id",
					item: "show-answer-hide"
				},
				{
					handle: 'click_item',
					type: "class",
					item: "show-hide-dispute"
				}
			]
		}
	];

	var website = GetWebsite();
	var interval = setInterval(() => {
		for (var handle of website.handles) {
			var items = GetItemElement(handle);
			if (handle.handle == 'disaplay_item') {
				//使用css的display:none;隐藏遮挡部分
				for (var item of items) {
					item.style.display = "none";
				}
			} else if (handle.handle == 'height_item') {
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

	/**
	 * 根据选择器类型获取选择器
	 * @param      {object}  item    选择器
	 * @return     {Array}   falgs?元素数组:空数组
	 */
	function GetItemElement(obj) {
		if (obj.type == "class") {
			return document.getElementsByClassName(obj.item);
		} else if (obj.type == "id") {
			return [document.getElementById(obj.item)];
		} else if (obj.type == "tag") {
			return document.getElementsByTagName(obj.item);
		} else {
			return [];
		}
	}
})();