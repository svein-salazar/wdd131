const temples = [
    {
        templeName: "Aba Niger Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/825014ad7522e9baeadfafbee6ac86a4aecad6e0/full/3840%2C/0/default"
    },
    {
        templeName: "Adelaide Australia Temple",
        location: "Adelaide, Autralia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/805f18d994114aee8b8925319ce0010b7d4b235d/full/1920%2C/0/default"
    },
    {
        templeName: "Asunción Paraguay Temple",
        location: "Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/35fd231831506d3e7ae534b1a2017fd387980433/full/1920%2C/0/default"
    },
    {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska ",
        dedicated: "1999, January, 10",
        area: 11937,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/9591632feb8a8e4221de920d9bf78b23b950a5e0/full/1600%2C/0/default"
    },
    {
        templeName: "Apia Samoa Temple",
        location: "Apia, Samoa",
        dedicated: "1974, November, 19",
        area: 18691,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ad9cc8cae1de942b70eba26bfc65ccc35ea576e1/full/1920%2C/0/default"
    },
    {
        templeName: "Buenos Aires Argentina Temple",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 19",
        area: 30659,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/396dd44dcb8c55b10150bae7f3916389465acc0d/full/1600%2C/0/default"
    },
    {
        templeName: "Caracas Venezuela Temple",
        location: "Caracas Venezuela Temple",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/d709367e4fd0fdb422b80130d127f341947f6dfa/full/1920%2C/0/default"
    },
    {
        templeName: "The Gila Valley Arizona Temple",
        location: "Arizona, United States",
        dedicated: "2010, May, 23",
        area: 18561,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/25afe588cadc51e633900ac873853464ef28fa95/full/1920%2C/0/default"
    },
    {
        templeName: "Tijuana Mexico Temple",
        location: "Tijuana, Mexico",
        dedicated: "2015, December, 13",
        area: 33367,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/3f9dd22ecc9291dd057e315c25f433db3bc454d2/full/1600%2C/0/default"
    },
];

const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');
const homeButton = document.querySelector('#home');
const oldButton = document.querySelector('#old');
const newButton = document.querySelector('#new');
const largeButton = document.querySelector('#large');
const smallButton = document.querySelector('#small');
const filterIndicator = document.querySelector('#filter-indicator');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

homeButton.addEventListener("click", () => {
    removeActive();
    showTemples(temples);
    homeButton.classList.add('active');
    filterIndicator.innerHTML = 'Home';
});

oldButton.addEventListener("click", () => {
    removeActive();
    showTemples(temples.filter(temple => getYearFromDedication(temple) < 2000));
    oldButton.classList.add('active');
    filterIndicator.innerHTML = 'Old';
});

newButton.addEventListener("click", () => {
    removeActive();
    showTemples(temples.filter(temple => getYearFromDedication(temple) > 1999));
    newButton.classList.add('active');
    filterIndicator.innerHTML = 'New';
});

largeButton.addEventListener("click", () => {
    removeActive();
    showTemples(temples.filter(temple => temple.area > 20000));
    largeButton.classList.add('active');
    filterIndicator.innerHTML = 'Large';
});

smallButton.addEventListener("click", () => {
    removeActive();
    showTemples(temples.filter(temple => temple.area < 20000));
    smallButton.classList.add('active');
    filterIndicator.innerHTML = 'Small';
});

function removeActive() {
    homeButton.classList.remove('active');
    oldButton.classList.remove('active');
    newButton.classList.remove('active');
    largeButton.classList.remove('active');
    smallButton.classList.remove('active');
    mainNav.classList.remove('open');
    hamburgerButton.classList.remove('open');
}

function getYearFromDedication(temple) {
    return parseInt(temple.dedicated.split(', ')[0]);
}

function showTemples(templeList) {
    const templePictures = document.querySelector('.temple-listings');
    templePictures.innerHTML = '';
    templeList.forEach(temple => {
        const templeCard = document.createElement('section');
        templeCard.id = temple.templeName.replace(/\s+/g, '-').toLowerCase();
        templeCard.className = 'temple-card';
        templeCard.innerHTML = `
            <h3>${temple.templeName}</h3>
            <div class="temple-detail">
                <span class="detail-label">Location:</span>
                <span class="detail-value">${temple.location}</span>
            </div>
            <div class="temple-detail">
                <span class="detail-label">Dedicated:</span>
                <span class="detail-value">${temple.dedicated}</span>
            </div>
            <div class="temple-detail">
                <span class="detail-label">Size:</span>
                <span class="detail-value">${temple.area} sq ft</span>
            </div>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
        `;
        templePictures.appendChild(templeCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showTemples(temples);
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-Modified").textContent = `Last Modified: ${document.lastModified}`;
});
