'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { events, positions } from "@/app/data";


// function generate(element: React.ReactElement) {
//     return [0, 1, 2].map((value) =>
//         React.cloneElement(element, {
//             key: value,
//         }),
//     );
// }

export default function Event() {
    const [secondary, setSecondary] = React.useState(false);

    return (
        <>
            <div className='p-4'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h2" component="div">
                            経験した役割
                        </Typography>
                        {positions.map((position, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={<Typography variant='body1' className=''>{position.name}</Typography>}
                                />
                            </ListItem>
                        ))}

                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h2" component="div">
                            参加・出展
                        </Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={secondary}
                                    onChange={(event) => setSecondary(event.target.checked)}
                                    style={{ color: 'white' }}
                                />
                            }
                            label={<Typography variant='button'>詳細を表示</Typography>}
                        />
                        {events.map((event, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={<Typography variant='body1' className=''>{event.title}</Typography>}
                                    secondary={secondary ? <Typography variant='caption'>{event.description}</Typography> : null}
                                />
                            </ListItem>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
