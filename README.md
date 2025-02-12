# portfolio-website
# Bohdan's Portfolio Website


Welcome to **Portfolio Website**, a personal portfolio that showcases my skills, experience, and personality in a stylish and interactive way. The site features smooth animations, a dark mode toggle, and various JavaScript-powered effects for an engaging experience.
A modern personal portfolio website featuring dark/light themes, interactive elements, and responsive design.


## Features

- 🌓 Dark/Light theme toggle
- 📱 Mobile-responsive design with sidebar menu
- 🎯 Interactive skill progress bars
- 📊 Animated statistics counter
- 🎵 "Now Playing" music section
- 💰 Pricing plans with payment integration
- 📨 Contact form with Formspree integration
- 🎉 Confetti animation effects

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Animations)
- JavaScript (ES6+)
- [Bootstrap 5](https://getbootstrap.com/)
- [Typed.js](https://github.com/mattboldt/typed.js/)
- [Font Awesome](https://fontawesome.com/)
- [Confetti.js](https://github.com/matteobruni/tsparticles)

## 📁 Project Structure

```
📂 about-me-website
│── 📂 src
│    │── 📄 index.html          # Main HTML file
│    │── 🎨 style.css           # Custom CSS styles
│    │── 🎭 script.js           # JavaScript for interactivity
│    │── 🎊 confetti.min.js     # Confetti effect script
│    │── 🖼️ images/             # Image assets
│    │── 🔠 fonts/              # Custom fonts (e.g., Montserrat)
│── 📜 README.md           # Project documentation
│── 📂 bootstrap-5.3.3-dist
```

---

## 🔧 Setup & Installation

### ✅ Prerequisites

- A web browser (Chrome, Firefox, Edge, Safari)
- **(Optional)** Live Server (VS Code Extension) for local preview
- **(Optional)** Python (to run a local server)

### 💻 Installation Steps

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/bohdanvn/portfolio-website
```

2️⃣ **Navigate to the project folder**  
```bash
cd portfolio-website
```

3️⃣ **Run the project**  
- **Open `index.html` in a browser (or `main.html` if bootstrap isn't working, than provide a path to `index.html`)**  
- **Or start a local server:**  

  - **Python (for Python 3.x)**  
    ```bash
    python -m http.server 8000
    ```
    Then visit `http://localhost:8000` in your browser.

  - **VS Code Live Server**  
    - Install the "Live Server" extension.  
    - Open `index.html`, right-click, and select **"Open with Live Server"**.  

---

## ⚙️ Configuration & Customization

### 🔠 **Modify Typed.js Text Animation**
Located in `script.js`, change the `strings` array:

```js
const typed = new Typed('#typed', {
  strings: ["Web developer.", "Богом дан.", "Problem solver.", "Ready to work."],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});
```

### 🌙 **Customize Dark/Light Mode**
- **CSS Variables:** Modify colors in `style.css`
- **JS Logic:** Theme toggles and stores user preference in `localStorage`

### 📊 **Modify Skill Bars**
Each skill bar has a `data-width` attribute in the HTML:

```html
<div class="skill-bar">
  <div class="skill-level" data-width="80%"></div>
</div>
```

### 🔢 **Modify Stats Counters**
Edit the `data-target` values in HTML:

```html
<span class="stats-value" data-target="500">0</span>+
```

---

## 🛠️ Troubleshooting & Support

### ❓ **Common Issues & Fixes**

| Issue | Solution |
|-------|---------|
| 🔲 Dark mode toggle not working | Clear browser cache & check console for errors |
| 📊 Skill bars not animating | Ensure the section is in the viewport when scrolling |
| 🏗️ Confetti effect missing | Ensure `confetti.min.js` is correctly linked |

### 📩 **Need Help?**
For issues, suggestions, or feature requests, feel free to open an issue on GitHub or contact me via email.

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**  
2. **Create a new branch:**  
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit your changes:**  
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to GitHub and create a pull request!**

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🎉 Final Notes

Thanks for checking out my **My Portofolio Website**! If you like it, consider giving it a ⭐️ on GitHub. Enjoy coding! 🚀

