import SHero from "./style"
import { Button, Modal } from '../'
import { primaryColor } from "../style";
import { useState, useEffect } from "react";



//  LIB DE ANIMAÇÕES 
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Hero({headline, subheadline, bg, button}) {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log(modalOpen);
        setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };



    return (
        <>
            <SHero id="top" style={{ background: `url(${bg}) no-repeat center center / cover` }}
>
                <div>
                    <h1 data-aos="fade-right">{headline}</h1>
                    <h2 data-aos="fade-right">{subheadline}</h2>

                    {button ? 
                        <div>
                            <Button bg='#595959' border='#595959' txt='Ouça novo Album!' color='#fff' hover='#747474' click={handleOpenModal}/>
                        </div>
                    
                        : ''
                    }
                    
                </div>

                

            </SHero>
            <Modal isOpen={modalOpen} onClose={handleCloseModal}/>
        </> 
    )
}