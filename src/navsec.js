import React from 'react';
import { Container,Button,ButtonGroup,InputGroup} from  'react-bootstrap'
import {FormControl,Col,Row } from 'react-bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.css'
//import UserContactView from './controlsec/contacts'
//import ContactView from './controlsec/contacts'
//import UserMessageView from './controlsec/messages'
import MessageView from './controlsec/messages'
import UserSettingView from './controlsec/settings'
//import rtravel from './rtravel.jpg'
import MessageSec from './messec'
import InputSec from './Inputsec'
//import PicPoper from './popover/picpopover'
import ContactView from './controlsec/contacts';

//##################################################################
/*
import TextLeft from './messag/textleft'
import TextRight from './messag/textright'
import PicRight from './messag/picright'
import PicLeft from './messag/picleft'
import LinkLeft from './messag/linkleft'
import LinkRight from './messag/linkright'
*/



//##############################################################

class NavSection extends React.Component {
    constructor(props){ 
      super(props);
      this.state={
        profshow:false,
        contacColor:false,
        conButStyle:{width:''},
        inpGroupStyle:{width:''},
        selectedMessage:'',
        MenueState:'Messages',
        secondr_style:{},
        selectDivColor:{backgroundColor:'lightblue'},
        selectedDivId:'',
        normalDivColor:{backgroundColor:'lightgray'}
        //picshow:false,
       
       

      }
        
      
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
      //this.ContactSecClick=this.ContactSecClick.bind(this)
      this.ControlToolbarSizing=this.ControlToolbarSizing.bind(this)
      this.setMenueState=this.setMenueState.bind(this)
      //this.setMsgBoxStyle=this.setMsgBoxStyle.bind(this)
      this.setSelectedMessage=this.setSelectedMessage.bind(this)
      this.setSelectedDivColor=this.setSelectedDivColor.bind(this)
      this.setselectedDivId=this.setselectedDivId.bind(this)
      //this.setPicShow=this.setPicShow.bind(this);
      this.handleConListClick=this.handleConListClick.bind(this)
    }    
    //###############################################################################################
    /*
    setPicShow(){
      this.setState({picshow:!this.state.picshow})
    }
*/
    //###############################################################################################
    setselectedDivId(v){
      this.setState({selectedDivId:v})
      //console.log(v)
    }

    //###############################################################################################
    ControlToolbarSizing(){
            
      
              //#############################################################################
              // on load try catch block to adjust size according to class mcontact-con
              try { 
                let guide_width=document.querySelector('#control-box').offsetWidth;
                let con_width=guide_width - document.querySelector('#set_wid').offsetWidth-document.querySelector('#mes_wid').offsetWidth-20+'px';
                let inp_width=document.querySelector('#set_wid').offsetWidth+ document.querySelector('#mes_wid').offsetWidth+con_width-100+'px';
                let sr_width=document.querySelector('#fr').offsetWidth;
                //console.log(con_width)
                this.setState({conButStyle:{width:con_width},inpGroupStyle:{width:inp_width}});
                let totalHeight=window.innerHeight;
                let fr_height=document.querySelector('#fr').offsetHeight;
                var sr_height2=totalHeight-fr_height-20+'px';
                
                
                this.setState({secondr_style:{height:sr_height2,width:sr_width}})

            } catch (error) {
              
            }
            
      


    }
  //#################################################################################################
   setMenueState(passedValue){
     
      
      //this.setState({trigupd:false});
      
   
      this.setState({MenueState:passedValue});
      //this.props.conStateManage(passedValue)
     


     //this.props.conStateManage(passedValue)
     //this.forceUpdate();
     //this.setState({trigupd:!this.state.trigupd});
    //console.log(this.state)

   }
   //###############################################################################################
    componentDidMount() {
      this.ControlToolbarSizing()
      window.addEventListener('resize',this.ControlToolbarSizing)
      //let elementClicked=document.querySelector('.mcontact-con');
      //document.querySelector('.mcontact-con').addEventListener('click',this.handleConListClick)

     
    
      
    }
    //###############################################################################################
    componentWillUnmount() {
      window.removeEventListener('resize',this.ControlToolbarSizing)
      //let elementClicked=document.querySelectorAll('.mcontact-con')
      //document.querySelector('.mcontact-con').removeEventListener('click',this.handleConListClick)
      //window.removeEventListener('resize',this.setMsgBoxStyle)
      
      
    }
    //###############################################################################################
    shouldComponentUpdate(){
      return true;
    }
    //###############################################################################################
      setSelectedMessage(){
        //this.setState({selectedMessage:mid})
      }
    //###############################################################################################
    setSelectedDivColor(){
      //this.setState({selectDivColor:{backgroundColor:'lightblue'}})
    }
    //###############################################################################################
    handleConListClick(item){
      //let elementClicked=document.querySelectorAll('.mcontact-con')
     //
    
      //
      //console.log(this.id)
    }


    //###############################################################################################
    render() {
 //##############################
          //general purpose js codes
  //##############################






    //##############################
        //on document ready jquery codes
  //##############################

$(window).on('load',function(){

  //##############################################################
  // setting conntrol result box max height dynamically
  let rc21box_height=document.querySelector('#rc21').offsetHeight;
  let ctrlbox_con_max_height=rc21box_height-115+'px';
  $('#control-box').css('max-height',ctrlbox_con_max_height);


/*
  document.querySelector('.mcontact-con').forEach(item => {
    item.addEventListener('click', event => {
      console.log(item)
    })
  })
 
  */

 
});






    //##############################
      //on resize event jquery codes
  //##############################
  $(window).on('resize',function(){

     //##############################################################
  // setting conntrol result box max height dynamically
  let rc21box_height=document.querySelector('#rc21').offsetHeight;
  let ctrlbox_con_max_height=rc21box_height-115+'px';
  $('#control-box').css('max-height',ctrlbox_con_max_height);
//
 
  
  

  });

// this is to resize on windows load event listner
//document.addEventListener("DOMContentLoaded", this.ControlToolbarSizing);
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
         
                     
               
              

              
                  <Row  id={this.props.id} style={this.state.secondr_style}  >
                    <Col id="rc21" xs={4}>
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
                     
                      <Container  fluid id='control-box' className="overflow-auto style-10 " >
                      
                      {(this.state.MenueState === 'Contacts' ) ? data.map(value=> 
                      <ContactView selDiVSt={this.state.selectedDivId === value ? this.state.selectDivColor :this.state.normalDivColor} 
                      id={value} key={value} boundClick={this.setselectedDivId.bind(this,value)} />)
                        :
                          (this.state.MenueState === 'Messages') ? dataM.map(value=>(
                          <MessageView 
                          selDiVSt={this.state.selectedDivId === value ? this.state.selectDivColor :this.state.normalDivColor} 
                          id={value} key={value} boundClick={this.setselectedDivId.bind(this,value)}/> )) :
                            (this.state.MenueState === 'Settings') ?
                          <UserSettingView /> :
                          
                          <Container></Container>}
                      </Container>
                      
                    </Col>
                    <Col  id="rc22" >
                         <MessageSec data={this.state.selectedDivId === 'c5' ? textmessage1:this.state.selectedDivId==='m4'? textmessage2:[]}/>     
                         <InputSec />
                    </Col>
                  </Row>
                

              
          
        
        </React.Fragment>
   
      );
    }
  }
  export default NavSection;