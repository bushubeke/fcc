import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Modal,Row,Image,Col} from  'react-bootstrap'
import './pop.css'
//import  from '../controlsec/contacts'
import rtravel from '../rtravel.jpg'
import UserContactView from '../controlsec/contacts'




/*
  function Example() {
  
  const [lgShow, setLgShow] = useState(false);

*/
class PgcPoper extends React.Component{
    constructor(props){
        super(props)
          this.state={
            con_max:{maxHeight:''},
          }
        this.setconMax=this.setconMax.bind(this)
      }

setconMax(){
    //let pcgtotalHeight=window.innerHeight-100+'px';
    //console.log(pcgtotalHeight)
   // this.setState({con_max:{maxHeight:pcgtotalHeight}})
}  
componentDidMount() {
    //this.setconMax();
    //document.addEventListener('resize',this.setconMax)
  }
  componentWillUnmount() {
    //document.removeEventListener('resize',this.setconMax)
  }
   
render(){
  return (
    <React.Fragment>
      
      
    
      <Modal size="md"   scrollable centered   show={this.props.pgcshow}  onHide={this.props.setPgcShow}     >
        
        <Modal.Body id='pgcpop' className='style-10'>
          <Container fluid>
          <Row>
          <ContactViewPg />
          </Row>
          <Row>
            <p><b>Group Name</b></p>
          </Row>
          <Row>
          
          <UserContactView />
          <UserContactView />
          <UserContactView /> 
          <UserContactView />
          <UserContactView />
          <UserContactView />
          <UserContactView />
          <UserContactView />
          <UserContactView />
          <UserContactView /> 
          <UserContactView />
          <UserContactView />
          <UserContactView />
          <UserContactView />
          
          
          </Row>
          </Container>

        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
  }
}

class ContactViewPg extends React.Component {
    

    render() {

      
      //################################

      //#####################################
      return (
        <React.Fragment>
        
          
          
             <Container   className='mcontact-con' >
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
export default PgcPoper;