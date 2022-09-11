import { supabaseClient } from '~/_shared/lib/supabaseClient';

import type {
  Appointment,
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from './Appointment.types';

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

export const getAppoitmentById = async function (
  id: number,
): Promise<Appointment | undefined> {
  try {
    const { data } = await supabaseClient
      .from<Appointment>('appointments')
      .select()
      .eq('id', id);

    return !data?.length ? undefined : data[0];
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

export const updateAppoitments = async function ({
  id,
  ...payload
}: UpdateAppointmentDTO): Promise<Appointment[]> {
  try {
    const { data } = await supabaseClient
      .from<Appointment>('appointments')
      .update(payload)
      .eq('id', id);

    return data || [];
  } catch (error) {
    throw error;
  }
};
