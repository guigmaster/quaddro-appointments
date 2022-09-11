import type { MetaFunction } from '@remix-run/node';

import AppointmentsLayout from '~/features/Appointments/components/AppointmentsLayout';

export const meta: MetaFunction = () => ({
  title: 'Agendamentos - Quaddro Appoitments',
});

const appointments = [
  {
    id: 1,
    title: 'Teste de Agendamento',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 2,
    title: 'Teste de Agendamento 2',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 3,
    title: 'Teste de Agendamento 3',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 4,
    title: 'Teste de Agendamento 4',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 5,
    title: 'Teste de Agendamento 5',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
];

export default function Appoitments() {
  return <AppointmentsLayout appointments={appointments} />;
}
