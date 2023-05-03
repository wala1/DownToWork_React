import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

function MainListItems() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate('/dashboard/orders');
  }
  const navToDash = () => {
    navigate('/dashboard');
  }


  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" onClick={() => navToDash()} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" onClick={() => handleNav()} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary="Add Tests" onClick={() => navigate('/dashboard/tests')} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Tests" onClick={() => navigate('/dashboard/arrayTest')} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary="Topics" onClick={() => navigate('/dashboard/topics')} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" onClick={() => navigate('/dashboard/courses')} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
}

function SecondaryListItems() {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );
}

export { MainListItems, SecondaryListItems };
