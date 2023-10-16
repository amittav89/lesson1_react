import styles from "./App.css";
import Ticket from "./components/Ticket";


export default App;

function App ()
{
//phase 1- state +const and vars
 
//phase 2 - functions

const persons=[
  {
    id: 1,
    fname: "oren",
    lname:"davidi",

  },
  {
    id: 2,
    fname: "oren",
    lname:"davidi",

  },
  {
    id: 3,
    fname: "oren",
    lname:"davidi",

  },
  
];

const personList = persons.map ((item, index)=> {
  return <Ticket ticket={item} />;

});


//phase 3 -return jsx

return (
  <div className="App">
    <h1>
      welcome {persons[0].fname} {persons[0].lname}
      <Ticket ticket= {persons[0]}></Ticket>
      <div> {personList} </div>
    </h1>
  </div>
)


}
