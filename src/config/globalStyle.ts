import "@polymer/polymer/lib/elements/custom-style.js";

//不可修改的样式文件
const globalStyle = document.createElement("custom-style");

globalStyle.innerHTML = `
    <style is="global-style">
    :root {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
    @media (min-width: 1366px) {
      :root {
        font-size: 10px;
      }
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    </style>
            `;
document.head.appendChild(globalStyle);

//可自定义的样式文件
const custormStyle = document.createElement('custom-style');

type ConfigOptions = { primary?: string, text?: string, matrixText?: string }
const defaultOptions: ConfigOptions = {
  primary: '#009933',
  text: '#625b47',
  matrixText: '#fff'
}
export const configTheme = (options: ConfigOptions) => {
  options = { ...defaultOptions, ...options }
  custormStyle.innerHTML = `
    <style is="custom-style">
        html {
            --color-primary: ${options.primary};
            --color-text: #625b47;
            --color-matrix-text: #fff;
        }
    </style>
    `
}



configTheme(defaultOptions);

document.head.appendChild(custormStyle);