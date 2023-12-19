import SGallery from "./style"
import { fetchImages } from "../../api/pexels";
import { useEffect, useState } from "react"


export default function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetchImages();
                setImages(data);

            } catch (error) {
                console.error('Erro na solicitação:', error.message);
            }
        };

        fetchData();
    }, []);





    return (
        <SGallery>

            <div>
                <h1>Galeria <span> de fotos</span></h1>
                <span>Momentos marcantes em shows e festivais </span>
            </div>

            <div>
                <h2>Lista de Imagens</h2>
                <ul>
                    {images.map((image) => (
                        <li key={image.id}>
                            <img src={image.src.medium} alt={image.photographer} />
                        </li>
                    ))}
                </ul>
            </div>

        </SGallery>
    )
}   