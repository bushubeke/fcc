import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Overlay,Tooltip} from  'react-bootstrap'




class ToolPoper extends React.Component{
        

render(){
    return (
      <React.Fragment>
        <Overlay target={this.props.target.current} show={this.props.show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {this.props.pas_name}
          </Tooltip>
        )}
      </Overlay>
      </React.Fragment>
    );
  }
}
  export default ToolPoper;