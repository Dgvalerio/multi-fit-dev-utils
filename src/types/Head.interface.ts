/* eslint-disable @typescript-eslint/ban-types */
import { IUser } from './User.interface';

export interface IHead {
  label: string;
  ref: string;
  sha: string;
  user: IUser;
  repo: {};
}
