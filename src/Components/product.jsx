import React from 'react';

class Product extends React.Component {


    componentWillUnmount() {
        console.log("UNMOUNT", this.props.data);
    }

    render() {

        if (!this.props.data) {
            return <h3>No data available</h3>
        }
        return (
            <div>
                <h3>{this.props.data.name}</h3>
                <h4>{this.props.data.price}</h4>
                <img src={this.props.data.img} alt={this.props.data.name} />
            </div>
        );
    }



}

export default Product;