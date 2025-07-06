* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lora', serif;
  background-color: #fefefe;
  color: #222;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Cover */
#cover {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
}

/* Music Icon */
.music-icon {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1100;
  background: transparent;
  font-size: 24px;
  border: none;
  color: #444;
  cursor: pointer;
}

/* Mini Header */
#mini-header {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  background: #fff;
  padding: 12px 20px;
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Nav */
#nav {
  display: none;
  position: fixed;
  top: 0; right: 0;
  width: 240px;
  height: 100vh;
  background: #fff;
  z-index: 1050;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding-top: 60px;
}
#nav ul { list-style: none; padding: 0; }
#nav li { margin: 16px 0; text-align: center; }
#nav a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  transition: 0.3s;
}
#nav a:hover { color: #888; }

.menu-btn {
  font-size: 24px;
  cursor: pointer;
  padding: 20px;
}

/* Sections */
.section {
  display: none;
  padding: 100px 20px 60px;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.about-box, .floating-box, .contact-box {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  margin: 20px 0;
}

.about-title {
  font-size: 20px;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.signature {
  margin-top: 30px;
  font-style: italic;
}
.signature span { font-weight: bold; }

/* Quiz */
.center-title { text-align: center; font-size: 24px; margin-bottom: 10px; }
.center-sub { font-style: italic; margin-bottom: 20px; }
.caps-title {
  font-weight: bold;
  text-transform: uppercase;
  margin: 20px 0 10px;
}
.result-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.result-box {
  padding: 12px;
  background: #fff;
  border-left: 4px solid #333;
  text-align: left;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.scent-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-top: 10px;
}
.scent-box {
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
}

/* Buttons */
.buttons {
  margin: 30px 0 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.buttons a {
  background: #222;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;
}
.buttons a:hover { background: #444; }
.review-button { background: #6a4caf; }

.review-sub, .faq-text, .contact-sub {
  margin-bottom: 20px;
  font-size: 16px;
}
.circle-label {
  margin-top: 20px;
  background: #eee;
  display: inline-block;
  padding: 8px 14px;
  border-radius: 50px;
  font-size: 14px;
}

/* Contact Icons */
.contact-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}
.contact-box a {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  background: #fff;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 40px;
  font-size: 14px;
  color: #333;
  transition: 0.3s;
}
.contact-box a:hover { background: #f1f1f1; }

/* Home Button */
#home-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 18px;
  cursor: pointer;
  z-index: 1100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: background 0.3s;
}
#home-btn:hover { background: #444; }

/* Fade-in */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .section { padding: 80px 15px 50px; }
  .menu-btn { padding: 15px; }
  .section-title { font-size: 24px; }
  .scent-container { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
  .buttons a { font-size: 14px; padding: 8px 16px; }
  #nav { width: 100%; padding-top: 100px; }
}
