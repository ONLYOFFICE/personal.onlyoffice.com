const textCarouselSettings = {
  fade: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const imageCarouselSettings = {
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
        arrows: false,
      },
    },
  ],
};

export { textCarouselSettings, imageCarouselSettings };
