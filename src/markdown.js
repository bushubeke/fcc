import React from 'react';
import {Container,Card,Form,Row,Col,Nav,Navbar,NavDropdown } from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
//taken from youtube freecode camp youtube tutorial
var marked=require('marked');
marked.setOptions({
  breaks: true,
});
class MarkDown extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
    markdown:""
       
  }
  this.updateMarkdown = this.updateMarkdown.bind(this);
}
//taken from youtube freecode camp youtube tutorial
updateMarkdown (markdown) {
  this.setState({markdown});
}
  render() {
    let {markdown}=this.state;
   return (
   <React.Fragment>
   
         <Container className='mark-con'fluid>
        <Row>
          <Container fluid>
       <Card>
       <Card.Body>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">SPA</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/transtext">TransText</Nav.Link>
                  
                  <NavDropdown title="FCC" id="basic-nav-dropdown">
                        <NavDropdown.Item > <Link to="/pages/docktest/clock">FCC clock </Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/pages/docktest/calc">FCC Calculator</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/pages/docktest/markdown">FCC MarkDown</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/pages/docktest/drum">FCC Drum</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/pages/docktest/random">FCC Random Quote</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                </Navbar>
         </Card.Body>
       </Card>
       </Container>
       </Row>
       
       <Container fluid> 
       <Row>
        <Col>
          <Form>
          <Form.Group controlId='input area'></Form.Group>
          <Form.Label> Markdown Input</Form.Label>
          <Form.Label>Editor section</Form.Label>
                <Form.Control  id='editor' controlId='editor' as="textarea" style={{minHeight:'300px'}}componentClass='textarea' placeholder= 'Enter text here' value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}/>
        </Form>
        
 
        </Col> 
        <Col style={{backgroundColor:'lightgrey'}}>
       
        <h1>This is Markdown Output</h1>
        
        <div id='preview' dangerouslySetInnerHTML={{__html: marked(markdown)}}  >
                        
                    </div>
        
        </Col>
        </Row>
        </Container>
       
       
     </Container>

   
   </React.Fragment>
     

); 
   
}
}
export default MarkDown;
