import React from 'react';

class Add extends React.Component {
    render() {
        return(
            <div>
               <button type="button" className="btn btn-primary" 
                onClick={this.props.onClick}>
                    Add
                
                {this.props.children}
               
            </button>
               
            </div>

        );
    }
}
export default Add;