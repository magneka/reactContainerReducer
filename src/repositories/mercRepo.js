import loki from "lokijs";

export const mercRepo = () => {
  var db = new loki("urlriken");
  var items = db.addCollection("merc");
  items.insert({
    produkt: "T-Skjorte",
    farge: "Hvit",
    størrelse: "XL",
    lager: 123
  });
  items.insert({
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "XL",
    lager: 97
  });
  items.insert({
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "L",
    lager: 82
  });
  items.insert({
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "M",
    lager: 0
  });
  items.insert({
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "S",
    lager: 73
  });
  items.insert({
    produkt: "T-Skjorte",
    farge: "Mauve",
    størrelse: "XS",
    lager: 20
  });
  items.insert({ produkt: "Krus", farge: "Hvit", størrelse: "", lager: 120 });
  items.insert({ produkt: "Krus", farge: "Lilla", størrelse: "", lager: 12 });
  items.insert({ produkt: "Krus", farge: "Sort", størrelse: "", lager: 8 });
  items.insert({ produkt: "Kopp", farge: "Sort", størrelse: "", lager: 2100 });

  console.log("Merc initialized");

  const getAll = () => {
    return items.data;
  };

  const insert = (newJson) => {
    items.insert(newJson);
  };

  const findProdukt = (param) => {
    return items.findOne({ produkt: param });
  };

  const update = (oldRec) => {
    items.update(oldRec);
  };

  return { getAll, insert, findProdukt, update };
};

//https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#modulepatternjavascript
