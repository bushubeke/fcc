import React from 'react';
import './mainsrc.css'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {Container,Row } from  'react-bootstrap'
//######################################################################
import rtravel from './marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import PicSection from './picsec'
import TitleSection from './titsec';
import NavSection from './navsec'
//########################################################################
import {BrowserView,MobileView} from 'react-device-detect'
import Cookies from 'js-cookie'


//#####################################################################################
      //redux Actions defined here,
//#####################################################################################
// Action defined here  for application state store which will be updated as the app grows
const SCHANGE='SCHANGE';
const setStateChange =()=>{
  return {
    type:SCHANGE
  }
};
const FIRSTUPDATE='FIRSTUPDATE';
const setFirstUpdate =()=>{
  return {
    type:FIRSTUPDATE
  }
};








// Action defined ended here

//#####################################################################################
    //redux default state defined here
//#####################################################################################

// application state to be updated which will grow as the ap grows
const defaultState={
  
  working:true,
  email:'',
  username:'',
  token:'',
  userid:'',
}




//states defined ended here

//#####################################################################################
    // chatting main reducer function defined here below along with functions
//#####################################################################################st flowControl=(state=defaultState,action)=>{
  const flowControl=(state=defaultState,action)=>{
    //var edited_State=Object.assign({},state);
    switch(action.type){
      case SCHANGE:
        
        
        return state;
     case FIRSTUPDATE:
       let x=Cookies.getJSON()
       //console.log(x)
       state.email=x.email
       state.username=x.username
       state.token=x.token
       state.userid=x.userid
       //console.log(state)
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
const appsource=createStore(flowControl,applyMiddleware(thunk))

//#####################################################################################
    //this is provion for any functions we want to subscribe to the redux store, app may not have one
//#####################################################################################
// subscribed functions written here



//subscribed functions ended here

//#####################################################################################
    // this are functions that are used to map actions and and state props to react component
//#####################################################################################
//mapping states and actions to props in here
// the following states are to map appsource state 
const mapStateToProps = (state) => {
  return {appstate: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    setState: () => {dispatch(setStateChange())},
    setFirstUpdate: () => {dispatch(setFirstUpdate())}
 
    


  }
};


//maping states and props ended here
//#####################################################################################
      //connecting my react app to dispatch and state props
//#####################################################################################
//creating wraper here
const TelePic = connect(mapStateToProps, mapDispatchToProps)(PicSection);
const TitlePic = connect(mapStateToProps, mapDispatchToProps)(TitleSection);
const NavSec = connect(mapStateToProps, mapDispatchToProps)(NavSection);






//#####################################################################################
      //React component defined here
//#####################################################################################


class ChattingMain extends React.Component{
  constructor(props){ 
    super(props);
    this.state = {
      srh:0,
      username:'',
   
      email:'',
     
    


    }
    //binding done here for function
    //this.handleResize=this.handleResize.bind(this)
    //this.setFandSrStyle=this.setFandSrStyle.bind(this);
    //this.firstCompRequest=this.firstCompRequest.bind(this)
        //this.set_window_height=this.set_window_height.bind(this);
        //this.clockStop=this.clockStop.bind(this)
        //this.resetClo=this.resetClo.bind(this)
    
      
  }
  //this is where java script function are made
  //also component will mount will be placed here
  // this is where the bind this functions are used
   //###############################################################################################
   componentDidMount() {
     //Cookies.get('username')
    let logstat=Cookies.getJSON();
    if(!logstat.loggedin){
        document.location.assign('/')
    }else{
      this.props.setFirstUpdate()
    }
   // this.setFandSrStyle()
    //window.addEventListener('resize',this.setFandSrStyle)
    //this.props.firstGetRequest();
    //this.firstCompRequest()
    //setTimeout(this.setState({first_name:this.props.first_name}),1000)
    
  }
  //###############################################################################################
  componentWillUnmount() {
    //window.removeEventListener('resize',this.setFandSrStyle)
    //window.removeEventListener('resize',this.setMsgBoxStyle)
    
  }
  //###############################################################################################
  
  //###############################################################################################
  
//########################################################################################3
shouldComponentUpdate(){
  return true;
}
//########################################################################################3

//########################################################################################3
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

  

//#####################################################################################

//#####################################################################################
  return (

       <Container id='all-app'fluid >
           
          <BrowserView>
             <Container >  
                 <Row id='fr'   >
                     <TelePic   travel={rtravel} />
                      <TitlePic  />
                  </Row>
                  <NavSec  id='sr'    />
             </Container>
          </BrowserView>
           <MobileView>
                <h1>Mobile view will soon be developed</h1>
            </MobileView>
    </Container>
   

 
  )
}
}



//#####################################################################################
      //connecting my react app to dispatch and state props
//#####################################################################################
//creating wraper here

const TeleChatt = connect(mapStateToProps, mapDispatchToProps)(ChattingMain);




class TextPort extends React.Component {


    render() {
      return (
        <Provider store={appsource}>
        
                <TeleChatt />
           
        </Provider>
      );
    }
  }
  
export default TextPort;

