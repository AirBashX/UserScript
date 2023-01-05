// ==UserScript==
// @name         豆瓣助手
// @version      0.0.4
// @namespace    airbash/DoubanAssistant
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  恢复`IMDB`的链接,以及增加快捷搜索`SubHD`、`字幕库`、`射手网`、`WebHD`、`rargb`中资源的功能
// @match        *://movie.douban.com/subject/*
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @license      GPL-3.0
// @icon         https://img1.doubanio.com/favicon.ico
// @run-at       document-end
// ==/UserScript==

(function () {
	"use strict";

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
	 * 侧边栏功能
	 */
	function aside() {
		let aside = document.querySelector(".aside");

		for (let webSite of webSites) {
			let d = document.createElement("div");
			aside.prepend(d);
			d.className = "resource";
			d.innerHTML = "<h2><i>" + webSite.name + "</i>· · · · · ·</h2>";
			let html = '<ul class="resources">';
			for (let link of webSite.links) {
				html += '<a href="' + link.search + link.id + '" target="_blank">' + link.name + "</a>";
			}
			html += "</ul>";
			d.innerHTML += html;
		}

		const resourceStyle = document.createElement("style");
		resourceStyle.innerHTML =
			".resource {margin-bottom: 30px}  .resources {padding: 0 12px;*letter-spacing: normal}  .resources a {border-radius: 6px;color: #37A;display: inline-block;letter-spacing: normal;margin: 0 8px 8px 0;padding: 0 8px;text-align: center;width: 65px}  .resources a:link, .resources a:visited {background-color: #f5f5f5;color: #37A}  .resources a:hover, .resources a:active {background-color: #e8e8e8;color: #37A}  .resources a.disabled {text-decoration: line-through}  .resources a.available {background-color: #5ccccc;color: #006363}  .resources a.available:hover, .resources a.available:active {background-color: #3cc}  .resources a.honse {background-color: #fff0f5;color: #006363}  .resources a.honse:hover, .resources a.honse:active {background-color: #3cc}  .resources a.sites_r0 {text-decoration: line-through}";
		document.head.appendChild(resourceStyle);
	}
})();
