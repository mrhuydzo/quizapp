'use client'
import {data} from '@/data'
import React, {useState} from 'react';
import {Button, Divider, Modal, Table} from 'antd';
import {Content} from "antd/es/layout/layout";
import type {ColumnsType} from 'antd/es/table';
import {PlusOutlined} from '@ant-design/icons';
import FormQuiz from "@/app/FormQuiz";

const columns = [
	{
		title: 'Title',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Test duration',
		dataIndex: 'testDuration',
		key: 'testDuration',
	},
	{
		title: 'Test weight',
		dataIndex: 'testWeight',
		key: 'testWeight',
	},
	{
		title: 'Total point',
		dataIndex: 'totalPoint',
		key: 'totalPoint',
	},
];


const Home: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<main style={{padding: '0 50px'}}>
			<Content>
				<div className="site-layout-content">
					<Table dataSource={data} columns={columns}/>
					<Divider/>
					<div className="te">
						<Button type="primary" onClick={showModal} icon={<PlusOutlined/>} size={'large'}>
							Add new
						</Button>
					</div>
				</div>
			</Content>
			<Modal title="Add new questions" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<FormQuiz/>
			</Modal>
		</main>
	)
}
export default Home
