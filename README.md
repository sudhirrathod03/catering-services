#  Catering Services Platform

## 🔗 Live Deployment
* **Frontend (UI):** [catering-services-nine.vercel.app](https://catering-services-nine.vercel.app/)
* **Backend (API):** [catering-services.onrender.com/api/caterers](https://catering-services.onrender.com/api/caterers)
---
## 🚀 Project Overview

This platform allows users to browse a curated list of caterers, filter them by price and name, and view detailed profiles for each service. It follows a modern **Monorepo** architecture with a clear separation of concerns between the frontend and backend.

### Key Features:
* **Dynamic Search:** Filter caterers in real-time by name.
* **Price Range Filtering:** Interactive slider to find services within budget.
* **Dynamic Routing:** Dedicated details page for every caterer using Next.js `[id]` segments.
* **Robust Backend:** Node.js API with MVC (Model-View-Controller) structure.
* **Data Validation:** Server-side validation for adding new catering records.

---

## 🛠️ Tech Stack

### Frontend
* **Next.js 15+** (App Router)
* **Tailwind CSS v4** (Modern Utility-First Styling)
* **Lucide React** (Icons)

### Backend
* **Node.js & Express.js** (RESTful API)
* **MongoDB & Mongoose** (Database & Schema Modeling)
* **CORS** (Cross-Origin Resource Sharing handled)

---
##  Visual Overview

### 🏠 Landing Page
The gateway to the platform, designed for high conversion and brand clarity.
<img width="100%" alt="Landing Page" src="https://github.com/user-attachments/assets/9425324f-27a1-4a55-8b2a-235d8d2c1aec" />

### 🔍 Discovery Hub
Interactive catering list featuring real-time search and price-range filtering.
<img width="100%" alt="Catering List" src="https://github.com/user-attachments/assets/52087fed-b932-45be-96d5-cc9f5a5d2785" />

### 📋 Service Insights
Detailed caterer profiles with pricing, ratings, and service descriptions.
<img width="100%" alt="Details Page" src="https://github.com/user-attachments/assets/c45c7521-10b3-4ae2-8035-1fc7105bcade" />

## 📂 Project Structure

```text
catering-services/
├── backend/            # Express Server, MongoDB Models, Routes
│   ├── controllers/    # Business logic
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # API Endpoints
│   └── app.js       # Entry point
├── frontend/           # Next.js Application
│   ├── app/            # App Router (Pages & Components)
│   └── globals.css     # Tailwind v4 Styles
└── README.md           # Documentation
