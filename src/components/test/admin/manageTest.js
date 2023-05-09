import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuizzesAdmin from './QuizzesAdmin';
import QuestionForm from './QuestionForm';
import TestsAdmin from './TestsAdmin';

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

function ManageTest() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}style={{"marginTop":100}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{width: 'auto'}} label="Test" {...a11yProps(0)} />
          <Tab style={{width: 'auto'}} label="Quiz" {...a11yProps(1)} />
          <Tab style={{width: 'auto'}} label="Question" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TestsAdmin/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuizzesAdmin/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QuestionForm/>
      </TabPanel>
    </Box>
  );
}

export default ManageTest;