import React from 'react'
import AppHeader from './Components/AppHeader';
import PageContent from './Components/PageContent';
import SideMenu from './Components/SideMenu';
import AppFooter from './Components/AppFooter';
import { Space } from 'antd'
import './Admin.css'

function Admin() {
    return (
        <div className="Admin" style={{paddingTop: '5em'}}>
          <AppHeader />
          <Space className="SideMenuAndPageContent">
            <SideMenu></SideMenu>
            <PageContent></PageContent>
          </Space>
          <AppFooter />
        </div>
      );
}

export default Admin;
