import { useEffect } from "react";

function Sub() {
    useEffect(() => {
        console.log("sb");
    },[]);

    return (
        <div>&nbsp; &nbsp; &nbsp; SUB</div>
    );
}

export default Sub;