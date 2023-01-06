import React from "react";
import styled from "styled-components";
import { LinkStyled, ListItemStyled } from "../components";
import { TProjectLink } from "../types";

export function Link({ href, target, label }: TProjectLink) {
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

{
  /* <div>
  {links.map((link, idx) => (
    <Link
      href={link}
      key={`project__link_${idx}`}
      label={`${idx + 1}`}
      target="_blank"
    ></Link>
  ))}
</div>; */
}
