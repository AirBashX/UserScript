// ==UserScript==
// @name         自动主题切换
// @namespace    airbash/Rocy-June/AutoDarkMode
// @homepage     https://github.com/AirBashX/UserScript
// @version      25.04.21.01
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

  // 失败检测计数器
  let fail_count = 0;
  // 失败检查时间间隔, 单位: 毫秒
  let fail_check_time = 10000;

  const sim_events = {
    pointer_down: () =>
      new PointerEvent("pointerdown", {
        isTrusted: true,
        bubbles: true,
        cancelable: true,
        pointerType: "mouse",
      }),
  };

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
          $html().getAttribute("data-theme") === "dark" ? "dark" : "light",
        toggle: async () => {
          const button = $single(
            "button.ccl__sc-1lxyknw-0.hZvyDT.sc-pkfh0q-1.ikiFYU"
          );
          button.click();

          await $nextTick(() => {
            $single("div.sc-1o6692m-0.lerGVa.sc-gmfqyv-1.jdCrQO").click();
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
          $single("#cssFile").getAttribute("href").includes("black")
            ? "dark"
            : "light",
        toLight: () => {
          $single("i.icon-rijian").click();
        },
        toDark: () => {
          $single("i.icon-yejian").click();
        },
      },
    ],
    // Wikipedia
    "wikipedia.org": [
      {
        url: /^https?:\/\/.*?wikipedia\.org.*/,
        check: () =>
          $html().classList.contains("skin-theme-clientpref-night")
            ? "dark"
            : "light",
        toLight: () => {
          $single("#skin-client-pref-skin-theme-value-day").click();
        },
        toDark: () => {
          $single("#skin-client-pref-skin-theme-value-night").click();
        },
      },
    ],
    "chatgpt.com": [
      {
        url: /^https?:\/\/.*?chatgpt\.com.*/,
        check: () => ($html().classList.contains("dark") ? "dark" : "light"),
        toLight: async () => {
          $single(
            "#conversation-header-actions>button:last-child"
          ).dispatchEvent(sim_events.pointer_down());
          (
            await $singleAsync("div[data-radix-popper-content-wrapper]")
          ).style.opacity = 0;

          $single("div[data-testid=settings-menu-item]").click();
          (
            await $singleAsync("div[data-testid=modal-settings]")
          ).style.opacity = 0;

          $single(
            "div.flex.items-center.justify-between button[role=combobox]"
          ).dispatchEvent(sim_events.pointer_down());
          (
            await $singleAsync("div[data-radix-popper-content-wrapper]")
          ).style.opacity = 0;

          $single(
            "div[data-radix-select-viewport] div[role=option]:nth-child(3)"
          ).click();
          $single("button[data-testid=close-button]").click();
        },
        toDark: async () => {
          $single(
            "#conversation-header-actions>button:last-child"
          ).dispatchEvent(sim_events.pointer_down());
          (
            await $singleAsync("div[data-radix-popper-content-wrapper]")
          ).style.opacity = 0;

          $single("div[data-testid=settings-menu-item]").click();
          (
            await $singleAsync("div[data-testid=modal-settings]")
          ).style.opacity = 0;

          $single(
            "div.flex.items-center.justify-between button[role=combobox]"
          ).dispatchEvent(sim_events.pointer_down());
          (
            await $singleAsync("div[data-radix-popper-content-wrapper]")
          ).style.opacity = 0;

          $single(
            "div[data-radix-select-viewport] div[role=option]:nth-child(2)"
          ).click();
          $single("button[data-testid=close-button]").click();
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
  addEventListener("load", async () => {
    const timer = new Timer(
      checkFunc,
      site_setting.afterCheckTime || afterCheckDefaultTime
    );

    await checkFunc();

    timer.start();

    async function checkFunc() {
      try {
        await checkTheme();
        fail_count = 0;
        timer.delay = site_setting.afterCheckTime || afterCheckDefaultTime;
        log("检查/操作完成, 切换到慢速模式");
      } catch (ex) {
        fail_count++;
        if (
          fail_count >=
          fail_check_time / (site_setting.fastCheckTime || fastCheckDefaultTime)
        ) {
          timer.delay = site_setting.afterCheckTime || afterCheckDefaultTime;
          error("失败超出时长限制, 切换到慢速模式");
          return;
        }

        timer.delay = site_setting.fastCheckTime || fastCheckDefaultTime;
        warn("检查/操作失败, 切换到高速模式", ex);
      }
    }
  });

  // 查找元素, 用法类似于 jQuery
  function $single(selector) {
    return document.querySelector(selector);
  }

  /*
    类似 jQuery 的元素查找函数

    适用于连续操作中可能影响用户操作体验的场景, 该方式会尽可能在渲染的同一帧内找到该 DOM 元素,
    以缩短元素变更对用户交互的干扰时间 (如弹窗在显示帧立即点击关闭按钮)
    
    与 $singleIntervalAsync 不同的是, 本函数每一帧都会进行查询, 因此可能对性能造成一定影响
    如果操作不会显著影响用户体验, 则推荐使用 $singleIntervalAsync
  */
  function $singleAsync(selector, timeout = 1000) {
    return $promise(async (resolve, reject) => {
      const start = Date.now();
      while (Date.now() - start < timeout) {
        const ele = $single(selector);
        if (ele) {
          resolve(ele);
          return;
        }

        await $nextFrame();
      }

      reject(new Error("Timeout"));
    });
  }

  /*
    类似 jQuery 的元素查找函数
    
    适用于不会改变页面结构、或不影响用户操作体验的场景
    使用自定义 Timer 以固定间隔查询元素, 性能开销较小, 但查找速度相对较慢

    与 $singleAsync 不同的是, 该函数通过节流方式降低性能消耗,
    更适合异步检查某些静态区域元素是否已加载完成等情况
  */
  function $singleIntervalAsync(selector, interval = 100, timeout = 1000) {
    return $promise(async (resolve, reject) => {
      const start = Date.now();
      const timer = new Timer(() => {
        const ele = $single(selector);
        if (ele) {
          resolve(ele);
          timer.stop();
          return;
        }
        if (Date.now() - start >= timeout) {
          reject(new Error("Timeout"));
          timer.stop();
          return;
        }
      }, interval);
      timer.start(true);
    });
  }

  function $all(selector) {
    return document.querySelectorAll(selector);
  }

  function $html() {
    return document.documentElement;
  }

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
  async function checkTheme() {
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
        await site_setting.toggle();
        log("切换完成");
        return;
      }
      if (site_setting.toLight) {
        log("切换到明亮主题 - toLight");
        await site_setting.toLight();
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
        await site_setting.toggle();
        log("切换完成");
        return;
      }
      if (site_setting.toDark) {
        log("切换到黑夜主题 - toDark");
        await site_setting.toDark();
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
  function $nextTick(func) {
    return Promise.resolve().then(() => {
      func();
    });
  }

  // 等待下一帧
  function $nextFrame(func) {
    return new Promise((resolve) => {
      requestAnimationFrame((timestamp) => {
        func?.(timestamp);
        resolve(timestamp);
      });
    });
  }

  // 异步函数返回 Promise
  function $promise(func) {
    return new Promise((resolve, reject) => {
      try {
        func(resolve, reject);
      } catch (ex) {
        reject(ex);
      }
    });
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

    start(immediate = false) {
      this.stop();

      let start_new = async () => {
        if (immediate) {
          await this.#func();
        }

        this.#timer = setTimeout(async () => {
          await this.#func();
          this.start();
        }, this.delay);
      };
      start_new();
    }

    stop() {
      clearTimeout(this.#timer);
    }
  }
})();
