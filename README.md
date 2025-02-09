# CP Tracker

**CP Tracker** is a Next.js web application that helps you track your progress in competitive programming. It fetches user stats from platforms like LeetCode, CodeForces, and CodeChef using their APIs, stores the data in a Supabase PostgreSQL database via Prisma, and visualizes performance analytics with interactive charts and tables.

## Features

- **User Authentication:** Secure sign-up/login powered by Supabase.
- **Multi-Platform Integration:** Fetch and display stats from multiple competitive programming platforms.
- **Performance Analytics:** Visualize progress with charts (rating, problems solved, streaks, etc.) using Chart.js.
- **Responsive UI:** Clean and modern UI built with Tailwind CSS and shadcn UI components.
- **Next.js App Router:** Leveraging Next.js Server Components and API routes for efficient data fetching.

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS, shadcn UI components
- **Backend:** Next.js API Routes, Node.js
- **Database:** PostgreSQL (via Supabase)
- **ORM:** Prisma
- **Charts:** Chart.js and react-chartjs-2
- **Authentication:** Clerk authentication

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **npm** or **yarn**
- A [Supabase](https://supabase.io) account and project (with PostgreSQL)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lazytech614/CP-Tracker.git
   cd CP-Tracker
