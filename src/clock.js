import React from 'react';
//import WindowSizeListener from 'react-window-size-listener'
//import ReactDOM from 'react-dom';
import { PauseFill,PlayFill,ArrowUpCircleFill,ArrowDownCircleFill,ArrowCounterclockwise} from 'react-bootstrap-icons'
import {Button,Container, Card,Row,Col,NavDropdown,Navbar,Nav} from  'react-bootstrap';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
import { Link } from "react-router-dom";
// import { createStore, combineReducers, applyMiddleware } from 'redux'
//import {Button,Alert,Container,Breadcrumb,InputGroup,Card,Form,FormControl,Row,Col } from  'react-bootstrap';
//import styled from 'styled-components';
//import VolumeControl, {VolumeControlEvents } from "react-native-volume-control";
//import Slider from '@react-native-community/slider';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
const INCBREAK='INCBREAK', DECBREAK='DECBREAK',INCSESSION='INCSESSION',DECSESSION='DECSESSION',STARTCLOCK='STARTCLOCK', STOPCLOCK='STOPCLOCK',RESETCLOCK='RESETCLOCK';
const RESETSIZE='RESETSIZE',SETSTATUS='SETSTATUS';
const xlScreen={
  con1:{minHeight:'100%'},
  con2:{minWidth:'400px',maxWidth:'500px',borderWidth:'1px',borderColor:'black',borderStyle:'solid',
  borderRadius:'10px',backgroundColor:' #FF9900',minHeight:'200px',textAlign:'center'},
  colSt:{backgroundColor:'lightyellow',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',
  borderRadius:'5px'},
  pstyleT:{fontSize:'25px',fontWeight:'bold',margin:'20px'},
  pstyle:{fontSize:'15px',fontWeight:'bold',margin:'5px'},
  pstyleC:{fontSize:'25px',fontWeight:'bold',margin:'3px'},
  colStyleP:{maxWidth:'200px', backgroundColor:'lightyellow',borderRadius:'20px',
  borderWidth:'4px',borderColor:'black',borderStyle:'solid'},
  colSt2:{margin:'2px 2px 2px 2px'}

}
var myPlayControl;
//this is default state
const defaultState={
  breakLength:5,
  sessionLength:25,
  sessionMinutes:25,
  sessionSeconds:0,
  playing:false,
  controlSession:25,
  screenSize:xlScreen,
  sessionLable:'Session',
  
 

}
//this are defaulte actions
const incBreak =()=>{
    return {
      type:INCBREAK
    }
};
const decBreak =()=>{
  return {
    type:DECBREAK
  }
 };
const incSession=()=>{
  return {
    type:INCSESSION
  }
};
const decSession=()=>{
  return {
    type:DECSESSION
  }
}
const startClock =()=>{
  return {
    type:STARTCLOCK
    
  }
};
const stopClock =()=>{
  return {
    type:STOPCLOCK,
    
  }
};
const resetClock =()=>{
  return {
    type:RESETCLOCK
  }
};
const resetSize =()=>{
  return {
    type:RESETSIZE
  }
};
const setStatus =()=>{
  return {
    type:SETSTATUS
  }
}


