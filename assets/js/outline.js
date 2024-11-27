let headings;

document.addEventListener("DOMContentLoaded", () => {
    const postContentDiv = document.querySelector(".post-content")
    // Select the div with the class "post-outline"
    const postOutlineDiv = document.querySelector('.post-outline');
    
    if (!postOutlineDiv) {
        return;
    }

    // Find all heading elements within the div
    headings = postContentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    // Append each heading back into the div in the same order
    var i = 0;
    headings.forEach(heading => {
      let id = "section" + i;
      var child = document.createElement("a");
      child.innerText = heading.innerText;
      child.href = "#" + id;
      child.classList.add("outline-item");
      var p = document.createElement("p");
      p.appendChild(child);
      postOutlineDiv.appendChild(p);  

      // Add id to heading
      heading.setAttribute("id", id);
      i += 1;
    });
  

    const outlineItems = document.querySelectorAll('.post-outline .outline-item');

    // Function to find the active section
    const updateHighlight = () => {
        let activeSection = null;

        headings.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                activeSection = section;
            }
        });

        // Highlight the corresponding outline item
        outlineItems.forEach(item => {
            if (activeSection && item.getAttribute('href') === `#${activeSection.id}`) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    // Attach the scroll event
    window.addEventListener('scroll', updateHighlight);

    // Initial highlight
    updateHighlight();
});

