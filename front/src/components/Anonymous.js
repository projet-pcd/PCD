import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import Upload from "./sousComponents/Upload";
function Anonymous() {
  return (
    <div>
      {" "}
      <br />
      CVs
      <br />
      <Upload />
      <br />
      Offres PFes
      <Upload />
    </div>
  );
}

export default Anonymous;
