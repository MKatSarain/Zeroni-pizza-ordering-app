# Zeroni's Pizza Ordering App 🍕 (Work in progress - Incomplete)

A full-stack web application built with **Flask**, designed to provide a simple online pizza ordering experience.  
The app demonstrates clean backend routing, session-based cart management, and responsive frontend design.

---

## Features 
- **Dynamic Routing**: Multiple pages with Flask routes (`/`, `/about`, `/menu`, `/faq`, `/order`)
- **Order System**: Session-based cart that persists while browsing
- **Responsive Layout**: Custom CSS for clean, mobile-friendly UI
- **Scalable Structure**: Organized templates and static assets for future growth
- **Reusable Components**: Shared navigation, consistent design system

---

## Tech Stack 
- **Backend**: [Flask](https://flask.palletsprojects.com/) (Python)
- **Frontend**: HTML5, CSS3, Jinja2 templating
- **Version Control**: Git & GitHub
- **Deployment Ready**: Configured to run on any environment (`0.0.0.0`, port `5001`)

---

## Project Structure 

```
Zeroni-pizza-ordering-app/
│
├── app.py # Main Flask app
├── templates/ # HTML files
│ ├── about.html
│ ├── base.html
│ ├── checkout.html
│ ├── faq.html
│ └── index.html
│ └── order.html
│
├── static/ # Static assets
│ ├── css/
│ │ └── style.css
│ ├── images/
│ │ └── logo.png
│ └── js/
│   └── script.js
│
└── README.md # Project documentation
```

---

## Getting Started 

### Prerequisites
- Python 3.8+
- pip
- Virtual environment (`venv` recommended)

### Installation
```bash
# Clone the repository
git clone https://github.com/MKatSarain/Zeroni-pizza-ordering-app.git
cd Zeroni-pizza-ordering-app

# Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate   # Mac/Linux
.venv\Scripts\activate      # Windows

# Install dependencies
pip install flask

# Run the Application
python app.py
```

The app will be available at: http://127.0.0.1:5001

---

## Future Roadmap 
- **Database Integration**: Store orders, customers, and menu items persistently  
- **Authentication**: User accounts with login/signup functionality  
- **Order Management**: Admin panel to update menu and view orders  
- **Styling Framework**: Transition to TailwindCSS or Bootstrap for faster UI scaling  
- **Deployment**: Deploy to Heroku, Render, or Docker for production use  

---

## Why This Project? 
This project demonstrates:
- Practical use of **Flask routing** and **templating**  
- Experience with **frontend + backend integration**  
- An understanding of **session management**  
- Clean, maintainable **project structure**  
- Ability to scope features and plan for **scalable improvements**  

---

## License 
MIT License – free to use, adapt, and build upon.
