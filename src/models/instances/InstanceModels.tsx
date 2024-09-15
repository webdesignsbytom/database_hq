export interface DatabaseInstance {
    id: string;  // Change 'String' to 'string'
    name: string;
    host: string;
    plan: string;
    datacenter: string;
    actions: JSX.Element;
  }
  
  
  export const databasesArray: Array<DatabaseInstance> = [
    {
      id: '1',
      name: 'Toms Database',
      host: 'flora',
      plan: 'Tiny Turtle',
      datacenter: 'Amazon Web Services EU-West-1 (Ireland)',
      actions: <button>Edit</button>,
    },
    {
      id: '2',
      name: 'Sports',
      host: 'shard',
      plan: 'Mighty Whale',
      datacenter: 'Google Cloud US-Central (Iowa)',
      actions: <button>Edit</button>,
    },
    {
      id: '3',
      name: 'UserData',
      host: 'blossom',
      plan: 'Large Falcon',
      datacenter: 'Microsoft Azure East-US (Virginia)',
      actions: <button>Edit</button>,
    },
    {
      id: '4',
      name: 'Facebook',
      host: 'iris',
      plan: 'Mega Elephant',
      datacenter: 'Amazon Web Services US-West-1 (California)',
      actions: <button>Edit</button>,
    },
    {
      id: '5',
      name: 'Test Database',
      host: 'nova',
      plan: 'Small Rabbit',
      datacenter: 'DigitalOcean Singapore',
      actions: <button>Edit</button>,
    },
  ];
  