"use stric"

removeText.onclick = function deleteText() {
    text.remove();
}

removeBtn.onclick = function deleteButton() {
    removeBtn.classList.add('hide-btn');
}

menuArea.onclick = function hideMenu() {
    if ( menu.classList.contains('menu-on')) {
        menu.classList.add('menu-off');
        menu.classList.remove('menu-on');

    } else {
        menu.classList.remove('menu-off');
        menu.classList.add('menu-on');
    }
}