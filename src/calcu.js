import React from 'react';

import {Button,Container,Card,Row,Nav,Navbar,NavDropdown } from  'react-bootstrap';
//import styled from 'styled-components';
//import VolumeControl, {VolumeControlEvents } from "react-native-volume-control";
//import Slider from '@react-native-community/slider';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const inputNumbers=[0,1,2,3,4,5,6,7,8,9];
const inputOperators=['+','/','-','*'];
const inputOperatorsK=['+','/','-','*','.'];
const controlValue=0;
var result=0;
//var forminputDisplay;
class Calculator extends React.Component {
 
  constructor(props) {
    super(props);
    this.State={
        inputValue:[''],
        inputDisValue:[],
        inputDisplayValue:[''],
        minHeC:{minHeight:'450px'}
       
    }
    this.inputDisplay=this.inputDisplay.bind(this)
    this.allClear=this.allClear.bind(this) 
    this.popClear=this.popClear.bind(this)
    this.resultEquals=this.resultEquals.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setminHe=this.setminHe.bind(this)
}

  //#############################################################################3
  setminHe(){
    let totalHeight=window.innerHeight;
    let h=document.querySelector('#calc-card-id').offsetHeight;
    //console.log(totalHeight)
    //console.log(h)
    let adh=totalHeight-h-10+'px'
    //console.log(adh)
    this.setState({ minHeC:{minHeight:adh}})
    //console.log(this.State)
  
  }
//###############################################################################
componentDidMount() {
  document.addEventListener("keydown", this.handleKeyPress);
  this.setminHe()
  document.addEventListener('resize',this.setminHe())
}
componentWillUnmount() {
   document.removeEventListener("keydown", this.handleKeyPress);
   document.removeEventListener('resize',this.setminHe())

}
//###############################################################################
handleKeyPress(event) {
let etest=(inputNumbers.indexOf(parseInt(event.key))!==-1 || inputOperatorsK.indexOf(event.key)!==-1);
//console.log(event.key)
//console.log(etest)
            if(etest) {
              //let myinVal=event;
              this.inputDisplay(event.key)
              //this.handleClick(event)
              //console.log(event.keyCode)
              console.log(event.key)
            }else if (event.keyCode ===13){
              this.resultEquals();
            }else if(event.keyCode === 46){
                this.allClear();
            }else if(event.keyCode ===8){
                // this.popClear();
            }
}
//###############################################################################
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
//###############################################################################
resultEquals(){
  var v=this.state.inputValue.join('');
  //let u=Number.parseFloat(eval(v)).toFixed(12);
        try {
            // eslint-disable-next-line 
            var myVal=eval(v);
            var u=new Intl.NumberFormat('en-IN', { maximumFractionDigits: 10 }).format(myVal);
            //var w=[u]
            result=u;
            let x=this.State.inputValue;
            //let s=[...x];
            while(x.length > 0) {
              x.pop();
              }
              x.push(result)
              this.setState({inputValue:x, inputDisplayValue:[v]})
            //this.inputDisplay(result)
        }
        catch(err){
          console.log('The error is '+ err);
          u='invalid input'
        }
 // console.log(v)
  //console.log(u)
  
  //this.setState({inputValue:w,outputValue:[v]})
  //console.log(this.State.outputValue[0])
}
//###############################################################################
popClear(){
  let x=this.State.inputValue;
  let m=this.State.inputDisplayValue;
  let p=this.State.inputDisValue;
  let n=m.pop();
  let y=x.pop();
  if(p.length!==0){
  let f=p.pop()

  result=f.join('')
}
else{
  result=[''];
}
  this.setState({inputValue:y,inputDisValue:result,inputDisplayValue:n})
}
//###############################################################################
allClear(){
  let x=this.State.inputValue;
  let m=this.State.inputDisplayValue;
  let xr=this.State.inputDisValue;
  while(x.length > 0) {
    x.pop();
    }
    while(xr.length > 0) {
      xr.pop();
      }
  while(m.length > 0) {
      m.pop();
      }
 result=controlValue;
 this.setState({inputValue:x,inputDisValue:xr ,inputDisplayValue:m})
  //console.log(this.State.inputValue)
}
//###############################################################################
inputDisplay(x){
    let prepx=this.State.inputValue; // this is the value intended to be change state for inputValue
    let prepy=this.State.inputValue;
    let prepv=this.State.inputDisplayValue; 
    let prepw=this.State.inputDisValue;
    let prepz=this.State.inputDisplayValue; // this the array set to change state for inputDisplayValue
    let prepu=this.State.inputDisValue; // this is array set to handle result input in numbers
    let h=prepx.length;
    let operSets=['+','/','*']
    let operTest=(operSets.indexOf(x)>-1) //&& (inputOperators.indexOf(prepx[(prepx.length-1)]) > -1);
    let lastOne=prepx[(prepx.length-1)]
    let secondOne=prepx[(prepx.length-2)]
    //  let operTest2=(inputOperators.indexOf(prepx[(prepx.length-1)]) > -1) && (inputOperators.indexOf(prepx[(prepx.length-2)]) > -1)
    //console.log('this is oper result '+ !operTest)
    //console.log('this is input ' +x)
    
    //prepx.push(x)
    //h++
    //result=x;
    if((x !== 'del' || x !=='clear') && h<=13){
            if(operTest) // the logic for inputing addition,multiplication and division operator
                {

                    if(prepx.length !== 0) {
                          if((inputOperators.indexOf(lastOne)>-1) && operSets.indexOf(secondOne)===-1)
                              {
                                prepx.pop()
                                prepz.pop()
                                prepz.push(x)
                                prepx.push(x)
                                result=x;
                                console.log('one way')
                              }
                              else if((lastOne==='-' && operSets.indexOf(secondOne)>-1))
                                {
                                     prepx.pop()
                                      prepx.pop()
                                      prepz.pop()
                                      prepz.pop()
                                      prepx.push(x)
                                      prepz.push(x)
                                      h-- 
                                      result=x;
                                      console.log('two way')
                                }
                              else 
                              {
                                while(prepu.length>0) 
                                {prepu.pop()}
                                prepx.push(x)
                                prepz.push(x)
                                h++
                                result=x;
                                console.log('three way')
                              }
                      }else {
                        console.log('can not start input with this operator')
                      }


                }
            else if(x==='-') // the logic for inputing the subtraction opperator
                {
                    if(lastOne ==='-' && operSets.indexOf(secondOne)>-1)
                      {
                        prepx.pop()
                        prepx.pop()
                        prepz.pop()
                        prepz.pop()
                        prepx.push(x)
                        prepz.push(x)
                        h--
                        result=x;
                        console.log('four  way')
                      }
                      else if(lastOne ==='-')
                        {
                          console.log('ignore')
                          console.log('five way')
                        }
                      else 
                      { 
                        while(prepu.length>0) 
                        {prepu.pop()}
                        prepx.push(x)
                        prepz.push(x)
                        h++
                        result=x;
                        console.log('six way')
                      }
                      
                }
            else if(x==='.')// the logic for inputing the  dot operator
                {
                        if(prepu.indexOf('.')>-1){
                          console.log('seven way')
                        }else{
                          prepx.push(x)
                            prepz.push(x)
                            //prepu.push(0)
                            prepu.push(x)
                            h++;
                            result=prepu.join('')
                            console.log('eight way')
                        }  
                     
                }
            else // this is the section for inputing the numbers
                {
                  if(x==='0'){ // this is for number zero input
                          if(prepu[0]==='0'){
                                if(prepu.indexOf('.')>-1){
                                  console.log(prepu)
                                  console.log('9.1.1 way')
                                  prepx.push(x)
                                  prepz.push(x)
                                  prepu.push(x)
                                  h++;
                                  result=prepu.join('') 
                                }else{
                                  console.log(prepu)
                                  console.log('9.1.2 way')
                                  //console.log(result)
                                }
                          }else{
                            console.log()
                              prepx.push(x)
                              prepz.push(x)
                              prepu.push(x)
                              h++;
                              result=prepu.join('') 
                              console.log(prepu)                   
                              console.log('9.2 way')
                          }
                            
                           
                  }else // this is for the numbers other than zero
                  {
                    prepx.push(x)
                    prepz.push(x)
                    prepu.push(x)
                    h++;
                    result=prepu.join('')
                    console.log('eleven way')
                  
                }
    }}
    if(h<=13) {    
     // let R1=/^[.]\d|^\d|^[-]|^[-.]\d/g
    //let R2=/[-*]|[-+]|[-/]|^[--]|[*+]|[**]|[*/]|[*+]|[/*]|[/+]|[//]|[++]|[+*]|[+/]/g
    //if(prepx.length <=14))
        //{ 
          this.setState({inputValue:prepx, inputDisValue:prepu ,inputDisplayValue:prepz})
        //}
            }else{
              this.setState({inputValue:prepy,inputDisValue:prepw,inputDisplayValue:prepv})
            }
}
//###############################################################################
  render() {
 
    var inputData=[{ number:'+', id:'add'},{ number:1, id:'one' },{ number:2, id:'two' },
    { number:3, id:'three'},{ number:'/', id:'divide'},{ number:4, id:'four' },{ number:5, id:'five' },    { number:6, id:'six' },{ number:'-', id:'subtract'},
    { number:7, id:'seven' },{ number:8, id:'eight'},{ number:9, id:'nine' },{ number:'*', id:'multiply'},
    { number:'.', id:'decimal'},{ number:'0', id:'zero' }]
    var inputData2=[{ number:'AC', id:'clear' },{ number:'CE', id:'del' },{ number:'=', id:'equals'}]

    const bstyles={marginRight:'auto',marginLeft:'auto',marginTop:'auto',marginBottom:'5px',width:'80px',height:'70px'}
    const bstyles2={marginRight:'auto',marginLeft:'auto',marginTop:'auto',marginBottom:'5px',width:'160px',height:'70px'}
    const dstyle={height:'55px',backgroundColor:'darkgrey',marginRight:'auto',marginLeft:'auto',marginTop:'auto',
    marginBottom:'5px',width:'100%',textAlign:'right',fontSize:'45px',fontWeight:'bold',borderRadius:'10px 10px 10px 10px'}
    //if(this.state.outputValue[0]!=1){

    //}  
    //console.log(this.State.inputDisValue[0])
    //const cals={backgroundColor:'lightgrey',maxWidth:'350px',borderRadius:'10px 10px 10px 10px',borderWidth:'2px',borderColor:'black',borderStyle:'solid'}
    const cals={maxWidth:'350px'}
   return (   <React.Fragment>
   
    <Container className='calc-con' fluid>
           <Row id='calc-card-id'> 
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
          
           <Row key='calarea' >
           <Container className='d-flex h-100 conmar-cal'  fluid style={this.State.minHeC} >
                   <Container   xs={6} md={4} className='align-self-center calbound ' style={cals} >
                         <Row   key='output'   style={{minHeight:'40px',backgroundColor:'lightblue',borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}>
                              <div style={dstyle} key='input_display' >
                                {this.State.inputDisplayValue.join('')}
                                
                              </div>
                              <div  style={dstyle} key='outputscreen'  id='display'  >
                              <p>{result}</p>    
                              </div>
                         </Row>
                         <Row key='Input'>
                          <Button id={inputData2[0].id} onClick={this.allClear} style={bstyles2} key={inputData2[0].id}variant='outline-dark' >
                            <h1>{inputData2[0].number}</h1>
                            </Button>
                            <Button id={inputData2[1].id} onClick={this.popClear} disabled style={bstyles} key={inputData2[1].id}variant='outline-dark' >
                            <h1>{inputData2[1].number}</h1>
                            </Button>
                         {inputData.map(inputs =>(
                              <NumPad 
                              number={inputs.number} 
                              gstyle={bstyles} 
                              key={inputs.id}  
                              id={inputs.id}
                              inputHandle={this.inputDisplay}
                              
                              />
                              

                            ))
                          
                           }
                           <Button id={inputData2[2].id} onClick={this.resultEquals} style={bstyles2} key={inputData2[2].id}variant='outline-dark' >
                            <h1>{inputData2[2].number}</h1>
                            </Button>
                         </Row>
                   </Container>
</Container>
          </Row>
           


      </Container>     


</React.Fragment>



); 
   
}
}

class NumPad extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this)
    
    //this.handleClear=this.handleClear.bind(this)
  } 
  
  

handleClick (){
    
    this.props.inputHandle(this.props.number)
    //console.log(this.props.number.keyCode())
  }


  render(){
    return (
      <React.Fragment>
          <Button 
          onClick={this.handleClick}
          id={this.props.id}
          style={this.props.gstyle}
          
          key={this.props.id} 
          variant='outline-dark'>
                <h1>{this.props.number}</h1>
          </Button>
      </React.Fragment>
     
    )
  }
}



export default Calculator;
