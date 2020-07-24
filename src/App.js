
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/core/Button';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
class App extends React.Component {
   constructor(props) {
     super(props) 
       this.state ={
         activeTab: 'add',
         items:[]
       }
       this.onClickTapAdd= this.onClickTapAdd.bind(this);
       this.onClickTapList= this.onClickTapList.bind(this);
       this.onClickTapPay= this.onClickTapPay.bind(this);
       this.displayTappApp= this.displayTappAdd.bind(this);
       this.displayTapList= this.displayTapList.bind(this);
      //  this.displayTapPay= this.displayTapPay.bind(this);

      
   }
   onClickTapAdd() {
    
     this.setState({
       activeTap: 'add',
       
     })
   };
   
   onClickTapList() {
     this.setState({
       activeTab: 'list',
     })
   };

   onClickTapPay() {
     this.setState({
       activeTab: 'pay'
     });
     
   }

   displayTappAdd() {
    if (this.state.activeTab === 'add') {
      return <Add />;
     }
   }

   displayTapList() {
    if (this.state.activeTab === 'list') {
      return <List/>;
     }
   }

   
  render() {
    // if (this.state.activeTab === 'add') 
    //   return <Add />;
    console.log(this.state.activeTab)
    
    return(
      
        <div className="container-fluid">
          <div className="row">
          

          <Button onClick={this.onClickTapAdd} > Add </Button>
          <Button onClick={this.onClickTapList} > List </Button>
          <Button onClick={this.onClickTapPay} > Pay </Button>
     
         
          </div>
          <div> 
            {this.displayTappAdd()}
            {/* {this.displayTapPay()} */}
            {this.displayTapList()}
            <Pay/>
            
              
          </div>
          
  
        </div>
        

      );
    
  }
};

export default App;

