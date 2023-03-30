import ReactDom from 'react-dom';

const EditContentTab = () => {
    return ReactDom.createPortal(
        <div>
            <p>hello!</p>
        </div>,
        document.getElementById('portal')!
    )
}

export default EditContentTab