// const navLogo = document.getElementById("nav-logo");
// const pictures = {
//     WasabiWondersLogo: 'Pictures/WasabiWondersLogo.png'
// }

// navLogo.innerHTML += `<img class="logo" src="${pictures.WasabiWondersLogo}" alt="Wasabi Wonders Logo" />`

const toggleButton = document.getElementById('dark-mode-btn');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the mode in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});