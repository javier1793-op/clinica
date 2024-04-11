import '../../../Scss/calendario.scss'
import Head from '../../Components/Head'
import Calendar from './Calendar'

const Calendario = () => {
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