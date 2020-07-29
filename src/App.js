
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
       this.displayTapPay= this.displayTapPay.bind(this);

      
   }
   onClickTapAdd() {
    
     this.setState({
       activeTab: 'add',
       
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
      return <Add onAdd={this.onAdd}/>;
     }
    //  return null
   }

   displayTapList() {
    if (this.state.activeTab === 'list') {
      return <List/>;
     }
   }

   displayTapPay() {
    if (this.state.activeTab === 'pay') {
      return <Pay/>;
     }
   }
   onAdd(price, input) {
     console.log(input, price)

   }


   
  render() {
    // if (this.state.activeTab === 'add') 
    //   return <Add />;
    console.log(this.state.activeTab)
    // let {
    //   activeTab
    // } = isSelcted
    return(
      
        <div className="container-fluid" mr-3 >
          <div className="row">
          
          <Button onClick={this.onClickTapAdd} isSelected={this.state.activeTab ==='add' ? true : false}> Add </Button>
          <Button onClick={this.onClickTapList} isSelected={this.state.activeTab ==='list' ? true : false}> List </Button>
          <Button onClick={this.onClickTapPay} isSelected={this.state.activeTab ==='pay' ? true : false}> Pay </Button>
         
         
          </div>
          <div> 
            {this.displayTappAdd()}
            {this.displayTapPay()}
            {this.displayTapList()}
            {/* <Pay/> */}
            
          </div>
        </div>
      );
  }
};

export default App;

