import React from 'react';
//import WindowSizeListener from 'react-window-size-listener'
//import ReactDOM from 'react-dom';
//import { PauseFill,PlayFill,ArrowUpCircleFill,ArrowDownCircleFill,ArrowCounterclockwise} from 'react-bootstrap-icons'
//import {Button,Container, Card,Row,Col} from  'react-bootstrap';
//import { Provider, connect } from 'react-redux'
//import { createStore, applyMiddleware }  from 'redux'
//import thunk from 'redux-thunk'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Button,Alert,Container,Breadcrumb,InputGroup,Card,Form,FormControl,Row,Col,Image } from  'react-bootstrap';
//import styled from 'styled-components';
//import VolumeControl, {VolumeControlEvents } from "react-native-volume-control";
//import Slider from '@react-native-community/slider';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import rtravel from './rtravel.jpg'


// css styling data below here
const first_row_style={backgroundColor:'yellowgreen',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',minWidth:'999px'};
const second_row_style={backgroundColor:'lightgrey',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minWidth:'999px'};
//second_rcol_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'};
var first_rc11_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'};
var first_rc12_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'522px',borderStyle:'solid'};
var first_rc13_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'};
var second_rc21_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'};
var second_rc22_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'};
var second_rc23_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'};





//css styling data above here
class App extends React.Component{
  constructor(props){ 
    super(props);
    this.state = {
      'srh':''
    }
    //binding done here for function
    this.handleResize=this.handleResize.bind(this)

        //this.set_window_height=this.set_window_height.bind(this);
        //this.clockStop=this.clockStop.bind(this)
        //this.resetClo=this.resetClo.bind(this)
      
  }
  //this is where java script function are made
  //also component will mount will be placed here
  // this is where the bind this functions are used
 /* componentDidMount(){
    //var z=$('#chatting');
    //var z2=$('fr').scrollHeight;
    let z=window.innerHeight;
    //let z= document.querySelector('#chatting').offsetHeight;
    let z2= document.querySelector('#fr').offsetHeight;
    let vrc11=document.querySelector('#fr').offsetHeight
    let nh=z-z2-20;
    //console.log(nh)
    this.setState({'srh':nh+'px'})
  }*/
  handleResize(){
    console.log('the window height and width are '+ window.innerHeight +'x'+window.innerWidth)

  }
/*
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
 }
componentWillUnmount() {
     document.removeEventListener("keydown", this.handleKeyPress);

 }*/
render(){
// this is where normal javascript codes go in

  /*this is where the normal javascript functions are writen
  let first_rc11_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'};
  let first_rc12_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'522px',borderStyle:'solid'};
  let first_rc13_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'};
  let second_rc21_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'};
  let second_rc22_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'};
  let second_rc23_style={borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'};
  */
  //second_rc21_style.minHeight=this.state.srh;
  //second_rc22_style.minHeight=this.state.srh;  
  //second_rc23_style.minHeight=this.state.srh;    
  //window.addEventListener('resize', this.handleResize)
  $(window).resize(()=>{

  })
  
  //$(document).ready(()=>{ });
  return (


    <Container fluid>
                   
          <Row id='fr' style={first_row_style}  >
              <Col id="rc11" style={first_rc11_style} >
              <Image style={{margin:'10px 10px'}} src={rtravel} width="150"  height="150" className="img-fluid" roundedCircle />
              </Col>
              <Col id="rc12"  style={first_rc12_style}>
                  <h1 id='rs'>This is test</h1>
              </Col>
              <Col id="rc13" style={first_rc13_style}>
                
              </Col>
          </Row>
          <Row id='sr' style={second_row_style}>
              <Col id="rc21" style={second_rc21_style}></Col>
              <Col id="rc22" style={second_rc22_style}>
                  <Row></Row>
                  <Row></Row>
              </Col>
              <Col id="rc23" style={second_rc23_style}></Col>
          </Row>


    </Container>


 
  )
}
}
export default App;

