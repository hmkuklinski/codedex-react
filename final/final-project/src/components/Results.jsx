import React, {useContext} from "react";
import { UserContext } from './UserContext';

export default function Results({ element, dogPic }) {
  // reference the context for the "name".
  const {name}= useContext(UserContext);


  //change element display:
  if (element === 'Earth'){
    element= "Earth 🪴🌼🌻🌿";
  }
  else if(element === 'Fire'){
    element= "Fire 🔥🚒🧯";
  }
  else if(element==='Water'){
    element= "Water 🌊🌧️☔";
  }
  else{
    element= 'Air ✈️🦋🍃';
  }
  return (
    <div>
      <p>
        <strong>{name}</strong>, your element is: {element}
      </p>
      {dogPic ? (
        <div className="dog-container">
          <h2>Here's a cute dog to celebrate! 🐶</h2>
          <img src={dogPic} alt="dog-picture"></img>
        </div>
      ) : (
        <p>No dogs here.</p>
      )}
    </div>
  );
}