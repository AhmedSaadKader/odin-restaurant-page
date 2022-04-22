export default function header_load() {
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
}