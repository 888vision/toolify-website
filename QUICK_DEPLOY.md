# 🚀 快速上线详细步骤指南

## 📋 准备工作

### 1. 检查项目文件
确保以下文件存在：
- ✅ `package.json` - 项目配置
- ✅ `src/` - 源代码文件夹
- ✅ `.gitignore` - Git 忽略文件（已创建）

### 2. 检查 Node.js 版本
```bash
node -v
```
需要 Node.js 18 或更高版本。如果没有，访问 https://nodejs.org 下载安装。

---

## 第一步：创建 GitHub 账号和仓库

### 1.1 注册 GitHub 账号（如果还没有）

1. 访问：https://github.com
2. 点击右上角 "Sign up"
3. 填写信息：
   - Username（用户名）
   - Email（邮箱）
   - Password（密码）
4. 验证邮箱
5. 完成注册

### 1.2 创建新仓库

1. 登录 GitHub 后，点击右上角头像旁边的 **"+"** 按钮
2. 选择 **"New repository"**
3. 填写仓库信息：
   ```
   Repository name: toolify-website
   Description: AI Tools Directory Website
   Visibility: 选择 Public（公开）或 Private（私有）
   ```
4. **不要**勾选以下选项：
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
5. 点击 **"Create repository"** 按钮

### 1.3 获取仓库地址

创建完成后，你会看到一个页面，上面有仓库地址，类似：
```
https://github.com/你的用户名/toolify-website.git
```
**复制这个地址，稍后会用到！**

---

## 第二步：安装 Git（如果还没有）

### 2.1 检查是否已安装 Git

打开 PowerShell 或 CMD，输入：
```bash
git --version
```

### 2.2 如果显示 "command not found"，需要安装 Git

1. 访问：https://git-scm.com/download/win
2. 下载 Windows 版本
3. 运行安装程序
4. 全部选择默认选项，点击 "Next" 直到完成
5. 安装完成后，**重启电脑**（或重启终端）

### 2.3 配置 Git（首次使用）

打开 PowerShell 或 CMD，输入以下命令（替换成你的信息）：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

例如：
```bash
git config --global user.name "John Doe"
git config --global user.email "john@example.com"
```

---

## 第三步：上传代码到 GitHub

### 3.1 打开项目文件夹

在 PowerShell 或 CMD 中，输入：
```bash
cd D:\Projects\website-clone
```

### 3.2 初始化 Git 仓库

```bash
git init
```

你会看到：`Initialized empty Git repository in D:/Projects/website-clone/.git/`

### 3.3 添加所有文件

```bash
git add .
```

### 3.4 提交代码

```bash
git commit -m "Initial commit - Toolify website"
```

### 3.5 连接到 GitHub 仓库

**重要：将下面的 `你的用户名` 替换成你的 GitHub 用户名！**

```bash
git remote add origin https://github.com/你的用户名/toolify-website.git
```

例如，如果你的用户名是 `john123`，仓库名是 `toolify-website`，则输入：
```bash
git remote add origin https://github.com/john123/toolify-website.git
```

### 3.6 重命名主分支为 main

```bash
git branch -M main
```

### 3.7 上传代码到 GitHub

```bash
git push -u origin main
```

**第一次上传会要求登录：**

1. 会弹出浏览器窗口，要求登录 GitHub
2. 或者会要求输入用户名和密码
3. 如果使用密码，可能需要创建 Personal Access Token：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token"
   - 勾选 `repo` 权限
   - 点击 "Generate token"
   - 复制生成的 token，用它作为密码

### 3.8 验证上传成功

1. 刷新你的 GitHub 仓库页面
2. 应该能看到所有项目文件
3. 如果看到文件列表，说明上传成功！✅

---

## 第四步：部署到 Vercel

### 4.1 访问 Vercel

1. 打开浏览器，访问：https://vercel.com
2. 点击右上角 **"Sign Up"** 或 **"Log In"**

### 4.2 使用 GitHub 登录

1. 点击 **"Continue with GitHub"**
2. 会跳转到 GitHub 授权页面
3. 点击 **"Authorize Vercel"**
4. 完成授权后，自动返回 Vercel

### 4.3 创建新项目

