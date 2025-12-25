<div align="center">
  <h3 align="center">MediSync – Doctor Appointment System</h3>
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=postgresql&logoColor=white&color=4169E1" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logo=prisma&logoColor=white&color=2D3748" alt="Prisma ORM" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logo=clerk&logoColor=white&color=3B82F6" alt="Clerk" />
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logoColor=white&color=0F172A" alt="ShadCN UI" />
  </div>
</div>

---

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 📈 [Future Enhancements](#future-enhancements)

---

## <a name="introduction">🤖 Introduction</a>

**MediSync** is a full-stack admin dashboard designed to simplify financial operations in healthcare SaaS platforms.
It enables admins to verify doctors, monitor earnings, and process payout approvals—all in a secure and efficient manner.
With a modern architecture powered by **Next.js 14**, server actions, and a PostgreSQL backend, MediSync ensures scalability, security, and a smooth admin experience.

---

## <a name="tech-stack">⚙️ Tech Stack</a>

* **[Next.js 14](https://nextjs.org/)** – Modern React framework with App Router & Server Actions for optimized server-side rendering and routing.
* **[TypeScript](https://www.typescriptlang.org/)** – Adds strong typing for more maintainable and error-resistant code.
* **[PostgreSQL](https://www.postgresql.org/)** – Reliable relational database for structured financial data storage.
* **[Prisma ORM](https://www.prisma.io/)** – Type-safe database queries with a clean schema-first approach.
* **[Clerk](https://clerk.dev/)** – Secure authentication and role-based access management.
* **[Tailwind CSS](https://tailwindcss.com/)** & **[ShadCN UI](https://ui.shadcn.com/)** – Responsive, accessible, and modern UI components.
* **Deployment** – Supports **Vercel**, **Railway**, or any cloud platform.

---

## <a name="features">🔋 Features</a>

👉 **Secure Admin Authentication** – Powered by Clerk for safe and role-restricted access.

👉 **Doctor Management** – View, verify, and manage registered doctors.

👉 **Earnings Tracking** – Monitor income and payout history for each doctor.

👉 **Payout Approval System** – Approve or reject pending payout requests with ease.

👉 **Fraud Prevention** – Suspend payouts for flagged or suspicious accounts.

👉 **Optimized Backend** – Built with server-side rendering and server actions for fast, scalable performance.

---

## <a name="quick-start">🤸 Quick Start</a>

**Prerequisites**
Ensure you have installed:

* **[Git](https://git-scm.com/)**
* **[Node.js](https://nodejs.org/)**
* **[npm](https://www.npmjs.com/)**

**Clone the Repository**

```bash
git clone https://github.com/rahulkpr2510/medisync.git
cd medisync
```

**Install Dependencies**

```bash
npm install
```

**Configure Environment Variables**
Create a `.env` file from `.env.example`:

```env
DATABASE_URL=postgresql://<your-db-url>
CLERK_SECRET_KEY=your-secret-key
CLERK_PUBLISHABLE_KEY=your-publishable-key
```

**Run Development Server**

```bash
npx prisma generate
npx prisma db push
npm run dev
```

**Build for Production**

```bash
npm run build
npm start
```

---

## <a name="future-enhancements">📈 Future Enhancements</a>

* 🔄 Automated email notifications for payout approvals/rejections
* 📊 Advanced analytics dashboard for financial insights
* 🔍 Filters & sorting by payout status or doctor specialization
* 🧾 Downloadable payout receipts and PDF statements

---
