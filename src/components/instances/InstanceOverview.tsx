import React from 'react';

// Define the types for the instance data
interface InstanceOverviewProps {
    name: string;
    host: string;
    plan: string;
    datacenter: string;
    user: string;
    password: string;
    url: string;
    createdAt: string;
    databaseSize: string;
  }
  

// InstanceOverview Component
const InstanceOverview: React.FC<InstanceOverviewProps> = ({
  name,
  host,
  plan,
  datacenter,
  user,
  password,
  url,
  createdAt,
  databaseSize,
}) => {
  return (
    <section className='grid px-2 py-2'>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <p>
        <strong>Host:</strong> {host}
      </p>
      <p>
        <strong>Plan:</strong> {plan}
      </p>
      <p>
        <strong>Datacenter:</strong> {datacenter}
      </p>
      <p>
        <strong>User & Default Database:</strong> {user}
      </p>
      <p>
        <strong>Password:</strong> {password}
      </p>
      <p>
        <strong>URL:</strong> {url}
      </p>
      <p>
        <strong>Created At:</strong> {createdAt}
      </p>
      <p>
        <strong>Current Database Size:</strong> {databaseSize}
      </p>
    </section>
  );
};

export default InstanceOverview;
