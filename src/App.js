import React from 'react';
import {connect} from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import{addItem, removeItem} from './actions/Actions'

const App = (props) => {

  
  const removeFeature = item => {
    props.removeItem(item)
  };

  const addFeature = item => {
    props.addItem(item)
  };

  return (
    <div className="container">
      <div className="box card">
        <Header car={props.car} />
        <AddedFeatures removeItem={removeFeature} car={props.car} />
      </div>
      <div className="box card">
        <AdditionalFeatures addItem={addFeature} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};



const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect( ()=> 
mapStateToProps,
{
  addItem,
  removeItem
}
)(App);


