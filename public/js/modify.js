console.log('js is working')
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = form.addID.value;
    const category = form.addCategory.value;
    const type = form.addType.value;
    const name = form.addName.value;
    const born = form.addBorn.value;
    const died = form.addDied.value;
    const nationality = form.addNationality.value;
    const knownFor = form.addKnownFor.value;
    const notableWork = form.addNotableWork.value;
    const about = form.addAbout.value;
    const year = form.addYear.value;
    const medium = form.addMedium.value;
    const dimensions = form.addDimensions.value;
    const location = form.addLocation.value;
    const developer = form.addDeveloper.value;

    try {
        console.log(1)
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
    } catch (err) {
        console.log(err);
    }
})