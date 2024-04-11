import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import 'dayjs/locale/es'

dayjs.locale('es')

const CalendarioTurno = () => {
  const localizer = dayjsLocalizer(dayjs);

  const event = [
    {
      start: dayjs("2024-04-11T14:00:00").toDate(),
      end: dayjs("2024-04-11T15:00:00").toDate(),
      title: "Turno 1",
    },
    {
      start: dayjs("2024-04-11T17:00:00").toDate(),
      end: dayjs("2024-04-11T18:00:00").toDate(),
      title: "Turno 2",
    },
    {
      start: dayjs("2024-04-15T14:00:00").toDate(),
      end: dayjs("2024-04-15T15:00:00").toDate(),
      title: "Turno 3",
    },
    {
      start: dayjs("2024-04-18T12:00:00").toDate(),
      end: dayjs("2024-04-18T13:00:00").toDate(),
      title: "Turno 4",
    },
  ];

  return (
    <>
      <Calendar
        localizer={localizer}
        events={event}
        messages={{
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
          noEventsInRange: "Sin eventos",
        }}
      />
    </>
  );
};

export default CalendarioTurno;
