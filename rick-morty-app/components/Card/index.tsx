import { Character } from "../../types/Character";
import style from "./Card.module.css";
import Image from "next/image";

export function Card({ id, image, name, species, gender }: Character) {
  return (
    <div key={id} className={style.card}>
      <Image
        src={image}
        alt=""
        width={220}
        height={180}
        className={style.imagem}
      />
      <section className={style.section}>
        <h2 className={style.name}>{name}</h2>
        <p>{species}</p>
        <p>{gender}</p>
      </section>
    </div>
  );
}
