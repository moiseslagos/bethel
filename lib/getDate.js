export const getDate = () => {
  const DAYS = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
  const MONTH = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const date = new Date()
  return { month: MONTH[date.getMonth()], day: DAYS[date.getDay()], date: date.getDate(), hours: date.getHours(), minuts: date.getMinutes() }
}
