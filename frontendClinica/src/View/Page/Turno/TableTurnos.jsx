import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from '@tremor/react';

  import { FiEdit3,FiTrash2,FiEye } from "react-icons/fi";

  const titleTable=[
    {
    title:'Paciente'
  },
  {
    title:'Fecha'
  },
  {
    title:'Motivo'
  },
  {
    title:'Doctor'
  },
  {
    title:'Acción'
  },
]

const dataTable=[
    {
        paciente:'JuanPerez',
        fecha:'11-04-2024',
        motivo:'consulta sobre analisis',
        doctor:'Rodriguez Alberto',
    },
    {
        paciente:'JuanPerez',
        fecha:'11-04-2024',
        motivo:'consulta sobre analisis',
        doctor:'Rodriguez Alberto',
    },
    {
        paciente:'JuanPerez',
        fecha:'11-04-2024',
        motivo:'consulta sobre analisis',
        doctor:'Rodriguez Alberto',
    },
    {
        paciente:'JuanPerez',
        fecha:'11-04-2024',
        motivo:'consulta sobre analisis',
        doctor:'Rodriguez Alberto',
    },
]
  
  export const TableTurnos = () => (
    <div className="mx-auto max-w-2xl">
      <Table>
        <TableHead>
          <TableRow>
            {titleTable.map(item=>(
                <TableHeaderCell
                key={item.title}
                >{item.title}
                </TableHeaderCell>

            ))}
          </TableRow>
        </TableHead>
  
        <TableBody>
            {dataTable.map(item=>(
             <TableRow key={item.id}>
            <TableCell>{item.paciente}</TableCell>
            <TableCell className="text-right">{item.fecha}</TableCell>
            <TableCell>{item.motivo}</TableCell>
            <TableCell>{item.doctor}</TableCell>
            <TableCell>
                <span className='IconAccion'>
                <FiEye className='icon'/>
                <FiEdit3  className='icon'/>
                <FiTrash2 className='icon'/>
                </span>
            </TableCell>

          </TableRow>   
            ))}
          
         
        </TableBody>
      </Table>
    </div>
  );