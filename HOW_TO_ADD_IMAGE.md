# 📸 如何添加图片到网站

## 方法1: 使用本地图片（推荐）

### 步骤1: 将图片放入public文件夹

1. 将你的图片文件（如 `hero-image.jpg`）放入 `public` 文件夹
2. 路径应该是: `public/hero-image.jpg`

### 步骤2: 更新代码

在 `src/app/page.tsx` 中找到图片部分（大约在第200行），替换为：

```tsx
{/* Image Section */}
<section className="py-20 md:py-32 bg-white relative overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <Image
        src="/hero-image.jpg"  // 你的图片路径
        alt="SEMRUSH Platform"
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  </div>
</section>
```

## 方法2: 使用在线图片URL

如果你有在线图片URL，可以直接使用：

```tsx
<Image
  src="https://your-image-url.com/image.jpg"
  alt="SEMRUSH Platform"
  width={1200}
  height={600}
  className="w-full h-auto object-cover"
  priority
/>
```

## 方法3: 使用背景图片

如果你想使用背景图片：

```tsx
<section 
  className="py-20 md:py-32 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: 'url(/your-image.jpg)'
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="container mx-auto px-4 max-w-7xl relative z-10">
    {/* 你的内容 */}
  </div>
</section>
```

## 支持的图片格式

- JPG / JPEG
- PNG
- WebP（推荐，文件更小）
- SVG（用于图标）

## 图片优化建议

1. **文件大小**: 建议每张图片小于500KB
2. **尺寸**: 
   - Hero图片: 1920x1080 或更大
   - 功能图片: 800x600
   - 缩略图: 400x300
3. **格式**: 使用WebP格式可以获得更好的压缩

## 当前图片位置

在 `src/app/page.tsx` 中，图片部分位于 "Image Section" 注释下方。

你可以：
1. 将图片文件放入 `public` 文件夹
2. 告诉我图片文件名
3. 我会帮你更新代码

---

**需要帮助？** 告诉我你的图片路径或URL，我可以帮你直接更新代码！

