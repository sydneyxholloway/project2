
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hidden');
    const revealBtns = document.querySelectorAll('.reveal-btn, .proceed-btn');
    const secretMessage = document.querySelector('.secret-message');

    let currentSection = 0;

    revealBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentSection < sections.length) {
                sections[currentSection].classList.remove('hidden');
                sections[currentSection].classList.add('fade-in');
                currentSection++;
            }
        });
    });

    document.querySelector('.reveal-btn').addEventListener('click', () => {
        secretMessage.classList.toggle('fade-in');
    });
});
<a href="index.html" id="homeButton" onclick="window.location.href='index.html'; return false;">Home</a>

document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.querySelector('.story-container');


    setInterval(() => {
        const randomX = (Math.random() - 0.5) * 5; 
        const randomY = (Math.random() - 0.5) * 5; 
        storyContainer.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
    const locksContainer = document.querySelector('.locks-container');
    
    // Check if the locks container exists in the DOM
    if (!locksContainer) {
        console.error('Error: .locks-container not found');
        return;
    }
    
    const numLocks = 15; // Adjust the number of lock images as needed

    for (let i = 0; i < numLocks; i++) {
        const lock = document.createElement('div');
        lock.classList.add('lock');

        // Randomize position, size, and animation delay
        lock.style.left = `${Math.random() * 100}vw`;
        lock.style.top = `${Math.random() * 100}vh`;
        lock.style.animationDelay = `${Math.random() * 5}s`;
        lock.style.width = `${30 + Math.random() * 40}px`;
        lock.style.height = `${30 + Math.random() * 40}px`;

        locksContainer.appendChild(lock); // Append each lock to the container
    }

    console.log(`${numLocks} lock elements created and animated.`);
});
