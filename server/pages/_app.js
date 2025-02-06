"use strict";(()=>{var e={};e.id=636,e.ids=[636],e.modules={3015:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{z:()=>n});var o=r(8455),i=e([o]);o=(i.then?(await i)():i)[0];let n=(0,o.css)`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Fix mobile Safari increase font-size on landscape mode */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
    /* line-height: 0; */
  }

  button:disabled {
    cursor: default;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu,
  summary {
    list-style: none;
  }

  /* Removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input,
  textarea {
    -webkit-user-select: auto;
  }

  /* Revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* Minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* Preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
    box-sizing: border-box;
  }

  /* Fix the feature of 'hidden' attribute.
       display: revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* Revert for bug in Chromium browsers
       - Fix for the content editable attribute will work properly.
       - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
  :where([contenteditable]:not([contenteditable='false'])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* Apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable='true']) {
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;
    box-sizing: border-box;
  }

  /* Remove details summary webkit styles */
  ::-webkit-details-marker {
    display: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox  */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  #root {
    display: flex;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
  }

  body {
    font-size: 14px;
    overflow-x: hidden;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;a()}catch(e){a(e)}})},8064:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{A:()=>s});var o=r(9732),i=r(8455),n=e([o,i]);[o,i]=n.then?(await n)():n;let s=({children:e})=>(0,o.jsx)("div",{css:(0,i.css)`
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: lightgray;
      `,children:(0,o.jsx)("div",{css:(0,i.css)`
          max-width: 768px;
          width: 100%;
          min-height: 100vh;

          padding: 0 1rem;

          display: flex;
          flex-direction: column;
          justify-content: start;

          background-color: white;
        `,children:e})});a()}catch(e){a(e)}})},7954:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>c});var o=r(9732),i=r(8064),n=r(3015),s=r(9946),l=r(8455),d=e([o,i,n,s,l]);function c({Component:e,pageProps:t}){return(0,o.jsxs)(l.ThemeProvider,{theme:s.A,children:[(0,o.jsx)(l.Global,{styles:n.z}),(0,o.jsx)(i.A,{children:(0,o.jsx)(e,{...t})})]})}[o,i,n,s,l]=d.then?(await d)():d,a()}catch(e){a(e)}})},9946:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{A:()=>c});var o=r(8455),i=e([o]);o=(i.then?(await i)():i)[0];let n={alert:"#FF3D3D",gray5:"#000000",gray4:"#333333",gray3:"#8B95A1",gray2:"#ACACAC",gray1:"#FFFFFF"},s=(0,o.keyframes)`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,l=e=>{switch(e){case"focus":return n.gray5;case"error":return n.alert;default:return n.gray2}},d=(0,o.css)`
  display: inline-block;
  background: linear-gradient(90deg, ${n.gray2} 25%, ${n.gray1} 50%, ${n.gray2} 75%);
  background-size: 200% 100%;
  animation: ${s} 1.5s infinite linear;
  border-radius: 8px;

  width: 100%;

  overflow: hidden;
`,c={colors:n,cardColors:{bc:"#F04651",shinhan:"#0046FF",kakao:"#FFE600",hyundai:"#000000",woori:"#007BC8",lotte:"#ED1C24",hana:"#009490",kb:"#6A6056"},borderCSS:(e="none")=>(0,o.css)`
  border: 1px solid ${l(e)};
  border-radius: 2px;
`,skeletonCSS:d};a()}catch(e){a(e)}})},8455:e=>{e.exports=import("@emotion/react")},9732:e=>{e.exports=import("@emotion/react/jsx-runtime")}};var t=require("../webpack-runtime.js");t.C(e);var r=t(t.s=7954);module.exports=r})();