import {
    AccessTime,
    FormatListBulleted
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { RecepieLink } from "../../components";

const RecepiePage = () => {
    return (
        <Box>
            <Box>
                <img
                    className="w-screen drop-shadow-md h-64 border-b-2"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                />
                <Box sx={{ ml: "1rem", mr: "1rem" }}>
                    <Typography sx={{ textAlign: "center", mt: "0.5rem" }} variant="h4">
                        Krämig tikka masala
                    </Typography>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={8}>
                            <Typography variant="body2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.{" "}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                direction="column"
                                spacing={1}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <Grid sx={{ display: "flex", gap: "0.5rem" }} item xs={6}>
                                    <Typography variant="body1">1 h</Typography> <AccessTime />
                                </Grid>
                                <Grid sx={{ display: "flex", gap: "0.5rem" }} item xs={6}>
                                    30 <FormatListBulleted />
                                </Grid>
                                <Grid sx={{ display: "flex", gap: "0.5rem" }} item xs={6}>
                                    P <FormatListBulleted />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: "1rem" }}>
                        <Typography variant="h6">Tillbehör</Typography>
                        <Box sx={{ display: 'flex', gap: "1rem", flexWrap: 'wrap' }}>
                            <RecepieLink />
                        </Box>

                    </Box>
                    <Box sx={{ mt: "1rem" }}>
                        <Typography variant="h6">Sås</Typography>
                        <Box sx={{ display: 'flex', gap: "1rem", flexWrap: 'wrap' }}>
                            <RecepieLink />
                            <RecepieLink />
                            <RecepieLink />
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', position: "absolute", bottom: "5%", justifyContent: 'center', width: '100vw' }}>
                <Link href={`/cook/${1}`}>
                    <Button variant="contained">Laga!</Button></Link>
                <IconButton><FormatListBulleted /></IconButton>
            </Box>
        </Box>
    );
};

export default RecepiePage;
