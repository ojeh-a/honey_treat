const darkLight = () => {
    const themeLink = document.getElementById("theme");
    if (!themeLink) return;
    
    const currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "assets/css/light.css") {
        themeLink.setAttribute("href", "assets/css/dark.css");
    } else {
        themeLink.setAttribute("href", "assets/css/light.css");
    }
}

const toggle = document.getElementById("toggle");
if (toggle) {
    toggle.addEventListener('click', darkLight);
}