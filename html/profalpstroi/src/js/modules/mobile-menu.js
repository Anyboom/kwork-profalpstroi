export const mobileMenu = () => {
    $(".header__close").click(() => {
        $(".header__mobile-nav").addClass("hidden");
    });

    $(".header__mobile-menu-link").click(() => {
        $(".header__mobile-nav").removeClass("hidden");
    });
}
