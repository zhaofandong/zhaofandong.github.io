---

title: 重建Blog
date: {{ 2025-03-13 }}
tags: [blog,tech]



#subtitle: "Cyouhanki Study Notes"
description: 'This site is based on hexo and oliver theme'
keywords: blog, tech, life

comments: true
---

  I reopened this page because I am searching for a job.
  I want to try a new way of using the AI editor with Hexo. Additionally, 
  I want to explore writing CSS and JS to integrate with Hexo.
 
 <h2>问题1 鼠标的动态效果的消失 以及原因 。</h2>

 <h3>问题形容：刚才发现首页的时候，鼠标的效果消失。</h3>

 观察了theme文件夹以外的index.html和theme文件夹的index.ejs文件。

 <h3>排查方法：</h3>
 文件对比分析。

 <h3>结果：</h3>
 发现错误点在于index.ejs使用了css文件的相对路径引用，导致效果失效。
 【<link rel="stylesheet" href="themes/oliver/source/css/cursor.css">】
 但是更改为绝对路径【<link rel="stylesheet" href="/css/cursor.css">】（也就是在编辑器里复制的路径，但是在其他文本之中，是绝对路径）就能成功。
 但是js的引用和路径没有关系，都能实现。

 ## 问题2 ：在修改了about文件夹下的index.md名称之后，突然报错

 ###报错内容：TypeError: Cannot read properties of null (reading 'utcOffset')

 ###检查方法：
 1.突然出现以为是不能修改文件名，然后准备找路径。
 2.但是觉得不太可能会出现这种主题模版不能修改名字的情况就去查找这个报错。
 3.参考这个网站https://github.com/hexojs/hexo/issues/1130
 4.对应时区表：https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 5.发现hexo的中文版介绍页面对于时区的地方写错了，Asia/Japan并不可以
 6.应该在_config.yml中将时区换成Asia/Tokyo
 



