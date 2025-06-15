import React, { useEffect, useState } from 'react';
import Modal from "../../common/Modal.js";
import CategoryBox from './CategoryBox.js';
import { customAxios } from '../../common/CustomAxios.js';

//[categories, setCategories]
//[selectedCategories, setSelectedCategories]
//getCategories
const CategoryContainer = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCategory, setNewCategory] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
    }

    const addCategory = (category) => {
        customAxios.post(process.env.REACT_APP_API_URL + "category", { name: category })
            .then(
                () => {
                    setIsModalOpen(false);
                    props.getCategories();
                }
            )
            .catch((err) => console.log(err))
            .finally(() => {})
    }

    return (
        <>
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                modalText={"추가할 카테고리를 입력하세요"}
                buttonText={"카테고리 추가"}
                onButtonClick={addCategory}
                modalData={newCategory}
                setModalData={setNewCategory}
            />
            <div className="categoty-container" style={{ paddingTop: '0px' }}>
                <div className="categoty-header">
                    <button className="more-button" onClick={openModal}>+</button>
                    {
                        props.categories.map(
                            (elem, index) => (
                                <CategoryBox
                                    key={elem.id}
                                    category={elem} 
                                    selectedCategories={props.selectedCategories}
                                    setSelectedCategories={props.setSelectedCategories}/>
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
