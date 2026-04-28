# FUTURE_FS_03

## Overview

FUTURE_FS_03 is a complete full-stack application that combines frontend, backend, database integration, and third-party services. The project is designed to simulate a production-ready system with real-world functionality.

## Tech Stack

* Next.js
* Serverless API Routes (Vercel)
* MySQL or Supabase
* Resend API (Email service)
* Tailwind CSS

## Features

* Functional contact form with email delivery using Resend
* Backend API handling form submissions
* Environment variable configuration for secure API usage
* Database integration for storing or processing data
* Deployment-ready architecture

## Project Structure

```
/app
/components
/api
/utils
```

## Installation and Setup

1. Clone the repository:

```
git clone https://github.com/lephondotsholofelo-eng/FUTURE_FS_03.git
```

2. Navigate into the project:

```
cd FUTURE_FS_03
```

3. Install dependencies:

```
npm install
```

4. Configure environment variables:
   Create a `.env.local` file:

```
RESEND_API_KEY=your_resend_api_key
DATABASE_URL=your_database_url
```

5. Run the project:

```
npm run dev
```

## Email Integration

This project uses the Resend API to send emails from the contact form. Messages are processed through a serverless backend and delivered to a configured email address.

## Live Demo

https://future-fs-03-lake-chi.vercel.app/

## Purpose

This project demonstrates full-stack capabilities, including third-party API integration, backend processing, and deployment readiness.

## License

MIT License
