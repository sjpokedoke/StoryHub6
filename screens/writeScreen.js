import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../Conifg';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            TitleText: "Name of the story",
            AuthorText: "Author",
            StoryText: "Write the story!"
        }
    }

    addStory = (TitleText,AuthorText,StoryText)=>{
        db.collection("Stories").add({
            "Title" : TitleText,
            "Author" : AuthorText,
            "Story" : StoryText
        })
        this.setState({
            TitleText : "",
            AuthorText : "",
            StoryText : ""
        })

        return alert("Story added successfully!!!");
    }

   
    
    render(){
        return(
            <View  style={{backgroundColor: 'white' , height: 1000, fontWeight: 'bold'}}>
                <SafeAreaProvider>
                <Header
                 backgroundColor = {"red"}
                 centerComponent = {{
                     text: "Story Hub"
                 }}
                />
                <KeyboardAvoidingView>
                <TextInput
                style={styles.inputStyle}
                 onChangeText={(text)=>{
                     this.setState({
                         TitleText: text
                    })
                  }}
                  value={this.state.TitleText}/>

                  <TextInput
                      style={styles.inputStyle}
                      onChangeText={(text)=>{
                          this.setState({
                              AuthorText: text
                          })
                      }}
                      value={this.state.AuthorText}/>   

                  <TextInput
                      style={{width:'80%', marginTop: 40, alignSelf: 'center', height: 200, textAlign: 'center', borderWidth: 2, borderRadius:25}}
                      onChangeText={(text)=>{
                          this.setState({
                              StoryText: text
                          })
                      }}
                      multiline={true}
                      value={this.state.StoryText}/>
                </KeyboardAvoidingView>
                   <TouchableOpacity style = {styles.button} onPress = {()=>{this.addStory(this.state.TitleText,this.state.AuthorText,this.state.StoryText)}}>
                      <Text style = {styles.text}>Sumbit</Text>
                    </TouchableOpacity>
                    </SafeAreaProvider>   
            </View>
        )
     }
  }

  const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 50
    },
    button : {
       height : 50,
       justifyContent : "center",
       alignItems : "center",
       borderRadius : 10,
       backgroundColor : "#ff5722",
       shadowColor : "#000000",
       shadowOffset : {width : 0, height : 8},
       shadowOpacity : 0.44,
       shadowRadius : 10,
       elevation : 16,
       marginTop : 20,
       color : "orange"
    },
    text : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    Keyboard : {
        flex : 1,
        alignItems:'center',
        justifyContent:'center'
    }
  })