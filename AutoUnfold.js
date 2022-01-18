// ==UserScript==
// @name         自动展开
// @description  自动展开文档	隐藏部分
// @version      1.0.0
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @author       airbash
// @match      	 *://*.jianshu.com/p/*
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
			name: "简书",
			url: 'jianshu.com/p',
			handle: "click_item",
			type: "class",
			item: "ant-btn nP21pp"
		},
		{
			name: "百度经验",
			url: 'jingyan.baidu.com/article',
			handle: 'disaplay_item',
			type: "class",
			item: "read-whole-mask"
		}
	];

	var website = GetWebsite();
	var items = GetItemElement();
	if (website.handle == 'click_item') {
		//使用js的click():模拟点击'展开'命令;
		var interval = setInterval(() => {
			for (var item of items) {
				if (
					item != null &&
					item.getAttribute("opened") != "yes"
				) {
					item.click();
					item.setAttribute("opened", "yes");
				}
			}
		}, 100);
	} else {
		//使用css的display:none;隐藏遮挡部分
		for (var item of items) {
			item.style.display = "none";
		}
	}

	/**
	 * 校验当前网站是否匹配
	 * @return     {Website}  网站对象
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
	function GetItemElement() {
		if (website.type == "class") {
			return document.getElementsByClassName(website.item);
		} else if (website.type == "id") {
			return [document.getElementById(website.item)];
		} else if (website.type == "tag") {
			return document.getElementsByTagName(website.item);
		}
		return [];
	}
})();