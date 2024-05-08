import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{
            position: 'fixed', left: 0, right: 0, bottom: 0,
            boxShadow: 'rgb(114 142 147 / 30%) 0px 5px 15px 0px', backgroundColor: '#1976d2', zIndex: 999
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<FacebookIcon />} href="https://www.facebook.com/khurram.javid.47" target="_blank" rel="noopener" />
                <BottomNavigationAction icon={<LinkedInIcon />} href="https://www.linkedin.com/in/hafiz-javid-6a0810225/" target="_blank" rel="noopener" />
                <BottomNavigationAction icon={<GitHubIcon />} href="https://github.com/hafizkh/" target="_blank" rel="noopener" />
            </BottomNavigation>
        </Box>
    );
}
