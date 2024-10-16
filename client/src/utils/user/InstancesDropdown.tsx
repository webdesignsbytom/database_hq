import React, { useState } from 'react';
// Icons
import { IoCaretDownCircleSharp } from 'react-icons/io5';
import { databasesArray } from '../../models/instances/InstanceModels';

// Define props type for InstancesDropdown
interface InstancesDropdownProps {
  selectedInstance: string;
  setSelectedInstance: (instanceName: string) => void;
}

const InstancesDropdown: React.FC<InstancesDropdownProps> = ({
  selectedInstance,
  setSelectedInstance,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown
  };

  const handleInstanceSelect = (instanceName: string) => {
    setSelectedInstance(instanceName); // Update the selected instance in the Navbar state
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className='relative grid'>
      <button
        onClick={toggleDropdown}
        className='grid bg-main-background items-center min-w-[200px] border border-solid border-black rounded-lg focus-within:border-orange-600'
      >
        <div className='grid grid-cols-rev'>
          <div className='grid justify-start pl-2'>{selectedInstance}</div>
          <div className='grid items-center px-1'>
            <span className='hover:text-gray-500'>
              <IoCaretDownCircleSharp />
            </span>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className='absolute left-0 top-full mt-1 w-full'>
          <div className='grid bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden cursor-pointer'>
            <ul>
              {databasesArray.map((database) => (
                <li
                  key={database.id}
                  className='px-4 py-2 hover:bg-gray-100'
                  onClick={() => handleInstanceSelect(database.name)}
                >
                  {database.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstancesDropdown;
