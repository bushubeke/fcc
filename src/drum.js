import React from 'react';
//import ReactDOM from 'react-dom';
import {Button,Container,Card,Row,Col,NavDropdown,Navbar,Nav} from  'react-bootstrap';
//import styled from 'styled-components';
//import VolumeControl, {VolumeControlEvents } from "react-native-volume-control";
//import Slider from '@react-native-community/slider';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const data1 = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
    ];
const data2 = [

  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
    ];
const data3 = [
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
];


class DrumDrum extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
    soundname:""
    
  }
this.soundDisplay=this.soundDisplay.bind(this)

       
}
// this is for slider section
    /*
      async componentDidMount() {
        this.setState({
          volume: await VolumeControl.getVolume()
        });

        // Add and store event listener
        this.volEvent = VolumeControlEvents.addListener(
          "VolumeChanged",
          this.volumeEvent
        );
      }

      // Updates Slider UI when hardware buttons change volume
      volumeEvent = event => {
        this.setState({ volume: event.volume });
      };

      // Updates device volume
      sliderChange(value) {
        VolumeControl.change(value);
      }

      componentWillUnmount() {
        // remove event listener
        this.volEvent.remove();
      }
      */
//this is where slider ends
soundDisplay(sname) {
  this.setState({soundname:sname});
}


  render() {
 
    //const keystyle={ height:'85px', color:'black', backgroundColor:'lightyellow', textAlign:'center', alignContent:'center', padding:'5px 5px 5px 5px' };
    
    //const hkeystyle={ height:'85px', color:'white', backgroundColor:'black', textAlign:'center', alignContent:'center', padding:'5px 5px 5px 5px'  };
    //
  

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
                  <Container fluid as='div' id='drum-machine'>
                      <Row style={{minHeight:'200px'}}>
                            <Col></Col>
                            <Col xs={6}></Col>
                            <Col></Col>
                      </Row>
                      <Row >
                           <Container style={{backgroundColor:'lightgrey', minHeight:'350px',maxWidth:'650px'}} >
                           
                                <Row fluid>
                                  <Col fluid md={6} style={{backgroundColor:'darkgrey',height:'330px',padding:'10px 10px 10px 10px',marginTop:'10px',marginLeft:'10px'}}className='drum-pads'>
                                    
                                    <Row >{data1.map(sounds =>(
                                      <Col>
                                      <BushuPad key={sounds.id}  id={sounds.id}  letter={sounds.letter}  src={sounds.src} disHandle={this.soundDisplay} />
                                      </Col>
                                    ))}
                                    </Row>
                                    <br></br>
                                    <Row >{data2.map(sounds =>(
                                      <Col>
                                      <BushuPad key={sounds.id}  id={sounds.id}  letter={sounds.letter}  src={sounds.src} disHandle={this.soundDisplay}/>
                                      </Col>
                                    ))}
                                    </Row>
                                    <br></br>
                                    <Row >{data3.map(sounds =>(
                                      <Col>
                                      <BushuPad key={sounds.id}  id={sounds.id}  letter={sounds.letter}  src={sounds.src} disHandle={this.soundDisplay}/>
                                      </Col>
                                    ))}
                                    </Row>
                                      
                                    
                                     
                                  </Col>
                                  <Col fluid md={5} style={{backgroundColor:'darkgrey',height:'330px',padding:'10px 10px 10px 10px',marginTop:'10px',marginLeft:'10px'}}className='drum-control'>
                                    <Container style={{alignContent:'center'}}fluid>
                                      <Row style={{backgroundColor:'lightyellow',padding:'10px',height:'100px',textAlign:'center'}}> <h1 style={{marginTop:'10px'}}>Drum</h1></Row>
                                        <Row  id='display' style={{backgroundColor:'lightyellow',padding:'10px',height:'100px', textAlign:'center'}}><h1 style={{marginTop:'10px',textAlign:'center'}}>{this.state.soundname}</h1></Row>
                                      <Row style={{backgroundColor:'lightyellow',padding:'10px',height:'100px'}}> </Row>
                                    </Container>
                                  </Col>
                                </Row>
                            
                           </Container>
                      </Row>
                  </Container>
     </Container>

   
   </React.Fragment>
     

); 
   
}
}
class BushuPad extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this);
  } 
  
componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
 }
componentWillUnmount() {
     document.removeEventListener("keydown", this.handleKeyPress);

 }
 handleKeyPress(event) {
  if(event.keyCode === this.props.letter.charCodeAt()) {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.disHandle(this.props.id)
  }
}

handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.disHandle(this.props.id)
  }
  
  render(){
    return (
      
      <Button  onClick={this.handleClick} style={{marginRight:'auto',marginLeft:'auto',marginTop:'auto',marginBottom:'auto',width:'80px',height:'80px'}} variant='outline-dark' className='drum-pad'  id={this.props.id} >
       <h1>{this.props.letter}</h1>
      <audio id={this.props.letter} className='clip' src={this.props.src} ref={ref => this.audio = ref}></audio>
      </Button>
    );
  }
}


export default DrumDrum;
