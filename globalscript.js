
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

let changedEmail = false;

document.addEventListener("DOMContentLoaded", function () {
    // Select the div with class 'central_content'
    const centralContent = document.querySelector(".central_content");

    // Select the anchor tag
    const mailAreas = document.querySelectorAll("#mail_area");

    if (centralContent && mailAreas) {
        centralContent.addEventListener("mouseover", function () {
            if (!changedEmail) {
                mailAreas.forEach(mailArea => {
                    mailArea.textContent = mailArea.href.replace(/x/g, '').replace('mailto:', '');
                    mailArea.href = mailArea.href.replace(/x/g, '');
                });
                changedEmail = true;
            }
        });
    }
});


