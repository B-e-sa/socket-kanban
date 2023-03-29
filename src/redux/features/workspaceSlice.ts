import { createSlice, current } from '@reduxjs/toolkit';

const allWorkspaces = [
	{
		id: 1,
		name: "First Workspace",
		bgColor: "#565AD7",
		boards: [
			{
				id: 1,
				title: "Todo!",
				contents: [
					{
						id: 1,
						content: "First todo"
					}
				]
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
				bgColor: "#565AD7",
				boards: []
			}
			state.allWorkspaces.push(workspace)
		},
		addBoard(state, { payload }) {

			// search for the workspace index that the board is being added
			const workspaceIndex = current(state.allWorkspaces)
				.findIndex(workspace => {
					return workspace.id === state.currentWorkspace
				})

			// finding the workspace on the store state
			const workspace = state.allWorkspaces[workspaceIndex];

			const workspaceBoards = workspace.boards;

			// finding the last board to pick the id
			const lastBoard = workspaceBoards[workspaceBoards.length - 1]

			// finding the last content to pick the id
			const content = lastBoard?.contents[lastBoard.contents.length - 1]

			// pushing the board and changing the state
			if (content) {
				workspace.boards.push({
					id: lastBoard.id + 1,
					title: 'New board',
					contents: [{
						id: content.id + 1,
						content: "new"
					}]
				})
				return;
			}

			workspace.boards.push({
				id: 1,
				title: "New board",
				contents: [
					{
						id: 1,
						content: "New"
					}
				]
			})

		},
		addContent(state, { payload }) {

			const workspaceIndex = current(state.allWorkspaces)
				.findIndex(workspace => {
					return workspace.id === payload.workspaceId
				})

			const workspace = state.allWorkspaces[workspaceIndex];

			const workspaceBoards = workspace.boards;

			const boardIndex = workspaceBoards.findIndex(board => {
				return board.id === payload.boardId
			})

			const boardContents = workspace.boards[boardIndex].contents

			boardContents.push({
				id: boardContents[boardContents.length - 1].id + 1,
				content: "new"
			})

		}
	}
});

export const {
	setCurrentWorkspace,
	addBoard,
	addWorkspace,
	addContent
} = counterSlice.actions;

export default counterSlice.reducer;