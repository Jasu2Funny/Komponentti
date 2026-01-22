
function Tervehdys(props) {
  return <h1>Hei, {props.nimi}!</h1>;
}

function App() {
  return (
    <div>
      <Tervehdys nimi="Jasper" />
    </div>
  );
}

export default tervehdys;