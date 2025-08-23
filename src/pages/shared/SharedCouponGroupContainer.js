import React, { useEffect, useState } from 'react';
import Modal from "../../common/Modal.js";
import { customAxios } from '../../common/CustomAxios.js';
import { useNavigate } from 'react-router-dom';
import ShareCouponGroupBox from './SharedCouponGroupBox.js';


//[groups, setGroups]
//[selectedGroup, setSelectedGroup]
const SharedCouponGroupContainer = (props) => {
    return (
        <>
            <div className="categoty-container" style={{ paddingTop: '0px', paddingBottom: '10px' }}>
                <div className="categoty-header">
                    {
                        props.groups.map(
                            (elem, index) => (
                                <ShareCouponGroupBox
                                    key={elem.groupId}
                                    group={elem}
                                    selectedGroups={props.selectedGroups}
                                    setSelectedGroups={props.setSelectedGroups}
                                    maxCnt={1}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default SharedCouponGroupContainer;
