// ==UserScript==
// @name         网盘助手
// @version      0.0.1
// @namespace    airbash/Netdiskassistant
// @homepageURL  https://github.com/AirBashX/UserScript
// @author       airbash
// @description  点击文件直接下载或跳转:蓝凑云、猫狸盘搜
// @match        *://*.lanzoub.com/*
// @match        *://*.lanzouc.com/*
// @match        *://*.lanzoue.com/*
// @match        *://*.lanzouf.com/*
// @match        *://*.lanzouh.com/*
// @match        *://*.lanzoui.com/*
// @match        *://*.lanzouj.com/*
// @match        *://*.lanzouk.com/*
// @match        *://*.lanzoul.com/*
// @match        *://*.lanzoum.com/*
// @match        *://*.lanzouo.com/*
// @match        *://*.lanzoup.com/*
// @match        *://*.lanzouq.com/*
// @match        *://*.lanzout.com/*
// @match        *://*.lanzouu.com/*
// @match        *://*.lanzouv.com/*
// @match        *://*.lanzouw.com/*
// @match        *://*.lanzoux.com/*
// @match        *://*.lanzouy.com/*
// @match        *://*.lanzob.com/*
// @match        *://*.lanzoe.com/*
// @match        *://*.lanzof.com/*
// @match        *://*.lanzoh.com/*
// @match        *://*.lanzoi.com/*
// @match        *://*.lanzoj.com/*
// @match        *://*.lanzol.com/*
// @match        *://*.lanzom.com/*
// @match        *://*.lanzoo.com/*
// @match        *://*.lanzop.com/*
// @match        *://*.lanzoq.com/*
// @match        *://*.lanzov.com/*
// @match        *://*.lanzow.com/*
// @match        *://*.lanzox.com/*
// @match        *://*.lanzoy.com/*
// @match        *://pan.lanzou.com/*
// @match        *://pc.woozooo.com/*
// @match        *://www.alipansou.com/*
// @connect      www.aliyundrive.com
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        window.close
// @license      GPL-3.0
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";
    const website_url = location.href;
    //猫狸网盘:文件页
    if (website_url.search("www.alipansou.com/search?") != -1) {
        onload = function () {
            let file_lists = document.querySelectorAll('.van-row a[href^="/s/"]');
            for (let list of file_lists) {
                list.parentElement.addEventListener("click", function (e) {
                    e.preventDefault(); // 阻止默认打开链接事件
                    //自动打开网盘
                    GM_xmlhttpRequest({
                        url: list.href.replace("/s/", "/cv/"),
                        headers: {
                            referer: list.href,
                        },
                        onload: function (response) {
                            GM_openInTab(response.finalUrl, { active: true });
                        },
                    });
                });
            }
        };
        //猫狸网盘:跳转页
    } else if (website_url.search("www.alipansou.com/s/") != -1) {
        //关闭关注提示:可有可无
        document.cookie = "no_show_donate=1;max-age=100000000";

        GM_xmlhttpRequest({
            url: website_url.replace("/s/", "/cv/"),
            headers: {
                referer: website_url,
            },
            onload: function (response) {
                GM_openInTab(response.finalUrl, { active: true });
                window.close();
            },
        });
    } else {
        let inter = setInterval(() => {
            //蓝凑云盘:列表页
            let file_lists = document.querySelectorAll("#infos a");
            if (file_lists.length > 0) {
                for (let list of file_lists) {
                    list.addEventListener("click", function (e) {
                        e.preventDefault(); // 阻止默认打开链接事件
                        GM_openInTab(list.href); // 后台打开
                    });
                }
                clearInterval(inter);
            }

            //蓝凑云盘:跳转页
            let download_file = document.querySelector("#tourl a");
            if (download_file) {
                GM_openInTab(download_file.href);
                window.top.close();
            }
        }, 1000);
    }
})();
