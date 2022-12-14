// ==UserScript==
// @name         豆瓣助手
// @version      0.0.1
// @namespace    airbash/DoubanAssistant
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  恢复`IMDB`的链接,以及增加快捷搜索`SubHD`中字幕的功能
// @match        *://movie.douban.com/subject/*
// @grant        none
// @license      GPL-3.0
// @run-at       document-end
// ==/UserScript==

(function () {
	"use strict";
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
	div.innerHTML += "<span class='pl'>SubHD:</span><a target='_blank' href='https://subhd.tv/search/" + douban_name + "'>&nbsp字幕下载</a>";
	imdb_id_item.after(div);
	//删除原本的idmb链接
	imdb_item.remove();
	imdb_id_item.remove();
})();
