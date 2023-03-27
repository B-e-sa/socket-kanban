import { createSlice } from '@reduxjs/toolkit';

const allWorkspaces = [
	{
		id: 1,
		name: "First workspace",
		boards: [
			{
				id: 1,
				title: "TODO",
				contents: [
					{
						id: 1,
						content: "First todo"
					},
					{
						id: 2,
						content: "fodase"
					}
				],
				bgColor: "#565AD7"
			},
			{
				id: 2,
				title: "DOING",
				contents: [
					{
						id: 1,
						content: "Doing"
					}
				],
				bgColor: "#565AD7"
			},
			{
				id: 3,
				title: "DONE",
				contents: [
					{
						id: 1,
						content: "Done"
					}
				],
				bgColor: "#565AD7"
			}
		]
	},
	{
		id: 2,
		name: "Second workspace",
		boards: [
			{
				id: 1,
				title: "TODO",
				contents: [
					{
						id: 1,
						content: "second todo"
					}
				],
				bgColor: "#565AD7"
			},
			{
				id: 2,
				title: "DOING",
				contents: [
					{
						id: 1,
						content: "Doing"
					}
				],
				bgColor: "#565AD7"
			},
			{
				id: 3,
				title: "DONE",
				contents: [
					{
						id: 1,
						content: "Done"
					}
				],
				bgColor: "#565AD7"
			}
		]
	}
]

const counterSlice = createSlice({
	name: 'workspaces',
	initialState: { allWorkspaces, currentWorkspace: 1 },
	reducers: {
		setCurrentWorkspace(state, { payload }) {
			state.currentWorkspace = payload
		}
	}
});

export const {
	setCurrentWorkspace
} = counterSlice.actions;

export default counterSlice.reducer;