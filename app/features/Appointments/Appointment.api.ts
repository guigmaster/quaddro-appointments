import { supabaseClient } from '~/_shared/lib/supabaseClient';

import type { Appointment, CreateAppointmentDTO } from './Appointment.types';

export const getAppoitments = async function (): Promise<Appointment[]> {
  try {
    const { data } = await supabaseClient
      .from<Appointment>('appointments')
      .select();

    return data || [];
  } catch (error) {
    throw error;
  }
};

export const createAppoitments = async function (
  payload: CreateAppointmentDTO,
): Promise<Appointment[]> {
  try {
    const { data } = await supabaseClient
      .from<Appointment>('appointments')
      .insert([payload]);

    return data || [];
  } catch (error) {
    throw error;
  }
};
