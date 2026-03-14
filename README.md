#  Catering Services Platform

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
