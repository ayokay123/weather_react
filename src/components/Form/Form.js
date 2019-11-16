import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <form  className="form-group" onSubmit={this.props.search}>
                    <div className="SearchBar-fields">
                        <input type="text" name="city" placeholder="city..."/>
                        <input type="text" name="country" placeholder="country..."/>
                    </div>
                    <div  className="SearchBar-submit">
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
