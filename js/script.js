// DARK MODE
// Patikrina ar dark mode įjungtas kai puslapis užsikrauna
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDark();
    }
});

// Įjungia dark mode stilius
function enableDark() {
    document.body.classList.add("dark-mode");
    const btn = document.querySelector(".dark-mode-btn");
    if (btn) btn.textContent = "Light mode";
}

// Išjungia dark mode stilius
function disableDark() {
    document.body.classList.remove("dark-mode");
    const btn = document.querySelector(".dark-mode-btn");
    if (btn) btn.textContent = "Dark mode";
}

// Perjungia dark/light mode ir išsaugo localStorage
function darkMode() {
    if (document.body.classList.contains("dark-mode")) {
        disableDark();
        localStorage.setItem("darkMode", "disabled");
    } else {
        enableDark();
        localStorage.setItem("darkMode", "enabled");
    }
}

// INDEX PUSLAPIS
// Rodo informaciją apie įmonę
function showAbout() {
    alert("Santechnikos įmonė - teikiame aukštos kokybės paslaugas!");
}

// KONTAKTŲ PUSLAPIS
// Formos validacija prieš pateikimą
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Patikrina ar visi laukai užpildyti
    if (name && email && message) {
        if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
            alert("Prašome užpildyti visus laukus!");
            return false;
        }
        alert("Žinutė išsiųsta sėkmingai!");
    }
    return false;
}

// PASLAUGŲ PUSLAPIS
// Rodo/slepia paslaugų sąrašą
function toggleServices() {
    const grid = document.getElementById("servicesGrid");
    const btn = event.target;

    if (grid.style.display === "none") {
        grid.style.display = "grid";
        btn.textContent = "Slėpti paslaugas";
    } else {
        grid.style.display = "none";
        btn.textContent = "Rodyti paslaugas";
    }
}

// Paslaugos užsakymo mygtukas
function orderService(name) {
    alert("Užsakyta paslauga: " + name + "\nSusisieksime su jumis artimiausiu metu!");
}


// GALERIJOS PUSLAPIS
// Keičia galerijos išdėstymą tarp 2 ir 4 kolonų
function toggleGalleryLayout() {
    const imgs = document.querySelectorAll(".gallery-img");
    const btn = event.target;

    // Tikrina ar šiuo metu didelis režimas
    if (btn.dataset.layout === "big") {
        // Grįžta į normalų išdėstymą
        imgs.forEach(img => {
            img.style.height = "";
            img.style.objectFit = "";
        });
        btn.dataset.layout = "";
        btn.textContent = "Keisti išdėstymą";
    } else {
        // Didelis režimas - kvadratinės nuotraukos
        imgs.forEach(img => {
            img.style.height = "200px";
            img.style.objectFit = "cover";
            img.style.width = "100%";
        });
        btn.dataset.layout = "big";
        btn.textContent = "Grįžti į normalų";
    }
}