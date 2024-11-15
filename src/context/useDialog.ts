import { useContext } from 'react';

import { DialogContext } from './dialogContext';

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error('useDialogContext must be used within a DialogProvider');
  return context;
};
