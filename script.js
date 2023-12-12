const ratings = document.querySelectorAll('.rating')
const button = document.querySelector('.btn')
const thankYouCard = document.querySelector('.thankYou')
const thankYouContainer = document.querySelector('.thankYouContainer')


ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
    hideAllRatings()

    rating.classList.add('active')
})
})

function hideAllRatings() {
    ratings.forEach(rating => rating.classList.remove('active'))
}

button.addEventListener('click', () => {
button.classList.add('active')
thankYouContainer.classList.add('active')
})


ratings.forEach((rating, idx) => {
    idx++
    rating.addEventListener('click', () => {
        const ratingsGiven = document.querySelector('.selected-ratings')
        
        const ratingEl = `<p>You selected ${idx} out of 5</p>`
        ratingsGiven.innerHTML = ratingEl

        thankYouCard.appendChild(ratingsGiven)
    })
})

