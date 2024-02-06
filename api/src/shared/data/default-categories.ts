interface IDefaultCategory {
  name: string;
  icon: string;
  type: 'INCOME' | 'EXPENSE';
}

export const defaultCategories: IDefaultCategory[] = [
  // Income
  { name: 'Salário', icon: 'salary', type: 'INCOME' },
  { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
  { name: 'Outro', icon: 'other', type: 'INCOME' },
  // Expense
  { name: 'Casa', icon: 'home', type: 'EXPENSE' },
  { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
  { name: 'Educação', icon: 'education', type: 'EXPENSE' },
  { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
  { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
  { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
  { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
  { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
  { name: 'Outro', icon: 'other', type: 'EXPENSE' },
];
