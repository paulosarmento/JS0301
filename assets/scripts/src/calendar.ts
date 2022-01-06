import locale from "date-fns/locale/pt-BR";

import {
  addDays,
  addMonths,
  differenceInSeconds,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
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
    calendar.innerHTML = "";

    // console.log({ inicioMes });

    let diaCorrente = startOfWeek(inicioMes);
    const ultimoCalendario = endOfWeek(endOfMonth(inicioMes));
    // console.log("inicio", format(diaCorrente, "yyyy-MM-dd"));
    // console.log("fim", format(ultimoCalendario, "yyyy-MM-dd"));

    while (differenceInSeconds(ultimoCalendario, diaCorrente) > 0) {
      const li = document.createElement("li");

      li.innerText = format(diaCorrente, "d");

      li.dataset.schedule = format(diaCorrente, "yyyy-MM-dd");

      if (format(diaCorrente, "yyyyMM") < format(inicioMes, "yyyyMM")) {
        li.classList.add("month-prev");
      }

      if (format(diaCorrente, "yyyyMM") > format(inicioMes, "yyyyMM")) {
        li.classList.add("month-next");
      }

      if (format(diaCorrente, "yyyyMMdd") === format(hoje, "yyyyMMdd")) {
        li.classList.add("active");
      }

      li.addEventListener("click", (e: Event) => {
        const selected = calendar.querySelector(".selected");

        if (selected) {
          selected.classList.remove("selected");
        }

        const myLi = e.target as HTMLLIElement;

        myLi.classList.add("selected");

        const scheduleAt = document.querySelector(
          "[name=schedule_at]"
        ) as HTMLInputElement;

        scheduleAt.value = myLi.dataset.schedule ?? "";
      });

      calendar.appendChild(li);

      diaCorrente = addDays(diaCorrente, 1);
    }
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
