import React from 'react';

const AdditionalFeature = props => {
  
  const newFeature = () =>{
    props.addItem(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={newFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
