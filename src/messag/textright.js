import React from 'react';
import {Button,Row,Col,Image,Container } from  'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './messec.css'
import rtravel from '../rtravel.jpg'
import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
import 'font-awesome/css/font-awesome.css'
import ToolPoper from '../popover/tooltip'



class TextRight extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        tooltipshowE:false,
        tooltipshowD:false,
        picMargin:{}
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
      this.EditPoperRef = React.createRef();
      this.DeletePoperRef = React.createRef();
      this.setTooltipShowD=this.setTooltipShowD.bind(this)
      this.setTooltipShowE=this.setTooltipShowE.bind(this)
      this.setPicMargin=this.setPicMargin.bind(this)
          
        
    }
    
//###########################################################################################

    setTooltipShowD(){
     
        this.setState({tooltipshowD:!this.state.tooltipshowD})
      
    }
    
//###########################################################################################

    setTooltipShowE(){
      
        this.setState({tooltipshowE:!this.state.tooltipshowE})
      
      
    
    }

//###########################################################################################
    setPicMargin(){

      //######################################################
      let picid=this.props.picid
      let propic_box_height=document.querySelector('#'+picid).offsetHeight;
      let propic_box_width=document.querySelector('#'+picid).offsetWidth;
      let propic_left=parseInt((propic_box_width-60)*0.5)+'px';
      let propic_top=parseInt((propic_box_height-60)*0.5)+'px';
      //console.log(propic_top)
      //console.log(propic_left)
      this.setState({picMargin:{marginLeft:propic_left,marginTop:propic_top}})

    }
    //###############################################################################################
    componentDidMount() {
      this.setPicMargin()
      window.addEventListener('resize',this.setPicMargin)
      //let elementClicked=document.querySelector('.mcontact-con');
      //document.querySelector('.mcontact-con').addEventListener('click',this.handleConListClick)

      
    
      
    }
    //###############################################################################################
    componentWillUnmount() {
      window.removeEventListener('resize',this.setPicMargin)
      //let elementClicked=document.querySelectorAll('.mcontact-con')
      //document.querySelector('.mcontact-con').removeEventListener('click',this.handleConListClick)
      //window.removeEventListener('resize',this.setMsgBoxStyle)
      
      
    }
    //###############################################################################################
    render() {

      
  
      return (
        <React.Fragment>
        
          
         
            
                   <Row className='msgcon' >
                   <Col xs={1}>
                      </Col>
                        
                      <Col xs={8} >
                          <Container  fluid className="msg-holder"> 
                              <Container fluid  className="speech-bubble-left">
                              <p  id='test_2' className="ctext-margin " >
                                But it could be any element you want and there it is. But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it i, But it could be any element you want and there it is But it could be any element you want and there it is But it could be any element you want and there it is
                                                      
                                </p>
                                                      
                              </Container>
                          <Button ref={this.EditPoperRef}  onMouseEnter={this.setTooltipShowE} onMouseLeave={this.setTooltipShowE} variant='outline-dark' size='sm'className='icon-pos'>  
                          <FontAwesome className="fa fa-pencil-square-o" name="edit"  />
                          </Button>
                          <ToolPoper pas_name='Edit' target={this.EditPoperRef} show={this.state.tooltipshowE}/>
                          <Button ref={this.DeletePoperRef} onMouseEnter={this.setTooltipShowD} onMouseLeave={this.setTooltipShowD} variant='outline-dark' size='sm' className='icon-pos'>
                            <FontAwesome className="fa fa-trash-o" name="delete"  />
                            </Button>
                            <ToolPoper pas_name='Delete' target={this.DeletePoperRef} show={this.state.tooltipshowD}/> 
                           <p><i className="fa fa-calendar-o date-icon-pos" aria-hidden="true"></i> 05-02-2021,20:33</p>
                          </Container>
                      </Col>
                      <Col id={this.props.picid} xs={3} >
                            <Image id={this.props.imageid} src={rtravel} style={this.state.picMargin} width="60"  height="6 0" className="img-fluid" roundedCircle />
            
                    </Col> 
                      
                  </Row>
              
         
          
           
        </React.Fragment>
   
      );
    }
  }
  export default TextRight;