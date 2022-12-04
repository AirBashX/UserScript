// ==UserScript==
// @name         链接管理
// @version      1.2.5
// @namespace    airbash/LinkManager
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  绕过搜索引擎(百度、搜狗、360、必应、谷歌)搜索结果中的重定向链接,直链访问原始网站;删除网站重定向到安全页面,减少操作步骤和响应时间;支持CSDN+掘金+简书+知乎+知乎专栏+百度贴吧+开源中国+gitee+51CTO+百度搜索+360搜索+搜狗搜索+必应搜索+423down
// @match        *://link.csdn.net/*
// @match        *://www.jianshu.com/p/*
// @match        *://juejin.cn/*
// @match        *://*.zhihu.com/*
// @match        *://tieba.baidu.com/*
// @match        *://*.oschina.net/*
// @match        *://blog.51cto.com/*
// @match        *://*.baidu.com/*
// @match        *://m.so.com/s?*
// @match        *://www.so.com/s?*
// @match        *://www.sogou.com/web?
// @match        *://bing.com/*
// @match        *://www.423down.com/*
// @icon         data:image/png;base64,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
// @grant        none
// @license      GPL-3.0
// @run-at       document-body
// ==/UserScript==
(function () {
    "use strict";

    var websites = [
        {
            //https://blog.csdn.net/weixin_50829653/article/details/118119039
            name: "CSDN",
            url: "link.csdn.net",
            handlers: [
                {
                    type: "forward",
                    start: "?target=",
                },
            ],
            noTimer: true,
        },
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
            url: "www.jianshu.com/p",
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
            //https://blog.51cto.com/u_15127617/4063137
            //https://blog.51cto.com/transfer?https://httpie.org/docs#examples
            name: "51CTO",
            url: "blog.51cto.com/transfer?",
            handlers: [
                {
                    type: "forward",
                    start: "transfer?",
                },
            ],
            noTimer: true,
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
            //https://www.sogou.com/web?ie=UTF-8&query=123
            name: "搜狗搜索",
            url: "www.sogou.com/web",
            handlers: [
                {
                    selector: "a",
                    start: "/link?url=",
                    attribute: "linkurl",
                    type: "attribute",
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

    if (location.href.includes("baidu.com")) {
        let time = 0;
        let interval = setInterval(() => {
            if (++time == 100) {
                clearInterval(interval);
            }
            //百度手机版
            let items1 = document.querySelectorAll("#results>div");
            if (items1.length) {
                for (let item of items1) {
                    let str = item.getAttribute("data-log");
                    let json = JSON.parse(str);
                    let url = json.mu;
                    item.querySelector("[rl-link-href]").setAttribute("rl-link-href", url);
                    let as = item.querySelectorAll("a");
                    for (let a of as) {
                        a.setAttribute("href", url);
                    }
                }
            }
            //百度PC版
            let items2 = document.querySelectorAll("#content_left>div");
            if (items2.length) {
                for (let item of items2) {
                    let url = item.getAttribute("mu");
                    if (url && !url.includes("nourl.ubs.baidu.com")) {
                        item.querySelector("a").setAttribute("href", url);
                    }
                }
            }
        }, 100);
    }

    for (let website of websites) {
        if (location.href.includes(website.url)) {
            if (website.noTimer) {
                //不执行定时器的网站
                for (let handler of website.handlers) {
                    let start_index = location.href.indexOf(handler.start) + handler.start.length;
                    let str = location.href.substring(start_index);
                    let url = decodeURIComponent(str);
                    location.replace(url);
                }
            } else {
                //执行定时器的网站
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
                                    if (handler.end != null) {
                                        let end_index = href.indexOf(handler.end);
                                        var str = href.substring(start_index, end_index);
                                    } else {
                                        var str = href.substring(start_index);
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
    }
})();
