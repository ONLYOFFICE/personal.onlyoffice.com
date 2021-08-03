import { styled } from "linaria/react";
import { device } from "../../../../components/utils/devices";

const StyledReview = styled.div`
display: flex;
position: relative;
margin: 0 auto;
flex-direction: column;
align-items: center;
/*
.review-panel-block{
    position: relative;
    width: 100%;
    height: 596px;
    .review_block_1{
        position: absolute;
        left: 0px;
        top: 56px;
    }
    .review_block_2{
        position: absolute;
    left: 0px;
    top: 361px;
    }
    .review_block_3{
        position: absolute;
    left: 0px;
    top: 196px;
    }
    .review_block_4{
        position: absolute;
    left: 752px;
    top: 271px;
    }
    .review_block_5{
        position: absolute;
    left: 376px;
    top: 56px;
    }
    .review_block_6{
        position: absolute;
    left: 376px;
    top: 436px;
    }
    .review_block_7{
        position: absolute;
    left: 376px;
    top: 246px;
    }
    .review_block_8{
        position: absolute;
    left: 752px;
    top: 56px;
    }
}*/
.review-panel-block{
    padding: 25px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}
@media(max-width: 1024px){
    .review-panel-block{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@media(${device.tablet}){
    
}

@media(max-width: 578px){
    .review-panel-block{
        display: grid;
        grid-template-columns: 1fr;
    }
}
`;

export default StyledReview;