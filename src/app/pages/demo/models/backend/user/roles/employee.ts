export interface Employee {
  specialization: Specialization;
  skills: Skill[];
  qualification: Qualification;
  expectedSalary: number;
  experiences: Experience[];
}

export interface Specialization {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Qualification {
  id: string;
  name: string;
}

export interface Experience {
  companyName: string;
  period: Period;
}

export interface Period {
  from: number;
  to: number;
}
