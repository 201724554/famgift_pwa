import React, { useEffect, useState } from 'react';
import { isEmpty } from '../../common/Util';
import { customAxios } from '../../common/CustomAxios';
import Modal from "../../common/Modal.js";

/*
categoryName
categoryId
init()
 */
const CategoryUpdateBox = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState(props.categoryName);

    const deleteCategory = () => {
        if (window.confirm("카테고리를 삭제할까요?")) {
            customAxios.delete("/category", { data: { id: props.categoryId } })
                .then(() => {
                    setIsModalOpen(false);
                    props.refresh();
                })
                .catch()
        }
    }

    const updateCategory = (name, id) => {
        customAxios.put("/category", { name: name, id: id })
            .then(() => {
                setIsModalOpen(false);
                props.refresh();
            })
            .catch()
    }

    return (
        <div className="coupon-card">
            <div className="coupon-info">
                {props.categoryName}
            </div>
            <div>
                <button className="delete-button" onClick={() => deleteCategory()}>🗑️</button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="edit-button" onClick={() => setIsModalOpen(true)}>✏️</button>
            </div>
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                modalText={"변경할 카테고리 이름을 입력하세요"}
                buttonText={"카테고리 변경"}
                onButtonClick={updateCategory}
                modalData={newCategoryName}
                setModalData={setNewCategoryName}
                etcData={props.categoryId}
            />
        </div>
    );
};

export default CategoryUpdateBox;
