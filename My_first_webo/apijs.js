const form = document.querySelector("#TV");
const inputt = document.querySelector('#query')
const div = document.querySelector('#results');

div.style.display = "grid"
div.style.justifycontent = "space-evenly"
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    console.dir(res)

    
    
    if (div.childElementCount > 0) {
        while (div.firstChild) {
            div.removeChild(div.firstChild)
        }
    }
    anarray(res.data)
})

const anarray = (shows) => {
    for (let item of shows) {
        const imgs = item.show.image.original
        const img = document.createElement("IMG");
        const fig = document.createElement('p');
        const link = document.createElement("a");
        img.src = imgs
        img.style.width = "350px"
        fig.innerHTML = item.show.name+ "  ";
        div.appendChild(img);
        div.appendChild(fig)
        if (item.show.officialSite){
        link.href = item.show.officialSite;
        link.target = "_blank";
        link.innerHTML = "Link to the show";
    } else {
        link.href = item.show.url;
        link.target = "_blank";
        link.innerHTML = "Link to the show"
        }
        fig.appendChild(link)
    }
}

const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', function () {
    if (div.childElementCount > 0) {
        while (div.firstChild) {
            div.removeChild(div.firstChild)
        }
    } inputt.value = ""

})