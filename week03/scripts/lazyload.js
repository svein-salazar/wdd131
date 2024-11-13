const images = document.querySelectorAll('img[data-src]');

const loadImages = (intersectionEntry) => {
  if (intersectionEntry.isIntersecting) {
    const image = intersectionEntry.target;
    const imageSrc = image.getAttribute('data-src');
    image.src = imageSrc;
    image.removeAttribute('data-src');
    observer.unobserve(image);
  }
};

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver(loadImages, options);

images.forEach(image => observer.observe(image));
