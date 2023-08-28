// ==UserScript==
// @name         骚扰拦截
// @version      1.3.66
// @namespace    airbash/AnnoyancesInterception
// @homepageURL  https://github.com/AirBashX/UserScript
// @author       airbash
// @description  手机、电脑全平台通用:自动拦截或删除`下载弹窗`、`悬浮按钮`等影响用户体验的元素;长期维护:CSDN、简书、知乎、知乎专栏、百度搜索、百家号、百度贴吧、百度文库、百度新闻、新浪新闻、腾讯视频、优酷视频、爱奇艺、好看视频、哔哩哔哩、B站专栏、B站笔记、西瓜视频、抖音、丁香园、健康界、微博、新浪财经、东方财富网、电子发烧友、人民网、新京报、观察者网、澎湃新闻、凤凰新闻、网易新闻、今日头条、虎嗅、虎扑、豆瓣、中关村在线、太平洋电脑、太平洋汽车网、汽车之家、太平洋汽车网、taptap、it之家、360doc、开源中国、segmentfault、W3CSchool、阿里云开发者社区、腾讯云开发者社区、华为云开发者社区、36氪、雪球、天眼查、站酷、小红书、中国知网、装备前线、必应搜索
// @match        *://*.csdn.net/*
// @match      	 *://*.jianshu.com/*
// @match        *://juejin.cn/*
// @match        *://*.zhihu.com/*
// @match        *://tieba.baidu.com/*
// @match        *://baijiahao.baidu.com/s*
// @match        *://mbd.baidu.com/newspage/data/*
// @match        *://news.baidu.com/news*
// @match        *://m.baidu.com/sf_baijiahao/*
// @match        *://view.inews.qq.com/*
// @match        *://m.sohu.com/a/*
// @match        *://m.v.qq.com/*
// @match        *://*.youku.com/*
// @match        *://*.iqiyi.com/*
// @match        *://haokan.baidu.com/*
// @match        *://*.1905.com/*
// @match        *://*.baidu.com/*
// @match        *://*.bilibili.com/*
// @match        *://3g.dxy.cn/*
// @match        *://www.cn-healthcare.com/*
// @match        *://*.sina.cn/*
// @match        *://m.weibo.cn/*
// @match        *://wap.eastmoney.com/*
// @match        *://mguba.eastmoney.com/*
// @match        *://*.ixigua.com/*
// @match        *://www.douyin.com/*
// @match        *://m.elecfans.com/*
// @match        *://app.people.cn/*
// @match        *://m.bjnews.com.cn/detail/*
// @match        *://*.guancha.cn/*
// @match        *://m.thepaper.cn/newsDetail_forward*
// @match        *://*.ifeng.com/*
// @match        *://m.163.com/*/article/*
// @match        *://m.163.com/v/video/*
// @match        *://3g.163.com/*/article/*
// @match        *://3g.163.com/v/video/*
// @match        *://m.toutiao.com/article/*
// @match        *://www.toutiao.com/article/*
// @match        *://m.huxiu.com/*
// @match        *://m.hupu.com/*
// @match        *://m.douban.com/movie/subject/*
// @match        *://g.pconline.com.cn/*
// @match        *://m.zol.com.cn/*
// @match        *://wap.zol.com.cn/*
// @match        *://www.autohome.com.cn/*
// @match        *://*.m.autohome.com.cn/*
// @match        *://m.autohome.com.cn/*
// @match        *://m.pcauto.com.cn/*
// @match        *://www.taptap.cn/*
// @match        *://m.taptap.cn/*
// @match        *://m.ithome.com/*
// @match        *://www.360doc.com/content/*
// @match        *://www.oschina.net/*
// @match        *://developer.aliyun.com/article/*
// @match        *://huaweicloud.csdn.net/*
// @match        *://m.36kr.com/p/*
// @match        *://xueqiu.com/*
// @match        *://segmentfault.com/q/*
// @match        *://www.w3cschool.cn/*
// @match        *://m.tianyancha.com/*
// @match        *://*.zcool.com.cn/*
// @match        *://m.ximalaya.com/*
// @match        *://www.xiaohongshu.com/*
// @match        *://wap.cnki.net/*
// @match        *://www.zfrontier.com/*
// @icon         data:image/png;base64,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
// @run-at       document-body
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function () {
	"use strict";

	/**
	 * 规则列表
	 * @type {name/url/items}
	 */
	const websites = [
		{
			name: "CSDN",
			url: "csdn.net",
			items: [
				//下载弹窗
				".weixin-shadowbox",
				//悬浮按钮:打开:狐猴浏览器中的bug
				".feed-Sign-weixin",
				//悬浮按钮:APP内打开+登录/打开注册(主页)
				".feed-Sign-span",
				//PC端:弹窗:学生认证
				"#csdn-highschool-window",
				//PC端:登录弹窗(固定)
				"#csdn-toolbar-profile-nologin",
				//PC端:登录弹窗(悬浮)
				//".passport-login-container",
			],
			fun: function () {
				/**
				 * PC端:屏蔽登录弹窗
				 * @param      {<list>}  mutationsList  The mutations list
				 */
				let removeLoginNotice = function (mutationsList) {
					for (let mutation of mutationsList) {
						for (let node of mutation.addedNodes) {
							if (document.querySelector(".passport-login-container")) {
								//有登陆弹窗时:模拟点击关闭按钮
								let button = node.querySelector("span");
								if (button) {
									if (LoginFlag == true) {
										button.click();
									} else {
										LoginFlag = true;
									}
									return;
								}
							}
						}
					}
				};

				//是否拦截:默认拦截
				let LoginFlag = true;
				document.onreadystatechange = function () {
					if (document.readyState === "interactive") {
						let loginBtn = document.querySelector(".toolbar-btn-login>.toolbar-btn-loginfun");
						//未登录:
						if (loginBtn) {
							//添加事件,不拦截
							loginBtn.addEventListener("click", function () {
								LoginFlag = false;
							});
							//执行监听
							let observer = new MutationObserver(removeLoginNotice);
							observer.observe(document, { childList: true, subtree: true });
						}

						if (document.querySelector(".toolbarBack")) {
							let css = document.createElement("style");
							css.innerText += ".passport-login-container {display: none !important}";
							document.head.append(css);
						}
					}
				};
			},
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
		},
		{
			name: "掘金",
			url: "juejin.cn",
			items: [
				//悬浮按钮:APP内打开
				".open-button",
				//下载弹窗
				".byte-drawer",
				//PC端:登录弹窗(右下角)
				".login-guide-wrap",
				//PC端:下方拓展弹窗(未知)
				".recommend-box",
				//PC端:登录弹窗(未知)
				".login-popover",

			],
			overflow: true,
		},
		{
			name: "知乎手机版",
			url: "zhihu.com",
			items: [
				//悬浮按钮:打开知乎(主页),打开
				".OpenInAppButton",
			],
		},
		{
			name: "知乎PC版发现页",
			url: "zhihu.com",
			items: [
				//固定按钮:登录一下
				".ExploreHomePage-specialsLogin",
			],
			fun: function () {
				onload = function () {
					//热点和问题高度保持一致
					let items = document.querySelectorAll(".ExploreHomePage-square > div");
					items[2].style.margin = "0px";

					//拦截登录弹窗
					let loginBtn = document.querySelector(".AppHeader-profile button");
					if (loginBtn) {
						//未登录:执行监听
						let observer = new MutationObserver(removeLoginNotice);
						observer.observe(document, { childList: true, subtree: true });
					}
				};
				/**
				 * Removes a login notice.
				 *
				 * @param      {MutationRecord[]}  mutationsList  The mutations list
				 * @param      {MutationObserver}  observer       The observer
				 */
				let removeLoginNotice = function (mutationsList) {
					for (let mutation of mutationsList) {
						for (let node of mutation.addedNodes) {
							if (getXpath('//button[text()="立即登录/注册"]', node)) {
								getXpath('//button[text()="立即登录/注册"]', node).parentElement.parentElement.remove();
							}
						}
					}
				};
			},
		},
		{
			name: "知乎PC版",
			url: "www.zhihu.com/question",
			items: [],
			fun: function () {
				/**
				 * PC端:屏蔽登录弹窗
				 * @param      {<list>}  mutationsList  The mutations list
				 */
				let removeLoginNotice = function (mutationsList) {
					for (let mutation of mutationsList) {
						for (let node of mutation.addedNodes) {
							if (node.querySelector(".signFlowModal")) {
								//有登陆弹窗1时:模拟点击关闭按钮
								let button = node.querySelector(".Button.Modal-closeButton.Button--plain");
								if (button) {
									if (LoginFlag == true) {
										button.click();
									} else {
										LoginFlag = true;
									}
									return;
								}
							}
							if (getXpath('//button[text()="立即登录/注册"]', node)) {
								//没有登录弹窗1时会出现弹窗2
								getXpath('//button[text()="立即登录/注册"]', node).parentElement.parentElement.remove();
							}
						}
					}
				};

				//是否拦截:默认拦截
				let LoginFlag = true;
				document.onreadystatechange = function () {
					onload = function () {
						let loginBtn = document.querySelector(".AppHeader-profile button");
						//未登录:添加事件,不拦截
						loginBtn.addEventListener("click", function () {
							LoginFlag = false;
						});
					};
					if (document.readyState === "interactive") {
						let loginBtn = document.querySelector(".AppHeader-profile button");

						if (loginBtn) {
							//未登录:执行监听
							let observer = new MutationObserver(removeLoginNotice);
							observer.observe(document, { childList: true, subtree: true });
						}
					}
				};
			},
		},
		{
			name: "知乎专栏",
			url: "zhuanlan.zhihu.com/p/",
			fun: function () {
				/**
				 * PC端:屏蔽登录弹窗
				 * @param      {<list>}  mutationsList  The mutations list
				 */
				let removeLoginNotice = function (mutationsList) {
					for (let mutation of mutationsList) {
						for (let node of mutation.addedNodes) {
							if (node.querySelector(".signFlowModal")) {
								//有登陆弹窗1时:模拟点击关闭按钮
								let button = node.querySelector(".Button.Modal-closeButton.Button--plain");
								if (button) {
									if (LoginFlag == true) {
										button.click();
									} else {
										LoginFlag = true;
									}
									return;
								}
							} else if (getXpath('//button[text()="立即登录/注册"]', node)) {
								//没有登录弹窗1时会出现弹窗2
								getXpath('//button[text()="立即登录/注册"]', node).parentElement.parentElement.remove();
							}
						}
					}
				};

				//是否拦截:默认拦截
				let LoginFlag = true;
				document.onreadystatechange = function () {
					if (document.readyState === "interactive") {
						let loginBtn = document.querySelector(".ColumnPageHeader-profile button");
						let loginCls;
						try {
							loginCls = loginBtn.getAttribute("class").includes("Button");
						} catch (error) {
							/* empty */
						}

						if (loginCls) {
							//未登录:添加事件,不拦截
							loginBtn.addEventListener("click", function () {
								LoginFlag = false;
							});
							//未登录:执行监听
							let observer = new MutationObserver(removeLoginNotice);
							observer.observe(document, { childList: true, subtree: true });
						}
					}
				};
			},
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
			name: "百度文库1",
			url: "/wk.baidu.com/view/",
			items: [
				//悬浮按钮(上方):百度文库
				".wk-student-defense",
			],
		},
		{
			name: "百度文库2",
			url: "tanbi.baidu.com/h5apptopic/browse/",
			items: [
				//悬浮按钮(上方):百度文库
				".wk-student-limit-jump",
				".bartop",
				//悬浮按钮(下方):下载App,继续阅读
				".wk-bottom-btn",
			],
		},
		{
			name: "百家号",
			url: "baijiahao.baidu.com/s",
			items: [
				//悬浮按钮:百度APP内打开
				"#bdrainrwDragButton",
				//下载弹窗
				//".layer-wrap",
				//悬浮按钮:xxx独家语音
				//".undefined",
			],
		},
		{
			name: "百度资讯",
			url: "mbd.baidu.com/newspage/data",
			items: [
				//悬浮按钮:百度APP内打开
				"#bdrainrwDragButton",
				//悬浮按钮:百度APP内播放
				".drag-bottom",
			],
		},
		{
			name: "腾讯新闻",
			url: "view.inews.qq.com/",
			items: [
				//悬浮按钮:返回首页
				"[class^=downloader-floating-bar_floatingRight__]",
				"[class^=video-bottom-bar_newsOpen__]",
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
			url: "haokan.baidu.com/",
			items: [
				//悬浮按钮:打开好看app(中间)
				".open-app-button",
				//固定文字:打开APP(多)
				".top-video-card-img-app",
				//固定按钮:下载APP(视频播放时)
				".video-player-download-tips",
				//固定按钮:打开(底部)
				".open-app-bottom",
				//PC端固定按钮:下载APP(视频暂停时)
				".player-lefttip-inner",
				//PC端登录提示:登录提示
				"#passport-login-pop",
				//PC端登录提示:朦胧背板
				".pop-mask",
				//PC端登录提示:悬浮提示
				".page-top-rightinfo-popover",
			],
		},
		{
			name: "m1905电影网",
			url: "1905.com/",
			items: [
				//悬浮弹窗:打开app
				"#popupModule",
				//悬浮按钮:
				".open-link"
			],
		},
		{
			name: "百度搜索",
			url: "baidu.com",
			items: [
				//搜索结果:小程序
				"[srcid=xcx_multi]",
				//搜索结果:百度手机助手
				"[srcid=app_mobile_simple]",
				//搜索结果:百度手机助手:安全下载
				"[srcid=app_mobile_simple_safety]",
				//搜索结果:百度应用搜索(IOS)
				"[srcid=app_mobile_ios]",
			],
		},
		{
			name: "哔哩哔哩",
			url: "bilibili.com",
			items: [
				//悬浮按钮:打开app,看你感兴趣的内容(主页)
				".m-home-float-openapp",
				//悬浮按钮:打开app(UP主页)
				".m-space-float-openapp",
				//悬浮按钮:打开app,看高清内容(视频全屏)
				".mplayer-widescreen-callapp",
				//悬浮按钮:bilibili内打开(底部)
				".m-float-openapp",
				//悬浮弹窗:bilibili内打开
				".openapp-dialog",
				//固定按钮：播放时下载
				".mplayer-widescreen-callapp",
				//PC端:登录提示(右下角)
				".lt-row",
				//PC端:登录提示(右上角)
				".login-panel-popover:has(.login-tip-content)",
				//PC端:登录提示(播放器)
				".bpx-player-toast-wrap",
				//PC端:登录提示(右上角)
				"div:has(.unlogin-popover-avatar)",
				//PC端:滑动提示(正下方:首次)
				".trial-feed-wrap"
			],
			fun: function () {
				let LoginFlag = true;
				let add;
				function mutationCallback(record, observer) {
					//已确定登录:停止监听
					let login = document.querySelector(".header-entry-mini");
					if (login) {
						observer.disconnect();
					}
					//已确定未登录:执行函数
					let loginBtn = document.querySelector(".header-login-entry");
					if (loginBtn) {
						if (!add) {
							console.log("脚本注入成功");
							//添加事件:不拦截
							loginBtn.addEventListener("click", function () {
								LoginFlag = false;
							});
							add = true;
						}
						for (let arr of record) {
							for (let node of arr.addedNodes) {
								let button;
								try {
									button = node.querySelector(".bili-mini-close-icon");
								} catch (error) {
									/* empty */
								}
								if (button) {
									//有登陆弹窗时:模拟点击关闭按钮
									if (LoginFlag == true) {
										console.log(LoginFlag);
										console.log("自动拦截");
										button.click();

										console.log("恢复播放");
										let video = document.querySelector(".bpx-player-video-wrap video");
										video.play();
									} else {
										console.log(LoginFlag);
										console.log("手动拦截");
										LoginFlag = true;
									}
									return;
								}
							}
						}
					}
				}
				let observer = new MutationObserver(mutationCallback);
				observer.observe(document, { childList: true, subtree: true });
			},
		},
		{
			name: "B站专栏",
			url: "bilibili.com/read/",
			items: [
				//悬浮按钮:打开App,看更多精彩内容
				".float-btn",
				//PC端:登录提示
				"div:has(.unlogin-popover-avatar)",
			],
		},
		{
			name: "B站笔记",
			url: "bilibili.com/opus/",
			items: [
				//悬浮按钮:打开App,看更多精彩内容
				".float-btn",
				//悬浮弹窗:打开APP
				".openapp-dialog",
				//PC端:登录提示
				"div:has(.unlogin-popover-avatar)",
			],
		},
		{
			name: "西瓜视频",
			url: "ixigua.com",
			items: [
				//打开弹窗:打开
				".landing_guide",
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
				//PC端:登录提示
				".login-mask-enter-done",
			],
		},
		{
			name: "丁香园",
			url: "3g.dxy.cn",
			items: [
				//悬浮按钮:APP内打开
				"[class^=fixedBtn]",
				//悬浮按钮:App内打开(主页)
				".wrap",
			],
		},
		{
			name: "健康界",
			url: "www.cn-healthcare.com/",
			items: [
				//悬浮按钮:打开(底部滚动)
				"footer",
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
			name: "新浪新闻",
			url: "sina.cn/",
			items: [
				//悬浮按钮:打开APP
				".callApp_fl_btn",
			],
		},
		{
			name: "新浪财经",
			url: "sina.cn/",
			items: [
				//悬浮弹窗:立即更新(主页:首次访问)
				"#SFA_newVersion_pop",
				//悬浮按钮:打开App中查看(主页:底部)
				".m-client-call2",
				//固定按钮:立即登录(主页:资讯)
				".login-box",
				//悬浮按钮:立即查看(资讯:底部,首次访问)
				".wap-msg-bar-wap",
				//悬浮按钮:去APP听语音播报(资讯:中间)
				".broadcast",
				//悬浮按钮:打开APP(资讯:顶部,有bug)
				".m-sentiment-blk",
				//悬浮按钮:打开APP(资讯:底部)
				".m-guss-caijing",
				//固定按钮:立即体验(资讯:底部)
				"#norm_qrcode_link_auto",
				//悬浮按钮:打开APP(子栏1:底部)
				"#subPage_bottom_callup_btn",
				//悬浮按钮:打开APP(子栏2:底部)
				"#__callup_bottom_new",
				//悬浮按钮:打开APP(子栏2:顶部,有bug)
				".js-app-header",
			],
			fun: function () {
				//修复上述规则产生的bug
				let inter = setInterval(() => {
					let item = document.querySelector(".compatibility-mode");
					if(item.style.marginTop=="0px"){
						clearInterval(inter);
					}else{
						item.style.marginTop = "0px";
					}
				}, 1000);
			},
		},
		{
			name: "东方财富网",
			url: "wap.eastmoney.com/",
			items: [
				//悬浮按钮:打开APP(顶部)
				".fixed_top",
				//固定按钮:下载(主页:顶部)
				"#IndexDT",
				//悬浮按钮:打开下载(主页:顶部)
				".emwapas_xldt_fixed",
				//悬浮按钮:打开APP(主页:底部)
				".open-inapp",
			],
		},
		{
			name: "东方财富网:股吧",
			url: "mguba.eastmoney.com/",
			items: [
				//悬浮弹窗:打开APP
				"#appbox",
				//悬浮按钮:东方财富APP内打开(底部)
				"#open_app",
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
			name: "人民网",
			url: "app.people.cn",
			items: [
				//悬浮按钮:打开(底部)
				".app-bot-wrap",
			],
		},
		{
			name: "新京报",
			url: "m.bjnews.com.cn/detail/",
			items: [
				//悬浮按钮:立即打开(顶部)
				".xjb-top",
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
			name: "澎湃新闻",
			url: "m.thepaper.cn/newsDetail_forward",
			items: [
				//悬浮按钮:新闻滚条(底部)
				"[class^=index_footer_banner]",
				"[.index_footer_banner__Mcr_R]",
			],
		},
		{
			name: "凤凰新闻",
			url: "ifeng.com",
			items: [
				//悬浮按钮:立即打开(主页)
				"[class^=fixSlide-]",
				//悬浮按钮:滚动新闻(底部)
				"[class^=bottom_box-]",
				//固定按钮:立即打开(财经顶部)
				"[class^=header-]",
				//固定按钮:过去24小时...(财经顶部)
				"[class^=headerIn-]",
				//悬浮按钮:滚动新闻(财经底部)
				"[class^=fixBottom-]",
			],
		},
		{
			name: "网易新闻",
			url: "3g.163.com",
			items: [
				//固定按钮：App内打开(底部)
				".backflow-floating",
			],
		},
		{
			name: "网易新闻",
			url: "m.163.com",
			items: [
				//固定按钮：App内打开(底部)
				".backflow-floating",
			],
		},
		{
			name: "搜狐",
			url: "m.sohu.com/a/",
			items: [
				//悬浮按钮:打开APP
				"#CallAppContainer",
				".CallAppContainer",
			],
		},
		{
			name: "今日头条移动端",
			url: "m.toutiao.com/article/",
			items: [
				//悬浮按钮：App内打开(底部)
				".float-activate-button-container",
				".download-bar__container",
			],
		},
		{
			name: "今日头条PC端",
			url: "www.toutiao.com/article/",
			items: [
				//PC端:悬浮弹窗:添加今日头条到电脑桌面
				".ttp-message-wrapper",
			],
		},
		{
			name: "虎嗅",
			url: "m.huxiu.com",
			items: [
				//悬浮按钮:go!(主页)
				".guide-wrap",
				//悬浮按钮:打开(顶部)
				".js-top-fixed",
				//悬浮按钮:打开(底部)
				".bottom-open-app-btn",
			],
		},
		{
			name: "虎扑",
			url: "m.hupu.com",
			items: [
				//悬浮按钮:App内打开
				".open-hupu",
			],
		},
		{
			name: "豆瓣",
			url: "m.douban.com/movie/subject",
			items: [
				//固定按钮:用App打开(电影详情页)
				".subject-banner",
			],
		},
		{
			name: "太平洋电脑",
			url: "g.pconline.com.cn",
			items: [
				//悬浮按钮:打开app(底部)
				".btnForAppOpenImg",
				//悬浮按钮:打开知科技App
				".btnForAppOpenA",
				//固定按钮:立即打开(底部)
				".WakeUptop",
			],
		},
		{
			name: "中关村在线",
			url: "m.zol.com.cn",
			items: [
				//悬浮按钮:打开APP
				".cover-back_s",
				//悬浮按钮:APP内打开
				"#bottom-fixed-wrapper > span",
			],
		},
		{
			name: "中关村在线2(报价+论坛)",
			url: "wap.zol.com.cn",
			items: [
				//悬浮按钮:打开APP
				".cover-back_s",
				//悬浮按钮:APP内打开
				"#bottom-fixed-wrapper > span",
			],
		},
		{
			name: "汽车之家PC版",
			url: "www.autohome.com.cn",
			items: [
				//悬浮按钮:登录提示(PC端)
				"#loginGuide",
			],
		},
		{
			name: "汽车之家移动版",
			url: "m.autohome.com.cn",
			items: [
				//悬浮按钮: App内打开
				"#float_new_button",
			],
		},
		{
			name: "太平洋汽车",
			url: "m.pcauto.com.cn/",
			items: [
				//悬浮弹窗: App内打开
				"#home-bottom-half-dialog",
				//悬浮按钮: 轮播评论
				"#dmListOuter",
			],
		},
		{
			//www.taptap.com
			name: "taptap",
			url: "www.taptap.cn",
			items: [
				//悬浮按钮:打开taptap
				".open-app-button",
			],
		},
		{
			//m.taptap.com
			name: "taptap",
			url: "m.taptap.cn",
			items: [
				//悬浮按钮:打开taptap查看更多精彩内容
				".app-download__wrapper",
				//苹果端:悬浮按钮:添加到桌面
				".show-add-to-screen",
				//苹果端:固定按钮:添加到桌面
				".add-to-screen-wrap",
			],
		},
		{
			//https://m.ithome.com/
			name: "it之家",
			url: "m.ithome.com",
			items: [
				//固定按钮(底部):立即打开
				".open-app-banner",
			],
		},
		{
			//PC版:http://www.360doc.com/content/20/0717/15/60244337_924865821.shtml
			name: "360docPC版",
			url: "www.360doc.com/content/",
			items: [
				//登录弹窗
				"iframe",
				//登录弹窗:朦胧模板
				"iframe~div",
			],
		},
		{
			name: "开源中国",
			url: "www.oschina.net",
			items: [
				//悬浮按钮(底部):立即打开
				".app-download-banner-box",
			],
		},
		{
			name: "segmentfault思否",
			url: "segmentfault.com/q",
			items: [
				//登录弹窗
				".modal-dialog-centered",
			],
		},
		{
			name: "阿里云开发者社区",
			url: "developer.aliyun.com/article/",
			items: [
				//阿里云App内打开
				".app-fixed-btn",
			],
		},
		{
			name: "华为云开发者社区",
			url: "huaweicloud.csdn.net/",
			items: [
				//加入社区
				".user-desc-fix",
			],
		},
		{
			//https://m.36kr.com/p/1964588951470856
			name: "36氪",
			url: "m.36kr.com/p/",
			items: [
				//悬浮按钮(顶部):打开
				".article-top-swiper-goapp",
			],
		},
		{
			name: "雪球",
			url: "xueqiu.com/",
			items: [
				//悬浮按钮:打开app(文章)
				"#openapp__fix",
			],
			fun: function () {
				//悬浮按钮:打开app(主页)
				document.onreadystatechange = function () {
					if (document.readyState === "complete") {
						document.querySelector("[class^=FloatDownloadButton_mobile_openapp__fix_]").remove();
					}
				};
			},
		},
		{
			name: "天眼查",
			url: "m.tianyancha.com/",
			items: [
				//悬浮按钮:打开app(主页)
				".swiper-container",
				//悬浮按钮:下载APP(企业)
				"#banner_mobile_v2",
			],
		},
		{
			name: "站酷移动版",
			url: "m.zcool.com.cn/",
			items: [
				//悬浮按钮:打开app(主页)
				".bottom-App",
				//悬浮按钮:打开app
				"[class^=wapHeader_footer-button]",
			],
		},
		{
			name: "站酷PC版",
			url: "www.zcool.com.cn/",
			items: [
				//登录按钮
				".sideUnlogin",
			],
			fun: function () {
				let mo = new MutationObserver(function (mutations) {
					for (let mutation of mutations) {
						for (let node of mutation.addedNodes) {
							let button;
							try {
								button = node.querySelector(".modal__close ");
							} catch (error) {
								/* empty */
							}
							if (button) {
								button.click();
								console.log("关闭成功");
							}
						}
					}
				});
				mo.observe(document, { childList: true, subtree: true });
			},
		},
		{
			//https://www.xiaohongshu.com/discovery/item/636cbbc1000000001c03c332
			name: "小红书",
			url: "www.xiaohongshu.com",
			items: [
				//App内打开(视频)
				".bottom-button-box",
				//App内打开(笔记)
				".bottom-bar",
			],
		},
		{
			name: "喜马拉雅",
			url: "m.ximalaya.com/",
			items: [
				//悬浮按钮:打开APP,完整收听1
				".album-btn-container",
				//悬浮按钮:打开APP,完整收听2
				".btn-open",
				//打开APP2
				".downloadButton",
			],
		},
		{
			//https://wap.cnki.net/touch/web/Journal/Article/WLAQ202302061.html
			name: "中国知网",
			url: "wap.cnki.net/",
			items: [
				//App内打开
				".Appopen",
				//滚动新闻
				"#fix-bottom",
			],
		},
		{
			name: "zfrontier",
			url: "www.zfrontier.com",
			items: [
				//App内打开
				".app-opener",
			],
		},
		{
			name: "必应搜索",
			url: "bing.com",
			items: [
				//必应中打开(Chrome中专属)
				".bnp_rich_div_visible",
			],
		},
		{
			name: "w3cschool",
			url: "www.w3cschool.cn/",
			items: [],
			fun: function () {
				//复制文件时的弹窗
				onload = function () {
					let mo = new MutationObserver(function (mutations) {
						for (let mutation of mutations) {
							for (let node of mutation.addedNodes) {
								if (node.nodeName == "DIV" && node.className == "") {
									node.style.display = "none";
								}
							}
						}
					});
					mo.observe(document, { childList: true, subtree: true });
				};
			},
		},
	];

	/**
	 * 主体部分
	 */
	for (let website of websites) {
		if (location.href.indexOf(website.url) != -1) {
			//隐藏/拦截骚扰元素
			if (website.items) {
				for (let item of website.items) {
					let css = document.createElement("style");
					css.innerText += item + "{display: none !important}";
					document.head.append(css);
				}
			}
			//修复移动版页面不允许滑动
			if (website.overflow) {
				let cssVlaue = document.createElement("style");
				cssVlaue.innerText = "body{overflow: unset !important}";
				document.head.appendChild(cssVlaue);
			}
			//执行额外方案
			if (website.fun) {
				website.fun();
			}
		}
	}

	/**
	 * 通过内容(xpath)获取节点
	 *
	 * @param      {<string>}  xpath   内容
	 * @param      {<Node>}  parent  父元素
	 * @return     {<Node>}  元素
	 */
	function getXpath(xpath, parent) {
		let xpathResult = document.evaluate(xpath, parent || document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
		return xpathResult.singleNodeValue;
	}
})();
