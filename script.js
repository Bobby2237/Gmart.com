
function updateLogo() {
    const logoImage = document.getElementById('logo-image');
    if (!logoImage) return; // Exit if logo element is not found
    
    const now = new Date();
    const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const hours = estTime.getHours();
    
    if (hours >= 18 && hours <= 22) { // 6 PM to 10 PM EST
        logoImage.src = '2.png';
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        const businessHours = document.querySelector('.business-hours h3');
        if (businessHours) {
            businessHours.style.color = '#ffffff';
        }
    } else if (hours >= 0 && hours <= 17) { // 12 AM to 5 PM EST
        logoImage.src = '1.png';
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        const businessHours = document.querySelector('.business-hours h3');
        if (businessHours) {
            businessHours.style.color = '#ffffff';
        }
    }
}

// Update logo immediately and then every minute
updateLogo();
setInterval(updateLogo, 60000);
