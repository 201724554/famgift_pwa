import React, { useEffect } from 'react';
import '../css/Modal.css';

const Modal = (props) => {
    const { isModalOpen, setIsModalOpen, modalText, buttonText, onButtonClick, modalData, setModalData, etcData } = props;
    useEffect(()=>{
        setModalData(modalData);
    },[isModalOpen])

    const close = () => {
        setModalData("");
        setIsModalOpen(false);
    }

    return (
        <div className="main">
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-title"/>
                        <span className="modal-subtitle">{modalText}</span>
                        <input
                            type="text"
                            defaultValue={modalData}
                            onChange={(e)=>setModalData(e.target.value)}
                            className="modal-input"
                        />
                        <button onClick={()=>onButtonClick(modalData, etcData)} className="modal-button">
                            {buttonText}
                        </button>
                        <button onClick={()=>close()} className="modal-button-close">
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
