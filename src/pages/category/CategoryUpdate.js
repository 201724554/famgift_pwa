import React, { useEffect, useState } from 'react';
import { isEmpty } from '../../common/Util';
import { customAxios } from '../../common/CustomAxios.js';
import BackBtn from "../../common/BackBtn";
import CategoryUpdateBox from './CategoryUpdateBox';

const CategoryUpdate = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        //카테고리 정보 조회
        init();
    }, []);

    const init = () => {
        customAxios.get("/category")
            .then((res) => { setCategories(res.data) })
            .catch()
    }

    return (
        <div className="coupon-register">
            <div className="top-section">
                <BackBtn />
            </div>
            <header className="header" style={{ marginBottom: "30px" }}>
                <h1>카테고리 관리</h1>
            </header>
            {
                categories.map((category, index) => 
                    (
                        <CategoryUpdateBox 
                            key={index}
                            categoryId={category.id}
                            categoryName={category.name}
                            refresh={init}
                        />
                    )
                )
            }
        </div>
    );
};

export default CategoryUpdate;
