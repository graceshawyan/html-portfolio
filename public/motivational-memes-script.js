// JavaScript (script.js)

document.addEventListener('keydown', function(e) {
    const scrollContainer = document.getElementById('scrollContainer');
    
    // Scroll right with ArrowRight key
    if (e.key === 'ArrowRight') {
        scrollContainer.scrollBy({
            left: 300, // Scroll 300 pixels to the right
            behavior: 'smooth' // Smooth scrolling effect
        });
    }
    // Scroll left with ArrowLeft key
    else if (e.key === 'ArrowLeft') {
        scrollContainer.scrollBy({
            left: -300, // Scroll 300 pixels to the left
            behavior: 'smooth'
        });
    }
});
