# Priya Dharshini R | Personal Portfolio Website

A responsive, single-page personal portfolio website built with **HTML, CSS and vanilla JavaScript** as part of my **Thiranex Frontend Development Internship**.

The website presents my profile, skills, services, projects and contact information in a clean dark-themed interface. It includes a responsive navigation menu, About tabs, a project showcase, a downloadable CV and a contact form connected to Google Sheets using Google Apps Script.

## Features

- Responsive single-page layout for desktop, tablet and mobile
- Dark theme with pink accent color
- Poppins font and Font Awesome icons
- Hero section with a fixed (parallax) background image
- Mobile navigation menu that slides in from the right
- Smooth scrolling between sections
- Animated navigation underline on hover
- About section with Skills, Experience and Education tabs
- Services section
- Portfolio section with project cards linking to GitHub
- Hover effects on service and portfolio cards
- Contact section with email and phone details
- Social media icons (links to be added)
- Downloadable CV
- Contact form connected to Google Sheets, with success and error messages

## Built With

| Technology | Used For |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout, animations and responsive design |
| JavaScript (ES6) | About tabs, mobile navigation and contact form |
| Google Apps Script | Processing contact form submissions |
| Google Sheets | Storing contact form messages |
| Font Awesome 6.5.1 | Icons |
| Google Fonts (Poppins) | Typography |

## Project Structure

```text
Personal Portfolio Website/
│
├── index.html
├── style.css
├── script.js
├── Priya-Dharshini-R-Resume.pdf
├── README.md
│
└── images/
    ├── about.png
    ├── home-circle-right.png
    ├── portfolio-thumbnail.png
    ├── bi-dashboard-thumbnail.png
    └── web-app-thumbnail.png
```

## Website Sections

### Home
An introduction to me as an Artificial Intelligence and Data Science student, with buttons to view my work or contact me.

### About
A short introduction with three tabs:

- Skills
- Experience
- Education

### Services
- Web Development
- Data Analytics
- AI & Machine Learning

### Portfolio
- **Personal Portfolio Website** – a responsive portfolio built with HTML, CSS and JavaScript.
- **Business Intelligence Dashboard** – an interactive dashboard for analysing business and sales data.
- **Interactive Web Application** – an interactive web app built with HTML, CSS and JavaScript (from my DecodeLabs internship projects).

### Contact
- Email and phone
- Social media icons
- Download CV button
- Contact form (Name, Email, Message)

## Getting Started

No build tools or frameworks are required.

### 1. Clone the repository

```bash
git clone https://github.com/Priya-DharshiniRamesh/Internship-Projects.git
```

### 2. Open the project

```text
Internship-Projects/
└── Thiranex/
    └── Personal Portfolio Website/
```

Open this folder in Visual Studio Code.

### 3. Run the website

Open `index.html` by double-clicking it, or use the **Live Server** extension in Visual Studio Code.

> An internet connection is needed for Google Fonts and Font Awesome, which load from external servers.

## Contact Form – Google Sheets

The form collects **Name**, **Email** and **Message**, plus a hidden `sheet_name` field (`Sheet1`). The data is sent to a deployed Google Apps Script Web App and stored in a Google Sheet.

The Web App URL is set at the top of `script.js`:

```javascript
const scriptURL = 'YOUR_WEB_APP_URL';
```

To use your own Google Sheet:

1. Create a Google Sheet with a sheet named `Sheet1`.
2. Add the column headers `Name`, `Email` and `Message`.
3. Open **Extensions → Apps Script** and add the script that writes form data to the sheet.
4. Deploy it as a **Web App** with access set to **Anyone**.
5. Copy the Web App URL into `script.js`.

> Do not submit sensitive or confidential information through the contact form.

## Customization

- **Content:** edit text, services, projects and contact details in `index.html`.
- **Styling:** edit `style.css`. The theme colors are defined at the top:

```css
:root {
    --bg: #080808;
    --card: #262626;
    --accent: #ff004f;
    --text: #ffffff;
    --muted: #ababab;
}
```

- **Behavior:** edit `script.js` (About tabs, mobile menu, contact form).
- **Images:** replace files in `images/` and keep the same filenames, or update the paths in `index.html` and `style.css`.
- **Resume:** replace `Priya-Dharshini-R-Resume.pdf` and keep the same filename, or update the Download CV link in `index.html`.

## Projects

| Project | Technology | Description |
|---|---|---|
| Personal Portfolio Website | HTML, CSS, JavaScript | Responsive personal portfolio website |
| Business Intelligence Dashboard | Data analytics / BI | Interactive business and sales data dashboard |
| Interactive Web Application | HTML, CSS, JavaScript | Interactive web application |

## Deployment

This is a static website and can be deployed with **GitHub Pages**. Because the portfolio lives inside a subfolder of the `Internship-Projects` repository, publish it using a setup that serves the folder containing `index.html`, or move it to its own repository.

### Live Demo

```text
Coming soon
```

## Browser Support

Designed for modern browsers: Google Chrome, Microsoft Edge, Mozilla Firefox and Safari.

## Internship

Developed as part of my **Thiranex Frontend Development Internship**.

## Author

**Priya Dharshini R**
B.Tech – Artificial Intelligence and Data Science
Kumaraguru College of Technology, Coimbatore

- GitHub: [@Priya-DharshiniRamesh](https://github.com/Priya-DharshiniRamesh)
- Email: [srpriyadharshini16@gmail.com](mailto:srpriyadharshini16@gmail.com)

---

© 2026 Priya Dharshini R. All rights reserved.
