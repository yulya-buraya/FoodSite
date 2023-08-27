import { getResourses } from "../services/services";
function cards() {
  class MenuCard {
    constructor(
      src,
      alt,
      title,
      description,
      price,
      parenSelector,
      ...classes
    ) {
      this.src = src;
      this.alt = alt; 
      this.title = title;
      this.description = description;
      this.parent = document.querySelector(parenSelector);
      this.price = price;
      this.classes = classes;
      this.transfer = 27;
      this.convertToUAH();
    }
    convertToUAH() {
      this.price = this.transfer * this.price;
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length == 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
                        <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.description}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
             `;
      this.parent.append(element);
    }
  }
  getResourses("http://localhost:3000/menu").then((menu) =>
    menu.forEach(({ img, altimg, title, descr, price }) =>
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render()
    )
  );



}

export default cards;
