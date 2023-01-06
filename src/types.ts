import React from "react";

export type Project = {
  title: string;
  description: string;
  links: Link[];
};

export type Link = {
  label: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
};

export type Mode = "dark" | "light";
