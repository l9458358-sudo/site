document.getElementById('enroll-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('success-message').classList.remove('d-none');
    this.reset();
});
