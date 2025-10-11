import { FC } from "react";
import { styled, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailSharp";
import TelegramIcon from "@mui/icons-material/Telegram";

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
    email: "w.zdorowa@gmail.com",
    telegram: {
      url: "https://t.me/zdorova_veronika",
      handle: "@zdorova_veronika",
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
  gap: 16,
  flexShrink: 0, // Не сжимается

  "@media (max-width: 480px)": {
    flexDirection: "column",
    gap: 8,
  },
});

const ContactLink = styled("a")({
  color: "#4e64d5",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 8,

  "&:hover": {
    opacity: 0.7,
    transition: "opacity 0.2s ease",
  },
});
