import React,{Component} from 'react';
import { Text,StyleSheet } from 'react-native';

export default class NameText extends Component {
	render() {
		return(
				<Text style={style.textStyle}>{this.props.name}</Text>
		);
	}
}
const style = StyleSheet.create({
    textStyle: {
		fontSize: 22,
		color:"#292E49",
		backgroundColor:"#fbc7d4",
		paddingVertical:15,
		paddingHorizontal:10,
		borderRadius:5,
		marginTop:5,
	}
})