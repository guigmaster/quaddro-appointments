import type { ActionFunction, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { isValid, parseISO } from 'date-fns';

import { createAppoitments } from '~/features/Appointments/Appointment.api';
import type { CreateAppointmentDTO } from '~/features/Appointments/Appointment.types';

import AppointmentForm from '~/features/Appointments/components/AppointmentForm';

export const meta: MetaFunction = () => ({
  title: 'Cadastrar Agendamento - Quaddro Appoitments',
});

export type ActionData = {
  data?: CreateAppointmentDTO;
  errors?: Partial<CreateAppointmentDTO>;
};

export const action: ActionFunction = async function ({
  request,
}): Promise<ActionData | Response | void> {
  const body = await request.formData();
  const data = Object.fromEntries(body) as CreateAppointmentDTO;

  const errors = [];

  try {
    const parsedStartTime = parseISO(data.start_time);
    const parsedEndTime = parseISO(data.end_time);

    if (data.title.trim().length < 6) {
      errors.push({
        key: 'title',
        message: 'Título deve possuir no mínimo 6 caracteres',
      });
    }

    if (!isValid(parsedStartTime)) {
      errors.push({
        key: 'start_time',
        message: 'Por gentileza informe uma data inicial válida!',
      });
    }

    if (!isValid(parsedEndTime)) {
      errors.push({
        key: 'end_time',
        message: 'Por gentileza informe uma data final válida!',
      });
    }

    if (errors.length > 0) {
      return {
        data,
        errors: errors.reduce((acc, cur) => {
          return { ...acc, [cur.key]: cur.message };
        }, {}),
      };
    }

    await createAppoitments(data);

    return redirect('appointments');
  } catch (error) {
    throw error;
  }
};

export default function () {
  const actionData = useActionData<ActionData>();

  return (
    <div className="flex items-center justify-center p-4 bg-slate-200 rounded mb-8">
      <div className="flex flex-col w-3/4">
        <h1 className="text-2xl mb-4">Cadastar Agendamento</h1>
        <AppointmentForm actionData={actionData} />
      </div>
    </div>
  );
}
