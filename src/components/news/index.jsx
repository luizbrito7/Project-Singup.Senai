import SNews from "./style";
import { Button } from "../";
import data from "./data";

import { useEffect } from "react";

//  LIB DE ANIMAÇÕES
import AOS from "aos";
import "aos/dist/aos.css";

export default function News() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <SNews>
      <div className="title">
        <h2>Últimas notícias</h2>
        <Button
          bg="transparent"
          border="#38214A"
          color="#38214A"
          txt="Saiba mais"
          hover="#38214A"
          colorHover="#fff"
        />
      </div>

      <div>
        {data.map((data) => (
          <div key={data.id} data-aos="fade-up">
            <img src={data.img} alt="Imagem ilustrativa da notícia" />
            <div>
              <h3>{data.title}</h3>
              <p>{data.subTitle}</p>
              <a href="">Leia Mais</a>
            </div>
          </div>
        ))}
      </div>
    </SNews>
  );
}
