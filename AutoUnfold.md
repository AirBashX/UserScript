# AutoUnfold UserScript

[![GitHub license](https://img.shields.io/github/license/airbashX/UserScript.svg?style=flat-square&color=4285dd&logo=github)](https://github.com/airbashX/UserScript/)
[![GitHub Star](https://img.shields.io/github/stars/airbashX/UserScript.svg?style=flat-square&label=Star&color=4285dd&logo=github)](https://github.com/airbashX/UserScript/)
[![GitHub Fork](https://img.shields.io/github/forks/airbashX/UserScript.svg?style=flat-square&label=Fork&color=4285dd&logo=github)](https://github.com/airbashX/UserScript/)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/airbashX/UserScript/badge)](https://www.jsdelivr.com/package/gh/airbashX/UserScript)
[![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/zh-CN/users/698573-厌学的骚年)

## 相关功能

自动展开隐藏的内容(拦截悬浮弹窗需要安装我的另一个脚本[骚扰拦截](https://greasyfork.org/zh-CN/scripts/440871))

## 注意事项

本脚本在`1.3`版本之后将`骚扰拦截`+`悬浮图标`+`app弹窗`+`百度搜索小程序`+`登录提示`功能单独做成了[骚扰拦截](https://greasyfork.org/zh-CN/scripts/440871)脚本,以方便用户自行选择,有需求的同学可以去[骚扰拦截](https://greasyfork.org/zh-CN/scripts/440871)页面安装;

友情提示:两个脚本搭配使用效果更佳奥!

代码中尽量不使用正则表达式,以获得最佳体验

> 知乎官网默认不支持未登录查看内容了,暂无解决方案,需要登录后才能展开

## 相关脚本

| 名称                                                            | 功能                                                                   |
| :-------------------------------------------------------------- | :--------------------------------------------------------------------- |
| **[自动展开](https://greasyfork.org/zh-CN/scripts/438656)**     | 自动展开文章或新闻等`隐藏`、`折叠`部分                                 |
| **[骚扰拦截](https://greasyfork.org/zh-CN/scripts/440871)**     | 自动拦截`下载弹窗`、`悬浮按钮`、`登录弹窗`等影响用户体验的骚扰元素     |
| **[链接管理](https://greasyfork.org/zh-CN/scripts/443670)**     | 取消点击链接后跳转到安全页面                                           |
| **[移除复制后缀](https://greasyfork.org/zh-CN/scripts/472307)** | 移除复制后附带的`后缀`、`网站声明`                                     |
| **[自动切换主题](https://greasyfork.org/zh-CN/scripts/532308)** | 在用户设定的时间点，自动切换网站的`主题模式`，如`白天模式`与`黑夜模式` |

## 适配网站

| 网站名           | PC  | Phone | 其他功能   |
| ---------------- | --- | ----- | ---------- |
| CSDN             | ✔   | ✔     | 免关注查看 |
| CSDN 问答        | ✔   | ✔     |            |
| 编程之家         | ✔   | ✔     | 免验证查看 |
| 简书             | ✔   | ✔     |            |
| 知乎             | ✔   | ✔     | 仅限登陆后 |
| 百家号           | ✔   | ✔     |            |
| 百家资讯         | ✔   | ✔     |            |
| 百家百科         | ✔   | ✔     |            |
| 百度经验         | ✔   | ✔     |            |
| 百度知道         | ✔   | ✔     |            |
| 百度贴吧         | ✔   | ✔     |            |
| 百度文库         |     | ✔     |            |
| 百度题库         |     | ✔     |            |
| 百度新闻         | ✔   | ✔     |            |
| 新浪新闻         | ✔   | ✔     |            |
| 腾讯新闻         | ✔   | ✔     |            |
| 搜狐新闻         | ✔   | ✔     |            |
| 网易新闻         | ✔   | ✔     |            |
| 凤凰新闻         | ✔   | ✔     |            |
| 澎湃新闻         | ✔   | ✔     |            |
| 新京报           | ✔   | ✔     |            |
| 环球网           | ✔   | ✔     |            |
| 央广网           | ✔   | ✔     |            |
| 人民日报         | ✔   | ✔     |            |
| 人民网           | ✔   | ✔     |            |
| 中华网           | ✔   | ✔     |            |
| 今日头条         | ✔   | ✔     |            |
| 东方资讯         | ✔   | ✔     |            |
| 36 氪            | ✔   | ✔     |            |
| 果壳             | ✔   | ✔     |            |
| 虎扑             | ✔   | ✔     |            |
| 虎嗅             | ✔   | ✔     |            |
| 头条             | ✔   | ✔     |            |
| 丁香园           | ✔   | ✔     |            |
| 健康界           | ✔   | ✔     |            |
| 有来医生         | ✔   | ✔     |            |
| 哔哩哔哩         | ✔   | ✔     |            |
| B 站文章         | ✔   | ✔     |            |
| B 站笔记         | ✔   | ✔     |            |
| 微博文章         | ✔   |       | 免关注查看 |
| 豆瓣             | ✔   | ✔     |            |
| 豆瓣文章         | ✔   | ✔     |            |
| 开源中国         | ✔   | ✔     |            |
| 阿里云开发者社区 | ✔   | ✔     | 免关注查看 |
| 腾讯云开发者社区 | ✔   | ✔     | 免关注查看 |
| 华为云开发者社区 | ✔   | ✔     | 免关注查看 |
| 360 图书馆       | ✔   | ✔     |            |
| 太平洋电脑网     | ✔   | ✔     |            |
| 中关村在线       | ✔   | ✔     |            |
| 汽车之家         | ✔   | ✔     |            |
| 游侠网           | ✔   | ✔     |            |
| 游民星空         | ✔   | ✔     |            |
| 网易大神         | ✔   | ✔     |            |
| 360 文档         | ✔   | ✔     |            |
| 天眼查           | ✔   | ✔     |            |
| 天涯社区         | ✔   | ✔     |            |
| 新浪财经         | ✔   | ✔     |            |
| 东方财富网       | ✔   | ✔     |            |
| 喜马拉雅         | ✔   | ✔     |            |
| 古诗文网         | ✔   |       |            |
| it1352           | ✔   | ✔     | 免验证查看 |
| 淘嘟嘟           | ✔   | ✔     |            |
| 代码随想录       | ✔   | ✔     | 免验证查看 |
| 程序猿 DD        | ✔   | ✔     | 免验证查看 |
| 好网角收藏夹     | ✔   | ✔     | 免验证查看 |
| 科中资源网       | ✔   | ✔     |            |
| tofacebook       | ✔   | ✔     |            |

持续支持中...
