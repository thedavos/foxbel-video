import React, { Component } from "react";
import { connect } from "react-redux";
import { List as list } from "immutable";
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../../related/components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
import * as actions from "../../actions/actions";
import { bindActionCreators } from "redux";

class Home extends Component {
  handleOpenModal = id => {
    this.props.actions.openModal(id);
  };

  handleModalClose = () => {
    this.props.actions.closeModal();
  };

  render() {
    const { categories, friends, search, isLoading } = this.props;
    return (
      <HandleError>
        <HomeLayout>
          <Related categories={categories} friends={friends} />
          <Categories
            categories={categories}
            handleOpenModal={this.handleOpenModal}
            search={search}
            isLoading={isLoading}
          />
          {this.props.modal.get("visibility") && (
            <ModalContainer>
              <Modal handleClick={this.handleModalClose}>
                <VideoPlayer autoplay id={this.props.modal.get("mediaId")} />
              </Modal>
            </ModalContainer>
          )}
        </HomeLayout>
      </HandleError>
    );
  }
}

const mapStateToProps = state => {
  const categories = state
    .getIn(["data", "categories"])
    .map(categoryId =>
      state.getIn(["data", "entities", "categories", categoryId])
    );

  const friends = state
    .get("data")
    .get("friends")
    .map(friendId =>
      state
        .get("data")
        .get("entities")
        .get("friends")
        .get(friendId)
    );

  let searchResults = list();
  const search = state.get("data").get("search");
  if (search) {
    const mediaList = state
      .get("data")
      .get("entities")
      .get("media");
    searchResults = mediaList
      .filter(
        media =>
          media
            .get("author")
            .toLowerCase()
            .trim()
            .includes(search) ||
          media
            .get("title")
            .toLowerCase()
            .trim()
            .includes(search)
      )
      .toList();
  }
  return {
    categories,
    friends,
    search: searchResults,
    modal: state.get("modal"),
    isLoading: state.get("isLoading").get("active")
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
