import contact_load from "./contact_tab.js";
import page_load from "./first_load.js";
import menu_load from "./menu_tab.js";
// import contact_load from "./contact_tab.js";


const content = document.getElementById('content')
const header = document.createElement('header')

const headerLogo = document.createElement('div')
headerLogo.classList.add('logo')
headerLogo.innerHTML = "Restaurant"
header.appendChild(headerLogo)

const tabsDiv = document.createElement('div')
tabsDiv.classList.add('tab')
const homeTabButton = document.createElement('div')
homeTabButton.innerText = 'Home'
const menuTabButton = document.createElement('div')
menuTabButton.innerText = 'Menu'
const contactTabButton = document.createElement('div')
contactTabButton.innerText = 'Contact'
tabsDiv.appendChild(homeTabButton)
tabsDiv.appendChild(menuTabButton)
tabsDiv.appendChild(contactTabButton)
header.appendChild(tabsDiv)

content.appendChild(header)

page_load()
const mainContent = document.getElementById('main-content')

const removeContent = function () {
    const mainContent = document.getElementById('main-content')
    if (content.contains(mainContent)){
        content.removeChild(mainContent);
        console.log(mainContent)
    }
    console.log(content);
}

homeTabButton.addEventListener('click', () => {
    removeContent();
    page_load();
})

menuTabButton.addEventListener('click', () => {
    removeContent();
    menu_load();
})

contactTabButton.addEventListener('click', () => {
    removeContent();
    contact_load();
})