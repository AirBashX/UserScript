// ==UserScript==
// @name         豆瓣助手
// @version      0.0.9
// @namespace    airbash/DoubanAssistant
// @homepageURL  https://github.com/AirBashX/UserScript
// @author       airbash
// @description  恢复IMDB的链接,展示IMDB评分,以及增加快捷搜索SubHD、字幕库、射手网、WebHD、rargb、6V电影网、腾讯视频、优酷视频、爱奇艺、哔哩哔哩、西瓜视频、欢喜首映中资源的功能
// @match        *://movie.douban.com/subject/*
// @connect      www.hao6v.tv
// @connect      www.imdb.com
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @license      GPL-3.0
// @icon         https://img1.doubanio.com/favicon.ico
// @require      https://fastly.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js
// @require      https://fastly.jsdelivr.net/npm/encode-gb2312@0.0.2/encodeToGb2312.min.js
// @run-at       document-end
// ==/UserScript==
/* global encodeToGb2312 Swal*/
///<reference path="./tampermonkey-reference.d.ts" />
///<reference path="./sweetalert2.d.ts" />
(function () {
	// "use strict";
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

	/**
	 * 恢复IMDB链接
	 */
	function imdb_link() {
		let div = document.createElement("div");
		div.innerHTML = "<span class='pl'>IMDb:</span><a target='_blank' href='https://www.imdb.com/title/" + imdb_id + "'>&nbsp" + imdb_id + "</a><br>";
		imdb_id_item.after(div);
		//删除原本的idmb链接
		imdb_item.remove();
		imdb_id_item.remove();
	}

	/**
	 * 获取IMDB评分
	 */
	function imdb_score() {
		GM_xmlhttpRequest({
			url: "https://www.imdb.com/title/" + imdb_id,
			onload: function () {
				let text = this.responseText;
				let dp = new DOMParser();
				let html = dp.parseFromString(text, "text/html");
				let items = html.querySelectorAll("[data-testid=hero-rating-bar__aggregate-rating__score] span");
				let score = items[0].innerText;
				let div = document.createElement("div");
				div.innerHTML = "<span class='pl'>IMDb评分:</span>" + score + "<br>";
				document.querySelector(".rating_wrap").after(div);
			},
		});
	}

	/**
	 * 侧边栏功能列表
	 */
	const webSites = [
		{
			id: "group1",
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
			id: "group2",
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
		{
			id: "group3",
			name: "正版资源",
			links: [
				{
					name: "腾讯视频",
					url: "v.qq.com",
					search: "https://v.qq.com/x/search/?q=",
					id: douban_cn_name,
				},
				{
					name: "优酷视频",
					url: "youku.com",
					search: "https://so.youku.com/search_video/q_",
					id: douban_cn_name,
				},
				{
					name: "爱奇艺",
					url: "iqiyi.com",
					search: "https://so.iqiyi.com/so/q_",
					id: douban_cn_name,
				},
				{
					name: "哔哩哔哩",
					url: "bilibili.com",
					search: "https://search.bilibili.com/all?keyword=",
					id: douban_cn_name,
				},
				{
					name: "西瓜视频",
					url: "www.ixigua.com",
					search: "https://www.ixigua.com/search/",
					id: douban_cn_name,
				},
				{
					name: "欢喜首映",
					url: "www.huanxi.com",
					search: "https://www.huanxi.com/search.shtml?sv=",
					id: douban_cn_name,
				},
			],
		},
	];

	/**
	 * 功能列表
	 */
	const GMValues = [
		{
			id: "imdb_link",
			name: "IMDB链接",
			fun: imdb_link,
		},
		{
			id: "imdb_score",
			name: "IMDB评分",
			fun: imdb_score,
		},
	];

	if (imdb_id) {
		for (let GMValue of GMValues) {
			if (GM_getValue(GMValue.id, true)) {
				GMValue.fun();
			}
		}
	}

	aside();

	/**
	 * 脚本工具菜单
	 */
	GM_registerMenuCommand("配置", () => {
		configuration();
	});

	/**
	 * 侧边栏功能
	 */
	function aside() {
		let aside = document.querySelector(".aside");
		for (let webSite of webSites) {
			let div = document.createElement("div");
			div.className = "resource";
			if (GM_getValue(webSite.id, true)) {
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
							anonymous: true,
							data: "show=title%2Csmalltext&tempid=1&tbname=Article&keyboard=" + link.id + "&Submit22=%E6%90%9C%E7%B4%A2",
							onload: function () {
								let str;
								if (this.finalUrl == "https://www.hao6v.tv/e/search/index.php") {
									str = '<a href="' + this.finalUrl + '" target="_blank" style="color:pink" title="没有资源">' + link.name + "</a>";
								} else {
									str = '<a href="' + this.finalUrl + '" target="_blank">' + link.name + "</a>";
								}
								let a = document.createRange().createContextualFragment(str);
								ul.appendChild(a);
							},
						});
					} else {
						let str = '<a href="' + link.search + link.id + '" target="_blank">' + link.name + "</a>";
						let a = document.createRange().createContextualFragment(str);
						ul.appendChild(a);
					}
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
	function configuration() {
		Swal.fire({
			title: "豆瓣助手 配置",
			html: swal_html,
			showCloseButton: true,
			didRender: () => {
				GM_addStyle(
					'.swal2-html-container{text-align:left !important;line-height:unset !important;}.smail_div{width:33%;float:left;}.switch{float:left;position:relative;top:3px;width:40px;height:20px;display:flex;}.checkbox{z-index:3;position:relative;width:100%;height:100%;cursor:pointer;opacity:0;}.bt{z-index:2;position:absolute;top:0;bottom:0;}.bt:before{position:absolute;top:2.5px;left:2.5px;content:"";width:15px;height:15px;background-color:red;border-radius:50%;transition:0.3s cubic-bezier(0.18,0.89,0.35,1.15) all;}.checkbox:checked + .bt:before{left:20px;background-color:#03a9f4;}.bg{z-index:1;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100px;background-color:#fcebeb;}.checkbox:checked ~ .bg{background-color:#ebf7fc;}'
				);
				/**
				 * 侧边栏开关
				 */
				for (let webSite of webSites) {
					if (GM_getValue(webSite.id, true)) {
						document.querySelector("#DA_div #" + webSite.id).checked = true;
					}
				}
				if (imdb_id) {
					for (let GMValue of GMValues) {
						if (GM_getValue(GMValue.id, true)) {
							document.querySelector("#DA_div #" + GMValue.id).checked = true;
						}
					}
				}
			},
		}).then((result) => {
			let change;
			if (result.isConfirmed) {
				for (let webSite of webSites) {
					if (document.querySelector("#DA_div #" + webSite.id).checked != GM_getValue(webSite.id, true)) {
						GM_setValue(webSite.id, document.querySelector("#DA_div #" + webSite.id).checked);
						change = true;
					}
				}
				if (imdb_id) {
					for (let GMValue of GMValues) {
						if (document.querySelector("#DA_div #" + GMValue.id).checked != GM_getValue(GMValue.id, true)) {
							GM_setValue(GMValue.id, document.querySelector("#DA_div #" + GMValue.id).checked);
							change = true;
						}
					}
				}

				if (change) {
					location.reload();
				}
			}
		});
	}

	let swal_html = "<div id='DA_div'>";
	for (let webSite of webSites) {
		swal_html += '<div class="smail_div"><div class="switch"><input type="checkbox" class="checkbox" id="' + webSite.id + '"/><div class="bt"></div><div class="bg"></div></div>' + webSite.name + "</div>";
	}
	for (let GMValue of GMValues) {
		swal_html += '<div class="smail_div"><div class="switch"><input type="checkbox" class="checkbox" id="' + GMValue.id + '"/><div class="bt"></div><div class="bg"></div></div>' + GMValue.name + "</div>";
	}
	swal_html += "</div>";
})();
