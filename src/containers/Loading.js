import React from 'react';
import {  
    View,
    Text,
    Image
} from 'react-native';
import { connect } from 'react-redux'

let Loading = ({ loading }) => (
    loading ?
    <View style={{ alignSelf: 'center' }}>
        <Image source={require('../assets/loading_spinner.gif')} />
        <Text style={{alignSelf:'center'}}>Loading ...</Text>
    </View> :
    null
);
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;