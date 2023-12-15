import SSingles from './styles'
import data from './data'

export default function Singles() {
    return (


        <SSingles>

            <h2>Singles marcantes</h2>
            <span>A presença da música tem o poder de aprimorar todos os aspectos da vida, sendo uma linguagem universal capaz de superar diversas barreiras culturais.</span>

            <div>
                {data.map(data => (
                    <div key={data.id}>
                        <img src={data.img} alt={`Imagem ilustrativa do single ${data.single}`} />
                        <div>
                            <h3>{data.single}</h3>
                            <p>{data.artist}</p>
                        </div>
                    </div>
                ))}
            </div>

        </SSingles>
    )
}