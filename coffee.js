// script.js

function enableButtons() {
    const buttons = document.querySelectorAll('.coffee-card button');

    buttons.forEach(button => {
        button.disabled = false; 
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
}

document.addEventListener('DOMContentLoaded', enableButtons);