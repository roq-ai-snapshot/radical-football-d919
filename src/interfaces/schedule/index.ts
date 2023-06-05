import { TeamInterface } from 'interfaces/team';

export interface ScheduleInterface {
  id?: string;
  team_id: string;
  event_type: string;
  event_date: Date;
  location: string;
  created_at?: Date;
  updated_at?: Date;

  team?: TeamInterface;
  _count?: {};
}
