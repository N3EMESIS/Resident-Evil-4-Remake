import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
const URL = "http://localhost:3001/residentevil4remake";

function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`${URL}/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name){
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return () => setCharacter({});
    }, [detailId]);

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.link} ><FaAngleDoubleLeft /></Link>
            <div className={styles.details}>
                <img className={styles.image} src={character.image} alt={character.name} />
            </div>
            <div className={styles.info}>
                <h2 className={styles.h2}>Nombre completo: <span className={styles.span}>{character.name}</span></h2>
                <p className={styles.p}>Genero: <span className={styles.span}>{character.gender}</span></p>
                <p>Bando: <span className={styles.span}>{character.bando}</span></p>
                <p>Origen: <span className={styles.origin}>{character.origin}</span></p>
            </div>
        </div>
    )
}

export default Detail;