const form = document.querySelector('form');
const id = document.getElementById('idConfirmation').innerHTML;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/delete', {
        method: 'POST',
        body: JSON.stringify({
            id: id
        }),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json();
    window.location.assign('/search')
})