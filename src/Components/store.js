import React from 'react';
import util from '../util';
import Product from './product.jsx';

class Store extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: this.getCategoryObject(util.getQsVar("cat"))
        };

        this.onCategorySelect = this.onCategorySelect.bind(this);
        this.getCategoryObject = this.getCategoryObject.bind(this);
        this.onTestClick = this.onTestClick.bind(this);
    }


    componentDidMount() {
    }

    getCategoryObject(categoryName) {
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].name === categoryName) {
                return this.props.data[i];
            }
        }
        return null;
    }

    onTestClick() {
        this.setState({
            ...this.state,
            selectedCategory: this.getCategoryObject("PC Components")
        });
    }

    onCategorySelect(e) {
        let categoryName = e.target.value;
        this.setState({
            ...this.state,
            selectedCategory: this.getCategoryObject(categoryName)
        });
    }

    render() {
        let categoryName = null;
        if (this.state.selectedCategory) {
            categoryName = this.state.selectedCategory.name
        } else {
            categoryName = "";
        }

        let Products = null;
        if (this.state.selectedCategory) {
            Products = (
                <ul>
                    {
                        this.state.selectedCategory.products.map((prod, i) => {
                            return (
                                <li key={prod.name + i}> <Product data={prod} /></li>
                            );
                        })
                    }
                </ul>
            );
        } else {
            Products = (<h1>No category selected</h1>)
        }

        return (<>
            <h2>Select Category</h2>
            <select onChange={this.onCategorySelect} value={categoryName}>
                <option>---</option>
                {this.props.data.map((item, i) => {
                    return (<option value={item.name} key={"store_category" + i}>
                        {item.name}
                    </option>)
                })}
            </select>
            <div>
                {Products}
            </div>
            <button type='button' onClick={this.onTestClick}>TEST BUTTON</button>
        </>
        );
    }

}

export default Store;