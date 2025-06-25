# SubsTrack - Subscription Renewal Management API
A **subscription renewal management API** built using real-world business logic, JWT authentication, database modeling, secure workflows, and automation to help users track and manage their recurring expenses.

## Introduction
SubsTrack allows users to:

- Add and manage their subscriptions
- Receive renewal reminders via automated workflows
- Track upcoming renewals and total monthly/annual costs
- Operate securely using JWT-based authentication

## Tech Stack
- **Node.js / Express** – REST API development
- **MongoDB** – Document database for subscriptions and users
- **JWT** – Secure token-based authentication
- **Upstash QStash** – Serverless workflows and reminders
- **Nodemailer** – Email notifications for upcoming renewals
- **Arcjet** – API security and protection

## Features
### User Authentication
- Secure registration and login
- JWT-based access tokens

### Subscription Management
- Add and view a subscription: name, price, frequency, renewal date, and category

### Payment Reminders
- Automated email reminders using **Nodemailer**
- Scheduled using **Upstash QStash**

## Running Locally
### 1. Clone the Repository
```
git clone https://github.com/annie-olivia/SubsTrack.git
cd SubsTrack
```
### 2. Install Dependencies
```
npm install
```
### 3. Configure Environment Variables
Create a `.env.development.local` file at the root of your project with the following configuration:
```
PORT=
SERVER_URL=
NODE_ENV= development
DB_URI=
JWT_SECERT=
JWT_EXPIRES_IN=
ARCJET_KEY=
ARCJET_ENV=development
QSTASH_URL=
QSTASH_TOKEN=
QSTASH_CURRENT_SIGNING_KEY=
QSTASH_NEXT_SIGNING_KEY=
EMAIL_PASSWORD=your_email_app_password
```
### 4. Start the Server
```
npm run dev
```
Visit http://localhost:3000 or your configured port.
