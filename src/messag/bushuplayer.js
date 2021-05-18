import React from 'react';
//import {Button,Row,Col,Image,Container } from  'react-bootstrap'
import {Container } from  'react-bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './messec.css'
//import rtravel from '../rtravel.jpg'
//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
//import 'font-awesome/css/font-awesome.css'
class ModifiedVideoPlayer extends React.Component {
   
    
    
    render() {

        //##############################
              //delclaring passed down prop variables for jquery useage
      //##############################
               





      //##############################
              //on document load jquery codes
      //##############################
     
     $(document).ready(function(){
 
      



      



    })
      //on windows resize events
      //############################
          //on resize jqeury codes
      //###########################
      $(window).resize(function(){
     
        //this.handleLink()

    


    


      })

      //################################

      //#####################################
      return (
        <React.Fragment>
                    
        <Container fluid >
            <video id={this.props.id}>
                <soruce src={this.props.url} type="video/mp4"></soruce>
            </video>
            
        </Container>
              
         
        
           
        </React.Fragment>
   
      );
    }
  }
  export default ModifiedVideoPlayer;



