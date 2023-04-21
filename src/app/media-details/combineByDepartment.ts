import { Person } from '../category/types';

export function combineByDepartment(crew: Person[]): Person[] {
  const map = new Map<string, Person>();
  for (const person of crew) {
    person.jobs = [];
    const key = `${person.id.toString()}_${
      person.department?.toLowerCase() || ''
    }`;
    if (map.has(key) && person.job) {
      map.get(key)?.jobs.push(person.job);
    } else if (!map.has(key)) {
      if (person.job) {
        person.jobs.push(person.job);
      }
      map.set(key, person);
    }
  }
  return Array.from(map.values());
}
