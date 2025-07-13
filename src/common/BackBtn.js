import { useNavigate } from 'react-router-dom';
import { isEmpty } from './Util';


/*
link
 */
const BackBtn = (props) => {
    const navigate = useNavigate();
    
    const goBack = () => {
        const link = isEmpty(props.link) ? "/" : props.link;
        navigate(link);
    }

    return (
        <button className="back-button" onClick={()=>goBack()}>←</button>
    );
};

export default BackBtn;
