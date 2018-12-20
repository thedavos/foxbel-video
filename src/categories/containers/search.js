import React, { Component } from 'react'
import Search from '../../widgets/components/search'

class SearchContainer extends Component {

    state = {
        value: 'Luis Fonsi',
    }

    handleSubmit = ev => {
        ev.preventDefault();
        console.log(this.input.value);
        
    }

    setInputRef = el => {
        this.input = el
    }

    handleInputChange = ev => {
        this.setState({
            value: this.input.value.replace(' ', '-')
        })
    }

    render() {
      return (
        <Search 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleInputChange}
            setRef={this.setInputRef}
            value={this.state.value}
        />
      )
    }
}

export default SearchContainer