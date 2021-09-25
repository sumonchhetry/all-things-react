import Expenses from "./components/Expenses";

function App(props) {
  return (
    <div>
      <h1>Let's get started</h1>
      <Expenses items={props.Expenses} />
    </div>
  );
}

export default App;
