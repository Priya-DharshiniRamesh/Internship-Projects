const scriptURL = 'https://script.google.com/macros/s/AKfycbydzJqdC3quNq4V-pZynH5r21vtCUIxm2s4L-xFnQZ8Vj5jauXFoaD4rbvTC2ak6w4XLw/exec';

const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(response => {
        console.log('Success!', response);

        if (response.result === 'success') {
            msg.innerHTML = 'Message sent successfully!';
            form.reset();

            setTimeout(() => {
                msg.innerHTML = '';
            }, 5000);
        } else {
            msg.innerHTML = 'Something went wrong. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        msg.innerHTML = 'Something went wrong. Please try again.';
    });
});

function openTab(tabName) {
    const tabContents = document.getElementsByClassName("about-tab-content");
    const tabs = document.getElementsByClassName("about-tab");

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");

    event.currentTarget.classList.add("active");
}

/* ---------- Mobile menu (slides in from the right) ---------- */
const navLinks = document.getElementById('navLinks');

document.getElementById('menuOpen').addEventListener('click', () => {
    navLinks.classList.add('open');
});

document.getElementById('menuClose').addEventListener('click', () => {
    navLinks.classList.remove('open');
});

// close the menu after tapping a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});