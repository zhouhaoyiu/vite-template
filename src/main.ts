import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
interface IOptions {
  el: HTMLElement;
  text: string;
}

class Func implements IOptions{
  el: HTMLElement;
  text: string;

  constructor(options: IOptions) {
    this.el = options.el;
    this.text = options.text;
    this.init();
  }

  init(): void {
    this.el.innerHTML = this.text;
  }
}

const func = new Func({ el: app, text: "Hello World!" });
console.log(func);
