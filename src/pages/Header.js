const Header = (props) => {
    const menus = [
        {
            name: "내 쿠폰",
            value: "CouponList"
        },
        {
            name: "사용가능",
            value: "UsableCouponList"
        },
        {
            name: "공유중",
            value: "SharedCouponList"
        },
        {
            name: "사용완료",
            value: "UsedCouponList"
        },
        {
            name: "공유방 관리",
            value: "GroupList"
        },
    ]

    const onHeaderClick = (event, value) => {
        props.setSelectedHeader(value);
    }

    return (
        <header className="header">
            {
                menus.map((elem) => {
                    const isActive = props.selectedHeader === elem.value;
                    return (
                        <div key={elem.name} className="tabs" style={{ backgroundColor: isActive ? "#FFD700" : "#FFFFFF" }}>
                            <div
                                key={elem.value}
                                onClick={(event) => { onHeaderClick(event, elem.value) }}
                            >
                                {elem.name}
                            </div>
                        </div>
                    )
                })
            }
        </header>
    );
};

export default Header;
