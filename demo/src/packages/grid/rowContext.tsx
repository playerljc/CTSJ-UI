import React from 'react';
import { IRowProps } from './types';

export const RowContext: React.Context<IRowProps> = React.createContext<IRowProps>({
  align: 'top',
  gutter: 0,
  justify: 'center',
});

export const RowConsumer = RowContext.Consumer;
