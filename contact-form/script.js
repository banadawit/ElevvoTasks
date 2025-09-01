document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    const inputs = [fullName, email, subject, message];
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    if (isValid) {
        console.log('Form Data:', {
            fullName: fullName.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        });
        // Here you would typically send the data to a server
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields correctly.');
    }
});