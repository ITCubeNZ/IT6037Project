const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const category = form.category.value;
    const type = form.type.value;
    const name = form.name.value;
    const born = form.born.value;
    const died = form.died.value;
    const nationality = form.nationality.value;
    const knownFor = form.knownFor.value;
    const notableWork = form.notableWork.value;
    const about = form.about.value;
    const year = form.year.value;
    const medium = form.medium.value;
    const dimensions = form.dimensions.value;
    const location = form.location.value;
    const developer = form.developer.value;

    try {
        const res = await fetch('/add', {
            method: 'POST',
            body: JSON.stringify({
                category,
                type,
                name,
                born,
                died,
                nationality,
                knownFor,
                notableWork,
                about,
                year,
                medium,
                dimensions,
                location,
                developer
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.log(err);
    }
});