import { Calendar,dayjsLocalizer } from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'

const CalendarioTurno = () => {

const localizer = dayjsLocalizer(dayjs)

  return (
    <>
        <Calendar
        localizer={localizer}
        messages = {{
            allDay: "Todo el día",
            previous: "Anterior",
            next: "Siguiente",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            agenda: "Agenda",
            date: "Fecha",
            time: "Hora",
            event: "Evento",
            noEventsInRange: "Sin eventos"
        }}
        />
    </>
  )
}

export default CalendarioTurno