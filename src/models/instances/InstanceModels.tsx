export interface DatabaseInstance {
  id: string;
  name: string;
  host: string;
  plan: string;
  datacenter: string;
  user: string;
  password: string;
  url: string;
  createdAt: string;
  databaseSize: string;
  tables: DatabaseTable[]; // Add tables field
  actions: JSX.Element;
}

export interface DatabaseTable {
  name: string;
  rowCount: number;
}

export const databasesArray: Array<DatabaseInstance> = [
  {
    id: '1',
    name: 'Toms Database',
    host: 'flora.db.elephantsql.com',
    plan: 'Tiny Turtle',
    datacenter: 'Amazon Web Services EU-West-1 (Ireland)',
    user: 'rsuavvzi',
    password: '***',
    url: 'postgres://rsuavvzi:***@flora.db.elephantsql.com/rsuavvzi',
    createdAt: '2024-07-31 15:30 UTC+00:00',
    databaseSize: '4 MB',
    tables: [
      { name: 'teams', rowCount: 250 },
      { name: 'matches', rowCount: 320 },
    ],
    actions: <button>Edit</button>,
  },
  {
    id: '2',
    name: 'Sports',
    host: 'shard.db.elephantsql.com',
    plan: 'Mighty Whale',
    datacenter: 'Google Cloud US-Central (Iowa)',
    user: 'abc123',
    password: '***',
    url: 'postgres://abc123:***@shard.db.elephantsql.com/abc123',
    createdAt: '2024-07-30 12:00 UTC+00:00',
    databaseSize: '2 MB',
    tables: [
      { name: 'teams', rowCount: 250 },
      { name: 'matches', rowCount: 320 },
    ],
    actions: <button>Edit</button>,
  },
  {
    id: '3',
    name: 'UserData',
    host: 'blossom.db.elephantsql.com',
    plan: 'Large Falcon',
    datacenter: 'Microsoft Azure East-US (Virginia)',
    user: 'xyz789',
    password: '***',
    url: 'postgres://xyz789:***@blossom.db.elephantsql.com/xyz789',
    createdAt: '2024-07-25 09:00 UTC+00:00',
    databaseSize: '8 MB',
    tables: [
      { name: 'teams', rowCount: 250 },
      { name: 'matches', rowCount: 320 },
    ],
    actions: <button>Edit</button>,
  },
  // Add more instances similarly...
];
