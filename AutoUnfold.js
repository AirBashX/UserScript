// ==UserScript==
// @name         自动展开
// @description  自动展开文档	隐藏部分
// @version      1.0.1
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @author       airbash
// @match      	 *://jianshu.com/p/*
// @match		 *://blog.csdn.net/*
// @match		 *://jingyan.baidu.com/article*
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

		}
	];

	var website = GetWebsite();
	for (var handle of website.handles) {
		var items = GetItemElement(handle);
		if (handle.handle == 'disaplay_item') {
			//使用css的display:none;隐藏遮挡部分
			for (var item of items) {
				item.style.display = "none";
			}
		} else {
			for (var item of items) {
				item.style.height='unset';
				item.style.maxHeight='unset';
				item.style.maxHeight='unset';
			}
		}
	}


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
		}
		return [];
	}
})();