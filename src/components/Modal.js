import React from 'react';
import Portal from './Portal';
import './style/modal.css';

const Modal = (props) => {

    const { children, title, modalType } = props;

    return (
        <Portal>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 style={{color:"#007dc0"}} className="modal-title titleJobCardModal" id="exampleModalLabel" >{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary closeModalButton" data-bs-dismiss="modal">Cerrar</button>
                            {
                                modalType === "job" ? (
                                    <button type="button" className="btn btn-primary goThereModal">Aplicar</button>
                                ) : (
                                    <button type="button" className="btn btn-primary goThereModal">Contactar</button>
                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )

}

export default Modal;