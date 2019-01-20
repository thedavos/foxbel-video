import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../../widgets/components/search";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

class SearchContainer extends Component {
  state = {
    value: ""
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.input.value);
    const query = this.input.value;
    this.props.actions.searchAsyncVideo(query);
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer);
