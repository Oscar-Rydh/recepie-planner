import { Paper, Box } from "@mui/material"


export const RecepieLink = () => {
    return (<Paper elevation={1} sx={{ maxWidth: "10rem" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", paddingRight: '1rem' }}>
            <Box sx={{ height: "36" }}>
                <img
                    width="36"
                    src="https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg"
                ></img>
            </Box>
            <Box>Rice</Box>
        </Box>
    </Paper>)
}