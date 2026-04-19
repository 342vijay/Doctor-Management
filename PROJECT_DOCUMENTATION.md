# Doctor Appointment Booking System - Documentation

## 📋 Project Overview
A web application that allows users to book doctor appointments online or offline with features like user authentication, appointment management, and booking confirmations.

---

## 🛠️ Technologies Used & Why

### **Frontend Framework: Angular 21.2.0**
- **Why:** Modern frontend framework for building dynamic single-page applications with component-based architecture
- **Used for:** Building UI components, routing, dependency injection, and reactive programming
- **Files:** Components in `src/app/Components/`

### **Styling: Bootstrap 5.3.8**
- **Why:** Popular CSS framework for responsive design and pre-built UI components
- **Used for:** Making the app look good and work on all screen sizes (mobile, tablet, desktop)

### **Reactive Programming: RxJS 7.8.0**
- **Why:** Handles asynchronous operations like API calls smoothly
- **Used for:** Managing async data streams in services (auth, bookings, etc.)

### **State Management: LocalStorage**
- **Why:** Simple way to store user tokens and session data in the browser
- **Used for:** Keeping users logged in between page refreshes

### **HTTP Communication: Angular HttpClient**
- **Why:** Built into Angular for making API requests to the backend
- **Used for:** Communicating with backend API at `https://localhost:7037/api/`

### **Build Tool: Angular CLI & esbuild**
- **Why:** Official Angular tool for building and serving the project
- **Used for:** Development, testing, and production builds

### **Testing: Vitest & Jasmine**
- **Why:** Unit testing frameworks for ensuring code quality
- **Used for:** Testing components and services

---

## 📁 Project Structure

```
src/app/
├── Components/           # UI Components
│   ├── Auth/            # Login & Register
│   ├── dashboard/       # Main dashboard
│   ├── online/          # Online appointment booking
│   ├── offline/         # Offline appointment booking
│   ├── confirmation/    # Booking confirmation
│   ├── get-my-booking/  # View user's bookings
│   ├── mode/            # Choose appointment type (online/offline)
│   ├── nav-bar/         # Navigation bar
│   └── success/         # Success page
├── Services/            # Business logic
│   ├── auth-service     # Login, register, token management
│   ├── onlineservice    # Online appointment logic
│   ├── offlineservice   # Offline appointment logic
│   └── getmybookingservice  # Fetch user bookings
├── Dto/                 # Data models
│   ├── LoginDto
│   ├── RegisterDto
│   ├── DoctorDto
│   └── SlotDto
└── Core/                # Authentication guard & interceptor
    ├── authguard       # Protects routes (requires login)
    └── authinterceptor # Adds JWT token to API requests
```

---

## 🔐 Key Features

### 1. **User Authentication (Auth Service)**
- Login with username & password
- Register new users
- Token-based authentication (JWT)
- Auto-logout when token expires

### 2. **Appointment Booking**
- **Online:** Book appointments through the app
- **Offline:** Book appointments by visiting the clinic

### 3. **Booking Management**
- View all your bookings
- Confirmation status tracking
- Doctor availability slots

### 4. **Security**
- Auth Guard: Prevents unauthorized access to protected pages
- Auth Interceptor: Automatically adds authentication token to all API requests

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm build
```

The app runs on `http://localhost:4200/`

---

## 📡 API Connection

Backend API is located at: `https://localhost:7037/api/`

**Endpoints used:**
- `POST /Auth/login` - User login
- `POST /Auth/register` - User registration
- Other appointment and booking endpoints (from online/offline services)

---

## 🔄 Data Flow

1. **User enters credentials** → Login component
2. **Auth Service makes API call** → Backend server
3. **Server returns JWT token** → Stored in localStorage
4. **Auth Interceptor adds token** → To every API request
5. **Auth Guard protects routes** → Redirects if not logged in
6. **User books appointment** → Online/Offline service calls API
7. **Confirmation page shows success** → Navigation to success component

---

## 💡 Why Each Technology?

| Technology | Why Used |
|-----------|----------|
| **Angular 21** | Modern, maintainable, TypeScript support, component reusability |
| **Bootstrap** | Responsive design, saves time on CSS, professional look |
| **RxJS** | Handles async API calls cleanly |
| **TypeScript** | Catch errors early, better code completion, easier to maintain |
| **HttpClient** | Built-in Angular tool, no extra dependency needed |
| **LocalStorage** | Simple session management without a backend database |
| **Auth Guard** | Prevents unauthorized access to pages |
| **JWT Tokens** | Stateless authentication, scalable |

---

## 📝 Summary

This is a **simple, modern Angular app** for booking doctor appointments. It uses common technologies (Angular + Bootstrap) that are easy to maintain and scale. The app connects to a backend API for user management and appointment booking, with JWT token-based security.
