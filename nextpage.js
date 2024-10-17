// Auto-scroll speed configuration
const scrollSpeed = 1; // Speed of scrolling, increase for faster scroll

// Function to auto-scroll the top image gallery
function autoScrollTopGallery() {
    const topGallery = document.querySelector('.image-gallery-top');
    let topScrollAmount = 0;

    setInterval(() => {
        topGallery.scrollBy(scrollSpeed, 0);
        topScrollAmount += scrollSpeed;

        // Reset scroll when reaching the end
        if (topScrollAmount >= topGallery.scrollWidth - topGallery.clientWidth) {
            topGallery.scrollLeft = 0;
            topScrollAmount = 0;
        }
    }, 20);
}

// Function to auto-scroll the bottom image gallery
function autoScrollBottomGallery() {
    const bottomGallery = document.querySelector('.image-gallery-bottom');
    let bottomScrollAmount = 0;

    setInterval(() => {
        bottomGallery.scrollBy(scrollSpeed, 0);
        bottomScrollAmount += scrollSpeed;

        // Reset scroll when reaching the end
        if (bottomScrollAmount >= bottomGallery.scrollWidth - bottomGallery.clientWidth) {
            bottomGallery.scrollLeft = 0;
            bottomScrollAmount = 0;
        }
    }, 20);
}


// Redirect to the About page when the About button is clicked
document.getElementById('aboutButton').onclick = () => window.location.href = 'about.html';

// Start auto-scrolling both galleries once the page loads
window.onload = () => {
    autoScrollTopGallery();
    autoScrollBottomGallery();
};

// JavaScript to toggle the about overlay visibility
document.getElementById("aboutButton").addEventListener("mouseover", function() {
    document.getElementById("aboutOverlay").style.display = "flex";
});

document.getElementById("closeOverlay").addEventListener("click", function() {
    document.getElementById("aboutOverlay").style.display = "none";
});

// Optional: to close the overlay when clicked outside
document.getElementById("aboutOverlay").addEventListener("click", function(event) {
    if (event.target === this) {
        document.getElementById("aboutOverlay").style.display = "none";
    }
});