import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    TouchableHighlight,
    Alert,
    ScrollView,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar, Input, CheckBox } from 'react-native-elements';

class ListItem extends Component{
	constructor(props, context){
		super(props, context);
	}
	passMenthod = (actileid) =>{
		//Alert.alert(actileid+'xx');
		this.props.pushDetails(actileid);
	}
	render(){
		return (
			<TouchableHighlight underlayColor={'rgba(0,0,0,0)'} style={styles.item} onPress={()=>this.passMenthod(this.props.data.actileid)}>
				<View>
					<Image
					style={styles.itembg}
					source={{uri: this.props.data.img}}
					/>
					<View style={styles.iteminner}>
						<Text style={styles.title}>{this.props.data.title}</Text>
						<Text style={styles.date}>{this.props.data.date}</Text>
					</View>

				</View>
			</TouchableHighlight>
		)
	}
}

var articleJson = [
	{
		title:'一日三餐计划，一周不重样',
		actileid:1,
		date:'2017-09-09',
		img:'images/img1.jpeg'
	},
	{
		title:'减肥也想吃零食？戳这里！',
		actileid:1,
		date:'2017-09-09',
		img:'images/img2.jpeg'
	},
	{
		title:'50款高颜值甜点',
		actileid:1,
		date:'2017-09-09',
		img:'images/img1.jpeg'
	},
	{
		title:'土豆烧茄子',
		actileid:1,
		date:'2017-09-09',
		img:'images/img3.jpeg'
	},
	{
		title:'灌汤小笼包',
		actileid:1,
		date:'2017-09-09',
		img:'images/img4.jpeg'
	},
	{
		title:'课程1',
		actileid:1,
		date:'2017-09-09',
		img:'images/img4.jpeg'
	}
];

class HomeScreen extends Component {
    static propTypes = {

    }
    constructor(props, context) {
        super(props, context);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = { text: 'Useless Placeholder',dataSource: ds.cloneWithRows(articleJson)};
        //   this._onForward = this._onForward.bind(this);
        //   this._onBack = this._onBack.bind(this);
    }
    pushDetails(actileid){
		
		
	}
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', width: '100%', height: 20 }} />
                <View style={{}}>
                    <SearchBar

                        platform="ios"
                        placeholder='Search' />
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <ListItem pushDetails = {()=>this.pushDetails(rowData.actileid)} data={rowData}></ListItem>}
                    />
                </View>

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
	item:{
		padding:20,
		borderBottomColor:'#f3f0f0',
		borderBottomWidth:1,
		position:'relative'

	},

	date: {
		fontSize:14,
		textAlign:'center',
		color:'#fff',
		bottom:0,
		right:0
	},
	title:{
		position:'relative',
		color:'#fff',
		lineHeight:30,
		fontSize:20,
		padding:10,
		fontWeight:'bold',
		textAlign:'center'
	},
	itembg:{
		width:'100%',
		height:200
	},
	iteminner:{
		width:'100%',
		height:'100%',
		position:'absolute',
		left:0,
		top:0,
		backgroundColor:'rgba(0,0,0,0.5)',
		flex:1,
		flexDirection:'column',
		justifyContent:'center'

	}
});
module.exports = HomeScreen;
