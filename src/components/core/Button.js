import React, { Children } from 'react';



class Button extends React.Component {

render() {
  let btnClass = 'btn btn-outline-primary';
  if (this.props.isSelected === true) {
    btnClass = "btn btn-primary mr-2"
  }
 return(
   <button className={btnClass}
   onClick={this.props.onClick}
   isSelected={this.props.isSelected}>

    {this.props.children}

   </button>
      // <div>

      //    <button type="button" className="btn btn-primary mr-2"
      //        onClick={this.props.onClick}>
      //          {this.props.children}
               
      //     </button>
      //   </div>  
  );
 }
}
export default Button;

           