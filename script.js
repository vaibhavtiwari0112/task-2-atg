document.addEventListener("DOMContentLoaded", function() {
    const sectionContents = document.querySelectorAll(".section-1, .section-2, .section-3, .section-4, .section-5, .section-6");
    const totalSections = sectionContents.length;
    let currentSectionIndex = 0;

    // Function to hide all sections except the specified one
    function hideAllSectionsExcept(index) {
        sectionContents.forEach((content, idx) => {
            if (idx !== index) {
                content.style.display = "none";
            }
        });
    }

    // Function to transition to the next section
    function transitionToNextSection() {
        const nextSectionIndex = (currentSectionIndex + 1) % totalSections;
        transitionToSection(nextSectionIndex);
    }

    // Function to transition to the specified section
    function transitionToSection(index) {
        if (index === currentSectionIndex) {
            return;
        }

        // Hide all sections except the current one
        hideAllSectionsExcept(index);

        // Show the next section
        sectionContents[index].style.display = "block";

        // Update current section index
        currentSectionIndex = index;
    }

    // Add click event listeners to the section contents for transitioning
    sectionContents.forEach((content, index) => {
        content.addEventListener("click", () => {
            transitionToNextSection();
        });
    });

    // Hide sections by default, except the first section
    hideAllSectionsExcept(0);
});