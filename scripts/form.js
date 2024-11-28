// Product Array
const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        avgRating: 5.0
    }
];
const features = [
    {
        id: "feature-durability",
        name: "Durability"
    },
    {
        id: "feature-ease",
        name: "Ease of Use"
    },
    {
        id: "feature-performance",
        name: "Performance"
    },
    {
        id: "feature-design",
        name: "Design"
    },
]
// Function to populate product options
function populateProductOptions() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Function to create star rating
function createStarRating(ratingContainer) {
    for (let i = 5; i >= 1; i--) {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'stars';
        input.id = `star-${i}`;
        input.value = i;

        const label = document.createElement('label');
        label.htmlFor = `star-${i}`;
        label.textContent = '★';

        ratingContainer.appendChild(input);
        ratingContainer.appendChild(label);
    }
}

// Function to populate feature checkboxes
function populateFeatureCheckboxes() {
    const featureCheckboxContainer = document.querySelector('.features-fieldset');
    features.forEach(feature => {
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'features[]';
        input.id = feature.id;
        input.value = feature.name.toLowerCase().replace(/ /g, '-');
        const label = document.createElement('label');
        label.htmlFor = feature.id;
        label.textContent = feature.name;

        featureCheckboxContainer.appendChild(input);
        featureCheckboxContainer.appendChild(label);
    });
}
// Function to track form submissions using localStorage
function trackFormSubmissions() {
    let reviewCounter = localStorage.getItem('reviewCounter');
    if (!reviewCounter) {
        reviewCounter = 0;
    } else {
        reviewCounter = parseInt(reviewCounter, 10);
    }
    reviewCounter += 1;
    localStorage.setItem('reviewCounter', reviewCounter);
    return reviewCounter;
}

// Function to display the thank you message
function displayThankYouMessage(productName, reviewCounter) {
    const formContainer = document.querySelector('.review-form');
    formContainer.innerHTML = `
    <h2>Thank you for your review of ${productName}!</h2>
    <p>You have submitted ${reviewCounter} reviews.</p>
    `;
}
// Event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    const starRatingContainer = document.querySelector('.star-rating');
    createStarRating(starRatingContainer);
    populateFeatureCheckboxes();

    const reviewForm = document.querySelector('.review-form');

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values (product, rating, date, features, review, name)
        const selectedProduct = document.getElementById('product').value;
        const selectedProductName = document.getElementById('product').options[document.getElementById('product').selectedIndex].text;
        const rating = document.querySelector('input[name="stars"]:checked').value;
        const installDate = document.getElementById('installDate').value;
        const features = Array.from(document.querySelectorAll('input[name="features[]"]:checked'))
                            .map(checkbox => checkbox.value);
        const reviewText = document.getElementById('review').value;
        const userName = document.getElementById('userName').value;
        console.log('Form values:', {
            selectedProduct,
            rating,
            installDate,
            features,
            reviewText,
            userName
        });

        // Validate form data (You'll need to add more validation here)
        if (selectedProduct && rating && installDate && features.length > 0) {
            const reviewCounter = trackFormSubmissions();
            displayThankYouMessage(selectedProductName, reviewCounter);
        } else {
            alert('Please fill in all required fields and select at least one feature.');
        }
    });
});

// Last Modified footer section test
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});