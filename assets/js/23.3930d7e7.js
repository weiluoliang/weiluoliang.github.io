(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{352:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"设计背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计背景"}},[t._v("#")]),t._v(" 设计背景")]),t._v(" "),a("p",[t._v("Mybatis被设计出来解决我们日常操作数据库的痛点，使用最原始的JDBC去操作需要注册驱动，获取连接，获取statement，设置参数，处理结果集等繁琐而没有技术含量的工作，有它即可不用手动设置参数，手动处理结果集等繁琐操作，把会帮我们映射好。并且动态sql拼接也更加方便的实现")]),t._v(" "),a("h2",{attrs:{id:"mybatis的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis的结构"}},[t._v("#")]),t._v(" mybatis的结构")]),t._v(" "),a("p",[t._v("mybatis主要包含以下组件：")]),t._v(" "),a("ol",[a("li",[t._v("Configuration")]),t._v(" "),a("li",[t._v("SqlSession")]),t._v(" "),a("li",[t._v("Executor")]),t._v(" "),a("li",[t._v("StatementHandler")]),t._v(" "),a("li",[t._v("ParameterHandler")]),t._v(" "),a("li",[t._v("ResultSetHandler")]),t._v(" "),a("li",[t._v("TypeHandler")]),t._v(" "),a("li",[t._v("MapperStatement")]),t._v(" "),a("li",[t._v("SqlSource")]),t._v(" "),a("li",[t._v("ResultMap")]),t._v(" "),a("li",[t._v("BoundSql")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.luoliang.top/01mybatis-01.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"mapper的执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapper的执行过程"}},[t._v("#")]),t._v(" Mapper的执行过程")]),t._v(" "),a("p",[t._v("我们操作数据库一般都是通过写一个Mapper接口，剩下的操作都交给Mybatis去做了。Mapper并没有实现类，它是如何去生成一个实例，并且访问数据进行CRUD呢？当然是生成代理对象，通过动态代理拦截的方式实现具体的逻辑。")]),t._v(" "),a("p",[t._v("看流程图(我这里是通过MyBatis-Plus查看debug)：\n"),a("img",{attrs:{src:"https://images.luoliang.top/01mybatis-02.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"mybatis缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis缓存"}},[t._v("#")]),t._v(" Mybatis缓存")]),t._v(" "),a("p",[t._v("一级缓存是session级别的缓存，默认是开启，"),a("strong",[t._v("但是在spring中如果没启动事务，每次获取的session都是新的，所以一级缓存会失效，只有开启了事务才会生效。")])]),t._v(" "),a("p",[t._v("美团技术关于缓存的解读： "),a("a",{attrs:{href:"https://tech.meituan.com/2018/01/19/mybatis-cache.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tech.meituan.com/2018/01/19/mybatis-cache.html"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"mybatis插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis插件"}},[t._v("#")]),t._v(" Mybatis插件")])])}),[],!1,null,null,null);a.default=r.exports}}]);