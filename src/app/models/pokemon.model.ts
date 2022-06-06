import { TypeInfo } from './type-info.model';
import { StatInfo } from './stat-info.model';
import { Sprites } from './sprites.model';
export interface Pokemon {
  id?: number;
  name: string;
  base_experience?: number;
  height?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
  url?: string;
  sprites?: Sprites;
  stats?: StatInfo;
  types?: TypeInfo;
}
