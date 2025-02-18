document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    function hideBanner() {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    }

    if (localStorage.getItem("cookiesAccepted") === "true") {
        banner.style.display = "none";
    }

    acceptBtn.addEventListener("click", hideBanner);
});