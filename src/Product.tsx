import React from 'react';

export default class Product extends React.Component<{name:string,price:number,description:string},{}>{

    render(): React.ReactNode {   
        return(  
            <div>
                <div >
                  {this.props.name}
                </div>
                <div>
                {this.props.price}
                </div>
                <div>
                {this.props.description}
                </div>
            </div>
        )
    }

}