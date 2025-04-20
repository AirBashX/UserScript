// ==UserScript==
// @name         自动主题切换
// @namespace    https://github.com/AirBashX/UserScript
// @homepage     https://github.com/AirBashX/UserScript
// @version      25.04.20.03
// @description  根据用户设定时间段, 自动切换已适配网站的黑白主题
// @author       airbash / Rocy-June
// @match        *://*/*
// @icon
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @license      GPL-3.0
// ==/UserScript==

(function () {
  "use strict";

  // 日志函数
  const log = console.log.bind(console, "[AutoDarkMode Script]");
  const warn = console.warn.bind(console, "[AutoDarkMode Script]");
  const error = console.error.bind(console, "[AutoDarkMode Script]");

  log("脚本开始运行");

  // 设置对象
  const settings = {
    light_time: "08:00",
    dark_time: "18:00",
    light_menu_id: null,
    dark_menu_id: null,
  };

  // 初始化设置
  initSettings();

  // 所有适配的站点
  /* 
    {
      "domain (站点域名匹配, 防止后续匹配项过多, 提高加载速度)": [{
        url: 匹配站点正则,
        check: 检查当前主题函数(返回 "dark" 或 "light"),
        toggle: 切换主题函数(可选, 为 null 时 toLight 和 toDark 函数会被调用),
        toLight: 切换到明亮主题函数(可选, toggle 为 null 时必需设定),
        toDark: 切换到黑夜主题函数(可选, toggle 为 null 时必需设定),
        fastCheckTime: 未成功检查 / 切换主题前的检查主题间隔时间(可选, 为 null 时默认 1 秒),
        afterCheckTime: 无需切换或切换成功后, 再次检查主题间隔时间(可选, 为 null 时默认 10 秒),
      }]
    }

    tip: 
      如果新增站点有新的顶级域名, 
      记得同步增加到 sites 下方的 domain_suffixes  
  */
  const fastCheckDefaultTime = 200;
  const afterCheckDefaultTime = 10000;
  const sites = {
    // Pixiv
    "pixiv.net": [
      {
        url: /^https?:\/\/.*?pixiv\.net.*/,
        check: () =>
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "dark"
            : "light",
        toggle: () => {
          const button = document.querySelector(
            "button.ccl__sc-1lxyknw-0.hZvyDT.sc-pkfh0q-1.ikiFYU"
          );
          button.click();
          nextTick(() => {
            document
              .querySelector("div.sc-1o6692m-0.lerGVa.sc-gmfqyv-1.jdCrQO")
              .click();
            button.click();
          });
        },
      },
    ],
    // 风车动漫
    "fengchedmp.com": [
      {
        url: /^https?:\/\/.*?fengchedmp\.com.*/,
        check: () =>
          document
            .querySelector("#cssFile")
            .getAttribute("href")
            .includes("black")
            ? "dark"
            : "light",
        toLight: () => {
          document.querySelector("i.icon-rijian").click();
        },
        toDark: () => {
          document.querySelector("i.icon-yejian").click();
        },
      },
    ],
    // Wikipedia
    "wikipedia.org": [
      {
        url: /^https?:\/\/.*?wikipedia\.org.*/,
        check: () =>
          document.documentElement.classList.contains(
            "skin-theme-clientpref-night"
          )
            ? "dark"
            : "light",
        toLight: () => {
          document
            .getElementById("skin-client-pref-skin-theme-value-day")
            .click();
        },
        toDark: () => {
          document
            .getElementById("skin-client-pref-skin-theme-value-night")
            .click();
        },
      },
    ],
  };

  const domain_suffixes = [
    ".com.cn",
    ".com",
    ".org",
    ".net",
    ".edu",
    ".gov",
    ".cn",
  ];

  // 匹配到的域名设置
  const no_www_domain = getRootDomain(location.hostname);

  const domain_setting = sites[no_www_domain];
  if (!domain_setting) {
    log(`未找到适配的站点: ${no_www_domain}`);
    return;
  }

  // 匹配到的网站设置
  const site_setting = domain_setting.find((s) => s.url.test(location.href));
  if (!site_setting) {
    log(`未找到当前页面的适配操作`);
    return;
  }

  // 加载完成后开始检查主题
  addEventListener("load", () => {
    const timer = new Timer(
      checkFunc,
      site_setting.afterCheckTime || afterCheckDefaultTime
    );

    checkFunc();

    timer.start();

    function checkFunc() {
      try {
        checkTheme();
        timer.delay = site_setting.afterCheckTime || afterCheckDefaultTime;
        log("检查完成, 切换到慢速模式");
      } catch {
        timer.delay = site_setting.fastCheckTime || fastCheckDefaultTime;
        warn("检查失败, 切换到高速模式");
      }
    }
  });

  // 初始化设置
  function initSettings() {
    log("初始化设置");

    settings.light_time = GM_getValue("light_time", settings.light_time);
    settings.dark_time = GM_getValue("dark_time", settings.dark_time);

    refreshMenuCommand();
  }

  // 获取根域名
  function getRootDomain(domain) {
    for (const suffix of domain_suffixes) {
      if (!domain.endsWith(suffix)) {
        continue;
      }

      const index = domain.lastIndexOf(".", suffix.length);
      return domain.substring(index + 1);
    }
  }

  // 检查当前时间是否需要切换主题
  function checkTheme() {
    log("开始检查主题");

    const light_minutes = timeToMinutes(settings.light_time);
    const dark_minutes = timeToMinutes(settings.dark_time);

    const now = nowMinutes();

    const current_theme = site_setting.check();
    log(`当前主题：${current_theme}`);

    if (now >= light_minutes && now < dark_minutes) {
      if (current_theme === "light") {
        log("当前时间为明亮主题时间, 无需切换");
        return;
      }
      if (site_setting.toggle) {
        log("切换到明亮主题 - toggle");
        site_setting.toggle();
        log("切换完成");
        return;
      }
      if (site_setting.toLight) {
        log("切换到明亮主题 - toLight");
        site_setting.toLight();
        log("切换完成");
        return;
      }

      error("切换到明亮主题 - 未指定切换函数");
    } else {
      if (current_theme === "dark") {
        log("当前时间为黑夜主题时间, 无需切换");
        return;
      }
      if (site_setting.toggle) {
        log("切换到黑夜主题 - toggle");
        site_setting.toggle();
        log("切换完成");
        return;
      }
      if (site_setting.toDark) {
        log("切换到黑夜主题 - toDark");
        site_setting.toDark();
        log("切换完成");
        return;
      }

      error("切换到黑夜主题 - 未指定切换函数");
    }
  }

  // 刷新菜单
  function refreshMenuCommand() {
    log("刷新脚本菜单");

    if (settings.light_menu_id) {
      GM_unregisterMenuCommand(settings.light_menu_id);
    }
    if (settings.dark_menu_id) {
      GM_unregisterMenuCommand(settings.dark_menu_id);
    }

    settings.light_menu_id = GM_registerMenuCommand(
      `设置明亮时间 (${settings.light_time})`,
      () => setTimePrompt("light_time", "明亮时间")
    );
    settings.dark_menu_id = GM_registerMenuCommand(
      `设置黑夜时间 (${settings.dark_time})`,
      () => setTimePrompt("dark_time", "黑夜时间")
    );
  }

  // 设置时间提示框
  function setTimePrompt(key, label) {
    log(`设置${label}提示框`);

    const old_val = GM_getValue(key, settings[key]);

    log(`旧${label}：${old_val}`);

    const new_val = prompt(`设置${label}（格式 HH:mm）:`, old_val);
    log(`用户输入: ${new_val}`);
    if (!new_val) {
      return;
    }
    if (
      !new_val ||
      !/^(?:[0-9]|1[0-9]|2[0-3])[:：](?:[0-9]|[0-5][0-9])$/.test(new_val)
    ) {
      alert('格式不正确, 时间格式为 "08:00"');
      return;
    }
    const standard_new_val = new_val.replace("：", ":");

    log(`新${label}：${standard_new_val}`);

    const tmp = standard_new_val;
    settings[key] = standard_new_val;
    if (
      timeToMinutes(settings.light_time) > timeToMinutes(settings.dark_time)
    ) {
      log("黑夜时间不能早于明亮时间");

      settings[key] = tmp;
      alert("黑夜时间不能早于明亮时间");
      return;
    }

    GM_setValue(key, standard_new_val);

    log(`${label} 已设置为：${standard_new_val}`);

    alert(`${label} 已设置为：${standard_new_val}`);

    refreshMenuCommand();
  }

  // 将时间字符串转为分钟
  function timeToMinutes(time) {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  }

  // 获取当前时间的分钟数
  function nowMinutes() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  }

  // 将函数加入下一轮事件循环
  function nextTick(func) {
    Promise.resolve().then(func);
  }

  // 自建定时器
  class Timer {
    #timer = null;
    #func = null;
    delay = 0;

    constructor(func, delay) {
      this.#func = func;
      this.delay = delay;
    }

    start() {
      this.stop();
      this.#timer = setTimeout(() => {
        this.#func();
        this.start();
      }, this.delay);
    }

    stop() {
      clearTimeout(this.#timer);
    }
  }
})();
