import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  event_type: yup.string().required(),
  event_date: yup.date().required(),
  location: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  team_id: yup.string().nullable().required(),
});
