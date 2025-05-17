# 3D Portfolio | Fakhrul

A sleek, interactive 3D portfolio built with React, Vite, Three.js, and Tailwind CSS. Showcase your work with stunning WebGL visuals, smooth animations, and a responsive design.

---

## 🚀 Features

- **Interactive 3D Scene**  
  Powered by [react-three-fiber](https://github.com/pmndrs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei) for reusable Three.js components.  
- **Animated Elements**  
  Uses [GSAP](https://greensock.com/gsap/) and [Leva](https://github.com/pmndrs/leva) to create performant, timeline-based animations and on-the-fly tweaking controls.  
- **Dynamic Globe Visualization**  
  Integrates `react-globe.gl` for a spinning 3D globe effect to highlight clients or locations.  
- **Modern Styling**  
  Tailwind CSS with `@tailwindcss/vite` plugin for rapid UI development and a consistent design system.  
- **Contact Form**  
  EmailJS integration for easy “send me a message” functionality—no backend required.  
- **Live Demo**  
  See it in action at: [https://codechronic.com/3d-portfolio/](https://codechronic.com/3d-portfolio/)

---

## 🌐 Live Demo

👉 [https://codechronic.com/3d-portfolio/](https://codechronic.com/3d-portfolio/)

---

## 🛠️ Tech Stack

- **Framework & Bundler**: React 19, Vite  
- **3D & WebGL**: three, @react-three/fiber, @react-three/drei  
- **Animation**: gsap, @gsap/react  
- **Visualization**: react-globe.gl, maath  
- **UI & Styling**: Tailwind CSS  
- **Form Handling**: EmailJS ([@emailjs/browser](https://github.com/emailjs/emailjs-sdk))  
- **Utilities**: react-responsive, leva  

---

## 📥 Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/vite-three-react.git
   cd vite-three-react
   ```
2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn
   ```
3. **Run the dev server**  
   ```bash
   npm run dev
   ```
4. **Open in browser**  
   Navigate to [http://localhost:5173](http://localhost:5173) to see your portfolio live.

---

## 📦 Production Build

To generate an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

---

## 🗂️ Project Structure

```
/
├── public/              
│   └── assets/          Static images & icons
├── src/
│   ├── components/      Reusable 3D & UI components
│   ├── sections/        Page sections (Hero, About, Projects, etc.)
│   ├── constants/       Navigation links & data models
│   ├── App.jsx          Main layout
│   └── main.jsx         Entry point
├── index.html           HTML template
├── tailwind.config.js   Tailwind setup
├── vite.config.js       Vite configuration
└── package.json         Scripts & dependencies
```

---

## 🤝 Contributing

1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/my-awesome-feature`)  
3. Commit your changes (`git commit -m 'Add my awesome feature'`)  
4. Push to the branch (`git push origin feature/my-awesome-feature`)  
5. Open a Pull Request

Please keep commits atomic and tests passing. All contributions are welcome!

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

**Fakhrul Alam**  
- Portfolio: https://fakhrul.codechronic.com  
- Live Demo: https://codechronic.com/3d-portfolio/  
- Email: ifakhrul23@gmail.com

Feel free to reach out if you have any questions or run into issues!
