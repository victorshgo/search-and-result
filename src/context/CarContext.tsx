'use client';

import React, { createContext, useState } from 'react';

type DetailsProps = {
  brand: string;
  model: string;
  year: string;
};

type ContextProps = {
  details: DetailsProps;
  setDetails: (details: DetailsProps) => void;
};

export const CarContext = createContext({} as ContextProps);

const emptyData = {
  brand: '',
  model: '',
  year: ''
};

export const CarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [details, setDetails] = useState<DetailsProps>(emptyData);

  return (
    <CarContext.Provider value={{ details, setDetails }}>
      {children}
    </CarContext.Provider>
  );
};
