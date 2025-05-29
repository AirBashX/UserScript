// ==UserScript==
// @name         链接管理
// @version      1.3.27
// @namespace    airbash/LinkManager
// @homepageURL  https://github.com/AirBashX/UserScript
// @author       airbash
// @description  绕过搜索引擎(百度、搜狗、360、必应、谷歌)搜索结果中的重定向链接,直链访问原始网站,删除网站重定向到安全页面,自动跳转中文文档,减少操作步骤和响应时间;长期维护、PC+手机全平台支持:CSDN+掘金+简书+知乎+知乎专栏+百度贴吧+开源中国+码云gitee+扣丁leetcode+51CTO+百度搜索+360搜索+搜狗搜索+必应搜索+423down+酷安+eslint+微软文档+火狐MDN+tampermonkey文档;
// @match        *://link.csdn.net/*
// @match        *://link.juejin.cn/*
// @match        *://juejin.cn/*
// @match        *://www.jianshu.com/p/*
// @match        *://www.jianshu.com/go-wild?*
// @match        *://*.zhihu.com/*
// @match        *://tieba.baidu.com/*
// @match        *://*.oschina.net/*
// @match        *://gitee.com/*
// @match        *://leetcode.cn/link/*
// @match        *://blog.51cto.com/*
// @match        *://*.baidu.com/*
// @match        *://m.so.com/s?*
// @match        *://www.so.com/s?*
// @match        *://www.sogou.com/web?*
// @match        *://*.bing.com/search*
// @match        *://www.423down.com/*
// @match        *://www.coolapk.com/link*
// @match        *://*.eslint.org/docs/latest/*
// @match        *://learn.microsoft.com/*
// @match        *://developer.mozilla.org/*
// @match        *://www.tampermonkey.net/*
// @icon         data:image/png;base64,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
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @license      GPL-3.0
// @run-at       document-body
// ==/UserScript==
///<reference path="./tampermonkey-reference.d.ts" />

