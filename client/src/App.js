import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

import Cookbooks from './components/Cookbooks/Cookbooks.js';

const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout className="layout">
			<Header>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">Cookbooks</Menu.Item>
					<Menu.Item key="2">Week menus</Menu.Item>
					<Menu.Item key="3">Groceries</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '50px' }}>
				<div className="site-layout-content">
					<Cookbooks />
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Cookbooks ©2020 Created by Julien Gaïotto</Footer>
		</Layout>
	);
}

export default App;
