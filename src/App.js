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

      // create an empty array
      // const itemsBySeason = [];
      // iterate through nested objects in the invData array with .map()
      const itemID = invItems[0].map((items) => {
        return items.itemName;
      });
      const seasonID = invItems[0].map((items) => {
        return items.season;
      })

      console.log(itemID, seasonID);
      // push nested objects to a new array
      
      // use setInvArray to update the the value in the new inventory array
      setInvArray(invItems);
      
    });

  }, []);
  
  return (
    <div className="App">
      <h1>Veilance Closet</h1>
      {/* map invArray in state and display items */}
      <ul>
        {
          invArray.map((item) => {
            return(
              <li>{item.season}</li>,
              <li>{item.itemName}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
