import React from 'react';
import {Col ,Card, Button, ButtonGroup} from  'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
//import titback from './titback.svg'
//import titback from './titback1.jpg'
import PgcPoper from './popover/pgcpopper'
import Cookies from 'js-cookie'
class TitleSection extends React.Component {
    constructor(props){ 
      super(props);
      this.state = {
        show:false,
        pgcshow:false,
        username:'',
        //upInterval:setInterval(),
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
      this.setPgcShow=this.setPgcShow.bind(this)
      
        
    }
    //###########################################################################
    componentDidMount(){
      let x=Cookies.getJSON();
      this.setState({username:x.username})
      //this.props.setFirstUpdate()
      //console.log(this.props.appstate.username)
      //document.addEventListener("DOMContentLoaded", this.fetchReduxData())
      //let upInt=setInterval(this.fetchReduxData(),10000)
       //this.setState({upInterval:upInt})
    }
     //###########################################################################
    componentWillUnmount(){
      //clearInterval(this.state.upInterval)
     // document.removeEventListener("DOMContentLoaded", this.fetchReduxData())
    }
     //###########################################################################
 
      //###########################################################################
    setPgcShow(){
         
        this.setState({pgcshow:!this.state.pgcshow})
        //console.log(this.state.pgcshow)
   
    }
     //###########################################################################
    /*componentDidUpdate(prevProps){
     
    }*/
      
    //###########################################################################

    //###########################################################################
    render() {
     
     
      
      return (
        <React.Fragment>
           
            <Col id="rc12"   >
                <Card >
                
                    
                      <Card.Title className="car-tit">{this.state.username}</Card.Title>
                      
                      <ButtonGroup >
                          <Button  variant="outline-dark" size='sm' onClick={()=>{this.setPgcShow()}}  >
                              Text  
                            </Button>
                          <Button variant="outline-dark" size='sm' onClick={this.setPgcShow} style={this.state.conButStyle} >
                              Members
                            </Button>
                            <Button variant="outline-dark" size='sm'  style={this.state.conButStyle} >
                             Settings
                            </Button>
                            
                          <Button   variant="outline-dark"  size='sm' >
                            Logout
                            </Button>
                      </ButtonGroup>
                     
                     
                   
                </Card>
            </Col>
           
            <PgcPoper pgcshow={this.state.pgcshow} setPgcShow={this.setPgcShow}/>
        </React.Fragment>
   
      );
    }
  }
  export default TitleSection;