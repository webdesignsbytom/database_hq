import React, { createContext, ReactNode, useContext, useState } from 'react';

interface InstanceContextProps {
  selectedInstance: string;
  setSelectedInstance: (instance: string) => void;
}

const InstanceContext = createContext<InstanceContextProps | undefined>(undefined);

export const InstanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedInstance, setSelectedInstance] = useState<string>('all_instances');

  return (
    <InstanceContext.Provider value={{ selectedInstance, setSelectedInstance }}>
      {children}
    </InstanceContext.Provider>
  );
};

export const useInstance = () => {
  const context = useContext(InstanceContext);
  if (!context) {
    throw new Error('useInstance must be used within an InstanceProvider');
  }
  return context;
};
