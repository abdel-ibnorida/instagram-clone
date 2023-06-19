import "./TopBar.css";
import { CameraIcon, IGTVIcon, MessangerIcon, LogoIcon } from "../../icons";

const TopBar = () => {
    return (
            <div className="TopBar">
                <div className="TopBar_Camera">
                    <CameraIcon />
                </div>

                <div className="TopBar_Logo">
                    <LogoIcon />
                </div>

                <div className="TopBar_Actions">
                    <IGTVIcon />
                    <MessangerIcon />
                </div>
            </div>
    )
}

export default TopBar;