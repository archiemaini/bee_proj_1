# Simple Web Development Project

This is a basic web development assignment created using HTML, CSS, and JavaScript. It contains a login page and a weather dashboard that fetches live data from OpenWeatherMap.

## Project Structure

```text
project/
│
├── index.html       - Login page layout
├── dashboard.html   - Weather dashboard layout
├── style.css        - Simple styling for both pages
├── script.js        - Javascript for performing login checks
├── dashboard.js     - Javascript for fetching weather data
├── users.json       - JSON file containing allowed login credentials
└── README.md        - Documentation about the project
```

## Login Credentials

Use these credentials to log in (they are fetched from `users.json`):

* **Admin User:**
  * **Username:** `admin`
  * **Password:** `password123`
* **Student User:**
  * **Username:** `student`
  * **Password:** `jsbasic2026`

## API Key Location

The weather search function uses the WeatherAPI.com API. You must configure your API key here:
1. Open the file `project/dashboard.js`.
2. Locate line 4:
   ```javascript
   var apiKey = "YOUR_API_KEY_HERE";
   ```
3. Replace `"YOUR_API_KEY_HERE"` with your actual WeatherAPI.com API key (e.g. `var apiKey = "1234567890abcdef...";`).

## How to Run the Project

Because this project uses the `fetch()` API to load `users.json`, it **cannot** be run by simply double-clicking `index.html` in your file explorer. You must run it using a local web server:

### Method 1: Using VS Code Live Server
1. Open the project folder in VS Code.
2. Install the extension called **Live Server** (by Ritwick Dey).
3. Click the **Go Live** button at the bottom-right corner of the window.
4. Your browser will open the site automatically at `http://127.0.0.1:5500/index.html`.



### Method 2: Using Node.js
1. If you have Node.js installed, open terminal inside the project directory and run:
   ```cmd
   npx http-server -p 8000
   ```
2. Open your web browser and go to `http://localhost:8000`.
