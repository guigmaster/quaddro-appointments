import { supabaseClient } from '~/_shared/lib/supabaseClient';

import type { Appointment } from './Appointment.types';

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
