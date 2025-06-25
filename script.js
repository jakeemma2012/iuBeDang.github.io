document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptBtn');
    const rejectBtn = document.getElementById('rejectBtn');
    const resultDiv = document.getElementById('result');
    const catImage = document.querySelector('.cat-image');
    
    let greenScale = 1;
    let redScale = 1;
    const scaleIncrement = 0.1;
    
    // When red button is clicked, make green button bigger and red button smaller
    rejectBtn.addEventListener('click', function() {
        // Make green button bigger
        greenScale += scaleIncrement;
        acceptBtn.style.transform = `scale(${greenScale})`;
        
        // Make red button smaller (but not less than 0.5)
        redScale = Math.max(0.5, redScale - scaleIncrement);
        this.style.transform = `scale(${redScale})`;
        
        // Add some fun animation to the cat
        catImage.style.animation = 'none';
        void catImage.offsetWidth; // Trigger reflow
        catImage.style.animation = 'bounce 0.5s ease';
    });
    
    // When green button is clicked, show the fullscreen heart and message
    acceptBtn.addEventListener('click', function() {
        // Create fullscreen heart overlay
        const heartOverlay = document.createElement('div');
        heartOverlay.className = 'fullscreen-heart';
        heartOverlay.innerHTML = '❤️';
        document.body.appendChild(heartOverlay);
        
        // Create and show the message with animations
        resultDiv.innerHTML = `
            <div class="message-content">
                <span class="floating">Y</span>
                <span class="floating" style="animation-delay: 0.1s">e</span>
                <span class="floating" style="animation-delay: 0.2s">e</span>
                <span class="floating" style="animation-delay: 0.3s">e</span>
                <span class="floating" style="animation-delay: 0.4s">u</span>
                <span class="floating" style="animation-delay: 0.5s">u</span>
                <span class="floating" style="animation-delay: 0.6s">u</span>
                <br>
                <span class="floating" style="animation-delay: 0.7s">b</span>
                <span class="floating" style="animation-delay: 0.8s">é</span>
                <span class="floating" style="animation-delay: 0.9s"> </span>
                <span class="floating" style="animation-delay: 1s">Đ</span>
                <span class="floating" style="animation-delay: 1.1s">ă</span>
                <span class="floating" style="animation-delay: 1.2s">n</span>
                <span class="floating" style="animation-delay: 1.3s">g</span>
                <div class="hearts">
                    <span class="heart">❤️</span>
                    <span class="heart" style="animation-delay: 0.2s">💗</span>
                    <span class="heart" style="animation-delay: 0.4s">💖</span>
                    <span class="heart" style="animation-delay: 0.6s">💝</span>
                </div>
            </div>
        `;
        
        // Make the cat dance
        catImage.style.animation = 'none';
        void catImage.offsetWidth; // Trigger reflow
        catImage.style.animation = 'float 1.5s ease-in-out infinite';
        
        // Hide buttons after accepting
        acceptBtn.style.display = 'none';
        rejectBtn.style.display = 'none';
    });
});
