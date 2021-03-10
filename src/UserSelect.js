import {useState} from 'react';

const UserSelect = () => {
  return (
    <form>
      <select name="seasonSelection" 
      id="seasonSelection">
        <option value="placeholder">Choose a season</option>
        <option value="spring 2011">Spring 2011</option>
        <option value="fall 2011">Fall 2011</option>
        <option value="spring 2012">Spring 2012</option>
        <option value="fall 2012">Fall 2012</option>
        <option value="spring 2013">Spring 2013</option>
        <option value="fall 2013">Fall 2013</option>
      </select>
    </form>
  )
}

export default UserSelect