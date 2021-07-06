

import React, {Component} from 'react';
import {View,Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';

class Sumar extends Component{
     constructor(props){
       super(props)
     this.state ={
       a:0,
       b:0,
       sum:0,
       resta:0,
       producto:0,
     };
     this.number1 =this.number1.bind(this);
     this.number2 =this.number2.bind(this);
     this.suma =this.suma.bind(this);
     this.restar =this.restar.bind(this);
     this.multiplicar =this.multiplicar.bind(this);
     
     }

     number1 =(text) => {
         this.setState({a:parseInt(text)})
     }
     number2 =(text) => {
        this.setState({b:parseInt(text)})
    }
   
  
  suma(){
    const {sum,a,b} = this.state;
    this.setState({sum:a+b});
  }
  restar(){
    const{resta,a,b} =this.state;
    this.setState({resta:a-b})
  }

  multiplicar(){
    const{producto,a,b} =this.state;
    this.setState({producto:a*b})
  }
  //
render(){

   const {a,b,sum,resta,producto} =this.state;
    return(
        
     <View style ={styles.container}>
       <Text> numero 1</Text>
       <TextInput style = {styles.box}
         onChangeText={this.number1}
         keyboardType = "numeric"
         placeholder="numero 1"
         keyboardAppearance ="dark"
         //onSubmitEditing ={()=> {
         // alert('introdusiste a: '+this.a)
        // }}
      
         />

       <Text> numero 2</Text>
       <TextInput style = {styles.box}
         onChangeText={this.number2}
       
         keyboardType = "decimal-pad"
          placeholder="numero 2"
          keyboardAppearance ="light"
          //onSubmitEditing ={()=> {
           // alert('introdusiste a: '+number2)
           //}}
       
       
       />

        <View style= {styles.subcontainer}> 

          <TouchableOpacity style ={styles.btn}
            onPress= {this.suma}
    
          >
            <Text styles={styles.box}> sumar </Text>
          </TouchableOpacity>
          <Text></Text>
           
          <TouchableOpacity style ={styles.btn}
          onPress= {this.restar}>
            <Text styles={styles.box}> restar </Text>
          </TouchableOpacity>
          < Text></Text>
          <TouchableOpacity style ={styles.btn}
          onPress= {this.multiplicar}>
            <Text styles={styles.box}> multiplicar </Text>
          </TouchableOpacity>
           <Text> suma/resta/Producto:</Text>
          <Text style={styles.res}>{sum}</Text>
          <Text style={styles.res}>{resta}</Text>
          <Text style={styles.res}>{producto}</Text>
        </View>
        
      </View>
    );
  }
  }
export default Sumar

const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'white',
   alignItems:'center',
  },
  subcontainer:{
    height:50,
    width:'100%',
    paddingHorizontal:10,
    alignItems:'center',
   
  },
 
  box:{
     borderWidth:1,
     borderColor:'blue',
     padding:20,
     margin:10,
     width:200,
     margin:12,
     borderRadius:10,
  },
  btn:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'orange',
  //  paddingVertical:15,
   },
   res:{
    color:'black',
    fontSize:40,
   }

});


