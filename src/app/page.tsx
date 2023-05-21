'use client'
import {getQuestion} from '@/data'
import React, {useEffect, useState} from 'react';
import {Button, Divider, Modal, Table} from 'antd';
import {Content} from "antd/es/layout/layout";
import type {ColumnsType} from 'antd/es/table';
import {PlusOutlined} from '@ant-design/icons';
import FormQuiz from "@/app/FormQuiz";

const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
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
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(getQuestion());
	},[])

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setData(getQuestion());
		setIsModalOpen(false);
	};

	return (
		<main style={{padding: '0 50px'}}>
			<Content>
				<div className="site-layout-content">
					<Table dataSource={data} columns={columns} />
					<Divider/>
					<div className="te">
						<Button type="primary" onClick={showModal} icon={<PlusOutlined/>} size={'large'}>
							Add new
						</Button>
					</div>
				</div>
			</Content>
			<Modal title="Add new questions" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<FormQuiz onClose={handleCancel} />
			</Modal>
		</main>
	)
}
export default Home
