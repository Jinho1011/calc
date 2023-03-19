import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "./Preview.css";

const Preview = ({ url }) => {
  return <MarkdownPreview source={url} />;
};

export default Preview;
