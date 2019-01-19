import React, { Component } from "react";
import { connect } from "react-redux";
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../../related/components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";

class Home extends Component {
  state = {
    modalVisible: false
  };

  handleOpenModal = media => {
    console.log(media);
    this.setState({
      modalVisible: true,
      media
    });
  };

  handleModalClose = ev => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { categories, friends, search } = this.props;
    return (
      <HandleError>
        <HomeLayout>
          <Related categories={categories} friends={friends} />
          <Categories
            categories={categories}
            handleOpenModal={this.handleOpenModal}
            search={search}
          />
          {this.state.modalVisible && (
            <ModalContainer>
              <Modal handleClick={this.handleModalClose}>
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
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
    .get("data")
    .get("categories")
    .map(categoryId =>
      state
        .get("data")
        .get("entities")
        .get("categories")
        .get(categoryId)
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

  return {
    categories,
    friends,
    search: state.get("data").get("search")
  };
};

export default connect(mapStateToProps)(Home);
