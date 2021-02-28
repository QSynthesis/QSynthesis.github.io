(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{369:function(t,e,v){"use strict";v.r(e);var _=v(39),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"重采样器-resampler"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重采样器-resampler"}},[t._v("#")]),t._v(" 重采样器（Resampler）")]),t._v(" "),v("p",[t._v("重采样器介绍")]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E9%87%8D%E9%87%87%E6%A0%B7%E5%99%A8resampler"}},[t._v("重采样器（Resampler）")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E4%BD%9C%E7%94%A8"}},[t._v("作用")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C"}},[t._v("命令行")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%8F%82%E6%95%B0"}},[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E5%BF%85%E9%80%89%E5%8F%82%E6%95%B0"}},[t._v("必选参数")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0"}},[t._v("可选参数")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E8%A1%A5%E5%85%85%E8%AF%B4%E6%98%8E"}},[t._v("补充说明")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%AF%B9%E4%BA%8E%E5%88%B6%E4%BD%9C%E9%87%8D%E9%87%87%E6%A0%B7%E5%99%A8%E7%9A%84%E5%BB%BA%E8%AE%AE"}},[t._v("对于制作重采样器的建议")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E9%9F%B3%E9%AB%98%E6%9B%B2%E7%BA%BF%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[t._v("音高曲线字符串")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#base-64-%E7%BC%96%E7%A0%81%E8%A1%A8"}},[t._v("Base 64 编码表")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E7%BC%96%E7%A0%81%E8%A7%84%E5%88%99"}},[t._v("编码规则")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E7%A4%BA%E4%BE%8B"}},[t._v("示例")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E7%AE%80%E6%98%93%E8%BD%AC%E6%8D%A2c"}},[t._v("简易转换（C++）")])])])])])])]),t._v(" "),v("h2",{attrs:{id:"作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),v("ul",[v("li",[t._v("对音源采样进行变调，拉伸。")])]),t._v(" "),v("h2",{attrs:{id:"命令行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[t._v("#")]),t._v(" 命令行")]),t._v(" "),v("p",[v("code",[t._v("resampler.exe <input wavfile> <output file> <pitch_percent> <velocity> [<flags> [<offset> <length_require> [<fixed length> [<end_blank> [<volume> [<modulation> [<pich bend>...]]]]]]]")])]),t._v(" "),v("h2",{attrs:{id:"参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),v("h3",{attrs:{id:"必选参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#必选参数"}},[t._v("#")]),t._v(" 必选参数")]),t._v(" "),v("ul",[v("li",[t._v("第一个参数：音源文件路径（如"),v("code",[t._v("a.wav")]),t._v("）")]),t._v(" "),v("li",[t._v("第二个参数：输出缓存文件路径（如"),v("code",[t._v("temp.wav")]),t._v("）")]),t._v(" "),v("li",[t._v("第三个参数：音阶（如"),v("code",[t._v("C#4")]),t._v("）")]),t._v(" "),v("li",[t._v("第四个参数：辅音速度（0~200的实数）")])]),t._v(" "),v("h3",{attrs:{id:"可选参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可选参数"}},[t._v("#")]),t._v(" 可选参数")]),t._v(" "),v("ul",[v("li",[t._v("第五个参数：Flags（如"),v("code",[t._v('"GB60"')]),t._v("，如果指定了后面的参数，那么此参数不能被忽略）")]),t._v(" "),v("li",[t._v("第六个参数：偏移（原音设定左侧蓝色区域宽度）")]),t._v(" "),v("li",[t._v("第七个参数：实际长度（拼接之前的单音符长度）")]),t._v(" "),v("li",[t._v("第八个参数：固定长度（原音设定粉红色区域宽度）")]),t._v(" "),v("li",[t._v("第九个参数：空白（原音设定右侧蓝色区域宽度）")]),t._v(" "),v("li",[t._v("第十个参数：音量（0~100的实数）")]),t._v(" "),v("li",[t._v("第十一个参数：移调（-200~200的实数）")]),t._v(" "),v("li",[t._v("第十二个参数：音高曲线字符串")])]),t._v(" "),v("h2",{attrs:{id:"补充说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#补充说明"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("关于Flags")]),t._v(" "),v("ul",[v("li",[t._v("如果调用重采样器只是为了初始化频率表，那么可以将Flags参数指定为“G”，后面所有参数不指定。")])])]),t._v(" "),v("li",[v("p",[t._v("关于实际长度")]),t._v(" "),v("ul",[v("li",[t._v("详见 "),v("RouterLink",{attrs:{to:"/developers/UTAU-Backend/Length-Correction.html#音符实际长度与二次校正"}},[t._v("咬合校正")])],1)])]),t._v(" "),v("li",[v("p",[t._v("关于音高曲线字符串")]),t._v(" "),v("ul",[v("li",[t._v("实际上它占两个命令行参数的位置 "),v("strong",[t._v("（即重采样器会接收到13个命令行参数）")])]),t._v(" "),v("li",[t._v("第一个参数：曲速加感叹号前缀 "),v("strong",[t._v("（如!120）")])]),t._v(" "),v("li",[t._v("第二个参数：用基于 Base64 的 64 进制双字节序列组成的字符串，用来描述音高曲线")])])]),t._v(" "),v("li",[v("p",[t._v("合法的启动参数示例")]),t._v(" "),v("ul",[v("li",[t._v("例1："),v("code",[t._v("resampler.exe infile.wav outfile.wav 120 100 GB60")])]),t._v(" "),v("li",[t._v("例2："),v("code",[t._v('resampler.exe "D:\\UTAU\\voice\\MyVoice\\a.wav" "D:\\ProjectCache\\1_a_120.wav" C4 100 "B0Y0H50" 5 600 37 0 100 0 !120 AA#5#')])])])])]),t._v(" "),v("h2",{attrs:{id:"对于制作重采样器的建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对于制作重采样器的建议"}},[t._v("#")]),t._v(" 对于制作重采样器的建议")]),t._v(" "),v("ol",[v("li",[t._v("应当兼容通用Flags，"),v("strong",[t._v("如G用来初始化频率表，T用来导出文本频率表，u用来直接输出采样等")]),t._v("。")]),t._v(" "),v("li",[t._v("应当兼容输入输出文件的路径既可以是相对路径也可以是绝对路径。")]),t._v(" "),v("li",[t._v("第三条：对于非法的输入文件，可以输出一段空白的符合长度要求的声音。")]),t._v(" "),v("li",[t._v("在控制台输出信息以便用户查找问题。")])]),t._v(" "),v("h2",{attrs:{id:"音高曲线字符串"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#音高曲线字符串"}},[t._v("#")]),t._v(" 音高曲线字符串")]),t._v(" "),v("h3",{attrs:{id:"base-64-编码表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#base-64-编码表"}},[t._v("#")]),t._v(" Base 64 编码表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("索引")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("对应字符")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("索引")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("对应字符")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("索引")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("对应字符")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("索引")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("对应字符")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("17")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("34")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("i")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("51")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("z")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("35")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("j")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("52")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("T")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("36")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("k")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("53")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("U")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("37")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("l")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("54")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("21")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("V")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("38")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("55")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("F")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("22")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("W")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("39")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("n")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("56")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("23")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("40")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("o")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("57")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("24")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("41")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("p")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("58")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("6")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("I")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("25")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Z")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("42")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("q")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("59")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("7")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("J")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("26")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("43")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("r")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("60")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("8")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("K")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("27")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("b")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("44")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("61")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("9")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("L")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("28")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("c")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("45")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("t")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("62")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("+")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("29")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("46")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("u")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("63")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("/")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("e")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("47")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("v")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("O")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("31")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("f")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("48")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("P")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("g")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("49")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Q")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("33")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("50")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),v("h3",{attrs:{id:"编码规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编码规则"}},[t._v("#")]),t._v(" 编码规则")]),t._v(" "),v("ol",[v("li",[t._v("按指定的曲速决定控制点（音高采样点）的数量，每拍有96个控制点（5ticks采样一次）\n"),v("ul",[v("li",[t._v("!120：0.5秒，96个采样点")]),t._v(" "),v("li",[t._v("!180：0.333秒，96个采样点")])])]),t._v(" "),v("li",[t._v("音高曲线的起点：先行声音（校正后）+ STP（校正后）")]),t._v(" "),v("li",[t._v("采样点是整 "),v("strong",[t._v("-2048~2047")]),t._v(" 的 "),v("strong",[t._v("12bit 整数")]),t._v("，每个半音相当于 100")]),t._v(" "),v("li",[t._v("通过 "),v("strong",[t._v("Base64")]),t._v(" 将采样点的值转换成每单元 "),v("strong",[t._v("2个字符")]),t._v(" 的字符串\n"),v("ul",[v("li",[v("code",[t._v("38")]),t._v("   -> "),v("code",[t._v("Am")]),t._v(" "),v("strong",[t._v("(38 = 0 * 64 + 38 * 1)")])]),t._v(" "),v("li",[v("code",[t._v("176")]),t._v(" -> "),v("code",[t._v("Cw")]),t._v(" "),v("strong",[t._v("(176 = 2 * 64 + 48 * 1)")])])])]),t._v(" "),v("li",[t._v("负数先取反（即加4096）再参与编码\n"),v("ul",[v("li",[v("code",[t._v("-2")]),t._v("   -> "),v("code",[t._v("/+")]),t._v(" "),v("strong",[t._v("(-2 + 4096 = 63 * 64 + 62)")])])])]),t._v(" "),v("li",[t._v("同一个数字连续出现会按如下格式压缩长度\n"),v("ul",[v("li",[v("code",[t._v("AA#5#")]),t._v(" 表示 "),v("code",[t._v("AA AA AA AA AA AA")]),t._v("，它的意思是 "),v("code",[t._v("[0,0,0,0,0,0]")])])])])]),t._v(" "),v("h3",{attrs:{id:"示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("源 - 1")]),t._v(" "),v("blockquote",[v("p",[t._v("-175 -257 -341 -417 -480 -522 -540 -537 -532 -527 -522 -517 -512 -508 -503 -498 -494 -489 -485 -480 -476 -472 -468 -464 -460 -456 -453 -449 -446 -443 -440 -437 -434 -432 -429 -427 -425 -423 -421 -420 -418 -417 -416 -415 -415 -414 -414 -414 -408 -391 -365 -332 -295 -257 -221 -190 -167 -153 -150 -149 -146 -141 -135 -127 -117 -106 -94 -80 -66 -50 -34 -18 -1 16 33 50 67 83 98 113 126 138 149 159 167 173 178 181 183 183 185 188 192 198 204 212 221 231 242 254 266 279 293 307 321 336 351 365 379 393 407 420 432 444 454 464 473 480 487 492 496 498 499 499 498 497 494 491 487 482 476 470 463 455 447 438 428 418 408 397 386 375 363 351 339 327 315 303 291 279 268 256 245 235 225 215 206 197 189 182 175 169 164 160 156 153 151 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 150 145 133 113 88 57 25 -7 -38 -64 -84 -96 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -100 -99 -99 -99 -99 -99 -99 -98 -98 -98 -98 -97 -97 -97 -96 -96 -96 -95 -95 -95 -94 -94 -93 -93 -92 -92 -92 -91 -91 -90 -90 -89 -89 -88 -87 -87 -86 -86 -85 -85 -84 -83 -83 -82 -82 -81 -80 -80 -79 -78 -78 -77 -76 -76 -75 -74 -73 -73 -72 -71 -70 -70 -69 -68 -67 -67 -66 -65 -64 -64 -63 -62 -61 -60 -60 -59 -58 -57 -56 -56 -55 -54 -53 -52 -52 -51 -50 -49 -48 -48 -47 -46 -45 -44 -43 -43 -42 -41 -40 -39 -39 -38 -37 -36 -36 -35 -34 -33 -33 -32 -31 -30 -30 -29 -28 -27 -27 -26 -25 -25 -24 -23 -22 -22 -21 -20 -20 -19 -19 -18 -17 -17 -16 -16 -15 -14 -14 -13 -13 -12 -12 -11 -11 -10 -10 -9 -9 -8 -8 -8 -7 -7 -6 -6 -6 -5 -5 -5 -4 -4 -4 -3 -3 -3 -3 -2 -2 -2 -2 -2 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1")])])]),t._v(" "),v("li",[v("strong",[t._v("Base64 - 1")]),t._v(" "),v("blockquote",[v("p",[t._v("9R7/6r5f4g323k3n3s3x32374A4E4J4O4S4X4b4g4k4o4s4w4044474/5C5F5I5L5O5Q5T5V5X5Z5b5c5e5f5g5h5h5i#2#5o556T607Z7/8j9C9Z9n9q9r9u9z95+B+L+W+i+w++/O/e/u//AQAhAyBDBTBiBxB+CKCVCfCnCtCyC1C3C3C5C8DADGDMDUDdDnDyD+EKEXElEzFBFQFfFtF7GJGXGkGwG8HGHQHZHgHnHsHwHyHzHzHyHxHuHrHnHiHcHWHPHHG/G2GsGiGYGNGCF3FrFfFTFHE7EvEjEXEMEAD1DrDhDXDODFC9C2CvCpCkCgCcCZCXCW#107#CRCFBxBYA5AZ/5/a/A+s+g+c#54#+d#5#+e#3#+f#2#+g#2#+h#2#+i+i+j+j+k#2#+l+l+m+m+n+n+o+p+p+q+q+r+r+s+t+t+u+u+v+w+w+x+y+y+z+0+0+1+2+3+3+4+5+6+6+7+8+9+9+++//A/A/B/C/D/E/E/F/G/H/I/I/J/K/L/M/M/N/O/P/Q/Q/R/S/T/U/V/V/W/X/Y/Z/Z/a/b/c/c/d/e/f/f/g/h/i/i/j/k/l/l/m/n/n/o/p/q/q/r/s/s/t/t/u/v/v/w/w/x/y/y/z/z/0/0/1/1/2/2/3/3/4#2#/5/5/6#2#/7#2#/8#2#/9#3#/+#4#//#12#")])])])]),t._v(" "),v("h3",{attrs:{id:"简易转换-c"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简易转换-c"}},[t._v("#")]),t._v(" 简易转换（C++）")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v('static const char Base64EncodeMap[] =\n"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";\n\nstring encode_single_num(int n) {\n    char x, y;\n    string result;\n\n    //若为负则以12位二进制取反\n    if (n < 0) {\n        n += 4096;\n    }\n\n    //转化为64进制，十位为x，个位为y，并映射为Base64字符\n    x = Base64EncodeMap[int(n / 64)];\n    y = Base64EncodeMap[n % 64];\n\n    result = x + y;\n\n    return result;\n}')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);