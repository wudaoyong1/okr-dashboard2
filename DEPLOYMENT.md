# GitHub Pages部署指南

## 前置要求
- GitHub账号
- Git工具（如TortoiseSVN、Git Bash等）

## 部署步骤

### 1. 创建GitHub仓库
1. 登录GitHub，点击右上角的"+"号
2. 选择"New repository"
3. 仓库名称：`okr-dashboard`（或其他名称）
4. 设置为Public（公开）
5. 勾选"Add a README file"
6. 点击"Create repository"

### 2. 上传代码到GitHub

#### 方法1：使用Git命令行
```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "初始提交：OKR数据监测看板"

# 添加远程仓库
git remote add origin https://github.com/your-username/okr-dashboard.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

#### 方法2：使用GitHub网页上传
1. 在仓库页面点击"uploading an existing file"
2. 拖拽或选择项目中的所有文件（除了.gitignore）
3. 在"Commit changes"中填写提交信息
4. 点击"Commit changes"

### 3. 启用GitHub Pages
1. 进入仓库页面
2. 点击"Settings"标签
3. 在左侧菜单中找到"Pages"（在"Code and automation"下）
4. 在"Build and deployment"下的"Branch"中：
   - 选择`main`分支
   - 选择`/ (root)`目录
   - 点击"Save"
5. 等待1-2分钟，页面会显示访问地址

### 4. 访问看板
访问地址格式：`https://your-username.github.io/okr-dashboard/`

将链接分享给团队成员，他们就可以直接访问看板了。

## 更新看板内容

### 修改数据文件
1. 修改`data.js`中的数据
2. 提交并推送到GitHub

#### 使用Git命令行
```bash
git add data.js
git commit -m "更新数据"
git push
```

#### 使用GitHub网页
1. 在仓库中找到`data.js`文件
2. 点击文件，然后点击铅笔图标编辑
3. 修改数据后点击"Commit changes"

### 修改页面内容
1. 修改HTML/CSS/JS文件
2. 提交并推送到GitHub
3. GitHub Pages会自动重新部署

## 自定义域名（可选）

### 1. 准备域名
- 购买域名（如阿里云、腾讯云等）
- 解析域名到GitHub Pages

### 2. 配置GitHub Pages
1. 在仓库Settings -> Pages中
2. 在"Custom domain"中输入你的域名
3. 点击"Save"
4. GitHub会生成一个CNAME文件

### 3. 配置DNS
在你的域名DNS设置中添加：
```
类型：CNAME
主机记录：@
记录值：your-username.github.io
```

## 常见问题

### Q: 页面无法访问？
A: 检查以下几点：
- 仓库是否设置为Public
- Pages是否正确配置
- 是否等待了足够的部署时间（1-2分钟）

### Q: 更新后页面没有变化？
A: 清除浏览器缓存，或强制刷新（Ctrl+F5）

### Q: 图表显示不正常？
A: 检查Chart.js库的CDN链接是否可以访问

### Q: 导出报告功能不工作？
A: 检查html2canvas库的CDN链接是否可以访问

## 维护建议

### 定期备份
- 定期将仓库clone到本地作为备份
- 重要数据导出为JSON文件保存

### 版本管理
- 每次更新数据时填写清晰的commit信息
- 使用Git标签标记重要版本

### 团队协作
- 给团队成员添加仓库访问权限
- 建立提交规范
- 定期同步代码

## 联系支持
如有问题，请联系技术负责人。
