import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
function ItemTodo() {
  return (
    <List sx={{ overflow: 'auto', maxHeight: 200 }} >
      <ListItem >
        <ListItemButton>
          <ListItemIcon>
            <Checkbox edge='start'/>
          </ListItemIcon>
          <ListItemText  sx={{marginLeft:-4}}>
            <Typography variant={'title2'}>
              Learn programming by 12am
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton >
          <ListItemIcon>
            <Checkbox
              edge="start" />
          </ListItemIcon>
          <ListItemText  sx={{marginLeft:-4}}>
            <Typography variant={'title2'}>
              Learn how to cook by 1pm
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox edge='start'/>
          </ListItemIcon>
          <ListItemText  sx={{marginLeft:-4}}>
            <Typography variant={'title2'}>
              Pick up the kids by 2pm
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox edge='start'/>
          </ListItemIcon>
          <ListItemText  sx={{marginLeft:-4}}>
            <Typography variant={'title2'}>
              Have lunch by 3pm
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox edge='start'/>
          </ListItemIcon>
          <ListItemText  sx={{marginLeft:-4}}>
            <Typography variant={'title2'}>
              Go visit mom by 4pm
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default ItemTodo;