import style from '@/components/workspace_label/WorkspaceLabel.module.css';
import { setCurrentWorkspace } from '@/redux/features/workspaceSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';

const WorkspaceLabel = () => {

  const { allWorkspaces, currentWorkspace } = useAppSelector(state => state.reducer);
  const dispatch = useAppDispatch();

  return (
    <div className={style.label}>
      {allWorkspaces.map((space) => {
        return (
          <div
            style={{
              backgroundColor: currentWorkspace !== space.id
                ? "#ebebeb"
                : "white"
            }}
            onClick={() => dispatch(setCurrentWorkspace(space.id))}
            className={style.label_item}
            key={space.name}
          >
            {space.name}
          </div>
        )
      })}
    </div>
  )
}

export default WorkspaceLabel