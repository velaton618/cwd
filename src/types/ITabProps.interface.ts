import { ReactNode } from "react";

export interface ITabProps {
  title: string;
  icon: ReactNode;
  isActive: boolean;
  href: string;
}
