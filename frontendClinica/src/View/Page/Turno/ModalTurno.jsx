// 'use client';
import { Divider, TextInput } from "@tremor/react";

export default function ModalTurno({ closeModal }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Agregar Nuevo Turno
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          {" (*) son obligatorios "}
        </p>
        <form action="#" method="post" className="mt-8">
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
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Doctor
              </label>
              <br />
              <select id="doctor" name="doctor" className="mt-2 hora">
                <option value="">Seleccione el doctor</option>
                <option value="doctor1">Doctor 1</option>
                <option value="doctor2">Doctor 2</option>
                <option value="doctor3">Doctor 3</option>
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
