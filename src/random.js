import React from 'react';
import {Container,Card,Nav,Navbar,NavDropdown } from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css'
import { Link } from "react-router-dom";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backInput:'',
      randomIndex: 0,
      mycolors:['lightgreen','lightblue','lightyellow','lightred','lightbrown'],
      myqoute:{},
      data:{}
      }
    this.ask = this.ask.bind(this);
    this.newAsk=this.newAsk.bind(this)
   
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
 async ask() {
    const res=await fetch('https://type.fit/api/quotes',
      );
    const data=await res.json();
    const dalen=data.length;
    const myinde=Math.floor(Math.random() * (dalen-1));
      this.setState({
        randomIndex:myinde ,
        backInput: Math.floor(Math.random() * 4),
        myqoute:data[myinde],
        data:data
      });
    
  }
componentDidMount(){
    this.ask()
}
newAsk(){
  const dalen=this.state.data.length;
  const myinde=Math.floor(Math.random() * (dalen-1));
  this.setState({myqoute:this.state.data[myinde],backInput: Math.floor(Math.random() * 4)})
}
  render() {
 
    let mybackcolors={backgroundColor:'lightgreen'};
    if(this.state.backInput!==0){
      mybackcolors.backgroundColor=this.state.mycolors[this.state.backInput]
    }
    const mquote=this.state.myqoute.text;
    const mautho=this.state.myqoute.author;
   
   

    
    return (
      <React.Fragment>
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
      <Container fluid>       
      <Container id='content' style={mybackcolors} className='container-fluid d-flex h-100'>
      <div id='quote-box' className='align-self-center'>
    <div id='quote-text' ><p id='text' className='text'>{mquote}</p></div>
    <div id='quote-author' ><p id='author' className='text'>{mautho}</p></div>
      <div id='c2'>
          <a className='btn btn-primary' id='tweet-quote' href="twitter.com/intent/tweet"><i className='fa fa-twitter'></i> tweet</a>
          <a className='btn btn-primary' id='tumblr-quote' href="/home"><i className='fa fa-tumblr'></i> thumbl</a>
          <button className='btn btn-primary'  onClick={this.newAsk} id='new-quote' href="">new quote</button>                                            
         
         
      </div>
  </div>
  </Container>
</Container>
  </React.Fragment>
     ); 
    
  
 
  }
};

export default Random;
