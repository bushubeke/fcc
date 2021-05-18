import React from 'react';
import {Image,Container,Row,Col } from  'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './controlsec.css'
import rtravel from '../rtravel.jpg'
import PicPoper from '../popover/picpopover'

//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
//import 'font-awesome/css/font-awesome.css'
//import ToolPoper from '../popover/tooltip'




class ContactView extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
       select:false,
       constyle:{backgroundColor:'lightgrey'},
       constyleN:{backgroundColor:'lightblue'},
       picshow:false,
       
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
     // this.EditPoperRef = React.createRef();
     this.setPicShow=this.setPicShow.bind(this);
     
          
        
    }
    //########################################################################
    setPicShow(){
      this.setState({picshow:!this.state.picshow})
    }

    //########################################################################
    componentDidMount() {
        //this.props.conSizing()
        //window.addEventListener('resize',this.props.conSizing)
      }

    //########################################################################
      componentWillUnmount() {
        //window.removeEventListener('resize',this.props.conSizing)
      }
    //########################################################################
  

    //########################################################################
 
    render() {

     
      return (
        <React.Fragment>
        
                          
       
          
          
             <Container  id={this.props.id} className='mcontact-con' onClick={this.props.boundClick} style={this.props.selDiVSt}  >
               
               <Row>
                <Col xs={4} className='con-class-col'>
                 <Image  onClick={this.setPicShow} className='mcontact-con-img' src={rtravel} width="60"  height="60"  roundedCircle />
                </Col>
                
                <Col  className='con-class-colU'>
                
                    <Row className='account-owner'><b><p>User Name</p></b></Row>
                    <Row className='text-message-summary'><p>random text summary</p></Row>
                
                </Col>
                <PicPoper src='/static/media/rtravel.0faf88ed.jpg' picshow={this.state.picshow} setPicShow={this.setPicShow} />
                </Row>
               
               

             </Container>
            
              
         
        
           
        </React.Fragment>
   
      );
    }
  }
  /*
  class UserContactView extends React.Component {

    render(){
      //var data=['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10']
      return(
        <React.Fragment>
           {this.props.data.map(value=>(
             <ContactView id={value} key={value} />
           ))}
        </React.Fragment>
      );
    }
  }*/
  //export default UserContactView;
  export default ContactView;