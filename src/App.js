import './App.css';

function App() {

  const inventory = {
    merinoVNeckSS: {
      itemName: 'BA06 Merino V-Neck Short Sleeve',
      season: 'spring 2011'
    },
    cottonVNeckLS: {
      itemName: 'BA09 Cotton V-Neck Long Sleeve',
      season: 'spring 2011'
    },
    alignPant: {
      itemName: 'PNT09 Align Pant',
      season: 'spring 2011'
    },
    deployAnorak: {
      itemName: 'HS11 Deploy Anorak',
      season: 'spring 2011'
    },
    insulWoolJacket: {
      itemName: 'Insulated Wool Jacket',
      season: 'fall 2011'
    },
    hoodedWoolJacket: {
      itemName: 'Hooded Wool Jacket',
      season: 'fall 2011'
    },
    stealthPant: {
      itemName: 'Stealth Pant',
      season: 'fall 2011'
    },
    frameTeeLS: {
      itemName: 'Frame T-shirt Long Sleeve',
      season: 'fall 2011'
    },
    scalarJacket: {
      itemName: 'Scalar Jacket',
      season: 'spring 2012'
    },
    partitionCoatFL: {
      itemName: 'Partition Coat FL',
      season: 'spring 2012'
    },
    isometryPant: {
      itemName: 'Isometry Pant',
      season: 'spring 2012'
    },
    squamishShirt: {
      itemName: 'Squamish Shirt',
      season: 'spring 2012'
    },
    anodeCoat: {
      itemName: 'Anode Coat',
      season: 'fall 2012'
    },
    galvanicISCoat: {
      itemName: 'Galvanic IS Coat',
      season: 'fall 2012'
    },
    specPant: {
      itemName: 'Spec Pant',
      season: 'fall 2012'
    },
    operandShirt: {
      itemName: 'Operand Shirt',
      season: 'fall 2012'
    },
    dyadicJacket: {
      itemName: 'Dyadic Jacket',
      season: 'spring 2013'
    },
    compositeJacket: {
      itemName: 'Composite Jacket',
      season: 'spring 2013'
    },
    voronoiPant: {
      itemName: 'Voronoi Pant',
      season: 'spring 2013'
    },
    operandShirtSS: {
      itemName: 'Operand Shirt Short Sleeve',
      season: 'spring 2013'
    },
    sinterSFTCoat: {
      itemName: 'Sinter SFT Coat',
      season: 'fall 2013'
    },
    scendJacket: {
      itemName: 'Scend Jacket',
      season: 'fall 2013'
    },
    graphSweater: {
      itemName: 'Graph Sweater',
      season: 'fall 2013'
    },
    facetGlove: {
      itemName: 'Facet Glove',
      season: 'fall 2013'
    }
  };

  // convert inventory object to an array
  const inventoryArray = Object.values(inventory);

  console.log(inventoryArray);

  // console.log(inventory);
  
  return (
    <div className="App">
      <h1>Veilance Closet</h1>
      <ul>
        {
          inventoryArray.map((item)=>{
            return (
              <li>
              {item.itemName}
            </li>
              )
          }) 
        }
      </ul>
    </div>
  );
}

export default App;
