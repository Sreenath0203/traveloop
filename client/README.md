# Traveloop – Personalized Travel Planning Made Easy

Traveloop is a full-stack travel planning platform designed to simplify and enhance the way users organize their journeys. The application enables travelers to create customized itineraries, manage trip budgets, explore destinations, and visualize their travel plans through an intuitive and modern interface.

The platform is built as a hackathon-ready solution with a focus on user experience, intelligent trip organization, and interactive travel planning tools.

---

# Features

## Authentication System
- User Signup
- User Login
- Secure Authentication
- Session Management

---

## Dashboard
- Personalized welcome screen
- Quick access to trips
- Budget highlights
- Recommended destinations
- Responsive modern UI

---

## Trip Management
- Create new trips
- Add travel dates
- Add descriptions
- View all trips
- Delete trips
- Manage itineraries

---

## Smart Itinerary Planner
- Day-wise travel planning
- Morning / Afternoon / Evening schedules
- Budget estimation
- Timeline-based itinerary UI
- Dynamic destination planning

---

## Budget Analytics
- Expense visualization
- Pie chart analysis
- Daily spending bar charts
- Total trip budget calculation
- Average daily expense tracking

---

## AI Recommendation System
- Smart travel suggestions
- Personalized recommendations
- Dynamic travel insights

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Recharts
- Axios

---

## Backend
- Node.js
- Express.js

---

## Database
- MongoDB

---

# Project Structure

```bash
Traveloop/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│
├── server/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── server.js
│
├── package.json
└── README.md
```

---

# Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Backend Dependencies

```bash
cd server
npm install
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

# Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=your_mongodb_connection
PORT=5000
JWT_SECRET=your_secret_key
```

---

# Run Backend

```bash
cd server
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Run Frontend

```bash
cd client
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Trips

### Get All Trips

```http
GET /api/trips
```

### Create Trip

```http
POST /api/trips
```

### Delete Trip

```http
DELETE /api/trips/:id
```

---

# Screens Included

- Login / Signup
- Dashboard
- Create Trip
- My Trips
- Itinerary Planner
- Budget Analytics

---

# Future Enhancements

- PDF Trip Export
- Real-time Weather Integration
- Hotel Recommendations
- Public Trip Sharing
- Packing Checklist
- Interactive Maps
- Voice-based AI Planning
- Team Collaboration Trips

---

# Objectives

Traveloop aims to:

- Simplify travel planning
- Improve trip organization
- Help users manage travel budgets
- Provide personalized travel experiences
- Deliver a smooth and responsive user experience

---

# Hackathon Highlights

✔ Full Stack Web Application  
✔ Responsive UI/UX  
✔ Smart Itinerary Planning  
✔ Budget Analytics Dashboard  
✔ AI-based Recommendations  
✔ Modern React Frontend  
✔ REST API Integration  
✔ MongoDB Database Integration  

---

# Conclusion

Traveloop transforms traditional trip planning into an intelligent and interactive experience. By combining itinerary management, budget analytics, and smart travel recommendations, the platform provides users with an efficient and engaging way to plan their journeys.

The project demonstrates the integration of modern full-stack technologies, responsive design principles, and database-driven architecture to create a scalable and user-friendly travel planning solution.

---

# Team

Hackathon Project – Traveloop Team