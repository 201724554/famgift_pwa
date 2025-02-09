import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="tabs">
                <NavLink to="/">전체보기</NavLink>
                <NavLink to="/1">사용가능</NavLink>
                <NavLink to="/2">공유중</NavLink>
                <NavLink to="/3">사용완료</NavLink>
            </div>
            <div className="tabs">
                <NavLink to="5">공유방 만들기</NavLink>
            </div>
        </header>
    );
};

export default Header;
