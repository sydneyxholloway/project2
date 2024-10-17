const spotlight = document.querySelector(".spotlight");
const overlay = document.querySelector(".overlay");

let scrollAmount = 0;

let yPos = 0;
let xPos = 0;

spotlight.addEventListener("mousemove", handleMoveEvent);
spotlight.addEventListener("touchmove", handleMoveEvent);

function handleMoveEvent(e) {
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;

    // Delay Effect
    setTimeout(() => {
        yPos = clientY - overlay.offsetHeight / 2; 
        xPos = clientX - overlay.offsetWidth / 2;

        scrollAmount = overlay.scrollTop + yPos;
        overlay.style.top = `${scrollAmount}px`; 
        overlay.style.left = `${xPos}px`;
    }, 100);
}

document.getElementById('story-text').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = event.target.href;
    }, 3000);
});

// Function to show a creepy pop-up
function showCreepyPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = 'You can never leave...';

    // Add a close button to the pop-up
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.marginTop = '10px';
    closeButton.onclick = () => {
        document.body.removeChild(popup);
    };

    popup.appendChild(closeButton);
    document.body.appendChild(popup);
    popup.style.display = 'block';
}


document.getElementById('aboutButton').onclick = function() {
    window.location.href = 'about.html';
};




