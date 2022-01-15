import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import Link from "next/link";

export const RecepieCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/recepies/${1}`}>
                    <Button size="small">Share</Button>
                </Link>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};
