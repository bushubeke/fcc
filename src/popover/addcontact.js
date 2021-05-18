import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Modal,Row,InputGroup,FormControl} from  'react-bootstrap'
import './pop.css'
//import  from '../controlsec/contacts'

//import UserContactView from '../controlsec/contacts'




/*
  function Example() {
  
  const [lgShow, setLgShow] = useState(false);

*/
class AddContactPoper extends React.Component{
    constructor(props){
        super(props)
          this.state={
            con_max:{maxHeight:''},
          }
        this.setconMax=this.setconMax.bind(this)
      }

setconMax(){
    let pcgtotalHeight=window.innerHeight-100+'px';
    //console.log(pcgtotalHeight)
    this.setState({con_max:{maxHeight:pcgtotalHeight}})
}  
componentDidMount() {
    this.setconMax();
    document.addEventListener('resize',this.setconMax)
  }
  componentWillUnmount() {
    document.removeEventListener('resize',this.setconMax)
  }
   
render(){
  return (
    <React.Fragment>
      
      
    
      <Modal size="md"   centered  show={this.props.addcshow}  onHide={this.props.setAddContactShow}     >
        
        <Modal.Body id='pgcpop'>
          <Container className="overflow-auto"  style={this.state.con_max}fluid>
          <Row>
          <InputGroup >
                <FormControl
                  id='search_inp'
                  placeholder="search"
                  
                  
                />
                
              </InputGroup>
          </Row>
          <Row>
            <p><b>Group Name</b></p>
          </Row>
          <Row>
         
          
         
          
          
          </Row>
          </Container>

        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
  }
}


export default AddContactPoper;