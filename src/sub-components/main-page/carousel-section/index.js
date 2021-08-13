import React, { useState, useEffect, useRef } from "react";

import Carousel from "../../../../components/carousel";
import StyledCarouselSection from "./styled-carousel-section";
import { firstSettingsCarousel, secondSettingsCarousel } from "./sub-components/carousel-settings";
import { firstItemsCarousel, secondItemsCarousel } from "./sub-components/carousel-slides";

const CarouselSection = (props) => {
    const { t, language } = props;

    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, []);

    const { nav1, nav2 } = state;

    let firstPanelCarousel, secondPanelCarousel = [];

    let defaultLanguage = "en";

    let srcImage = `/screenshots/${language}/`;
    let defaultSrcImage = `/screenshots/${defaultLanguage}/`;

    const itemsCarouselTranslate = (arrayItems) => {
        return arrayItems.slides.map((item, idx) =>
            item.slide.map((it) => {
                switch (it.type) {
                    case "heading":
                        return {
                            ...it,
                            id: idx,
                            headingText: t(it.headingText),
                        };

                    case "text":
                        return {
                            ...it,
                            id: idx,
                            text: t(it.text),
                        };

                    case "image":
                        return {
                            ...it,
                            id: idx,
                            src: srcImage + it.src,
                            defaultSrc: defaultSrcImage + it.defaultSrc
                        };

                    default:
                        return { ...it };
                }
            })
        );
    }

    firstPanelCarousel = itemsCarouselTranslate(firstItemsCarousel);
    secondPanelCarousel = itemsCarouselTranslate(secondItemsCarousel);

    return (
        <StyledCarouselSection
            background="#fff"
            padding="112px 0 48px"
            tabletPadding="104px 0"
            mobileLPadding="102px 0 60px"
            maxWidth="100%"
            maxWidthLaptop="100%"
            {...props}
        >
            <Carousel
                arrows={false}
                panelCarousel={firstPanelCarousel}
                settingsCarousel={firstSettingsCarousel}
                asNavForCarousel={nav2}
                refCarousel={slider => (slider1.current = slider)}
                className="text-carousel"
            />
            <Carousel
                arrows={true}
                panelCarousel={secondPanelCarousel}
                settingsCarousel={secondSettingsCarousel}
                asNavForCarousel={nav1}
                refCarousel={slider => (slider2.current = slider)}
                className="image-carousel"
            />
        </StyledCarouselSection>
    );
}

export default CarouselSection;

