function loadPage(page) {
    fetch('templates/' + page + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            history.pushState({}, '', page);
        })
        .catch(error => console.error('Error:', error));
}

// Initial load
const initialPage = window.location.pathname.split('/').pop().split('.')[0];
loadPage(initialPage);

// Handle clicks on the link
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage(this.getAttribute('href'));
});
