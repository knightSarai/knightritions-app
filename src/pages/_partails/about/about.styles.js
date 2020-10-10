import styled from 'styled-components'

export default styled.div`
    overflow: hidden;
    
    .article {
        height: 245px;
        display: flex;
        border: 1px solid ${({theme}) => theme.light.main};
        overflow: hidden;
        color: #ffff;
        .article-img {
            width: 30%;
            height: 100%;
            background: url('img/about.jpg') no-repeat center center/cover;
        }

        .text-content{
            width: 70%;
            height:100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: ${({theme})=> theme.secondary.main};
        
            p {
                font-size: 22px;
                font-weight: 300;
                line-height: 1.2;
                padding:0.2rem 1rem;
                text-align: left;

                span {
                    color: ${({theme}) => theme.primary.main};
                }
            }
        }
       
    }
    

`;