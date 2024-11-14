// Select the skills section and progress bars
const skillsSection = document.querySelector('.skills-bar');
const progressBars = document.querySelectorAll('.bar');

// Function to animate the progress bars
function animateBars() {
    progressBars.forEach(function(bar) {
        const targetWidth = bar.getAttribute('data-width');
        bar.querySelector('.progress').style.width = targetWidth;
    });
}

// Create an IntersectionObserver to observe the skills section
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            animateBars();
            observer.unobserve(skillsSection); // Stop observing after animation
        }
    });
}, { threshold: 0.5 }); // Trigger animation when half of the section is visible

// Start observing the skills section
observer.observe(skillsSection);

// Fullscreen Gallery
function openFullscreen(media) {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.style.position = 'fixed';
    fullscreenDiv.style.top = '0';
    fullscreenDiv.style.left = '0';
    fullscreenDiv.style.width = '100%';
    fullscreenDiv.style.height = '100%';
    fullscreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullscreenDiv.style.display = 'flex';
    fullscreenDiv.style.flexDirection = 'column';
    fullscreenDiv.style.justifyContent = 'center';
    fullscreenDiv.style.alignItems = 'center';
    fullscreenDiv.style.zIndex = '1000';
    fullscreenDiv.style.transition = 'opacity 0.5s ease';
    fullscreenDiv.style.opacity = '0';
    fullscreenDiv.style.visibility = 'hidden';

    let mediaElement;
    if (media.tagName === 'IMG') {
        mediaElement = document.createElement('img');
    } else if (media.tagName === 'VIDEO') {
        mediaElement = document.createElement('video');
        mediaElement.controls = true;
    }
    mediaElement.src = media.src;
    mediaElement.style.maxWidth = '80%';
    mediaElement.style.maxHeight = '80%';
    mediaElement.style.borderRadius = '5px';

    const caption = document.createElement('div');
    caption.innerText = media.getAttribute('alt');
    caption.style.color = '#fff';
    caption.style.marginTop = '10px';
    caption.style.fontSize = '1.5rem';
    caption.style.textAlign = 'center';

    fullscreenDiv.appendChild(mediaElement);
    fullscreenDiv.appendChild(caption);
    document.body.appendChild(fullscreenDiv);

    setTimeout(() => {
        fullscreenDiv.style.opacity = '1';
        fullscreenDiv.style.visibility = 'visible';
    }, 10);

    fullscreenDiv.onclick = function() {
        fullscreenDiv.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(fullscreenDiv);
        }, 500);
    };
}
