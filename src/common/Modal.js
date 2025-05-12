import React, { useEffect, useState } from 'react';
import '../css/Modal.css';

const Modal = (props) => {
    const { isModalOpen, setIsModalOpen, modalText, buttonText, onButtonClick } = props;
    const [category, setCategory] = useState("");

    const handleInputChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div className="main">
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-title"/>
                        <span className="modal-subtitle">{modalText}</span>
                        <input
                            type="text"
                            placeholder="카페"
                            value={category}
                            onChange={handleInputChange}
                            className="modal-input"
                        />
                        <button onClick={()=>onButtonClick(category)} className="modal-button">
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
