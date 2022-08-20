import { useState } from "react"
import { useRandomOption } from "./hooks/useRandomOption"
import { SelectedOption } from "./components/SelectedOption"

export const PaperGame = () => {

  const [pointsplayer, setpointsplayer] = useState(0)

  const {
    onSelectOptions, 
    playeroption, 
    machineoption,
    winners,
    resetGame,
  } = useRandomOption()

  const {playername, playerselect} = playeroption
  const {machinename, machineselect} = machineoption

  let counter = 0

  return (
    <>
        <div className="tittle-container">
            <h1>PAPER - GAME 🤓</h1>
            <button onClick={resetGame} className="reset-button">RESET - GAME</button>
        </div>
        <hr />
        <div className="gameinfo-container">
            <div className="first_info-container">
                <p>Elección de la maquina: {machineselect}</p>
            </div>
            <div>
            <SelectedOption machineopt= {machineselect}/>
            </div>
            <div className="second_info-container">
                <p>Elección del jugador: {playerselect}</p>
            </div>
        </div>
        <div className="gameoptions-container">
            <div className="options1-container">
                <button className="rock game-button" onClick={() => onSelectOptions(event)} value='piedra'>Piedra</button>
                <div id="wins" className={winners === 'YOU LOSE!!! 😭' ? 'machinewin' : winners === 'JUEGAA!!! 🤖' ? 'noplaying' : 'playerwin'}>
                    {winners}
                </div>
                <button className="paper game-button" onClick={() => onSelectOptions(event)} value='papel' name="papel">Papel</button>
            </div>
            <div className="options2-container">
                <button className="scissors game-button" onClick={() => onSelectOptions(event)} value='tijeras' name="tijeras">Tijeras</button>
            </div>
        </div>
    </>
  )
}
