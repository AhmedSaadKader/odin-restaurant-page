export default function contact_load() {
    const content = document.getElementById('content')
    const mainContent = document.createElement('div')
    mainContent.setAttribute('id', 'main-content')
    mainContent.classList.add('main-content-contact')

    mainContent.innerHTML = `<div class="main-content-contact">
    <div><span>Phone: </span>023412342143</div>
    </div>`
    console.log(mainContent)

    content.appendChild(mainContent)
}