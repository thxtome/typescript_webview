import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import NanumSquareBEot from '@src/app/asset/fonts/NanumSquareB.eot'
import NanumSquareBTtf from '@src/app/asset/fonts/NanumSquareB.ttf'
import NanumSquareBWoff from '@src/app/asset/fonts/NanumSquareB.woff'

import NanumSquareEBEot from '@src/app/asset/fonts/NanumSquareEB.eot'
import NanumSquareEBTtf from '@src/app/asset/fonts/NanumSquareEB.ttf'
import NanumSquareEBWoff from '@src/app/asset/fonts/NanumSquareEB.woff'

import NanumSquareREot from '@src/app/asset/fonts/NanumSquareR.eot'
import NanumSquareRTtf from '@src/app/asset/fonts/NanumSquareR.ttf'
import NanumSquareRWoff from '@src/app/asset/fonts/NanumSquareR.woff'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    overflow:hidden;
  }
  #root {
    width:100vw;
    height:100vh;
    padding: 0 6.4vw;
    box-sizing:border-box;
  }
  @font-face {
    font-family: "NanumSquareEB";
    src: url("${NanumSquareEBWoff}") format("woff"), url("${NanumSquareEBTtf}") format("truetype");
    letter-spacing: -0.22px;
  }
  
  @font-face {
    font-family: "NanumSquareB";
    src: url("${NanumSquareBWoff}") format("woff"), url("${NanumSquareBTtf}") format("truetype");
    letter-spacing: -0.22px;
  }
  
  @font-face {
    font-family: "NanumSquareR";
    src: url("${NanumSquareRWoff}") format("woff"), url("${NanumSquareRTtf}") format("truetype");
    letter-spacing: -0.25px;
  }  
 
  .stack-exit {
    position: fixed;
    transform: translateX(0px);
  }
  .stack-exit-active {
    position: fixed;
    transform: translateX(275px);
    transition: 300ms;
  }  
`

export default GlobalStyle
