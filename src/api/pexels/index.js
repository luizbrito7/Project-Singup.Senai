


const fetchImages = async () => {

    const query = 'music';
    const apiKey = JSON.stringify(import.meta.env.VITE_KEY_PEXELS);
    console.log(apiKey);
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }

  
      const data = await response.json();
      return data.photos;

    } catch (error) {
      console.error('Erro na solicitação:', error.message);
      throw error;
    }
  };
  
  export { fetchImages };



