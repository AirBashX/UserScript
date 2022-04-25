// ==UserScript==
// @name         骚扰拦截
// @version      1.3.9
// @namespace    airbash/AnnoyancesInterception
// @homepage     https://github.com/AirBashX/UserScript
// @author       airbash
// @description  手机、电脑全平台通用:自动拦截或删除`下载弹窗`、`悬浮按钮`等影响用户体验的元素;长期维护:CSDN、简书、知乎、百家号、百度贴吧、百度新闻、新浪新闻、腾讯视频、优酷视频、爱奇艺、好看视频、百度搜索、哔哩哔哩、丁香园、微博、抖音、电子发烧友、观察者网、凤凰新闻、网易新闻
// @match        *://*.csdn.net/*
// @match      	 *://*.jianshu.com/*
// @match        *://juejin.cn/*
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/p/*
// @match        *://tieba.baidu.com/*
// @match        *://baijiahao.baidu.com/s*
// @match        *://mbd.baidu.com/newspage/data/*
// @match        *://news.baidu.com/news*
// @match        *://m.baidu.com/sf_baijiahao/*
// @match        *://*.sina.cn/*
// @match        *://xw.qq.com/cmsid/*
// @match        *://m.v.qq.com/*
// @match        *://*.youku.com/*
// @match        *://*.iqiyi.com/*
// @match        *://haokan.baidu.com/v*
// @match        *://m.baidu.com/*
// @match        *://*.bilibili.com/*
// @match        *://www.bilibili.com/read/mobile*
// @match        *://3g.dxy.cn/*
// @match        *://m.weibo.cn/*
// @match        *://*.ixigua.com/*
// @match        *://www.douyin.com/*
// @match        *://m.elecfans.com/*
// @match        *://*.guancha.cn/*
// @match        *://*.ifeng.com/*
// @match        *://3g.163.com/dy/article/*
// @icon         data:image/png;base64,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
// @run-at       document-body
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function () {
	/**
	 * 规则列表
	 * @type {name/url/items}
	 */
	var websites = [
		{
			name: "CSDN",
			url: "csdn.net",
			items: [
				//下载弹窗
				".weixin-shadowbox",
				//悬浮按钮:APP内打开+登录/打开注册(主页)
				".feed-Sign-span",
				//PC端:弹窗:学生认证
				"#csdn-highschool-window",
				//PC端:弹窗:登录账号
				".passport-login-container",
			],
		},
		{
			name: "简书",
			url: "jianshu.com",
			items: [
				//下载弹窗
				".download-app-guidance",
				//悬浮按钮:打开App,看更多相似好文
				".call-app-btn",
				//悬浮按钮:打开App,看更多好文(首页)
				".index_call-app-btn",
			],
			overflow: true,
		},
		{
			name: "掘金",
			url: "juejin.cn",
			items: [
				//悬浮按钮:APP内打开
				".open-button",
				//下载弹窗
				".byte-drawer",
				//PC端:下方拓展弹窗
				".recommend-box",
			],
			overflow: true,
		},
		{
			name: "知乎",
			url: "www.zhihu.com",
			items: [
				//下载弹窗
				".ModalWrap",
				//悬浮按钮:App内打开
				".OpenInAppButton",
			],
		},
		{
			name: "知乎专栏",
			url: "zhuanlan.zhihu.com/p",
			items: [
				//悬浮按钮:App内打开
				".OpenInAppButton",
			],
		},
		{
			name: "百度贴吧",
			url: "tieba.baidu.com",
			items: [
				//悬浮按钮:打开百度贴吧
				".nav-bar-bottom",
			],
		},
		{
			name: "百家号",
			url: "baijiahao.baidu.com/s",
			items: [
				//下载弹窗
				".layer-wrap",
				//悬浮按钮:xxx独家语音
				".undefined",
			],
			overflow: true,
		},
		{
			name: "百度资讯",
			url: "m.baidu.com/sf_baijiahao",
			items: [
				//悬浮按钮:xxx独家语音
				".undefined",
			],
			overflow: true,
		},
		{
			name: "腾讯新闻",
			url: "xw.qq.com/cmsid",
			items: [
				//悬浮按钮:返回首页
				".go-home",
			],
		},
		{
			name: "腾讯视频",
			url: "m.v.qq.com",
			items: [
				//下载弹窗
				".at-app-banner",
				//打开APP查看高清内容
				".open_app_bottom",
			],
		},
		{
			name: "优酷视频",
			url: "youku.com",
			items: [
				//下载弹窗
				".callEnd_box",
				//悬浮按钮(主页):打开优酷APP更流畅
				".callEnd_fixed_box",
				//悬浮按钮:打开优酷APP更流畅
				".undefined",
				//悬浮按钮:红包
				".Corner-container",
			],
		},
		{
			name: "爱奇艺",
			url: "iqiyi.com/",
			items: [
				//下载弹窗
				".m-iqyGuide-layer",
				//打开爱奇艺APP,看精彩视频
				"[class^=ChannelHomeBanner]",
				//PC端:登录提示上侧
				".pl__1",
			],
		},
		{
			name: "好看视频",
			url: "haokan.baidu.com/v",
			items: [
				//悬浮按钮:打开好看app
				".open-app-button",
			],
		},
		{
			name: "百度搜索",
			url: "m.baidu.com",
			items: [
				//搜索结果:小程序
				"[srcid=xcx_multi]",
				//搜索结果:百度手机助手
				"[srcid=app_mobile_simple]",
				//搜索结果:百度手机助手:安全下载
				"[srcid=app_mobile_simple_safety]",
			],
		},
		{
			name: "哔哩哔哩",
			url: "m.bilibili.com",
			items: [
				//悬浮按钮:打开app,看你感兴趣的内容
				".m-home-float-openapp",
				//悬浮按钮:bilibili内打开
				".m-float-openapp",
				//PC端:登录提示(右下角)
				".lt-row",
				//pc端:播放器登录提示
				".bilibili-player-video-toast-bottom",
			],
		},
		{
			name: "B站文章",
			url: "bilibili.com/read/mobile",
			items: [
				//悬浮按钮:立即体验
				".h5-download-bar",
			],
		},
		{
			name: "丁香园",
			url: "3g.dxy.cn",
			items: [
				//悬浮按钮:APP内打开
				".wrap",
			],
		},
		{
			name: "微博",
			url: "m.weibo.cn",
			items: [
				//悬浮按钮:在微博内打开(百度热议)
				".app-btn-box",
				//悬浮按钮:登录/注册
				".login-btn",
				//小程序
				".wrap",
			],
		},
		{
			name: "西瓜视频",
			url: "ixigua.com",
			items: [
				//PC端:登录提示
				".loginBenefitNotification",
				//悬浮按钮:打开西瓜视频,看全网超清视频
				".xigua-download",
			],
		},
		{
			name: "抖音电脑版",
			url: "www.douyin.com",
			items: [
				//PC端:右上角登录提示
				".login-guide-container",
				//PC端:登陆后查看评论
				".recommend-comment-login",
			],
		},
		{
			name: "电子发烧友",
			url: "m.elecfans.com",
			items: [
				//悬浮按钮:主页右侧
				".hm_quick",
				//悬浮按钮:登陆/注册
				".login-reg-fixed",
				//悬浮按钮:上方打开app
				".open_app",
			],
		},
		{
			name: "观察者网",
			url: "guancha.cn",
			items: [
				//固定按钮:点击下载(顶部)
				".g_header44",
				//悬浮按钮:APP专享(底部)
				".g_swiper_container",
			],
		},
		{
			name: "凤凰新闻",
			url: "ifeng.com",
			items: [
				//固定按钮:立即打开(顶部)
				"[class^=header-]",
				//固定按钮:今天这条消息99%的人都不知道
				"[class^=headerIn-]",
				//悬浮按钮:打开(底部)
				"[class^=fixBottom-]",
				//悬浮按钮:立即打开(主页)
				"[class^=fixSlide-]",
			],
		},
		{
			name: "网易新闻",
			url: "3g.163.com/dy/article/",
			items: [
				//固定按钮:打开(底部)
				".widget-slider",
			],
		},
	];

	/**
	 * 主体部分
	 */
	for (website of websites) {
		if (location.href.indexOf(website.url) != -1) {
			//修复移动版页面不允许滑动
			if (website.overflow) {
				var css = document.createElement("style");
				css.innerText = "body{overflow: unset !important}";
				document.head.appendChild(css);
			}
			//隐藏/拦截骚扰元素
			for (var item of website.items) {
				var css = document.createElement("style");
				css.innerText += item + "{display: none !important}";
				document.head.appendChild(css);
			}
		}
	}
})();
