// src/Table.js

import React, { Component } from "react";

// Add TableHeader arrow function here
const Plant = () => {
  return (
    <div>
      <h2>This is a Plant Component!</h2>
    </div>
  );
};

class Table extends Component {
  render() {
    return <Plant />;
  }
}

export default Plant;
