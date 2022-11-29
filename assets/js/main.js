function selectItem(event) {
    const item = event.currentTarget

    const items = document.querySelectorAll("ul li a")
    items.forEach(removeActiveClass)

    function removeActiveClass(item) {
        item.classList.remove('active')
    }

    item.classList.add("active")
}