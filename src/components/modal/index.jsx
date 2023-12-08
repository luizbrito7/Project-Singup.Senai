import SModal from "./style"

export default function Modal({ isOpen, onClose }) {

    return (
        <SModal className={isOpen ? 'modalActive' : ''} onClick={onClose}>
            <div className={isOpen ? 'modalActive' : ''}>

                <button onClick={onClose}>X</button>
                <iframe src="https://www.youtube.com/embed/VzEqqSUWNjw" title="Post Malone - AUSTIN (Official Live Performances) | Vevo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </SModal>
    )
}