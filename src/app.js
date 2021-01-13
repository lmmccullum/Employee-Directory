import React, { Component } from "react";
import Header from "./components/header";
import Table from "./components/table";
import Search from "./components/search";
import TableRow from "./components/TableRow";
import "./employee.css";
import { get } from "axios";

const style = {
  padding: "20px",
  color: "#ebb573",
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      people: [],
    };
  }

  componentDidMount() {
    const getPeople = async () => {
      const {
        data: { results },
      } = await get("https://randomuser.me/api/?results=20&nat=us");
      this.setState({ people: results });
    };
    getPeople();
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  sortFirst = (e) => {
    this.setState({ people: e });
  };

  sortLast = (e) => {
    this.setState({ people: e });
  };

  render() {
    const { people, searchField } = this.state;
    const filteredEmployees = people.filter((employee) =>
      employee.name.first.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div style={style} className="App">
        <Heading />
        <Search placeholder="" handleChange={this.handleChange} />
        <SortTable
          people={filteredEmployees}
          sortFirst={this.sortFirst}
          sortLast={this.sortLast}
        />
        <TableRow people={filteredEmployees} />
      </div>
    );
  }
}

export default App;

