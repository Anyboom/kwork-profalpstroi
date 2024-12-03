export const twentytwenty = () => {
    let slides = 8;

    for (const item of [...Array(slides).keys()]) {
        $(`#changes_${item + 1}`).twentytwenty({
            before_label: "До",
            after_label: "После",
            no_overlay: true,
        });
    }
}
