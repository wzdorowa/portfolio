import { APOSTRO, CERT, METALAMP, ONLY } from "./urls";

export const education = [
  {
    name: "2012",
    title: "МАОУ СОШ № 27 г. Томск",
    description: "полное среднее (11 классов)",
  },
  {
    name: "2020",
    title: "ВИЭСУ (ГМУ) г. Воронеж",
    description: "неоконченное высшее (3 курса)",
  },
  {
    name: "2022",
    title: "MetaLamp (Frontend) г. Томск",
    description: (
      <span>
        сертификат{" "}
        <a target="_blank" href={CERT}>
          № F-0902
        </a>
      </span>
    ),
  },
];

export const experience = [
  {
    name: "2013 - 2018",
    title: "Менеджер по работе с клиентами и документами (г. Воронеж)",
    description: "АО “СОГАЗ”, АО “СОГАЗ”, Банк Восточный, ООО “ПГС Проект”",
  },
  {
    name: "2021 - настоящее время",
    title: "Frontend developer (удаленно)",
    description: (
      <span>
        <a target="_blank" href={METALAMP}>
          MetaLamp (стажировка)
        </a>
        ,{" "}
        <a target="_blank" href={ONLY}>
          Only
        </a>
        ,{" "}
        <a target="_blank" href={APOSTRO}>
          Apostro
        </a>
      </span>
    ),
  },
];

export const hobby = [
  {
    name: "Изучаю графический дизайн ",
    description:
      "Прохожу обучение в Школе дизайнеров Бюро Горбунова. Очень нравится направление по визуализации данных",
  },
  {
    name: "Интересуюсь нейросетями",
    description: "Пробую работать с разными графическими нейросетями",
  },
  {
    name: "Мечтаю построить дом",
    description:
      "Рисую планировки дома мечты с продумыванием эргономики интерьера и привязкой к участку",
  },
  {
    name: "Музыка",
    description: "В основном слушаю всякий тяжеляк и электронную музыку",
  },
];
