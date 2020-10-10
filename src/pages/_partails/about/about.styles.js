import styled from 'styled-components'

export default styled.div`
    /* background: ${({theme}) => theme.light.sec}; */
    overflow: hidden;
    
    .article {
        height: 350px;
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
            background: ${({theme})=> theme.primary.main};
            opacity: 0.9;

            h1 {
                color: ${({theme}) => theme.secondary.main};
                line-height: 1.5;
            }
        
            p {
                font-size: 25px;
                font-weight: 400;
                line-height: 1.3;
                padding:0.5rem 1rem;
                text-align: left;

                span {
                    color: ${({theme}) => theme.secondary.main};
                }
            }
        }
       
    }
    

`;