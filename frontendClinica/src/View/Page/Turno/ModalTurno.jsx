// 'use client';
import { Divider, TextInput } from "@tremor/react";
import { DoctorGet } from "../../../Api/Doctor";
import { useEffect, useState } from "react";
import { PacienteGet } from "../../../Api/Paciente";
import PacienteDetalle from "./PacienteDetalle";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import {  agregarTurno } from "../../../Store/slicer/turno.slice";

export default function ModalTurno({ closeModal }) {
  const today = new Date().toISOString().split("T")[0];
  const [doctores, setDoctores] = useState([])
  const [paciente, setPaciente] = useState()
  const { register, handleSubmit, watch} = useForm();
  
  useEffect(() => {
    const listDoctores = async () => {
      try {
        const resp = await DoctorGet();
        setDoctores(resp.data)
        console.log(paciente)
      } catch (error) {
        console.log(error);
      }
    };
  
    listDoctores();
  }, []);

  const combineFechaHora = (fecha, hora) => {
    const fechaObj = new Date(fecha);
    const [hours, minutes] = hora.split(':');
    fechaObj.setHours(hours, minutes);
    return fechaObj.toISOString();
  };

  const dispatch= useAppDispatch()

  const onSubmit = handleSubmit(async (data) => {
    const combinedFechaHora = combineFechaHora(data.fecha, data.hora);
    const { hora,dni, ...rest } = data; 
    const formData = {
      ...rest,
      fecha: combinedFechaHora,
      paciente: paciente[0]._id
    };
    console.log(formData);
    console.log(paciente._id)
    dispatch(agregarTurno(formData)); 
  });
  
  const handlePaciente = async (dni)=>{
    try {
      const resp = await PacienteGet()
      const pacienteBuscado= resp.data.filter(item => item.dni === dni)
      setPaciente(pacienteBuscado)
    } catch (error) {
      console.log(error)
    }
  }
  const dni = watch('dni');

  useEffect(() => {
    if (dni) {
      handlePaciente(dni);
    }
  }, [dni]);

  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Agregar Nuevo Turno
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          {" (*) son obligatorios "}
        </p>
        <form  className="mt-8" onSubmit={handleSubmit(onSubmit)} >
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Fecha
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="date"
                id="first-name"
                name="first-name"
                autoComplete="first-name"
                placeholder="First name"
                className="mt-2"
                required
                min={today}
                {...register("fecha",{required:true})}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Hora
                <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="time"
                id="hora"
                name="hora"
                className="mt-2 hora"
                required
                min="08:00"
                max="21:00"
                {...register("hora",{required:true})}
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                DNI Paciente
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="dni"
                name="dni"
                autoComplete="dni"
                placeholder="DNI"
                className="mt-2"
                required
                
                {...register("dni",{required:true})}
              />
            </div>
           {paciente &&
            <div className="col-span-full">
            <PacienteDetalle
            paciente={paciente}
            />
            </div>
           }
            <div className="col-span-full sm:col-span-3">
              <label className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Doctor
              </label>
              <br />
              <select id="doctor" name="doctor" className="mt-2 hora">
                <option value="">Seleccione el doctor</option>
                {doctores.map( doctor =>(
                  
                <option 
                key={doctor._id}
                value={doctor._id}
                {...register("doctor",{required:true})}
                >
                  {`${doctor.apellido} ${doctor.nombre}`}
                 
                </option>
                ))}
              </select>
            </div>
            
            <div className="col-span-full">
              <label className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Motivo
              </label>
              <textarea
                placeholder="Describa el motivo de la visita"
                className="tremor-Textarea-Textarea w-full flex items-center outline-none rounded-tremor-default px-3 py-2 text-tremor-default focus:ring-2 transition duration-100 border shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted dark:shadow-dark-tremor-input focus:dark:border-dark-tremor-brand-subtle focus:dark:ring-dark-tremor-brand-muted bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted text-tremor-content dark:text-dark-tremor-content border-tremor-border dark:border-dark-tremor-border placeholder:text-tremor-content dark:placeholder:text-dark-tremor-content wrstk"
                data-testid="text-area"
                id="motivo-description"
                name="motivo-description"
                rows="4"
                {...register("motivo",{required:true})}
              ></textarea>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={() => closeModal(false)}
              type="button"
              className="btnAdd bg-red-400 mt-4  whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btnAdd bg-blue-400 mt-4  whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Guardar
            </button>
          </div>
        </form>
        <br />
        <hr />
      </div>
    </>
  );
}
