import React from 'react';
import Button from './core/Button';

class Add extends React.Component {
    constructor(props){
        super(props)
          this.state={
              input: '',
              price: 1,
          }

        

    }
    
    render() {
        return(
           
            <div>
                Add
             <form>
                  <label>
                   <input type="text"/>
                 </label>
             </form>

            </div>

        );  
    }
};
export default Add;