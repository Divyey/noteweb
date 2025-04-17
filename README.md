Sure! Here's your **final complete `README.md`** file for **NOTEWEB - Secure Notes App**, incorporating everything, including Python version, setup, usage instructions, and future plans.

---

```markdown
# 🗒️ NOTEWEB - Secure Notes App

A secure, full-stack notes management application — like a todo app, but built with modern tech!  
NOTEWEB allows users to **create**, **edit**, **delete**, and **securely manage notes** with **JWT-based authentication**.

---

## 🚀 Tech Stack

- **Frontend**: [Vite + React](https://vitejs.dev/)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.11.8)
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
- ✅ Backend CORS Configured using FastAPI’s `CORSMiddleware`

---

## 🛠️ Local Development

### 📦 Backend Setup (FastAPI)

1. **Navigate to the backend folder**  
   ```bash
   cd path/to/backend
   ```

2. **Create & activate virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For macOS/Linux
   # OR for Windows:
   venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure `.env` for DB URL and JWT secret**  
   Create a `.env` file and add:
   ```
   DATABASE_URL=postgresql://<username>:<password>@localhost/<dbname>
   JWT_SECRET_KEY=your_jwt_secret_here
   ```

5. **Run the FastAPI server**
   ```bash
   uvicorn main:app --reload
   ```

6. **API Swagger Docs**
   - 📄 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 💻 Frontend Setup (Vite + React)

1. **Navigate to frontend**
   ```bash
   cd path/to/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open frontend**
   - 🌐 [http://localhost:5173](http://localhost:5173)

---

### ⚙️ CORS Configuration (FastAPI)

Make sure the following is included in your FastAPI `main.py`:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 📂 Project Structure

```bash
noteweb/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   └── ...
    └── package.json
```

---

## 🔑 Example .env (Backend)

```env
DATABASE_URL=postgresql://postgres:yourpassword@localhost/notesdb
JWT_SECRET_KEY=your_super_secret_key
```

---

## 🧪 API Testing with Swagger

- Base URL: `http://localhost:8000`
- Swagger UI: `http://localhost:8000/docs`

Test all routes: login, register, create note, update, delete, etc.

---

## 🧰 Useful Terminal Commands

### Run Backend (in Terminal 1):
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

### Run Frontend (in Terminal 2):
```bash
cd frontend
npm install  # only once
npm run dev
```

## 📦 Versions Used

| Component         | Version        |
|------------------|----------------|
| Node.js          | v22.14.0       |
| NPM              | 10.9.2         |
| Python           | 3.12.7         |
| FastAPI          | 0.115.12       |
| Uvicorn          | 0.34.0         |
| PostgreSQL       | 14.17          |
| React            | 6.3.0          |
| Vite             | 19.0.0         |

---

## 🎯 Future Enhancements

- [x] JWT-based authentication
- [ ] Dark Mode toggle
- [ ] Session persistence with token refresh
- [ ] User profile page
- [ ] Deployment on Render/Vercel

---

## 👨‍💻 Author

**Divyey Arora**  
🔗 [GitHub](https://github.com/Divyey)

---

## 📃 License

This project is licensed under the MIT License.
```

---

Let me know if you want badges, screenshots, or deployment setup instructions added!
