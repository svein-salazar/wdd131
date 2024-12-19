// Dynamically update the last modification date in the footer
document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    const currentDate = new Date(); // Current date for dynamic updates
    lastModified.textContent = `${currentDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`;
  });

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });

  let currentSlideIndex = 0;

// Automatically display the first slide
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Hide all slides
    slides.forEach(slide => (slide.style.display = "none"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Update index
    currentSlideIndex++;
    if (currentSlideIndex > slides.length) currentSlideIndex = 1;

    // Show the current slide and set active dot
    slides[currentSlideIndex - 1].style.display = "block";
    dots[currentSlideIndex - 1].classList.add("active");

    // Auto-transition every 5 seconds
    setTimeout(showSlides, 5000);
}

function changeSlide(n) {
    currentSlideIndex += n - 1;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    showSlides();
}

function setCurrentSlide(n) {
    currentSlideIndex = n - 1;
    showSlides();
}

// Filter Functionality
function filterSelection(criteria) {
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.classList.remove("show");
        if (criteria === "all" || column.className.includes(criteria)) {
            column.classList.add("show");
        }
    });
}

// Slideshow Functionality
document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll(".slideshow-container");

    slideshows.forEach(container => {
        let slideIndex = 0;
        const slides = container.querySelectorAll(".slide");

        function showSlides() {
            slides.forEach(slide => slide.style.display = "none");
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].style.display = "block";
            setTimeout(showSlides, 3000);
        }
        showSlides();
    });
});

// Active Button Highlight
const btnContainer = document.getElementById("myBtnContainer");
const buttons = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const active = document.querySelector(".btn.active");
        active.classList.remove("active");
        this.classList.add("active");
    });
}