import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Media from "../components/media";

class MediaContainer extends PureComponent {
  state = {
    ...this.props
  };

  handleClick = event => {
    this.state.handleOpenModal(this.state.data);
  };

  render() {
    return <Media {...this.props.data} handleClick={this.handleClick} />;
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  alt: PropTypes.string
};

const mapStateToProps = (state, props) => {
  return {
    data: state.data.entities.media[props.id]
  };
};

export default connect(mapStateToProps)(MediaContainer);
