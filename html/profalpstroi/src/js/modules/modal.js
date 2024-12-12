export const modal = () => {
    $('.modal').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: false,
    });
    $('.modal-image').magnificPopup({
        type: 'image',
    });
}
