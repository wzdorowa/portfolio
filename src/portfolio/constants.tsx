import landingPage from "./landing-page.jpeg";
import jQuerySlider from "./jQuery-slider.png";
import { JQUERY_SLIDER, JQUERY_SLIDER_DOCS, TOXIN } from "../urls";

export const previews = [
  {
    title: "Верстка страниц поиска номеров в отеле",
    imgScr: landingPage.src,
    descriptionTitle: "Технологии: SCSS, Pug, JavaScript, Parcel",
    descriptionList: [
      "Компонентная адаптивная вёрстка с использованием препроцессоров Pug и SCSS по методологии БЭМ,",
      "Поиск и подключение JavaScript-библиотек и jQuery-плагинов,",
      "Осуществление сборки c помощью Parcel.",
    ],
    descriptionLinks: [
      { href: TOXIN, text: "Демонстрация проекта на GitHub Pages" },
    ],
  },
  {
    title: "Разработка JQuery-слайдера",
    imgScr: jQuerySlider.src,
    descriptionTitle: "Технологии: JavaScript, TypeScript, JQuery, Jest",
    descriptionList: [
      "Создание проекта с использованием паттернов MVC и Observer и Facade,",
      "Разделение конфигурирования и бизнес-логики,",
      "Написание документации (описание заложенной архитектуры, визуализация её через UML-диаграммы),",
      "Написание unit-тестов.",
    ],
    descriptionLinks: [
      { href: JQUERY_SLIDER, text: "Демонстрация проекта на GitHub Pages" },
      { href: JQUERY_SLIDER_DOCS, text: "Документация по проекту" },
    ],
  },
];
