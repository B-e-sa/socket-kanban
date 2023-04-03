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
						content: "First todo",
						assigned: [],
						tags: []
					}
				]
			}
		]
	}
];

const counterSlice = createSlice({
	name: 'workspaces',
	initialState: {
		allWorkspaces,
		currentWorkspace: 1,
		lastWorkspaceId: 1,
		lastBoardId: 1,
		lastContentId: 1,
	},
	reducers: {
		setCurrentWorkspace(state, { payload }) {
			state.currentWorkspace = payload
		},
		addWorkspace(state) {

			state.lastWorkspaceId++

			const workspace = {
				id: state.lastWorkspaceId,
				name: "New Workspace",
				bgColor: "#565AD7",
				boards: []
			}

			state.allWorkspaces.push(workspace)

		},
		changeBoardName() {

		},
		changeContentName(state, { payload }) {

			const workspace =
				state.allWorkspaces[current(state).currentWorkspace - 1].boards

			workspace[payload.boardIndex].contents[payload.index].content = payload.text

			console.log(current(workspace)[payload.boardIndex].contents[payload.index].content)

		},
		changeWorkspaceName() {

		},
		addBoard(state) {

			const workspace =
				state.allWorkspaces[current(state).currentWorkspace - 1].boards

			state.lastBoardId++
			state.lastContentId++

			if (state.lastBoardId !== 1) {

				workspace.push({
					id: state.lastBoardId,
					title: 'New board',
					contents: [{
						id: state.lastContentId,
						content: "new",
						assigned: [],
						tags: []
					}]
				})

				return;

			}

			workspace.push({
				id: 1,
				title: "New board",
				contents: [
					{
						id: state.lastContentId,
						content: "New",
						assigned: [],
						tags: []
					}
				]
			})

		},
		addContent(state, { payload }) {

			const workspace =
				state.allWorkspaces[current(state).currentWorkspace - 1].boards

			const boardIndex = workspace.findIndex(board => {
				return board.id === payload.boardId;
			})

			state.lastContentId++;

			workspace[boardIndex].contents.push({
				id: state.lastContentId,
				content: "new",
				assigned: [],
				tags: []
			})

		},
		switchContents(state, { payload }) {
		},
		switchBoards(state, { payload }) {
		}
	}
});

export const {
	setCurrentWorkspace,
	addBoard,
	addWorkspace,
	addContent,
	changeContentName,
	changeBoardName,
	changeWorkspaceName,
	switchContents,
	switchBoards
} = counterSlice.actions;

export default counterSlice.reducer;