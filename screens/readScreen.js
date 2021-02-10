import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Header} from 'react-native-elements';
import db from '../Conifg';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class ReadScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allStories:[],
      dataSource:[],
      search : ''
    }
  }
  componentDidMount(){
    this.retrieveStories();
  }

  updateSearch = search => {
    this.setState({ search });
  };


  retrieveStories=()=>{
    try {
      var allStories= []
      var stories = db.collection("Stories")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              
              allStories.push(doc.data())
              console.log('this are the stories',allStories)
          })
          this.setState({allStories})
        })
    }
    catch (error) {
      console.log(error);
    }
  };


  SearchFilterFunction(text) {
      const newData = this.state.allStories.filter((item)=> {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

    render(){
      return(
        <View style ={styles.container}>
          <SafeAreaProvider>
            <Header
                backgroundColor = {"red"}
                centerComponent = {{
                    text: "Story Hub"
                }}
            />
            
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Type Here"
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}
              />
          </View>
          
          <ScrollView>
              <View>
                {
                  this.state.search === "" ? 
                    this.state.allStories.map((item)=>(
                      <View style={styles.view}>
                        <Text>
                          Title : {item.title}
                        </Text>
                        <Text>
                          Author : {item.author}
                        </Text>
                      </View>
                    ))
                  :
                  this.state.dataSource.map((item)=>(
                    <View style={styles.view}>
                      <Text>
                       Title : {item.title}
                      </Text>
                      <Text>
                       Author : {item.author}
                      </Text>
                    </View>
                  ))
                }
              </View>
          </ScrollView> 
          </SafeAreaProvider>
        </View>  
      );      
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'pink',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent:'center',
    alignSelf: 'center',
  },
  view : 
  {
    borderColor:'black',
    borderWidth:2,
    padding:10,
    alignItems:'center',
    margin:30
  }
});