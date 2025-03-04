
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

let changedEmail = false;



document.addEventListener("DOMContentLoaded", function () {
    const centralContent = document.querySelector(".central_content");
    const mailAreas = document.querySelectorAll("#mail_area");

    let changedEmail = false;

    // Detect if the user is on a mobile device
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (mailAreas.length > 0) {

        if (isMobile) {
            document.body.addEventListener("touchstart", revealEmails, { passive: true });
        }


        if (centralContent) {
            centralContent.addEventListener("mouseover", function () {
                if (!changedEmail) {
                    revealEmails();
                }
            });
        }
    }


});



function revealEmails() {
    if (!changedEmail) {
    changedEmail = true;
    const mailAreas = document.querySelectorAll("#mail_area");
     mailAreas.forEach(mailArea => {
            const originalEmail = mailArea.href.replace(/x/g, '').replace('mailto:', '');

            mailArea.textContent = originalEmail;
            mailArea.href = `mailto:${originalEmail}`;
        });
 }

}


