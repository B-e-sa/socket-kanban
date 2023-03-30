import { createSlice, current } from '@reduxjs/toolkit';
import { findWorkspaceBoard } from '@/utils/findWorkspaceBoard';

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
		addBoard(state) {

			const workspaceBoard = findWorkspaceBoard(
				current(state.allWorkspaces),
				state.currentWorkspace,
				state.allWorkspaces
			)

			state.lastBoardId++
			state.lastContentId++

			// finding the last content to pick the id
			if (state.lastBoardId !== 1) {

				workspaceBoard.push({
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

			workspaceBoard.push({
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

			const workspaceBoard = findWorkspaceBoard(
				current(state.allWorkspaces),
				state.currentWorkspace,
				state.allWorkspaces
			);

			const boardIndex = workspaceBoard.findIndex(board => {
				return board.id === payload.boardId;
			})

			state.lastContentId++;

			workspaceBoard[boardIndex].contents.push({
				id: state.lastContentId,
				content: "new",
				assigned: [],
				tags: []
			})

		},
		switchBoards(state, { payload }) {

			const { pickedBoxIndex, targetBoxIndex } = payload;

			console.log(pickedBoxIndex)

			const workspaceBoard = findWorkspaceBoard(
				current(state.allWorkspaces),
				state.currentWorkspace,
				state.allWorkspaces
			)

			const switchHandler = workspaceBoard[pickedBoxIndex]

			workspaceBoard[pickedBoxIndex] = workspaceBoard[targetBoxIndex];
			workspaceBoard[targetBoxIndex] = switchHandler;

		}
	}
});

export const {
	setCurrentWorkspace,
	addBoard,
	addWorkspace,
	addContent,
	switchBoards
} = counterSlice.actions;

export default counterSlice.reducer;