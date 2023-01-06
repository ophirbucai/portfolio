import React from "react";
import { projects as data } from "./projects.json";
import { Link } from "../Link/Link.comp";
import { Project } from "../types";
import {
  LinksStyled,
  FootyStyled,
  HeadyStyled,
  CardsStyled,
} from "../components";

export function Projects() {
  const [projects, setProjects] = React.useState<Project[]>(data || []);

  return (
    <>
      <HeadyStyled></HeadyStyled>
      {projects.map((project, idx) => (
        <CardsStyled key={`project__${idx}`}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.links.length && (
            <LinksStyled>
              {project.links.map((link, idx) => (
                <Link
                  key={`project__link_${idx}`}
                  href={link.href}
                  target={link.target || "_blank"}
                  label={link.label}
                ></Link>
              ))}
            </LinksStyled>
          )}
        </CardsStyled>
      ))}
      <FootyStyled></FootyStyled>
    </>
  );
}
