📈 Price Tracker A real-time stock price tracking web application

🔍 Overview Price Tracker is a web application that allows users to track and visualize historical stock data for various companies. The app provides interactive charts to display open, close, high, and low prices over time.

🏗 Tech Stack Frontend: React.js (Vite), Chart.js, Ant Design Backend: NestJS, MongoDB Scraping & Data Handling: Axios, Puppeteer (or an API if applicable) 🚀 Features ✅ Fetches real-time and historical stock data ✅ Interactive line charts for stock price analysis ✅ User-friendly UI with Ant Design components ✅ Backend API to fetch and serve stock data

🛠 How We Scrape Stock Data The backend retrieves stock price data using one of the following methods:

1️⃣ Scraping with Puppeteer (Headless Browser) We use Puppeteer, a headless browser, to extract stock prices from financial websites like Yahoo Finance.

2️⃣ Fetching Data from an API Alternatively, we use a stock market API (such as Alpha Vantage or Yahoo Finance API) to get historical stock prices.

🔧 Installation & Setup

1️⃣ Clone the Repository git clone https://github.com/yourusername/price-tracker.git cd price-tracker

2️⃣ Install Dependencies

-Frontend cd frontend/price-tracker npm install npm run dev

-backend cd ../backend/price-tracker npm install npm run start

🌎 Deployment

-Frontend 1-Navigate to the frontend directory:

cd frontend/price-tracker npm run build

2-Deploy to Vercel: vercel --prod

-Backend 1-Navigate to the backend directory: cd ../backend/price-tracker npm run build

2-Deploy using: vercel --prod

📜 Environment Variables Create a .env file in the backend directory and configure the following:

MONGO_URI=mongodb+srv://your-mongodb-uri API_KEY=your-api-key

🎯 Contributing Feel free to fork this repository and submit pull requests! 🚀

📌 Author: [Yessine Akaichi] 📌 GitHub: [github/yessine09]
