import './App.scss';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';
import DisplayItems from './components/DisplayItems.js';
import UserSelect from './components/UserSelect.js';


function App() {

  //initiliaze state to call the firebase inventory data
  const [invArray, setInvArray] = useState([]); 
  const [filteredSeasons, setFilteredSeasons] = useState([]);

  // // define the useEffect hook to call the database only once on initialzation
  useEffect(() => {

  //   // reference the database, save it in a variable
    const dbRef = firebase.database().ref();

    // use the .on() method to get inventory database
    dbRef.on('value', (data) => {
      // save database in a variable
      const invData = data.val();

      // create a variable that is an empty array
      const invItems = [];

      // use a for-in loop to return unique itemKey to items invInState array
      let newItem;
      for (let itemKey in invData) {
        newItem = invData[itemKey]
        newItem.key = itemKey
        invItems.push(newItem);
      }
      
      // // use setInvArray to update the the value in the new inventory array
      setInvArray(invItems);
      
    });

  }, []);

  // filter the seasons using the seasons using the season key
  const filterSeasons = ( chosenSeason ) => {
    // filter chosen season and make new array out of that
    // copy the all items in the database
    const copyOfInvArray = [...invArray];
    // (item) represents each object in the array
    const filteredInvArray = copyOfInvArray.filter((photo) => {
      return photo.season === chosenSeason;
    });

    // update the filterSeasons array
    setFilteredSeasons(filteredInvArray);
  }

  
  return (
    <div className="App">
      <header>
        <div className="headerFlex">
          <h1>Archivance</h1>
          <hr />
        </div>
      </header>
      <main className="wrapper">
        <UserSelect filterSeasons={filterSeasons} />
        <DisplayItems invArray={filteredSeasons} />
      </main>
      <footer>
        <p>
          Made at <a href="https://junocollege.com/">Juno</a> 2021
        </p>
      </footer>
    </div>
  );
}

export default App;
