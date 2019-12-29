import React from 'react';
import {StyleSheet,View,Image,Alert,Text,TouchableHighlight,props} from 'react-native';

export default class App extends React.Component
{
	constructor() {
		super();
		this.state = {
			randomColor:null,
			randomColor1:null
		}	
	}
	getRandomColor = () => {
		return(
			"rgb(" +
			Math.floor((Math.random() * 256))+","+
			Math.floor((Math.random() * 256))+","+
			Math.floor((Math.random() * 256))+")"
		)
	}
	myButtonPressed = () => {
		// console.log(getRandomColor())
		this.setState({ randomColor:this.getRandomColor() });
		this.setState({ randomColor1:this.getRandomColor() })
	}
	render() {
		return (
			<View style={[style.Container,{backgroundColor:this.state.randomColor }]}>
				<TouchableHighlight onPress={this.myButtonPressed}>
					<Text style={[style.viewStyle,,{
						backgroundColor:this.state.randomColor,
						color:this.state.randomColor1,
						borderColor:this.state.randomColor1,
					
					}]}>Change Color</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
const style=StyleSheet.create({
	Container:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	},
	viewStyle: {
		fontSize:30,
		backgroundColor:"#BB2CD9",
		paddingVertical:12,
		paddingHorizontal:40,
		color:"black",
		borderRadius:5,
		borderWidth:2,
		borderColor:"rgb(19,29,80)",
	}
});
