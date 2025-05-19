import React from "react";

const CouponsHeader = () => {
    return (
        <div className="filter-section">
            <select className="filter-dropdown">
                <option value="default">사용처 순</option>
            </select>
            <input type="text" className="search-input" placeholder="검색" />
        </div>
    );
};

export default CouponsHeader;
