import "./TopBar.css";
import { CameraIcon, IGTVIcon, MessangerIcon, LogoIcon } from "../../icons";

const TopBar = ({setSection}) => {

    const onHandleSectionClick = (sectionSelectioned) => {
        setSection(sectionSelectioned);
    }

    return (
            <div className="TopBar">
                <div className="TopBar_Camera" onClick={() => onHandleSectionClick('camera')}>
                    <CameraIcon />
                </div>

                <div className="TopBar_Logo" onClick={() => onHandleSectionClick('home')}>
                    <LogoIcon />
                </div>

                <div className="TopBar_Actions">
                    <div onClick={() => onHandleSectionClick('tv')}>
                        <IGTVIcon />
                    </div>
                    <div onClick={() => onHandleSectionClick('messages')}>
                        <MessangerIcon />
                    </div>
                   
                </div>
            </div>
    )
}

export default TopBar;