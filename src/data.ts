export interface DataType {
	id: number;
	title: string;
	testDuration: number;
	testWeight: number;
	totalPoint: number;
	// questions: {};
	// questionTitle: string;
	// answer: [];
	// answerCorrect: string;
	// point: number;
}

//
export const data: DataType[] = [
	{
		id: 1,
		title: 'test1',
		testDuration: 0,
		testWeight: 0,
		totalPoint: 0,
	}
]