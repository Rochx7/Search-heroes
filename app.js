const time = '1623966721'

const pubKey = 'f91e7292febd9cc09579ea5062914309'
const privateKey = '390d2609a31640e748a2a72f3c7f822448472aa0'

const hash = '49c988d750ad9739f26da9d5e3e43e1d';




function chamaHeroi() {
    let nomeDoHeroi = document.querySelector('.nomeDoHeroi').value

    fetch(`https://gateway.marvel.com/v1/public/characters?name=${nomeDoHeroi}&ts=${time}&apikey=${pubKey}&hash=${hash}`)
        .then((response) => {
            return response.json()
        }).then((jsonParsed) => {
            // const divHero = document.querySelector('#herois')

            // jsonParsed.data.results.forEach(element => {
            //     const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
            //     const nameHero = element.name

            //     createDivHero(srcImage, nameHero, divHero)
            // })

            console.log(jsonParsed)

        })

    // function createDivHero(srcImage, nameHero, divToAppend) {
    //     const divPai = document.createElement('div')
    //     const divFilho = document.createElement('div')
    //     const textName = document.createElement('text')
    //     const img = document.createElement('img')

    //     textName.textContent = nameHero
    //     img.src = srcImage

    //     divFilho.appendChild(img)
    //     divFilho.appendChild(textName)
    //     divPai.appendChild(divFilho)
    //     divToAppend.appendChild(divPai)

    //     divPai.classList.add("personagem")

    // }

}

