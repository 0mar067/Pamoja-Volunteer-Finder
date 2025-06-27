#  Pamoja Volunteer Finder

A single-page web app that helps users find, filter, and save local volunteer opportunities in Kenya.

Built using **HTML**, **CSS**, and **JavaScript**, with data persistence via `json-server`.

---

##  Problem Statement

Many young people and professionals in Kenya are eager to give back but lack a centralized platform listing local volunteer opportunities.

This app solves that by providing a simple web interface where users can browse, filter, and save volunteer opportunities across Kenya.

---

## 🔧 Features

-  View all volunteer opportunities
-  Filter by cause (Education, Environment, etc.)
-  Filter by location (Nairobi, Mombasa, etc.)
-  Save favorite opportunities
-  Add new opportunities via form
- View opportunity locations on a Google Map *(optional extension)*

---

## 🛠 Technologies Used

- **HTML5** – For layout and structure
- **CSS3** – For styling and responsive design
- **JavaScript (Vanilla)** – For interactivity
- **json-server** – For local API simulation
- **Google Maps JavaScript API** – Optional map integration

---

## Project Structure
pamoja-volunteer-finder/
│
├-- index.html
├-- style.css
├-- app.js
├-- db.json
└-- README.md

---

##  How to Run the App

### 1. Start json-server

Make sure you have `json-server` installed globally:
```bash
npm install -g json-server

 ## 2 run
json-server --watch db.json --port 3000
 ## open index.html in the web browser

## Author
     Eugine Elnabas 

     Email: elnabaseugine@gmail.com
     GitHub: github.com/omar067
### ✅ LICENSE
This project is licensed under [MIT LICENSE](./LICENSE.txt)