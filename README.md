🍎 Food Nutrition Analysis App
📸 Upload a food image & get its nutritional breakdown using AI

🚀 Overview
The Food Nutrition Analysis App is a full-stack web application that lets users upload food images and get detailed nutritional values using Gemini AI API.

✨ Features
✅ Upload a food image and analyze its nutrition
✅ Uses Google Gemini 1.5 Flash API for food recognition
✅ Provides calories, protein, fats, carbs, vitamins, etc.
✅ Fully responsive UI with Tailwind CSS
✅ Built with React.js (Vite) + Flask + MongoDB

🛠️ Tech Stack
Frontend
⚛ React.js (Vite)

🎨 Tailwind CSS

🌐 Fetch API for backend communication

Backend
🐍 Flask (Python)

🔥 Google Gemini 1.5 Flash API

🛢️ MongoDB (for storing results)

🔄 Flask-CORS (for handling requests)

📂 Project Structure
bash
Copy
Edit
food-nutrition-app/
│── frontend/               # React.js (Vite) frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images and static files
│   │   ├── App.js          # Main app component
│   │   ├── index.js        # Entry point
│   ├── public/             # Static assets
│   ├── package.json        # Dependencies
│── backend/                # Flask backend
│   ├── app.py              # Main Flask API
│   ├── env/                # API Keys (Ignored in Git)
│   ├── uploads/            # Uploaded images (Git ignored)
│   ├── requirements.txt    # Python dependencies
│── .gitignore              # Ignore unnecessary files
│── README.md               # Project documentation
🛠️ Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/prabhaspaddana/food-nutrition-app.git
cd food-nutrition-app
2️⃣ Backend Setup (Flask)
sh
Copy
Edit
cd backend
python -m venv venv  # Create virtual environment
source venv/bin/activate  # Activate (Mac/Linux)
venv\Scripts\activate  # Activate (Windows)

pip install -r requirements.txt  # Install dependencies
3️⃣ Frontend Setup (React.js + Vite)
sh
Copy
Edit
cd frontend
npm install  # Install dependencies
npm run dev  # Start the frontend
🌍 Usage
1️⃣ Run the Backend

sh
Copy
Edit
cd backend
python app.py
✔ API running at: http://localhost:5000/

2️⃣ Run the Frontend

sh
Copy
Edit
cd frontend
npm run dev
✔ Frontend running at: http://localhost:5173/

3️⃣ Upload an Image & Get Nutrition Info

Click "Choose File" to upload a food image

Click "Upload & Analyze"

Get detailed nutritional values (calories, protein, etc.)

🔑 Environment Variables
Create a .env file in the backend folder and add:

ini
Copy
Edit
GEMINI_API_KEY=your_google_gemini_api_key
⚠️ DO NOT share this file publicly!


👨‍💻 Contributing
Want to improve the project? Feel free to fork & contribute!

Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m "Added new feature")

Push to your fork (git push origin feature-name)

Open a Pull Request 🚀

📜 License
This project is MIT Licensed – Free to use & modify!

⭐ Show Your Support
If you like this project, give it a star ⭐ on GitHub!
Follow me on GitHub for more cool projects.

🔗 Live Demo: [Coming Soon]
📨 Contact: prabas.paddana@gmail.com