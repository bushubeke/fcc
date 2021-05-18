import React from 'react';
import {Col,Button,Card,ButtonGroup} from  'react-bootstrap'
//import { } from  'react-bootstrap'
//import $ from 'jquery'
import './fmessec.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PicPoper from './popover/picpopover';
import tdpicture from './marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import './mainsrc.css'
import axios from 'axios';
class PicSection extends React.Component {
    constructor(props){ 
      super(props);
      this.PicRef = React.createRef();
      this.state = {
        show:false,
        picshow:false,
        pic_mar:{marginLeft:''},
        buttg_mar:{width:''},
        upFile:'',
        profile_pic_url:[]
        
        
      }
      //binding done here for function
      //this.handleResize=this.handleResize.bind(this)
      
      this.setPicShow=this.setPicShow.bind(this);
      this.setPicMargins=this.setPicMargins.bind(this);
      this.uploadPic=this.uploadPic.bind(this)
      this.fileUploadOperation=this.fileUploadOperation.bind(this)
      this.fileSubmit=this.fileSubmit.bind(this) 
      this.getDatafromURL=this.getDatafromURL.bind(this)   
        
    }
    //#################################################################################
    setPicShow(){
     
        this.setState({picshow:!this.state.picshow})
      
    }
     //#################################################################################
    shouldComponentUpdate(){
      return true;
    }
     //#################################################################################
    componentDidMount() 
    { 
      //this.props.setFirstUpdate()
      //console.log('before first data fetch')
      //this.getDatafromURL()
      //console.log('after first data fetch')
      //this.setPicMargins()
      //document.addEventListener('resize',this.setPicMargins())
    }
     //#################################################################################
    componentWillUnmount() {
      //document.removeEventListener('resize',this.setPicMargins())
    }
     //#################################################################################
     async uploadPic(){
      
      let fileUpload=document.querySelector('#pupload');
      fileUpload.click();
      
      //console.log(fileUpload)

     }
     //######################################################################################################
      setPicMargins(){

                //#####################################
                // not only the pic margins are calculated and set here but also add pic and delete button
           //     let pic_row_width=document.querySelector('#picrow').offsetWidth;
                //let button_wid=document.querySelector('#butgroup_id').offsetWidth;
            //    let pic_marg=((pic_row_width-145)*0.5 )+ 'px';
                //let buttg_marg=((pic_row_width-button_wid)*0.5 )+ 'px';
             //   this.setState({pic_mar:{marginLeft:pic_marg},buttg_mar:{width:pic_row_width} });

      }

     //#################################################################################
      fileUploadOperation(){

          //*****************************************************************************************
          // this lines below are taken from https://www.aspsnippets.com/Articles/Open-Fileupload-Upload-File-on-Button-Click-using-JavaScript-and-jQuery.aspx
        //let formData=new FormData();
        let submitevent=document.querySelector('#psubmit')
        submitevent.click();
        

      }
      //#####################################################################################33

      fileSubmit(event){
        event.preventDefault(); 




        //then axios is used to save the file below here by making post request with the data on 192.168.10.3:5000/uploads
        //******************** this is taken from axios */
        // source of axios useage syntax https://inthetechpit.com/2020/03/12/upload-file-in-reactjs-to-webapi/ and
        //https://www.npmjs.com/package/axios#axios-api
      
        var formData=document.querySelector('#profileUpload');
         //console.log(this.props.appstate.token)
        
        var data= new FormData(formData); 

        data.append('user_id',this.props.appstate.userid)
        //console.log(data)
          axios({
          method: 'PUT',
          //aseURL:this.state.baseURL,
          //url: this.state.picUploadURL,style={this.state.buttg_mar}
          url:'http://192.168.10.7:5000/transtext/profile',
          
          headers: {
            "Content-Type": "multipart/form-data",
            //'Content-Type': 'application/json',
            "X-APP-KEY" :this.props.appstate.token
          },
          data:data,
        }).then((response)=>{
          console.log(response.data)
        }).catch((error)=>{
          console.log(error)
        });



      }


     //#################################################################################
     async getDatafromURL(){

        // for ther real app the api request url should be given by current user id which will be passed down as props
            //var 
        //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77
        // the below syntax is taken from axios npm
        //console.log(this.props.appstate.token)
        //var data;
      await axios({
          method: 'get',
          url: 'http://192.168.10.7:5000/transtext/profile',
          //responseType: 'stream'
          headers: {
            "Content-Type": "multipart/form-data",
            "X-APP-KEY" :this.props.appstate.token,
          },
        
        })
          .then(function (response) {
            //console.log(response.status)
            //data=response.data[0]
            //console.log(data)
          
          })
          .catch(function(err){
            //window.location.replace("http://192.168.10.3:5000/login");
            console.log(err)
          });
          //console.log()
          
            }


     //#################################################################################

    render() {

  
     
   
      return (
        <React.Fragment>
            <Col id="rc11" xs={4} >
            <Card id="pic-sec-card-group">
                <Card.Img  onClick={this.setPicShow} src={this.state.profile_pic_url.length !==0 ? this.state.profile_pic_url.slice(-1)[0]: tdpicture}  ref={this.PicRef} variant="top" height="95px" />
                 
                    <ButtonGroup id='pic-sec-btn-group'  className='btn btn-block'>                        
                       <Button  onClick={this.uploadPic} variant="light"  >

                          <i className='fa fa-picture-o' name='addpic'/>
                          <form id="profileUpload" style={{display: 'none'}}>
                       
                          <input  type="file" id='pupload' name='photo' onChange={this.fileUploadOperation} />
                          <input type='submit' id='psubmit' onClick={this.fileSubmit} />

                          </form>
                          </Button>
                          <Button    variant="light"  >
                          <i className="fa fa-pencil" name="updateprof"  />
                          </Button>
                      
                      </ButtonGroup>
  
                    
                  
                </Card>

                <PicPoper picshow={this.state.picshow} setPicShow={this.setPicShow} />
            </Col >
           
           
            
              
        </React.Fragment>
   
      );
    }
  }
  export default PicSection;