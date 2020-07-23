import React from 'react';


class List extends React.Component {
    render() {
        return(
            <div>
               <button type="button" className="btn btn-primary" 
                onClick={this.props.onClick}>
                    List
                
                {this.props.children}
               
            </button>
               
            </div>

        );
    }
}
export default List;