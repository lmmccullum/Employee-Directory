import React, { Component } from "react";
import Heading from "./components/Header";
import Search from "./components/Search";
import TableRow from "./components/TableRow";
import "./App.css";
import { get } from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      direction: "",
      searchField: "",
      people: [],
      filteredEmployees: [],
    };
  }

  componentDidMount() {
    const getPeople = async () => {
      const {
        data: { results },
      } = await get("https://randomuser.me/api/?results=20&nat=us");
      this.setState({ people: results, filteredEmployees: results });
    };
    getPeople();
  }

  handleChange = (e) => {
    const filteredEmployees = this.state.people.filter((employee) =>
      employee.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
      employee.name.last.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      searchField: e.target.value,
      filteredEmployees: filteredEmployees,
    });
  };

  sortFirst = () => {
    this.setState({
      filteredEmployees: this.state.filteredEmployees.sort(this.firstNameSort),
    });
  };

  firstNameSort = (a, b) => {
    let sorting = 0;
    if (a.name.first > b.name.first) {
      if (this.state.direction === "DESC") {
        sorting = 1;
      } else {
        sorting = -1;
      }
    } else if (a.name.first < b.name.first) {
      if (this.state.direction === "DESC") {
        sorting = -1;
      } else {
        sorting = 1;
      }
    }
    let direction;
    if (this.state.direction === "DESC") {
      direction = "ASC";
    } else {
      direction = "DESC";
    }
    this.setState({ direction });
    return sorting;
  };

  render() {
    return (
      <>
        <div className="App">
          <Heading />
          <Search placeholder="" handleChange={this.handleChange} />
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <td className="sortable" onClick={() => this.sortFirst()}>
                  Name ({this.state.direction || "sortable"})
                </td>
                <td>Location</td>
                <td>Picture</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredEmployees.map((employee) => (
                <TableRow key={employee.email} employee={employee} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
