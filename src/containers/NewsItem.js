import React from 'react';
import {  
    View,
    Text,
    CheckBox
} from 'react-native';
import { connect } from 'react-redux'

const articleStyle = {
  margin: 10,
  padding: 10,
  flexDirection: 'row',
  backgroundColor: 'yellow'
}
let NewsItem = ({ article }) => (
    article ?
    <View style={articleStyle} >
        <CheckBox value={article.completed}/>
        <Text>{article.id}. {article.title}</Text>
    </View> :
    null
);
const mapStateToProps = (state) => ({
    article: state.news,
})
NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;