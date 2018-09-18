(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("ul",[s("li",[s("a",{ref:"noopener noreferrer",attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/source-installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("源码安装"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{ref:"noopener noreferrer",attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/using-systemd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Systemd"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{ref:"noopener noreferrer",attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/source-configuration-options.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("编译选项"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{ref:"noopener noreferrer",attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("my.cnf")]),e._v(" 配置文件说明"),s("OutboundLink")],1)])]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("首先我们打开「"),s("a",{ref:"noopener noreferrer",attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL 5.7 下载页面"),s("OutboundLink")],1),e._v("」然后在英文界面有三个选择框，分别是 "),s("code",[e._v("Select Version")]),e._v("、"),s("code",[e._v("Select Operating System")]),e._v(" 和 "),s("code",[e._v("Select OS Version")]),e._v("，那么 "),s("code",[e._v("Select Version")]),e._v(" 以及默认为我们选择好了，是 "),s("code",[e._v("5.7.*")]),e._v(" 这里的 "),s("code",[e._v("*")]),e._v(" 是恩和版本，如果不是 "),s("code",[e._v("5.7")]),e._v(" 开头，请点击选择 "),s("code",[e._v("5.7")]),e._v(" 开头的版本。"),s("code",[e._v("Select Operating System")]),e._v(" 这里我们点击后选择 "),s("code",[e._v("Linux - Generic")]),e._v(" 即可，"),s("code",[e._v("Select OS Version")]),e._v(" 系统版本我们下啦选择 "),s("code",[e._v("Linux - Generic (glibc 2.12)(x86, 64-bit)")]),e._v(" 即可。如图：")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/assets/img/guide/installation/mysql-download-page.png")}}),e._v(" "),e._m(2),e._v(" "),s("img",{attrs:{src:e.$withBase("/assets/img/guide/installation/mysql-download-page-get-archival.png")}}),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("执行完成上面的步骤后，我们就下载完了 MySQL 5.7 源码，接下里我们对源码归档进行解压处理。首先运行：")]),e._v(" "),e._m(8),e._m(9)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("本章将带领你在 "),t("strong",[this._v("CentOS")]),this._v(" "),t("code",[this._v("7.4")]),this._v(" 系统中安装 "),t("strong",[this._v("MySQL")]),this._v(" 5.7 数据库。参考资料：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"下载源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载源码","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载源码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("请保证除了 "),t("code",[this._v("Select Version")]),this._v(" 以外，其他选择必须与上图选择一致，然后看在你的页面中找到上图中"),t("strong",[this._v("青蓝色")]),this._v("框标记的 "),t("code",[this._v("Download")]),this._v(" 按钮，点击这个按钮，打开页面如下：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("找到页面底部的 "),t("code",[this._v("No thanks, just start my download.")]),this._v(" 文字，右键复制链接地址我们得到 "),t("code",[this._v("https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz")]),this._v(" 这样的文件。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("然后我们登入 CentOS 服务器，输入 "),t("code",[this._v("cd ~")]),this._v(" 命令进入家目录，然后下载该文件：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" -L -o mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("注意，我这里是 "),t("code",[this._v("5.7.23")]),this._v(" 版本，当你阅读教程的时候可能不是 23 版本了，记得在命令中替换为你的版本号！\n同时，如果你的系统不是 64 bit 请选择 32 bit 版本。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"解压源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压源码","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压源码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("tar")]),this._v(" -zxvf mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("执行完成后运行 "),t("code",[this._v("ls")]),this._v(" 命令你会看到一个 "),t("code",[this._v("mysql-5.7.23")]),this._v(" 的目录，那么，我们以及获取到源代码了！")])}],!1,null,null,null);n.options.__file="build-install-mysql.md";t.default=n.exports}}]);