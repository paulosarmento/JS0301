import { format } from "date-fns";
import locale from "date-fns/locale/pt-BR";

const timeOptions = document.querySelector("#time-options");

if (timeOptions) {
  const title = timeOptions.querySelector("h3") as HTMLHeadElement;
  const render = () => {
    title.innerText = format(new Date(), `EEEE','  dd 'de' MMMM 'de' yyyy`, {
      locale,
    });
  };
  render();
}
