
import SAlbuns from "./style";
import data from "./data";

export default function Albuns() {

    return (
        
        <SAlbuns>

            <div>
                <h2>Albuns <span>recentes</span></h2>
                <span>Descubra os Álbuns Mais Recentes Que Estão Transformando o Mundo da Música.</span>
            </div>


            <div>

                {data.map(data => (
                    <div key={data.id} id={data.id % 2 == 0 ? 'par' : ''}>

                        {data.id % 2 == 0 ?
                            <>
                                <div>
                                    <span>{data.mes}</span>
                                    <h3>{data.headline}</h3>
                                    <p>{data.subline}</p>
                                </div>
                                <img src={data.capa} alt="" />
                            </>

                            :

                            <>
                                <img src={data.capa} alt="" />
                                <div>
                                    <span>{data.mes} </span>
                                    <h3>{data.headline}</h3>
                                    <p>{data.subline}</p>
                                </div>
                            </>
                        }

                    </div>
                ))}

            </div>

        </SAlbuns>
    )

}