// this is the end of action types
//const Provider = ReactRedux.Provider;
//const connect = ReactRedux.connect;
// this is the reducer
//var myCounter=setInterval(()=>{pomodo.dispatch(counterSession())},1000);
const cflowControl=(state=defaultState,action)=>{
  var x=Object.assign({},state);
  switch(action.type){
    case INCBREAK:
          //let x1=Object.assign({},state);
          let y1
          y1=x.breakLength+1;
          if(y1>60){
            x.breakLength=60;
            x.sessionSeconds=0;
          }else{
          x.breakLength=y1;
          x.sessionSeconds=0;
          }
          
      return x;
      
    case DECBREAK:
      //let x2=Object.assign({},state);
      let y2=x.breakLength-1;
      if(y2<=0){
        x.breakLength=1;
        x.sessionSeconds=0;
      }else{
        x.breakLength=y2;
        x.sessionSeconds=0;
      }
     
      return x;
      
    case INCSESSION:
      //let x3=Object.assign({},state);
      let y3=x.sessionLength+1;
      if(y3>60){
        x.sessionLength=60;
        x.sessionMinutes=60;
        x.sessionSeconds=0;
      }else{
        x.sessionLength=y3;
        x.sessionMinutes=y3;
        x.sessionSeconds=0;
      }
      
      return x;
     
    case DECSESSION:
      //let x4=Object.assign({},state);
      let y4=x.sessionLength-1;
      if(y4<=0){
        x.sessionLength=1;
        x.sessionMinutes=1;
        x.sessionSeconds=0;
      }else{
        x.sessionLength=y4;
        x.sessionMinutes=y4;
        x.sessionSeconds=0;
      }
      
      return x;
      
    case STARTCLOCK:
      //let x5=Object.assign({},state)
      let cbl=x.breakLength;
      let csl=x.sessionLength;
       if(x.sessionMinutes===0 && x.sessionSeconds===0){
        x.sessionSeconds=0;
        x.controlSession=cbl;
        //x.audio=action.src;
        //x.audio.play();
        //$('#beep').play()
        //action.src()
        //console.log(x.audio)
        if(x.sessionLable==='Session'){
          x.sessionLable='Break'
          x.sessionMinutes=cbl;
        }else{
          x.sessionLable='Session'
          x.sessionMinutes=csl;
        }
         myPlayControl=0;  
           
        }else {
            if(x.sessionSeconds===0){
              x.sessionSeconds=59;
              let h=x.sessionMinutes;
              x.sessionMinutes=h-1;
            }else{
              let r=x.sessionSeconds
              x.sessionSeconds=r-1;
            }
        }
            
         return x; 
    case STOPCLOCK:
        //let x6=Object.assign({},state)
        //x.audio.pause();
        //x.audio.currentTime=0;  
        //$('#beep').pause();
        //$('#beep').currentTime=0;
        x.playing=false;
        myPlayControl=1;
          //clearInterval(myCounter)
      return x;
    case SETSTATUS:
      //let x7=Object.assign({},state)  
      x.playing=true;        
        return x;
    case RESETSIZE:
      return state;
     
    case RESETCLOCK:
      //let x9=Object.assign({},state)
      x.sessionLength=25;
      x.breakLength=5;
      x.sessionMinutes=25;
      x.sessionSeconds=0;
      x.sessionLable='Session';
      x.controlSession=0;
      x.playing=false;
      myPlayControl=1;
      //x.audio.pause();
      //x.audio.currentTime=0;
      //$('#beep').pause();
      //$('#beep').currentTime=0;
      return x;
    
    default:
        return state;
        
  }
}
//console.log(window.location.pathname)
//here is my redux store 
const pomodo=createStore(cflowControl,applyMiddleware(thunk))


function myPlaySound (){
  if(myPlayControl===0){
    $('#beep')[0].play()
    console.log()
  }
}
function myStopSound(){
  if(myPlayControl===1){
  try {
    $('#beep')[0].pause();
    $('#beep')[0].currentTime=0;
  
  } catch (error) {
    console.log('just precaution')
  }
   
  }
}
pomodo.subscribe(myPlaySound);
pomodo.subscribe(myStopSound)
// the following is mapping states and dispatch to props
const cmapStateToProps = (state) => {
  return {timer: state}
};

const cmapDispatchToProps = (dispatch) => {
  return {
    addBLength: () => {dispatch(incBreak())},
    subBLength: ()=>{ dispatch(decBreak()) },
    addSLength: ()=>{ dispatch(incSession())},
    subSLength: ()=>{dispatch(decSession())},
    pstart:()=>{dispatch(startClock())},
    pstop:()=>{dispatch(stopClock())},
    resetC:()=>{dispatch(resetClock())},
    resizeScreen:()=>{dispatch(resetSize())},
    pstatus:()=>{dispatch(setStatus())}


  }
};
var con;

