// METHOD 1 – SHALLOW-NESTED OBJECT DATABASE

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



  // NESTED-OBJECT DATABASE OBJECT
  // const inventory = {
  //   springEleven: {
  //     merinoVNeckSS: {
  //       itemName: 'BA06 Merino V-Neck Short Sleeve',
  //       season: 'spring 2011'
  //     },
  //     cottonVNeckLS: {
  //       itemName: 'BA09 Cotton V-Neck Long Sleeve',
  //       season: 'spring 2011'
  //     },
  //     alignPant: {
  //       itemName: 'PNT09 Align Pant',
  //       season: 'spring 2011'
  //     },
  //     deployAnorak: {
  //       itemName: 'HS11 Deploy Anorak',
  //       season: 'spring 2011'
  //     }
  //   },

  //   fallEleven: {
  //     insulWoolJacket: {
  //       itemName: 'Insulated Wool Jacket',
  //       season: 'fall 2011'
  //     },
  //     hoodedWoolJacket: {
  //       itemName: 'Hooded Wool Jacket',
  //       season: 'fall 2011'
  //     },
  //     stealthPant: {
  //       itemName: 'Stealth Pant',
  //       season: 'fall 2011'
  //     },
  //     frameTeeLS: {
  //       itemName: 'Frame T-shirt Long Sleeve',
  //       season: 'fall 2011'
  //     }
  //   },

  //   springTwelve: {
  //     scalarJacket: {
  //       itemName: 'Scalar Jacket',
  //       season: 'spring 2012'
  //     },
  //     partitionCoatFL: {
  //       itemName: 'Partition Coat FL',
  //       season: 'spring 2012'
  //     },
  //     isometryPant: {
  //       itemName: 'Isometry Pant',
  //       season: 'spring 2012'
  //     },
  //     squamishShirt: {
  //       itemName: 'Squamish Shirt',
  //       season: 'spring 2012'
  //     }
  //   },

  //   fallTwelve: {
  //     anodeCoat: {
  //       itemName: 'Anode Coat',
  //       season: 'fall 2012'
  //     },
  //     galvanicISCoat: {
  //       itemName: 'Galvanic IS Coat',
  //       season: 'fall 2012'
  //     },
  //     specPant: {
  //       itemName: 'Spec Pant',
  //       season: 'fall 2012'
  //     },
  //     operandShirt: {
  //       itemName: 'Operand Shirt',
  //       season: 'fall 2012'
  //     }
  //   },

  //   springThirteen: {
  //     dyadicJacket: {
  //       itemName: 'Dyadic Jacket',
  //       season: 'spring 2013'
  //     },
  //     compositeJacket: {
  //       itemName: 'Composite Jacket',
  //       season: 'spring 2013'
  //     },
  //     voronoiPant: {
  //       itemName: 'Voronoi Pant',
  //       season: 'spring 2013'
  //     },
  //     operandShirtSS: {
  //       itemName: 'Operand Shirt Short Sleeve',
  //       season: 'spring 2013'
  //     }
  //   },

  //   fallThirteen: {
  //     sinterSFTCoat: {
  //       itemName: 'Sinter SFT Coat',
  //       season: 'fall 2013'
  //     },
  //     scendJacket: {
  //       itemName: 'Scend Jacket',
  //       season: 'fall 2013'
  //     },
  //     graphSweater: {
  //       itemName: 'Graph Sweater',
  //       season: 'fall 2013'
  //     },
  //     facetGlove: {
  //       itemName: 'Facet Glove',
  //       season: 'fall 2013'
  //     }
  //   }
  // };

  // METHOD 2 MULTI-OBJECT PUSH
  // const dbRef = firebase.database().ref();

  // const pathRef = (path) => {
  //   return firebase.database().ref(path);
  // }

  // let seasonRef = ``;

  // for (let season in inventory) {
  //   seasonRef = pathRef(season);

  //   for(let item in inventory[season]) {
  //     seasonRef.push(item);
  //   };
  // }

  // let inventory;

  const dbRef = firebase.database().ref();

  useEffect(() => {

    dbRef.on('value', (data) => {
      const inventory =data.val();

           // // variable for all seasons in database
      // const seasons = [
      //   'spring 2011',
      //   'fall 2011',
      //   'spring 2012',
      //   'fall 2012',
      //   'spring 2013',
      //   'fall 2013'
      // ];

      // const clothingItems = {};

      // for (let season of seasons) {
      //   clothingItems[season] = [];
      // }

      // console.log(clothingItems);

      // for (let itemID in invData) {
      //   const seasonID = invData[itemID].season;
      //   clothingItems[seasonID].push(invData[itemID]);
      //   // console.log(seasonID);
      // }
      
  }, []);








