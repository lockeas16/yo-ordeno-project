import React from "react";
import QRCode from "qrcode.react";

const QRCodeModal = ({ url }) => (
  // <div id="QRcode-modal" className="uk-flex-top" uk-modal="true">
  //   <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-large">
  //     <button
  //       className="uk-modal-close-default"
  //       type="button"
  //       uk-close="true"
  //     />
  <QRCode
    value={url}
    size={128}
    level={"L"}
    includeMargin={true}
    renderAs={"svg"}
  />
  //   </div>
  // </div>
);

export default QRCodeModal;
