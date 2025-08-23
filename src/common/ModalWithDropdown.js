import React, { useState, useEffect } from 'react';
import '../css/Modal.css';
import { isEmpty } from './Util';

const ModalWithDropdown = (props) => {
    const {
        isModalOpen,
        setIsModalOpen,
        modalText,
        buttonText,
        onButtonClick,
        getDropdownData,
        etcData
    } = props;
    // const [dropdownOptions, setDropdownOptions] = useState([{groupId: 'Option 1', groupName: "dd"}
    //     , {groupId: 'Option 2', groupName: "ddd"}]);
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [dropdownData, setDropdownData] = useState();

    const thenFunction = (res) => {
        if (isModalOpen === true) {
            setDropdownOptions(res.data);
        } else {
            setIsModalOpen(false);
        }
    }

    useEffect(() => {
        getDropdownData(thenFunction)
        
    }, [isModalOpen]);

    useEffect(() => {
        if(!isEmpty(dropdownOptions)) {
            setDropdownData(dropdownOptions[0].groupId);
        }
    }, [dropdownOptions])

    return (
        <div className="main">
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-title" />
                        <span className="modal-subtitle">{modalText}</span>
                        <select
                            onChange={(e) => { setDropdownData(e.target.value) }}
                            className="modal-input"
                        >
                            {dropdownOptions.map((option, index) => (
                                <option key={index} value={option.groupId}>
                                    {option.groupName}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={() => onButtonClick(dropdownData, etcData)}
                            className="modal-button"
                        >
                            {buttonText}
                        </button>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="modal-button-close"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalWithDropdown;
