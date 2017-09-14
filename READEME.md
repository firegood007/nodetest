#1 安装mysql 5.5.
	下载地址; http://www.jb51.net/softs/363920.html
	建议 
		账号： root  (默认)
		密码： root  (文件配置配的是root)
		端口： 3306
#2 安装sqlyog
	自行安装。
	安装完成打开连接数据库。localhost:3306
#3 导入数据库 websites.sql,
	导入方法参考： http://jingyan.baidu.com/article/647f0115c5ad9f7f2148a8c6.html
#3 安装依赖， 建议cnpm
	执行: npm install -g cnpm --registry=https://registry.npm.taobao.org
	安装依赖： cnpm install.
#4 启动：
	node backend/start.js
#5 打开浏览器：
	localhost:8081