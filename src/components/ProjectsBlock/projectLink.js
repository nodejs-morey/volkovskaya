/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { H4 } from "commonStyles";

const ProjectLink = ({ project }) => (
  <Box>
    <H4>{project.title}</H4>
  </Box>
);

export default ProjectLink;
