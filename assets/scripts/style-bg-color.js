const setLightTheme = () => {
  document.documentElement.style.setProperty("--bg-color", "#f9f9f9");
  document.documentElement.style.setProperty("--color-text", "#4c4c4c");
  document.documentElement.style.setProperty("--color-white", "#ffffff");
  document.documentElement.style.setProperty("--color-primary", "#005c99");
  document.documentElement.style.setProperty("--color-dark", "#2b2b2b");
  document.documentElement.style.setProperty("--color-dark-hover", "#1f1f1f");
  document.documentElement.style.setProperty("--color-light-blue", "#2c91d0");
  document.documentElement.style.setProperty("--color-light-blue-2", "#44b5e7");
  document.documentElement.style.setProperty("--color-dark-blue", "#004d80");
  document.documentElement.style.setProperty("--color-default", "#000000");
};

const setDarkTheme = () => {
  document.documentElement.style.setProperty("--bg-color", "#1e1e2f");
  document.documentElement.style.setProperty("--color-text", "#e5e7eb");
  document.documentElement.style.setProperty("--color-white", "#2a2a40");
  document.documentElement.style.setProperty("--color-primary", "#3b82f6");
  document.documentElement.style.setProperty("--color-dark", "#f4f4f5");
  document.documentElement.style.setProperty("--color-dark-hover", "#52525b");
  document.documentElement.style.setProperty("--color-light-blue", "#60a5fa");
  document.documentElement.style.setProperty("--color-light-blue-2", "#93c5fd");
  document.documentElement.style.setProperty("--color-dark-blue", "#1e40af");
  document.documentElement.style.setProperty("--color-default", "#ffff");
};

const setColorBlindTheme = () => {
  document.documentElement.style.setProperty("--bg-color", "#ffffff");
  document.documentElement.style.setProperty("--color-text", "#000000");
  document.documentElement.style.setProperty("--color-white", "#f5f5f5");
  document.documentElement.style.setProperty("--color-primary", "#ffb400");
  document.documentElement.style.setProperty("--color-dark", "#000000");
  document.documentElement.style.setProperty("--color-dark-hover", "#333333");
  document.documentElement.style.setProperty("--color-light-blue", "#0072b2");
  document.documentElement.style.setProperty("--color-light-blue-2", "#009e73");
  document.documentElement.style.setProperty("--color-dark-blue", "#332288");
  document.documentElement.style.setProperty("--color-default", "#000000");
};

function setEarthTheme() {
  document.documentElement.style.setProperty("--bg-color", "#fdfaf6");
  document.documentElement.style.setProperty("--color-text", "#3e3e3e");
  document.documentElement.style.setProperty("--color-white", "#ffffff");
  document.documentElement.style.setProperty("--color-primary", "#b47b48");
  document.documentElement.style.setProperty("--color-dark", "#5b4636");
  document.documentElement.style.setProperty("--color-dark-hover", "#3a2e26");
  document.documentElement.style.setProperty("--color-light-blue", "#c2b280");
  document.documentElement.style.setProperty("--color-light-blue-2", "#e0c097");
  document.documentElement.style.setProperty("--color-dark-blue", "#836953");
  document.documentElement.style.setProperty("--color-default", "#3e3e3e");
}

const switchTheme = (mode) => {
  const themeDots = document.querySelectorAll(".theme-dot");
  themeDots.forEach((dot) => dot.classList.remove("active"));

  if (mode === "dark") {
    setDarkTheme();

    const themeDark = document.getElementById("theme-dark");
    themeDark.classList.add("active");
    return;
  }

  if (mode === "colorblind") {
    setColorBlindTheme();

    const themeColorBlind = document.getElementById("theme-colorblind");
    themeColorBlind.classList.add("active");
    return;
  }

  if (mode === "earth") {
    setEarthTheme();

    const themeEarth = document.getElementById("theme-earth");
    themeEarth.classList.add("active");
    return;
  }

  setLightTheme();

  const themeLight = document.getElementById("theme-light");
  themeLight.classList.add("active");
};
