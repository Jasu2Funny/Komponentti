const opiskelija = {
  nimi: "Jabari",
  ika: 25,
    kurssi: "Web koodaus"
};

console.log(opiskelija);
console.log("-------------------------------------------------");

const auto = {
  merkki: "BMW",
  malli: "M3 G80",
  vuosimalli: "2023"
};

const auto2 = {
  merkki: "Audi",
  malli: "RS5",
  vuosimalli: "2022"
};

console.log(auto);
console.log(auto2);
console.log("-------------------------------------------------");

const kirjat = [
  {
    nimi: "Tuntematon sotilas",
    kirjailija: "Väinö Linna",
    vuosi: 1954
  },
  {
    nimi: "Sinuhe egyptiläinen",
    kirjailija: "Mika Waltari",
    vuosi: 1945
  },
  {
    nimi: "Harry Potter ja viisasten kivi",
    kirjailija: "J. K. Rowling",
    vuosi: 1997
  }
];

kirjat.forEach(kirjat => {
  console.log(kirjat);
});
console.log("-------------------------------------------------");