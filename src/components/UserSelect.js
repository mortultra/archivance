import {useState} from 'react';

// This component was realized using the Juno codealong found here: https://github.com/HackerYou/bootcamp-notes/blob/master/react-and-firebase/unsplash-codealong.md

const UserSelect = (props) => {
  const {filterSeasons} = props;
  const [userChoice, setUserChoice] = useState('placeholder')
  // when the user chooses from the dropdown
  const handleUserChoice = (event) => {
    setUserChoice(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterSeasons(userChoice);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="seasonSelection">
        <select 
        name="seasonSelection" 
        id="seasonSelection"
        value={userChoice}
        onChange={handleUserChoice}>
          <option value="placeholder" disabled>Choose a season</option>
          <option value="spring 2011">Spring 2011</option>
          <option value="fall 2011">Fall 2011</option>
          <option value="spring 2012">Spring 2012</option>
          <option value="fall 2012">Fall 2012</option>
          <option value="spring 2013">Spring 2013</option>
          <option value="fall 2013">Fall 2013</option>
        </select>
      </label>
      <button>Select</button>
    </form>
  )
}

export default UserSelect