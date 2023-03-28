import style from "@/components/add_workspace_button/AddWorkspaceButton.module.css"
import { addWorkspace } from "@/redux/features/workspaceSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";

const AddWorkspaceButton = () => {

    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(addWorkspace())}
            className={style.add_workspace_button}
        >
            +
        </button>
    )
}

export default AddWorkspaceButton