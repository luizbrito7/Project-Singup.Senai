import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

dotenv.config()






const Data = async () => {

    const requisicao = await fetch(`https://api.pexels.com/v1/search?query=music`, {

        headers: {
            Authorization: process.env.KEY_PEXELS
        }
    })

    return await requisicao.json()
   
    
}


export default Data


