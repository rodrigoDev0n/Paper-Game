import { useEffect, useState } from "react"

export const useRandomOption = () => {
  
    const [playeroption, setplayeroption] = useState({
        playername: 'jugador1',
        playerselect: '',
    })
    const [machineoption, setmachineoption] = useState({
        machinename: 'machine',
        machineselect: '',
    })
    const [winners, setwinner] = useState('JUEGAA!!! 🤖')

    const options = ['piedra','papel','tijeras']

    const machineSelectOption = () => {
        const randomSelect = Math.floor(Math.random() * 3)
        setmachineoption({
            ...machineoption,
            machineselect: options[randomSelect],
        })
    }

    const onSelectOptions = ({target}) => {
        const {value} = target
        const {winner} = winners
        machineSelectOption()
        setplayeroption({
            ...playeroption,
            playerselect: value
        })
    }
    
    const whowin = async () => {
        const {playername, playerselect} = playeroption
        const {machinename, machineselect} = machineoption
        const counter = 0
        // En caso de que el juego termine en empate:
        options.find(e => e === playerselect) === machineselect ? setwinner('EMPATE!!! 😒') : null

        // Cuando gana el jugador:
        playerselect === 'tijeras' && machineselect ===  'papel' ? setwinner('YOU WIN!!! 😄') : null
        playerselect === 'papel' && machineselect === 'piedra' ? setwinner('YOU WIN!!! 😄') : null
        playerselect === 'piedra' && machineselect === 'tijeras' ? setwinner('YOU WIN!!! 😄') : null

        // Cuando gana la maquina:
        machineselect === 'tijeras' && playerselect === 'papel' ? setwinner('YOU LOSE!!! 😭') : null
        machineselect === 'papel' && playerselect === 'piedra' ? setwinner('YOU LOSE!!! 😭') : null
        machineselect === 'piedra' && playerselect === 'tijeras' ? setwinner('YOU LOSE!!! 😭') : null
        
    }

    const resetGame = () => {
        setplayeroption({
            playername: 'jugador1',
            playerselect: '',
        })
        setmachineoption({
            machinename: 'machine',
            machineselect: '',
        })
        setwinner('JUEGAA!!! 🤖')
    }

    // whowin solo se ejecuta en el momento en que el jugador selecciona una opción

    useEffect(() => {
      whowin()
    }, [onSelectOptions])
    
    return {
        onSelectOptions,
        playeroption,
        machineoption,
        winners,
        resetGame,
    }
}
