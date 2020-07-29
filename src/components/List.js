import React from 'react';
import Button from './core/Button';


class List extends React.Component {
    render() {
        return(
            <div>
                <ul> 
                    {this.props.items.map((keys)=>{
                        return (<li keys= {keys} > {keys.input} {keys.price} $ </li>
                            );

                    })}
                </ul>
            </div>

        );
    }
}
export default List;