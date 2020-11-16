export function Menu(props) {
  return (
    <div>
      <button onClick={props.showWelcome}>Startsiden</button>
      <button onClick={props.showAll}>Vis alle</button>
      <button>Søk</button>
      <button>Opprett ny</button>
    </div>
  );
}
