# 🩸 Blood Bank Management System

<div align="center">

A comprehensive web-based blood bank management system that connects donors, recipients, and administrators to facilitate efficient blood donation and distribution.

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-orange?logo=mysql)](https://www.mysql.com/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite)](https://vitejs.dev/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [User Roles](#-user-roles)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The Blood Bank Management System is a full-stack web application designed to streamline the process of blood donation and distribution. It provides a platform where:

- **Donors** can register, schedule donations, and track their donation history
- **Recipients** can request blood and monitor their request status
- **Administrators** can manage the entire system, organize blood drives, and oversee operations
- **Guests** can view general information and register for an account

---

## ✨ Features

### 👤 For Donors

- 🩸 **Easy Donation Scheduling** - Schedule blood donation appointments
- 📊 **Donation History** - Track all past donations
- ✏️ **Profile Management** - Update personal and medical information
- 🔔 **Notifications** - Receive updates about blood drives and urgent needs

### 🏥 For Recipients

- 📝 **Blood Requests** - Submit requests for specific blood types
- ✅ **Request Confirmation** - Track request status and confirmations
- 📜 **Request History** - View all past blood requests
- ✏️ **Profile Management** - Manage personal information

### 👨‍💼 For Administrators

- 👥 **User Management** - Add, remove, and edit system users
- 📋 **Blood Request Management** - Review and process blood requests
- 🚐 **Blood Drive Organization** - Initiate and manage blood drive campaigns
- 📧 **Email Communication** - Send notifications to users
- 🔍 **System Monitoring** - Search and view system history
- ✏️ **Information Control** - Allow or restrict information editing

### 🌐 For Guests

- 📖 **View Information** - Access general blood bank information
- 🔐 **Registration** - Sign up as a donor or recipient

---

## 🛠️ Tech Stack

### Frontend

- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.1 - Client-side routing
- **Axios** 1.6.2 - HTTP client
- **Vite** 5.0.6 - Build tool and dev server
- **CSS3** - Styling

### Backend

- **Node.js** - Runtime environment
- **Express.js** 4.18.2 - Web framework
- **MySQL** 2.18.1 - Database
- **CORS** 2.8.5 - Cross-origin resource sharing
- **Nodemon** 3.0.2 - Development auto-reload

---

## 📁 Project Structure

```
Blood-Bank/
├── client/                      # Frontend application
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── nav_bar_admin.jsx
│   │   │   ├── nav_bar_donor.jsx
│   │   │   └── nav_bar_recipient.jsx
│   │   ├── page/                # Page components
│   │   │   ├── admin_page/      # Admin-specific pages
│   │   │   ├── donor_page/      # Donor-specific pages
│   │   │   ├── recipient/       # Recipient-specific pages
│   │   │   ├── guest/           # Guest pages
│   │   │   └── login.jsx        # Authentication
│   │   ├── style/               # CSS stylesheets
│   │   ├── App.jsx              # Main app component
│   │   └── main.jsx             # Entry point
│   ├── public/                  # Static assets
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
├── server/                      # Backend application
│   ├── index.js                 # Express server entry point
│   └── package.json             # Backend dependencies
└── README.md                    # Project documentation
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MySQL** (v5.7 or higher)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/Blood-Bank.git
cd Blood-Bank
```

### Step 2: Database Setup

1. Start your MySQL server
2. Create a new database for the blood bank system
3. Import the database schema (if available in `ProjectICS321.session.sql`)

```bash
mysql -u your_username -p < ProjectICS321.session.sql
```

### Step 3: Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Configure database connection in index.js
# Update MySQL credentials (host, user, password, database)

# Start the server
node index.js
# Or use nodemon for development
nodemon index.js
```

The backend server will run on `http://localhost:3000` (or your configured port).

### Step 4: Frontend Setup

```bash
# Navigate to client directory (from project root)
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port).

---

## 💡 Usage

### Starting the Application

1. **Start the backend server:**

   ```bash
   cd server
   node index.js
   ```

2. **Start the frontend development server:**

   ```bash
   cd client
   npm run dev
   ```

3. **Access the application:**
   - Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
cd client
npm run build
```

The production-ready files will be in the `client/dist` directory.

---

## 👥 User Roles

### 🔴 Admin Dashboard

- Comprehensive system management
- User administration
- Blood drive coordination
- Request processing and approval

### 🩸 Donor Portal

- Schedule donation appointments
- View donation history
- Update health information
- Track contribution impact

### 🏥 Recipient Portal

- Submit blood requests with medical details
- Track request status
- View request history
- Update personal information

### 🌐 Guest Access

- Browse blood bank information
- Register as donor or recipient
- View available blood types
- Learn about donation process

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📞 Contact

For questions, suggestions, or issues, please open an issue on GitHub or contact the development team.

---

<div align="center">

**Made with ❤️ for saving lives**

⭐ Star this repository if you find it helpful!

</div>
