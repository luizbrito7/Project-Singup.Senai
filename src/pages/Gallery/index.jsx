import SGallery from "./style"
import { fetchImages } from "../../api/pexels";
import { useEffect, useState } from "react"
import { Hero } from './../../components';

import bg from '../../assets/png/hero-gallery-bg.png'

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
        <main>
        
            <Hero bg={bg} buttons={false} headline='Ritmos Capturados em Instantes Fotográficos.' subheadline='Uma Odisseia Visual pelos Ritmos e Melodias que Transformam o Mundo Musical.'/>
            
            <SGallery>
                <div>
                    <h1>Galeria <span> de fotos</span></h1>
                    <span>Momentos marcantes em shows e festivais </span>
                </div>

                <div className="box-img" >
                    {images.map((image) => (
                        <div key={image.id} >
                            <img src={image.src.medium} alt={image.src.alt} />
                            <div>
                                <h3>{image.photographer}</h3>
                                <p>Fotógrafo</p>
                            </div>
                        </div>
                    ))}
                </div>

            </SGallery>

        </main>
    )
}   