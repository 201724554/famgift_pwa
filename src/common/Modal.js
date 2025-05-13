import React, { useEffect } from 'react';
import '../css/Modal.css';

const Modal = (props) => {
    const { isModalOpen, setIsModalOpen, modalText, buttonText, onButtonClick, modalData, setModalData } = props;

    useEffect(()=>{
        setModalData("");
    },[isModalOpen])

    return (
        <div className="main">
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-title"/>
                        <span className="modal-subtitle">{modalText}</span>
                        <input
                            type="text"
                            value={modalData}
                            onChange={(e)=>setModalData(e.target.value)}
                            className="modal-input"
                        />
                        <button onClick={()=>onButtonClick(modalData)} className="modal-button">
                            {buttonText}
                        </button>
                        <button onClick={()=>setIsModalOpen(false)} className="modal-button-close">
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
