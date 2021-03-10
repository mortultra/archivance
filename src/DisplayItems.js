const DisplayItems = (props) => {
  const {invArray} = props;
  return (
    <div>
      {
        invArray.map((items) => {
          return(
            <h2 key={items.key}>{items.itemName}</h2>
            )
          })
        }
    </div>
  )
}

export default DisplayItems;