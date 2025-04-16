# 🗒️ NOTEWEB - Secure Notes App

A secure, full-stack notes management application — like a todo app, but built with modern tech! NOTEWEB allows users to **create**, **edit**, **delete**, and **securely manage notes** with **JWT-based authentication**.

---

## 🚀 Tech Stack

- **Frontend**: [Vite + React](https://vitejs.dev/)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Database**: PostgreSQL
- **Authentication**: JWT Tokens
- **API Docs**: Swagger UI (automatically provided by FastAPI)

---

## 🔐 Features

- ✅ Secure **Login** and **User Authentication**
- ✅ Create, Read, Update, Delete (**CRUD**) Notes
- ✅ JWT Token-based Auth (stored in browser's `localStorage`)
- ✅ Fully RESTful API with FastAPI
- ✅ Responsive frontend with React + Vite
- ✅ Backend CORS Configured with FastAPI’s `CORSMiddleware`

---

## 🛠️ Local Development

### 📦 Backend Setup (FastAPI)

1. **Create a virtual environment**  
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
2. **Install dependencies**

  pip install -r requirements.txt

3. Set up .env variables (e.g., for database and JWT secret)

4. Run the FastAPI server

    uvicorn main:app --reload

5. Open API Docs at:
    http://127.0.0.1:8000/docs

### 💻 Frontend Setup (Vite + React)

1. Install dependencies

npm install

Run the dev server

    npm run dev

    Visit the frontend at:
    http://localhost:5173

### ⚙️ CORS Configuration (FastAPI)

CORS is handled using FastAPI’s CORSMiddleware to allow communication between frontend and backend during development.

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


🧪 API Preview (via Swagger)

All endpoints are documented and testable using FastAPI’s built-in Swagger docs:

📍 http://localhost:8000/docs
📣 Future Enhancements

    ✅ Persist sessions with token refresh

    ✅ Add user profile and settings

    ⬜️ Dark mode toggle

    ⬜️ Deployment on Render/Vercel
