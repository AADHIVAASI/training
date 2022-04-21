import "./App.css";
import React, { Component } from "react";
import Person from "./person/Person";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Vib", age: 24 },
      { id: "2", name: "Vel", age: 25 },
      { id: "3", name: "Var", age: 20 },
      { id: "4", name: "San", age: 21 },
    ],
    show: false,
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: "Vel", age: 22 },
        { name: "Var", age: 23 },
        { name: "San", age: 24 },
      ],
    });
  };
  changeHandler = (e, id) => {
    let index = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    let person = { ...this.state.persons[index] };
    person.name = e.target.value;

    let persons = [...this.state.persons];
    persons[index] = person;

    this.setState({ persons: persons });
  };
  togglehandler = () => {
    let toggle = this.state.show;
    this.setState({ show: !toggle });
  };
  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };
  render() {
    const style = {
      backgroundColor: "red",
      color: "white",
      font: "inherit",
      border: "1px solid pink",
      borderRadius: "25px",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "salmon",
        color: "black",
      },
    };
    let persons = null;
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("green");
    }
    if (this.state.show) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                deleteHandler={() => this.deleteHandler(index)}
                change={(e) => this.changeHandler(e, person.id)}
              ></Person>
            );
          })}
        </div>
      );
      style.backgroundColor = "green";
      style[":hover"] = {
        backgroundColor: "lightgreen",
        color: "black",
      };
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Im a react app</h1>
          <p className={classes.join(" ")}>This is my family</p>
          <button style={style} onClick={this.togglehandler}>
            Switch Name
          </button>
          {persons}
          {/* <Person
          name={this.state.persons[0].name}
          switchNameHandler={() => this.switchNameHandler('Vibby')}
          age={this.state.persons[0].age}
          change={this.changeHandler}
        >
          Hobbies : Riding
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies : Singing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Hobbies : Eating
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        >
          Hobbies : Writing
        </Person> */}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