1. 登录后，点击 **"Add New..."** 按钮
2. 选择 **"Project"**
3. 你会看到你的 GitHub 仓库列表
4. 找到 `toolify-website` 仓库
5. 点击 **"Import"** 按钮

### 4.4 配置项目（通常使用默认设置）

Vercel 会自动检测到这是 Next.js 项目，配置如下：

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**通常不需要修改，直接使用默认设置即可！**

### 4.5 部署项目

1. 点击页面底部的 **"Deploy"** 按钮
2. 等待部署过程（通常 2-3 分钟）
3. 你会看到部署进度：
   - Installing dependencies...
   - Building...
   - Deploying...

### 4.6 部署完成！

部署完成后，你会看到：
- ✅ 绿色的 "Success" 消息
- 🌐 你的网站地址，类似：`https://toolify-website.vercel.app`

**点击这个地址，就能访问你的网站了！** 🎉

---

## 第五步：自定义域名（可选）

### 5.1 在 Vercel 中添加域名

1. 在 Vercel 项目页面，点击 **"Settings"** 标签
2. 点击左侧菜单的 **"Domains"**
3. 输入你的域名（如：`www.toolify.ai`）
4. 点击 **"Add"**

### 5.2 配置 DNS

Vercel 会显示需要添加的 DNS 记录：
- 类型：CNAME
- 名称：www（或 @）
- 值：cname.vercel-dns.com

在你的域名服务商（如 GoDaddy、Namecheap）添加这个 DNS 记录。

### 5.3 等待 DNS 生效

通常需要几分钟到几小时，DNS 生效后，你的域名就能访问网站了。

---

## 🔧 常见问题解决

### 问题 1：Git 命令找不到

**解决方案：**
1. 确认已安装 Git
2. 重启终端或电脑
3. 检查环境变量 PATH 是否包含 Git

### 问题 2：Git push 失败 - 认证错误

**解决方案：**
1. 使用 Personal Access Token 代替密码
2. 或者使用 SSH 密钥：
   ```bash
   # 生成 SSH 密钥
   ssh-keygen -t ed25519 -C "your_email@example.com"
   
   # 复制公钥
   cat ~/.ssh/id_ed25519.pub
   
   # 在 GitHub Settings > SSH and GPG keys 中添加
   ```

### 问题 3：Vercel 部署失败

**可能原因和解决方案：**

1. **构建错误**
   - 检查构建日志中的错误信息
   - 确保所有依赖都正确安装
   - 检查 Node.js 版本（需要 18+）

2. **环境变量缺失**
   - 如果有环境变量，在 Vercel 项目设置中添加

3. **路径错误**
   - 检查 `package.json` 中的脚本是否正确

### 问题 4：网站显示 404 错误

**解决方案：**
1. 检查 Vercel 部署日志
2. 确认构建成功
3. 尝试重新部署

### 问题 5：图标不显示

**解决方案：**
- 这是正常的，因为某些图标服务可能无法访问
- 网站会显示首字母图标作为后备方案
- 不影响网站功能

---

## 📝 部署后检查清单

部署完成后，请检查：

- [ ] 网站能正常打开
- [ ] 所有页面都能访问
- [ ] 搜索功能正常
- [ ] 筛选功能正常
- [ ] 移动端显示正常
- [ ] 所有链接都能点击
- [ ] 图标显示正常（至少显示首字母）

---

## 🎯 快速命令参考

### Git 常用命令

```bash
# 查看状态
git status

# 添加文件
git add .

# 提交更改
git commit -m "描述信息"

# 推送到 GitHub
git push

# 查看远程仓库
git remote -v
```

### Vercel 常用命令

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

---

## 🆘 需要帮助？

如果遇到问题：

1. **查看错误信息**
   - Git 错误：查看终端输出的错误信息
   - Vercel 错误：查看 Vercel 部署日志

2. **常见错误搜索**
   - 复制错误信息到 Google 搜索
   - 查看 Stack Overflow

3. **联系我**
   - 告诉我具体的错误信息
   - 我会帮你解决

---

## ✅ 完成！

恭喜！你的网站已经上线了！🎉

现在你可以：
- 分享网站链接给朋友
- 在社交媒体上推广
- 提交到搜索引擎
- 继续优化和更新内容

祝你网站运营顺利！🚀


