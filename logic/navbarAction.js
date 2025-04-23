document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".header__nav-item");
    const megaMenu = document.querySelector(".mega-menu");

    let isMegaMenuVisible = false;

    navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            const title = item
                .querySelector(".header__nav-title")
                .textContent.trim();

            if (title === "CATALOGS") {
                isMegaMenuVisible = !isMegaMenuVisible;

                if (isMegaMenuVisible) {
                    navItems.forEach((el) => el.classList.remove("active"));
                    item.classList.add("active");

                    megaMenu.classList.add("show");
                } else {
                    item.classList.remove("active");
                    megaMenu.classList.remove("show");
                }
            } else {
                navItems.forEach((el) => el.classList.remove("active"));
                item.classList.add("active");

                megaMenu.classList.remove("show");
                isMegaMenuVisible = false;
            }
        });
    });

    document.addEventListener("click", (e) => {
        const isClickInsideNav = e.target.closest(".header__nav-item");
        const isClickInsideMegaMenu = e.target.closest(".mega-menu");

        if (!isClickInsideNav && !isClickInsideMegaMenu) {
            megaMenu.classList.remove("show");
            isMegaMenuVisible = false;

            navItems.forEach((item) => {
                const title = item
                    .querySelector(".header__nav-title")
                    .textContent.trim();
                if (title === "CATALOGS") {
                    item.classList.remove("active");
                }
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".mega-menu__category-item");

    categories.forEach((item) => {
        item.addEventListener("click", () => {
            categories.forEach((cat) => cat.classList.remove("active"));
            item.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const actionItems = document.querySelectorAll(".header__action-item");

    actionItems.forEach((item) => {
        item.addEventListener("click", () => {
            actionItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
