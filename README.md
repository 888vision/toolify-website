# Toolify - AI Tools Directory

A modern AI tools directory website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔍 **Search & Filter**: Real-time search and filtering by category, tags, and more
- 📱 **Responsive Design**: Fully responsive design that works on all devices
- 🎨 **Modern UI**: Beautiful and intuitive user interface
- ⚡ **Fast Performance**: Optimized for speed and performance
- 🎯 **70+ AI Tools**: Curated collection of AI tools across multiple categories
- 🏷️ **Categories**: Organized by categories like Image Generation, Coding, Writing, etc.
- 🔥 **Featured Tools**: Highlighted popular and new tools
- 📊 **Statistics**: Real-time statistics of tools, categories, and more

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd D:\Projects\website-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
website-clone/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Footer component
│   │   ├── ToolCard.tsx    # Tool card component
│   │   ├── ToolList.tsx    # Tool list with filters
│   │   ├── MobileMenu.tsx  # Mobile navigation menu
│   │   └── ScrollToTop.tsx # Scroll to top button
│   └── data/
│       └── tools.ts         # Tools data
├── package.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Search Functionality
- Real-time search across tool names, descriptions, and categories
- Search from hero section or tool list section
- Clear search functionality

### Filtering
- Filter by tags: All, Hot, New, Free
- Filter by category
- Filter by My Tools: Today, New, Most Saved, Most Used
- Combine multiple filters

### Sorting
- Sort by name (A-Z)
- Sort by category
- Sort by Hot, New, or Free first
- Default sorting

### Categories
- Browse tools by category
- See tool count for each category
- Click category to filter tools

## Contributing

This is a personal project, but suggestions and feedback are welcome!

## License

Private project - All rights reserved.

## Contact

For questions or suggestions, please contact the project owner.
