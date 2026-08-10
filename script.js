const menuButton = document.querySelector(
    ".mobile-menu-button"
);

const mobileMenu = document.querySelector(
    ".mobile-menu"
);

const mobileLinks = document.querySelectorAll(
    ".mobile-menu a"
);


menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


mobileLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    }
);
