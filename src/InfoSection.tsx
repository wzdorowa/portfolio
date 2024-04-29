"use client";
import { styled } from "@mui/material";
import React from "react";

type TableData = {
  name: string;
  title?: string;
  description: React.ReactNode;
};

type Props = {
  title: string;
  icon: React.ReactNode;
  sectionId: string;
  tableData: TableData[];
};

export function InfoSection({ title, icon, sectionId, tableData }: Props) {
  return (
    <section id={sectionId}>
      <TitleSection>
        <Title>
          <IconBox>{icon}</IconBox>
          {title}
        </Title>
        <hr />
      </TitleSection>
      <SectionContent>
        <tbody>
          {tableData.map(({ name, title, description }) => (
            <tr key={name}>
              <th>{name}</th>
              <td>
                <TableCell>
                  {title && <span>{title}</span>}
                  <span>{description}</span>
                </TableCell>
              </td>
            </tr>
          ))}
        </tbody>
      </SectionContent>
    </section>
  );
}

const TitleSection = styled("div")({
  display: "flex",
  alignItems: "center",

  "& hr": {
    width: "100%",
    border: "0.5px solid #000",
  },
});

const Title = styled("span")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  height: 50,
  border: "1px solid #000",
  borderRadius: 32,
  fontSize: 18,
  whiteSpace: "nowrap",
  padding: "0 24px",

  "@media (min-width: 600px)": {
    height: 70,
    fontSize: 24,
  },
});

const IconBox = styled("span")({
  fontSize: 21,
});

const SectionContent = styled("table")({
  fontSize: 16,
  fontWeight: "bold",
  borderSpacing: "15px 30px",
  marginLeft: 10,

  "@media (min-width: 600px)": {
    fontSize: 20,
    borderSpacing: "30px 50px",
    marginLeft: 20,
  },

  "& th": {
    color: "#125388",
    verticalAlign: "top",
    textAlign: "start",
    maxWidth: 170,
  },

  "& td": {
    verticalAlign: "top",
  },
});

const TableCell = styled("span")({
  display: "inline-flex",
  flexDirection: "column",
  gap: 8,

  "& span": {
    maxWidth: 375,
  },

  "& a": {
    textDecoration: "underline",
    transition: "opacity 200ms",

    "&:hover": {
      opacity: 0.7,
    },
  },

  "& span:last-child": {
    color: "#00000070",
    fontSize: 12,
    maxWidth: 510,
  },

  "@media (min-width: 600px)": {
    "& span:last-child": {
      fontSize: 16,
    },
  },
});
