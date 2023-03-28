import { createSlice, current } from '@reduxjs/toolkit';

const allWorkspaces = [
	{
		id: 1,
		name: "First Workspace",
		boards: [
			{
				id: 1,
				title: "Todo!",
				contents: [
					{
						id: 1,
						content: "First todo"
					}
				],
				bgColor: "#565AD7"
			}
		]
	}
];

const counterSlice = createSlice({
	name: 'workspaces',
	initialState: { allWorkspaces, currentWorkspace: 1 },
	reducers: {
		setCurrentWorkspace(state, { payload }) {
			state.currentWorkspace = payload
		},
		addWorkspace(state) {
			const workspace = {
				id: Math.random() + Math.random(),
				name: "New Workspace",
				boards: []
			}
			state.allWorkspaces.push(workspace)
		},
		addBoard(state, { payload }) {
			const workspaceIndex =
				current(state.allWorkspaces).findIndex(workspace => {
					return workspace.id === state.currentWorkspace
				})
			state.allWorkspaces[workspaceIndex].boards.push({
				id: 1,
				title: 'New board',
				bgColor: '#565AD7',
				contents: [{
					id: Math.random() + Math.random(),
					content: "new"
				}]
			})
		}
	}
});

export const {
	setCurrentWorkspace,
	addBoard,
	addWorkspace
} = counterSlice.actions;

export default counterSlice.reducer;