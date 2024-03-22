import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import TableRow from "./TableRow";
import {
  FETCH_CREATE,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SET_PAGE_TO_FORWARD,
  SET_PAGE_TO_BACK,
  SET_PAGE_TO_LAST,
  SET_PAGE_TO_FIRST,
} from "./action";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Football({ data, page }) {
  const dispatch = useDispatch();
  let state = useSelector((state) => state);
  let makeAPI = async () => {
    dispatch({
      type: FETCH_CREATE,
      payload: { isLoad: true, isError: false },
    });
    try {
      let res = await axios({
        method: "get",
        url: `https://jsonmock.hackerrank.com/api/football_matches?page=${page.page}`,
      });
      //   console.log(res.data.data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: { data: res.data.data, isLoad: false, isError: false },
      });
    } catch (error) {
      dispatch({
        type: FETCH_FAILURE,
        payload: { isLoad: false, isError: true },
      });
      console.log(error);
    }
  };
  useEffect(() => {
    makeAPI();
  }, [page]);
  console.log(state);
  return (
    <div>
      <Heading>FootBall Matches</Heading>
      <TableContainer mt={"100px"}>
        <Table size="sm" maxWidth={"100%"} variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>competition</Th>
              <Th>Team 1</Th>
              <Th isNumeric>Team 2</Th>
              <Th isNumeric>Round</Th>
              <Th isNumeric>Year</Th>
              <Th isNumeric>Team 1 Goals</Th>
              <Th isNumeric>Team 2 Goals</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.footballMatches &&
              data.footballMatches.map((row, id) => {
                return <TableRow key={id} {...row} />;
              })}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
      <Box mt={4}>
        <ButtonGroup>
          <Button
            //   isDisabled={page.isPage}
            onClick={() => {
              dispatch({
                type: SET_PAGE_TO_FIRST,
              });
            }}
          >
            First
          </Button>
          <Button
            isDisabled={page.isPage}
            onClick={() => {
              dispatch({
                type: SET_PAGE_TO_BACK,
              });
            }}
          >
            <IoArrowBackCircleOutline />
          </Button>
          <Button>{page.page}</Button>
          <Button
            isDisabled={page.isPage}
            onClick={() => {
              dispatch({
                type: SET_PAGE_TO_FORWARD,
              });
            }}
          >
            <IoArrowForwardCircleOutline />
          </Button>
          <Button
            isDisabled={page.isPage}
            onClick={() => {
              dispatch({
                type: SET_PAGE_TO_LAST,
              });
            }}
          >
            Last
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}

let mapStateToProps = (state) => ({
  data: state.fetch,
  page: state.page,
});

export default connect(mapStateToProps)(Football);
