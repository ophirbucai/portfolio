import React from "react";
import styled from "styled-components";
import { LinkStyled, ListItemStyled } from "../components";
import { Link } from "../types";

export function Link({ href, target, label }: Link) {
  return (
    <ListItemStyled>
      <LinkStyled
        href={href}
        target={target}
        onClick={(e) => e.preventDefault()}
      >
        {label}
      </LinkStyled>
    </ListItemStyled>
  );
}
