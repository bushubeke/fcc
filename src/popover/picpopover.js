import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Image,Modal,Col,Row,Button,ButtonGroup} from  'react-bootstrap'
import './pop.css'
import axios from 'axios'
import $ from 'jquery'

/*
  function Example() {
  
  const [lgShow, setLgShow] = useState(false);

*/
class PicPoper extends React.Component{
 constructor(props){
   super(props)
   this.state={
     pic_url_arr:[ ],
     current_url:0,
     nex_prev_mar:{marginTop:''},
     pic_index:-1,
   }
   this.setCurrentUrl=this.setCurrentUrl.bind(this)
   this.scrollRightPic=this.scrollRightPic.bind(this)
   this.scrollLeftPic=this.scrollLeftPic.bind(this)
   this.popMountPostRequest=this.popMountPostRequest.bind(this)
 
 }
 //#################################################################
 async popMountPostRequest(){
  var data;
  await axios({
      method: 'post',
      url: 'http://192.168.10.5:5000/up',
      //responseType: 'stream'
      headers: {
        'Content-Type': 'text/plain'
      },
    
    })
      .then(function (response) {
        //console.log(response.status)
        data=response.data[0]
        //console.log(data)
      
      })
      .catch(function(err){
        //window.location.replace("http://192.168.10.3:5000/login");
        //console.log(err)
      });
      console.log(data)
        

 }
 //#################################################################
scrollRightPic(){
  //let imgsrc=document.querySelector("#mv-image").getAttribute('src')
  
  
  
}

 //#################################################################
scrollLeftPic(){
  
  
} 
 
 //#################################################################
    
 
 
 //#################################################################

setCurrentUrl(x){

  
  //  this.setState({current_url:this.props.src.slice(-1)[0],pic_url_arr:this.props.src,pic_index:this.props.src.length-1})
  
}
//###############################################################################################
componentDidMount() {
  this.setState({pic_url_arr:this.props.src})
  this.setCurrentUrl(-1)
  

  
}
//###############################################################################################
componentWillUnmount() {
 
  
}
//###############################################################################################

render(){

  //##############################
              //on document load jquery codes
      //##############################
      $(window).on('load',function(){




      })
   //##############################
              //on document resize jquery codes
      //##############################
      $(window).on('resize',function(){

     

        
      })
 
  return (
    <React.Fragment>
      
      
    
      <Modal   scrollable  centered  dialogClassName="modal-70w" show={this.props.picshow}  onHide={this.props.setPicShow}     >
        <Modal.Body >
        <Container  fluid>
          <Row> 
          <Col xs={1} sm={1} md={1} xl={1} id='bpre-col'>
           <Container className='d-flex h-100' fluid>
          <Button variant='light' id='bt-ref'className='nex-prev-btns align-self-center' onClick={this.scrollLeftPic}>
          <i className='fa fa-arrow-left fa-2x'name='prevpic'/>
          </Button>
          </Container>
        </Col>
      
          
          
          <Col className="pop-btn-con">

          <Image id="mv-image" fluid src={this.state.current_url} className="d-block w-100" />
          <ButtonGroup  className='btn btn-block pop-btn'>                        
              <Button  onClick={this.uploadPic} variant="dark"  >

                  <i className='fa fa-picture-o' name='addpic'/>
                  <form id="profileUpload-pop" style={{display: 'none'}}>
                  <input  type="file" id='pupload' name='photo'  />
                  <input type='submit' id='psubmit' />

                  </form>
                  </Button>
                  <Button    variant="dark"  >
                  <i className="fa fa-trash-o" name="deleteprof"  />
                  </Button>
              
            </ButtonGroup>
           
          </Col >
          
        
       <Col xs={1} sm={1} md={1} xl={1} >
        <Container  className='d-flex h-100'fluid>
           <Button  className='nex-prev-btns align-self-center' onClick={this.scrollRightPic} variant='light'>
          <i className='fa fa-arrow-right fa-2x'  name='nextvpic'/>
          </Button>
          </Container>

          </Col>
          </Row>
         
          </Container>
          </Modal.Body>
        
      </Modal>
    </React.Fragment>
  );
  }
}

export default PicPoper;