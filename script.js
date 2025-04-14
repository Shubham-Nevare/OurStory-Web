
// mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
          console.log("Menu button clicked!");
          mobileMenu.classList.toggle('hidden');
          document.body.style.overflow = mobileMenu.classList.contains('hidden') ? "" : "hidden"; // Prevent scrolling when menu opens
      });
  } else {
      console.error("Mobile menu elements not found!");
  }
});
// JavaScript for Toggle

function toggleAccordion(selected) {
  const isMission = selected === 'mission';

  const missionContainer = document.getElementById('missionContainer');
  const visionContainer = document.getElementById('visionContainer');
  const missionText = document.getElementById('missionText');
  const visionText = document.getElementById('visionText');

  if (isMission) {
    missionText.classList.remove("hidden");
    visionText.classList.add("hidden");

    missionContainer.classList.add("bg-green-100", "md:h-[425px]");
    missionContainer.classList.remove("bg-green-200", "md:h-[70px]");

    visionContainer.classList.add("bg-green-200", "md:h-[70px]");
    visionContainer.classList.remove("bg-green-100", "md:h-[425px]");

  } else {
    visionText.classList.remove("hidden");
    missionText.classList.add("hidden");

    visionContainer.classList.add("bg-green-100", "md:h-[425px]");
    visionContainer.classList.remove("bg-green-200", "md:h-[70px]");

    missionContainer.classList.add("bg-green-200", "md:h-[70px]");
    missionContainer.classList.remove("bg-green-100", "md:h-[425px]");
  }
}


// list active

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // prevent page reload

      // Reset all links
      links.forEach((l) => {
        l.classList.remove("text-[#153965]");
        l.classList.add("text-[#829EBF]");
      });

      // Set active class
      this.classList.remove("text-[#829EBF]");
      this.classList.add("text-[#153965]");

       // Scroll to section smoothly
       const target = document.querySelector(this.getAttribute("href"));
       if (target) {
         target.scrollIntoView({ behavior: "smooth", block: "start" });
       }
    });
  });
});
// list end

// Hitting New Milestones

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          // Reset all buttons to default styles
          tabs.forEach(btn => {
              btn.classList.remove("bg-[#153965]", "text-white");
              btn.classList.add("bg-white", "border-[#153965]", "border-solid", "border-1");
          });

          // Hide all tab content
          tabContents.forEach(content => content.classList.add("hidden"));

          // Apply active styles to the clicked button
          this.classList.add("bg-[#153965]", "text-white");
          this.classList.remove("bg-white", "border-[#153965]", "border-solid", "border-1");

          // Show the corresponding content
          const target = document.getElementById(this.getAttribute("data-target"));
          target.classList.remove("hidden");
      });
  });

  // Set default active tab on page load
  tabs[0].classList.add("bg-[#153965]", "text-white");
  tabs[0].classList.remove("bg-white", "border-[#153965]", "border-solid", "border-1");
  tabContents[0].classList.remove("hidden");
});

// end Hitting New Milestones


