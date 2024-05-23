import { v4 as randomUUID } from 'uuid';

export const initialItems = [
  {
    id: randomUUID(),
    name: 'passport',
    packed: true,
  },
  {
    id: randomUUID(),
    name: 'laptop',
    packed: false,
  },
  {
    id: randomUUID(),
    name: 'sandwich',
    packed: false,
  },
];
