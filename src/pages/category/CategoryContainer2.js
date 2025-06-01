import React, { useEffect, useState } from 'react';
import CategoryBox from './CategoryBox.js';
import { customAxios } from '../../common/CustomAxios.js';

const CategoryContainer2 = (props) => {
    const [categories, setCategories] = useState([]);

    const init = () => {
        customAxios.get("category")
                    .then(
                        (response) => {
                            setCategories(response.data);
                        }
                    )
                    .catch((err) => console.log(err))
                }

    useEffect(init, []);

    return (
        <>
            <div className="categoty-container" style={{ paddingTop: '0px' }}>
                <div className="categoty-header">
                    {
                        categories.map(
                            (elem, index)=>(
                                <CategoryBox key={elem.id} category={elem} selectedCategories={props.selectedCategories} setSelectedCategories={props.setSelectedCategories} onTouchStartAtv={false} onTouchEndAtv={false}/>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryContainer2;
