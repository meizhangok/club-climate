## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
club-climate/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with animated text
│   ├── Mission.tsx      # Mission statement
│   ├── Stats.tsx        # Statistics section
│   ├── Companies.tsx    # Where members work
│   ├── Universities.tsx # Where members studied
│   ├── Books.tsx        # Book sections (past, current, next)
│   ├── Team.tsx         # Team photo gallery
│   └── Footer.tsx       # Footer with contact info
└── Club Climate/        # Images and assets
```

## Customization

### Colors

The site uses a climate-themed color palette defined in `tailwind.config.ts`:

- `climate-green`: Primary green color
- `climate-lightgreen`: Lighter green accent
- `climate-cream`: Warm cream background
- `climate-navy`: Dark navy for footer
- `climate-sky`: Sky blue accent

### Content

To update content, edit the respective component files in the `components/` directory.

### Images

All images are stored in the `Club Climate/` directory. Make sure to keep the folder name as is, or update the image paths in the components.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **React** - UI library

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

Alternatively, you can deploy to any platform that supports Next.js.

## Contact

For questions or suggestions, reach out to Ha (phuonghatrannguyen00@gmail.com)

---

Built with ☀️ by Club Climate
