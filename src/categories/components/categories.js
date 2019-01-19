import React from "react";
import Category from "./category";
import Search from "../containers/search";
import MediaContainer from "../../playlist/containers/media";
import "./categories.css";

function Categories(props) {
  const { categories, handleOpenModal, search } = props;

  return (
    <div className="Categories">
      <Search />
      {search.map(item => (
        <MediaContainer
          key={item.get("id")}
          handleOpenModal={handleOpenModal}
          {...item.toJS()}
        />
      ))}
      {categories.map(item => {
        return (
          <Category
            key={item.get("id")}
            id={item.get("id")}
            {...item.toJS()}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </div>
  );
}

export default Categories;
