import React from 'react';
import {Image,Container,Row,Col } from  'react-bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './controlsec.css'
import rtravel from '../rtravel.jpg'

//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
//import 'font-awesome/css/font-awesome.css'
//import ToolPoper from '../popover/tooltip'




class MessageView extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
       select:false,
       constyle:{backgroundColor:'lightgrey'},
       constyleN:{backgroundColor:'lightblue'}
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
     // this.EditPoperRef = React.createRef();
    
   
          
        
    }
    componentDidMount() {
        //this.props.conSizing()
        //window.addEventListener('resize',this.props.conSizing)
      }
      componentWillUnmount() {
        //window.removeEventListener('resize',this.props.conSizing)
      }
      
 
    render() {

        //##############################
              //delclaring passed down prop variables for jquery useage
      //##############################
               





         //##############################
              //
      //##############################

      //##############################
              //on document load jquery codes
      //##############################
     
     $(window).on('load',function(){
 
      
/*
      // this is adjusting contact div boxes with class con-class-col && con-class-colU dynamically
      let ConTotalWidth=document.querySelector('.mcontact-con').offsetWidth;
      let ConPicWidth=parseInt(ConTotalWidth*0.4)+'px';
      let ConTextWidth=parseInt(ConTotalWidth*0.55)+'px';
     
      $('.con-class-col').css('width',ConPicWidth);
      
      $('.con-class-colU').css('width',ConTextWidth);
      
*/


    })
      //on windows resize events
      //############################
          //on resize jqeury codes
      //###########################
      $(window).on('resize',function(){
     
     

    


      // this is adjusting contact div boxes with class con-class-col && con-class-colU dynamically
      /*
      let ConTotalWidth=document.querySelector('.mcontact-con').offsetWidth;
      let ConPicWidth=parseInt(ConTotalWidth*0.4)+'px';
      let ConTextWidth=parseInt(ConTotalWidth*0.55)+'px';
      
      $('.con-class-col').css('width',ConPicWidth);
      $('.con-class-colU').css('width',ConTextWidth);
     */


      })

      //################################

      //#####################################
      return (
        <React.Fragment>
        
          
          
             <Container  id={this.props.id}    className='mcontact-con' onClick={this.props.boundClick} style={this.props.selDiVSt}>
                 <Row>
                <Col xs={4} className='con-class-col'>
                 <Image  className='mcontact-con-img' src={rtravel} width="60"  height="60"  roundedCircle />
                </Col>
                <Col className='con-class-colU'>
                    <Row className='account-owner'><b><p>User Name</p></b></Row>
                    <Row className='text-message-summary'><p>random text summary</p></Row>
                </Col>
                </Row>
                
             </Container>
              
         
        
           
        </React.Fragment>
   
      );
    }
  }
  /*
  class UserMessageView extends React.Component {

    render(){
      return(
        <React.Fragment>
            <MessageView />
            <MessageView />
           
           
        </React.Fragment>
      );
    }
  }*/
  export default MessageView;