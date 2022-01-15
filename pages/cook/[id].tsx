import { Box, Divider, FormControlLabel, FormGroup, Paper, Tab, Tabs, Typography, Checkbox } from '@mui/material'
import React from 'react'

const CookingPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto'>
                <Tab label="Recept 1 (1/10)" />
                <Tab label="Recept 2 (3/6)" />
                <Tab label="Recept 3" />
                <Tab label="Recept 3" />
                <Tab label="Recept 4" />
            </Tabs>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: "1rem" }}>
                <Paper elevation={1} sx={{ p: "1rem" }}>
                    <Box sx={{ textAlign: 'center' }}><Typography variant='h6'>Ingredienser</Typography></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '16rem' }}><p>Tomater</p><p>3 st</p></Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '16rem' }}><p>Tomater</p><p>3 st</p></Box>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '16rem' }}><p>Tomater</p><p>3 st</p></Box>
                </Paper>
            </Box>
            <Box sx={{ ml: "2rem", mt: "2rem" }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Mosa tomater" />
                    <FormControlLabel control={<Checkbox />} label="Mosa tomater" />
                    <FormControlLabel control={<Checkbox />} label="Mosa tomater" />
                    <FormControlLabel control={<Checkbox />} label="Mosa tomater" />
                </FormGroup>
            </Box>
        </Box >
    )
}

export default CookingPage