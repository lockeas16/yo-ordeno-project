import React from "react";
import QRCode from "qrcode.react";

const QRCodeComp = ({ url }) => (
  <QRCode
    value={url}
    bgColor={"rgba(0,0,0,0)"}
    size={512}
    level={"L"}
    includeMargin={true}
    renderAs={"svg"}
  />
);

export default QRCodeComp;
