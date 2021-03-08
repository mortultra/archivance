import './App.css';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';


function App() {

  //initiliaze state to call the firebase inventory data
  const [invArray, setInvArray] = useState([]); 
    
  // // define the useEffect hook to call the database only once on initialzation
  useEffect(() => {

  //   // reference the database, save it in a variable
    const dbRef = firebase.database().ref();

    // use the .on() method to get inventory database
    dbRef.on('value', (data) => {
      // save database in a variable
      const invData = data.val();
      // console.log(dataVal);

      // create a variable that is an empty array
      const invItems = [];

      // use a for-in loop to return item name and season to the invInState array
      for (let itemKey in invData) {
        invItems.push(invData[itemKey]);
      }

      console.log(invItems);

      // use setInvArray to update the the value in the new inventory array

    });

  }, []);
  
  return (
    <div className="App">
      <h1>Veilance Closet</h1>
    </div>
  );
}

export default App;
