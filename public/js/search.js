const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const searchTerm = form.searchTerm.value;

    try {
        const res = await fetch('/search', {
            method: 'POST',
            body: JSON.stringify( {searchTerm} ),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await res.json();
    } catch (err) {
        console.log(err);
    }
});
