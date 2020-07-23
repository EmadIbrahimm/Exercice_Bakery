
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/core/Button';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTap: 'add',
      items:[],
      


      };
    };
  };
  
  
  
  render() {

    return(
      <div>
        
        <Button onClick={() =>{
          console.log('it works')
         
        }}> 
        
        </Button>

       

        <Add onClick={() =>{
          this.setState({
            activeTap: this.state.TabAdd,
          });
          console.log('it ')
          
          }}>  
        </Add>

        <List onClick={() =>{
          this.setState({
            activeTap: this.state.onClickTabList,

          });
          console.log('its working')
          
          }}>
          
          </List>

         <Pay onClick={() =>{ 
           this.setState({
             activeTap: this.state.onClickTabPay,
           });
          console.log('it works')
          
           }}>
            

         </Pay>
        
          
        
      </div>

    );
  };

};

export default App;