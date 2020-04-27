const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(json => renderTrainers(json));


function renderTrainers(json) {
  const main = document.querySelector('main')

  json.forEach(trainer => {
    let trainerCard = document.createElement('div')
    trainerCard.setAttribute('class', 'card')

    trainerCard.dataset.id = trainer.id
    trainerCard.innerHTML = `<p>${trainer.name}</p>`
    main.appendChild(trainerCard)
  })

}
