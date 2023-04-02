import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


export const  SidebarData = [
    {
        title: "Mypage",
        icon: <PersonIcon />,
        link: "/mypage"
    },
    {
        title: "Goals",
        icon: <EventNoteIcon />,
        link: "/"
    },
    {
        title: "Start",
        icon: <LocalFireDepartmentIcon />,
        link: "/challenges2"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/"
    },
    {
        title: "Log Out",
        icon: <LogoutIcon />,
        link: "/"
    },


];