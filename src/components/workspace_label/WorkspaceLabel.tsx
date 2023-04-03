import style from '@/components/workspace_label/WorkspaceLabel.module.css';
import { setCurrentWorkspace } from '@/redux/features/workspaceSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import AddWorkspaceButton from '../add_workspace_button/AddWorkspaceButton';
import { useEffect, useState } from 'react';

const WorkspaceLabel = () => {

  const [[mouseX, mouseY], setMousePos] = useState([0, 0]);

  const { allWorkspaces, currentWorkspaceId } = useAppSelector(state => state.reducer);

  const dispatch = useAppDispatch();

  return (
    <div className={style.label}>
      {allWorkspaces.map((space) => {
        return (
          <div
            style={{
              backgroundColor: currentWorkspaceId !== space.id
                ? "#ebebeb"
                : "white"
            }}
            onClick={() => dispatch(setCurrentWorkspace(space.id))}
            onMouseMove={(e) => {
              setMousePos([e.clientX, e.clientY])
            }}
            className={style.label_item}
            key={space.id}
          >
            {space.name}
          </div>
        )
      })}
      <AddWorkspaceButton />
    </div>
  )
}

export default WorkspaceLabel