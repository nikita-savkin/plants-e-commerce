import React from "react";
import { withRouter } from "react-router";
import "./menu-item.scss";

const MenuItem = ({ sectionInfo, history, match }) => {
  const { title, imageUrl, linkUrl } = sectionInfo;
  return (
    <div
      className="menu-item"
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
