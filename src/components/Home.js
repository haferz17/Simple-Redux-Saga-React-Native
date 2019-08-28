import React from 'react';
import { View } from 'react-native';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'

const Home = () => (
  <View style={{flex:1}}>
     <Button />
     <Loading />
     <NewsItem />
  </View>
);
export default Home;