
import React from 'react';

import Button from './components/core/Button'

class App extends React.Component {
// constructor(props) {
//   super(props);
//     this.state ={
//       activeTap: add,
//       items: [],

//     }

// };
renderButton() {
  return (
       <div>
          <button type="button" class="btn btn-outline-primary"> </button>
            Add
            <Button/>
       </div>
        
        <div>
          <button type="button" class="btn btn-outline-primary"> </button>
          List
        </div>
        
        <div>
          <button type="button" class="btn btn-outline-primary"> </button>
          Pay
        </div>


  );
}

  render() {
      return(
        <div>
          {this.renderButton()}
        </div>


        // <div>
        //   <button type="button" class="btn btn-outline-primary"> </button>
        //     Add
        //     <Button/>
        // </div>
        
        // <div>
        //   <button type="button" class="btn btn-outline-primary"> </button>
        //   List
        // </div>
        
        // <div>
        //   <button type="button" class="btn btn-outline-primary"> </button>
        //   Pay
        // </div>



      );

  }

}
export default App;