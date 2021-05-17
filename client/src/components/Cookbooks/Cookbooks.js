import React, { useState } from 'react';
import Cookbook from './Cookbook/Cookbook';
import { Row, Col, Button, PageHeader, Modal } from 'antd';

import Form from '../Form/Form.js';

const Cookbooks = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	  };

	  const handleOk = () => {
		setIsModalVisible(false);
	  };

	  const handleCancel = () => {
		setIsModalVisible(false);
	  };

	return (
		<div>
			<PageHeader
				ghost={false}
				title="Cookbooks"
				extra={[
					<Button key="1" type="primary" onClick={showModal}>
						Create a new cookbook
					</Button>
				]}
			>
			</PageHeader>

			<Row gutter={[40, 0]}>
				<Col span={24}>
					<Cookbook />
					<Cookbook />
				</Col>
			</Row>

			<Modal
				title="Create a new Cookbook"
				visible={isModalVisible}
				onOk={handleOk}
				okText='Create'
				onCancel={handleCancel}
			>
				<Form />
			</Modal>
		</div>
	);
}

export default Cookbooks;
