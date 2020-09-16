import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider"


function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL}
                   title = {user.displayName}
            />
            <SidebarRow Icon={LocalHospitalIcon} title="Thông tin covid-19"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Trang chủ"/>
            <SidebarRow Icon={PeopleIcon} title="Bạn bè"/>
            <SidebarRow Icon={ChatIcon} title="Tin nhắn"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow  Icon={ExpandMoreIcon} title="Xem thêm" />
           
        </div>
    )
}

export default Sidebar;
