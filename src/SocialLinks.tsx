import { styled, Link as MuiLink } from "@mui/material";
import { NextSvgIcon } from "./NextSvgIcon";
import email from "../public/icons/email.svg";
import telegram from "../public/icons/telegram.svg";
import vk from "../public/icons/vk.svg";
import { EMAIL, VK_URL } from "./urls";

export function SocialLinks() {
  return (
    <Root>
      <LinkBox>
        <IconBox>
          <NextSvgIcon image={email} fontSize="inherit" alt="email" />
        </IconBox>
        <Link href={EMAIL}>w.zdorowa@gmail.com</Link>
      </LinkBox>
      <LinkBox>
        <IconBox>
          <NextSvgIcon image={telegram} fontSize="inherit" alt="telegram" />
        </IconBox>
        <Text style={{ fontWeight: "normal" }}>@zdorova_veronika</Text>
      </LinkBox>
      <LinkBox>
        <IconBox>
          <NextSvgIcon image={vk} fontSize="inherit" alt="vk" />
        </IconBox>
        <Link target="_blank" href={VK_URL}>
          serdcenika
        </Link>
      </LinkBox>
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  columnGap: 20,
  rowGap: 16,
  marginBottom: 40,
  padding: "0 24px",

  "@media (min-width: 600px)": {
    marginLeft: "10%",
    padding: "0",
  },
  "@media (min-width: 1024px)": {
    columnGap: 32,
    marginBottom: 0,
    marginLeft: 0,
  },
});

const Link = styled(MuiLink)({
  color: "#4E64D5",
  textDecoration: "underline",
  transition: "color 200ms",

  "&:hover": {
    cursor: "pointer",
    color: "#4E64D570",
  },
});

const Text = styled("span")({
  color: "#4E64D5",
  fontWeight: "bold",
});

const LinkBox = styled("span")({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
});

const IconBox = styled("span")({
  fontSize: 12,
  alignSelf: "end",

  "@media (min-width: 600px)": {
    fontSize: 14,
  },
});
