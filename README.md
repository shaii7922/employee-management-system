# 🧑‍💼 Employee Task Management System

## 📌 Description

This is a React-based Employee Task Management System where Admin and Employees can log in and manage tasks. The application uses Context API for global state management and LocalStorage for data persistence.

---

## 🚀 Features

* 🔐 Authentication (Admin & Employee login)
* 👨‍💼 Admin Dashboard
* 👷 Employee Dashboard
* 📊 Task tracking with count
* 💾 Data persistence using LocalStorage
* 🔔 Toast notifications using react-toastify

---

##  Tech Stack

* React.js
* Context API
* JavaScript (ES6+)
* CSS
* LocalStorage
* React Toastify

---

##  Folder Structure

```
src/
│
├── context/
│   └── AuthProvider.jsx
│
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   └── Dashboard/
│       ├── AdminDashBoard.jsx
│       └── EmployeeDashBoard.jsx
│
├── utils/
│   ├── LocalStorage.js
│   └── commonUtilis.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

##  Setup Instructions

Follow these steps to run the project locally:

### 1️ Clone the repository

```bash
git clone https://github.com/shaii7922/employee-management-system.git
```

---

### 2️ Navigate to project folder

```bash
cd employee-management-system
```

---

### 3️ Install dependencies

```bash
npm install
```

---

### 4️ Start development server

```bash
npm run dev
```

👉 Project will run on:

```bash
http://localhost:5173
```

---

### 5️ Build for production (optional)

```bash
npm run build
```

---

### 6️ Preview production build

```bash
npm run preview
```

---

##  Available Scripts

* `npm run dev` → Start development server (Vite)
* `npm run build` → Create production build
* `npm run preview` → Preview production build
* `npm run lint` → Run ESLint

---

##  Requirements

Make sure you have installed:

* Node.js (v18 or above recommended)
* npm (comes with Node.js)

---

## 💡 Notes

* This project uses **Vite + React**
* Uses **Context API for state management**
* Data is stored in **LocalStorage**
* UI built with **Material UI + Tailwind CSS**

