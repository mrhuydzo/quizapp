import React from 'react';
import {Button, Checkbox, Form, Input, InputNumber, Select} from 'antd';
import {Col, Divider, Row} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';

const FormQuiz: React.FC = () => {
	return (
		<Form name="basic">
			<Form.Item
				label="Title"
				name="title"
				rules={[{required: true, message: 'Please input your title!'}]}
			>
				<Input maxLength={100} showCount/>
			</Form.Item>
			<Row gutter={16}>
				<Col className="gutter-row" span={12}>
					<Form.Item
						label="Test duration"
						name="testDuration"
						rules={[{required: true, message: 'Please input your value!'}]}
					>
						<InputNumber width={'100%'}/>
					</Form.Item>
				</Col>
				<Col className="gutter-row" span={12}>
					<Form.Item
						label="Test weight"
						name="testWeight"
						rules={[{required: true, message: 'Please input your value!'}]}
					>
						<InputNumber max={100}/>
					</Form.Item>
				</Col>
			</Row>
			<Divider/>
			<Form.Item
				name="questionTitle"
				rules={[{required: true}]}
			>
				<Input placeholder={'Question 1'} showCount maxLength={255}/>
			</Form.Item>
			<Form.Item name="ans1" style={{display: 'flex'}}>
				<Input prefix="A" showCount maxLength={75}/>
				<Button size={'small'}><MinusOutlined/></Button>
			</Form.Item>
			<Form.Item name="ans2" style={{display: 'flex'}}>
				<Input prefix="B" showCount maxLength={75}/>
				<Button size={'small'}><MinusOutlined/></Button>
			</Form.Item>
			<Form.Item name="ans3" style={{display: 'flex'}}>
				<Input prefix="C" showCount maxLength={75}/>
				<Button size={'small'}><MinusOutlined/></Button>
			</Form.Item>
			<div style={{textAlign: 'right', marginBottom: "20px"}}>
				<Button size={'small'}><PlusOutlined /></Button>
			</div>
			<Row gutter={16}>
				<Col span={10}>
					<Form.Item name="point" label="Point">
						<InputNumber/>
					</Form.Item>
				</Col>
				<Col span={10} offset={4}>
					<Form.Item name="correctAnswer" label="Correct answer">
						<Select defaultValue="" allowClear>
							<option value="A">A</option>
							<option value="B">B</option>
							<option value="C">C</option>
							<option value="D">D</option>
						</Select>

					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default FormQuiz;