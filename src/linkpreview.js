//##############################################################################################
        //this peice of code is taken from https://fireship.io/snippets/link-preview-react/
        //please note that it has been slightly modified
//##############################################################################################


import React from 'react';
//import {Button,Row,Col,Image,Container } from  'react-bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from "axios";
//import './messec.css'
//import rtravel from '../rtravel.jpg'
//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
//import 'font-awesome/css/font-awesome.css'
class ModfiedLinkPreview extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        data:{}
        
      }
      //binding done here for function
      this.handleLink=this.handleLink.bind(this)
      
          
        
    }

    componentDidMount(){
            this.handleLink()
    }
    async handleLink(){
      /*        let body = {
            userId: 1111,
            title: "This is POST request with body",
            completed: true
            };
           //let body= { headers: { 'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1' }  }
          axios
            .post(this.props.plink,body )
            .then(function(response) {
                this.setState({data:[response.json()]})
                console.log(response.data);
            })
            .catch(function(error) {
                //console.log(error);
            }); 
            */
                /*
            //setLoading(true)
            //evt.preventDefault();
            //console.log(`Submitting ${text}`);
            //let text=this.props.plink;
            const proxyurl='https://www.croxyproxy.com/';

            //const res=fetch(proxyurl+this.props.plink) // https://cors-anywhere.herokuapp.com/https://example.com
                //.then(response => 
                //    { method: 'POST' ,
                //       body:JSON.stringify( response.text()) })
              //  .then(contents => console.log(contents))
            
            const res = await fetch(proxyurl+this.props.plink, { 
                method: 'GET', 
               // body: JSON.stringify({ text }) 
            });
            
            const fetched_data = await res.text;
            console.log(fetched_data);
            //setLinks(data);
            //this.setState({data:fetched_data});
            //setLoading(false)
          */
    }
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
                    
          <a  href={this.props.plink}>{this.props.plink}
                <img src={this.state.data.image} alt='' />
                <div>
                    <h4>{this.state.data.title}</h4>
                    <p>{this.state.data.description}</p>
                </div>
          </a>
             
              
         
        
           
        </React.Fragment>
   
      );
    }
  }
  export default ModfiedLinkPreview;