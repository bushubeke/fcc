import React from 'react';
import {Container, Row } from  'react-bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainsrc.css'
//import FontAwesome from 'react-fontawesome'
import {FormControl,InputGroup,Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.css'
//import Picker from 'emoji-picker-react';

//import rtravel from './rtravel.jpg'
class InputSec extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        Input_section_style:{margin:'10px 10px'},
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
  
          
        
    }
    render() {

      //##############################
              //on document load jquery codes
      //##############################
    
      
     $(window).on('load',function(){
       
        try {
          
        
        let tx_height=document.querySelector('#rc22').offsetHeight;
        let in_height=parseInt(0.07*tx_height)+'px'
        let in_height_secs=in_height-8+'px'
        $('#inputbox').css('height',in_height);

        $('.input-border').css('height',in_height_secs);

      } catch (error) {
          
      }

    })
      //on windows resize events
      //############################
          //on resize jqeury codes
      //###########################
      $(window).on('resize',function(){

        try {
          
        
        let tx_height=document.querySelector('#rc22').offsetHeight;
        let in_height=parseInt(0.07*tx_height)+'px'
        let in_height_secs=in_height-8+'px'
        $('#inputbox').css('height',in_height);
        $('.input-border').css('height',in_height_secs);
      } catch (error) {
          
      }

      })

      //################################

      //#####################################
      return (
        <React.Fragment>
            <Row id='inputbox' >
              <Container style={{marginTop:'2px'}}fluid>
                      
                      <InputGroup>
                        <FormControl
                          className='trans-text-input'
                          placeholder='type text here'
                          
                        />
                        <InputGroup.Append>
                          <Button variant="outline-dark">
                          <i className="fa fa-meh-o" name="emoji"  />
                          </Button>
                                
                          <Button variant="outline-dark">
                          <i className="fa fa-paperclip" name="attachment"  />
                          </Button>
                          
                          <Button variant="outline-dark">
                          <i className="fa fa-plane" name="send"  />
                          </Button>
                          
                        </InputGroup.Append>
                      </InputGroup>
                  
              </Container>

            </Row>
            </React.Fragment>
   
      );
    }
  }
  export default InputSec;