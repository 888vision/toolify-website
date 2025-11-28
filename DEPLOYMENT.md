# 网站上线部署指南

## 🚀 推荐方案：Vercel（最简单，Next.js 官方平台）

### 方法一：通过 Vercel 网站部署（推荐）

1. **准备工作**
   - 确保代码已提交到 Git（GitHub、GitLab 或 Bitbucket）
   - 如果没有 Git 仓库，先创建一个：
     ```bash
     cd D:\Projects\website-clone
     git init
     git add .
     git commit -m "Initial commit"
     ```

2. **创建 GitHub 仓库**（如果还没有）
   - 访问 https://github.com
   - 点击右上角 "+" → "New repository"
   - 输入仓库名称（如：toolify-website）
   - 选择 Public 或 Private
   - 点击 "Create repository"
   - 按照页面提示上传代码：
     ```bash
     git remote add origin https://github.com/你的用户名/toolify-website.git
     git branch -M main
     git push -u origin main
     ```

3. **部署到 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录
   - 点击 "Add New Project"
   - 选择你的仓库
   - Vercel 会自动检测 Next.js 项目
   - 点击 "Deploy"
   - 等待 2-3 分钟，部署完成！

4. **获取网站地址**
   - 部署完成后，Vercel 会提供一个网址，如：`https://your-project.vercel.app`
   - 可以自定义域名（在项目设置中）

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd D:\Projects\website-clone
   vercel
   ```
   - 按照提示操作
   - 选择默认设置即可

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

---

## 🌐 备选方案

### 方案二：Netlify

1. **访问 Netlify**
   - 访问 https://www.netlify.com
   - 使用 GitHub 账号登录

2. **部署步骤**
   - 点击 "Add new site" → "Import an existing project"
   - 选择你的 GitHub 仓库
   - 构建设置：
     - Build command: `npm run build`
     - Publish directory: `.next`
   - 点击 "Deploy site"

### 方案三：GitHub Pages（需要额外配置）

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **修改 package.json**
   ```json
   {
     "scripts": {
       "export": "next export",
       "deploy": "npm run build && npm run export && gh-pages -d out"
     }
   }
   ```

3. **部署**
   ```bash
   npm run deploy
   ```

### 方案四：自建服务器（VPS/云服务器）

1. **服务器要求**
   - Node.js 18+ 
   - npm 或 yarn
   - PM2（进程管理器）

2. **部署步骤**
   ```bash
   # 1. 上传代码到服务器
   # 2. 安装依赖
   npm install
   
   # 3. 构建项目
   npm run build
   
   # 4. 安装 PM2
   npm install -g pm2
   
   # 5. 启动项目
   pm2 start npm --name "toolify" -- start
   
   # 6. 设置开机自启
   pm2 startup
   pm2 save
   ```

3. **配置 Nginx（反向代理）**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 📝 部署前检查清单

- [ ] 确保所有功能正常工作
- [ ] 测试移动端显示
- [ ] 检查环境变量（如果有）
- [ ] 更新联系方式信息
- [ ] 检查 SEO 设置
- [ ] 测试所有链接

---

## 🔧 常见问题

### 1. 构建失败
- 检查 Node.js 版本（需要 18+）
- 检查依赖是否正确安装
- 查看构建日志中的错误信息

### 2. 图标不显示
- 检查网络连接
- 某些图标服务可能需要代理

### 3. 域名配置
- Vercel: 项目设置 → Domains
- Netlify: Site settings → Domain management

---

## 💡 推荐配置

### 环境变量（如果需要）
在 Vercel 项目设置中添加：
- `NODE_ENV=production`

### 自定义域名
1. 在域名服务商添加 CNAME 记录
2. 在 Vercel 中添加域名
3. 等待 DNS 生效（通常几分钟到几小时）

---

## 🎉 部署完成后的步骤

1. **测试网站**
   - 访问部署后的网址
   - 测试所有功能
   - 检查移动端显示

2. **提交到搜索引擎**
   - Google Search Console
   - Bing Webmaster Tools

3. **监控和维护**
   - 设置错误监控（如 Sentry）
   - 定期更新内容
   - 备份数据

---

## 📞 需要帮助？

如果部署过程中遇到问题，可以：
1. 查看 Vercel/Netlify 的文档
2. 检查构建日志
3. 联系我获取帮助


