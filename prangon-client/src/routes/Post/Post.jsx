import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

import Upload from "./Upload";

export default function Post() {
    const [image, setImage] = React.useState("")
    const [postText, setPostText] = React.useState("")

    const handlePostSubmission = async () => {
        pass
    }

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
                            value={postText}
                            onChange={e => setPostText(e.target.value)}
                        />
                    </Stack>
                    <Upload image={image} setImage={setImage} />
                    <Stack sx={{ mt: 4 }} direction="row" spacing={1}>
                        <Button
                            variant="contained"
                            sx={{ mt: 4, width: "100%" }}
                            color="secondary"
                            onClick={handlePostSubmission}
                        >
                            Post
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
