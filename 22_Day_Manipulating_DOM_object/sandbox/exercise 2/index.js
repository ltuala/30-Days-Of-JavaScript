const countriesWrapper = document.querySelector('.countries-wrapper')

const totalCountries = document.querySelector('#total-countries')

totalCountries.textContent = `Total Number of Countries: ${countries.length}`

countries.forEach(country => {
    const div = document.createElement('div')

    div.textContent = country
    div.style.width = "70px"
    div.style.height = "70px"
    div.style.fontSize = "12px"
    div.style.margin = "5px"
    div.style.border = "thin solid black"
    countriesWrapper.appendChild(div)
});