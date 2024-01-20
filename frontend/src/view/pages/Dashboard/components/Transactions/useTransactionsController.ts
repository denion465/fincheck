import { useState } from 'react';

import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(true);

  function handlerOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handlerCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [1],
    handlerOpenFiltersModal,
    handlerCloseFiltersModal,
    isFiltersModalOpen,
  };
}
