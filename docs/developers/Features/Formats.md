# 格式兼容

关于用 QPitchEditor 打开各种类型的文件的方法。

---

## 引言

+ 受到 UTAU 插件机制的启发，将 QPitchEditor 打开文件的处理过程与本体分离。
+ QPitchEditor 本身只能打开 UST 文件，通过调用外部控制台程序打开其他类型的文件。
+ 因此只要开发者制作出特定类型文件转换为 UST 文件的转换器，提供可执行文件供 QPitchEditor 调用，QPitchEditor 就能打开（导入）任意类型的文件。


## 基本信息

### 转换器的形式

+ 最少需要以下两个文件。
  + [config.txt] 设定文件
  + [可执行文件] 转换器本体
+ 可执行文件必须能够获取命令行调用参数。
  
+ 除此之外，含有其他文件也没有关系。
  + 例如：readme.txt

### `config.txt`的格式

`config.txt`按照以下形式记述（务必指定编码为 ANSI）。

```
filters=Synthesizer V Project(*.svp *.s5p)
execute=test.exe
shell=use
import=front
```
解释
+ 在`filters`后指定在 QPitchEditor 文件对话框中类型过滤器栏显示的内容。
  + 格式：`名称(*.扩展名1 *.扩展名2 *.扩展名3 ...)`
+ 在`execute`后指定可执行文件的名称。

+ 通常会用`CreateProcess`启动，但在指定有`shell=use`的情况下会用`ShellExecuteEx`启动。因此，也能够执行exe以外的文件（jar、html、hta等）。

+ `import`指定导入文件时的插入方式，省略时将音符追加在工程末尾。
  + 定义域：head，front，back 
  + head：将音符插入在工程最前端。
  + front：将音符插入在选区前。
  + back：将音符插入在选区后。

## 安装路径

QPitchEditor 安装目录

├`QPitchEditor.exe`  
├`filters`  
│　└爱啥啥  
│　　├`config.txt`  
│　　├【可执行文件】  
│　　└其他文件（若有）  
└其他QPitchEditor相关文件

## 数据输入输出方法

### 输入

+ 启动转换器提供两个命令行参数，第一个是待打开（导入）文件的绝对路径，第二个是将文件转换为 UST 格式后保存的绝对路径。

### 输出

+ 转换后的文件由转换器创建，**路径由第二个命令行参数指定**。
+ 转换后的编码为 ANSI 或 UTF-8。


### 注意事项
+ 转换后的文件在[#SETTING]节指定全局曲速（不指定默认为120）即可，如果指定了音源、合成器与重采样器 QPitchEditor 也会读取；音符节应当符合UST格式。
+ 转换器应当是控制台程序，运行效率应当较高，转换完成后立即返回。