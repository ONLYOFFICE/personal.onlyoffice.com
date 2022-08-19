import styled from "styled-components";
import HomeSection from "../../home-section";

const StyledCarouselSection = styled(HomeSection)`
  .carousel-item-button {
    font-size: 11px;
    letter-spacing: 0.08em;
    line-height: 15px;
  }

  .carousel-item-image {
    width: 100%;
    height: 100%;
  }

  .image-carousel {
    display: block;
    object-fit: cover;
    height: 100%;
    max-width: 100vw;

    margin: 0 auto;
    .slick-slider {
      margin: 0 auto;
      padding: 0px;
      .slick-next {
        right: calc(50% - 595px);
      }
      .slick-prev {
        left: calc(50% - 591px);
      }
      .slide {
        margin-left: -1vw;
        .carousel-item-image {
          height: 680px;
          max-width: 100vw;
          width: auto;
        }
      }
    }
  }

  .text-carousel {
    margin: 0 auto;
    padding-top: 144px;
    
    .slick-slider {
      .slick-list {
        max-width: 928px;
        margin: 0 auto;
      }
      .carousel-item-text {
        margin: 0 auto;
        font-size: 18px;
        line-height: 160%;
        padding: 24px 0 40px;
        text-align: center;
        color: #333;
      }
      .carousel-item-heading {
        font-size: 32px;
        text-align: center;
        margin: 0 auto;
        color: #333;
      }
    }
  }

  @media (max-width: 1200px) {
    .image-carousel {
      .slick-slider {
        .slide {
          margin-left: -5.5vw;
          .carousel-item-image {
            height: 65vw;
            width: auto;
            max-width: 115vw;
          }
        }
      }
    }

    .slick-arrow {
      display: none !important;
    }
  }

  @media (max-width: 1024px) {
    .image-carousel {
      .slick-slider {
        .slide {
          margin-left: -1.8vw;
          .carousel-item-image {
            height: 61vw;
            width: auto;
            max-width: 112vw;
          }
        }
      }
    }

    .text-carousel {
      .slick-slider {
        .slick-list {
          max-width: 90vw;
        }
        .carousel-item-text {
          font-size: 16px;
        }
        .carousel-item-heading {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .image-carousel {
      .slick-slider {
        .slide {
          margin-left: -6vw;
          .carousel-item-image {
            height: 60vw;
            width: auto;
            max-width: 110vw;
          }
        }
      }
    }

    .text-carousel {
      .slick-slider {
        .carousel-item-text {
          padding: 16px 0 24px;
        }
        .carousel-item-heading {
          font-size: 20px;
        }
      }
    }
  }
`;

export default StyledCarouselSection;
