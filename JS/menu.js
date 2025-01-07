(function () {

    const openButton = document.querySelector('.nav_movil');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav_link--show');
        // alert('Clic sobre Menu Hamburguesa');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });

    menu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });

})();