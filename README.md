# Global Scholarship Portal

A professional, high-performance web application designed to connect students with global funding opportunities. This project features a modern UI, real-time search functionality, and a seamless multi-page experience.

---

## Key Features

* **Real-Time Search:** Instantly filter scholarships by name, country, or category.
* **Responsive UI:** Optimized for a professional look on mobile, tablet, and desktop.
* **Dynamic Routing:** Dedicated pages for scholarship details using URL parameters.
* **Clean Architecture:** Separated concerns between data, components, and pages.

---

## Built With

* **React.js (Vite):** Frontend framework for speed and scalability.
* **React Router Dom:** Handles all site navigation and dynamic links.
* **CSS-in-JS:** Custom professional styling for a "startup" aesthetic.

---

##  Project Structure

```text
scholarship-project/
 ┣ src/
 ┃ ┣ component/
 ┃ ┃ ┗ Navbar.jsx           # Modern sticky navigation
 ┃ ┣ data/
 ┃ ┃ ┗ scholarship.js       # The "Database" (JSON-style array)
 ┃ ┣ pages/
 ┃ ┃ ┣ Home.jsx             # Landing page
 ┃ ┃ ┣ scholarship.jsx      # Search & Listing page
 ┃ ┃ ┗ Scholarshipdetails.jsx # Detail view for each grant
 ┃ ┣ App.jsx                # Main routes & layout
 ┃ ┗ main.jsx               # Application entry point
 ┣ README.md                # Project documentation
 ┗ package.json             # Project dependencies


## Clone the repository
   ```bash
   git clone [https://github.com/Ayooluuwa70/scholarship-portal.git](https://github.com/Ayooluwa70/scholarship-portal.git)
   cd scholarship-portal