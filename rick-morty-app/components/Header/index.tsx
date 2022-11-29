import style from "../Header/Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Rick and Morey - API REST</h1>
      <h3 className={style.subTitle}>
        Consumindo uma api rest publica para testar as techs SWR e controle de
        requests.
      </h3>
    </header>
  );
}
