import { useState } from 'react';
import { Form } from '@remix-run/react';
import TextInput from '~/_shared/components/TextInput';

export default function AppointmentForm() {
  const [title, setTitle] = useState('');
  const [start_time, setStarTime] = useState('');
  const [end_time, setEndTime] = useState('');

  return (
    <Form method="post" className="flex flex-col">
      <div className="">
        <TextInput
          name="title"
          label="Título"
          placeholder="Título para o agendamento"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <div className="flex mt-4">
          <div className="w-1/2">
            <TextInput
              name="start_time"
              label="Agendamento Início"
              placeholder="Início do Agendamento DD/MM/AAAA HH:mm"
              value={start_time}
              onChange={e => setStarTime(e.target.value)}
            />
          </div>

          <div className="w-1/2 ml-3">
            <TextInput
              name="end_time"
              label="Agendamento Fim"
              placeholder="Final do Agendamento DD/MM/AAAA HH:mm"
              value={end_time}
              onChange={e => setEndTime(e.target.value)}
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
