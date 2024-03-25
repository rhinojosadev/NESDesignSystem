class NesButton extends HTMLElement {

    connectedCallback() {

      const shadow = this.attachShadow({ mode: "open" });
      const wrapper = document.createElement("button");

      const text = this.getAttribute("label");
      wrapper.textContent = text;


      const getCustomCSS = () => {
        const type = this.getAttribute("type");
        switch(type) {
            case 'primary':
                return `
                    color: #fff;
                    background-color: #209cee;
                    box-shadow: inset -5px -5px 10px #006bb3 !important;
                `
            case 'warning': 
            return `
                color: #212529;
                background-color: #f7d51d;
                box-shadow: inset -5px -5px 10px #e59400 !important;
            `;
            default:
                '';
        }
      }  


      const style = document.createElement("style");

  
      style.textContent = `
        button {
            font-family: "Press Start 2P";
            border-image-slice: 2;
            border-image-width: 2;
            border-image-repeat: stretch;
            border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
            border-image-outset: 2;
            position: relative;
            display: inline-block;
            padding: 6px 8px;
            margin: 4px;
            text-align: center;
            vertical-align: middle;
            cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            color: #212529;
            background-color: #fff;
            box-shadow: inset -5px -5px 10px 0px #adafbc;
            ${getCustomCSS()}
        }

      `;
      
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
}
  // register component
  customElements.define('nes-button', NesButton);