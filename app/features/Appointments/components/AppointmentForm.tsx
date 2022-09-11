import { useState } from 'react';
import { Form } from '@remix-run/react';
import TextInput from '~/_shared/components/TextInput';
import type { ActionData } from '~/routes/appointments/new';

type AppointmentFormProps = {
  actionData?: ActionData;
};

export default function AppointmentForm({ actionData }: AppointmentFormProps) {
  const [title, setTitle] = useState(actionData?.data?.title ?? '');
  const [start_time, setStarTime] = useState(
    actionData?.data?.start_time ?? '',
  );
  const [end_time, setEndTime] = useState(actionData?.data?.end_time ?? '');

  return (
    <Form method="post" className="flex flex-col">
      <div className="">
        <TextInput
          name="title"
          label="Título"
          placeholder="Título para o agendamento"
          value={title}
          onChange={e => setTitle(e.target.value)}
          errorMessage={actionData?.errors?.title ?? ''}
        />

        <div className="flex mt-4">
          <div className="w-1/2">
            <TextInput
              name="start_time"
              label="Agendamento Início"
              placeholder="Início do Agendamento DD/MM/AAAA HH:mm"
              value={start_time}
              onChange={e => setStarTime(e.target.value)}
              errorMessage={actionData?.errors?.start_time ?? ''}
            />
          </div>

          <div className="w-1/2 ml-3">
            <TextInput
              name="end_time"
              label="Agendamento Fim"
              placeholder="Final do Agendamento DD/MM/AAAA HH:mm"
              value={end_time}
              onChange={e => setEndTime(e.target.value)}
              errorMessage={actionData?.errors?.end_time ?? ''}
            />
          </div>
        </div>
      </div>

      <div className="flex mt-8 justify-end">
        <button
          type="submit"
          className="flex items-center justify-center p-2 rounded bg-blue-600 hover:bg-blue-800 text-white"
        >
          <span>Salvar</span>
        </button>
      </div>
    </Form>
  );
}
