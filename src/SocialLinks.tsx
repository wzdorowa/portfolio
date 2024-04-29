import { styled, Link as MuiLink } from "@mui/material";
import { NextSvgIcon } from "./NextSvgIcon";
import email from "../public/icons/email.svg";
import telegram from "../public/icons/telegram.svg";
import vk from "../public/icons/vk.svg";

export function SocialLinks() {
  return (
    <Root>
      <LinkBox>
        <IconBox>
          <NextSvgIcon image={email} fontSize="inherit" alt="email" />
        </IconBox>
        <Link href="mailto:w.zdorowa@gmail.com">w.zdorowa@gmail.com</Link>
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
        <Link href="https://vk.com/serdcenika">serdcenika</Link>
      </LinkBox>
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  columnGap: 20,
  rowGap: 16,

  "@media (min-width: 1150px)": {
    columnGap: 45,
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
