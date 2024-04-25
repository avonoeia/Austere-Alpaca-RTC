import React from "react";

import PostCard from "../../components/PostCard";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";  
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function PostView() {
    return (
        <>
            <PostCard />
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    mt: 2,
                    width: "100%",
                    p: 0,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Avatar alt="Remy Sharp">
                    <PersonIcon fontSize="large" color="secondary" />
                </Avatar>
                {/* <Stack
                    direction="column"
                    spacing={0}
                    sx={{ wdith display: "flex", alignItems: "center" }}
                >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ p: 0, m: 0, fontSize: "16px" }}
                    >
                        Lizard
                    </Typography>
                    <Typography variant="p" component="div">
                        @lizard
                    </Typography> */}
                <input
                    type="text"
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
                        minHeight: "60px",
                    }}
                    placeholder="Comment here"
                />
                {/* </Stack> */}
                <IconButton>
                    <SendIcon color="secondary" />
                </IconButton>
            </Stack>
        </>
    );
}
