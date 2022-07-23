//import { Component } from "react"; //must do when we use class component
import { useState, useEffect } from "react"; //useState hook allows us to store/encapsulate local state within functional component where other component cant touch or modify

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import logo from "./logo.svg";
import "./App.css";

//App component

const App = () => {
  const [searchField, setSearchField] = useState(" "); //[value,setValue]//setSearchField changes state on typing unlike setState in class component//useState is associated with only one state value unlike setState in class component with object with multiple values
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("rendered");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); //call back fn called firstly while rendering firstly and only when state is changed callback is called again//here since [](empty array) callback is called only once and empty array never changes

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]); //state is changed here when we type

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodexes</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
//class component
//Below code is component built by jsx similar to html
// class App extends Component {
//   //the constructor fn is called/runs by react
//   constructor() {
//     super(); //related to class Component/calling Constructor fn of class Component/reusability of class Component
//     //way to create a state/object/data which is accessible only to this component(pure fn/no side effect/immutable)
//     this.state = {
//       monsters: [], //if no data is fetched then empty array(error case in promise)
//       searchField: "",
//     };
//   }
//   //In a class component like this whenever there is an api call fetch to get data from api then use componentDidMount fn to render that data on page and setState updates state asusual
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         //modifying state
//         //this.setState is async
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             //console.log(this.state);//this is run syncronously only after setState updates state
//           }
//         )
//       );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     // console.log(event.target.value);

//     //console.log(filteredMonsters); //returns a new array which consists of remaining array elements after filtering out some array elements from original array which doesnt satisfy condition(doesnt mutate state/original array so setState below)
//     //to update state below code is used with setState method
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   //render() is rendering/putting features/functionalities exactly on UI which runs right after constructor fn
//   //constructor fn runs first,then render and its components,then componentDidMount promise
//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       //in jsx in render() when rendering component on webpage only one div tag(parent) should return with children tags inside it  but no siblings tags like another div tag after it
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         {/* input tag of html is a react component which has almost all html properties className,type,placeholder and onChange are inbuilt props implemented by react(functionalities) */}
//         {/* <input
//           className="search-box"
//           type="search"
//           placeholder="search-monsters"
//           onChange={this.onSearchChange}
//         /> */}
//         {/* go through basic file and come back here */}
//         {/* every time to access js var use curly braces */}
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}
//         {/* way to add react component to this file and adding props which is exporting functionalities onSearchChange and filteredMonsters to card-list component and search-box component(props are key value pairs in object where key is a prop name and value is functionality) */}
//         <SearchBox
//           className="monsters search-box"
//           onChangeHandler={this.onSearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
