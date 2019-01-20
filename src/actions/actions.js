import * as type from "../action-types/Actiontype";

export function openModal(mediaId) {
  return {
    type: type.OPEN_MODAL,
    payload: {
      mediaId
    }
  };
}

export function closeModal() {
  return {
    type: type.CLOSE_MODAL
  };
}

export function searchVideo(query) {
  return {
    type: type.SEARCH_VIDEO,
    payload: {
      query
    }
  };
}

export function searchAsyncVideo(query) {
  return dispatch => {
    dispatch(isLoading(true));
    setTimeout(() => {
      dispatch(isLoading(false));
      dispatch(searchVideo(query));
    }, 2000);
  };
}

export function isLoading(value) {
  return {
    type: type.IS_LOADING,
    payload: {
      value
    }
  };
}
