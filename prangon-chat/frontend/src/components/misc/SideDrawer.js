import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Button } from "@chakra-ui/button";
import {  Menu, Tooltip } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/layout";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="2xl" fontFamily="Work sans">
          Prangon
        </Text>

        <div>
          <Menu>

          </Menu>
        </div>

      </Box>
    </>
  );
};

export default SideDrawer;
