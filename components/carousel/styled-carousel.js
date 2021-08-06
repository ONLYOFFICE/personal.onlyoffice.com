import { styled } from "linaria/react";

const StyledCarousel = styled.div`
/**
https://github.com/ONLYOFFICE/personal.onlyoffice.com/tree/feature/info-panel/components
https://react-slick.neostack.com/docs/example/responsive/
https://personal.onlyoffice.com/ru/ */
max-width: 1200px;
margin: 0 auto;

.slick-slider{
    max-width: 1182px;
    .text-slider{
        display: grid;
        max-width: 948px;
        margin: 0 auto;
        h2 {
            text-align: center !important;
        }
        p {
            padding: 45px 0 75px;
        }
    }
}


@media(max-width: 1200px) {

}

@media(max-width: 1024px) {

}

@media(max-width: 576px) {

}
`;

export default StyledCarousel;
