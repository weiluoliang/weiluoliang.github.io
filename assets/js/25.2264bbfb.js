(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{355:function(a,s,e){"use strict";e.r(s);var t=e(8),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("官网： https://github.com/acmesh-official/acme.sh")]),a._v(" "),s("h2",{attrs:{id:"安装acme-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装acme-sh"}},[a._v("#")]),a._v(" 安装acme.sh")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://get.acme.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("email")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("my@example.com\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),a._v(" "),s("h2",{attrs:{id:"设置默认的证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置默认的证书"}},[a._v("#")]),a._v(" 设置默认的证书")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("acme.sh/acme.sh --set-default-ca "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--server")]),a._v(" letsencrypt\n\n\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"申请证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请证书"}},[a._v("#")]),a._v(" 申请证书")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 方式1 独立启动一个服务器验证")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--issue")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" example.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--standalone")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 方式2 假如你已经启动了一个web服务并且是80端口，你指向你的站点根目录")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--issue")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" example.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" /home/wwwroot/example.com\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 按照后安装到某个位置")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--installcert")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" example.com   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        --key-file   /etc/nginx/certs/example.com/server.key "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        --fullchain-file /etc/nginx/certs/example.com/server.crt \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 手动续期，正常情况下你不需要操作，脚本60天会自动续期，你也可以强制手动刷新")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--renew")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" example.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);