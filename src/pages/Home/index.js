import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

const Home = () => {
  const [openBasicStopModal, setOpenBasicStopModal] = useState(false);

  const handleOpenBasicStopModal = () => {
    setOpenBasicStopModal(true);
  };

  const handleCloseBasicStopModal = () => {
    setOpenBasicStopModal(false);
  };

  return (
    <Box width="90vh" height="90vh" maxWidth="900px">
      <Card style={{ background: "transparent" }}>
        <CardContent
          style={{
            background: "#424240",
            border: "2px solid #52524f",
            borderRadius: "10px",
          }}
        >
          <Box width="80%" margin="20px auto">
            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenBasicStopModal}
              >
                BASIC STOP
              </Button>
            </Box>
            <Box display="flex" justifyContent="space-between" m="20px 0">
              <Button variant="outlined" color="primary">
                MOTOR/TRAFFIC
              </Button>
              <Button variant="outlined" color="primary">
                PROBATION CONTRACT
              </Button>
            </Box>
            <Divider variant="middle" color="borderPrimary" />
            <Box mt={2} width="80%" margin="20px auto">
              <Typography color="secondary" textAlign="justify">
                About this App: <br />
                The Racial and Identity Profilling Act of 2015 (AB 953) requires
                state and local law enforcement agencies, to collect data
                regarding stops of individuals, including perceived demographic
                information on the person stopped, and to report this data to
                the California Attorney General's (AG) office. <br /> <br />
                The AG's Office has adopted{" "}
                <Typography color="primary" display="inline">
                  these regulations{" "}
                </Typography>
                on November 7, 2017. On January 1, 2024
                <Typography color="primary" display="inline">
                  {" "}
                  amended regulations{" "}
                </Typography>
                will take effect. For more information please see the AG's
                Website. <br /> <br />
                If you experience issues please contact us at
                dsddevops@sdsheriff.org
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Dialog
        open={openBasicStopModal}
        onClose={handleCloseBasicStopModal}
        PaperProps={{
          style: {
            background: "#424240",
            border: "2px solid #52524f",
            borderRadius: "10px",
          },
        }}
        color="secondary"
        fullWidth
      >
        <DialogTitle color="secondary">Title</DialogTitle>
        <DialogContent dividers>
          <Typography color="secondary">This is the content.</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Home;
