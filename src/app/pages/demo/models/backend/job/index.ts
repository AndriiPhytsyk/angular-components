import { FieldValue } from 'firebase/firestore';

export interface Job {
  title: string;
  salary: string;
  created: FieldValue;
  updated?: FieldValue;
}
