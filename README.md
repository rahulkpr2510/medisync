# MediSync – Doctor Payout Management System 💸🩺

MediSync is a full-stack admin dashboard for managing verified doctors, tracking their earnings, and handling payout approvals. Built with modern web technologies, MediSync streamlines the financial backend of a healthcare SaaS product.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Actions)
- **Language**: TypeScript
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Styling/UI**: Tailwind CSS, [ShadCN UI](https://ui.shadcn.com/)
- **Deployment**: Vercel / Railway / Any cloud platform

---

## 🎯 Features

- 🔐 Secure Clerk-based admin authentication
- 👨‍⚕️ View and manage verified doctors
- 💰 Track doctor earnings and payout history
- ✅ Approve or reject pending payout requests
- 🚦 Suspend payout for suspicious users
- ⚙️ Optimized server-side architecture (RSC + Server Actions)

---


---

## ⚙️ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/medisync.git
cd medisync
npm install
```
### 2. Configure Environment Variables
Create a .env file based on .env.example:
```
DATABASE_URL=postgresql://<your-db-url>
CLERK_SECRET_KEY=your-secret-key
CLERK_PUBLISHABLE_KEY=your-publishable-key
```
### 3. Run Development Server
```
npx prisma generate
npx prisma db push
npm run dev
```
### 4. Build for Production
```
npm run build
npm start
```
## Future Enhancements
- 🔄 Email notifications on payout approval/rejection
- 📈 Analytics dashboard for financial trends
- 🔍 Filter/sort by payout status or doctor specialization
- 🧾 Downloadable payout receipts and PDF statements


##  Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss the proposed updates.

## License
MIT
