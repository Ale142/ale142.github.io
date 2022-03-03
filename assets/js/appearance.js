const browserIsDark =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const sitePreference = document.documentElement.getAttribute("data-default-appearance");
const userPreference = localStorage.getItem("appearance");

if (
  (browserIsDark && userPreference === null) ||
  (browserIsDark && userPreference === "dark") ||
  (sitePreference === "dark" && userPreference === null) ||
  (sitePreference === "dark" && userPreference === "dark") ||
  userPreference === "dark"
) {
  document.documentElement.classList.add("dark");
}

if (document.documentElement.getAttribute("data-auto-appearance") === "true") {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  const switcher = document.getElementById("appearance-switcher");
  if (switcher) {

    switcher.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "appearance",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
      const particleTheme = window.localStorage.getItem("appearance") === 'dark' ? 'light' : 'dark'
      particlesJS.load('particles-js', `json/particlesjs-config-${particleTheme}.json`, function () {
        console.log(`callback - particles.js config loaded ${particleTheme}`);
      });
    });

    switcher.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      localStorage.removeItem("appearance");
    });
  }
});
