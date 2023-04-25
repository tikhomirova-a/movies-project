import { Person } from '../category/types';
import { Credits } from './types';

export function combineByDepartment(credits: Credits): Credits {
  const map = new Map<string, Person>();
  for (const person of credits.crew) {
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
  const crew = Array.from(map.values());
  return {
    ...credits,
    crew: crew,
  };
}
