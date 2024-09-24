document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                formMessage.textContent = 'Vielen Dank! Ihre Nachricht wurde gesendet.';
                formMessage.style.color = 'green';
                form.reset();
            } else {
                throw new Error('Es gab ein Problem beim Senden Ihrer Nachricht.');
            }
        } catch (error) {
            formMessage.textContent = error.message;
            formMessage.style.color = 'red';
        }
    });
});
