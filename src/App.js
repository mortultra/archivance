import './App.scss';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';
import DisplayItems from './DisplayItems.js';
import UserSelect from './UserSelect.js';


function App() {

  //initiliaze state to call the firebase inventory data
  const [invArray, setInvArray] = useState([]); 
  const [filteredSeasons, setFilteredSeasons] = useState([]);
  // console.log(invArray);

  const populate = () => {
    const inventory = [
      {
        itemName: 'BA06 Merino V-Neck Short Sleeve',
        season: 'spring 2011'
      },
      {
        itemName: 'BA09 Cotton V-Neck Long Sleeve',
        season: 'spring 2011'
      },
      {
        itemName: 'PNT09 Align Pant',
        season: 'spring 2011'
      },
      {
        itemName: 'HS11 Deploy Anorak',
        season: 'spring 2011'
      },
      {
        itemName: 'Insulated Wool Jacket',
        season: 'fall 2011'
      },
      {
        itemName: 'Hooded Wool Jacket',
        season: 'fall 2011'
      },
      {
        itemName: 'Stealth Pant',
        season: 'fall 2011'
      },
      {
        itemName: 'Frame T-shirt Long Sleeve',
        season: 'fall 2011'
      },
      {
        itemName: 'Scalar Jacket',
        season: 'spring 2012'
      },
      {
        itemName: 'Partition Coat FL',
        season: 'spring 2012'
      },
      {
        itemName: 'Isometry Pant',
        season: 'spring 2012'
      },
      {
        itemName: 'Squamish Shirt',
        season: 'spring 2012'
      },
      {
        itemName: 'Anode Coat',
        season: 'fall 2012'
      },
      {
        itemName: 'Galvanic IS Coat',
        season: 'fall 2012'
      },
      {
        itemName: 'Spec Pant',
        season: 'fall 2012'
      },
      {
        itemName: 'Operand Shirt',
        season: 'fall 2012'
      },
      {
        itemName: 'Dyadic Jacket',
        season: 'spring 2013'
      },
      {
        itemName: 'Composite Jacket',
        season: 'spring 2013'
      },
      {
        itemName: 'Voronoi Pant',
        season: 'spring 2013'
      },
      {
        itemName: 'Operand Shirt Short Sleeve',
        season: 'spring 2013'
      },
      {
        itemName: 'Sinter SFT Coat',
        season: 'fall 2013'
      },
      {
        itemName: 'Scend Jacket',
        season: 'fall 2013'
      },
      {
        itemName: 'Graph Sweater',
        season: 'fall 2013'
      },
      {
        itemName: 'Facet Glove',
        season: 'fall 2013'
      }
    ];
    const dbRef = firebase.database().ref();
    inventory.forEach((item) => {
      dbRef.push(item)
    })
  }
    
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
          <h1>Veilance Archive</h1>
        </div>
      </header>
      <main className="wrapper">
        <UserSelect filterSeasons={filterSeasons} />
        <DisplayItems invArray={filteredSeasons} />
      </main>
      <footer>
        <p>Copyright 2021 Juno</p>
      </footer>
    </div>
  );
}

export default App;
