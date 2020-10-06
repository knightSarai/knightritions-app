import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.bg.light};
    color: ${({ theme }) => theme.primaryLight};
    /* text-rendering: optimizeLegibility; */
    font-family: 'Roboto';
    }
  a {
    color: ${({ theme }) => theme.primary.light};
    text-decoration: none;
  }
  ul{
      list-style: none;
  }
  img{
    width: 100%;
    height: 100%;
}
.container{
    max-width: ${({ theme }) => theme.size.maxWidth};
    margin: auto;
    padding: 0 2rem;
    overflow: hidden;
}
.btn {
    display: inline-block;
    border: none;
    background: var(--dark-color);
    padding: 0.5rem 1.5rem;
    color: #fff;
}

.btn-light { background:${({ theme }) => theme.light.main}}
.btn-primary { background: ${({ theme }) => theme.primary.main}}
.btn-secondary { background: ${({ theme }) => theme.secondary.main}}
.btn-block {
    display: block;
    width: 100%;
    text-align: center;
}
.btn:hover{opacity: 0.9;}
.py-1 {padding: 1.5rem 0}
.py-2 {padding: 2.5rem 0}
.py-3 {padding: 3.5rem 0}
.p-1 {padding: 1.5rem}
.p-2 {padding: 2.5rem}
.p-3 {padding: 3.5rem}


`;