import React from "react";
import { useQuery } from "@tanstack/react-query";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Typography from "@mui/material/Typography";
import { useNavigate, redirect } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import PostCard from "../../components/PostCard";
import CreateIcon from "@mui/icons-material/Create";
import Fab from "@mui/material/Fab";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function AppIndex() {
    const { user } = useAuthContext();
    const navigateTo = useNavigate();
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_GET_POSTS}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            return res.json();
        },
        onSuccess: (data) => {
            console.log("Success", data);
        },
    });


    return (
        <>
            {isLoading ? (
                <span>Hold your horses...</span>
            ) : (
                <>
                    <Fab
                        onClick={(e) => navigateTo("post")}
                        sx={{
                            position: "fixed",
                            bottom: "16px",
                            right: "16px",
                        }}
                    >
                        <CreateIcon fontSize="medium" />
                    </Fab>
                    <Box
                        component="section"
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="Direct Messeges"
                            color="inherit"
                            href="http://localhost:3000/"
                            target="_blank"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                            }}
                        >
                            <ChatIcon fontSize="large" />
                            <Typography sx={{ fontSize: "12px" }}>
                                DMs
                            </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="groups"
                            color="inherit"
                            href="http://localhost:3000/"
                            target="_blank"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                            }}
                        >
                            <GroupIcon fontSize="large" />
                            <Typography sx={{ fontSize: "12px" }}>
                                Groups
                            </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="sections"
                            color="inherit"
                            href="http://localhost:3000/"
                            target="_blank"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                            }}
                        >
                            <WorkspacesIcon fontSize="large" />
                            <Typography sx={{ fontSize: "12px" }}>
                                Section chat
                            </Typography>
                        </IconButton>
                    </Box>

                    {data && <Container sx={{ my: 2, px: 0 }} maxWidth="sm">
                        <Stack direction="column" spacing={2}>
                            {
                                data.posts.map((post) => (
                                    <PostCard
                                        key={post._id}
                                        post={post}
                                        navigateTo={navigateTo}
                                    />
                                ))
                            }
                        </Stack>
                    </Container>}
                </>
            )}
        </>
    );
}
