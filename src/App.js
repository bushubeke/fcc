import React from 'react';
import './mainsrc.css'
//import { PauseFill,PlayFill,ArrowUpCircleFill,ArrowDownCircleFill,ArrowCounterclockwise} from 'react-bootstrap-icons'
//import {Button,Container, Card,Row,Col} from  'react-bootstrap';
//import { Provider, connect } from 'react-redux'
//import { createStore, applyMiddleware }  from 'redux'
//import thunk from 'redux-thunk'
//import { createStore, combineReducers, applyMiddleware } from 'redux'
//import { createStore, applyMiddleware } from 'redux'
//import {Button,Alert,Container,Breadcrumb,InputGroup,Card,Form,FormControl,Row,Col,Image } from  'react-bootstrap';
import {Container} from  'react-bootstrap'
//import {Carousel,Overlay} from 'react-bootstrap'
//import {Carousel} from 'react-bootstrap'
//import './picover.css'
//import styled from 'styled-components';
//import VolumeControl, {VolumeControlEvents } from "react-native-volume-control";
//import Slider from '@react-native-community/slider';
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

//import MobNavBar from './mobilesec/mobnav'
//import MobNavSection from './mobilesec/bodsec'
//import axios from 'axios'

//import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
//import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
//import LoginPage from './login'

// import MarkDown from './markdown'
// import Clock from './clock'
// //import TextPort from './teleport'
// import Calculator from './calcu'
// import HomePage from './home'
// import Random from './random'
// import DrumDrum from './drum'


class Page404 extends React.Component{
  render(){
    return(
    <Container fluid className='d-flex h-100'>
        <Container className='align-self-center style404'>
            <h1>There is no such page here,This is Bad request</h1>
        </Container>
    
    </Container>

    );
  }
}
// class ViewRoute extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       login_status:false,
//       current_location:'/',
//     }
//     this.setLogOut=this.setLogOut.bind(this);
//     this.setLogIn=this.setLogIn.bind(this);
//     this.setCurrentLocation=this.setCurrentLocation.bind(this)
//   }
//   //########################################################################
// setLogIn(){
//   this.setState({login_status:true})
// }
//  //#######################################################################
// setLogOut(){
//   this.setState({login_status:false})
// } 
// //########################################################################
// componentDidMount(){
//     this.setCurrentLocation()
// }
// //#######################################################################
// componentWillUnmount(){

// }

// //########################################################################
// setCurrentLocation(){
//   this.setState({current_location:document.location.pathname})
// }


//   //#######################################################################

  
  
//   render(){
    
//       return ( 
//         <React.Fragment>
//         {
//           this.state.current_location === '/pages/docktest'  ?

//                <HomePage /> : 
               
//                this.state.current_location ==='/markdown' ?

//                 <MarkDown />  : this.state.current_location ==='/clock' ?
                
//                 <Clock />      :this.state.current_location ==='/calc' ?
              
//                 <Calculator />  : this.state.current_location ==='/home' ?
                 
//                  <HomePage /> : this.state.current_location ==='/random' ? 
                
//                 <Random />  : this.state.current_location ==='/drum' ? 
                
//                 <DrumDrum />  : <Page404 /> }
//           </React.Fragment>
          
         
        
       
//       )
// }
// }

// //#####################################################################################
//     // react component used for encapsulating the main app with redux
// //#####################################################################################

// class App extends React.Component {


//   render() {
//     return (
//     <React.Fragment>
      
//          <ViewRoute />
         
//     </React.Fragment>
//     );
//   }
// }



//#####################################################################################
export default Page404;