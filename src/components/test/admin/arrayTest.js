import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuizzesArray from './QuizzesArray';
import QuestionArray from './QuestionArray';
import TestsArray from './TestsArray';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ArrayTest() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }} style={{"marginTop":100}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ width: 'auto' }} label="Manage Test" {...a11yProps(0)} />
          <Tab style={{ width: 'auto' }} label="Manage Quiz" {...a11yProps(1)} />
          <Tab style={{ width: 'auto' }} label="Manage Question" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TestsArray />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuizzesArray />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QuestionArray />
      </TabPanel>

    </Box>
  );
}

export default ArrayTest;