export type Appointment = {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
};

export type CreateAppointmentDTO = {
  title: string;
  start_time: string;
  end_time: string;
};

export type UpdateAppointmentDTO = {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
};
