import * as yup from 'yup';
import { playerTrainingPlanValidationSchema } from 'validationSchema/player-training-plans';

export const trainingPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  coach_id: yup.string().nullable().required(),
  player_training_plan: yup.array().of(playerTrainingPlanValidationSchema),
});
