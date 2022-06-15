import React, {useState} from "react";

const Partida = ({usuario})=>{

    const [puntos, setPuntos] = useState(usuario.points);
    const [saveGame, setSaveGame] = useState(false);
    const [hora, setHora] = useState(new Date());

    const incrementPoints = ()=>{
        // time = new Date();
        setHora(new Date());
        usuario.points++;
        setPuntos(puntos+1);
    }
    
    const decrementPoints = ()=>{
        // time = new Date();
        setHora(new Date());
        usuario.points--;
        setPuntos(puntos-1);
    }

    const save = ()=>{
        // time = new Date();
        setHora(new Date());
        setSaveGame(saveGame ? false : true);
    }

    setInterval(()=>{
        setHora(new Date());
    },1000);

    return (
        <div>
        {
        !saveGame ? //condición si el puntos no está guardado entonces
        <div>
            <h1>Hola {usuario.name} </h1>
            <h2>tus puntos son: {puntos}</h2>
            <h3>Hora: {`${hora.getHours()} : ${hora.getMinutes()} : ${hora.getSeconds()<10 ? "0"+ hora.getSeconds() : hora.getSeconds()}`}</h3>

            <div className="cajaBotones">
                <button onClick={incrementPoints}>aumentar puntos</button>
                <button onClick={decrementPoints}>disminuir puntos</button>
                <div>
                        <button onClick={save}>guardar partida</button>
                </div>
            </div>
        </div>
        ://sino 
        <div>
            <h1>
                Partida Guardada exitosamente
           </h1>
           <h3>Hora: {`${hora.getHours()} : ${hora.getMinutes()} : ${hora.getSeconds()<10 ? "0"+ hora.getSeconds() : hora.getSeconds()}`}</h3>
           <button onClick={save}>iniciar partida</button>
        </div>
        }

        </div>
    );
}

export default Partida;