(function () {
    "use strict";

    /**
     * 安全页面重定向列表
     * @type       {安全页面网站}
     */
    const safePages = [
        {
            //https://blog.csdn.net/weixin_50829653/article/details/118119039
            //https://link.csdn.net/?from_id=118119039&target=https://baidu.com
            name: "CSDN",
            url: "link.csdn.net",
            handlers: [
                {
                    type: "forward",
                    start: "&target=",
                },
            ],
        },
        {
            //https://link.zhihu.com/?target=https://www.apifox.cn/
            name: "知乎",
            url: "link.zhihu.com/?target=",
            handlers: [
                {
                    type: "forward",
                    start: "?target=",
                },
            ],
        },
        {
            //https://link.juejin.cn/?target=https://baidu.com
            name: "掘金",
            url: "link.juejin.cn/?target=",
            handlers: [
                {
                    type: "forward",
                    start: "?target=",
                },
            ],
        },
        {
            //https://www.jianshu.com/go-wild?ac=2&url=https://baidu.com
            name: "简书",
            url: "www.jianshu.com/go-wild?",
            handlers: [
                {
                    type: "forward",
                    start: "&url=",
                },
            ],
        },
        {
            //https://www.oschina.net/action/GoToLink?url=https://baidu.com
            name: "开源中国",
            url: "www.oschina.net/action/GoToLink?url=",
            handlers: [
                {
                    type: "forward",
                    start: "GoToLink?url=",
                },
            ],
        },
        {
            //https://gitee.com/link?target=https://baidu.com
            name: "码云",
            url: "gitee.com/link?target=",
            handlers: [
                {
                    type: "forward",
                    start: "?target=",
                },
            ],
        },
        {
            //https://leetcode.cn/link/?target=https://www.baidu.com
            name: "扣丁",
            url: "leetcode.cn",
            handlers: [
                {
                    type: "forward",
                    start: "link/?target=",
                },
            ],
        },
        {
            //https://blog.51cto.com/u_15127617/4063137
            //https://blog.51cto.com/transfer?https://baidu.com
            name: "51CTO",
            url: "blog.51cto.com/transfer?",
            handlers: [
                {
                    type: "forward",
                    start: "transfer?",
                },
            ],
        },
        {
            //https://www.coolapk.com/link?url=https%3A%2F%2Flanzoux.com
            name: "酷安",
            url: "www.coolapk.com/link?url=",
            handlers: [
                {
                    type: "forward",
                    start: "link?url=",
                },
            ],
        },
        {
            //https://mail.qq.com/cgi-bin/readtemplate?t=safety&check=false&gourl=https://www.baidu.com
            name: "酷安",
            url: "mail.qq.com/cgi-bin/readtemplate?",
            handlers: [
                {
                    type: "forward",
                    start: "gourl=",
                },
            ],
        },
    ];

    /**
     * 去除页面重定向列表
     * @type       {重定向网站}
     */
    const websites = [
        {
            //https://www.zhihu.com/question/465346075/answer/2048804228
            //https://zhuanlan.zhihu.com/p/95937067
            name: "知乎",
            url: "zhihu.com",
            handlers: [
                {
                    selector: ".external,.LinkCard",
                    start: "?target=",
                    type: "sub",
                },
            ],
        },
        {
            //https://juejin.cn/post/6844903688524267534
            name: "掘金",
            url: "juejin.cn",
            handlers: [
                {
                    selector: "a[href]",
                    start: "?target=",
                    type: "sub",
                },
            ],
        },
        {
            //https://www.jianshu.com/p/cf7dc734dd6d
            name: "简书",
            url: "www.jianshu.com/p/",
            handlers: [
                {
                    selector: "a[href]",
                    start: "go?to=",
                    type: "sub",
                },
            ],
        },
        {
            //https://tieba.baidu.com/p/6313991324
            name: "百度贴吧",
            url: "tieba.baidu.com/p/",
            handlers: [
                //PC版
                {
                    selector: ".j-no-opener-url",
                    start: "jump.bdimg.com",
                    type: "text",
                },
                {
                    selector: ".j-no-opener-url",
                    start: "jump2.bdimg.com",
                    type: "text",
                },
                //手机版
                {
                    selector: ".rich-link",
                    start: "checkurl?url=",
                    end: "&urlrefer=",
                    type: "sub",
                },
            ],
        },
        {
            //https://my.oschina.net/lorryluMyRest/blog/731722
            name: "开源中国",
            url: "oschina.net",
            handlers: [
                {
                    selector: "a[href]",
                    start: "GoToLink?url=",
                    type: "sub",
                },
            ],
        },
        {
            //https://gitee.com/iflytek/iflearner
            name: "gitee",
            url: "gitee.com",
            handlers: [
                {
                    selector: "a[href]",
                    start: "link?target=",
                    type: "sub",
                },
            ],
        },
        {
            //https://www.so.com/s?ie=UTF-8&q=123
            name: "360搜索PC版",
            url: "www.so.com/s",
            handlers: [
                {
                    selector: "a[data-mdurl]",
                    start: "link?m=",
                    attribute: "data-mdurl",
                    type: "attribute",
                },
            ],
        },
        {
            //https://m.so.com/s?q=%E4%BD%A0%E5%A5%BD
            name: "360搜索手机版",
            url: "m.so.com",
            handlers: [
                {
                    selector: "a[href]",
                    start: "jump?u=",
                    end: "&m=",
                    type: "sub",
                },
            ],
        },
        {
            //https://www.423down.com/10579.html
            name: "423down",
            url: "www.423down.com",
            handlers: [
                {
                    selector: "p>a[href]",
                    start: "/go.php?url=",
                    type: "text",
                },
            ],
        },
    ];

    /**
     * 百度单独规则
     */
    if (location.href.includes("m.baidu.com") || location.href.includes("www.baidu.com")) {
        let interval = setInterval(() => {
            let flag = baidu_static();
        }, 100);
    }
    /**
     * 百度静态规则
     */
    function baidu_static() {
        //pc端
        let item1s = document.querySelectorAll("#content_left>div");
        for (let item of item1s) {
            let a = item.querySelector("a");
            if (a && a.href.includes("www.baidu.com/link?url=")) {
                let url = item.getAttribute("mu");
                //https://www.baidu.com/s?wd=一夜醒来欠地铁600多万?官方回应
                //智能精选
                if (url && url != "null" && !url.includes("nourl.ubs.baidu.com") && !url.includes("nourl.baidu.com")) {
                    a.href = url;
                    console.log(url);
                }
            }
            //single-card-wrapper: https://www.baidu.com/s?ie=UTF-8&wd=es6                          xxx的最新相关信息
            //group-wrapper:       https://www.baidu.com/s?ie=UTF-8&wd=五一消费成绩单折射市场活力     资讯
            let item_news = item.querySelectorAll("[class^=single-card-wrapper] div,[class^=group-wrapper] div");
            for (let item_new of item_news) {
                let data_url;
                let divs = item_new.querySelectorAll("div");
                for (let div of divs) {
                    if ((data_url = div.getAttribute("data-url"))) {
                        let a = item_new.querySelector("a");
                        a.setAttribute("href", data_url);
                    }
                }
            }
        }

        //移动端
        let item2s = document.querySelectorAll("#results>div");
        for (let item of item2s) {
            let rl_link_href = item.querySelector("[rl-link-href]");
            if (rl_link_href && rl_link_href != null) {
                let str = item.getAttribute("data-log");
                let json = JSON.parse(str);
                let url = json.mu;
                if (!url.startsWith("https://ks.baidu.com") && url) {
                    //ks.baidu.com                  https://www.baidu.com/s?word=赵匡胤
                    rl_link_href.setAttribute("rl-link-href", url);
                    let as = item.querySelectorAll("a");
                    for (let a of as) {
                        a.href = url;
                    }
                }
            }
        }
        return false;
    }

    /**
     * 必应单独规则
     * https://www.bing.com/search?q=必应
     */
    if (location.href.includes("bing.com/search")) {
        function handlerAnchor(a) {
            let url_ = a.href;
            if (url_.includes(".bing.com/ck/a?")) {
                // 截取 u= 及其后面的字符
                let tmp = url_.slice(url_.lastIndexOf("u="));
                // 找到 u= 后的第一个 `&`, 精确提取出 u
                tmp = tmp.slice("u=a1".length, tmp.indexOf("&"));
                const paddingNeeded = 4 - tmp.length % 4;
                // 如果长度不是4的倍数，则需要补充'='
                if (paddingNeeded != 4) {
                    tmp += '='.repeat(paddingNeeded);
                }
                try {
                    let ori_url = atob(tmp.replace('-', '+').replace('_', '/'));
                    a.href = ori_url;
                } catch (e) {
                    console.log("Error parsing", tmp);
                }
            }
        }

        function afterLoaded(f_) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', f_);
            } else {
                typeof f_ === 'function' && f_();
            }
        }

        afterLoaded(() => {
            console.log("Started");
            document.querySelectorAll('a').forEach(handlerAnchor);
            // 使用 MutationObserver 监控 DOM 变化
            const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                node.querySelectorAll('a').forEach(handlerAnchor);
                            }
                        });
                    }
                }
            });

            // 观察整个文档的 DOM 变化
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    /**
     * 安全页面跳转:处理
     */
    for (let safePage of safePages) {
        if (location.href.includes(safePage.url)) {
            for (let handler of safePage.handlers) {
                let str = location.href.split(handler.start)[1];
                console.log(str);
                let url = decodeURIComponent(str);
                console.log(url);
                location.replace(url);
            }
        }
    }

    /**
     * 页面重定向跳转:处理
     */
    for (let website of websites) {
        if (location.href.includes(website.url)) {
            let time = 0;
            let interval = setInterval(() => {
                if (++time == 100) {
                    clearInterval(interval);
                }
                for (let handler of website.handlers) {
                    let items = document.querySelectorAll(handler.selector);
                    for (let item of items) {
                        //进一步校验需要修改的元素,防止修改错元素
                        if (item.getAttribute("href").includes(handler.start)) {
                            if (handler.type == "sub") {
                                //从属性中截取地址
                                let href = item.getAttribute("href");
                                let start_index = href.indexOf(handler.start) + handler.start.length;
                                let str;
                                if (handler.end != null) {
                                    let end_index = href.indexOf(handler.end);
                                    str = href.substring(start_index, end_index);
                                } else {
                                    str = href.substring(start_index);
                                }
                                let url = decodeURIComponent(str);
                                item.setAttribute("href", url);
                            } else if (handler.type == "attribute") {
                                //从属性中获取地址
                                item.setAttribute("href", item.getAttribute(handler.attribute));
                            } else {
                                //从文本中获取地址
                                item.setAttribute("href", item.innerText);
                            }
                        }
                    }
                }
            }, 100);
        }
    }

    /**
     * 跳转中文文档规则
     */
    const otherSites = [
        {
            //https://eslint.org/docs/latest/user-guide/configuring/configuration-files
            //https://zh-hans.eslint.org/docs/latest/user-guide/configuring/configuration-files
            name: "eslint",
            url: "https://eslint.org/docs/latest/",
            type: "host",
            zh_str: "zh-hans",
        },
        {
            //https://learn.microsoft.com/zh-cn/powershell/scripting/how-to-use-docs
            name: "microsoft",
            url: "https://learn.microsoft.com/",
            type: "pathName",
            zh_str: "zh-cn",
        },
        {
            //https://developer.mozilla.org/zh-CN/
            name: "MDN",
            url: "https://developer.mozilla.org/",
            type: "pathName",
            zh_str: "zh-CN",
        },
        {
            //https://www.tampermonkey.net/faq.php?locale=zh
            name: "tampermonkey",
            url: "https://www.tampermonkey.net",
            type: "search",
            zh_str: "locale=zh",
        },
    ];

    /**
     * GM相关APi的操作
     */
    if (GM_info) {
        const scriptHandler = GM_info.scriptHandler;
        /**
         * 仅在油侯插件上运行,避免无法点击注册开关
         */
        if (scriptHandler == "Tampermonkey" || scriptHandler == "Violentmonkey" || scriptHandler == "ScriptCat" || scriptHandler == "Via") {
            /**
             * 自动跳转中文文档
             */
            if (GM_getValue("forward_zh")) {
                GM_registerMenuCommand("[√]跳转中文文档", function () {
                    GM_setValue("forward_zh", false);
                    location.reload();
                });
                let web_url = location.href;
                for (let otherSite of otherSites) {
                    if (web_url.startsWith(otherSite.url)) {
                        let zh_index = location.href.search(otherSite.zh_str);
                        // 当前页面不是中文文档
                        if (zh_index == -1) {
                            if (otherSite.type == "pathName") {
                                let pathname = location.pathname;
                                let str = pathname.split("/")[1];
                                if (str != otherSite.zh_str) {
                                    let new_url = web_url.replace(str, otherSite.zh_str);
                                    location.replace(new_url);
                                }
                            } else if (otherSite.type == "host") {
                                let host = location.host;
                                let str = host.split(".")[0];
                                if (str != otherSite.zh_str) {
                                    let new_host = otherSite.zh_str + "." + host;
                                    let new_url = web_url.replace(host, new_host);
                                    location.replace(new_url);
                                }
                            } else if (otherSite.type == "search") {
                                let search = location.search;
                                if (search) {
                                    //有参数
                                    let key = otherSite.zh_str.split("=")[0];
                                    let start_index = search.search(key);
                                    let end_index = start_index + otherSite.zh_str.length;
                                    if (start_index != -1) {
                                        //有指定参数
                                        let str = search.substring(start_index, end_index);
                                        if (str != otherSite.zh_str) {
                                            //数值不对
                                            let url = web_url.replace(str, otherSite.zh_str);
                                            location.replace(url);
                                        }
                                    } else {
                                        //没有指定参数
                                        let url = web_url + "&" + otherSite.zh_str;
                                        location.replace(url);
                                    }
                                } else {
                                    //没有参数
                                    let url = web_url + "?" + otherSite.zh_str;
                                    location.replace(url);
                                }
                            }
                        }
                    }
                }
            } else {
                GM_registerMenuCommand("[x]跳转中文文档", function () {
                    GM_setValue("forward_zh", true);
                    location.reload();
                });
            }
        }
    }
})();
