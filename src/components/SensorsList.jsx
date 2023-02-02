//import LineGraph from "./SensorCharts";
import SensorLineChart from "./sensor/SensorLineChart";
import { useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";

// const targetUrl = "ws://192.168.1.96/ws";
// const ws = new WebSocket(targetUrl);

export default function GraphsList() {
  // const addData = (value) => {
  //   let newData = { time: setCount(count + 1), light: value };

  //   setData([...data, newData]);
  // };

  // ws.onopen = () => {
  //   console.log("conectado");
  // };

  // ws.onmessage = (e) => {
  //   addData(e.data);
  // };

  return (
    <Box sx={{ flexWrap:'wrap', flexGrow: 1, p: 2, m: 2, justifyContent: 'center'  }}>
      <Stack spacing={2}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} >
            <SensorLineChart url="ws://192.168.1.97/ws" />
          </Grid>
          <Grid item xs={12} md={6}>
            <SensorLineChart url="ws://192.168.1.100/ws" />
          </Grid>
          <Grid item xs={12} md={6}>
            <SensorLineChart url="ws://192.168.1.100/ws" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
