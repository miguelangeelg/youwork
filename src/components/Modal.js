import React from "react";
// import Portal from './Portal';
import { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import "./style/modal.css";
import { Button } from "primereact/button";
// import { Tooltip } from 'primereact/tooltip';

const Modal = (props) => {
  const { children, title, modalType, openModal, setOpenModal, infoModal } =
    props;

  const [displayBasic2, setDisplayBasic2] = useState(false);

  useEffect(() => {
    if (openModal === true) {
      setDisplayBasic2(true);
    }
  }, [openModal]);

  const onHide = () => {
    setDisplayBasic2(false);
    setOpenModal(false);
  };

  const renderFooter = () => {
    return (
      <div>
        <Button
          label="Cerrar"
          icon="pi pi-times"
          onClick={() => onHide()}
          className="p-button-text"
        />

        {modalType === "job" ? (
          <Button
            label="Aplicar"
            className="goThereModal"
            icon="pi pi-check"
            onClick={() => onHide()}
            autoFocus
          />
        ) : (
          <Button
            label="Contactar"
            className="goThereModal"
            icon="pi pi-check"
            autoFocus
          />
        )}
      </div>
    );
  };

  return (
    <>
      {infoModal ? (
        <Dialog
          header={title}
          id="modalCustom"
          styleClass="modalPopUp"
          visible={displayBasic2}
          style={{ width: 480, borderRadius: 6 }}
          footer={renderFooter()}
          onHide={() => onHide()}
        >
          {children}
        </Dialog>
      ) : (
        <Dialog
          header={title}
          id="modalCustom"
          styleClass="modalPopUp"
          visible={displayBasic2}
          style={{ width: 480, borderRadius: 6 }}
          footer={renderFooter()}
          onHide={() => onHide()}
        >
        </Dialog>
      )}
    </>
  );
};

export default Modal;
