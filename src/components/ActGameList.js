import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ActGameList extends Component {
	
	// componentWillMount() {
	// 	// Boiler Plate code for initializing datasource for ListView (look at image in redux/rn folder)
	// 	const ds = new ListView.DataSource({
	// 		rowHasChanged: (r1, r2) => r1 !== r2
	// 	})
	// 	//								List of libraries is our DataSource
	// 	//										V    V   V 
	// 	this.dataSource = ds.cloneWithRows(this.props.libraries);
	// }//end componentWillMount

	// renderRow() {

	// 	return <ListItem  library={library} />;
	// }//end renderRoww

	render(){
	console.log(this.props);
	return(
		<View>
			<Text>
			Yerrr
			</Text>
		</View>
		);
	}
}




export default ActGameList;

