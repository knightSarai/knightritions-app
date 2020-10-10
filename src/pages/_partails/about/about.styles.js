import styled from 'styled-components'

export default styled.div`
    /* background: ${({theme}) => theme.light.sec}; */
    overflow: hidden;
    
    .article-text {
        position: relative;
        min-width: 30%;
        height: 240px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({theme}) => theme.light.main};
        overflow: hidden;
        color: #ffff;
        .article-bg {
            width: 100%;
            height: 100%;
            background: url('img/about.jpg') no-repeat center center/cover;
        }

        .text-content{
            position: absolute;
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

            hr {
                width: 25%;
                height: 2px;
                color: rgba(0, 0, 0, 0);
                background: rgba(0, 0, 0, 0.3);
            }
            p {
                font-size: 1.25rem;
                line-height: 1.3;
                padding:0.5rem 1rem;
            }
        }
       
    }
    

`;