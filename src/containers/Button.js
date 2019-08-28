import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { getNews } from '../actions';

let Btn=({getNews})=>(
   <Button onPress={getNews} title="Click Me"></Button>
)
const mapDispatchToProps = {
   getNews: getNews,
};

Btn = connect(null,mapDispatchToProps)(Btn);
export default Btn;