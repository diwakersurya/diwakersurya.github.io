import React from "react"
import Image from "./image"
var style = {
  backgroundColor: "#F5D0B5",
}
var styleProfileParent = {
  width: "100%",
  marginBottom: "5px",
}
var styleProfileImage = {
  border: "5px solid white",
  left: "0px",
}
const ProfileImage = ({ name }) => (
  <div className="mdl-card mdl-shadow--2dp" style={styleProfileParent}>
    <div className="mdl-card__title mdl-card--expand" style={style}>
      <Image
        name={"ProfileImage"}
        style={{ width: 200, border: "5px solid white" }}
      ></Image>
    </div>
    <div className="mdl-card__supporting-text">
      <h2 className="mdl-card__title-text">{name}</h2>
    </div>
  </div>
)
export default ProfileImage
