import React from 'react';

class Pay extends React.Component {
    render() {
        return(
          <div>
             <button type="button" className="btn btn-primary" 
                onClick={this.props.onClick}>
                    Pay
                {this.props.children}
            </button>
          </div>

        );
    }
}
export default Pay;