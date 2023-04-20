// ==UserScript==
// @name         Jenkins助手
// @author       airbash
// @version      0.0.1
// @namespace    airbash/JenkinsAssistant
// @homepageURL  https://github.com/AirBashX/UserScript
// @description  过滤健康程度低、不经常更新的jenkins插件
// @match        *://plugins.jenkins.io/ui/search*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @icon         https://www.jenkins.io/favicon.ico
// @run-at       document-end
// @license      GPL-3.0
// ==/UserScript==
///<reference path="./tampermonkey-reference.d.ts" />
(function () {
	"use strict";
	let inter = setInterval(() => {
		let CategoryList = document.querySelector(".CategoryList");
		if (CategoryList) {
			let li = document.createElement("li");
			li.className = "Other";
			//<label class="exclude"><input type="checkbox" name="Other" value="Other" /><span>健康度</span></label><ul><li><label class="exclude"><input type="checkbox" name="health" value="health" /><span>优秀</span></label></li></ul>
			li.innerHTML = '<ul><li><label class="exclude"><input type="checkbox" name="health" value="health" /><span>优秀</span></label></li></ul>';
			CategoryList.prepend(li);
			let health = document.querySelector("[name=health]");
			let display = GM_getValue("display", false);
			health.checked = display;
			saerchHandler(health)
			checkedHandler(health);
			health.addEventListener("change", function () {
				checkedHandler(health);
			});
			clearInterval(inter);
		}
	}, 10000);

	function saerchHandler(health) {
		let button = document.querySelectorAll(".btn-primary");
		button[1].onclick = function () {
			health.checked=false;
			GM_setValue("display", false);
		};
		let items = document.querySelectorAll(".headerContainer label:not(.exclude),[name=showAll]");
		for (let item of items) {
			item.onclick=function(){
				health.checked=false;
				GM_setValue("display", false);
			}
		}

	}

	function checkedHandler(health) {
		let items = document.querySelectorAll(".SearchResults--ItemBox");
		if (health.checked) {
			for (let item of items) {
				if (item.querySelector(".bg-warning,.bg-danger")) {
					GM_setValue("display", true);
					item.style.display = "none";
				}
			}
		} else {
			for (let item of items) {
				GM_setValue("display", false);
				item.style.display = "unset";
			}
		}
	}
})();
