import loki from "lokijs";
/*
if (typeof db !== "undefined") {
}

if (typeof items !== "undefined") {
}*/

export const lokiThunk = (() => {
  var db = new loki("test");
  var items = db.addCollection("test");

  const lokiRepo = () => {
    // Unngå deklarering av variabel mer enn en gang

    const seed = () => {
      items.insert({ name: "mjolnir", owner: "thor", maker: "dwarves" });
      items.insert({ name: "gungnir", owner: "odin", maker: "elves" });
      items.insert({ name: "tyrfing", owner: "Svafrlami", maker: "dwarves" });
      items.insert({ name: "draupnir", owner: "odin", maker: "elves" });
    };

    const getAll = () => {
      return items.data;
    };

    const insert = (newJson) => {
      items.insert(newJson);
    };

    const findByName = (param) => {
      return items.findOne({ name: param });
    };

    const update = (oldRec) => {
      items.update(oldRec);
    };

    return { seed, getAll, insert, findByName, update };
  };

  return lokiRepo;
})();

//https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#modulepatternjavascript
