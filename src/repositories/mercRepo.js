import loki from "lokijs";

export const mercRepo = () => {
  var db = new loki("urlriken");
  var items = db.addCollection("merc");
  items.insert({
    produktId: "1",
    produkt: "T-Skjorte",
    farge: "Hvit",
    størrelse: "XL",
    lager: 123
  });
  items.insert({
    produktId: "2",
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "XL",
    lager: 97
  });
  items.insert({
    produktId: "3",
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "L",
    lager: 82
  });
  items.insert({
    produktId: "4",
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "M",
    lager: 0
  });
  items.insert({
    produktId: "5",
    produkt: "T-Skjorte",
    farge: "Lilla",
    størrelse: "S",
    lager: 73
  });
  items.insert({
    produktId: "6",
    produkt: "T-Skjorte",
    farge: "Mauve",
    størrelse: "XS",
    lager: 20
  });
  items.insert({
    produktId: "10",
    produkt: "Krus",
    farge: "Hvit",
    størrelse: "",
    lager: 120
  });
  items.insert({
    produktId: "11",
    produkt: "Krus",
    farge: "Lilla",
    størrelse: "",
    lager: 12
  });
  items.insert({
    produktId: "12",
    produkt: "Krus",
    farge: "Sort",
    størrelse: "",
    lager: 8
  });
  items.insert({
    produktId: "23",
    produkt: "Kopp",
    farge: "Sort",
    størrelse: "",
    lager: 2100
  });

  console.log("Merc initialized");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getAll = async () => {
    await sleep(2000);
    return items.data;
  };

  const insert = (newJson) => {
    items.insert(newJson);
  };

  const findProdukt = (param) => {
    return items.findOne({ produktId: param });
  };

  const update = (oldRec) => {
    items.update(oldRec);
  };

  return { getAll, insert, findProdukt, update };
};

//https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#modulepatternjavascript