first_row_style:{backgroundColor:'darkgrey',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',minWidth:'999px'},
     second_row_style:{backgroundColor:'lightgrey',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minWidth:'999px'},
     first_rc11_style:{borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'},
     first_rc12_style:{borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'522px',borderStyle:'solid'},
     first_rc13_style:{borderWidth:'1px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'},
     second_rc21_style:{borderWidth:'5px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'},
     second_rc22_style:{borderWidth:'5px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'},
     second_rc23_style:{borderWidth:'5px',borderColor:'black',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',borderStyle:'solid'},
    }




     //rc11_width:'185px',
  //rc11_width:'185px',
  //rc12_width:'622px',
  //rc21_width:'185px',
  //rc22_width:'578px',
  //sr_heihgt:'200px'

  var totalHeight=window.innerHeight;
  var totalWidth=window.innerWidth;
  //var fr_height=document.querySelector('#fr').offsetHeight;
  var rc11_width=parseInt(0.22*totalWidth);
  var rc12_width=parseInt(0.66*totalWidth);
  var rc21_width=parseInt(0.22*totalWidth);
  var rc22_width=parseInt(0.66*totalWidth);
  var sr_height=totalHeight-200+'px';
  var rc13_width=totalWidth-rc12_width-rc11_width;
  var rc23_width=totalWidth-rc22_width-rc22_width;
  var pval=parseInt((rc11_width-160)*0.5);
  $(document).ready(()=>{
 
  //var pic_margin={margin:pval+'px '+pval+'px'};

});
  window.onresize=()=>{
    rc11_width=parseInt(0.22*totalWidth);
    rc12_width=parseInt(0.66*totalWidth);
    rc21_width=parseInt(0.22*totalWidth);
    rc22_width=parseInt(0.66*totalWidth);
    sr_height=totalHeight-200+'px';
    rc13_width=totalWidth-rc12_width-rc11_width;
    rc23_width=totalWidth-rc22_width-rc22_width;
    pval=parseInt((rc11_width-160)*0.5);
    pic_margin={margin:pval+'px '+pval+'px'};
  }
  $(window).resize(()=>{
    //this.props.sizeAdj();
    //this.handleResize();
    //let totalHeight=window.innerHeight;
    //let totalWidth=window.innerWidth;
    //let fr_height=document.querySelector('#fr').offsetHeight;
    
      
  })
  var pic_margin={margin:'10px 10px'}
  //console.log(this.props.dstate)
  //$(document).ready(()=>{ });

  let totalHeight=window.innerHeight;
      let totalWidth=window.innerWidth;
      let first_row_height=document.querySelector('#fr').offsetHeight;
      let sr_height=totalHeight-first_row_height+'px';
      //edited_State['screenSize'].second_row_style.Height=second_row_height;
      //state.screenSize.second_row_style.height=second_row_height;
      //state={...state,{screenSize:{...this.state.screenSize,}}}
      //let z=$('#fr').offsetHeight;
      //let x1=Object.assign({},state);
      //console.log('a miracle has happned')
      console.log(state)
      //state=Object.assign({},
      //      {screenSize:Object.assign({},Object.assign({},{height:sr_height }))})
      state=Object.assign(state,
        {screenSize:Object.assign(state.screenSize,
            {second_row_style:Object.assign(state.screenSize.second_row_style,{height:sr_height})},
            )})
      //state={...this.state , { state.screenSize:{...this.state.screenSize} } };
      //state.screenSize=mdScreen;
      console.log(state)
      //let edited_State={...state}
      //edited_State.normal=totalWidth;
      //console.log(edited_State)      
      //console.log(edited_State.normal)

      this.props.dstate.screenSize.


// #################################################################

//##################################################################
      let totalHeight=window.innerHeight;
  //let first_row_height=document.querySelector('#fr').offsetHeight;
  let second_row_height=totalHeight-200+'px';
  var second_row_style;
  var x={};
  for (var key in this.props.dstate.screenSize.second_row_style){
    x[key]=this.props.dstate.screenSize.second_row_style[key];
  };
  second_row_style= $.extend(x,{height:second_row_height});
  

  let totalHeight=window.innerHeight;
  //let first_row_height=document.querySelector('#fr').offsetHeight;
  let second_row_height=totalHeight-200+'px';
  var second_row_style_d;
  var y={};
  for (var key in this.props.dstate.screenSize.second_row_style){
    y[key]=this.props.dstate.screenSize.second_row_style[key];
  };
  //console.log(second_row_height);
  //second_row_style.height=second_row_height;
  //console.log(this.props.dstate.screenSize.second_row_height);
  second_row_style= $.extend(y,{height:second_row_height});
  //second_row_style=second_row_style_d;
  console.log(second_row_style);

  //###############################################################
  //###############################################################

/*

  <FontAwesome className="super-crazy-colors" name="rocket" cssModule={faStyles} size="2x" spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>


  <Col xs={1}style={{backgroundColor:'lightgrey'}}>
                      </Col>
                    
                      <Col xs={8}>
                          <div  className="msg-holder"> 
                      <Image id='test_5'src={rtravel} className="img-fluid margin-pic" thumbnail />
                      </div>
                      </Col>
                      <Col xs={3}>
                            <Image id='test_6'src={rtravel} width="50"  height="50" className="img-fluid" roundedCircle />
            
                      </Col> 
                       
*/
/*
                       .speech-bubble-right:after {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 50%;
                        
                        border: 44px solid transparent;
                        border-left-color: #a1c2e3;
                        border-right: 0;
                        margin-top: -44px;
                        margin-right: -44px;
                      }


                      .speech-bubble-left:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        
                        border: 44px solid transparent;
                        border-right-color:#a1c2e3;
                        border-left: 0;
                        margin-top: -44px;
                        margin-left: -44px;

                        

                        <Row id='msgbox' style={this.props.msstyle}>
                        <Container id='msgbox-con'className="overflow-auto" >
                              <Row className='msgcon'>
                                   <Col id='pic_1' xs={3} style={{backgroundColor:'lightgrey'}}>
                                       <Image id='test_1'src={rtravel} width="60"  height="6 0" className="img-fluid" roundedCircle />
                       
                                   </Col> 
                                 <Col xs={8} style={{backgroundColor:'darkgrey',borderRadius:'15px'}}>
                                     <Container  fluid className="msg-holder"> 
                                         <Container fluid  className="speech-bubble-left">
                                         <p  id='test_2' className="ctext-margin " >
                                           But it could be any element you want and there it is. But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it i, But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it is
                                                                 
                                           </p>
                                                                 
                                         </Container>
                                     <Button variant='outline-light' size='sm'className='icon-pos'>  <FontAwesome className="fa fa-pencil-square-o" name="edit"  /></Button>
                                     <Button variant='outline-light' size='sm' className='icon-pos'><FontAwesome className="fa fa-trash-o" name="delete"  /></Button>
                                      <p><i className="fa fa-calendar-o date-icon-pos" aria-hidden="true"></i> 05-02-2021,20:33</p>
                                     </Container>
                                 </Col>
                                 <Col xs={1}style={{backgroundColor:'lightgrey'}}>
                                 </Col>
                             </Row>
                             <Row className='msgcon'>
                                   <Col xs={1}  style={{backgroundColor:'lightgrey'}}>
                                       
                       
                                   </Col> 
                                 <Col xs={8} style={{backgroundColor:'darkgrey'}}>
                                  <Container  fluid className="msg-holder"> 
                                     <Container fluid  className="speech-bubble-right">
                                     <p  id='test_13' className="ctext-margin" >
                                       But it could be any element you want and there it is. But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it i, But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it is
                                     </p>
                                                             
                                     </Container>
                                 <Button variant='outline-light' size='sm'className='icon-pos'>  <FontAwesome className="fa fa-pencil-square-o" name="edit" /></Button>
                                   <Button variant='outline-light' size='sm' className='icon-pos'><FontAwesome className="fa fa-trash-o" name="delete" /></Button>
                                   <p><i className="fa fa-calendar-o date-icon-pos" aria-hidden="true"></i> 05-02-2021,20:33</p>
                                 </Container>
                                 </Col>
                                 <Col id='pic_2' xs={3} style={{backgroundColor:'lightgrey'}}>
                                       <Image id='test_11'src={rtravel} width="60"  height="6 0" className="img-fluid" roundedCircle />
                       
                                   </Col> 
                             </Row>
           
                             <Row className='msgcon'>
                                     <Col xs={1}  style={{backgroundColor:'lightgrey'}}>
                                       
                       
                                       </Col> 
                                     <Col xs={8} style={{backgroundColor:'darkgrey'}}>
                                      <Container  fluid className="msg-holder"> 
                                         <Container fluid >
                                           <Image id='test_5'src={rtravel} className="img-fluid margin-pic" thumbnail />
                                                                 
                                         </Container>
                                     <Button variant='outline-light' size='sm'className='icon-pos'>  <FontAwesome className="fa fa-pencil-square-o" name="edit" /></Button>
                                       <Button variant='outline-light' size='sm' className='icon-pos'><FontAwesome className="fa fa-trash-o" name="delete" /></Button>
                                       <p><i className="fa fa-calendar-o date-icon-pos" aria-hidden="true"></i> 05-02-2021,20:33</p>
                                     </Container>
                                     </Col>
                                     <Col id='pic_2' xs={3} style={{backgroundColor:'lightgrey'}}>
                                           <Image id='test_11'src={rtravel} width="60"  height="6 0" className="img-fluid" roundedCircle />
                           
                                       </Col> 
           
                             </Row>
                             <Row className='msgcon'>
                                   <Col id='pic_3' xs={2} style={{backgroundColor:'lightgrey'}}>
                                       <Image id='test_11'src={rtravel} width="60"  height="6 0" className="img-fluid" roundedCircle />
                       
                                   </Col> 
                                 <Col xs={8} style={{backgroundColor:'darkgrey'}}>
                                  <Container  fluid className="msg-holder"> 
                                  <Container fluid  className="speech-bubble-left">
                                 <p  id='test-15' className="ctext-margin" >
                                   But it could be any element you want and there it is. But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it i, But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it is
                                   
                                   
                                   </p>
                                                          
                                 </Container>
                                 <Button variant='outline-light' size='sm' className='icon-pos'>  <FontAwesome className="fa fa-pencil-square-o" name="edit" /></Button>
                                   <Button variant='outline-light' size='sm' className='icon-pos'><FontAwesome className="fa fa-trash-o" name="delete"  /></Button>
                                   <p><i className="fa fa-calendar-o date-icon-pos" aria-hidden="true"></i> 05-02-2021,20:33</p>
                                 </Container>
                                 </Col>
                                 <Col style={{backgroundColor:'lightgrey'}}>
                                 </Col>
                             </Row>
                      </Container>
                      </Row>



<a className="preview" href={this.state.data.url}>
                <img src={this.state.data.image} />
                <div>
                    <h4>{this.state.data.title}</h4>
                    <p>{this.state.data.description}</p>
                </div>
          </a>
                    
             

<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact">
    <Sonnet />
  </Tab>
</Tabs>


*/

/*
import React from 'react';
//import WindowSizeListener from 'react-window-size-listener'
//import ReactDOM from 'react-dom';
//import { PauseFill,PlayFill,ArrowUpCircleFill,ArrowDownCircleFill,ArrowCounterclockwise} from 'react-bootstrap-icons'
//import {Button,Container, Card,Row,Col} from  'react-bootstrap';
import { Provider, connect } from 'react-redux'
//import { createStore, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
//import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from 'redux'
//import {Button,Alert,Container,Breadcrumb,InputGroup,Card,Form,FormControl,Row,Col,Image } from  'react-bootstrap';
import {Container,Row,Col } from  'react-bootstrap'
//import styled from 'styled-components';
//import VolumeControl, {VolumeControlEvents } from "react-native-volume-control";
//import Slider from '@react-native-community/slider';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import rtravel from './rtravel.jpg'
import PicSection from './picsec'
import TitleSection from './titsec';
//import SettingSection from './settsec'
import MessageSec from './messec'
import InputSec from './Inputsec'

//#####################################################################################
    //css styling json objects definded here but not used for this app as they are not integrated with redux state, too large
//#####################################################################################

// css styling data below here
/*


const mdScreen={

  first_row_style:{backgroundColor:'darkOrange',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'200px',minWidth:'999px'},
  second_row_style:{backgroundColor:'#5FF15E',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minWidth:'999px'},
  first_rc11_style:{borderWidth:'1px',Width:'12.5%',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'},
  first_rc12_style:{borderWidth:'1px',Width:'75%',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'192px',minWidth:'522px',borderStyle:'solid'},
  first_rc13_style:{borderWidth:'1px',Width:'12.5%',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'192px',minWidth:'185px',borderStyle:'solid'},
  second_rc21_style:{borderWidth:'5px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',height:'100%',borderStyle:'solid'},
  second_rc22_style:{borderWidth:'5px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',height:'100%',borderStyle:'solid'},
  second_rc23_style:{borderWidth:'5px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',height:'100%',borderStyle:'solid'},

};


*/


//css styling data above here


//#####################################################################################
      //redux Actions defined here,
//#####################################################################################




// Action defined here which will be updated as the app grows
const SCHANGE='SCHANGE';
const autoSizeAdj =()=>{
  return {
    type:SCHANGE
  }
};








// Action defined ended here

//#####################################################################################
    //redux default state defined here
//#####################################################################################


// state to be updated which will grow as the ap grows
const defaultState={
  //screenSize:xlScreen,
  //mobileSize:mdScreen,
  normal:65,
  
  
 
}






//states defined ended here
//#####################################################################################
    //reducer function defined here below along with functions
//#####################################################################################
//Action  or reducer functions here functionalites which will grow as the app grows below
const flowControl=(state=defaultState,action)=>{
  //var edited_State=Object.assign({},state);
  switch(action.type){
    case SCHANGE:
      
      let totalHeight=window.innerHeight;
      let first_row_height=document.querySelector('#fr').offsetHeight;
      let second_row_height=totalHeight-first_row_height+'px';
      state.sr_height=second_row_height;
      console.log(state)
  
      return state;
      
        
    default:
      return state;
  }
}







//action functions with switich cases ended here


//#####################################################################################
    //store created here with thunk middleware
//#####################################################################################

//store is created here
//note here flowControl is to be replaced by the name of the funciton created as actions
const chattmain=createStore(flowControl,applyMiddleware(thunk))
//#####################################################################################
    //this is provion for any functions we want to subscribe to the redux store, app may not have one
//#####################################################################################
// subscribed functions written here



//subscribed functions ended here

//#####################################################################################
    // this are functions that are used to map actions and and state props to react component
//#####################################################################################
//mapping states and actions to props in here

const mapStateToProps = (state) => {
  return {dstate: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    sizeAdj: () => {dispatch(autoSizeAdj())}
    


  }
};

//maping states and props ended here

//#####################################################################################
      //React component defined here
//#####################################################################################

class ChattingMain extends React.Component{
  constructor(props){ 
    super(props);
    this.state = {
      srh:0,
    


    }
    //binding done here for function
    this.handleResize=this.handleResize.bind(this)

        
      
  }
  
  componentDidMount(){
     
  }
 
  componentDidUpdate(){
  
  }
  handleResize(){
   
     }
shouldComponentUpdate(){
  return true;
}
/*
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
 }
componentWillUnmount() {
     document.removeEventListener("keydown", this.handleKeyPress);

 }*/
render(){

  //this is where javascript exection are written
//#####################################################################################
    //generall js variables and codes here
//#####################################################################################

  var xlScreen=[

    {backgroundColor:'white',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minWidth:'999px',borderStyle:'solid',borderWidth:'3px'},
    {backgroundColor:'white',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',minHeight:'478px',minWidth:'999px',borderStyle:'solid',borderWidth:'3px'},
    {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'1px 1px 1px 1px',minWidth:'185px',borderStyle:'solid'},
    {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'1px 1px 1px 1px',borderStyle:'solid'},
    {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'1px 1px 1px 1px',minWidth:'185px',borderStyle:'solid'},
    {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',minWidth:'185px',height:'98%',borderStyle:'solid'},
    {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',height:'98%',borderStyle:'solid'},
    {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',minWidth:'185px',height:'98%',borderStyle:'solid'},
    {borderStyle:'solid',borderWidth:'3px',borderColor:'red',margin:'5px 5px 5px 5px',padding:'2px 2px 2px 2px'},
    {borderStyle:'solid',borderWidth:'3px',borderColor:'red',margin:'5px 5px 5px 5px'}
 
  ]
//#####################################################################################
      // on document ready jquery codes
//#####################################################################################
  // this is how we can get parent width and other attributes
  // $("#typehead").parent().width()

  $(document).ready(function(){
  let totalHeight=window.innerHeight;
  //let totalWidth=window.innerWidth;

  let first_row_height=0.15*totalHeight;
  let fr_height=first_row_height+'px';
  let sr_height=0.84*totalHeight-23+'px';
  let sr_height2=totalHeight-210-23+'px';
 
  $('#mbdy').css('height',totalHeight);
    if (parseInt(first_row_height) <= 210){
    $('#fr').css('height','210px' );
       $('#sr').css('height',sr_height2); 

    }else{
      $('#fr').css('height',fr_height );
      $('#sr').css('height',sr_height);  
    }
  //let first_row_height=document.querySelector('#fr').offsetHeight;
  //let sr_height=0.84*totalHeight+'px';
  //$('#sr').css('height',sr_height); 
  $("img").click(function () {
    //alert(this.src);
    //let img_src=this.src
   // alert(<img src='"'+img_src+'"' ></img>)
});

 
})
 //#####################################################################################

//###################################################################################### 
  
//  window.onresize=()=>{//this.handleResize();//};

//#####################################################################################
        // on resize event jquery codes
//#####################################################################################


  $(window).resize((){
   //this.handleResize();
   //this.props.sizeAdj();
   let totalHeight=window.innerHeight;
   $('#mbdy').css('height',totalHeight);
   let first_row_height=0.15*totalHeight;
   let sr_height=0.84*totalHeight-28+'px';
   let fr_height=first_row_height+'px';
   let sr_height2=totalHeight-210-28+'px';

   //console.log(first_row_height);
  
  
   //let second_row_height=totalHeight-first_row_height+'px';
        if (parseInt(first_row_height) <= 210){
        $('#fr').css('height','210px' );
        $('#sr').css('height',sr_height2); 

      }else{
      $('#fr').css('height',fr_height );
      $('#sr').css('height',sr_height);  
      }

        // handling the width of cols
        let tx_height=document.querySelector('#rc22').offsetHeight;
        let ms_height=parseInt(0.89*tx_height)+'px'
        $('#msgbox').css('height',ms_height);
        let in_height=parseInt(0.07*tx_height)+'px'
        $('#inputbox').css('height',in_height);



  
  //console.log(pval_stri);
});
//#####################################################################################

//#####################################################################################
  return (


    <Container fluid style={{minHeight:'999px'}}>
                   
          <Row id='fr'  style={xlScreen[0]}  >
              <PicSection   first_rc11_style={xlScreen[2]} rtravel={rtravel} />
              <TitleSection   normal={this.props.dstate.normal} first_rc12_style={xlScreen[3]}/>
             <SettingSection first_rc13_style={xlScreen[4]}/>     
          </Row>
          <Row id='sr'  height='706px'style={xlScreen[1]}>
              <Col id="rc21" xs={2} style={xlScreen[5]}>

              </Col>
              <Col id="rc22" xs={7} style={xlScreen[6]}>
                  <MessageSec msstyle={xlScreen[8]}/>

                  <InputSec instyle={xlScreen[9]}/>
              </Col>
              <Col id="rc23" style={xlScreen[7]}></Col>
          </Row>


    </Container>


 
  )
}
}

//#####################################################################################
      //connecting my react app to dispatch and state props
//#####################################################################################
//creating wraper here
const Wraper = connect(mapStateToProps, mapDispatchToProps)(ChattingMain);

//#####################################################################################
    // react component used as a wraper to connect my app with redux store 
//#####################################################################################

class App extends React.Component {


  render() {
    return (
      <Provider store={chattmain}>
        <Wraper />
      </Provider>
    );
  }
}

//#####################################################################################
//#####################################################################################
export default App;
*/


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/900x800?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>

  $("img").click(function () {
    //alert(this.src);
    //let img_src=this.src
   // alert(<img src='"'+img_src+'"' ></img>)
   //pic_overlay_src=this.src
   //$('#pic_v').attr('src', this.src);
   //$('#pic_v2').attr('src', this.src);
   $('#pic_v').css('height','600px')
   $('#pic_v2').css('height','600px')

   //$('#pic_v').css('width','300px')
   $('#pic_v').css('margin-top','150px')
   $('#pic_v').css('margin-left','150px')
   $('#pic_v2').css('margin-top','150px')
   $('#pic_v2').css('margin-left','150px')
   $('#picoverlay').css('display','block')

  //alert(<h1>this.src</h1>)
});
$(document).on('keydown', function(event) {
  if (event.key === "Escape") {
    $('#picoverlay').css('display','none')
  }
});


<div id='picoverlay'>

<Carousel>
    <Carousel.Item>
      <img id='pic_v'
        className="d-block w-80"
        
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img id='pic_v2'
        className="d-block w-80"
        
        alt="secondpic"
      />
      
    </Carousel.Item>
   
</Carousel>
</div>


//######################################################################
            //react eventlisenter from freecodecamp
//########################################################################
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener('keydown',this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown',this.handleKeyPress)
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

//######################################################################
            
//########################################################################
<MessageSec msstyle={this.props.xl8} />
className={this.state.totalWidth <= 1200 ? 'fluid' : ''} style={this.state.totalWidth <= 990 ? {minHeight:'999px',marginLeft:'0px',marginRight:'20px'}:{minHeight:'999px'}}

//######################################################################
            //freecode camp using should component update
//########################################################################



class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if(nextProps.value % 2 ===0){
        return true;
    }else{
      return false;
    }
    
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

//######################################################################
            
//########################################################################

//######################################################################
            // sample image on click function
//########################################################################

$("#prc11").click(function () {
           
  //alert(<h1>this.src</h1>)
  let x=$('#picsecoverlay').find('img')
  //console.log(x.length);
 for (let i=0;i<x.length;i++){
            let totalHeight=window.innerHeight;
            //console.log(totalHeight)
            let totalWidth=window.innerWidth;
            //console.log(totalWidth  )
            let pic_width='500';
            //console.log(pic_width)
            //let pic_height='700';
            let carousel_height=document.querySelector('#car').offsetHeight;
            console.log(carousel_height);
            
            //console.log(pic_height)
            let hor_margin=parseInt((totalWidth-pic_width)*0.5)+'px';
            //console.log(hor_margin);
            let ver_margin=parseInt((totalHeight-carousel_height)*0.5)+'px';
            //console.log(ver_margin);
            $('#car').css('margin-left',hor_margin);
            //$('#'+x[i].id).css('margin-top',ver_margin);
            $('#car').css('margin-top',ver_margin);

  }
});

//######################################################################
            
//########################################################################
  the new ready
$(window).on("load", function(){
  // Handler when all assets (including images) are loaded
  // Handler when the DOM is fully loaded
  let totalHeight=window.innerHeight+'px';
  let totalWidth=window.innerWidth+'px';
  $('#picsecoverlay').css({'width':totalWidth,'height':totalHeight})
});
$(window).on("resize", function(){
  // Handler when all assets (including images) are loaded
});

//######################################################################
          // plain javascript syntaxes     
//########################################################################



document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  
});


document.addEventListener("onresize", function(){
  // Handler when the DOM is fully loaded
});
window.addEventListener("resize", myFunction);


/*

<ToolPoper pas_name='Delete' target={this.DeletePoperRef} show={this.state.tooltipshow}/>



<div className="input-group">
<div class="form-outline">
  <input type="search" id="form1" classNameName="form-control" />
 </div>
<button type="button" className="btn btn-outline-dark">
  <i className="fa fa-search"></i>
</button>
</div>


<form class="form-inline">
<input placeholder="Search" type="text" class="search-size form-control">
<button type="button" class="btn btn-outline-dark">
<span aria-hidden="true" class="fa fa-search fa fa-search">
</span>
</button>
</form>


</form>
*/
/*
var xlScreen=[

  {backgroundColor:'white',margin:'3px 3px 3px 0px',minWidth:'999px',borderStyle:'solid',borderWidth:'3px'},
  {backgroundColor:'white',margin:'0px 3px 0px 3px',padding:'1px 1px 1px 1px',minHeight:'478px',minWidth:'999px',borderStyle:'solid',borderWidth:'3px'},
  {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'1px 1px 1px 1px',minWidth:'185px',borderStyle:'solid'},
  {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'1px 1px 1px 1px',borderStyle:'solid'},
  {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'1px 1px 1px 1px',minWidth:'185px',borderStyle:'solid'},
  {borderWidth:'1px',borderColor:'black',margin:'5px 0px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',minWidth:'185px',height:'99%',borderStyle:'solid',backgroundColor:'lightyellow'},
  {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 0px',minHeight:'200px',height:'99%',borderStyle:'solid',backgroundColor:'lightyellow'},
  {borderWidth:'1px',borderColor:'black',margin:'5px 5px 5px 5px',padding:'5px 5px 5px 5px',minHeight:'200px',minWidth:'185px',height:'99%',borderStyle:'solid'},
  {borderStyle:'solid',borderWidth:'1px',borderColor:'red',marginBottom:'10px'},
  {borderStyle:'solid',borderWidth:'0px',borderColor:'red',marginTop:'10px'}

]

*/



/*
<Container fluid>
<InputGroup >
    <FormControl
      id='search_inp'
      placeholder="search"
      style={this.state.inpGroupStyle}
      
    />
    
  </InputGroup>
  
<ButtonGroup style={{marginTop:'5px',marginBottom:'5px',maxWidth:'308px'}}>
  <Button id='mes_wid'size='lg' variant="outline-dark" onClick={()=>{this.setMenueState('Messages')}}  >
    <FontAwesome className='fa fa-comments' name='Messages'/>
    </Button>
  <Button id='con_wid'size='lg' variant="outline-dark"   style={this.state.conButStyle} onClick={()=>{this.setMenueState('Contacts')}} >
    Contacts
    </Button>
  <Button  id='set_wid' size='lg' variant="outline-dark" onClick={()=>{this.setMenueState('Settings')}}  >
    <FontAwesome className="fa fa-bars" name="settings"  />
    </Button>
</ButtonGroup>
</Container>

<Container  fluid id='control-box' className="overflow-auto" >
{(this.state.MenueState === 'Contacts' ) ? data.map(value=>(<ContactView id={value} key={value}  /> )) :
(this.state.MenueState === 'Messages') ? dataM.map(value=>(<MessageView id={value} key={value} passfun={this.setSelectedMessage} /> )) :  (this.state.MenueState === 'Settings') ?
<UserSettingView /> :<Container></Container>}
</Container>



 (<Nav variant="pills" className="flex-column">
                          <Nav.Item >
                            <Nav.Link  className='con-list-group' eventKey="first">Tab 1</Nav.Link>
                          </Nav.Item>
                          <Nav.Item >
                            <Nav.Link  className='con-list-group'eventKey="second">Tab 2</Nav.Link>
                          </Nav.Item>
                        </Nav>)
                          :
                          (<Nav variant="pills" className="flex-column">
                          <Nav.Item >
                            <Nav.Link className='con-list-group' eventKey="first">Tab 1</Nav.Link>
                          </Nav.Item>
                          <Nav.Item >
                            <Nav.Link className='con-list-group' eventKey="second">Tab 2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item >
                            <Nav.Link className='con-list-group' eventKey="third">Tab 3</Nav.Link>
                          </Nav.Item >
                          <Nav.Item >
                            <Nav.Link className='con-list-group' eventKey="fourth">Tab 4</Nav.Link>
                          </Nav.Item>
                        </Nav>)




                              <Nav variant="pills" >
                <Nav.Item >
                  < Container id={this.props.id}  className='mcontact-con' >
                  <Row>
                  <Col xs={4} className='con-class-col'>
                  <Image  onClick={this.setPicShow} className='mcontact-con-img' src={rtravel} width="60"  height="60"  roundedCircle />
                  </Col>
                  <Col className='con-class-colU'>
                    <Nav.Link eventKey={this.props.id} >
                      <Row className='account-owner'><b><p>User Name</p></b></Row>
                      <Row className='text-message-summary'><p>random text summary</p></Row>
                    </Nav.Link>

                  </Col>
                  </Row>
                      
                  </Container>
               </Nav.Item>
             </Nav>



//##########################################################################################################
              <Container  id={this.props.id}  >
               <Nav style={this.state.selectDivColor} bsPrefix='mcontact-con' onSelect={this.setSelectedDivColor}>  
               <Nav.Item>
               <Nav.Link  eventKey={this.props.id}> 
               <Row>
                <Col xs={4} className='con-class-col'>
                 <Image  onClick={this.setPicShow} className='mcontact-con-img' src={rtravel} width="60"  height="60"  roundedCircle />
                </Col>
                
                <Col  className='con-class-colU'>
                
                    <Row className='account-owner'><b><p>User Name</p></b></Row>
                    <Row className='text-message-summary'><p>random text summary</p></Row>
                
                </Col>
               
                </Row>
               
               </Nav.Link>
              </Nav.Item>            
                
              </Nav>



              //#########################################################################################333
               <Tab.Content>
                        <Tab.Pane eventKey="first">
                         
                          <InputSec />
                        </Tab.Pane>
                        <Tab.Pane eventKey="c3">
                          <MessageSec />     
                          <InputSec />

                        </Tab.Pane>
                      </Tab.Content>



                      document.querySelectorAll('.some-class').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})

      //########################################################################3
      mess section fragment
       <React.Fragment>
          <Row id='msgbox' className="overflow-auto">
              <Container id='msgbox-con'>
                  <TextLeft  picid='compOne' imageid='imageOne'/>
                  <TextRight picid='compTwe' imageid='imageTwo'/>
                  <TextLeft picid='compThree' imageid='imageThree'/>
                  <TextRight picid='compFour' imageid='imageFour'/>
                  <TextLeft picid='compFive' imageid='imageFive' />
                  <PicRight picid='compSix' imageid='imageSix' thumimageid='thumFive'/>
                  <PicLeft picid='compSeven' imageid='imageSeven' thumimageid='thumSix'/>
                  <TextLeft picid='compEight' imageid='imageEight'/>
                  <TextRight picid='compNine' imageid='imageNine'/>
                  <LinkLeft  plink={'https://www.youtube.com/watch?v=by7wT7jxwgI'} picid='compTen' imageid='imageTen'/>
                  <LinkRight  plink={'https://www.youtube.com/watch?v=by7wT7jxwgI'} picid='compEleven' imageid='imageEleven'/>

               </Container>
          </Row> 
          
          
           
        </React.Fragment>
   

       //###############################################################33
       picture margin setting
       
       //##############################
              //delclaring passed down prop variables for jquery useage
      //##############################
      var picid=this.props.picid;
      var imageid=this.props.imageid;



style={this.State.minHec}

//##############################
    //
//##############################

//##############################
    //on document load jquery codes
//##############################

$(window).on('load',function(){



//this is adjusting picture margin dynamically based on col container height
//this is going to be modified big time during the maping process once input data has been defined
//jquery gathering all elements with same class is included
//console.log(this.props.picid);
let propic_box_height=document.querySelector('#'+picid).offsetHeight;
let propic_box_width=document.querySelector('#'+picid).offsetWidth;
let propic_left=parseInt((propic_box_width-60)*0.5)+'px';
let propic_top=parseInt((propic_box_height-60)*0.5)+'px';
$('#'+imageid).css('margin-top',propic_top);
$('#'+imageid).css('margin-left',propic_left);






})
//on windows resize events
//############################
//on resize jqeury codes
//###########################
$(window).on('resize',function(){






//this is adjusting picture margin dynamically based on col container height
//this is going to be modified big time during the maping process once input data has been defined
//jquery gathering all elements with same class is included
let propic_box_height=document.querySelector('#'+picid).offsetHeight;
let propic_box_width=document.querySelector('#'+picid).offsetWidth;
let propic_left=parseInt((propic_box_width-60)*0.5)+'px';
let propic_top=parseInt((propic_box_height-60)*0.5)+'px';
$('#'+imageid).css('margin-top',propic_top);
$('#'+imageid).css('margin-left',propic_left);



})

//################################

//##################################### 



  //##############################
              //delclaring passed down prop variables for jquery useage
      //##############################
                var picid=this.props.picid;
                var imageid=this.props.imageid;
                var thumimageid=this.props.thumimageid;





         //##############################
              //
      //##############################

      //##############################
              //on document load jquery codes
      //##############################
     
     $(window).on('load',function(){
 
      
      try {
        
     
      //this is adjusting picture margin dynamically based on col container height
      //this is going to be modified big time during the maping process once input data has been defined
      //jquery gathering all elements with same class is included
      //console.log(this.props.picid);
      let propic_box_height=document.querySelector('#'+picid).offsetHeight;
      let propic_box_width=document.querySelector('#'+picid).offsetWidth;
      let propic_left=parseInt((propic_box_width-60)*0.5)+'px';
      let propic_top=parseInt((propic_box_height-60)*0.5)+'px';
      $('#'+imageid).css('margin-top',propic_top);
      $('#'+imageid).css('margin-left',propic_left);


        //this is addjusting the message picuter margin automatically
       // let cont_height=$('.msg-holder').offsetHeight;
        let cont_width=$('.msg-holder').offsetWidth;
        let img_hor_width=cont_width-20+'px';
       // let img_ver_height=cont_height-20+'px';
          $('#'+thumimageid).css('width',img_hor_width);
         // $('#'+thumimageid).css('height',img_ver_height);
         // $('#'+thumimageid).css('margin-top','5px');
          //$('#'+thumimageid).css('margin-left','5px');
    
  
        } catch (error) {
        
        }

    



    })
      //on windows resize events
      //############################
          //on resize jqeury codes
      //###########################
      $(window).on('resize',function(){
     
     

    

        try{
        //this is adjusting picture margin dynamically based on col container height
      //this is going to be modified big time during the maping process once input data has been defined
      //jquery gathering all elements with same class is included
      let propic_box_height=document.querySelector('#'+picid).offsetHeight;
      let propic_box_width=document.querySelector('#'+picid).offsetWidth;
      let propic_left=parseInt((propic_box_width-60)*0.5)+'px';
      let propic_top=parseInt((propic_box_height-60)*0.5)+'px';
      $('#'+imageid).css('margin-top',propic_top);
      $('#'+imageid).css('margin-left',propic_left);



       //this is addjusting the message picuter margin automatically
       // let cont_height=$('.msg-holder').offsetHeight;
       let cont_width=$('.msg-holder').offsetWidth;
       let img_hor_width=cont_width-20+'px';
      // let img_ver_height=cont_height-20+'px';
         $('#'+thumimageid).css('width',img_hor_width);
        // $('#'+thumimageid).css('height',img_ver_height);
        // $('#'+thumimageid).css('margin-top','5px');
         //$('#'+thumimageid).css('margin-left','5px');
        } catch (error) {
        
        }




      })
        


      ######################################################################################

 /*
          axios.post('http://192.168.10.3:5000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })


          */
         //console.log(fileUpload.files[0])
         //let formData = new FormData(fileUpload.files[0]);
         //console.log(formData)
        
         /*
         axios.post('http://192.168.10.3:5000/upload', formData,{ headers: {
          'Content-Type': 'multipart/form-data'
        }})
             .then(res => {
                 console.log({res});
             }).catch(err => {
                 console.error({err});
             });




  $(window).on('load',function(){

      try {
        fa-delete
      //this is setting max height for messeage box container
      let msgbox_height=document.querySelector('#msgbox').offsetHeight;
      let msgbox_con_max_height=msgbox_height-15+'px';
      $('#msgbox-con').css('max-height',msgbox_con_max_height);
      
    } catch (error) {
        
    }

    })
      //on windows resize events
      //############################
          //on resize jqeury codes
      //###########################
      $(window).on('resize',function(){
        try {
          
        
     //############################################################
      //this section is to control msg view area size
        let tx_height=$('#rc22').offsetHeight;
        let ms_height=parseInt(0.89*tx_height)+'px'
      $('#msgbox').css('height',ms_height);
      //console.log(tx_height);
        
        //this is setting max height for messeage box container
      let msgbox_height=document.querySelector('#msgbox').offsetHeight;
      let msgbox_con_max_height=msgbox_height-15+'px';
      $('#msgbox-con').css('max-height',msgbox_con_max_height);
    } catch (error) {
          
    }
   
      })

      //################################

      //#####################################









             
              */

  //#################################################################################################
 // ################sass mixin using sample
 // #################################################################################################
  /*
  <style type='text/scss'>
  
  @mixin border-radius($radius)
  {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius:$radius;
  }
    #awesome {
      width: 150px;
      height: 150px;
      background-color: green;
      @include border-radius(15px);
    }
    
  </style>
  
  <div id="awesome"></div>
  
  <style type='text/scss'>
  
  @mixin border-stroke($val){
    @if $val== light {
      border:1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }
  
    #box {
      width: 150px;
      height: 150px;
      background-color: red;
      @include border-stroke(medium);
    }
  </style>
  
  <div id="box"></div>
  
  
  
  
  ###############################################33
  #both do the same thing with loop, key diffrence being the "through" and "to" key workds
  ################################################33
  @for $i from 1 through 5 {
    .text-#{$i} {
      font-size:15*$i;
    }
  }
  
  
  
  
  @for $i from 1 to 6 {
    .text-#{$i} {
      font-size:15*$i;
    }
  }
  
  
  <p class="text-1">Hello</p>
  <p class="text-2">Hello</p>
  <p class="text-3">Hello</p>
  <p class="text-4">Hello</p>
  <p class="text-5">Hello</p>
  ###############################################################
  
  ##############################################################
  <style type='text/scss'>
  
  $colors:(color1:blue,color2:black,color3:red);
  
  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  };
  
    div {
      height: 200px;
      width: 200px;
    }
  </style>
  
  <div class="blue-bg"></div>
  
  <div class="red-bg"></div>
  <div class="black-bg"></div>
  ##########################################################3
  
  ###############################################################
  
  <style type='text/scss'>
  
  $x: 1;
  @while $x < 6 {
    .text-#{$x} { font-size: 15* $x;}
    $x: $x + 1;
  }
  
  </style>
  
  <p class="text-1">Hello</p>
  <p class="text-2">Hello</p>
  <p class="text-3">Hello</p>
  <p class="text-4">Hello</p>
  <p class="text-5">Hello</p>
  ################################################################
  
  ##################################################################
  
  Write an @import statement to import a partial named _variables.scss into the main.scss file.
  @import 'variables'
  ################################################################
  
  ##################################################################
    .info{
      width: 200px;
      border: 1px solid black;
      margin: 0 auto;
    }
  .info{
    
  }
  .info-important{
    @extend .info;
    background-color:magenta;
  }
  
  */
  
 // #################################################################################################
  
 // #################################################################################################
/*


//#####################################################################################
//#####################################################################################
      //redux Actions defined here,
//#####################################################################################



//
// Action defined here  for routing state store which will be updated as the app grows
const LOGIN='LOGIN';
const setLogIn =()=>{
  return {
    type:LOGIN
  }
};
const LOGOUT='LOGOUT';
const setLogOut =()=>{
  return {
    type:LOGOUT
  }
};









// Action defined ended here

//#####################################################################################
    //redux default state defined here
//#####################################################################################


//  routing state to be updated which will grow as the ap grows
const routedefaultState={
  
  login_status:false,
}





//states defined ended here
//#####################################################################################
    //routing reducer function defined here below along with functions
//#####################################################################################
// routing store Action  or reducer functions here functionalites which will grow as the app grows below
const routingControl=(state=routedefaultState,action)=>{
  //var edited_State=Object.assign({},state);
  switch(action.type){
    case LOGIN:
      
      //let totalHeight=window.innerHeight;
      //let first_row_height=document.querySelector('#fr').offsetHeight;
      //let second_row_height=totalHeight-first_row_height+'px';
      //state.sr_height=second_row_height;
      //console.log(state)
      state.login_status=true;
      console.log(state)
      return state;
    case LOGOUT:
      state.login_status=false;
      return state;
    default:
        return state;
  }
}

//action functions with switich cases ended here


//#####################################################################################
    //store created here with thunk middleware
//#####################################################################################

//store is created here
//note here flowControl is to be replaced by the name of the funciton created as actions

const routesource=createStore(routingControl,applyMiddleware(thunk))
//#####################################################################################
    //this is provion for any functions we want to subscribe to the redux store, app may not have one
//#####################################################################################
// subscribed functions written here



//subscribed functions ended here

//#####################################################################################
    // this are functions that are used to map actions and and state props to react component
//#####################################################################################
// the following states are to map routesource state 
const rmapStateToProps = (state) => {
  return {routestate: state}
};

const rmapDispatchToProps = (dispatch) => {
  return {
    setLogIn: () => {dispatch(setLogIn())},
    setLogOut: () => {dispatch(setLogOut())},
 
    


  }
};

//maping states and props ended here

//#####################################################################################
      //React component defined here
//#####################################################################################



//#####################################################################################
    // react protected route for rendering protected elements
//####################################################################################

//#####################################################################################
      //connecting my react app to dispatch and state props
//#####################################################################################
//creating wraper here

const TeleLogging=connect(rmapStateToProps, rmapDispatchToProps)(LoginPage);

const TeleProtected=connect(rmapStateToProps, rmapDispatchToProps)(TeleRouter);
//const TeleSignin=connect(mapStateToProps, mapDispatchToProps)(SignInPage);

//#####################################################################################
    // react component used for routing passed in component based on resource
//#####################################################################################
class Protected extends React.Component{
  
  render ()
  {return (
    this.props.dstate.login_status ? 
    (<Route exact path={this.props.path} component={this.props.component} />) :
    (<Redirect to={this.props.redirect}/>)
  )
}

}
//#####################################################################################
    // react protected route for rendering not protected elements elements
//####################################################################################
class SignInPage extends React.Component{
 
 
  render ()
  {return (
    !this.props.dstate.login_status ? 
    (<Route exact path={this.props.path} component={this.props.component} />) :
    (<Redirect to={this.props.redirect}/>)
  )
}

}
class Protected extends React.Component{
  
  render ()
  {return (
    this.props.dstate.login_status ? 
    (<Route exact path={this.props.path} component={this.props.component} />) :
    (<Redirect to={this.props.redirect}/>)
  )
}

}
//#####################################################################################
    // react protected route for rendering not protected elements elements
//####################################################################################
class SignInPage extends React.Component{
 
 
  render ()
  {return (
    !this.props.dstate.login_status ? 
    (<Route exact path={this.props.path} component={this.props.component} />) :
    (<Redirect to={this.props.redirect}/>)
  )
}

}

*/

 //################################################################################################

 //#########################################################################################################

 if (this.state.current_location === '/login' || this.state.current_location ==='/' ){
  {
    return (
      <LoginPage />
    )
  }
else if(this.state.current_location ==='/transtext'){
  return (
    <TextPort />
  )
}
else if(this.state.current_location ==='/MarkDown'){
  return (
    <MarkDown />
  )
}
else if(this.state.current_location ==='/clock'){
  return (
    <Clock />
  )
}
else{
  return (
    <Page404 />
  )
}

} 
<Card>
<Card.Img src='https://picsum.photos/200/10'></Card.Img>
<Card.Body>
<Card.Title style={{textAlign:'center'}}> <h1>FCC Pomodoro Clock</h1></Card.Title>
</Card.Body>

</Card>


<div class="card" >

          <div class="card-body">
         
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">SampleApp</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">FCC</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Chatting</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">Login</a>
                </li>
              </ul>
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          
        </div>
      </div>


      this.state.profile_pic_url ? this.state.profile_pic_url.slice(-1)[0]: "/static/media/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
      /static/media/travel-3351825_960_720.1ab0a1c1.jpg
      /static/media/marvin-meyer-SYTO3xs06fU-unsplash.jpg