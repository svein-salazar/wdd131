// Dynamically update the last modification date in the footer
document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = new Date(document.lastModified).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

// Form submission alert
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (firstName && lastName && email && message) {
            alert(`Thank you, ${firstName}! Your message has been sent.`);
            form.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
