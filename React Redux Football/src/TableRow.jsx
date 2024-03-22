import React from "react";
import { Tr, Td } from "@chakra-ui/react";
export default function TableRow({
  competition,
  year,
  round,
  team1,
  team2,
  team1goals,
  team2goals,
}) {
  return (
    <Tr>
      <Td>{competition}</Td>
      <Td>{team1}</Td>
      <Td>{team2}</Td>
      <Td>{round}</Td>
      <Td>{year}</Td>
      <Td>{team1goals}</Td>
      <Td>{team2goals}</Td>
    </Tr>
  );
}
