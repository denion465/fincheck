import { PlusIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '../../../../components/DropdownMenu';
import { BankAccountIcon } from '../../../../components/icons/BankAccountIcon';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

export function Fab() {
  const {
    openNewAccountModal,
    openNewTransactionModal,
  } = useDashboard();

  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div
            className="bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center text-white"
          >
            <PlusIcon className="w-6 h-6" />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item
            onSelect={() => openNewTransactionModal('EXPENSE') }
            className="gap-2"
          >
            <CategoryIcon type="expense"/>
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onSelect={() => openNewTransactionModal('INCOME') }
            className="gap-2"
          >
            <CategoryIcon type="income"/>
            Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item className="gap-2" onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
