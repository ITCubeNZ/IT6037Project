console.log('js is working')
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = form.id.value;
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

    const res = await fetch('/modify', {
        method: 'POST',
        body: JSON.stringify({
            id,
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
        headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json();
    console.log(data);
    window.location.assign('/search')
})