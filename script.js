document.addEventListener("DOMContentLoaded", function() {
    const skillsTab = document.getElementById("skills");
    const educationTab = document.getElementById("education");
    const experienceTab = document.getElementById("experience");

    const skillsButton = document.querySelector(".tab-links[onclick=\"opentab('skills')\"]");
    const educationButton = document.querySelector(".tab-links[onclick=\"opentab('education')\"]");
    const experienceButton = document.querySelector(".tab-links[onclick=\"opentab('experience')\"]");


    // Initially show skills and hide education
    skillsTab.style.display = "block";
    educationTab.style.display = "none";
    experienceTab.style.display = "none";

    // Function to switch tabs
    function showTab(tab) {
        if (tab === "skills") {
            skillsTab.style.display = "block";
            educationTab.style.display = "none";
            experienceTab.style.display = "none";

            skillsButton.classList.add("active-link");
            educationButton.classList.remove("active-link");
            experienceButton.classList.remove("active-link");

        } else if (tab === "education") {
            skillsTab.style.display = "none";
            educationTab.style.display = "block";
            experienceTab.style.display = "none";

            skillsButton.classList.remove("active-link");
            educationButton.classList.add("active-link");
            experienceButton.classList.remove("active-link");

        } else if (tab === "experience") {
            skillsTab.style.display = "none";
            educationTab.style.display = "none";
            experienceTab.style.display = "block";

            skillsButton.classList.remove("active-link");
            educationButton.classList.remove("active-link");
            experienceButton.classList.add("active-link");
        }
    }

    // Attach event listeners
    skillsButton.addEventListener("click", function() {
        showTab("skills");
    });

    educationButton.addEventListener("click", function() {
        showTab("education");
    });
    experienceButton.addEventListener("click", function() {
        showTab("experience");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlidePosition();
    });
    
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlidePosition();
    });
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevButton.click();
      } else if (e.key === 'ArrowRight') {
        nextButton.click();
      }
    });
  });