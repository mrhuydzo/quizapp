export interface DataType {
	id: number;
	title: string;
	testDuration: number;
	testWeight: number;
	totalPoint: number;
	questions: Questions [];
}

interface Questions {
	questionTitle: string;
	answer: string [];
	answerCorrect: string;
	point: number;
}

//
export const data: DataType[] = []

export const creatQuestion = (quest: DataType) => {
	data.push({...quest, id: data.length});
	console.log(quest)
}

export const getQuestion = () => {
	return [...data]
}

export const PREFIX = {
	0: 'A',
	1: 'B',
	2: 'C',
	3: 'D',
}