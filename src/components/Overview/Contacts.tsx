import { FC } from "react";
import { styled, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailSharp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { OVERVIEW_CONSTANTS } from "./constants";

interface ContactInfo {
  email?: string;
  telegram?: {
    url: string;
    handle: string;
  };
}

interface ContactsProps {
  contacts?: ContactInfo;
}

export const Contacts: FC<ContactsProps> = ({
  contacts = {
    email: OVERVIEW_CONSTANTS.CONTACTS.EMAIL,
    telegram: {
      url: OVERVIEW_CONSTANTS.CONTACTS.TELEGRAM,
      handle: OVERVIEW_CONSTANTS.CONTACTS.TELEGRAM_HANDLE,
    },
  },
}) => {
  return (
    <ContactsWrapper>
      {contacts.email && (
        <ContactLink href={`mailto:${contacts.email}`}>
          <EmailIcon />
          <Typography variant="body2">{contacts.email}</Typography>
        </ContactLink>
      )}

      {contacts.telegram && (
        <ContactLink
          href={contacts.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
          <Typography variant="body2">{contacts.telegram.handle}</Typography>
        </ContactLink>
      )}
    </ContactsWrapper>
  );
};

const ContactsWrapper = styled("div")({
  display: "flex",
  gap: OVERVIEW_CONSTANTS.CONTACTS.GAP,
  flexShrink: 0, // Не сжимается
});

const ContactLink = styled("a")({
  color: OVERVIEW_CONSTANTS.CONTACTS.COLOR,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: OVERVIEW_CONSTANTS.CONTACTS.ICON_GAP,

  "&:hover": {
    opacity: 0.8,
    transition: "opacity 0.2s ease",
  },
});
