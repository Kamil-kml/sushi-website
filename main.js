// const navLogo = document.getElementById("nav-logo");
// const pictures = {
//     WasabiWondersLogo: 'Pictures/WasabiWondersLogo.png'
// }

// navLogo.innerHTML += `<img class="logo" src="${pictures.WasabiWondersLogo}" alt="Wasabi Wonders Logo" />`

const toggleButton = document.getElementById('dark-mode-btn');
const body = document.body;
const icon = document.getElementById('dark-mode-icon'); // Target the icon element

// Load saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun'); // Set the correct icon for dark mode
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Change to sun icon in dark mode
    } else {
        localStorage.setItem('darkMode', 'disabled');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Change back to moon icon in light mode
    }
});