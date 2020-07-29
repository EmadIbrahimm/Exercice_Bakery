import React from 'react';
import Button from './core/Button';
import Slider from './core/Slider';

class Add extends React.Component {
    constructor(props){
        super(props)
          this.state={
              input: '',
              price: 1,
              min: 1,
              max: 10,

          };
          this.handleChangeSlider= this.handleChangeSlider.bind(this);
          this.handleInput= this.handleInput.bind(this);
          this.onSubmit= this.onSubmit.bind(this)
    }
    

    handleChangeSlider(val) {
        console.log(val)
        this.setState({
            price: val
        })
    }
    // to save info from input
    handleInput(evt) {
        this.setState({
            input: evt.target.value
        })
    };
    onSubmit() {
        this.props.onAdd(this.state.price, this.state.input);
        this.setState({ input: '' , price: 1 })

      }
      
    render() {
        return(
            <div className="container-fluid">
                <div className="input-group mb-3">
                <form>
                  <label>
                   <input type="text" placeholder='item' value={this.state.input} onChange={this.handleInput}/>
                 </label>
                 <button className='btn btn-outline-primary' type='button' onClick={this.onSubmit}>
                   Add 
                 </button>
                 {/* onAdd={this.handleInput} */}
                 
                </form>
             
                </div>
                
                <Slider
               min={this.state.min}
               max={this.state.max}
               value={this.state.price}
               onChange={this.handleChangeSlider}/>
            </div>

        );  
    }
};
export default Add;