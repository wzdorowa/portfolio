import { FC } from "react";
import { BackButton } from "./BackButton";
import { Contacts } from "./Contacts";

interface OverviewFooterProps {
  withBackButton?: boolean;
  onBackClick?: () => void;
}

export const OverviewFooter: FC<OverviewFooterProps> = ({
  withBackButton = false,
  onBackClick,
}) => {
  if (withBackButton) {
    return <BackButton onClick={onBackClick} />;
  }

  return <Contacts />;
};
