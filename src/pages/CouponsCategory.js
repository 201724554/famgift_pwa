import React, { useState } from 'react';
import Modal from "../common/Modal.js";
import { customAxios } from '../common/CustomAxios';

const CouponsCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const addCategory = (category) => {
        customAxios.post(process.env.REACT_APP_API_URL + "category", {name : category})
                    .then(
                        (data) => {
                            console.log(data);
                        }
                    )
                    .catch((err) => console.log(err))
                    .finally(() => {
                        setIsModalOpen(false);
                    })
    }

    return (
        <>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalText={"추가할 카테고리를 입력하세요"} buttonText={"카테고리 추가"} onButtonClick={addCategory}/>
            <div className="categoty-container" style={{ paddingTop: '0px' }}>
                <div className="categoty-header">
                    <button className="more-button" onClick={openModal}>+</button>
                    
                    <button className="more-button">•••</button>
                </div>
            </div>
        </>
    );
};

export default CouponsCategory;
