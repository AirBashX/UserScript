// ==UserScript==
// @name         豆瓣助手
// @version      0.0.5
// @homepageURL  airbash/DoubanAssistant
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  恢复IMDB的链接,以及增加快捷搜索SubHD、字幕库、射手网、WebHD、rargb、6V电影网中资源的功能
// @match        *://movie.douban.com/subject/*
// @connect      www.hao6v.tv
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @license      GPL-3.0
// @icon         https://img1.doubanio.com/favicon.ico
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js
// @require      https://cdn.jsdelivr.net/npm/encode-gb2312/encodeToGb2312.min.js
// @run-at       document-end
// ==/UserScript==
/* global encodeToGb2312 */
///<reference path="./tampermonkey-reference.d.ts" />
(function () {
	("use strict");
	const url = location.href;
	const head = document.head;
	//获取imdbitem
	let info_item = document.querySelector("#info");
	let imdb_item = document.evaluate('//span[text()="IMDb:"]', info_item, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	let imdb_id_item = document.evaluate('//span[text()="IMDb:"]/following::text()[1]', info_item, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	//获取imdb_id
	let imdb_id = imdb_id_item.textContent.trim();

	//获取douban_id
	let douban_id = url.split("/")[4];

	//获取douban_cn_name
	let douban_cn_name = head.querySelector("title").innerText.slice(9, -6);
	//获取GBK编码的douban_cn_name
	let douban_cn_name_gbk = encodeToGb2312(douban_cn_name).replace(/(.{2})/gi, "%$1");

	//获取douban_en_name
	let douban_all_name = document.querySelector("#content > h1 > span:nth-child(1)").innerHTML;
	let douban_en_name = douban_all_name.split(douban_cn_name)[1].trim();
	if (douban_en_name == null) {
		douban_en_name = douban_cn_name;
	}

	imdb();
	/**
	 * 恢复IMDB链接
	 */
	function imdb() {
		let div = document.createElement("div");
		div.innerHTML = "<span class='pl'>IMDb:</span><a target='_blank' href='https://www.imdb.com/title/" + imdb_id + "'>&nbsp" + imdb_id + "</a><br>";
		imdb_id_item.after(div);
		//删除原本的idmb链接
		imdb_item.remove();
		imdb_id_item.remove();
	}

	/**
	 * 侧边栏功能列表
	 */
	const webSites = [
		{
			name: "字幕搜索",
			links: [
				{
					name: "SubHD",
					url: "subhd.tv",
					search: "https://subhd.tv/search/",
					id: douban_cn_name,
				},
				{
					name: "字幕库",
					url: "zimuku.org",
					search: "https://so.zimuku.org/search?q=",
					id: douban_cn_name,
				},
				{
					name: "射手网",
					url: "assrt.net",
					search: "https://assrt.net/sub/?searchword=",
					id: douban_cn_name,
				},
			],
		},
		{
			name: "影视资源",
			links: [
				{
					name: "WebHD",
					url: "webhd.cc",
					search: "https://webhd.cc/search/",
					id: douban_cn_name,
				},
				{
					name: "rargb",
					url: "rargb.to",
					search: "https://rargb.to/search/?search=",
					id: douban_en_name,
				},
				{
					name: "6v电影网",
					url: "www.hao6v.tv",
					search: "https://www.hao6v.tv/e/search/index.php",
					id: douban_cn_name_gbk,
					type: "xhr",
				},
			],
		},
	];

	/**
	 * 注册油侯菜单
	 */
	if (GM_getValue("resource", true) == true) {
		aside();
		GM_registerMenuCommand("√侧边栏", () => {
			GM_setValue("resource", false);
			location.reload();
		});
	} else {
		GM_registerMenuCommand("X侧边栏", () => {
			GM_setValue("resource", true);
			location.reload();
		});
	}

	/**
	 * 配置
	 */
	// GM_registerMenuCommand("配置", () => {
	// 	configuration();
	// });

	/**
	 * 侧边栏功能
	 */
	function aside() {
		let aside = document.querySelector(".aside");

		for (let webSite of webSites) {
			let div = document.createElement("div");
			div.className = "resource";
			div.innerHTML = "<h2><i>" + webSite.name + "</i>· · · · · ·</h2>";
			aside.prepend(div);
			let ul = document.createElement("ul");
			ul.className = "resources";
			div.appendChild(ul);
			for (let link of webSite.links) {
				if (link.type == "xhr") {
					GM_xmlhttpRequest({
						url: link.search,
						method: "post",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
						timeout: 5000,
						anonymous:true,
						data: "show=title%2Csmalltext&tempid=1&tbname=Article&keyboard=" + link.id + "&Submit22=%E6%90%9C%E7%B4%A2",
						onload: function () {
							console.log(this.finalUrl);
							let str = '<a href="' + this.finalUrl + '" target="_blank">' + link.name + "</a>";
							let a= document.createRange().createContextualFragment(str);
							ul.appendChild(a);
						},
					});
				} else {
					let str = '<a href="' + link.search + link.id + '" target="_blank">' + link.name + "</a>";
					let a= document.createRange().createContextualFragment(str);
					ul.appendChild(a);
				}
			}
		}

		const resourceStyle = document.createElement("style");
		resourceStyle.innerHTML =
			".resource {margin-bottom: 30px}  .resources {padding: 0 12px;*letter-spacing: normal}  .resources a {border-radius: 6px;color: #37A;display: inline-block;letter-spacing: normal;margin: 0 8px 8px 0;padding: 0 8px;text-align: center;width: 65px}  .resources a:link, .resources a:visited {background-color: #f5f5f5;color: #37A}  .resources a:hover, .resources a:active {background-color: #e8e8e8;color: #37A}  .resources a.disabled {text-decoration: line-through}  .resources a.available {background-color: #5ccccc;color: #006363}  .resources a.available:hover, .resources a.available:active {background-color: #3cc}  .resources a.honse {background-color: #fff0f5;color: #006363}  .resources a.honse:hover, .resources a.honse:active {background-color: #3cc}  .resources a.sites_r0 {text-decoration: line-through}";
		document.head.appendChild(resourceStyle);
	}

	/**
	 * 配置
	 */
	// function configuration() {
	// 	Swal.fire({
	// 		title: "豆瓣助手 配置",
	// 		html: '<input type="checkbox" class="checkboxs">侧边栏',
	// 		showCloseButton: true,
	// 		didRender: () => {
	// 			if (GM_getValue("resource")) {
	// 				document.querySelector(".checkboxs").checked = true;
	// 			}
	// 		},
	// 	}).then((result) => {
	// 		if (result.isConfirmed) {
	// 			if (document.querySelector(".checkboxs").checked == GM_getValue("resource")) {
	// 				return;
	// 			}
	// 			if (document.querySelector(".checkboxs").checked) {
	// 				GM_setValue("resource", true);
	// 			} else {
	// 				GM_setValue("resource", false);
	// 			}
	// 			location.reload();
	// 		}
	// 	});
	// }
})();
