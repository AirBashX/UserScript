// ==UserScript==
// @name         豆瓣助手
// @version      0.0.2
// @namespace    airbash/DoubanAssistant
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  恢复`IMDB`的链接,以及增加快捷搜索`SubHD`+`字幕库`+`射手网`字幕的功能
// @match        *://movie.douban.com/subject/*
// @grant        none
// @license      GPL-3.0
// @run-at       document-end
// @require      https://cdn.staticfile.org/jquery/3.6.3/jquery.js
// ==/UserScript==

(function () {
	"use strict";

	const webSites = [
		{
			name: "SubHD",
			url: "subhd.tv",
			search: "https://subhd.tv/search/",
			id: "douban_name",
		},
		{
			name: "字幕库",
			url: "zimuku.org",
			search: "https://so.zimuku.org/search?q=",
			id: "douban_name",
		},
		{
			name: "射手网",
			url: "assrt.net",
			search: "https://assrt.net/sub/?searchword=",
			id: "douban_name",
		},
	];

	//获取imdbitem
	let info_item = document.querySelector("#info");
	let imdb_item = document.evaluate('//span[text()="IMDb:"]', info_item, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	let imdb_id_item = document.evaluate('//span[text()="IMDb:"]/following::text()[1]', info_item, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	//获取imdb_id
	let imdb_id = imdb_id_item.textContent.trim();

	//获取douban_id
	// let url = location.href;
	// let douban_id = url.split("/")[4];

	//获取douban_name
	let head = document.head;
	let douban_name = head.querySelector("title").innerText.slice(9, -6);

	var div = document.createElement("div");
	div.innerHTML = "<span class='pl'>IMDb:</span><a target='_blank' href='https://www.imdb.com/title/" + imdb_id + "'>&nbsp" + imdb_id + "</a><br>";
	//div.innerHTML += "<span class='pl'>SubHD:</span><a target='_blank' href='https://subhd.tv/search/" + douban_name + "'>&nbsp字幕下载</a>";
	imdb_id_item.after(div);
	//删除原本的idmb链接
	imdb_item.remove();
	imdb_id_item.remove();

	//获取侧边栏
	let aside = document.querySelector(".aside");

	let d = document.createElement("div");
	d.className = "resource";

	d.innerHTML = "<h2><i>字幕搜索</i>· · · · · ·</h2>";
	d.innerHTML += '<ul class="resources"></ul>';
	aside.prepend(d);

	for (let webSite of webSites) {
		document.querySelector(".resources").innerHTML += '<a href="' + webSite.search + douban_name + '" target="_blank">' + webSite.name + "</a>";
	}

	const resourceStyle = document.createElement("style");
	resourceStyle.innerHTML =
		".resource {margin-bottom: 30px}  .resources {padding: 0 12px;*letter-spacing: normal}  .resources a {border-radius: 6px;color: #37A;display: inline-block;letter-spacing: normal;margin: 0 8px 8px 0;padding: 0 8px;text-align: center;width: 65px}  .resources a:link, .resources a:visited {background-color: #f5f5f5;color: #37A}  .resources a:hover, .resources a:active {background-color: #e8e8e8;color: #37A}  .resources a.disabled {text-decoration: line-through}  .resources a.available {background-color: #5ccccc;color: #006363}  .resources a.available:hover, .resources a.available:active {background-color: #3cc}  .resources a.honse {background-color: #fff0f5;color: #006363}  .resources a.honse:hover, .resources a.honse:active {background-color: #3cc}  .resources a.sites_r0 {text-decoration: line-through}";
	document.head.appendChild(resourceStyle);
})();
