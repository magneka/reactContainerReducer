import React from "react";
import "./styles.css";
import Container from "./container/Container";
//import loki from "lokijs";
//var db = new loki('sandbox.db');
//var db = new loki("test");

// Add a collection to the database
//var items = db.addCollection("items");

// Add some documents to the collection
//items.insert({ name: "mjolnir", owner: "thor", maker: "dwarves" });
//items.insert({ name: "gungnir", owner: "odin", maker: "elves" });
//items.insert({ name: "tyrfing", owner: "Svafrlami", maker: "dwarves" });
//items.insert({ name: "draupnir", owner: "odin", maker: "elves" });

// Find and update an existing document
//var tyrfing = items.findOne({ name: "tyrfing" });
//tyrfing.owner = "arngrim";
//items.update(tyrfing);

//let all = items.data;
//console.log(all);

// These statements send to Text Output
//logText('tyrfing value :');
//logObject(tyrfing);
//logText('odins items');
//logObject(items.find({ 'owner': 'odin' }));

// This statement sends to Inspector
//inspectObject(db);

export default function App() {
  return (
    <div className="App">
      <h1>URL-Riken faggruppe</h1>
      <h2>Vi dypdykker i useRedux hook</h2>
      <Container />
    </div>
  );
}
