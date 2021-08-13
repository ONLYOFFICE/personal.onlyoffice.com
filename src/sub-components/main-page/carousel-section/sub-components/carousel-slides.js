const firstItemsCarousel = {
    slides: [
        {
            id: 0,
            slide: [
                { type: "heading", headingText: "DocSlideSecitonCarouselHeading" },
                { type: "text", text: "DocSlideSecitonCarouselText" },
            ]
        },
        {
            id: 1,
            slide: [
                { type: "heading", headingText: "TabSlideSecitonCarouselHeading" },
                { type: "text", text: "TabSlideSecitonCarouselText" },
            ]
        },
        {
            id: 2,
            slide: [
                { type: "heading", headingText: "PresSlideSecitonCarouselHeading" },
                { type: "text", text: "PresSlideSecitonCarouselText" },
            ]
        },
        {
            id: 3,
            slide: [
                { type: "heading", headingText: "CollaborationSlideSecitonCarouselHeading" },
                { type: "text", text: "CollaborationSlideSecitonCarouselText" },
            ]
        },
    ],
    get: function (id) {
        const isSlides = (s) => s.id === id;
        return this.slides.find(isSlides);
    },
    getAll: function () {
        return this.slides;
    },
}

const secondItemsCarousel = {
    slides: [
        {
            id: 0,
            slide: [
                {
                    type: "image", 
                    src: "doc.react.svg", 
                    defaultSrc: "doc.react.svg", 
                    alt: "doc"
                },
            ]
        },
        {
            id: 1,
            slide: [
                {
                    type: "image", 
                    src: "tab.react.svg", 
                    defaultSrc: "tab.react.svg", 
                    alt: "tab"
                },
            ]
        },
        {
            id: 2,
            slide: [
                {
                    type: "image", 
                    src: "pres.react.svg", 
                    defaultSrc: "pres.react.svg", 
                    alt: "pres"
                },
            ]
        },
        {
            id: 3,
            slide: [
                {
                    type: "image", 
                    src: "collaboration.react.svg", 
                    defaultSrc: "collaboration.react.svg", 
                    alt: "collaboration"
                },
            ]
        },
    ],
    get: function (id) {
        const isSlides = (s) => s.id === id;
        return this.slides.find(isSlides);
    },
    getAll: function () {
        return this.slides;
    },
}


export { firstItemsCarousel, secondItemsCarousel };