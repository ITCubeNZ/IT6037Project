const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const searchTerm = form.searchTerm.value;
    location.assign(`/search/${searchTerm}`)
});
