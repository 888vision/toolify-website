# 🌐 域名配置完整指南

## 📋 概述

将你的SEMRUSH网站连接到自定义域名需要以下步骤：
1. 购买域名
2. 部署网站到支持域名的平台
3. 配置DNS记录
4. 连接域名到网站

---

## 🛒 步骤1: 购买域名

### 推荐的域名注册商

#### 国际域名注册商（支持全球）
1. **Namecheap** (https://www.namecheap.com)
   - 价格合理，界面友好
   - 支持支付宝/微信支付
   - 免费Whois保护

2. **GoDaddy** (https://www.godaddy.com)
   - 全球最大域名注册商
   - 经常有优惠活动
   - 支持中文界面

3. **Cloudflare Registrar** (https://www.cloudflare.com/products/registrar/)
   - 成本价销售，无加价
   - 免费DNS和CDN
   - 安全性高

4. **Google Domains** (https://domains.google)
   - Google服务，稳定可靠
   - 简洁的界面

#### 国内域名注册商
1. **阿里云** (https://wanwang.aliyun.com)
   - 国内访问快
   - 支持备案
   - 价格合理

2. **腾讯云** (https://dnspod.cloud.tencent.com)
   - 国内服务稳定
   - 支持备案

### 购买步骤

1. **选择域名**
   - 建议选择 `.com`、`.net`、`.org` 等常见后缀
   - 域名要简短、易记、与品牌相关
   - 例如：`semrush-seo.com`、`semrushglobal.com`

2. **注册账户并购买**
   - 在注册商网站注册账户
   - 搜索并选择你想要的域名
   - 完成支付

3. **获取域名管理权限**
   - 购买后，你会获得域名的管理权限
   - 记住你的域名注册商账户信息

---

## 🚀 步骤2: 部署网站到支持域名的平台

### 推荐平台（按推荐顺序）

#### 1. Vercel（最推荐）⭐
- **优点**:
  - 免费套餐足够用
  - 自动HTTPS证书
  - 全球CDN加速
  - 与Next.js完美集成
  - 支持自定义域名
  - 自动部署

- **免费套餐限制**:
  - 100GB带宽/月
  - 无限请求
  - 个人项目完全够用

#### 2. Netlify
- 类似Vercel的功能
- 免费套餐也很慷慨
- 支持自定义域名

#### 3. Cloudflare Pages
- 完全免费
- 全球CDN
- 与Cloudflare域名集成方便

### Vercel部署步骤（推荐）

#### 方法1: 通过GitHub部署（推荐）

1. **准备GitHub仓库**
   ```bash
   # 在项目目录初始化Git
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit"
   
   # 在GitHub创建新仓库，然后：
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git branch -M main
   git push -u origin main
   ```

2. **连接Vercel**
   - 访问 https://vercel.com
   - 使用GitHub账号登录
   - 点击 "Add New Project"
   - 选择你的GitHub仓库
   - Vercel会自动检测Next.js项目
   - 点击 "Deploy"

3. **获取Vercel域名**
   - 部署完成后，你会得到一个免费域名
   - 格式：`你的项目名.vercel.app`
   - 例如：`semrush-website.vercel.app`

#### 方法2: 通过Vercel CLI部署

```bash
# 安装Vercel CLI
npm install -g vercel

# 在项目目录运行
vercel

# 按照提示操作
# 首次部署选择生产环境
vercel --prod
```

---

## 🔧 步骤3: 配置DNS记录

### 在Vercel中添加自定义域名

1. **进入项目设置**
   - 在Vercel Dashboard中，选择你的项目
   - 点击 "Settings" → "Domains"

2. **添加域名**
   - 输入你的域名（例如：`semrush-seo.com`）
   - 点击 "Add"
   - Vercel会显示需要配置的DNS记录

3. **获取DNS配置信息**
   - Vercel会显示类似这样的信息：
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

### 在域名注册商配置DNS

#### 如果使用Namecheap/GoDaddy等

1. **登录域名注册商**
   - 进入域名管理面板
   - 找到DNS设置或域名解析

2. **添加A记录**
   - 类型：`A`
   - 主机记录/Name：`@` 或留空
   - 记录值/Value：Vercel提供的IP地址（例如：`76.76.21.21`）
   - TTL：`600` 或自动

3. **添加CNAME记录（可选，用于www）**
   - 类型：`CNAME`
   - 主机记录/Name：`www`
   - 记录值/Value：`cname.vercel-dns.com`
   - TTL：`600` 或自动

#### 如果使用Cloudflare

1. **添加站点到Cloudflare**
   - 登录Cloudflare
   - 添加你的域名
   - 按照提示更新Nameservers

2. **配置DNS记录**
   - 在Cloudflare DNS设置中
   - 添加A记录：`@` → Vercel IP
   - 添加CNAME记录：`www` → `cname.vercel-dns.com`
   - 将代理状态设为"仅DNS"（灰色云朵）

#### 如果使用阿里云/腾讯云

1. **进入DNS解析控制台**
   - 找到你的域名
   - 点击"解析设置"

2. **添加记录**
   - A记录：`@` → Vercel IP地址
   - CNAME记录：`www` → `cname.vercel-dns.com`

---

## ⏱️ 步骤4: 等待DNS生效

### DNS传播时间
- **通常**: 几分钟到几小时
- **最长**: 24-48小时
- **检查工具**: 
  - https://dnschecker.org
  - https://www.whatsmydns.net

### 验证DNS配置

```bash
# 在命令行检查
nslookup 你的域名.com
# 或
dig 你的域名.com
```

应该看到Vercel的IP地址。

---

## ✅ 步骤5: 验证HTTPS证书

1. **Vercel自动配置**
   - Vercel会自动为你的域名申请SSL证书
   - 通常需要几分钟到几小时

2. **检查证书状态**
   - 在Vercel Dashboard的Domains页面
   - 查看域名状态，应该显示"Valid"

3. **测试访问**
   - 访问 `https://你的域名.com`
   - 应该看到你的网站，并且有锁图标（HTTPS）

---

## 🔄 步骤6: 更新网站配置（可选）

### 更新环境变量

如果网站中有硬编码的URL，需要更新：

1. **在Vercel中设置环境变量**
   - 项目设置 → Environment Variables
   - 添加：`NEXT_PUBLIC_BASE_URL=https://你的域名.com`

2. **更新代码中的URL**
   - 检查是否有硬编码的 `localhost:3000`
   - 替换为你的域名

---

## 📝 完整示例流程

### 示例：将网站部署到 `semrush-seo.com`

1. **购买域名**
   ```
   在Namecheap购买: semrush-seo.com
   价格: ~$10/年
   ```

2. **部署到Vercel**
   ```bash
   # 推送代码到GitHub
   git push origin main
   
   # 在Vercel连接GitHub仓库
   # 自动部署完成
   ```

3. **添加域名到Vercel**
   ```
   Vercel Dashboard → Settings → Domains
   添加: semrush-seo.com
   ```

4. **配置DNS（在Namecheap）**
   ```
   A记录: @ → 76.76.21.21
   CNAME记录: www → cname.vercel-dns.com
   ```

5. **等待生效**
   ```
   等待5-30分钟
   检查: https://dnschecker.org
   ```

6. **访问网站**
   ```
   https://semrush-seo.com ✅
   ```

---

## 🆘 常见问题

### Q1: DNS配置后无法访问？
- **检查**: DNS是否已生效（使用dnschecker.org）
- **检查**: Vercel域名配置是否正确
- **等待**: DNS可能需要24小时完全生效

### Q2: HTTPS证书未生效？
- **等待**: Let's Encrypt证书申请需要时间
- **检查**: 域名DNS是否已正确指向Vercel
- **联系**: Vercel支持（如果超过24小时）

### Q3: 想使用子域名？
- 在Vercel添加子域名：`blog.你的域名.com`
- 配置DNS CNAME记录：`blog` → `cname.vercel-dns.com`

### Q4: 国内访问慢？
- 考虑使用国内CDN（如阿里云CDN）
- 或使用Cloudflare CDN加速
- 考虑备案使用国内服务器

### Q5: 需要备案吗？
- **国内域名（.cn等）**: 需要备案
- **国际域名（.com等）**: 
  - 使用国外服务器：不需要备案
  - 使用国内服务器：需要备案

---

## 💡 推荐配置

### 最佳实践

1. **使用Vercel + Cloudflare**
   - Vercel部署网站
   - Cloudflare管理DNS和CDN
   - 免费且性能好

2. **启用HTTPS**
   - Vercel自动配置
   - 确保所有流量使用HTTPS

3. **配置重定向**
   - `www.你的域名.com` → `你的域名.com`
   - 或反之，保持一致性

---

## 📞 需要帮助？

如果遇到问题：
1. 查看Vercel文档：https://vercel.com/docs
2. 查看域名注册商帮助文档
3. 联系我，提供具体错误信息

---

**提示**: 整个过程通常需要1-2小时（包括DNS传播时间）

