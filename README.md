# PurrLogin 🐱

A playful, RTL (Arabic) login page featuring an interactive cat mascot that reacts to what the user is typing — following the cursor, covering its eyes when the password field is focused, and showing happy or sad expressions depending on form validation.

![status](https://img.shields.io/badge/status-active-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- **Interactive cat mascot** — built entirely with CSS shapes (no images/SVGs), animated with pure CSS + vanilla JS
- **Eye-tracking** — the cat's pupils follow the pointer, and follow the email input as you type
- **Contextual reactions**
  - Focuses and greets the user when the email field is active
  - Covers its eyes (shy state) when the password field is focused
  - Shakes and looks sad on validation errors
  - Celebrates with a happy face on successful submission
- **Password visibility toggle** with an accessible `aria-label` that updates dynamically
- **Client-side validation** for email format and minimum password length
- **Fully responsive** — mascot panel stacks above the form on smaller screens
- **RTL-first** — built natively for Arabic (`dir="rtl"`, `lang="ar"`)
- **Accessible** — semantic labels, `aria-live` status messages, `prefers-reduced-motion` support

## 🖥️ Demo

Live site: **[https://ili1iml.github.io/PurrLogin/](https://ili1iml.github.io/PurrLogin/)**

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, Grid/Flexbox, keyframe animations, no frameworks
- **Vanilla JavaScript** — no dependencies, no build step

## 📁 Project Structure

```
.
├── index.html      # Markup & structure
├── style.css       # All styling and animations
└── script.js       # Cat interactions & form validation logic
```

## 🚀 Getting Started

No build tools or dependencies required.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/purrlogin.git
   cd purrlogin
   ```
2. Open `index.html` in your browser — that's it!

   Or serve it locally for a better dev experience:
   ```bash
   npx serve .
   ```

## 🎯 How It Works

- `script.js` toggles CSS classes (`focused`, `shy`, `sad`, `happy`) on the `.cat` element based on form field focus and validation state, and `style.css` handles all the corresponding visual transitions.
- Pupils are moved with `transform: translate()`, calculated either from pointer position (idle state) or from email input length (typing state).
- Form submission is intercepted client-side; a real implementation would replace the validation block in `script.js` with an actual authentication request.

## 📄 License

This project is licensed under the MIT License — feel free to use and modify it.

## 🙌 Credits

Designed and built by **Mori (Moudi Alotaibi)**.
