import React, { Component } from "react";
import Heading from "./components/Header";
import SortTable from "./components/Table";
import Search from "./components/Search";
import TableRow from "./components/TableRow";
import "./App.css";
import { get } from "axios";

const style = {
  margin: "0",
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
      <>
        <div style={style} className="App">
          <Heading />
          <Search placeholder="" handleChange={this.handleChange} />
          {/* <SortTable
          people={filteredEmployees}
          sortFirst={this.sortFirst}
          sortLast={this.sortLast}
        /> */}

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <td>Name</td>
                <td>Location</td>
                <td>Picture</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <TableRow employee={employee} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
