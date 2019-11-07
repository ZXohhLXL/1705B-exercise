### 命令行 CLI

命令行界面（英语：command-line interface，缩写：CLI）是在图形用户界面得到普及之前使用最为广泛的用户界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。也有人称之为字符用户界面（CUI）。


#### 编写 命令行 

  第一步：新建文件夹=>npm init -y(package.json) 

  第二步：新建js文件写相关逻辑 
         
         在头部添加 #！ /usr/bin/env node 执行当前文件使用node

  第三步：在package.json添加 bin字段
     {
         "name":"lxl",
         ...
         "bin":{
             "命令行名称"："文件 ./index.js"
         }
     }

  第四步：输入 npm link 生成.cmd文件

  第五步：输入命令 测试

### 获取命令行参数  process.argv

    

