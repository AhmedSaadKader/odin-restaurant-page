export default function page_load() {
    const content = document.getElementById('content')
    const mainContent = document.createElement('div')
    mainContent.setAttribute('id', 'main-content')
    mainContent.classList.add('main-content-home')

    const heading = document.createElement('h1')
    heading.innerText = 'Best Restaurant in the World'
    mainContent.appendChild(heading)

    const restaurantImage = document.createElement('img')
    restaurantImage.src = '../src/rest_table.jpeg'
    mainContent.appendChild(restaurantImage)

    const restaurantDescription = document.createElement('p')
    restaurantDescription.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil rerum neque ab inventore minima.'
    mainContent.appendChild(restaurantDescription)

    content.appendChild(mainContent)
}