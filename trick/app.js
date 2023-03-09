const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

// button handlers

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light')
}
