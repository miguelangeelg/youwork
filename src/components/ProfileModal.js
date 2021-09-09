import React from 'react';


const ProfileModal = () => {

    return (
        <div className="modalProfile">
            <div className="modal fade" id="modalProfile" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title titleJobCardModal" id="exampleModalLabel" >$$</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="descriptionModalJob">
                                _
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" style={{background:"#da2021", borderColor:"#da2021"}} className="btn btn-primary ">Aplicar a este trabajo</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}


export default ProfileModal;