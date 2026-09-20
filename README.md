# 🎮 GameStat

GameStat is a full-stack web application that lets users search for a Clash of Clans player and view their profile statistics.

This project was built as a learning project to practice **React, REST APIs, FastAPI, and frontend-backend communication**.

---

## 🚀 Features

- 🔎 Search Clash of Clans players by player tag
- 🏆 Display player statistics
- 🏰 Show Town Hall and player level
- ⚔️ Show attack and defense wins
- 🛡️ Show clan information
- ⏳ Loading state while fetching player data
- ❌ Player-not-found handling
- 🎬 Clash of Clans video background
- 📱 Responsive design for desktop and mobile

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- CSS

### Backend

- Python
- FastAPI
- HTTPX

### External API

- Clash of Clans API

---

## 🏗️ Architecture

```text
React Frontend
      │
      │ Player Tag
      ▼
FastAPI Backend
      │
      │ Authenticated API Request
      ▼
Clash of Clans API
      │
      │ Player Data
      ▼
FastAPI
      │
      │ Cleaned Response
      ▼
React Player Card
```

````

---

## 📁 Project Structure

```text
GameStat/
│
├── Backend/
│   ├── main.py
│   ├── .env
│   └── .gitignore
│
├── public/
│   └── coc-bg.mp4
│
├── src/
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── PlayerCard/
│   │   └── SearchBox/
│   │
│   ├── App.jsx
│   └── index.css
│
├── ss1.png
├── ss2.png
├── ss3.png
├── README.md
├── package.json
└── vite.config.js
```

---

## 🖼️ Screenshots

### Homepage

![GameStat Homepage](./ss1.png)

### Player Search

![Player Search](./ss2.png)

### Player Profile

![Player Profile](./ss3.png)

---

## ⚙️ Running Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd GameStat
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Set up the backend

Navigate to the backend:

```bash
cd Backend
```

Install the required Python packages:

```bash
pip install fastapi uvicorn httpx python-dotenv
```

Create a `.env` file inside the `Backend` folder:

```env
CLASH_API_KEY=your_api_key_here
```

### 4. Start the FastAPI server

From the `Backend` folder:

```bash
uvicorn main:app --reload
```

The backend will run on:

```text
http://127.0.0.1:8000
```

### 5. Start the React frontend

Open another terminal in the project root:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

The backend requires a Clash of Clans API key.

Create:

```text
Backend/.env
```

and add:

```env
CLASH_API_KEY=your_api_key_here
```

---

## 📚 What I Learned

This project helped me practice:

- React components and props
- React state with `useState`
- Controlled form inputs
- Conditional rendering
- API requests using `fetch`
- Loading and error states
- REST API concepts
- FastAPI endpoints
- Query parameters
- CORS
- HTTP requests with HTTPX
- Environment variables
- API authentication
- JSON response transformation
- Responsive CSS
- Git and GitHub

---

## 🎯 Project Status

**Completed ✅**

GameStat was created primarily as a learning project for understanding how a React frontend communicates with a Python backend and an external API.

---

## 👨‍💻 Author

**Anany Sharma**

Built while learning React, FastAPI, APIs, and full-stack development.

```

```
````
