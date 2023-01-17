import "@polymer/polymer/lib/elements/custom-style.js";

//不可修改的样式文件
const globalStyle = document.createElement("custom-style");

globalStyle.innerHTML = `
    <style is="global-style">
    :root {
      font-size: 10px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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

type ConfigOptions = {
  primary?: string, //主色调 
  text?: string,  //文本颜色
  matrixText?: string,  //按钮等深色组件的文本颜色
  style?: "shadow" | "none"  //全局风格，圆角，阴影等
}
const defaultOptions: ConfigOptions = {
  primary: '#009933',
  text: '#625b47',
  matrixText: '#fff',
  style: "none"
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