import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
   return (
      <div className='sidebar'>
         <SidebarRow src='https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg' title='NameUser' />
         <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
         <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
         <SidebarRow Icon={PeopleIcon} title='Friends' />
         <SidebarRow Icon={ChatIcon} title='Messenger' />
         <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
         <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
         <SidebarRow Icon={ExpandMoreOutlined} title='Ver mais' />
         
         
      </div>
   )
}

export default Sidebar;
