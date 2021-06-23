const MenuToggle = (_ => {
    //cache the DOM
    const $menuIcon = document.querySelector('.header__menu-icon');
    const $closeIcon = document.querySelector('.header__close');
    const $mobileMenu = document.querySelector('.header__menu-mobile');

    const init = _ => {
        listeners()
    }

    const listeners = _ => {
        $menuIcon.addEventListener("click", _ => {
            $mobileMenu.style.display = 'flex';
        })
        $closeIcon.addEventListener("click", _ => {
            $mobileMenu.style.display = 'none';
        })
    }

    return {
        init
    }
})();

export default MenuToggle;