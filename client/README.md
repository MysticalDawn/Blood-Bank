# 🩸 Blood Bank - Frontend

This is the frontend application for the Blood Bank Management System, built with React and Vite.

## 🛠️ Tech Stack

- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.1 - Client-side routing
- **Axios** 1.6.2 - HTTP client for API requests
- **Vite** 5.0.6 - Build tool and development server
- **ESLint** - Code linting

## 📦 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── nav_bar_admin.jsx
│   ├── nav_bar_donor.jsx
│   └── nav_bar_recipient.jsx
├── page/                # Page components by user role
│   ├── admin_page/      # Admin dashboard pages
│   ├── donor_page/      # Donor portal pages
│   ├── recipient/       # Recipient portal pages
│   ├── guest/          # Public pages
│   └── login.jsx       # Authentication page
├── style/              # CSS stylesheets
│   ├── admin_style/
│   ├── donor_style/
│   ├── recipient_style/
│   ├── login.css
│   └── nav_bar.css
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🔧 Configuration

### API Configuration

Update the API endpoint in your components to point to your backend server:

```javascript
const API_URL = "http://localhost:3000"; // Update as needed
```

### Vite Configuration

Vite configuration can be modified in `vite.config.js`.

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features

### Role-Based Navigation

Each user role (Admin, Donor, Recipient) has a dedicated navigation bar for easy access to their specific features.

### Responsive Design

The application is designed to work seamlessly across desktop and mobile devices.

### Modern UI

Clean and intuitive interface built with modern CSS and React best practices.

## 📚 Key Components

### Navigation Bars

- `nav_bar_admin.jsx` - Admin navigation
- `nav_bar_donor.jsx` - Donor navigation
- `nav_bar_recipient.jsx` - Recipient navigation

### Admin Pages

- User management
- Blood request processing
- Blood drive coordination
- Email notifications

### Donor Pages

- Donation scheduling
- Donation history
- Profile management

### Recipient Pages

- Blood request submission
- Request tracking
- Request history

## 🔗 Backend Integration

This frontend connects to the Express.js backend via REST APIs. Make sure your backend server is running before starting the frontend development server.

---

For more information, see the [main project README](../README.md).
