import '../../../Scss/calendario.scss'
import Head from '../../Components/Head'
import Calendar from './Calendar'
import { useAppSelector } from '../../../Hooks/useAppSelector'

const Calendario = () => {

const users= useAppSelector((state)=> state.users)
 console.log(users)

  return (
    <>
    <Head
    title={'Calendario de Turnos'}
    />
    <div className="containerCalendar">
      <div className="contentCalendar">
        <Calendar/>
      </div>
    </div>
    </>
    
  )
}

export default Calendario