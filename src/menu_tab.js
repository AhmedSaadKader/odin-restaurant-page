export default function menu_load() {
    const content = document.getElementById('content')
    const mainContent = document.createElement('div')
    mainContent.setAttribute('id', 'main-content')
    console.log(mainContent)
    mainContent.classList.add('main-content-menu')

    for (let index = 0; index < 6; index++) {
        const foodItem = document.createElement('div');
        const itemImg = document.createElement('img');
        itemImg.src = '../src/fried.jpeg'
        const itemDescription = document.createElement('p')
        itemDescription.innerText= 'lorem14'
        foodItem.classList.add('menu-item')
        foodItem.appendChild(itemImg)
        foodItem.appendChild(itemDescription)
        mainContent.appendChild(foodItem)
    }

    // const foodItem1 = document.createElement('div')
    // const foodItem2 = document.createElement('div')
    // const foodItem3 = document.createElement('div')
    // const foodItem4 = document.createElement('div')
    // foodItem.classList.add('menu-item')
    // foodItem.innerText = "hi"
    // mainContent.appendChild(foodItem)

    content.appendChild(mainContent)
}