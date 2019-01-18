import React, { Component } from "react";
import Search from "../../widgets/components/search";
import { connect } from "react-redux";

class SearchContainer extends Component {
  state = {
    value: ""
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.input.value);
    this.props.dispatch({
      type: "SEARCH_VIDEO",
      payload: {
        query: this.input.value
      }
    });
  };

  setInputRef = el => {
    this.input = el;
  };

  handleInputChange = ev => {
    this.setState({
      value: this.input.value
    });
  };

  render() {
    return (
      <Search
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        setRef={this.setInputRef}
        value={this.state.value}
      />
    );
  }
}

export default connect()(SearchContainer);
