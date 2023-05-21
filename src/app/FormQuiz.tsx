import React from 'react';
import {Button, Checkbox, Form, Input, InputNumber, Select} from 'antd';
import {Col, Divider, Row} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import {creatQuestion, DataType} from "@/data";
import {PREFIX} from "@/data";
import {useImmer} from "use-immer";

const FormQuiz: React.FC<{onClose:() => void}> = ({onClose}) => {
	const [formData, setFormData] = useImmer<DataType>({
		id: 0,
		title: '',
		testDuration: 0,
		testWeight: 0,
		totalPoint: 0,
		questions: [{
			questionTitle: '',
			answer: ['', '', '',],
			answerCorrect: '',
			point: 0,
		}],
	});



	const onSubmitForm = (values: any) => {
		const ansArr = [];
		for (const key in values) {
			if (key.startsWith('ans-')) {
				ansArr.push(values[key]);
			}
		}
		const dataQuiz: DataType = {
			id: 0,
			title: values.title,
			testDuration: values.testDuration,
			testWeight: values.testWeight,
			totalPoint: values.totalPoint,
			questions: [{
				questionTitle: values.questionTitle,
				answer: ansArr,
				answerCorrect: values.answerCorrect,
				point: values.point,
			}],
		}
		creatQuestion(dataQuiz);
		onClose();
	}


	return (
		<Form name="basic" onFinish={onSubmitForm}>
			<Form.Item
				label="Title"
				name="title"
				rules={[{required: true, message: 'Please input your title!'}]}
			>
				<Input maxLength={100} showCount value={formData.title}/>
			</Form.Item>
			<Row gutter={16}>
				<Col className="gutter-row" span={12}>
					<Form.Item
						label="Test duration"
						name="testDuration"
						rules={[{required: true, message: 'Please input your value!'}]}
					>
						<InputNumber width={'100%'} value={formData.testDuration}/>
					</Form.Item>
				</Col>
				<Col className="gutter-row" span={12}>
					<Form.Item
						label="Test weight"
						name="testWeight"
						rules={[{required: true, message: 'Please input your value!'}]}
					>
						<InputNumber max={100} value={formData.testWeight}/>
					</Form.Item>
				</Col>
			</Row>
			<Divider/>
			<Form.Item name="questionTitle" rules={[{required: true}]}>
				<Input placeholder={'Question 1'} showCount maxLength={255} value={formData.questions[0].questionTitle}/>
			</Form.Item>

			{
				formData.questions[0].answer?.map((item, index) => {
					return (
						<Form.Item name={`ans-${[index]}`} key={index}>
							<div style={{display: 'flex', alignItems: 'center'}}>
								<Input prefix={PREFIX[index]} showCount maxLength={75} placeholder={item}/>
								<Button size={'small'} style={{marginLeft: '10px', flexShrink: 0}}><MinusOutlined/></Button>
							</div>
						</Form.Item>
					)
				})
			}

			<div style={{textAlign: 'right', marginBottom: "20px"}}>
				<Button size={'small'}><PlusOutlined/></Button>
			</div>
			<Row gutter={16}>
				<Col span={10}>
					<Form.Item name="point" label="Point">
						<InputNumber value={formData.questions[0].point}/>
					</Form.Item>
				</Col>
				<Col span={10} offset={4}>
					<Form.Item name="correctAnswer" label="Correct answer">
						<Select defaultValue={'A'} allowClear>
							{
								formData.questions[0].answer?.map((item, index) => {
									return (<option value={item} key={index}>{PREFIX[index]}</option>)
								})
							}
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Button type="primary" htmlType="submit">Add New</Button>
		</Form>
	);
};

export default FormQuiz;