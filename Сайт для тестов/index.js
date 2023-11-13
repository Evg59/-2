const darkthemeClass ="dark-theme";
const lightthemeClass ="light-theme";

const classButtonSelected="button--selected";

const buttonLight = document.querySelector(".button-light");
const buttonAuto = document.querySelector(".button-auto");
const buttonDark = document.querySelector(".button-dark");

const THEME = {
    DARK: "dark",
    LIGHT: "light",
    AUTO: "auto",
};
const localStorageKey = "theme";

const setTheme = (mode) => {
    switch(mode) {
        case THEME.DARK: {
            document.body.classList.add(darkthemeClass);
            document.body.classList.remove(lightthemeClass);

            buttonDark.classList.add(classButtonSelected);
            buttonAuto.classList.remove(classButtonSelected);
            buttonLight.classList.remove(classButtonSelected);

            localStorage.setItem(localStorageKey, THEME.DARK);
            return;
        }
        case THEME.LIGHT: {
            document.body.classList.add(lightthemeClass);
            document.body.classList.remove(darkthemeClass);

            buttonDark.classList.remove(classButtonSelected);
            buttonAuto.classList.remove(classButtonSelected);
            buttonLight.classList.add(classButtonSelected);

            localStorage.setItem(localStorageKey, THEME.LIGHT);
            return;
        }
        case THEME.AUTO:
        default: {
            const isDark =
            window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

            if (isDark) {
                document.body.classList.add(darkthemeClass);
                document.body.classList.remove(lightthemeClass);
            } else {
                document.body.classList.add(lightthemeClass);
                document.body.classList.remove(darkthemeClass);
            }

            buttonDark.classList.remove(classButtonSelected);
            buttonAuto.classList.add(classButtonSelected);
            buttonLight.classList.remove(classButtonSelected);

            localStorage.setItem(localStorageKey, THEME.AUTO);
            return;
        }
    }
};

const initTheme = () => {
    const savedThemeValue = localStorage.getItem(localStorageKey);
    setTheme(savedThemeValue);
};

const subscribeOnButtons = () => {
    buttonLight.addEventListener("click", () => setTheme(THEME.LIGHT));
    buttonDark.addEventListener("click", () => setTheme(THEME.DARK));
    buttonAuto.addEventListener("click", () => setTheme(THEME.AUTO));
};

initTheme();
subscribeOnButtons();