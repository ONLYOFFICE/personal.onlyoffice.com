const firstSettingsCarousel = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const secondSettingsCarousel = {
    fade: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        }
    ],
};

export { firstSettingsCarousel, secondSettingsCarousel }