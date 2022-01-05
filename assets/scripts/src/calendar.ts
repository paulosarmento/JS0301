import locale from "date-fns/locale/pt-BR";

import {
  addMonths,
  endOfMonth,
  format,
  startOfMonth,
  subMonths,
} from "date-fns";

const page = document.querySelector("#schedules-new");

if (page) {
  const hoje = new Date();
  let inicioMes = startOfMonth(hoje);
  const fimMes = endOfMonth(hoje);

  const btnHoje = page.querySelector(".btn-today") as HTMLButtonElement;
  const btnAnterior = page.querySelector(".btn-prev") as HTMLButtonElement;
  const btnProximo = page.querySelector(".btn-next") as HTMLButtonElement;

  const titulo = page.querySelector("h2") as HTMLHeadElement;
  const calendar = page.querySelector(".days") as HTMLUListElement;

  const render = () => {
    titulo.innerText = format(inicioMes, "MMMM yyyy", { locale });
  };

  btnProximo.addEventListener("click", () => {
    inicioMes = addMonths(inicioMes, 1);
    render();
  });
  btnAnterior.addEventListener("click", () => {
    inicioMes = subMonths(inicioMes, 1);
    render();
  });

  btnHoje.addEventListener("click", () => {
    inicioMes = startOfMonth(hoje);
    render();
  });

  render();
}
