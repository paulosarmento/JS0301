import { format } from "date-fns";
import locale from "date-fns/locale/pt-BR";

const timeOptions = document.querySelector("#time-options");

if (timeOptions) {
  const titulo = timeOptions.querySelector("h3") as HTMLHeadElement;
  console.log("titulo", titulo);
  const render = () => {
    titulo.innerText = format(new Date(), `EEEE','  dd 'de' MMMM 'de' yyyy`, {
      locale,
    });
  };
  render();
}
