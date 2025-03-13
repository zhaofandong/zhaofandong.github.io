---
title: 2018年学习笔记合集
date: 2018-11-13 00:00:00
categories: 
  - 学习笔记
tags:
  - 前端开发
  - Bootstrap
  - JavaScript
  - HTML
  - CSS
description: 2018年的学习日志，包含了前端开发相关的学习笔记，主要涉及Bootstrap、JavaScript等技术的学习记录。此内容包含了代码块，导致排版不好，内容太多不想改了。之后再说。
---

## [11-13日 学习日志]

Posted on 2018-11-13 Cafory Test |


1.collapse: 切换内容可见性

a herf=collapse-demo .btn.btn-primary
data-toggle=collapse
.collaspse #collapse-demo
.card.card-body hello

button
.btn btn-primary
data-toggle collaspe
data-target collapse-demo

2.Accordion 手风琴
div #accordion
//命令 .card>.card-header>card-body>hello
.card
.card-header a hred collaspe-1 data-toggle=collapses
.collapse show #collapse-1 data-parent=#accordion
.card-body hello

//命令 .card>.card-header>card-body>hello
.card
.card-header a hred collaspe-2 data-toggle=collapses
.collapse #collapse-2 data-parent=#accordion
.card-body hello

3.dropdown 下拉菜单
.dropdown//.btn-group dropup style=postion:absolute;buttom:30%
a href .btn.btn-success
button #dropdown-demo .btn.btn-outline-wearning dropdown-toggle-sp;ot data-taggle="dropdown" data-offset="15"
span.sr-only 包装的文字不会显示在界面上 Dropdown
.dropdown-menu show// dropdown-menu-left/right
.dropdown-header web languager
a href .dropdown-item html
a href .dropdown-item css
a href .dropdown-item javascript
.dropdown-divider 分割线
a href .dropdown-item more
$(‘#dropdown-demo').on('show.bs.dropdown',()=>{console.log('show')})

3.jumbotron 大屏幕

.jumbotron h1/dispaly-1 hello
p .lead mb-4 welcome
a .btn.btn-primary.btn-lg subscribe

4.list-group 列表群组
div.row
div.col-4
ul/div .list-group
li / a data-toggle="list" href=#html-content .list-group-item .list-group-item-action active/disable html
li / a href.list-group-item .list-group-item-action css
li / a href.list-group-item .list-group-item-action.d-fles.justify-content-between.align-items-center javascipt span .badge.badge-primary.badge-pill 12 /span
ul/div
div .col8=-8
div .tab-content
div.tab=pane fade show active #html-content hello html
div.tab=pane fade #css-content hello css
div.tab=pane fade #javascript-content hello jacascript

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line">在js中，</span><br><span class="line">$（document）.ready(()=&gt;{</span><br><span class="line">cont list = $('tab-demo.list-group a')</span><br><span class="line">list.click(fuction(event){ event.preventDefault()</span><br><span class="line">$(this).tab('show')</span><br><span class="line">})</span><br><span class="line"></span><br><span class="line">})</span><br></pre></td></tr></tbody></table>

5.Modal 对话框可以放在覆盖当前页面显示

6.scrollspy 滚动监听
滚动到哪 出现到哪

data-spy

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;div class="component demo" style="height:300vh"&gt;</span><br></pre></td></tr></tbody></table>

class

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;div class="col-3"&gt;</span><br></pre></td></tr></tbody></table>

id

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;li class="nav-item"&gt;</span><br></pre></td></tr></tbody></table>

href

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;/li&gt;</span><br></pre></td></tr></tbody></table>

class

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;a href="#css" class="nav-link"&gt;css&lt;/a&gt;</span><br></pre></td></tr></tbody></table>

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;li class="nav-item"&gt;</span><br></pre></td></tr></tbody></table>

href

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;/li&gt;</span><br></pre></td></tr></tbody></table>

\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;/div&gt;</span><br></pre></td></tr></tbody></table>

class

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;h3 id="html"&gt;HTML&lt;/h3&gt;</span><br></pre></td></tr></tbody></table>

are looking at a numerical representation of your connection known as an IP address.\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```This address signifies a few things about your connection. It tells you your location, and it tells you what sort of connection you have.</span><br></pre></td></tr></tbody></table>

should always check your IP address to ensure your connection is coming from where you intend it to coming from.\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```Find out more about IP addresses here&lt;/p&gt;</span><br></pre></td></tr></tbody></table>

id

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;p&gt;You are looking at a numerical representation of your connection known as an IP address.</span><br></pre></td></tr></tbody></table>

address signifies a few things about your connection. It tells you your location, and it tells you what sort of connection you have.\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```You should always check your IP address to ensure your connection is coming from where you intend it to coming from.</span><br></pre></td></tr></tbody></table>

out more about IP addresses here\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```&lt;h3 id="Js"&gt;Js&lt;/h3&gt;</span><br></pre></td></tr></tbody></table>

are looking at a numerical representation of your connection known as an IP address.\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```This address signifies a few things about your connection. It tells you your location, and it tells you what sort of connection you have.</span><br></pre></td></tr></tbody></table>

should always check your IP address to ensure your connection is coming from where you intend it to coming from.\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```Find out more about IP addresses here&lt;/p&gt;</span><br></pre></td></tr></tbody></table>

6.tooltips
显示 小提示

class

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">$('[data-toggle="tooltip"]').tooltip()</span><br></pre></td></tr></tbody></table>

## [11-12 学习日志](https://zhaofandong.github.io/2018/11/12/11-12-%E5%AD%A6%E4%B9%A0%E6%97%A5%E5%BF%97/)

Posted on 2018-11-12 |[](https://zhaofandong.github.io/2018/11/12/11-12-%E5%AD%A6%E4%B9%A0%E6%97%A5%E5%BF%97/#comments)

学习 bootstrap4 框架
container class 可以给设置一个响应式的布局
container-fluid 流动
class row 每一行
class col 每一列
col 默认平分12
col-6 12个里面占6个 以此类推
row align-items-end/center/start 垂直对齐方式
row align-self-start 按照自己的方式对齐
row justify-content-start 默认的水平对齐方式 center 水平居中
水平垂直都居中 row justify-content-center align-items-center
在列中排第一col order-first
在列中排序 col order-1 order-2 order-3
偏移 offset offset-2
sm md lg
col-sm 560以上 等分 <等分
col-sm-6 lg-3 小尺寸中等尺寸 6格子 大尺寸3格

class

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;h4&gt;Alert&lt;/h4&gt;</span><br></pre></td></tr></tbody></table>

href

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;button class="close" data-dismiss="alert"&gt;</span><br></pre></td></tr></tbody></table>

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;/button&gt;</span><br></pre></td></tr></tbody></table>

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">```&lt;button class="btn btn-damger close-alter"&gt;``````Close```&lt;/button&gt;</span><br></pre></td></tr></tbody></table>

bt中的jq
$(‘…’).ready(()=>{
$(‘选择器’).on(‘选择器’,()=>{执行的内容})

})
Badge 标签组件
span.baddge.badge-primary/secondary badge-pill
breadcrumb 显示用户的位置 导航位置
nav
ol.breadcrumb
li.breadcrumb-item a
li.breadcrumb-item a
li.breadcrumb-item active
button 组件
a.button.but-outline-danger(情景类) btn-lg btn-block disabled
群组 ：举例 包装一组按钮
div .btn-group btn-group-vertical 垂直显示
.btn.btn-secondary
.btn.btn-secondary
.btn.btn-secondary
/div
card 卡片组件（ 没有固定的宽度 随着包装的容器大小变化而变化 ）
card-group// card-deck 两个卡片中间有空 //card-colums
div .card （包装 ） text-right 右对齐 center 居中 text-white 字体变色
img src="" ajlt="" class="card-image-top"
.card-header//card-img-overlay
.card-body
.card-title
.card-description
.card-footer

carousel slide 旋转木马 可以循环显示内容 id="carousel-demo" data-ride="carousel " //可以自动 data-interval="1000" =》相当于 js中设置了interval
ol class="carousel-indicators"
li [data-target=#carousel-demo] data-slide-to="0"索引号 class="active"
li [data-target=#carousel-demo] data-slide-to="1"
.carousel-inner / data-rid="carousel" 自动旋转
a href="#carousel-demo" .carousel-control-per data-slide="prev" 小箭头
a href="#carousel-demo" .carousel-control-next data-slide="next" 仙剑头
/ *.carousel-item active
img .d-block w-100 src=".." alt=".."
img .d-block w-100 src=".." alt=".."
img .d-block w-100 src=".." alt=".."* /
在js中：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br></pre></td><td class="code"><pre><span class="line">$(document).ready(()=&gt;{</span><br><span class="line">$('.carousel').carousel({interval:5000 })</span><br><span class="line">}}</span><br><span class="line">$('.carousel').on('slide.bs.carousel',(event)=&gt;{</span><br><span class="line">console.log('slide:',' 方向：${event.direction} </span><br><span class="line">从： ${event.from}</span><br><span class="line">到:%{event.to}</span><br><span class="line">')</span><br><span class="line">})</span><br></pre></td></tr></tbody></table>

## [11-8日 学习日志]

Posted on 2018-11-08 |

引用和赋值

定义对象

var 001={

name:"小明",

sex:"male";

}

定义变量来使用对象

var person1 =001;

赋值 ； 引用地址

用类的形式创建对象

创建人的类：

function PersonClass(pName,pSex){

//为了区分函数的类和函数

this.name = pName;

this.sex =pSex;

this.slogan=fuction(){

console.log("我是"+this.name);

}

}

构造函数：

var person1 =new PersonClass("xuiaoming","male");

var person2=new PersonClass("xiaohong","female");

//C# 中 class person {}; ; 使用的是 person person1 = new person(); 注意区别

es5 function -> es6 class

js 基本包装类型 date math

创建一个空的对象

var obj1={};

var obj2=new Object();// 空的对象

转换类型

var n1 =1.23;

var str1=n1.tostring();

n1.toPrecision(2) 取两位

var str= "Hello World"

var n =str.charAt(2) 返回L

时间相关的对象：Date

var d =new date(); //获取时间

d.get Day(); // 获取星期

计算代码的性能：耗时

var time1 =new Date(); //获取了当前的时间 本地电脑的时间

for (var i =0;i<1000000;i++)

{

t++;

}

var time2 =new Date();

var n = time2.getTime() - time1.getTime();

Math ： 跟数学相关的 不是一个类 随机数

命名空间

Math.floor(Math.random()); //随机数

从开始到现在 以上是js的核心语法

业务 交互 web变成 一般与浏览器打交道 提供了很多方法

页面：动态的 修改网页的内容 和更改文字 DOM操作

底层 ： 浏览器 类似于 存储 BOM 操作

浏览器： 加载页面 ：简单的操作系统

把网址转换成IP地址

域名： [www.baidu.com](http://www.baidu.com/)

DNS服务器： 浏览器吧[www.baidu.com](http://www.baidu.com/) 发给DSNS服务器 然后返回地址

浏览器收到网络地址 缓存在本地

浏览器就要向服务器请求

服务器收到了请求

服务器 类似于振幅的办公大楼 里面有很多窗口

端口 类似于 这个窗口

服务器把请求的内容 处理 返回给浏览器

浏览器收到文件 解析

看到页面

浏览器：多线程

1.js引擎

2.ui渲染

3.事件线程

4.发起请求的线程

5定时器的线程

js -> 单线程的 -》 编程方便

银行里面只有一个柜台 处理与js相关的事情

同步任务 ：

异步任务：

存钱：我要存1万 柜台问我一堆问题 我填了一堆单子 把钱给了里面

排队：

同步：存1万

异步： 我一堆问题 我填了一堆单子 -》 在旁边 先做了 -》 再去排队

js 如何在浏览器生效

1.  载入阶段 默认：同步
    
    ```
    1. 获取页面内容 2.html->  解析 loading
    
       载入DOM树：html
    
        ​            head
    
        ​            meta title script
    
        同步  下载js
    
        ​             js解释器对脚本进行解析 执行
    
                    body
    
        ​            ....
    
        解析完成
    
        渲染-》文件在下载 图片
    
        载入阶段结束
    ```
    

2.事件阶段 异步 onload

//获取节点 操作dom

var n =document.getElementById("div1");

console.log(n);

n = document.getElementById("div2");

console.log(n);

延迟加载：当dom加载完之后 执行

异步加载： 后续了解

DOM BOM

js的库都放在 window 对象里面 -》 里面的方法都是全局的方法

//BOM

弹窗

同步：阻断

1.  alert("")alert 弹窗 "")
    
2.  var bcf =confirm("confirm 弹窗");
    
3.  var strpt = prompt("prompt 输入："，"默认值"); 返回用户输入的值
    
    console.log(strpt);
    

获取浏览器的导航栏的信息：

window.location 对象

属性： url 的各个部分

location.reload(); 刷新页面

location.replace("网址"); 打开新的网址

var bcf = confirm("confirm 弹窗");

if(bcf)

{

location.replace("[http://www.baidu.com")](http://www.baidu.com"\)/);

}

else location.reload();

浏览器的历史： 前进 后退

history.back();

history.forward();

history.go(-1); back 1次

history.go(1); forward 1次

浏览器的信息：版本 厂家

navigator.userAgent ();

获取浏览器的分辨率：

screen

bom 计时器

循环执行：var sil = setInterval( 函数名， 时间)；每个多少时间执行 函数

```
停掉： clearInterval(sil);
```

执行一次： var sil = setTimeout(函数，时间); 到了 这个时间 执行函数

```
停跳： clearTimeout(sill);
```

var num=0;

function add(){

console.log("num = "+ ++num);

}

var sil =setInterval(add,1000);

function end(){

clearInterval(sil);

}

setTimeout(end,10000);

DOM的操作：

DOM -》 文档对象模型

DOM树：

html文件 -》 人-》网页的数据

浏览器-》 数据结构 -》 方便 查找 修改 遍历 操作

样子-》树

数据结构：

线性：单链表 循环链表 队列 栈 数组

树形：二叉树 平衡数 红黑树

网状：有向图 无向图 -》 寻路算法 A*算法

3中最常用的方法来找到标签

1.id 唯一性 document.getElementById("id_name");

2.标签名 document.getElementsByTagName("");// 返回的是个数组

3.class document.getElementsByClassName(""); //返回的 还是 数组

创建节点

var p = document.createElement("p");

创建一个文本节点

var ptxt = document.createTextNode("p1");

p.appendChild(ptext);

添加节点

div1.apppendChild(p);

删除节点 removeChile();

var div2=document.getElementById("div2");

div1.removeChild(div2);

从父节点中删除

div2.parentNode.removeChild(div2);

自己把自己删除

在节点中对属性 内容进行操作

html 定义好的属性 . 对象的点来获取 以及修改

js中 class 要用 className 做修改

img1.className

css 样式的修改

img1.style.width="100px";

//获取属性

img1.getAttribute("dat");

getAttribute();'

//设置属性

img1.setAttribute("属性名"，"属性值");

img1.removeAttribute("src");

img1.addAttribute();

//修改

var p1 =document.getElementById("p1");

p1.innerHTML =" 这是innerHTML [this is a](https://zhaofandong.github.io/www.baidu.com) a>";

这里的 p1 和 img1 都是 id 名称

时间：

交互 人可以去操作页面

js -> 事件 驱动

用户-》 HTML元素-》产生一个事件-》 事件 主动的 调用 设定 方法 函数

事件源： 产生事件的地方

事件的类型 ： 点击 键盘

事件对象： 记录好 信息

事件的处理程序 ： 函数

注册： 把以后会发生的事情，先提前报备一下

举例：

没钱了就给家里打电话 你 肯定打电话

没钱了+打电话 -》你

时间的类型+ 函数 - 》 元素

两种发现 实现注册

1.html的属性：

属性名： on + 事件的名字 onclick

属性值： 方法

```
直接在html设定

通过js的元素对象来设定
```

html中设定

id

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">js文件中：</span><br><span class="line"></span><br><span class="line">```var num=0;</span><br></pre></td></tr></tbody></table>

add()\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```{</span><br></pre></td></tr></tbody></table>

\+ ++num);\`\`\`

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">```}</span><br></pre></td></tr></tbody></table>

通过 js 的元素对象来设定

var div1 =document.getElementById("div1");

div1.onclick=add;

2.通过调用系统提供的方法

div1.addEventListener (时间类型click,函数add,事件的处理方式 bool false 冒泡 true 捕获);// 添加时间的监听者

div1.addEventListener("click",add);

可以给一个标签绑定多个事件

div1.removeEventListener("click",add);

ie8以前 兼容性的问题 attachEvent() detachEvent()

JavaScript 事件函数和事件对象

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br></pre></td><td class="code"><pre><span class="line">var div1 = document.getElementById("div1");</span><br><span class="line"></span><br><span class="line">div1.addEventListener("click",add);</span><br><span class="line"></span><br><span class="line">事件对象event  提供了事件的详细信息</span><br><span class="line"></span><br><span class="line">具体发生时间的元素，鼠标的位置，点击的状态 键盘的按键等</span><br><span class="line"></span><br><span class="line">fuction  add(event ){</span><br><span class="line"></span><br><span class="line">console.log(event);</span><br><span class="line"></span><br><span class="line">}</span><br><span class="line"></span><br><span class="line">screenX Y : 屏幕的左上角 </span><br><span class="line"></span><br><span class="line">ClientX Y : 浏览器的左上角</span><br></pre></td></tr></tbody></table>

//与键盘有关的操作

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br></pre></td><td class="code"><pre><span class="line">html文件中</span><br><span class="line"></span><br><span class="line">input type="text" name="a" id="input1"</span><br><span class="line"></span><br><span class="line">js文件中</span><br><span class="line"></span><br><span class="line">var input1 = document.getElementById("input1");//找到标签</span><br><span class="line"></span><br><span class="line">input1.addEventListener("keydown",add);//绑定事件</span><br><span class="line"></span><br><span class="line">fuction add(event){</span><br><span class="line"></span><br><span class="line">var e = event || window.event ;//ie8</span><br><span class="line"></span><br><span class="line">cosole.log(event);</span><br><span class="line"></span><br><span class="line">}// 设置事件</span><br></pre></td></tr></tbody></table>

有一些事件 带有自己的默认值

event.prevenDefault();//取消默认操作 在事件中操作

a1.onclick=add;

可以在事件中添加 return false ;

ie8 -> event.returnvalue= false;

return false ;

事件的传播：

在默认的情况下面，点击页面下的一个标签，处在传播路径上的标签都会监听到对应的事件

传播路径：

传播方式决定

事件流： 对应标签接收到时间的顺序

回升： 人-》 大山-》 人

两大阶段：

捕获阶段：从起始点 - 》 目标位置

冒泡阶段：目标位置 - 》 起始点

终止冒泡阶段

function div2Click(){

e.stopPropagation();

console.log("冒泡阶段 终止 ")

}

事件代理：

html 文件中：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line"></span><br><span class="line">&lt;ul&gt;    </span><br><span class="line">    &lt;li&gt;&lt;/li&gt;</span><br><span class="line">    &lt;li&gt;&lt;/li&gt;</span><br><span class="line">    &lt;li&gt;&lt;/li&gt;</span><br><span class="line">    &lt;li&gt;&lt;/li&gt;</span><br><span class="line">&lt;/ul&gt;&gt;</span><br></pre></td></tr></tbody></table>

js文件中：

<table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">直接设置在ulclick 中即可</span><br></pre></td></tr></tbody></table>

以上 是关于js的 简单用法 ，蝉壳学院的 初级课程结束

## [11-7日 学习日志](https://zhaofandong.github.io/2018/11/07/11-7%E6%97%A5-%E5%AD%A6%E4%B9%A0%E6%97%A5%E5%BF%97/)

Posted on 2018-11-07 |[](https://zhaofandong.github.io/2018/11/07/11-7%E6%97%A5-%E5%AD%A6%E4%B9%A0%E6%97%A5%E5%BF%97/#comments)

首先和大家说一下昨天的凡东不是没有学习，而是都在学习，看ps的圣经宝典，但是因为一天的时间都耗在上上面了，也没有什么好记录笔记的。于是没有写学习日志。（并且得出结论，设计这种东西呢，如果没有天赋，那就只能持之以恒。短时间的锻炼是不存在的）

所以今天的凡东回归继续学习js,有些东西放下就好了。

js:

作用域：可访问变量的集合（对象、函数）

我们定义了一个变量，这个变量可以被使用的地方，可以使用的范围

函数

全局作用域 全局变量 函数外定义的变量 在所有地方都能被访问

局部作用域 局部变量 在函数里面定义的变量 函数里面被访问到

function add(){

console.log(x);

x=100;

var y =100;//局部变量

}

add();

var x=1;// 全局变量

console.log(y);（报错）

在js中 y=100; 没有定义 默认定义为全局变量

预解析：

浏览器获得js文件的时候 不是立刻去执行代码，全片快速的扫表一边

把 变量 预先解析

把变量的声明 提前 全局 就是把var 提前

扫完全局变量 再扫 函数体 将默认定义为全局变量的 变量 提前

**闭包**：**变量的 私有化问题** （C#中的 private ）

局部变量的生命周期 在花括号开始到花括号结束 全局变量只要页面开着 他就活着

全局变量谁都可以访问他并且可以 修改

所以如何将一个局部变量拥有全局变量的周期呢

function add(){

var counter=0; //定义局部变量

plus= function(){//匿名函数

counter++;//伪全局变量 拥有全局变量的生命周期

console.log( counter);

}

}

函数的立即执行 函数申明和函数执行放在一起

(function (){

var counter=0; //定义局部变量

return function(){//匿名函数

counter++;//伪全局变量 拥有全局变量的生命周期

console.log( counter);

}

})();

//

var plus = (function (){

var counter=0; //定义局部变量

return function(){//匿名函数

counter++;//伪全局变量 拥有全局变量的生命周期

console.log( counter);

}

})();// 标准的传统闭包

plus();

创建对象举例:

var person1 ={

name:"xiaoming "

sex:"male"

slogan:function(){

fro(var i =0;i<10;i++){

console.log("我是小明");

}

}

}

//在这里回顾一下，因为js是弱语言所以不用int string 定义变量 而在C#中 要在方法之中声明变量 int age = 16; string name ="xiaoming ";

js中也有类的概念 ：

类：系统自带 Arry 自己创建的类

对象： 属性的基本操作 增删改查 遍历： 所有属性从头到尾 过一遍

查 获取属性的值 、

var name =person1.name;

name = person1["name"];

以字母开头 不用加引号的 可以用 . 来获取

其余的要用括号扩起来

person1["text-text"]

增加： 修改属性的时候 如果对象里面没有这条属性 自动加上

删除：delete delete person1.name; 两条属性中要加逗号

遍历： for (var pN in person1)

{

console.log(pN+person1[pN]);

}

//在C#语句中 便利一般用 foreach ;

对象的引用和赋值

## [日学习日志]

Posted on 2018-11-07 |

## [11-5日学习日志]

Posted on 2018-11-06 |
js基础：

原始类型： 数字Number 字符串 string 布尔值boolean undefined null

对象：object

类型转换 ： Number(a)

流程控制：

条件判断 if

switch 选择

循环 for while

if(表达式成立)

{

语句

}

举例：

var score = ?

if( score>90)

{

console.log("奖励100元");

}

else if(score>80)

{

console.log("做家务");

}

else

{

console.log("做家务");

}

//昨天因为被交出去吃夜宵了，然后就没有写太多 真是羞愧

## [11-4日学习日志]

Posted on 2018-11-04 |

ie6 pngbug 恢复
ie6 对图片png24支持度不高 则会导致透明效果过无法正常显示
1.
在ps中 web所用格式 png-24 改为png-8 但是图片清晰度会有所下降
2.
用javascript 来解决该问题 需要像页面引入外部的一个javascript 文件
然后写一下简单的js代码 来处理该问题 后缀为js
不带Min的用在开发 min 用在生产

引入js 文件
在body标签的最后引入js文件

在创建一个新的script标签 并且编写一些js代码

DD_belatedPNG.fix("div");

有一些情况，在特殊浏览器中需要执行，其他不需要执行，就用CSS HACK 代码

条件HACk 条件hack只对IE浏览器有效，其他的浏览器都会将他识别为注释

属性 hack
在样式前面添加一个下划线，样式只有ie6一下的浏览器才可以识别到

+   ie7 一下
    \\9 ie6 以上
    \\0 在样式后面加 只有ie8 及以上的才能够识别
    CSS HACK 尽量不使用
    
    选择器 hack
    
    +   html 只有ie6 认识
    
    JavaScript 学习
    
    node.js 用来写服务器
    

轻量级的编程语言
javascript 主要负责 ecmascript dom 库 （API） bom
语法：
1.用字母 数字 特殊符号 组成的命令

2.  字母大小写 十分铭感
3.  行来区分 命令 在同一行 用;来区分命令
    4.注释// 单行 /\*\*/ 多行注释
    5.输出
    alert 弹窗 弹出警告床
    console.log(); 在控制台中显示
    cause now you strangle me in my sleep and i wake up with you in my hand

值
数字： 0 1 *1
小数 附属点：1.1111
字符串 "dfsfdds"'1'
布尔值； true false
变量：
设x=1 x 就是变量

声明变量：
var x ;创建一个变量
x="helloWorld" ; 给变量赋值

var x= ; 同时 放在一起
多个变量
Var x,y,z ;
x=1;
y=1;
z=1;

var x=1, y=2,x=3;
x 变量名
1.变量名 必须是字母和数字
2.变量的开始， 最好字母
3.变量的大小写敏感

表达式：

运算符
算术 +- */%
顺序 从左往右 先 +* / % 后加减
括号提高优先
++ 自增 – 自减
++a 先自增
a++ 后自增
NAN不是 数字

比较 布尔值
a=1>2 false
== 值一样
===类和值

逻辑
&& || ！

var a=1 ;
var b ="2";
{}

var a ={60,61,62 } 数组
a[0] 第一个

var a={"a1":60,"a2":61,"a3":62}
a.a1 来访问
var a={0:60,1:61,2:62}
a[0];

如果对象时空
var a =null;

数据转换：
var a = "111";
var b =Number(a );

## [11-3 学习日志](https://zhaofandong.github.io/2018/11/03/11-3-%E5%AD%A6%E4%B9%A0%E6%97%A5%E5%BF%97/)

Posted on 2018-11-03 |[](https://zhaofandong.github.io/2018/11/03/11-3-%E5%AD%A6%E4%B9%A0%E6%97%A5%E5%BF%97/#comments)

border-collaspe
border-spacing
如果设置了 border-collaspe border-spacing自动失效

th 表头的默认样式

隔行变色：
tr:nth-child(eve){background-color:…}
移入变色：
tr:hover
{
background-color…
}

ie8 不支持各行变色

长表格

在某一些情况下 表格是非常的长的
这时候就需要将表格分为三个部分，表头，表格的底部
html给我们提供了三个标签：
thead
tbody
tfood

thead 中的内容永远会显示在最上边

如果表格没有写tbody 浏览器会自动在表格中添加tbody
并且将所有tr 放到tbody 中

表格布局
以前更多的情况用表格来进行布局的 但是这种方式早已被css淘汰
表格可以嵌套 在td里面再放一个表格

完善clearfix
使用空的table可以蛤蜊附子元素的外边距，组织外边距的重合

.box1:before{
display:table;
content="";
}

.clearfix:after{
content:""
display:block;
clear:both;
}

经过修改后的clearfix 是一个多功能的
.clearfix:before,
.clearfix:after{
content:"";
display:table;
clear:both;
}

表单
表单的作用就是用来将用户信息提交给服务器的，比如：百度的搜索框 注册 登入 这些操作都需要填写表单
使用form标签创建一个表单 form标签中必须制定一个action属性
该属性指向的是一个服务器地址 当我们提交表单会提交到action属性对应的地址

查询字符串的形式发送欸我们的服务器
属性名=属性值
长文本框

除了使用input 也可以使用button标签来创建按钮
更加灵活

表单提示文字
标签 该属性值需要制定一个表单项的id值

对表单项进行分组
可以讲表单项目的同一组放大器哦一个filedset里面

分组的名称

## [11-1日和2日的 学习日志大礼包]

Posted on 2018-11-02 |
布局：
透过页面看本质
想要盒子竖着 直接写
想要盒子横着 用浮动
margin 就是不会影响可见框的大小 但是会影响整个框的位置。
在文档流中 父元素的高度默认是被子元素撑开的
当子元素设置为浮动之后 父元素的高度会坍塌
会导致页面布局混乱
苏在在开发中一定要避免出现高度坍塌的问题
我们可以将父元素的高度写死，以避免坍塌的问题
但是 高度写死 不能自适应 元素高度 不太建议

解决高度塌陷问题：
根据w3c的标准 页面中每个元素都隐含一个属性叫做 Block Formatting Context
简称BFC 该属性可以设置打开或者关闭 默认是关闭的
当开启元素的BFC以后 元素将会具有如下的特性：
1.父元素的外边距不会和子元素重叠
2开启BFC的元素不会被浮动元素所覆盖
３.开启BFC的元素可以包含浮动的文子元素

如何开启元素的BFC
1.设置元素的浮动
使用这种方式开启，可以撑开父元素，但是会导致父元素的宽度丢失 而且使用这种方式协会下边的元素上移，不能解决问题
2.设置元素的绝对定位

3.设置元素为inline-block
可以解决问题，但是会导致宽度丢失，不推荐使用这种方式
3.将元素的overflow设置一个非visible
overflow:visible/hidden
推荐方式：将overflow设置为hidden是副作用最小的开启BFC的方式
但是在ie6及以下不支持BFC所以使用这种方式不能兼容ie
在ie６中虽然没有BFC 但是具有另一个隐含的属性 ＨａｓＬａｙｏｕｔ
该属性的作用和BFC类似，所以在IE６ 中可以通过开启ｈａｓｌａｙｏｕｔ来解决问题
开启方式很多：
１.直接将元素的ｚｏｏｍ设置为１
支持ｉｅ６以及一下

导航条
代码附上

清除浮动
我们有时候想取消其他元素浮动对当前元素产生的影响，这是可以采用ｃｌｅａｒ
　clear 可以用来清除其他浮动元素对当前元素的影响
可选值：
none 默认值 不清除浮动
left 清楚左侧浮动元素对当前元素的影响
right 清楚右侧浮动元素对当前元素的影响
both 清楚两侧浮动元素对当前元素的影响

第二种解决高度塌陷问题：
ｃｌｅａｒ　用于兄弟元素之间
可以直接在高度塌陷的父元素 的最后 添加一个空白的ｄｉｖ
　由于这个ｄｉｖ并没有浮动
然后再对其进行清楚浮动，这样可以通过这个空白的ｄｉｖ来撑开父元素的告诉
基本没有后副作用
但是用这种方式虽然可以解决问题 ，但是会在页面中添加多余的结构

第三种　通过ａｆｔｅｒ　伪类　向元素的组后添加一个空白的块元素，　然后对其清除浮动
这样做和添加一个ｄｉｖ的原理一样，可以达到一个相同的效果
而且不会在页面中添加的多余的ｄｉｖ
.clearfix:after{
content:" ";
display:block;
clear:both;
}

但是在ie6中还需要使用zoom 使用

定位：
定位指的是将制定的元素放到页面的任意位置
通过定位可以任意摆放元素
position 属性设置元素位置、
static 默认值 没有开启
relative 开启元素的相对定位
absolute 开启元素的绝对定位
fixed 开去元素的固定定位 （也是绝对顶外的一种 ）

position:relative
1.当开启了元素的相对定位以后，不设置偏移量之后 不会产生任何变化
可以通过left right top bottom 来设置元素的偏移量
left ：相对于其定位位置的左偏移量
right: 元素相对于其定位位置的右边偏移量
top :上面
bottom: 下面
left:200px;
top:200px;
2.相对定位相对的是它自身
3.相对定位的元素不会脱离文档流
4.相对定位会使元素提升一个层级

通常偏移量只需要使用两个就可以对一个元素进行定位
一般会学则水平方向和垂直方向的一个偏移量进行定位

5.相对定会不会影响元素的性质 块还是块 元素还是元素

绝对定位

当position 为 absolute的时候 是绝对路径
1.并且 当设置absolute的时候 会是元素脱离文档流
2.开启绝对定位以后，如果不设置偏移量，则元素的位置不会发生变化
3.绝对定位是相对于离他最近的开启了定位的父祖先元素进行定位的
如果所有的祖先元素都没有开启定位，则先对于浏览器窗口进行定位
4.绝对定位会是元素提升一个层级
5.绝对定位会改变元素性质， 内联元素会变成块元素， 宽和高会被内容撑开

固定定位：
当元素的position属性为fixed 则开始了元素的固定定位
固定定位也是一种绝对定位，大部分特点都和绝对定位一样
完全脱离文档流
不同的是：永远都会相对于浏览器窗口进行定位
固定定位会固定在浏览器窗口的某个位置 不会随着滚动条滚动
IE6 不支持固定定位

z-index 可以设置元素的层级
可以为我们的z-index指定一个正整数作为值，该值将会作为当前元素的层级
层级越高，越优先显示。
对于没有开启定位的元素不能使用z-index

父元素在高也不会盖过子元素

设置元素的透明背景
opacity 可以用来设置元素背景的透明
踏雪要一个0-1的值
0表示完全透明
1 表示完全不透明
opacity:0.6
在ie8及以下的浏览器中不支持 需要使用如下属性：
filter:alpha(opacity=50);

背景颜色：
backgorund-image:url(相对路径);
相对路径写在哪儿就相对于那个文件夹
如果背景图片大于元素，默认会显示图片的左上角
如果背景图片小于元素，默认会平铺的方式使图片充满元素
可以同时为一个元素制定背景颜色和背景图片
并且颜色在图片之后 作为底色

backgorund-repeat :
repeat 双方向重复（平铺）
no-repeat 不重复

repeat-x:水平方向
repeat-y;垂直方向平铺

Background-postion 可以调整图片元素在背景图片中的位置
background-postion: bottom right 右下

top right left bottom center
也可以直接指定偏移量
100px 0px 水平垂直
可以有正数 也可以有负数

background-attachemt:用来设置背景图片是否随页面一起滚动
scroll fixed 背景图片会固定在某一位置 ，不随页面滚动
当背景图片background-attachment为fixed 时
背景图片的定位永远相对于浏览器的窗口
一般给 body 设置 不会给别的设置

按钮

做完这个功能的时候，发现我们第一次切换图片会发现有一个非常快的闪烁
这个闪烁会造成一次不佳的用户体验
产生问题的原因：
背景图片是以外部资源的形式加载进网页的
浏览器没加载一个外部资源就需要单独的发送一次请求
但是我们外部资源并不是同时加载，浏览器会在资源被使用时加载资源
由于加载图片需要一定时间，所以在加载和显示过程会有一段时间，背景图片无法显示，导致出现闪烁的情况
同时加载一张图片上面有三个按钮
然后通过background-postion 进行图片移动 然后 就可以反应 这种图片叫做图片整合技术
（css sprite ）雪碧图
优点：
1.将多个图片整合为一张图片里，浏览器只需要发送一次请求，可以同时加载多个图片，提高访问效率，提高用户体验
2.将多个图片整合为一张图片，减少了图片的总大小，提高了请求速度，增加了用户体验

background: 通过该属性可以同时设置所有背景相关样式
height:5000px;
backround-color:#bfa;
background-image:url;
background-repeat:no-repeat;
background-position:center center;
background-attachment:fixed;

=
background:#bfa url center center no-repeat fixed;

没有顺序要求 谁在前 谁在后 都行
自己制作雪碧图 调整画布大小 通过图像

表格

表格就是用来表示一些格式化的数据的
HTML 中用table 标签来表示表格
tr表示表格的一行 有几行就有几个tr
在tr中需要使用td来创建一个单元格 有几个单元格就有几个td
width=40% 来调整宽度
align center 来控制居中

横向占格
rowspan 用来设置纵向合并

## [10-31 学习日志]

Posted on 2018-10-31 |

外边距

很多浏览器为了在页面没有央视的时候，可以有一个更好的显示效果
所以有默认的margin 和 PADDING
但是很多情况下我们并不需要他的默认样式
所以在编写网站的时候我们需要删除他的默认样式、
在stylezhong
*{margin:0;
padding:0;}

内联元素的盒子
内联元素 不能设置width 和 height
padding 可以设置 水平方向 内边距
内联元素可以设置垂直方向内边距，但是他不会影响页面的布局
内联元素可以设置边框，但是垂直的边框不会影响到页面的布局
内联元素支持水平方向的外边距 水平方向的外边距不会重叠 求和
内联元素不支持垂直的外边距 看不出来的

样式 display
display:inline 把一个元素作为一个内联元素显示
diaplay: block 把一个元素作为一个 块元素
diaplay:inline block 可以是一个元素既有行内元素的特点 又有块元素的特点
none 此元素不会被显示
visibility 可以用来设置元素的隐藏和显示
hidden 隐藏了 但是有位置占着

overflow

子元素默认是存在于父元素的内容去
理论上 子元素的最大可以等于父元素内容大小
如果子元素的大小超过了父元素的内容去 则超过的大小会在父元素以外的位置显示
超过父元素的内容 我们称为 溢出的 内容
父元素默认是将溢出内容，在父元素外边显示

通过overflow 设置父元素 如何设置溢出内容
overflow:hidden; 溢出的内容会被修剪，不会显示
overflow:scroll 多出的滚动条 这个属性无论内容是否溢出 都会添加水平和垂直双向的滚动条
auto 会根据需求 自动添加 水平和垂直

文档流

网页最底层 表示的是 一个页面中的位置
我们所创建的元素默认都处在文档流中
元素在文档流中的特点

块元素：
独占一行 自上向下排列
默认宽度为父元素100% 当元素的高度或宽度为自动的时候， 指定内边距不会影响可见框的大小 而且是自动修改过宽度和高度，以适应内边距
高度被内容撑开
内联元素
只占自身的大小 从左自右排列
在文档流中 宽和高都是由内容撑开的

今天出了点小事情 先回一趟寝室 不住工作室了
然后 回寝室补上 明天再把下文补上
晚安：）

