import React, { Component } from "react";

import Carousel from "../../../../components/carousel";
import Section from "../../home-section";
import StyledCarouselSection from "./styled-carousel-section";
import { CarouselImage, CarouselText } from "./sub-components/carousel-item";

class CarouselSection extends Component {

constructor(props) {
    super(props);
    this.state = {
        nav1: null,
        nav2: null
    };
}
    
componentDidMount() {
    this.setState({
        nav1: this.slider1,
        nav2: this.slider2
    });
}

settingsTextSlider = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

settingsImageSlider = {
    fade: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[ 
        {
          breakpoint: 1210,
          settings: {
                arrows: false 
            }
        }
    ],
};

CarouselTextTranslate = CarouselText.map((it) => {
    return {
        id: it.id,
        Heading: this.props.t(it.Heading), 
        Text: this.props.t(it.Text)
    };
});


    render () {
        return (
            <Section
                background="#fff"
                padding="112px 0 48px"
                tabletPadding="104px 0"
                mobileLPadding="102px 0 60px"
                {...this.props}
            >
                <StyledCarouselSection>
                    <Carousel                            
                        arrows={false} 
                        arrayImage={false}
                        isTextCarousel={true}
                        isImageCarousel={false}
                        settingsSlider={this.settingsTextSlider}
                        itemCarousel={this.CarouselTextTranslate}
                        asNavForCarousel={this.state.nav2}
                        refCarousel={slider => (this.slider1 = slider)}
                        className="carousel-text"
                    />
                    <Carousel 
                        arrows={true} 
                        itemCarousel={CarouselImage}
                        settingsSlider={this.settingsImageSlider}
                        asNavForCarousel={this.state.nav1}
                        refCarousel={slider => (this.slider2 = slider)}
                        className="carousel-image"
                    />
                </StyledCarouselSection>
            </Section>
        );
    }
}

export default CarouselSection;

