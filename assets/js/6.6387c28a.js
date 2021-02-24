(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{365:function(t,r,v){t.exports=v.p+"assets/img/Length-Correction_Image1.246c503a.png"},379:function(t,r,v){"use strict";v.r(r);var a=v(40),_=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"咬合校正"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#咬合校正"}},[t._v("#")]),t._v(" 咬合校正")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://shinta0806be.ldblog.jp/archives/8298940.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接（日语）"),a("OutboundLink")],1),t._v(" 作者：SHINTA P")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%92%AC%E5%90%88%E6%A0%A1%E6%AD%A3"}},[t._v("咬合校正")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%A3%B0%E6%98%8E"}},[t._v("声明")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%A0%A1%E6%AD%A3"}},[t._v("为什么需要校正")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%A0%A1%E6%AD%A3%E8%BF%87%E7%A8%8B"}},[t._v("校正过程")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E8%BE%85%E9%9F%B3%E9%80%9F%E5%BA%A6"}},[t._v("辅音速度")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%88%9D%E5%A7%8B%E5%8F%98%E9%87%8F%E5%80%BC"}},[t._v("初始变量值")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%9C%80%E5%A4%A7%E5%85%88%E8%A1%8C%E9%95%BF%E5%BA%A6"}},[t._v("最大先行长度")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%92%AC%E5%90%88%E6%A0%A1%E6%AD%A3%E7%9A%84%E5%90%AF%E5%8A%A8%E6%9D%A1%E4%BB%B6"}},[t._v("咬合校正的启动条件")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%92%AC%E5%90%88%E6%A0%A1%E6%AD%A3%E7%8E%87%E7%B3%BB%E6%95%B0"}},[t._v("咬合校正率（系数）")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%A0%A1%E6%AD%A3%E5%90%8E%E7%9A%84%E5%8F%98%E9%87%8F%E5%80%BC"}},[t._v("校正后的变量值")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E9%9F%B3%E7%AC%A6%E5%AE%9E%E9%99%85%E9%95%BF%E5%BA%A6%E4%B8%8E%E4%BA%8C%E6%AC%A1%E6%A0%A1%E6%AD%A3"}},[t._v("音符实际长度与二次校正")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#utau-%E4%B8%AD%E7%9A%84-bug"}},[t._v("UTAU 中的 Bug")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%AE%80%E6%98%93c%E6%A0%A1%E6%AD%A3%E7%AE%97%E6%B3%95"}},[t._v("简易C++校正算法")])])])])]),t._v(" "),a("h2",{attrs:{id:"声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("ul",[a("li",[t._v("咬合校正是 UTAU 计算音符长度时非常重要的环节，虽然 Ameya 大大没有公布实际的校正算法，但是通过其他前辈的文档以及我自己的一些推导，在做了大量实验比较后，比较好地还原了校正过程。")])]),t._v(" "),a("h2",{attrs:{id:"为什么需要校正"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要校正"}},[t._v("#")]),t._v(" 为什么需要校正")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果一个音符的先行声音长度太大，并且它的前驱音符长度比较短，在这种情况下，理论上就会比前驱音符先发声。（换句话说，前驱音符直接被缩没了）")])]),t._v(" "),a("li",[a("p",[t._v("例如，当曲速为360时（四分音符的时长为167毫秒），有两个连续的四分音符（歌词分别为“あ”与“い”），如果后者的先行发声（设重叠为0）为200毫秒，那么理论上前者就会被全部被挤占。")])])]),t._v(" "),a("center",[a("img",{attrs:{src:v(365)}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("为了防止出现这种奇怪的情况，在UTAU中，当一个音符的先行声音使前一个音符缩短了一半以上的长度时，为了让前一个音符能存活一半长度（即用ticks计算的毫秒数除以2），该音符的先行声音、重叠和STP会被调整。")])]),t._v(" "),a("li",[a("p",[t._v("在示例情况下，它实际的先行声音会被调整为约83毫秒，使得前驱的音符能存活一半。")])]),t._v(" "),a("li",[a("p",[t._v("我（自作主张）地把这种调整称为“咬合校正”。")])])]),t._v(" "),a("h2",{attrs:{id:"校正过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校正过程"}},[t._v("#")]),t._v(" 校正过程")]),t._v(" "),a("h3",{attrs:{id:"辅音速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅音速度"}},[t._v("#")]),t._v(" 辅音速度")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("指定先行声音和重叠部分的伸缩倍率，可以在0到200的范围内指定，并且100不会扩展或收缩")]),t._v(" "),a("li",[t._v("辅音速度值越大，速度越快，辅音部分被缩得越短。辅音速度0在时间轴上是两倍，200是一半")]),t._v(" "),a("li",[t._v("设 k 是实际伸缩倍率，v 是辅音速度，则 k = 2^(1 - v / 100)\n")])])]),t._v(" "),a("h3",{attrs:{id:"初始变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始变量值"}},[t._v("#")]),t._v(" 初始变量值")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("初始的先行声音与重叠从属性面板中读取，如果属性面板为空，则从原音设定读取")]),t._v(" "),a("li",[t._v("初始 STP 从属性面板读取，如果属性面板为空，则为 0")])])]),t._v(" "),a("ul",[a("li",[t._v("音符理论时长（ms） = 音长（Ticks）/ 480 * 60 / 音符曲速 * 1000")]),t._v(" "),a("li",[t._v("伸缩倍率 = 2^(1 - 辅音速度 / 100)")]),t._v(" "),a("li",[t._v("先行声音 = 初始先行声音 * 伸缩倍率")]),t._v(" "),a("li",[t._v("重叠 = 初始重叠 * 伸缩倍率")])]),t._v(" "),a("h3",{attrs:{id:"最大先行长度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最大先行长度"}},[t._v("#")]),t._v(" 最大先行长度")]),t._v(" "),a("ul",[a("li",[t._v("如果前驱音符是一般音符，最大先行长度 = 前驱音符理论时长 / 2")]),t._v(" "),a("li",[t._v("如果前驱音符是"),a("strong",[t._v("休止符")]),t._v("，最大先行长度 = 前驱音符理论时长")])]),t._v(" "),a("h3",{attrs:{id:"咬合校正的启动条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#咬合校正的启动条件"}},[t._v("#")]),t._v(" 咬合校正的启动条件")]),t._v(" "),a("ul",[a("li",[t._v("先行声音 - 重叠 > 最大先行长度")])]),t._v(" "),a("h3",{attrs:{id:"咬合校正率-系数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#咬合校正率-系数"}},[t._v("#")]),t._v(" 咬合校正率（系数）")]),t._v(" "),a("ul",[a("li",[t._v("咬合校正率 = 最大先行长度 /（先行声音－重叠）")])]),t._v(" "),a("h3",{attrs:{id:"校正后的变量值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校正后的变量值"}},[t._v("#")]),t._v(" 校正后的变量值")]),t._v(" "),a("ul",[a("li",[t._v("校正后的先行声音 = 先行声音 * 咬合校正率")]),t._v(" "),a("li",[t._v("校正后的重叠 ＝ 重叠 * 咬合校正率")]),t._v(" "),a("li",[t._v("校正后的 STP = 先行声音 - 校正后的先行声音 + 初始 STP")])]),t._v(" "),a("h2",{attrs:{id:"音符实际长度与二次校正"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#音符实际长度与二次校正"}},[t._v("#")]),t._v(" 音符实际长度与二次校正")]),t._v(" "),a("ul",[a("li",[t._v("末端偏移 = 后继音符的重叠（校正后） - 后继音符的先行声音（校正后）")]),t._v(" "),a("li",[t._v("如果后继音符设置了一个非常大的重叠值，或者其他原因，使得"),a("strong",[t._v("末端偏移超过后继音符的理论时长，那么就取后继音符的理论时长")])]),t._v(" "),a("li",[t._v("实际长度 = 理论时长 + 先行声音（校正后）+ 末端偏移")])]),t._v(" "),a("h2",{attrs:{id:"utau-中的-bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utau-中的-bug"}},[t._v("#")]),t._v(" UTAU 中的 Bug")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在测试变速曲的时候发现了一个严重的问题，这一问题告诉插件开发者，UTAU 提供给插件的校正后的先行/重叠/STP是有问题的。")])]),t._v(" "),a("li",[a("p",[t._v("我们知道，音符长度（毫秒）= 音长(ticks) / 480 * 60 / 曲速 * 1000")])]),t._v(" "),a("li",[a("p",[t._v("UTAU在UI中执行当前音符的咬合校正计算时，用的是"),a("strong",[t._v("当前音符的曲速")]),t._v("去计算"),a("strong",[t._v("前驱音符的长度")]),t._v("，但是在"),a("strong",[t._v("传给引擎参数时又正确地用了前驱音符的曲速")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("也就是说，它显示在UI上的，与它传给插件的校正结果都是有问题的！（幸好传给引擎的是对的）")])]),t._v(" "),a("li",[a("p",[t._v("有以下三种情况")]),t._v(" "),a("ol",[a("li",[t._v("在前驱音符曲速与当前音符的相等时，不会引起什么问题。")]),t._v(" "),a("li",[t._v("在前驱音符曲速小于当前音符的时，那就意味着UI中计算的前驱音符长度变短了，有可能原本不用启动校正但是却被校正了。")]),t._v(" "),a("li",[t._v("在前驱音符曲速大于当前音符的时，那就意味着UI中计算的前驱音符长度变长了，有可能UI中的校正力度可能不够大，导致UI中计算的校正后的先行声音照样能吞掉前驱音符一半长度（或者吞掉前驱休止符的整个长度，导致合成器接收到的音符长度是负的，造成严重错误）。")])])]),t._v(" "),a("li",[a("p",[t._v("建议：所以在插件里，如果要使用校正后的先行/重叠/STP，最好还是自己算，或者在检测到前驱音符与当前音符曲速不相等时不使用UTAU提供的校正结果。")])]),t._v(" "),a("li",[a("p",[t._v("在UTAU中手动修改的STP会直接与在校正后的STP相加作为新的STP传给引擎，校正后的先行声音和重叠不受影响，不过最好还是不要去改它。")])]),t._v(" "),a("li",[a("p",[t._v("UTAU 在传递给引擎数据的 "),a("strong",[t._v("先行声音/重叠/STP")]),t._v(" 都是经过校正的。")])])]),t._v(" "),a("p"),t._v(" "),a("h2",{attrs:{id:"简易c-校正算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简易c-校正算法"}},[t._v("#")]),t._v(" 简易C++校正算法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("// 先去除首位空格，判断余下部分是否为空或r或R，如果是就为真\nbool isRestNoteLyric();\n\n// 首先从UST中获取当前音符与前驱音符的所有音符属性\nGetValueFromSectionNote();\n\n// 判断过程如下\ndouble CorrectRate = 1;\ndouble velocityRate = pow(2, 1 - CurVelocity / 100);\n\nCurPreUttr *= velocityRate;\nCurOverlap *= velocityRate;\n\nif (hasPrevNote){\n  double PrevDuration = double(PrevLength) / 480 * 60 / PrevTempo * 1000;\n  double MaxOccupy = isRestNoteLyric(PrevLyric) ? PrevDuration : (PrevDuration / 2);\n  if (aCurPreUttr - aCurOverlap > MaxOccupy) {\n    CorrectRate = MaxOccupy / (CurPreUttr - CurOverlap);\n  }\n}\n\ndouble CorrecetPreUttr = CorrectRate * CurPreUttr;\ndouble CorrecetOverlap = CorrectRate * CurOverlap;\ndouble CorrecetSTPoint = CurPreUttr - CorrecetPreUttr;\n\n// 追加用户设置的STP  \nCorrectSTPoint += CurSTPoint;\n")])])])],1)}),[],!1,null,null,null);r.default=_.exports}}]);