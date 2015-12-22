NodeJs
npm install -save-dev http-server  默认服务器
http-server -a localhost -p 8000   切换端口


npm install -g supervisor          调试
supervisor server.js               开启服务 

npm install -g forever             后台服务器
npm install -save-dev forever 

forever start app.js               开启服务
forever stop app.js                关闭服务


Express
npm install -save-dev express             express
npm install -save-dev express-session     session
npm install -save-dev cookie-parser       session
npm install -save-dev log4js              log
npm install -save-dev iconv-lite          get乱码


Bower
npm install -g bower                      第三方包管理工具


Gulp
npm install --g gulp
npm install --save-dev gulp
npm install --save-dev gulp-uglify	      压缩js
npm install --save-dev gulp-minify-css	  压缩css
npm install --save-dev gulp-imagemin	  压缩图片
npm install --save-dev imagemin-pngquant  压缩图片
npm install --save-dev gulp-css-spriter   制作雪碧图
npm install --save-dev gulp-sass          转化sass
npm install --save-dev gulp-compass       转化sass
npm install --save-dev gulp-rename        重命名
npm install --save-dev gulp-concat        合并文件
npm install --save-dev gulp-rev           替换路径
npm install --save-dev gulp-rev-collector 替换路径
npm install --save-dev gulp-sequence      顺序执行任务
npm install --save-dev gulp-livereload    自动刷新浏览器


Angular                    MVVM前端框架


Backbone                   MVC前端框架


Requirejs                  AmdJs模块化
SeaJs                      CmdJs模块化



Scss                       css面向对象编程
Less                       css面向对象编程



打包
node r.js -o build.js
