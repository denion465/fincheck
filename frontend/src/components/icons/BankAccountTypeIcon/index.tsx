import { iconsMap } from "./iconsMap";

interface BankAccountTypeIconProps {
  type: keyof typeof iconsMap;
}

export function BankAccountTypeIcon({ type }: Readonly<BankAccountTypeIconProps>) {
  const Icon = iconsMap[type];

  return <Icon />;
}
