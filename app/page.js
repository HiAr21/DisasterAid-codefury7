"use client";
import { Box, Button, Stack } from "@mui/material";
import Navbar from "./components/navbar";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState("block");

  return (
    <>
      <Stack>
        <Navbar />
      </Stack>
    </>
  );
}
