import getCurrentBoards from '@/utils/getCurrentBoards';
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
		currentWorkspaceId: 1,
		lastWorkspaceId: 1,
		lastBoardId: 1,
		lastContentId: 1,
	},
	reducers: {
		setCurrentWorkspace(state, { payload }) {
			state.currentWorkspaceId = payload
		},
		addWorkspace(state) {

			state.lastWorkspaceId++

			const workspace = {
				id: state.lastWorkspaceId,
				name: "New Workspace",
				bgColor: "#565AD7",
				boards: []
			};

			state.allWorkspaces.push(workspace);

		},
		changeBoardName(state, { payload }) {

			const boards = getCurrentBoards(
				state.allWorkspaces,
				state.currentWorkspaceId
			)

			const board = boards.find(board => board.id === payload.boardId);

			board!.title = payload.title;


		},
		changeContentName(state, { payload }) {

			const { boardIndex, index, text } = payload;

			const workspaceBoards = getCurrentBoards(
				state.allWorkspaces,
				state.currentWorkspaceId
			);

			workspaceBoards[boardIndex].contents[index].content = text

		},
		changeWorkspaceName() {

		},
		addBoard(state) {

			const workspaceBoards = getCurrentBoards(
				state.allWorkspaces,
				state.currentWorkspaceId
			)

			state.lastBoardId++
			state.lastContentId++

			if (state.lastBoardId !== 1) {

				workspaceBoards.push({
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

			workspaceBoards.push({
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

			const workspaceBoards = getCurrentBoards(
				state.allWorkspaces,
				state.currentWorkspaceId
			)

			const boardIndex = workspaceBoards.findIndex(board => {
				return board.id === payload.boardId;
			})

			state.lastContentId++;

			workspaceBoards[boardIndex].contents.push({
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