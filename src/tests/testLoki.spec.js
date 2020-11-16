import loki from "lokijs";
var db = new loki("test");
var items = db.addCollection("items");

// Nedenfor er en link til loki grunnleggende og avansert søk
// https://techfort.github.io/LokiJS/
// https://techfort.github.io/LokiJS/tutorial-Query%20Examples.html

describe("Loki runner", () => {
  beforeEach(() => {
    // Clearall items
    items.chain().remove();
    // Add some documents to the collection
    items.insert({ name: "mjolnir", owner: "thor", maker: "dwarves" });
    items.insert({ name: "gungnir", owner: "odin", maker: "elves" });
    items.insert({ name: "tyrfing", owner: "Svafrlami", maker: "dwarves" });
    items.insert({ name: "draupnir", owner: "odin", maker: "elves" });
  });

  test("Loki add", () => {
    items.insert({ name: "magnur", owner: "karstrnur", maker: "elveheims" });
    expect(items.data.length).toEqual(5);
  });

  test("Loki find", () => {
    let tyrfing = items.findOne({ name: "tyrfing" });
    expect(tyrfing.owner).toEqual("Svafrlami");
  });

  test("Loki update", () => {
    let tyrfing = items.findOne({ name: "tyrfing" });
    tyrfing.owner = "arngrim";
    items.update(tyrfing);
    let tyrfing2 = items.findOne({ name: "tyrfing" });

    expect(tyrfing2.owner).toEqual("arngrim");
  });

  test("Loki delete", () => {
    items.chain().find({ name: "tyrfing" }).remove();
    expect(items.data.length).toEqual(3);
  });

  test("Loki Findall", () => {
    let all = items.data;
    expect(all.length).toEqual(4);
  });
});
