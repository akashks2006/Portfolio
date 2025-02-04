document.addEventListener("DOMContentLoaded", function() {
    const skillsTab = document.getElementById("skills");
    const educationTab = document.getElementById("education");
    const skillsButton = document.querySelector(".tab-links[onclick=\"opentab('skills')\"]");
    const educationButton = document.querySelector(".tab-links[onclick=\"opentab('education')\"]");

    // Initially show skills and hide education
    skillsTab.style.display = "block";
    educationTab.style.display = "none";

    // Function to switch tabs
    function showTab(tab) {
        if (tab === "skills") {
            skillsTab.style.display = "block";
            educationTab.style.display = "none";
            skillsButton.classList.add("active-link");
            educationButton.classList.remove("active-link");
        } else if (tab === "education") {
            skillsTab.style.display = "none";
            educationTab.style.display = "block";
            skillsButton.classList.remove("active-link");
            educationButton.classList.add("active-link");
        }
    }

    // Attach event listeners
    skillsButton.addEventListener("click", function() {
        showTab("skills");
    });

    educationButton.addEventListener("click", function() {
        showTab("education");
    });
});
