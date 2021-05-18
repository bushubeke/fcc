import React from 'react';
import {Container,Form} from  'react-bootstrap'
//import { } from  'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import {isMobile} from 'react-device-detect'
import axios from 'axios'
//import Cookies from 'js-cookie'
import './mainsrc.css'
//import axios from 'axios';
class LoginPage extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        show:true,
        ewarning: false,
        pwarning: false,

        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
      
      this.loginPostRequest=this.loginPostRequest.bind(this)
         
        
    }
    //#################################################################################
     async loginPostRequest(event){
      event.preventDefault(); 
      var formData=document.querySelector('#sinput-form');
      var  data= new FormData(formData); 
      //console.log(data.get('email'))
      //console.log(data.get('password').length)
      if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.get('email'))){
        this.setState({ewarning:true,show:false})
      }else{
        //break;
        this.setState({ewarning:false,show:true})
      }

      if(data.get('password').length === 0){
        this.setState({pwarning:true})
      }else{
        //  break;
        this.setState({pwarning:false})
      }
      //this regex experssion is taken from stackoverflow
      //find link here https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
      if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.get('email')) && data.get('password').length !== 0){
                try {
                         
                  var passedData={ email:data.get('email'),password:data.get('password')} 
              
                
                
                 await  axios('http://192.168.10.7:5000/user/jwtlogin', {
                      method: 'POST', // or 'PUT'
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      //data: JSON.stringify(data),
                      data: passedData,
                    })
                    .then((response) => {
                      console.log(response.data)
                                         
                      var timenow= new Date(Date.now())
                      var exptime=timenow.setHours(timenow.getHours()+5);
                      document.cookie="username="+response.data.user+"; expires="+exptime+"; path=/"
                      document.cookie="email="+response.data.email+"; expires="+exptime+"; path=/"
                      document.cookie="token="+response.data.token+"; expires="+exptime+"; path=/"
                      document.cookie="loggedin=true; expires="+exptime+"; path=/"
                      document.cookie="userid="+response.data.userid+"; expires="+exptime+"; path=/"
                      //this.props.login()
                      //document.location.assign('/transtext')
                      
                      
                      
                       }  )
                    .catch((error) => {
                      console.error('Error:', error);
                    });
                  } catch (error) {
                      
                  }
                
               //   console.log('separater')
               //   console.log( Cookies.get())
          
      }
    
    else{
      //console.log('noting')
      //break;
    }


  }
     //#################################################################################
    shouldComponentUpdate(){
      return true;
    }
     //#################################################################################
    componentDidMount() 
    { 
   
    }
     //#################################################################################
    componentWillUnmount() {
      //document.removeEventListener('resize',this.setPicMargins())
    }
     //#################################################################################
     
     //######################################################################################################
     
     //#################################################################################
     
      //#####################################################################################33

      


     //#################################################################################
    
            


     //#################################################################################

    render() {

  
     
   
      return (
        <React.Fragment>
        
               
               <Container fluid className='d-flex h-100'>
               <Container  fluid  className={isMobile ?'align-self-center form-contm':'align-self-center form-cont'} >
                   
                    <Form id='sinput-form'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" />
                            <Form.Text className="text-muted" style={this.state.show ? {display:"block"}:{display:"none"}}>
                            We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Text style={this.state.ewarning ?  {display:"block"}:{display:"none"} }className="text-danger">
                            invalid value
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" />
                            <Form.Text className="text-danger" style={this.state.pwarning ?  {display:"block"}:{display:"none"} }>
                                  invalid value
                            </Form.Text>
                        </Form.Group>
                        <div className="text-right spacing">
                        <input id="submit" name="submit" type="submit" onClick={this.loginPostRequest}value="Login" className="btn btn-primary" />

                        </div>
                        
                        </Form>
                   
               </Container>
               </Container>
              
           
           
           
            
              
        </React.Fragment>
   
      );
    }
  }
  export default LoginPage;