import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }
  
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--primary)
  }

  :root {
    --primary: #000;
    --secondary: #15181c;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #a7a7a7;
    --outline: #2f3336;
    --retweet: #00c06B;
    --like: #e8265e;
    --twitter: #33a1f3;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6;
  }
`