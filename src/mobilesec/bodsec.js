import React from 'react';
import { Container,Button,ButtonGroup,InputGroup} from  'react-bootstrap'
import {FormControl,Col,Row } from 'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.css'
//import UserContactView from './controlsec/contacts'
//import ContactView from './controlsec/contacts'
//import UserMessageView from './controlsec/messages'
//import MessageView from './controlsec/messages'
//import UserSettingView from './controlsec/settings'
//import rtravel from './rtravel.jpg'
//import MessageSec from './messec'
//import InputSec from '../Inputsec'
//import PicPoper from './popover/picpopover'
//import ContactView from './controlsec/contacts';

//##################################################################
/*
import TextLeft from './messag/textleft'
import TextRight from './messag/textright'
import PicRight from './messag/picright'
import PicLeft from './messag/picleft'
import LinkLeft from './messag/linkleft'
import LinkRight from './messag/linkright'
*/

import MessageSec from '../messec'


//##############################################################

class MobNavSection extends React.Component {
    constructor(props){ 
      super(props);
      this.state={
       
       
       

      }
        
      
     
    }    
    //###############################################################################################
    /*
    setPicShow(){
      this.setState({picshow:!this.state.picshow})
    }
*/
    //###############################################################################################
 
    //###############################################################################################
    
  //#################################################################################################
  
   //###############################################################################################
    componentDidMount() {
     
    }
    //###############################################################################################
    
    
    //###############################################################################################
    shouldComponentUpdate(){
      return true;
    }
    //###############################################################################################
      
    //###############################################################################################
  
    //###############################################################################################
   

    //###############################################################################################
    render() {
 //##############################
          //general purpose js codes
  //##############################






  
var data=['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10']
var dataM=['m1','m2','m3','m4']
//var data=['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10']
var textmessage1=[{ type:'tl',picid:'compOne', imageid:'imageOne'},
{ type:'tr',picid:'compTwe', imageid:'imageTwo'},{ type:'tl',picid:'compThree', imageid:'imageThree'},
{ type:'tr', picid:'compFour', imageid:'imageFour'},{ type:'tl',picid:'compFive', imageid:'imageFive'},
{ type:'pr', picid:'compSix', imageid:'imageSix', thumimageid:'thumFive'},{ type:'pl', picid:'compSeven', imageid:'imageSeven', thumimageid:'thumSix'},
{ type:'tr', picid:'compEight', imageid:'imageEight'},{ type:'tl',picid:'compNine', imageid:'imageNine'},
{ type:'lr', plink:'https://www.youtube.com/watch?v=by7wT7jxwgI',picid:'compTen', imageid:'imageTen'},
{ type:'ll',plink:'https://www.youtube.com/watch?v=by7wT7jxwgI',picid:'compEleven', imageid:'imageEleven'},

]

var textmessage2=[{ type:'tr',picid:'compOne', imageid:'imageOne'},

{ type:'pr', picid:'compSix', imageid:'imageSix', thumimageid:'thumFive'},{ type:'pl', picid:'compSeven', imageid:'imageSeven', thumimageid:'thumSix'}

]


    //##############################

//##############################
      return (
        <React.Fragment>
         
                     
               
              

              
                  <Row  id={this.props.id}  >
                      <Container fluid className='mobmes-con'>
                 
                    <MessageSec data={textmessage1} />

                    </Container>
                  </Row>
                

              
          
        
        </React.Fragment>
   
      );
    }
  }
  export default MobNavSection;