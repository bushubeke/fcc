import React from 'react';
import {Row,Col,Button} from  'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
//import titback from './titback.svg'
import titback from '../titback1.jpg'
//import PgcPoper from './popover/pgcpopper'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.css'

class MobNavBar extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        show:false,
        frow_style:{},
        
      }
     //this.setFrowStyle=this.setFrowStyle.bind(this);
          
        
    }
    //###################################################################################
    setFrowStyle(){
        //let totalWidth=window.innerWidth+'px';
        //this.setState({frow_style:{width:totalWidth}})
    }



     //###################################################################################
        componentDidMount(){


        }
        
      //###################################################################################

        componentWillUnmount(){

           

        }


       //###################################################################################



   
    render() {


    
      return (
        <React.Fragment>
            <Row id={this.props.id}  >
                <Col xs={2}>
                <Button  variant="outline-info mnav-btn"  >
                <FontAwesome className="fa fa-bars" name="settings" size='4x' />
                </Button>
                
                </Col>
                  <Col> 
                <Row>                
                    <p className='xxxl-p'>TransText</p>
                </Row>
                <Row>
                <p className='sm-p'>the number of members</p>
                </Row>
                </Col>
               
            </Row>
           
            
        </React.Fragment>
   
      );
    }
  }
  export default MobNavBar;