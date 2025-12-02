# ⚡ 快速域名配置指南（5分钟版）

## 🎯 最简单的方法：Vercel + 自定义域名

### 前提条件
- ✅ 已购买域名
- ✅ 代码已推送到GitHub

---

## 📋 快速步骤

### 1️⃣ 部署到Vercel（2分钟）

```bash
# 如果还没安装Vercel CLI
npm install -g vercel

# 在项目目录运行
vercel

# 按照提示操作，选择生产环境
vercel --prod
```

或者通过网页：
1. 访问 https://vercel.com
2. 用GitHub登录
3. 点击 "Add New Project"
4. 选择你的仓库
5. 点击 "Deploy"

### 2️⃣ 添加域名到Vercel（1分钟）

1. 在Vercel Dashboard，选择你的项目
2. 进入 **Settings** → **Domains**
3. 输入你的域名（例如：`semrush-seo.com`）
4. 点击 **Add**
5. 复制显示的DNS配置信息

### 3️⃣ 配置DNS（2分钟）

#### 在域名注册商（以Namecheap为例）：

1. 登录Namecheap
2. 进入 **Domain List** → 选择你的域名 → **Advanced DNS**
3. 添加记录：

**A记录**:
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21` (Vercel提供的IP)
- TTL: `Automatic`

**CNAME记录** (用于www):
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: `Automatic`

4. 保存

### 4️⃣ 等待生效（5-30分钟）

- 检查DNS: https://dnschecker.org
- 输入你的域名，查看是否已指向Vercel IP

### 5️⃣ 完成！

访问 `https://你的域名.com` 即可看到你的网站！

---

## 🔍 快速检查清单

- [ ] 代码已推送到GitHub
- [ ] 已部署到Vercel
- [ ] 已在Vercel添加自定义域名
- [ ] 已配置DNS A记录和CNAME记录
- [ ] 等待DNS生效（5-30分钟）
- [ ] 访问域名测试

---

## 🆘 如果遇到问题

### DNS未生效？
- 等待更长时间（最长24小时）
- 清除浏览器缓存
- 使用不同网络测试

### 无法访问？
- 检查Vercel部署状态
- 检查DNS配置是否正确
- 检查Vercel域名配置

### HTTPS证书问题？
- Vercel会自动配置，等待即可
- 通常需要几分钟到几小时

---

**详细说明请查看**: `DOMAIN_SETUP_GUIDE.md`

