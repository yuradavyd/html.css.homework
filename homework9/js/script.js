var splide = new Splide( '.splide', {
    perPage: 3,
    breakpoints: {
        768: {
            perPage: 1,
        },
    }
})

splide.mount();