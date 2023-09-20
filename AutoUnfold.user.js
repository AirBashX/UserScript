// ==UserScript==
// @name         自动展开
// @version      1.3.60
// @namespace    https://github.com/AirBashX/AutoUnfold/
// @homepageURL  https://github.com/AirBashX/UserScript
// @author       airbash
// @description  自动展开文档	隐藏部分;长期维护、PC+手机全平台支持;全平台支持:CSDN、编程之家、简书、知乎、百家号、百度资讯、百度百科、百度经验、百度知道、百度贴吧、百度新闻、新浪新闻、腾讯新闻、搜狐新闻、网易新闻、凤凰新闻、澎湃新闻、新京报、央广网、环球网、人民日报、人民网、今日头条、丁香园、健康界、36氪、果壳、虎扑、虎嗅、头条、B站专栏、B站笔记、微博文章、豆瓣文章、豆瓣小组、开源中国、阿里云开发者社区、腾讯云开发者社区、华为云开发者社区、360图书馆、太平洋电脑网、中关村在线、汽车之家、游侠网、游民星空、360问答、天眼查、天涯社区、东方财富网、喜马拉雅、it1352、代码随想录
// @match        *://*.blog.csdn.net/*
// @match        *://blog.csdn.net/*
// @match        *://ask.csdn.net/questions/*
// @match        *://download.csdn.net/download/*
// @match        *://*.jb51.cc/*
// @match        *://*.jianshu.com/*
// @match        *://www.zhihu.com/question/*
// @match        *://zhuanlan.zhihu.com/p/*
// @match        *://jingyan.baidu.com/article*
// @match        *://zhidao.baidu.com/question*
// @match        *://baike.baidu.com/item/*
// @match        *://tieba.baidu.com/p*
// @match        *://wk.baidu.com/view/*
// @match        *://tanbi.baidu.com/h5apptopic/browse/*
// @match        *://baijiahao.baidu.com/s*
// @match        *://easylearn.baidu.com/edu-page/*
// @match        *://mbd.baidu.com/newspage/data/*
// @match        *://news.baidu.com/news*
// @match        *://m.baidu.com/sf_baijiahao/*
// @match        *://*.sina.cn/*
// @match        *://3g.163.com/*
// @match        *://*.sohu.com/a/*
// @match        *://view.inews.qq.com/*
// @match        *://*.ifeng.com/*
// @match        *://m.thepaper.cn/newsDetail_forward*
// @match        *://m.bjnews.com.cn/detail/*
// @match        *://*.huanqiu.com/article/*
// @match        *://3w.huanqiu.com/a/*
// @match        *://www.toutiao.com/article/*
// @match        *://www.toutiao.com/answer/*
// @match        *://3g.dxy.cn/*
// @match        *://www.cn-healthcare.com/*
// @match        *://space.bilibili.com/*/dynamic*
// @match        *://t.bilibili.com*
// @match        *://www.bilibili.com/read/mobile*
// @match        *://m.bilibili.com/opus/*
// @match        *://weibo.com/ttarticle/p/show?id=*
// @match        *://card.weibo.com/article/m/show/id*
// @match        *://*.douban.com/*
// @match        *://www.oschina.net/p/*
// @match        *://developer.aliyun.com/article/*
// @match        *://cloud.tencent.com/developer/article/*
// @match        *://cloud.tencent.com/developer/beta/article/*
// @match        *://huaweicloud.csdn.net/*
// @match        *://www.360doc.cn/article/*
// @match        *://www.360doc.com/content/*
// @match        *://g.pconline.com.cn/x/*
// @match        *://m.zol.com.cn/article/*
// @match        *://m.autohome.com.cn/news/*
// @match        *://chejiahao.m.autohome.com.cn/info/*
// @match        *://*.cnr.cn/*
// @match        *://club.m.autohome.com.cn/bbs/*
// @match        *://3g.ali213.net/*
// @match        *://wap.gamersky.com/*
// @match        *://wenda.so.com/q/*
// @match        *://m.wenda.so.com/q/*
// @match        *://n.tianyancha.com/content/*
// @match        *://bbs.tianya.cn/m/*
// @match        *://wap.eastmoney.com/a/*
// @match        *://mguba.eastmoney.com/*
// @match        *://emcreative.eastmoney.com/*
// @match        *://*.ximalaya.com/*
// @match        *://*.it1352.com/*
// @match        *://www.taodudu.cc/news/*
// @match        *://programmercarl.com/*
// @match        *://blog.didispace.com/*
// @match        *://*.wang1314.com/doc/*
// @match        *://*.k4china.com/*
// @match        *://www.tofacebook.com/*
// @run-at       document-start
// @icon         data:image/png;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA29JREFUeF7tmMvrT08Yx1/fnViwVcq/gqKQa8gtd0Kyk8Vv81tZKWGByC233JWIwp9iYcPORkT56fl1po5pnjNn5syc6dOZz/Iz1/dr3s9z5pk5Jv6bm7h+KoDqgIkTqCEwcQPUJFhDoIbAxAnUEJi4AepXoIZADYGJE4gJgSPAF+BFYXYngU/AsyH7CAUg4s8B84GNBSGI+DPAAmDzEAghANriDfS9wO0hJxAx9iBwvhFvhu8HbkbM1fsz6BJfAoJL/CAIfRzQJX5MCF3ioyH4AOwGrjQxbxb5Cixy2G0fcCvGhj3GuMS79vEfIH1v9Jjz/y5dADTx/wCfgScjQdDE/wt8dCTiIAgaAE38MeBBI1yyrw3hN3AgoRO2A9eshCcnfwK42+xjvQJBxj70OcEFQMRftGz+C5BcYGfanBD6iDf6DgFXLbHihG3A4y4ILgBbgEeOQWuA147/VwFvrP/FCbK4K0x8hyLtmnj53D13TCD9LwMLW23fAclLnS7QQmCDspAGYRdwJxEEifmzlgN/AiL+npJ35HLWTsy9xPuS4A5lwVAI0t92iOaCUcX7AEh7qBPEivcdTlgHvPJ435Xtu07+aHMtnxdq+/Y+fPcA6RuaEzQIq4G3CoQi4vs4wOx3GfAhIDEuB947nOCCECpeEtslYNDJm731cYDp6xIlbVpOWAG880AoKj7EAUbHWuClwwlble+tC4IMl1J6aaukNVNKzMsJ23lE2pPEvL33EAfEQlipxP4364Y3uvgYB/ggHG6urjZoDYLpJ9fb4wEnL/1PKWt5PjZ/N8c4IDWELvGuhJdM/BAHxELYBDxtnUFR8SkAyBxaYtypWNpAKC4+FQCZZ49SAmsQpIpcAlxwBKzY3nW3P91UqUEx7us8JAfYc2sQQl6PNfHyDpHltSklgC4n9IEgoXHdUdVlE58yBNpukEuRqwbXbowyVuoHud5GlbQ+m3e1p3aAWSukitRs733MGCLcjM0FQObv855QVHyuEGgfTJcTpBaQbJ+kqot1Q04HmD1p7wk/SosfwwEGgvaeYNp7v+HFnrQ2bgwHmLW194Ri4sd0gFY7FBVfAkC7diguvhQAA2Fxinp+aE4YMwcM3WuW8RVAFqwzNGl1wAwdVpatVgdkwTpDk1YHzNBhZdlqdUAWrDM06eQd8Acza/FB2qWb3AAAAABJRU5ErkJggg==
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
(function () {
	"use strict";

	/**
	 * 网站列表
	 * @type {name/url/操作类型}
	 */
	const websites = [
		{
			name: "CSDN",
			url: "blog.csdn.net",
			handles: [
				//PC端:自动展开代码块
				{
					type: "click",
					item: ".hide-preCode-bt",
				},
				//PC端:关注博主即可阅读全文
				{
					type: "display",
					item: ".hide-article-box",
				},
				//下载弹窗
				{
					type: "display",
					item: ".weixin-shadowbox",
				},
				//阅读全文
				{
					type: "display",
					item: ".btn_mod",
				},
				{
					type: "height",
					item: ".article_content",
				},
				{
					type: "display",
					item: ".readall_box",
				},
				//展开评论
				{
					type: "click",
					item: ".btn_comment_readmore",
				},
			],
		},
		{
			name: "CSDN问答",
			url: "ask.csdn.net/questions",
			handles: [
				//PC端:展开全部
				{
					type: "display",
					item: ".expandBtn",
				},
				{
					type: "height",
					item: ".normal-style",
				},
				//PC端:查看等多回答
				{
					type: "click",
					item: ".ic_ask_down_reeow",
				},
			],
		},
		{
			name: "CSDN下载",
			url: "download.csdn.net/download",
			handles: [
				{
					type: "click",
					item: ".fl",
				},
				//展开全部
				{
					type: "click",
					item: ".unfold-font",
				},
				//查看更多
				{
					type: "click",
					item: ".el-button--text",
				},
			],
		},
		{
			name: "it1352",
			url: "it1352.com",
			handles: [
				//PC端:查看全文:解除公众号限制
				{
					type: "display",
					item: ".arc-body-main-more",
				},
				{
					type: "height",
					item: ".arc-body-main",
				},
			],
		},
		{
			name: "编程之家",
			url: "jb51.cc",
			handles: [
				//PC端:阅读全文
				{
					type: "display",
					item: "#read-more-wrap",
				},
				{
					type: "height",
					item: "#container",
				},
				//展开
				{
					type: "height",
					item: ".read-more-hidden",
				},
			],
		},
		{
			name: "简书",
			url: "jianshu.com/p",
			handles: [
				//下载弹窗
				{
					type: "display",
					item: ".download-app-guidance",
				},
				//阅读全文
				{
					type: "display",
					item: ".collapse-tips",
				},
				{
					type: "height",
					item: ".collapse-free-content",
				},
				//允许滑动
				{
					type: "overflow",
					item: "body",
				},
			],
			//删除遮挡栏
			fun: function () {
				let css = document.createElement("style");
				css.innerText = ".collapse-free-content::after {height: 0px !important}";
				document.head.appendChild(css);
			},
		},
		{
			name: "知乎",
			url: "www.zhihu.com/question",
			handles: [
				//PC端:显示全部(问题描述)
				{
					type: "click",
					item: ".QuestionRichText-more",
				},
				// PC+移动版:展开阅读全文+查看问题描述
				{
					type: "display",
					item: ".ContentItem-rightButton",
				},
				{
					type: "height",
					item: ".RichContent-inner",
				},
				// 修复个别失效网站:
				{
					type: "click",
					item: ".RichContent-inner",
				},
			],
			fun: function () {
				let items = document.querySelectorAll(".RichContent-inner");
				for (let item of items) {
					//移动版2:遮挡
					item.style.setProperty("-webkit-mask-image", "none", "important");
				}
			},
		},
		{
			name: "知乎专栏",
			url: "zhuanlan.zhihu.com/p/",
			handles: [
				//PC端:显示全部(问题描述)
				{
					type: "click",
					item: ".QuestionRichText-more",
				},
				// PC+移动版:展开阅读全文+查看问题描述
				{
					type: "display",
					item: ".ContentItem-rightButton",
				},
				{
					type: "height",
					item: ".RichContent-inner",
				},
				//修复个别失效网站:
				{
					type: "click",
					item: ".RichContent-inner",
				},
			],
			fun: function () {
				//移动版2:遮挡
				let items = document.querySelectorAll(".RichContent-inner");
				for (let item of items) {
					item.style.setProperty("-webkit-mask-image", "none", "important");
				}
			},
		},
		{
			name: "百度经验",
			url: "jingyan.baidu.com/article",
			handles: [
				//PC端:展开内容
				{
					type: "display",
					item: ".read-whole-mask",
				},
				{
					type: "height",
					item: ".exp-content-container",
				},
				//展开内容
				{
					type: "click",
					item: ".more-img-opt",
				},
			],
		},
		{
			name: "百度知道",
			url: "zhidao.baidu.com/question",
			handles: [
				//展开剩余
				{
					type: "display",
					item: ".w-detail-display-btn",
				},
				{
					type: "height",
					item: ".w-detail-container",
				},
				//PC端:展开全部(1)
				{
					type: "display",
					item: ".wgt-best-mask",
				},
				{
					type: "height",
					item: ".best-text",
				},
				//PC端:展开全部(2)
				{
					type: "display",
					item: ".wgt-answers-mask",
				},
				{
					type: "height",
					item: ".answer-text",
				},
				//PC端:更多回答1
				{
					type: "display",
					item: "#show-hide-container",
				},
				{
					type: "classList",
					item: ".answer",
					remove: "answer-hide",
				},
				//PC端:更多回答2
				{
					type: "display",
					item: ".show-answer-dispute",
				},
				{
					type: "classList",
					item: ".answer",
					remove: "answer-dispute-hide",
				},
			],
		},
		{
			name: "百度百科",
			url: "baike.baidu.com/item",
			handles: [
				//展开全部
				{
					type: "click",
					item: ".table-show-all",
				},
				//点击加载更多
				{
					type: "display",
					item: "#ui_refresh_down",
				},
			],
			fun: function () {
				let button = document.querySelector('.yx-load-more-inner');
				button.dispatchEvent(new Event("tap"));
			},
		},
		{
			name: "百度贴吧",
			url: "tieba.baidu.com/p",
			handles: [
				//PC端:自动展开图片
				{
					type: "display",
					item: ".replace_tip",
				},
				{
					type: "height",
					item: ".replace_div",
				},
				//PC端:自动展开回复
				{
					type: "click",
					item: ".j_lzl_m",
				},
			],
		},
		{
			name: "百度文库手机版1",
			url: "wk.baidu.com/view",
			handles: [
				//自动展开
				{
					type: "height",
					item: ".reader-copy",
				},
				{
					//透明遮挡
					type: "display",
					item: ".blur-bg",
				},
			],
			fun: function () {
				//工具相关内容下移,避免遮挡
				let item = document.querySelector(".fold-pager");
				if (item) {
					item.style.setProperty("margin-top", "0px");
				}
			},
		},
		{
			name: "百度文库手机版2",
			url: "tanbi.baidu.com/h5apptopic/browse/",
			handles: [
				{
					//下载app,继续阅读
					type: "display",
					item: ".continue-read-wrap",
				},
			],
			fun: function () {
				let item = document.querySelector("#read-view");
				item.setAttribute("scrolling", "yes");
			},
		},
		{
			name: "百家题库",
			url: "easylearn.baidu.com/edu-page/",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".shiti-answer .mask",
				},
				{
					type: "height",
					item: ".shiti-answer .analysis-text",
				},
				// 显示完整题目
				{
					type: "height",
					item: ".question-cont .tigan",
				},
				// 移除遮罩
				{
					type: "height",
					item: ".question-cont .tigan .mask",
				},
			],
		},
		{
			name: "百家号",
			url: "baijiahao.baidu.com/s",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".oPadding",
				},
				{
					type: "height",
					item: ".mainContent",
				},
				//点击展开全文:狐猴浏览器特有bug
				{
					type: "height",
					item: "#mainContentContainer"
				},
				{
					type: "display",
					item: ".foldMaskWrapper"
				}
			],
		},
		{
			name: "百度app新闻",
			url: "mbd.baidu.com/newspage/data",
			handles: [
				//类似于百家
				//阅读全文
				{
					type: "display",
					item: ".height-fold",
				},
				{
					type: "height",
					item: ".dynamic-item",
				},

				//类似于百度
				//阅读全文
				{
					type: "display",
					item: ".packupButton",
				},
				{
					type: "height",
					item: ".mainContent",
				},
			],
		},
		{
			name: "百度资讯",
			url: "m.baidu.com/sf_baijiahao",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".oPadding",
				},
				{
					type: "height",
					item: ".mainContent",
				},
			],
		},
		{
			name: "百度新闻",
			url: "news.baidu.com/news#/detail",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".show-more-btn-container",
				},
				{
					type: "display",
					item: ".show-more-end",
				},
				{
					type: "height",
					item: ".detail-content-main",
				},
			],
		},
		{
			name: "新浪新闻",
			url: "sina.cn",
			handles: [
				//展开
				{
					type: "display",
					item: ".look_more",
				},
				{
					type: "height",
					item: ".s_card",
				},
			],
		},
		{
			name: "网易新闻",
			url: "3g.163.com",
			handles: [
				//展开
				{
					type: "display",
					item: ".show_article",
				},
				{
					type: "height",
					item: "article",
				},
			],
		},
		{
			name: "搜狐新闻",
			url: "sohu.com/a",
			handles: [
				//展开
				{
					type: "display",
					item: ".lookall-box",
				},
				//移动+PC版
				{
					type: "classList",
					item: ".hidden-content",
					remove: "hide",
				},
				{
					type: "classList",
					item: ".hidden-content",
					remove: "control-hide",
				},
			],
		},
		{
			name: "腾讯新闻",
			url: "view.inews.qq.com/",
			handles: [
				//点击展开全文
				{
					type: "display",
					item: "[class^=show-more_outer__]",
				},
				{
					type: "display",
					item: "[class^=show-more-article_cover__]",
				},
				{
					type: "height",
					item: "[class^=show-more_height-not-full__]",
				},
			],
		},
		{
			name: "凤凰新闻",
			url: "ifeng.com/",
			handles: [
				//点击查看完整内容(房子)
				{
					type: "display",
					item: ".showall",
				},
				{
					type: "height",
					item: ".article",
				},
				//点击展开全文(资讯)
				{
					type: "display",
					item: "[class^=tip]",
				},
				//展开全文(汽车)
				{
					type: "display",
					item: "[class^=more]",
				},
				{
					type: "height",
					item: "[class^=main_content]",
				},
				//展开(财经视频介绍)
				{
					type: "click",
					item: "[class^=videoBrefTextBtn-]",
				},
			],
		},
		{
			name: "澎湃新闻",
			url: "m.thepaper.cn/newsDetail_forward",
			handles: [
				//展开全文
				{
					type: "display",
					item: "#clickForMore",
				},
				{
					type: "height",
					item: ".newsdetail_body",
				},
			],
		},
		{
			name: "新京报",
			url: "m.bjnews.com.cn/detail/",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".shade",
				},
				{
					type: "height",
					item: ".article",
				},
			],
		},
		{
			name: "央广网",
			url: "cnr.cn",
			handles: [
				//展开全文
				{
					type: "display",
					item: "#readmore",
				},
				{
					type: "height",
					item: "#perny-main",
				},
			],
		},
		{
			name: "环球网1",
			url: "huanqiu.com/article/",
			handles: [
				//展开全文
				{
					type: "click",
					item: ".unfold-btn",
				},
			],
		},
		{
			name: "环球网2",
			url: "3w.huanqiu.com/a/",
			handles: [
				//展开全文
				{
					type: "click",
					item: "#more",
				},
			],
		},
		{
			name: "今日头条",
			url: "www.toutiao.com/article/",
			handles: [
				//PC端:点击展开剩余内容
				{
					type: "display",
					item: ".expand-button-wrapper",
				},
				{
					type: "height",
					item: ".expand-container",
				},
			],
		},
		{
			name: "今日头条问答",
			url: "www.toutiao.com/answer/",
			handles: [
				//PC端:点击展开剩余内容
				{
					type: "display",
					item: ".expand-button-wrapper",
				},
				{
					type: "height",
					item: ".expand-container",
				},
			],
		},
		{
			name: "丁香园",
			url: "3g.dxy.cn",
			handles: [
				//显示第一条评论
				{
					type: "height",
					item: ".dicussion-text",
				},
				//展开阅读全文
				{
					type: "display",
					item: "[class^=contentWrapBottom___]",
				},
				{
					type: "height",
					item: "[class^=contentWrap___]",
				},
			],
		},
		{
			name: "健康界",
			url: "www.cn-healthcare.com/",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".mask",
				},
				{
					type: "height",
					item: "#artbody",
				},
			],
		},
		// {
		// 	name: "B站视频",
		// 	url: "www.bilibili.com/video/",
		// 	handles: [
		// 		//PC端:展开内容
		// 		{
		// 			type: "display",
		// 			item: ".toggle-btn",
		// 		},
		// 		{
		// 			type: "height",
		// 			item: ".basic-desc-info",
		// 		},
		// 	],
		// },
		{
			name: "B站动态",
			url: "space.bilibili.com/",
			handles: [],
			fun: function () {
				//PC端展开简介
				let item1s = document.querySelectorAll(".folded");
				for (let item of item1s) {
					item.className = "bili-rich-text__content";
				}
				let item2s = document.querySelectorAll(".bili-rich-text__action");
				for (let item2 of item2s) {
					item2.innerText = "收起";
				}
			},
		},
		{
			name: "B站专栏",
			url: "www.bilibili.com/read/mobile",
			handles: [
				//展开阅读全文
				{
					type: "display",
					item: ".read-more",
				},
				{
					type: "classList",
					item: ".read-article-box",
					remove: "limit",
				},
				{
					type: "classList",
					item: ".read-article-box",
					remove: "show-later",
				},
			],
		},
		{
			name: "B站笔记",
			url: "m.bilibili.com/opus/",
			handles: [
				//展开阅读全文
				{
					type: "display",
					item: ".opus-read-more",
				},
				{
					type: "classList",
					item: ".opus-module-content",
					remove: "limit",
				},
			],
		},
		{
			name: "微博文章PC版",
			url: "weibo.com/ttarticle/p/show?id=",
			handles: [
				{
					type: "height",
					item: ".WB_editor_iframe_new",
				},
				{
					type: "display",
					item: ".btn_line",
				},
			],
		},
		{
			name: "微博文章移动版",
			url: "card.weibo.com/article/m/show/id",
			handles: [
				{
					type: "height",
					item: ".f-art",
				},
				{
					type: "display",
					item: ".f-art-opt",
				},
			],
		},
		{
			name: "豆瓣",
			url: "douban.com",
			handles: [
				//点击展开全文
				{
					type: "display",
					item: ".oia-readall",
				},
				{
					type: "height",
					item: ".note-content",
				},
			],
			fun: function () {
				//展开(简介)
				let item1 = document.querySelector(".subject-intro p");
				try {
					let str = item1.getAttribute("data-content");
					if (str) {
						item1.innerText = str;
					}
				} catch (error) {
					/* empty */
				}
				onload = function () {
					//展开(评论)
					let items2 = document.querySelectorAll(".LinesEllipsis-readmore");
					for (let item of items2) {
						item.click();
					}

					//展开(PC端:评论)
					let items3 = document.querySelectorAll(".expand");
					for (let item of items3) {
						item.click();
					}

					//展开全部(PC端:简介)
					let items4 = document.querySelectorAll(".a_show_full");
					for (let item of items4) {
						item.click();
					}

					//展开(PC端:人物简介)
					let items5 = document.querySelectorAll(".fold-switch");
					for (let item of items5) {
						item.click();
					}
				};
			},
		},
		{
			name: "开源中国",
			url: "www.oschina.net/p/",
			handles: [
				//展开阅读全文
				{
					type: "display",
					item: ".collapse-bar",
				},
				{
					type: "height",
					item: ".article-detail",
				},
			],
		},
		{
			name: "阿里云开发者社区",
			url: "developer.aliyun.com/article",
			handles: [
				//关注
				{
					type: "height",
					item: ".article-hide-content",
				},
				{
					type: "display",
					item: ".article-hide-box",
				},
			],
		},
		{
			name: "腾讯云开发者社区",
			url: "cloud.tencent.com/developer/article/",
			handles: [
				//旧版:展开阅读全文
				{
					type: "height",
					item: ".com-markdown-collpase-main",
				},
				{
					type: "display",
					item: ".com-markdown-collpase-toggle",
				},
				//新版:展开阅读全文
				{
					type: "height",
					item: ".cdc-expand-area__main",
				},
				{
					type: "display",
					item: ".cdc-expand-area__toggle",
				},
			],
		},
		{
			name: "华为云开发者社区",
			url: "huaweicloud.csdn.net/",
			handles: [
				//展开阅读全文
				{
					type: "height",
					item: ".user-article",
				},
				{
					type: "display",
					item: ".article-show-more",
				},
			],
		},
		{
			name: "360图书馆手机版",
			url: "www.360doc.cn/article/",
			handles: [
				//移动版:展开剩余内容
				{
					type: "display",
					item: ".article_showall",
				},
				{
					type: "height",
					item: ".article",
				},
			],
		},
		{
			name: "360图书馆PC版",
			url: "www.360doc.com/content/",
			handles: [
				{
					type: "classList",
					item: "body",
					remove: "articleMaxH",
				},
			],
		},
		{
			name: "太平洋电脑网",
			url: "g.pconline.com.cn/x/",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".show_article",
				},
				{
					type: "height",
					item: ".art-content",
				},
			],
		},
		{
			name: "中关村在线",
			url: "m.zol.com.cn/article/",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".unfold-article-btn",
				},
				{
					type: "height",
					item: ".article-content",
				},
			],
		},
		{
			name: "汽车之家:新闻",
			url: "m.autohome.com.cn/news/",
			handles: [
				//点击展开剩余部分
				{
					type: "display",
					item: "#continue_reading",
				},
				{
					type: "classList",
					item: "#content .fn-hide",
					remove: "fn-hide",
				},
			],
		},
		{
			name: "汽车之家:车家号",
			url: "chejiahao.m.autohome.com.cn/info/",
			handles: [
				//点击展开剩余部分
				{
					type: "display",
					item: "#continue_reading_new",
				},
				{
					type: "classList",
					item: ".pgc-details .fn-hide",
					remove: "fn-hide",
				},
			],
		},
		{
			name: "汽车之家:论坛",
			url: "club.m.autohome.com.cn/bbs/",
			handles: [
				//点击展开剩余部分
				{
					type: "display",
					item: "#continue_reading",
				},
				{
					type: "height",
					item: "#topicContentSection",
				},
				{
					type: "classList",
					item: "#topicContentSection .fn-hide",
					remove: "fn-hide",
				},
			],
		},
		{
			name: "游侠网",
			url: "3g.ali213.net",
			handles: [
				//阅读全文
				{
					type: "display",
					item: ".read-all-con",
				},
				{
					type: "display",
					item: ".read-all-con2",
				},
				{
					type: "height",
					item: ".detail-content",
				},
			],
		},
		{
			name: "游民星空",
			url: "wap.gamersky.com/",
			handles: [
				//展开全文
				{
					type: "display",
					item: ".gsAreaContextOpen",
				},
				{
					type: "height",
					item: "#gsAreaContext",
				},
			],
		},
		{
			name: "360文档",
			url: "wenda.so.com/q/",
			handles: [
				//PC端:展开问答
				{
					type: "display",
					item: ".answer-part__has-folder__btn",
				},
				{
					type: "height",
					item: ".answer-part__has-folder",
				},
				//PC端:更多回答
				{
					type: "display",
					item: ".js-unfold-page",
				},
				{
					type: "classList",
					item: ".hide.js-unfold-answer.answer-fold-box",
					remove: "hide",
				},
				//展开完整答案
				{
					type: "display",
					item: ".overflow-cover",
				},
				{
					type: "height",
					item: ".max-height",
				},
				//更多回答
				{
					type: "display",
					item: ".js-rest-icon",
				},
				{
					type: "classList",
					item: ".ans-box.hide",
					remove: "hide",
				},
			],
		},
		{
			name: "天眼查",
			url: "n.tianyancha.com/content",
			handles: [
				//展开剩余内容
				{
					type: "display",
					item: "[class^=index_other-content-more__]",
				},
				{
					type: "height",
					item: "[class^=index_other-content-container__]",
				},
			],
		},
		{
			name: "天涯社区",
			url: "bbs.tianya.cn/m/",
			handles: [
				//点击展开完整贴文
				{
					type: "display",
					item: ".openFullPost",
				},
				{
					type: "height",
					item: ".onhide",
				},
			],
			//删除透明遮挡
			fun: function () {
				let css = document.createElement("style");
				css.innerHTML = ".item-lz .bd.onhide:before{content:none}";
				document.head.append(css);
			},
		},
		{
			name: "东方财富网",
			url: "wap.eastmoney.com/a/",
			handles: [
				//点击展开完整贴文
				{
					type: "display",
					item: ".fold-btn",
				},
				{
					type: "display",
					item: ".fold-arrow",
				},
				{
					type: "height",
					item: "#articleContent",
				},
				//删除透明遮挡
				{
					type: "display",
					item: ".fold-mask",
				},
			],
		},
		{
			name: "东方财富网:社区",
			url: "emcreative.eastmoney.com/",
			handles: [
				//点击阅读全文
				{
					type: "display",
					item: ".my_ad_wrap",
				},
				{
					type: "height",
					item: "#text-content",
				},
			],
		},
		{
			name: "东方财富网:股吧",
			url: "mguba.eastmoney.com/",
			handles: [
				//点击阅读全文
				{
					type: "display",
					item: "#foldup_box",
				},
				{
					type: "height",
					item: "#content",
				},
			],
		},
		{
			name: "喜马拉雅",
			url: "www.ximalaya.com/",
			handles: [
				//简介
				{
					type: "display",
					item: ".more-intro-wrapper",
				},
				{
					type: "height",
					item: ".layout-main div>article",
				},
			],
		},
		{
			name: "喜马拉雅",
			url: "m.ximalaya.com/",
			handles: [
				//简介+评论
				{
					type: "height",
					item: ".stretch-box",
				},
			],
			fun: function () {
				onload = function () {
					let item1 = document.querySelector(".stretch-more");
					let item2 = item1.parentElement;
					item2.remove();
				};
			},
		},
		{
			name: "淘嘟嘟",
			url: "www.taodudu.cc/news/",
			handles: [
				//阅读全文,人机检测
				{
					type: "display",
					item: "#vip",
				},
				{
					type: "height",
					item: "#article_content",
				},
			],
		},
		{
			name: "代码随想录",
			url: "programmercarl.com/",
			handles: [
				//阅读全文
				{
					type: "display",
					item: "#read-more-wrap",
				},
				{
					type: "height",
					item: "#container",
				},
			],
		},
		{
			name: "程序猿DD",
			url: "blog.didispace.com",
			handles: [
				//阅读全文,人机检测
				{
					type: "display",
					item: "#read-more-wrap",
				},
				{
					type: "height",
					item: ".article",
				},
			],
		},
		{
			name: "好网角收藏夹",
			url: "wang1314.com/doc",
			handles: [
				//PC端:阅读全文,人机检测
				{
					type: "display",
					item: "#show_content_bar",
				},
				{
					type: "height",
					item: "#art_body",
				},
				//阅读原文全部内容
				{
					type: "display",
					item: "#show_content_bar",
				},
				{
					type: "height",
					item: "#body_content",
				},
			],
		},
		{
			name: "科中资源网",
			url: "k4china.com",
			handles: [
				//点击阅读全文
				{
					type: "click",
					item: ".readmore",
				},
			],
		},
		{
			name: "tofacebook",
			url: "www.tofacebook.com",
			handles: [
				//阅读全部
				{
					type: "height",
					item: ".panel-default",
				},
				{
					type: "display",
					item: ".more-box",
				},
			],
		},
	];
	let time = 0;
	let interval = setInterval(() => {
		if (++time == 100) {
			clearInterval(interval);
		}
		for (let website of websites) {
			if (location.href.indexOf(website.url) != -1) {
				if (website.fun) {
					website.fun();
				}
				for (let handle of website.handles) {
					let items = document.querySelectorAll(handle.item);
					if (items.length != 0) {
						if (handle.type == "display") {
							//隐藏遮挡部分
							for (let item of items) {
								item.style.display = "none";
							}
						} else if (handle.type == "height") {
							//加长内容部分
							for (let item of items) {
								item.style.setProperty("height", "unset", "important");
								item.style.setProperty("min-height", "unset", "important");
								item.style.setProperty("max-height", "unset", "important");
							}
						} else if (handle.type == "overflow") {
							//防止无法滑动
							for (let item of items) {
								item.style.setProperty("overflow", "unset", "important");
							}
						} else if (handle.type == "classList") {
							//删除className
							for (let item of items) {
								item.classList.remove(handle.remove);
							}
						} else {
							//模拟点击
							for (let item of items) {
								if (item != null && item.getAttribute("opened") != "yes") {
									item.click();
									item.setAttribute("opened", "yes");
								}
							}
						}
					}
				}
			}
		}
	}, 100);
})();
