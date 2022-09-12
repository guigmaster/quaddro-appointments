import { Form, Link } from '@remix-run/react';

import type { ActionData } from '~/routes/appointments/new';
import type { Appointment } from '../Appointment.types';

import TextInput from '~/_shared/components/TextInput';

type AppointmentFormProps = {
  actionData?: ActionData;
  appointment?: Appointment;
};

export default function AppointmentForm({
  actionData,
  appointment,
}: AppointmentFormProps) {
  return (
    <Form method="post" className="flex flex-col">
      <div>
        <TextInput
          name="title"
          label="Título"
          placeholder="Título para o agendamento"
          key={actionData?.data?.title ?? appointment?.title}
          defaultValue={actionData?.data?.title ?? appointment?.title}
          errorMessage={actionData?.errors?.title ?? ''}
        />

        <div className="flex mt-4">
          <div className="w-1/2">
            <TextInput
              name="start_time"
              label="Agendamento Início"
              placeholder="Início do Agendamento DD/MM/AAAA HH:mm"
              key={actionData?.data?.start_time ?? appointment?.start_time}
              defaultValue={
                actionData?.data?.start_time ?? appointment?.start_time
              }
              errorMessage={actionData?.errors?.start_time ?? ''}
            />
          </div>

          <div className="w-1/2 ml-3">
            <TextInput
              name="end_time"
              label="Agendamento Fim"
              placeholder="Final do Agendamento DD/MM/AAAA HH:mm"
              key={actionData?.data?.end_time ?? appointment?.end_time}
              defaultValue={actionData?.data?.end_time ?? appointment?.end_time}
              errorMessage={actionData?.errors?.end_time ?? ''}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse mt-8">
        <button
          type="submit"
          className="flex items-center justify-center p-2 rounded bg-blue-600 hover:bg-blue-800 text-white"
        >
          <span>Salvar</span>
        </button>

        <Link
          to="/appointments"
          className="flex items-center justify-center p-2 rounded bg-red-400 hover:bg-red-600 text-white mr-2"
        >
          <span>Cancelar</span>
        </Link>
      </div>
    </Form>
  );
}
