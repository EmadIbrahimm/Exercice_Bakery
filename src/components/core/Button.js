import React from 'react';


class Button extends React.Component {

render() {
 return(
    <div className="container-fluid">
        <div className="row">
          <button type="button" className="btn btn-primary" 
             onClick={this.props.onClick}>
                 Click here
             {this.props.children}
    
          </button>
        </div>
    </div>
    
 );
 }
}
export default Button;

//    <div className="container-fluid" >
        //        <button type="button" className="btn  btn-primary" > Add </button>
        //        <button type="button" className="btn  btn-primary"> List </button>
        //        <button type="button" className="btn  btn-primary"> Pay </button>
               

        //    </div>
           