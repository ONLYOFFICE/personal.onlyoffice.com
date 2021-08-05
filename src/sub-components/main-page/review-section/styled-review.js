import { styled } from "linaria/react";

const StyledReview = styled.div`
display: flex;
position: relative;
margin: 0 auto;
flex-direction: column;
align-items: center;

p{
    max-width: 806px;
}

.review-panel-block{
    padding: 25px 0;
    box-sizing: border-box;
    display: flex;
    gap: 1em;

    .review-card {
        display: flex;
        flex-direction: column;
        gap: 1em; 
        .review_block_fcs{
            display: block;
        }
        .review_block_last{
            display: none;
        }
    }
}

@media(max-width: 1024px){
    .review-panel-block{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;

        .review-card {
            display: flex;
            flex-direction: column;
            gap: 1em; 
            .review_block_fcs{
                display: none;
            }
            .review_block_last{
            display: block;
            }
        }   
    }  
}

@media(max-width: 578px){
    .review-panel-block{
        display: grid;
        grid-template-columns: 1fr;
    }
}
`;

export default StyledReview;