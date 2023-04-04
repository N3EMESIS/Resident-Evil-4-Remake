import React, { Component } from "react";
import Character from "../Character/Character";
import styles from "./Characters.module.css";

class Characters extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        const { characters, onClose} = this.props;

        return (
            <div className={styles.charactersContainer}>
                {characters.map(({name, gender, image, id, bando}) => {
                    return (
                        <div key={id} className={styles.card}>
                            <Character id={id} name={name} gender={gender} image={image} bando={bando} onClose={() => onClose(id)}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Characters;