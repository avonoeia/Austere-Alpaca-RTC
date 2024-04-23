import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import UploadIcon from '@mui/icons-material/Upload';

export default function Search() {
    return (
        <>
            <Container sx={{ my: 2 }} maxWidth="sm">
                <Box>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp">
                            <PersonIcon color="secondary" />
                        </Avatar>
                        <textarea
                            type="text"
                            placeholder="What's bugging you today?"
                            style={{
                                background: "rgb(30,30,30)",
                                padding: "15px 15px",
                                border: "none",
                                borderRadius: "5px",
                                color: "#ebffea",
                                fontFamily: "Roboto",
                                fontSize: "16px",
                                resize: "none",
                                width: "100%",
                                height: "180px",
                            }}
                        />
                    </Stack>
                    <Stack sx={{ mt: 4 }} direction="row" spacing={1}>
                        <IconButton
                            sx={{ mt: 4, width: "10%" }}
                            color="secondary"
                            size="small"
                        >

                            <UploadIcon />
                        </IconButton>
                        <Button
                            variant="contained"
                            sx={{ mt: 4, width: "100%" }}
                            color="secondary"
                        >
                            Post
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
