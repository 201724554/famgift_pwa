import React, { useEffect, useState } from 'react';
import Modal from "../../common/Modal.js";
import CategoryBox from './CategoryBox.js';
import { customAxios } from '../../common/CustomAxios.js';

const CategoryContainer = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [category, setCategory] = useState("");
    const [selectedCategories, addSelectedCategories] = useState([]);

    const init = () => {
        customAxios.get(process.env.REACT_APP_API_URL + "category")
                    .then(
                        (response) => {
                            setCategories(response.data);
                        }
                    )
                    .catch((err) => console.log(err))
                }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const addCategory = (category) => {
        customAxios.post(process.env.REACT_APP_API_URL + "category", {name : category})
                    .then(
                        () => {
                            setIsModalOpen(false);
                            init();
                        }
                    )
                    .catch((err) => console.log(err))
                    .finally(() => {})
    }

    const [categories, setCategories] = useState([]);

    useEffect(init, []);

    return (
        <>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalText={"추가할 카테고리를 입력하세요"} buttonText={"카테고리 추가"} onButtonClick={addCategory} modalData={category} setModalData={setCategory}/>
            <div className="categoty-container" style={{ paddingTop: '0px' }}>
                <div className="categoty-header">
                    <button className="more-button" onClick={openModal}>+</button>
                    {
                        categories.map(
                            (elem, index)=>(
                                <CategoryBox key={elem.id} category={elem}/>
                            )
                        )
                    }
                    <button className="more-button">•••</button>
                </div>
            </div>
        </>
    );
};

export default CategoryContainer;
