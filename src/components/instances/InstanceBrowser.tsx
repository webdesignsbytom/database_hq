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
  const [selectedTable, setSelectedTable] = useState<string>(''); // State for selected table

  // Update the event type to HTMLTextAreaElement for the textarea
  const handleCommandChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommand(e.target.value);
  };

  const handleTableChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTable(e.target.value); // Update selected table
  };

  const executeCommand = () => {
    console.log(`Executing command: ${command}`);
    console.log(`Selected table: ${selectedTable}`);
    // Here you would send the command to your PostgreSQL server.
  };

  return (
    <section className='grid grid-rows-reg gap-4 w-full h-full px-4 py-2'>
      <section className='grid w-full h-full'>
        <div className='grid w-full h-full'>
          <h1 className='text-2xl font-bold'>PostgreSQL Browser</h1>
        </div>
        {/* Command Input */}
        <section>
          <div>
            <textarea
              value={command}
              onChange={handleCommandChange}
              placeholder='Enter SQL command'
              className='px-2 py-1 mt-4 w-full border-2 border-gray-300 border-solid rounded'
              rows={4} // Set to 4 rows
            />
          </div>
          <section className='grid grid-flow-col justify-between bg-red-300'>
            <div>
              <select
                value={selectedTable}
                onChange={handleTableChange}
                className='border border-gray-400 px-4 py-2 rounded'
              >
                <option value='' disabled>
                  -- Select a table --
                </option>
                {tables.map((table, index) => (
                  <option key={index} value={table.name}>
                    {table.name} ({table.rowCount} rows)
                  </option>
                ))}
              </select>
            </div>
            <div className='grid'>
              <button
                onClick={executeCommand}
                className='bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700'
              >
                Execute
              </button>
            </div>
          </section>
        </section>
      </section>

      {/* Tables */}
      <section className='bg-white border border-solid border-gray-300 rounded'>
        <article className='grid px-1 py-1'>
            <div className='p-2 border-t-2 border-solid border-gray-300'>2</div>
            <div className='p-2 border-t-2 border-solid border-gray-300'>2</div>
            <div className='p-2 border-t-2 border-solid border-gray-300'>1</div>
        </article>
      </section>
    </section>
  );
};

export default InstanceBrowser;
