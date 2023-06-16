windows git注意：
遇到vscode 发生让你确认 make sure you configure your 'user.name' and 'user.email'
---> 解决方案  
打开本地安装的git/bin目录
git config --global user.email "you email"
git config --global user.name "you name"

本次版本管理：
1. node:      16.14.2
2. npm：       8.5.0
3. TypeScript: 4.6.2
4. React:     18.2.0

安装
1. 安装node.js
2. 通过npm安装react   本次安装17.0.2版本
    npm i react-dom@17.0.2 --legacy-peer-deps
    npm i react@17.0.2 --legacy-peer-deps
如果下载最新的直接跳到 第六步
3. npm安装react脚手架 
    npm install -g create-react-app
4. 在目标文件夹下创建todolist项目
    create-react-app todolist
5. 运行todolist项目
    cd todolist
    npm start

6.  注意： 
    可以用官方的方法下载最新的：
    npx create-react-app my-app-name
    cd my-app-name
    npm start


    前端理念  PWA  PROGRESSIVE WEB APPLICATION
https 协议在服务器上
import registerServiceWorker from './registerServiceWorker'；   


#### JSX语法中，如果我们要是用自己创建的组件   TodoList.js
### 自定义组件开头必须是大写字母  小写开头的组件一般是原生HTML5

JSX语法中， 一次render只能有一个div被抛出，所以所有的组件都必须被包裹在一个div下。
但是React 16提供了一个Fragment占位符组件  用Frament替代最外层的div标签


### React的响应式设计思想  和  事件绑定  TodoList2.js
在js中 可以用onchange做事件绑定，但是在react中，必须用onChange  这是规定

### React是不操作dom，操作数据才是王道！！！


##Hooks
这是一个很重要的东西，但是又不是很重要。
其实可以简单地理解成是一个语法糖集合。就是把两层函数式编程做了封装，一个函数就解决了问题