// Arrays e Objetos

// 5 categorias das funções para array

// acessar elementos
const numbers = [1, 30, 40];
const companies = ["a", "b", "c"];
console.info("----------------Every------------");

console.log(numbers.every((val) => val > 10));
console.info("----------------Every------------");
console.info("----------------fill------------");
console.log(companies.fill("x", 0, 2));

console.info("----------------fill------------");

const fields = {
  name: "Glaucio",
  site: "www.hcode.com.br",
  phone: "11 2149-7360",
  "email[1]": "email@gmail.com",
  "email[2]": "email@gmail.com",
  "email[3]": "email@gmail.com",
};
// desafio transformar tudo em objeto

console.log("antes", Object.keys(fields).length);

console.log("depois", Object.keys(fields).length);

// Interação
// o próprio array
companies.forEach((el) => {
  console.log("Exibindo Item", el);
});
// imutabilidade - dados não mudam, eles evoluem, eu não altero informações.
// mudo estados.
const newCompanies = companies.map((value) => value == "b");
// map, filter, reduce
// Interação Avançada

// Modificação

// funções gerais
