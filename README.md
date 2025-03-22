# 🍎 Food Nutrition Analysis App

## Overview
The **Food Nutrition Analysis App** is a full-stack web application that allows users to upload food images and receive detailed nutritional breakdowns using the **Google Gemini AI API**. This app is designed to help users understand the nutritional content of their food easily and efficiently.

## Features
- ✅ **Image Upload**: Upload a food image to analyze its nutrition.
- ✅ **AI-Powered Recognition**: Utilizes the Google Gemini 1.5 Flash API for accurate food recognition.
- ✅ **Nutritional Breakdown**: Provides detailed information including calories, protein, fats, carbohydrates, vitamins, and more.
- ✅ **Responsive Design**: Built with **Tailwind CSS** for a fully responsive user interface.
- ✅ **Tech Stack**: Developed using **React.js (Vite)** for the frontend and **Flask** with **MongoDB** for the backend.

## Tech Stack
### Frontend
- ⚛ **React.js (Vite)**
- 🎨 **Tailwind CSS**
- 🌐 **Fetch API** for backend communication

### Backend
- 🐍 **Flask (Python)**
- 🔥 **Google Gemini 1.5 Flash API**
- 🛢️ **MongoDB** for storing results
- 🔄 **Flask-CORS** for handling cross-origin requests

## Project Structure
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
### 1. Clone the Repository
sh
Copy
Edit
git clone https://github.com/prabhaspaddana/food-nutrition-app.git
cd food-nutrition-app
### 2. Backend Setup (Flask)
sh
Copy
Edit
cd backend
python -m venv venv  # Create a virtual environment
source venv/bin/activate  # Activate (Mac/Linux)
venv\Scripts\activate  # Activate (Windows)

pip install -r requirements.txt  # Install dependencies
### 3. Frontend Setup (React.js + Vite)
sh
Copy
Edit
cd frontend
npm install  # Install dependencies
npm run dev  # Start the frontend
🌍 Usage
### 1. Run the Backend

sh
Copy
Edit
cd backend
python app.py
✔ API running at: http://localhost:5000/

### 2. Run the Frontend

sh
Copy
Edit
cd frontend
npm run dev
✔ Frontend running at: http://localhost:5173/

### 3. Upload an Image & Get Nutrition Info

Click "Choose File" to upload a food image

Click "Upload & Analyze"

Get detailed nutritional values (calories, protein, etc.)

🔑 Environment Variables
Create a .env file in the backend folder and add:

ini
Copy
Edit
GEMINI_API_KEY=your_google_gemini_api_key
⚠️ **DO NOT share this file publicly!**


👨‍💻 Contributing
Want to improve the project? Feel free to fork and contribute!
1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push to your fork: `git push origin feature-name`
5. Open a Pull Request 🚀

📜 License
This project is MIT Licensed – Free to use & modify!

⭐ Show Your Support
If you like this project, give it a star ⭐ on GitHub!
Follow me on GitHub for more cool projects.

🔗 Live Demo
🔗 **Live Demo**: [Coming Soon]

📨 Contact
📨 **Contact**: prabas.paddana@gmail.com