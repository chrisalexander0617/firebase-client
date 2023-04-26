import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import AuthContainer from "../components/auth/AuthContainer";
import Center from "../components/utils/Center";

interface Props { }

const Page = ({ }: Props) => {

  return (
    <Center height={90}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        boxShadow={2}
        margin={3}
      >
        <Typography>Page</Typography>
      </Box>
    </Center>
  );
};

export default Page;
