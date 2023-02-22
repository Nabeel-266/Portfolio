let toggleButton = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');


toggleButton.addEventListener("click", () => {
        if(toggleButton.firstElementChild.classList.contains("bx-menu-alt-left")){
                toggleButton.firstElementChild.classList.replace("bx-menu-alt-left","bx-menu-alt-right");
        } else {
                toggleButton.firstElementChild.classList.replace("bx-menu-alt-right","bx-menu-alt-left");
        }

        sidebar.classList.toggle("show-sidebar");
})

