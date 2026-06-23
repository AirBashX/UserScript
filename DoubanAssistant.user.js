// ==UserScript==
// @name         豆瓣助手
// @version      1.2.0
// @namespace    airbash/DoubanAssistant
// @homepageURL  https://github.com/AirBashX/UserScript
// @author       airbash
// @description  恢复IMDB的链接,展示IMDB评分,以及增加快捷搜索字幕库、射手网、opesubtitle、6V电影网、电影天堂、rarbg、rargb、海盗湾、limetorrents、watchsomuch、EXT、yts、imbt、腾讯视频、优酷视频、爱奇艺、哔哩哔哩、抖音视频、欢喜首映、soali、混合盘、伏羲盘、小云搜索、V盘搜、懒盘搜索、夸克盘搜、阿里盘搜、盘了个盘中资源的功能
// @match        *://movie.douban.com/*
// @match        *://www.douban.com/personage/*
// @connect      www.6v520.com
// @connect      www.imdb.com
// @connect      www.dygod.vip
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_openInTab
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
	let imdb_id_item, imdb_id, douban_en_name, douban_cn_name, douban_gbk_name;

	if (url.includes("www.douban.com/personage/")) {
		imdb_id_item = getImdbIdItem(".subject-property", '//span[contains(text(), "IMDb编号:")]/following::*[1]');
		imdb_id = imdb_id_item.textContent.trim();
		imdbLink("https://www.imdb.com/name/");
	}

	if (url.includes("movie.douban.com/subject/")) {
		imdb_id_item = getImdbIdItem("#info", '//span[contains(text(), "IMDb:")]/following::text()[1]');
		imdb_id = imdb_id_item.textContent.trim();

		//获取豆瓣中文名
		douban_cn_name = head.querySelector("title").innerText.slice(9, -6);
		//获取GBK编码的豆瓣中文名
		douban_gbk_name = encodeToGb2312(douban_cn_name).replace(/(.{2})/gi, "%$1");

		const doubanEnName1 = getDoubanEnName1();
		const doubanEnName2 = getDoubanEnName2();

		if (/^[a-zA-Z0-9]/.test(doubanEnName1)) {
			douban_en_name = doubanEnName1;
		} else if (doubanEnName2) {
			douban_en_name = doubanEnName2;
		} else {
			douban_en_name = douban_cn_name;
		}
	}

	/**
	 * 获取imdb_id所在的元素
	 *
	 * @param      {string}  node         	The node selector
	 * @param      {string}  imdb_id_Xpath  The imdb_id  xpath
	 * @return     {string}  imdb_id_item
	 */
	function getImdbIdItem(node, imdb_id_Xpath) {
		const info_item = document.querySelector(node);
		const imdb_id_item = document.evaluate(imdb_id_Xpath, info_item, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		return imdb_id_item;
	}

	/**
	 * 恢复IMDB链接
	 *
	 * @param      {string}  imdb_url   		The imdb url
	 */
	function imdbLink(imdb_url) {
		//创建新的元素
		const span = document.createElement("span");
		span.innerHTML = '<a target="_blank" href="' + imdb_url + imdb_id + '">' + imdb_id + "</a><br>";
		imdb_id_item.after(span);
		//删除旧的元素
		imdb_id_item.remove();
	}

	/**
	 * 获取豆瓣英文名
	 *
	 * @return     {string}  The douban en name 1.
	 */
	function getDoubanEnName1() {
		const douban_en_names = document.querySelector("#content > h1 > span:nth-child(1)").innerHTML;
		const douban_en_name = douban_en_names.split(douban_cn_name)[1].trim();
		return douban_en_name;
	}

	/**
	 * 获取备用豆瓣英文名
	 *
	 * @return     {string}  The douban en name 2.
	 */
	function getDoubanEnName2() {
		const douban_items = document.querySelectorAll("#info .pl");
		for (const pl of douban_items) {
			if ("又名:" === pl.textContent) {
				const movieNames = pl.nextSibling.textContent.trim().split(" / ");
				for (const name of movieNames) {
					if (/^[a-zA-Z0-9]/.test(name)) {
						return name;
					}
				}
			}
		}
	}

	/**
	 * 获取IMDB评分
	 */
	function getImdbScore() {
		GM_xmlhttpRequest({
			url: "https://www.imdb.com/title/" + imdb_id,
			onload: function (response) {
				const text = response.responseText;
				const dp = new DOMParser();
				const html = dp.parseFromString(text, "text/html");
				const item = html.querySelector("[data-testid=hero-rating-bar__aggregate-rating__score] span");
				const imdb_score = item.innerText;

				const str = html.querySelector("#__NEXT_DATA__").textContent;
				const json = JSON.parse(str);
				const imdb_vote = json.props.pageProps.aboveTheFoldData.ratingsSummary.voteCount;

				const self = document.querySelector(".rating_self").cloneNode(true);
				const logo = document.querySelector(".rating_logo").cloneNode(true);
				const sectl = document.querySelector("#interest_sectl");
				sectl.append(logo);
				sectl.append(self);

				//增加IMDB名
				logo.innerText = "IMDB评分";
				//修改文字评分
				self.querySelector(".rating_num").innerText = imdb_score;
				//修改图形评分
				const classList = self.querySelector(".bigstar").classList;
				classList.replace(classList.item(2), "bigstar" + (Math.floor(imdb_score) / 2) * 10);
				//修改IMDB人数
				self.querySelector(".rating_people span").innerText = imdb_vote;
				self.querySelector(".rating_people").href = "https://www.imdb.com/title/" + imdb_id + "/ratings";

				// const div = document.createElement("div");
				// div.innerHTML = "<span class='pl'>IMDb评分:</span>" + score + "<br>";
				// document.querySelector(".rating_wrap").after(div);
			},
		});
	}

	/**
	 * 侧边栏功能列表
	 */
	const webSites = [
		{
			id: "group1",
			name: "正版资源",
			links: [
				{
					name: "腾讯视频",
					search: "https://v.qq.com/x/search/?q=" + douban_cn_name,
				},
				{
					name: "优酷视频",
					search: "https://so.youku.com/search_video/q_" + douban_cn_name,
				},
				{
					name: "爱奇艺",
					search: "https://so.iqiyi.com/so/q_" + douban_cn_name,
				},
				{
					name: "哔哩哔哩",
					search: "https://search.bilibili.com/all?keyword=" + douban_cn_name,
				},
				{
					name: "抖音视频",
					search: "https://www.douyin.com/root/search/" + douban_cn_name,
				},
				{
					name: "欢喜首映",
					search: "https://www.huanxi.com/search.shtml?sv=" + douban_cn_name,
				},
			],
		},
		{
			id: "group2",
			name: "中文资源",
			links: [
				{
					name: "6v电影网",
					search: "https://www.6v520.com/e/search/index.php",
					data: "show=title%2Csmalltext&tempid=1&keyboard=" + douban_gbk_name + "&tbname=article&x=0&y=0",
					xhrType: "auto",
					anonymous: true,
				},
				{
					name: "电影天堂",
					search: "https://www.dygod.vip/e/search/index.php",
					data: "show=title&tempid=1&keyboard=" + douban_gbk_name + "&Submit=%C1%A2%BC%B4%CB%D1%CB%F7",
					xhrType: "click",
				},
				{
					name: "BT之家",
					search: "http://www.1lou.me/search-" + encodeURIComponent(douban_cn_name).replaceAll('%','_') + ".htm",
				},
			],
		},
		{
			id: "group3",
			name: "英文资源",
			links: [
				{
					name: "rarbg",
					search: "https://rarbg.torrentbay.st/get-posts/keywords:" + douban_en_name,
				},
				{
					name: "海盗湾",
					search: "https://thepiratebay10.xyz/search/" + douban_en_name,
				},
				{
					name: "Lime",
					search: "https://limetorrents.asia/search?catname=&q=" + douban_en_name,
				},
				{
					name: "1377x",
					search: "https://www.1377x.to/search/" + douban_en_name + "/1/",
				},
				{
					name: "EXT",
					search: "https://extranet.torrentbay.st/browse/?q=" + douban_en_name,
				},
				{
					name: "yts",
					search: "https://yts.torrentbay.st/browse-movies/" + douban_en_name,
				},
				{
					name: "WSM",
					search: "https://watchsomuch.to/Movies/" + douban_en_name,
				},
				{
					name: "rargb",
					search: "https://rargb.to/search/?search=" + douban_en_name,
				},
			],
		},
		{
			id: "group4",
			name: "字幕搜索",
			links: [
				{
					name: "射手网",
					search: "https://assrt.net/sub/?searchword=" + douban_cn_name,
				},
				{
					name: "字幕库",
					search: "http://so.zimuku.org/search?q=" + douban_cn_name,
				},
				{
					name: "OpenSub",
					search: "https://www.opensubtitles.com/zh-CN/zh-CN/search-all/q-" + imdb_id + "/hearing_impaired-include/machine_translated-/trusted_sources-",
				},
			],
		},
		{
			id: "group5",
			name: "网盘搜索",
			links: [
				{
					name: "soali",
					search: "https://soali.net/search?keyword=" + douban_cn_name + "&app=quark",
				},
				{
					name: "混合盘",
					search: "https://hunhepan.com/search?enabled=true&q=" + douban_cn_name,
				},
				{
					name: "伏羲盘",
					search: "https://fuxipan.com/search?q=" + douban_cn_name,
				},
				{
					name: "夸克盘搜",
					search: "https://qkpanso.com/search?q=" + douban_cn_name,
				},
				{
					name: "阿里盘搜",
					search: "https://www.alipanx.com/search?q=" + douban_cn_name,
				},
				{
					name: "懒盘搜索",
					search: "https://www.lzpanx.com/search?q=" + douban_cn_name,
				},
				{
					name: "小云搜索",
					search: "https://www.yunso.net/index/user/s?wd=" + douban_cn_name,
				},
				{
					name: "盘了个盘",
					search: "https://www.panlegepan.com/s/" + douban_cn_name,
				},
				{
					name: "V盘搜",
					search: "http://www.vpansou.com/query?wd=" + douban_cn_name,
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
			fun: function () {
				imdbLink("https://www.imdb.com/title/");
			},
		},
		{
			id: "imdb_score",
			name: "IMDB评分",
			fun: getImdbScore,
		},
	];

	if (url.includes("movie.douban.com/subject/")) {
		for (const GMValue of GMValues) {
			if (GM_getValue(GMValue.id, true)) {
				GMValue.fun();
			}
		}

		aside();
	}

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
		const aside = document.querySelector(".aside");
		const div_big = document.createElement("div");
		aside.prepend(div_big);

		for (const webSite of webSites) {
			const div = document.createElement("div");
			div_big.appendChild(div);

			if (GM_getValue(webSite.id, true)) {
				div.innerHTML = "<h2><i>" + webSite.name + "</i>· · · · · ·</h2>";
				const ul = document.createElement("ul");
				ul.className = "resources";
				div.appendChild(ul);
				for (const link of webSite.links) {
					//添加元素
					const item = document.createElement("a");
					item.href = link.search;
					item.target = "_blank";
					item.textContent = link.name;
					ul.appendChild(item);
					//是否校验
					if (link.xhrType === "auto") {
						xhrAuto(link, item);
					} else if (link.xhrType === "click") {
						xhrClick(link, item);
					}
				}
			}
		}

		const resourceStyle = document.createElement("style");
		resourceStyle.innerHTML =
			".resource {margin-bottom: 30px}  .resources {padding: 0 12px;*letter-spacing: normal}  .resources a {border-radius: 6px;color: #37A;display: inline-block;letter-spacing: normal;margin: 0 8px 8px 0;padding: 0 8px;text-align: center;width: 65px}  .resources a:link, .resources a:visited {background-color: #f5f5f5;color: #37A}  .resources a:hover, .resources a:active {background-color: #e8e8e8;color: #37A}  .resources a.disabled {text-decoration: line-through}  .resources a.available {background-color: #5ccccc;color: #006363}  .resources a.available:hover, .resources a.available:active {background-color: #3cc}  .resources a.honse {background-color: #fff0f5;color: #006363}  .resources a.honse:hover, .resources a.honse:active {background-color: #3cc}  .resources a.sites_r0 {text-decoration: line-through}";
		document.head.appendChild(resourceStyle);
	}

	function xhrAuto(link, item) {
		item.style.color = "pink";
		GM_xmlhttpRequest({
			url: link.search,
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			timeout: 5000,
			anonymous: link.anonymous,
			data: link.data,
			onload: function (response) {
				let finalUrl = response.finalUrl;
				if (!finalUrl.includes("/index.php/")) {
					finalUrl = finalUrl.replace("/index.php", "");
				}
				item.href = finalUrl;
				if (finalUrl === link.search) {
					item.title = "没有资源";
					item.style.color = "pink";
				}else{
					item.style.color = "#37A";
				}
			},
		});
	}

	function xhrClick(link, item) {
		item.addEventListener(
			"click",
			function (e) {
				e.preventDefault();
				GM_xmlhttpRequest({
					url: link.search,
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					timeout: 5000,
					anonymous: link.anonymous,
					data: link.data,
					onload: function (response) {
						let finalUrl = response.finalUrl;
						if (!finalUrl.includes("/index.php/")) {
							finalUrl = finalUrl.replace("/index.php", "");
						}
						item.href = finalUrl;
						if (finalUrl === link.search) {
							item.title = "没有资源";
							item.style.color = "pink";
						} else {
							GM_openInTab(finalUrl, {
								insert: true,
							});
						}
					},
				});
			},
			{ once: true },
		);
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
				GM_addStyle(`
					.swal2-html-container{text-align:left !important;line-height:unset !important;}
					.smail_div{width:33%;float:left;}
					.switch{float:left;position:relative;top:3px;width:40px;height:20px;display:flex;}
					.checkbox{z-index:3;position:relative;width:100%;height:100%;cursor:pointer;opacity:0;}
					.bt{z-index:2;position:absolute;top:0;bottom:0;}
					.bt:before{position:absolute;top:2.5px;left:2.5px;content:"";width:15px;height:15px;background-color:red;border-radius:50%;transition:0.3s cubic-bezier(0.18,0.89,0.35,1.15) all;}
					.checkbox:checked + .bt:before{left:20px;background-color:#03a9f4;}
					.bg{z-index:1;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100px;background-color:#fcebeb;}
					.checkbox:checked ~ .bg{background-color:#ebf7fc;}`);
				/**
				 * 侧边栏开关
				 */
				for (const webSite of webSites) {
					if (GM_getValue(webSite.id, true)) {
						document.querySelector("#DA_div #" + webSite.id).checked = true;
					}
				}
				for (const GMValue of GMValues) {
					if (GM_getValue(GMValue.id, true)) {
						document.querySelector("#DA_div #" + GMValue.id).checked = true;
					}
				}
			},
		}).then((result) => {
			let change;
			if (result.isConfirmed) {
				for (const webSite of webSites) {
					if (document.querySelector("#DA_div #" + webSite.id).checked !== GM_getValue(webSite.id, true)) {
						GM_setValue(webSite.id, document.querySelector("#DA_div #" + webSite.id).checked);
						change = true;
					}
				}
				for (const GMValue of GMValues) {
					if (document.querySelector("#DA_div #" + GMValue.id).checked !== GM_getValue(GMValue.id, true)) {
						GM_setValue(GMValue.id, document.querySelector("#DA_div #" + GMValue.id).checked);
						change = true;
					}
				}

				if (change) {
					location.reload();
				}
			}
		});
	}

	let swal_html = "<div id='DA_div'>";
	for (const GMValue of GMValues) {
		swal_html +=
			'<div class="smail_div"><div class="switch"><input type="checkbox" class="checkbox" id="' + GMValue.id + '"/><div class="bt"></div><div class="bg"></div></div>' + GMValue.name + "</div>";
	}
	for (const webSite of webSites) {
		swal_html +=
			'<div class="smail_div"><div class="switch"><input type="checkbox" class="checkbox" id="' + webSite.id + '"/><div class="bt"></div><div class="bg"></div></div>' + webSite.name + "</div>";
	}
	swal_html += "</div>";
})();

//错误笔记
//这只是个片段
// const item = document.createRange().createContextualFragment(str);
