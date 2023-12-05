import SModal from "./SModal"

export default function Modal({ isOpen, onClose }) {

    return (
        <SModal className={isOpen ? 'modalActive' : ''}>
            <div className={isOpen ? 'modalActive' : ''}>

                <button onClick={onClose}>X</button>
                <iframe width="935" height="526" src="https://www.youtube.com/embed/VzEqqSUWNjw" title="Post Malone - AUSTIN (Official Live Performances) | Vevo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </SModal>
    )
}