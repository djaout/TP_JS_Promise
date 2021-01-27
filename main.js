
// Get music by Author, by title
/**
 *
 * @param {*} term
 */
async function getMusic() {
    let term = document.querySelector('#searchInput').value;
    let urlAdd = '';
    if (term.length > 0) {
        urlAdd = '?term=' + term
    }
    else {
        afficherErreur('Veuillez renseigner un artiste...');
        return
    }
    const musicFromItunes = await fetch('https://itunes.apple.com/search' + urlAdd, { method: 'GET' });
    const rep = await musicFromItunes.json();
    if (rep.resultCount == 0) {
        afficherErreur('No contents...')
    }
    else {
        afficherResultat(rep.results)
    }
    console.log(rep);
    //return rep;
}

function afficherErreur(msg) {
    let erreurElement = document.getElementById('erreur');
    erreurElement.innerHTML = msg;
}

function afficherResultat(res) {
    let result = document.getElementById('contains');
    res.forEach(data => {
        let div = document.createElement('div')
        div.classList.add('item')

        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = 'play';
        button.addEventListener('click', getAudio)


        let input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("value", data.previewUrl);
        input.classList.add('inputAudio')

        let titreMusic = document.createElement('p');
        titreMusic.innerHTML = data.trackName

        div.appendChild(input)
        div.appendChild(titreMusic)
        div.appendChild(button)
        result.appendChild(div)
    });
}

function getAudio(e) {
    //console.log('Me gêne pas...')
    let event = e.target;
    let url = event.parentElement.getElementsByClassName("inputAudio")[0].value
    console.log(url)
    let audio = document.getElementById('divAudio');
    //on initialise l audio 
    audio.innerHTML = '';
    let playAudio = document.createElement('audio')
    playAudio.setAttribute('src', url)
    playAudio.setAttribute('controls',null)
    audio.appendChild(playAudio)
}
