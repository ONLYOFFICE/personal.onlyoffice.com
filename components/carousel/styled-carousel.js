import styled from "styled-components";

const StyledCarousel = styled.div`
    margin: 0 auto;
    padding: 0px;

    .slick-slider {
        margin: 0px;
        padding: 0px;
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            object-fit: cover;
            width: 100%;
        }

        ${(props) => true &&
            `
            .slick-slide-div {
                background-size:cover;
                background-position:center;
                background-repeat:no-repeat;  
                background-size: contain;
                background-repeat: no-repeat;
                display: inline-block;
                float: right;
                height: 690px;
                max-width: 100vw;
                position: relative;
                outline: none;
                width: 1182px;
                margin: 0 -30px;
            }
            ` 
        }

        .text-carousel {
            display: grid;
            margin: 0 auto;
            h2 {
                text-align: center !important;
            }
            p {
                margin: 0 auto;
                padding: 24px 0 40px;
            }
        }

        ${(props) => props.arrows &&
        `.slick-arrow {
            background: none;
            border-color: transparent;
            border-radius: 50%;
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            cursor: pointer;
            font-size: 0;
            height: 56px;
            outline: none;
            position: absolute;
            top: 43%;
            -webkit-transition-duration: 0.3s;
            -o-transition-duration: 0.3s;
            transition-duration: 0.3s;
            width: 56px;
        }

        .slick-arrow:before {
            border-color: #444;
            border-style: solid;
            border-width: 1px;
            border-left: none;
            border-top: none;
            border-width: 2px;
            content: '';
            display: block;
            height: 9px;
            width: 9px;
            margin: 0 auto;
        }

        .slick-arrow:hover:before {
            border-color: #ff6f3d;
        }

        .slick-arrow:hover {
            background: #fff;
            -webkit-box-shadow: 0px 20px 50px rgb(85 85 85 / 15%);
            -moz-box-shadow: 0px 20px 50px rgba(85,85,85,0.15);
            box-shadow: 0px 20px 50px rgb(85 85 85 / 15%);
        }

        .slick-prev {
            left: calc(50% - 550px);
            z-index: 1;
            transform: rotate(135deg);
        }

        .slick-next {
            right: calc(50% - 550px);
            z-index: 1;
            transform: rotate(-45deg);
        }`

    }
        
}


@media(max-width: 1210px) {
    .slick-slider {
        .slick-slide-div {
            background-size: 115vw;
            background-position-x: center;
            height: 65vw;
        }
        .text-carousel{
            display: grid;
            margin: 0 auto;
            h2 {
                text-align: center !important;
            }
            p {
                margin: 0 auto;
                padding: 24px 0 40px;
            }
        }

        .slick-arrow{
            display: none;
        }
    }
}

`;

export default StyledCarousel;
