# 🎮 GameStat

GameStat is a full-stack web application that allows users to search for Clash of Clans players and view their profile statistics.

This project was built as a practical learning project to understand **React, REST APIs, FastAPI, frontend-backend communication, Git/GitHub, and deployment**.

---

## 🌐 Live Demo

### Frontend

https://gamestat.onrender.com

### Backend API

https://gamestat-backend.onrender.com

---

## ✨ Features

- 🔎 Search Clash of Clans players by player tag
- 🏆 Display player trophies
- 🏰 Display Town Hall level
- 📊 Display player experience level
- ⚔️ Display attack wins
- 🛡️ Display defense wins
- 👑 Display clan information
- ⏳ Loading state while searching
- ❌ Error handling for invalid players
- 🎬 Clash of Clans themed video background
- 📱 Responsive design for desktop and mobile

---

## 🖼️ Screenshots

### Homepage

<img src="https://raw.githubusercontent.com/anany-sharma-03/GameStat/main/public/ss1.png" alt="GameStat Homepage" width="800">

### Player Search

<img src="https://raw.githubusercontent.com/anany-sharma-03/GameStat/main/public/ss2.png" alt="GameStat Player Search" width="800">

### Player Profile

<img src="https://raw.githubusercontent.com/anany-sharma-03/GameStat/main/public/ss3.png" alt="GameStat Player Profile" width="800">

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │      Vite + CSS     │
                    └──────────┬──────────┘
                               │
                               │ HTTP Request
                               ▼
                    ┌─────────────────────┐
                    │   FastAPI Backend   │
                    │       Python        │
                    └──────────┬──────────┘
                               │
                               │ Authenticated Request
                               ▼
                    ┌─────────────────────┐
                    │  RoyaleAPI Proxy    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Clash of Clans API  │
                    └──────────┬──────────┘
                               │
                               │ Player Data
                               ▼
                    ┌─────────────────────┐
                    │   FastAPI Backend   │
                    │  Data Transformation│
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Player Card      │
                    │      React UI       │
                    └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Python
- FastAPI
- HTTPX
- python-dotenv

### External API

- Clash of Clans API
- RoyaleAPI Proxy

### Version Control

- Git
- GitHub

### Deployment

- Render

---

## 📁 Project Structure

```text
GameStat/
│
├── Backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .gitignore
│
├── public/
│   ├── coc-bg.mp4
│   ├── ss1.png
│   ├── ss2.png
│   └── ss3.png
│
├── src/
│   ├── Components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── PlayerCard/
│   │   │   ├── PlayerCard.jsx
│   │   │   └── PlayerCard.css
│   │   │
│   │   └── SearchBox/
│   │       ├── SearchBox.jsx
│   │       └── SearchBox.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🔄 How It Works

1. The user enters a Clash of Clans player tag.
2. React sends the player tag to the FastAPI backend.
3. FastAPI sends an authenticated request to the Clash of Clans API through the RoyaleAPI proxy.
4. The backend receives the player's data.
5. FastAPI transforms the API response into the fields required by the frontend.
6. React receives the response.
7. The player statistics are displayed using the `PlayerCard` component.

---

## 🔐 Environment Variables

The Clash of Clans API key is stored as an environment variable.

Create a `.env` file inside the `Backend` directory:

```env
CLASH_API_KEY=your_api_key_here
```

The API key is **not stored in the GitHub repository**.

For production, the API key is stored securely as an environment variable in Render.

---

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/anany-sharma-03/GameStat.git
cd GameStat
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd Backend
pip install -r requirements.txt
```

### 4. Add your API key

Create:

```text
Backend/.env
```

and add:

```env
CLASH_API_KEY=your_api_key_here
```

### 5. Start the FastAPI backend

From the `Backend` directory:

```bash
uvicorn main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

### 6. Start the React frontend

Open another terminal in the project root:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

## 🚀 Deployment

GameStat is deployed using Render.

### Frontend

https://gamestat.onrender.com

### Backend

https://gamestat-backend.onrender.com

The frontend communicates with the deployed FastAPI backend instead of the local development server.

---

## 📚 What I Learned

This project helped me learn and practice:

- React components
- JSX
- Props
- `useState`
- Controlled form inputs
- Conditional rendering
- Event handling
- API requests using `fetch`
- Promises and `async/await`
- HTTP and REST APIs
- JSON
- FastAPI
- Query parameters
- HTTPX
- CORS
- API authentication
- Environment variables
- API response transformation
- Responsive CSS
- Git and GitHub
- Frontend-backend communication
- Deploying a React application
- Deploying a FastAPI backend
- Debugging production CORS issues

---

## 🎯 Project Status

**Completed ✅**

GameStat was built as a practical project for learning React, FastAPI, REST APIs, frontend-backend communication, Git/GitHub, and deployment.

---

## 👨‍💻 Author

**Anany Sharma**

Built while learning React, FastAPI, APIs, and full-stack development.

---

⭐ Thanks for checking out GameStat!
