function loadPage(page) {
    fetch('templates/' + page + '.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(data, 'text/html');
            const content = htmlDocument.querySelector('body').innerHTML;

            // Replace the content of the current page with the loaded content
            document.open();
            document.write(content);
            document.close();

            // Update the URL without reloading the page
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
