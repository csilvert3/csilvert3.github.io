document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  function showSlide(index) {
    if (index < 0) {
      slideIndex = 0;
    } else if (index >= slides.length) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }

    // Hide all slides and remove active class from thumbnails
    slides.forEach((slide) => slide.style.display = "none");
    thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active"));

    // Display the current slide and set active thumbnail
    slides[slideIndex].style.display = "block";
    thumbnails[slideIndex].classList.add("active");

    // Hide navigation buttons on first or last
    if (slideIndex === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }

    if (slideIndex === slides.length - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  }

  // Event listeners for nav buttons
  prevButton.addEventListener('click', function() {
    showSlide(slideIndex - 1);
  });

  nextButton.addEventListener('click', function() {
    showSlide(slideIndex + 1);
  });

  // Event listeners for thumbnail
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
      showSlide(index);
    });
  });

  // Display the first slide on page load
  showSlide(slideIndex);
});
