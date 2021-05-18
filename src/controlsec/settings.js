import React from 'react';
import {Container,Row,Button } from  'react-bootstrap'
//import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './controlsec.css'
//import rtravel from '../rtravel.jpg'
import CreateCGPoper from '../popover/createcg'
import AddContactPoper from '../popover/addcontact'

//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
//import 'font-awesome/css/font-awesome.css'
//import ToolPoper from '../popover/tooltip'




class SettingView extends React.Component {
 

    render() {

    
      return (
        <React.Fragment>
            <Container   className='mcontact-con' >
                <Row> 
                <Button variant='outline-dark' onClick={this.props.ClickValue} block>{this.props.ButtonValue} </Button>
                </Row>
                
             </Container>
      </React.Fragment>
   
      );
    }
  }
  class UserSettingtView extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        select:false,
        cpgshow:false,
        addcshow:false,
         
       }
       //binding done here for function
       //this.handleResize=this.handleResize.bind(this)
      // this.EditPoperRef = React.createRef();
       this.setCpgShow=this.setCpgShow.bind(this);
       this.setAddContactShow=this.setAddContactShow.bind(this);
    

    }
    //##############################################################################################
    setCpgShow(){
      this.setState({cpgshow:!this.state.cpgshow})
    }      
     //##############################################################################################
     setAddContactShow(){
       this.setState({addcshow:!this.state.addcshow})
     }

    
    //##############################################################################################

    //##############################################################################################
    componentDidMount() {
    //this.props.conSizing()
    //window.addEventListener('resize',this.props.conSizing)
  }

//##############################################################################################

  componentWillUnmount() {
    //window.removeEventListener('resize',this.props.conSizing)
  }


    render(){
      return(
        <React.Fragment>
            <SettingView  ClickValue={this.setAddContactShow} ButtonValue='Add Contact' />
            <SettingView ClickValue={this.setCpgShow} ButtonValue='Create Group/Channel'/>
            
            <CreateCGPoper  cpgshow={this.state.cpgshow} setCpgShow={this.setCpgShow}/>
             <AddContactPoper addcshow={this.state.addcshow} setAddContactShow={this.setAddContactShow}/>
            
            
        </React.Fragment>
      );
    }
  }
  export default UserSettingtView;