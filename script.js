document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const queryType = document.querySelector('input[name="query"]:checked');
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;

    if (!firstName || !lastName || !email || !queryType || !message || !consent) {
        alert('Please fill in all the required fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    document.getElementById('success-message').style.display = 'block';

    document.getElementById('contactForm').reset();

    setTimeout(function() {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}