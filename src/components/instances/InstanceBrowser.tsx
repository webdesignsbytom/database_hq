import React, { useState } from 'react';

// Define types for props
interface Table {
  name: string;
  rowCount: number;
}

interface InstanceBrowserProps {
  tables: Table[]; // Accept tables as a prop
}

const InstanceBrowser: React.FC<InstanceBrowserProps> = ({ tables }) => {
  const [command, setCommand] = useState('');

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const executeCommand = () => {
    console.log(`Executing command: ${command}`);
    // Here you would send the command to your PostgreSQL server.
  };

  return (
    <section className='grid px-2 py-2'>
      <h1 className='text-2xl font-bold'>PostgreSQL Browser</h1>

      {/* Display the tables */}
      <h2 className='text-xl font-semibold mt-4'>Tables in this database</h2>
      <ul className='list-disc ml-6'>
        {tables.map((table, index) => (
          <li key={index}>
            <strong>{table.name}</strong> — {table.rowCount} rows
          </li>
        ))}
      </ul>

      {/* Command Input */}
      <input
        type='text'
        value={command}
        onChange={handleCommandChange}
        placeholder='Enter SQL command'
        className='border border-gray-400 px-2 py-1 mt-4'
      />
      <button
        onClick={executeCommand}
        className='bg-blue-500 text-white py-1 px-3 mt-2 rounded hover:bg-blue-700'
      >
        Execute
      </button>
    </section>
  );
};

export default InstanceBrowser;