class Bushu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      minHe:{minHeight:'450px'}
    }
    this.clockStart=this.clockStart.bind(this);
    this.clockStop=this.clockStop.bind(this)
    this.resetClo=this.resetClo.bind(this)
    this.setminHe=this.setminHe.bind(this)
   
  }
 
  //#############################################################################3
  setminHe(){
    let totalHeight=window.innerHeight;
    let h=document.querySelector('#clk-card-id').offsetHeight;
    let adh=totalHeight-h-10+'px'
    this.setState({ minHe:{minHeight:adh}})
  
  
  }


  //################################################################################
  clockStart(){
    //let x=!this.state.status;
    //console.log(this.state.status)
    //let myM=$('#beep').attr('src');
    //console.log(myM);
    
    $('#break-decrement').attr('disabled',true);
    $('#break-increment').attr('disabled',true);
    $('#session-decrement').attr('disabled',true);
    $('#session-increment').attr('disabled',true);
    
  
  
 
    
  //console.log(this.props.timer.audio)
    this.props.pstatus();
   con=setInterval(()=>{this.props.pstart()},1000);
   //var con= setInterval(()=>{this.props.timer.mycounter(myM)},1000);
    
    
    
   
  }
  //#############################################################################3
componentDidMount(){
    this.setminHe()
    document.addEventListener('resize',this.setminHe())
}
componentWillUnmount(){
  document.removeEventListener('resize',this.setminHe())
}


  //################################################################################
  clockStop (){
  $('#break-decrement').attr('disabled',false);
  $('#break-increment').attr('disabled',false);
  $('#session-decrement').attr('disabled',false);
  $('#session-increment').attr('disabled',false);
  
    clearInterval(con);
    //clearInterval(this.props.timer.mycounter);
    this.props.pstop()
    //this.props.timer.audio.pause();
    //this.props.timer.audio.currentTime = 0;
    
  }

  //#############################################################################3



  //################################################################################
 resetClo(){
  $('#break-decrement').attr('disabled',false);
  $('#break-increment').attr('disabled',false);
  $('#session-decrement').attr('disabled',false);
  $('#session-increment').attr('disabled',false);
  
    clearInterval(con);
    //clearInterval(this.props.timer.mycounter);
    this.props.pstop();
    this.props.resetC();
    //this.props.timer.audio.pause();
    //this.props.timer.audio.currentTime = 0;

 }

  //#############################################################################3



  //################################################################################
  render(){
  //let myM=$('#beep').attr('src');
  //console.log(myM);
  //var myM=$('#beep').attr('src');
  //console.log(myM)
  //var audio = new Audio(myM);
 
  const colStyle={backgroundColor:'lightyellow',margin:'3px 3px 3px 3px',padding:'1px 1px 1px 1px',
  borderRadius:'5px'};
  const colStyleP={maxWidth:'200px', backgroundColor:'lightyellow',borderRadius:'20px',
  borderWidth:'4px',borderColor:'black',borderStyle:'solid'};
  const contStyle={minWidth:'400px',maxWidth:'500px',borderWidth:'1px',borderColor:'black',borderStyle:'solid',
  borderRadius:'10px',backgroundColor:' #FF9900',minHeight:'200px',textAlign:'center'}
  //const contStyleT={width:'900px',borderWidth:'1px',borderColor:'black',borderStyle:'solid',
  //borderRadius:'10px',backgroundColor:' #FF9900',minHeight:'200px',textAlign:'center'}
  //xs={1} sm={1}  md={1} xl={1} 
    return (
      
      <Container  fluid className='clock-con'>
                  <Row id='clk-card-id'>
                    <Container fluid>
                    <Card>
                         
                          <Card.Body>
                          <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">SPA</Navbar.Brand>
                            <Nav className="mr-auto">
                              <Nav.Link href="/home">Home</Nav.Link>
                              <Nav.Link href="/transtext">TransText</Nav.Link>
                              
                              <NavDropdown title="FCC" id="basic-nav-dropdown">
                                 <NavDropdown.Item > <Link to="/pages/docktest/clock">FCC clock </Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/pages/docktest/calc">FCC Calculator</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/pages/docktest/markdown">FCC MarkDown</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/pages/docktest/drum">FCC Drum</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/pages/docktest/random">FCC Random Quote</Link></NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                            </Navbar>
                          </Card.Body>

                    </Card>
                    </Container>
                    </Row>
                   <Row>
                   
                    <Container className='d-flex h-100 check'   style={this.state.minHe}>
                        <Container   style={contStyle} className='align-self-center' >
                        <Row  style={{ minHeight:'80px'}}> 
                                <Col  style={colStyle}><p style={{fontSize:'25px',fontWeight:'bold',margin:'20px'}} >Pomodoro Clock</p></Col>
                                
                        </Row>
                        <Row > 
                                <Col  style={colStyle}><p  id="break-label" style={{fontSize:'15px',fontWeight:'bold',margin:'5px'}} >Break Length</p></Col>
                                <Col style={colStyle}><p id="session-label" style={{fontSize:'15px',fontWeight:'bold',margin:'5px'}}>Session Length</p></Col>
                        </Row>
                        <Row  style={{ minHeight:'50px'}}> 
                                <Col  style={colStyle}>
                              
                                      <Row style={{margin:'auto'}}>
                                        <Col style={{margin:'2px 2px 2px 2px'}}   > 
                                            <Button    style={{width:'100%',height:'100%'}}  onClick={this.props.subBLength}variant="outline-secondary"  id="break-decrement"  >
                                              <ArrowDownCircleFill size={25}/>
                                            </Button>
                                        </Col>
                                        <Col style={{margin:'2px 2px 2px 2px'}}  >
  <p  style={{fontSize:'25px',fontWeight:'bold',margin:'3px'}}  id='break-length'>{this.props.timer.breakLength}</p>
                                        </Col>
                                        <Col style={{margin:'2px 2px 2px 2px'}} >
                                            <Button style={{width:'100%',height:'100%'}} onClick={this.props.addBLength} variant="outline-secondary" id="break-increment">
                                            <ArrowUpCircleFill size={25}/>
                                             </Button>
                                        </Col>
                                      </Row>
                                </Col>
                                <Col style={colStyle}>
                                      <Row style={{margin:'auto'}}>   
                                          <Col style={{margin:'2px 2px 2px 2px'}}>        
                                              <Button style={{width:'100%',height:'100%'}}  onClick={this.props.subSLength} variant="outline-secondary"  id="session-decrement" >
                                              <ArrowDownCircleFill size={25} />
                                              </Button>
                                          </Col>
                                          <Col style={{margin:'2px 2px 2px 2px'}}>
                                              <p  style={{fontSize:'25px',fontWeight:'bold',margin:'3px'}}  id="session-length" >{this.props.timer.sessionLength}</p>
                                          </Col>
                                          <Col style={{margin:'2px 2px 2px 2px'}}>
                                            <Button  style={{width:'100%',height:'100%'}} onClick={this.props.addSLength} variant="outline-secondary"  id="session-increment" >
                                            <ArrowUpCircleFill size={25} />
                                            </Button>
                                          </Col>
                                      </Row>  
                                </Col>
                        </Row>
                        <Row  style={{ minHeight:'70px'}}> 
                                <Container style={colStyleP} >
  <div id="timer-label" style={{fontSize:'20px',fontWeight:'bold'}}>{this.props.timer.sessionLable}</div>
                                  <div id="time-left" style={{fontSize:'30px',fontWeight:'bold',fontFamily:'digtal'}}>
                                              {(this.props.timer.sessionMinutes)<10? '0'+this.props.timer.sessionMinutes:this.props.timer.sessionMinutes }:
                                              {(this.props.timer.sessionSeconds)<10? '0'+this.props.timer.sessionSeconds:this.props.timer.sessionSeconds}</div>
                                </Container>
                                
                        </Row>
                        <Row  style={{ minHeight:'80px'}}> 
                                <Col  style={colStyle}>
                                   <Button variant="outline-secondary" onClick={!this.props.timer.playing ? this.clockStart : this.clockStop} style={{width:'100%',height:'100%'}} 
                                      id="start_stop">
                                    {this.props.timer.playing ?  <PauseFill size={45}/> :<PlayFill size={45}/> }
                                    </Button>
                                </Col>
                                <Col  style={colStyle}>
                                <Button  style={{width:'100%',height:'100%'}} onClick={this.resetClo} variant="outline-secondary"  id="reset">
                                  <ArrowCounterclockwise size={45}/></Button>
                                </Col>
                                <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
                        </Row>
                        </Container >
                    </Container>
                    </Row>
        </Container>
    )
  };
}
const Wraper = connect(cmapStateToProps, cmapDispatchToProps)(Bushu);

class Clock extends React.Component {
  render() {
    return (
      <Provider store={pomodo}>
        <Wraper />
      </Provider>
    );
  }
};

export default Clock;