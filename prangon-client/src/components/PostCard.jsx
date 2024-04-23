import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import CardActions from '@mui/material/CardActions';
import { useNavigate } from "react-router-dom";

export default function PostCard() {
    const navigateTo = useNavigate();

    return (
        <Card
            raised={true}
            sx={{
                backgroundColor: "#1e1e1e",
                width: "100%",
                borderRadius: "5px",
            }}
        >
            <CardActionArea>
                <CardActions onClick={e => location.href = "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/438204827_844400087728716_1645927507429381317_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoEOW3FaE3N6yyVpooToMg7dn_9UANXAnt2f_1QA1cCbaxSvlq9rJi2ogKvMEpT0G1VwEYL1UNYy_3kFMFUj3j&_nc_ohc=PC9vAKXHw9cAb5SnLt7&_nc_ht=scontent.fdac99-1.fna&oh=00_AfCQ9I7V9s87JmLAZ0rc4nj6hC58P1hNeUWh7OUfF2HCdQ&oe=662D5271"}>
                    <CardMedia
                        component="img"      
                        image="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/438204827_844400087728716_1645927507429381317_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoEOW3FaE3N6yyVpooToMg7dn_9UANXAnt2f_1QA1cCbaxSvlq9rJi2ogKvMEpT0G1VwEYL1UNYy_3kFMFUj3j&_nc_ohc=PC9vAKXHw9cAb5SnLt7&_nc_ht=scontent.fdac99-1.fna&oh=00_AfCQ9I7V9s87JmLAZ0rc4nj6hC58P1hNeUWh7OUfF2HCdQ&oe=662D5271"
                        alt="green iguana"
                    />
                </CardActions>
                <CardContent sx={{ color: "secondary.main" }}>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ paddingBottom: 1 }}
                    >
                        <Avatar alt="Remy Sharp">
                            <PersonIcon fontSize="large" color="secondary" />
                        </Avatar>
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{ display: "flex", alignItems: "center" }}
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
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography sx={{ textAlign: "left" }} variant="body2">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
