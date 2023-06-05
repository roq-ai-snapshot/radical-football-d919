import { PlayerTrainingPlanInterface } from 'interfaces/player-training-plan';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  team_id: string;
  position: string;
  birth_date: Date;
  created_at?: Date;
  updated_at?: Date;
  player_training_plan?: PlayerTrainingPlanInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    player_training_plan?: number;
  };
}
