# Create App
- npx create-next-app@latest next-restaurant

# Install shadcn
- npx shadcn@latest init
- npx shadcn@latest add button
- npx shadcn@latest add sheet
- npx shadcn@latest dropdown-menu

# libraries
- npm install lucide-react
- npm install next-themes
- npm i react-icons
- npm i framer-motion
- npm i react-countdown
- npm i @tanstack/react-query

# prisma
- npm install prisma tsx @types/pg --save-dev
- npm install @prisma/client @prisma/adapter-pg dotenv pg
- npx prisma init --db --output ../app/generated/prisma
- npx prisma db seed
- npx prisma studio
- "postinstall": "prisma generate", // must be added in scrips in package.json before deployment

# auth
- npm install next-auth
- @next-auth/prisma-adapter

