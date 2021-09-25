import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = (props) => {
  // An alternate approach
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, { items: props.expenses })
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={props.Expenses} />
    </div>
  );
};

export default App;
