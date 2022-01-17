// ==UserScript==
// @name         自动展开
// @description  自动展开文档	隐藏部分
// @version      0.1
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @author       airbash
// @include      /^https://www.jianshu.com/p/.*/
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
			url_regex: /^https:\/\/www.jianshu.com\/p\/.*/,
			hide_click_item: [
				{
					type: "class",
					value: "ant-btn nP21pp",
				},
			],
		}
	];

	var handler = GetWebsite();

	/**
	 * 定时器:执行自动展开命令
	 * @type       {Function}
	 */
	var interval = setInterval(() => {
		
		//模拟点击'展开'命令;
		if (handler.hide_click_item) {
			for (var click_item of handler.hide_click_item) {
				var click_eles = GetItemElement(click_item);
				if (click_eles.length > 0) {
					for (var click_ele of click_eles) {
						if (
							click_ele != null &&
							click_ele.getAttribute("opened") != "yes"
						) {
							click_ele.click();
							click_ele.setAttribute("opened", "yes");
						}
					}
				}
			}
		}
	}, 100);
	
	/**
	 * 校验当前网站是否匹配
	 * @return     {Array}  flags?网站对象:退出脚本
	 */
	function GetWebsite() {
		for (var website of websites) {
			if (website.url_regex.test(location.href)) {
				return website;
			}else{
				return [];
			}
		}
	}


	/**
	 * 分辨选择器类型
	 * @param      {object}  item    选择器
	 * @return     {Array}   falgs?合适的元素:退出脚本
	 */
	function GetItemElement(item) {
		if (item.type == "class") {
			return document.getElementsByClassName(item.value);
		} else if (item.type == "id") {
			return [document.getElementById(item.value)];
		} else if (item.type == "tag") {
			return document.getElementsByTagName(item.value);
		}
		return [];
	}
})();