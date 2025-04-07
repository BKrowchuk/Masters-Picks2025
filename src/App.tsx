import { useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  styled,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { mockPoolMembers } from './data/mockData';

const AppContainer = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("https://img.bleacherreport.net/img/slides/photos/004/513/180/96cc5c74a0ae728f0511bc78b615dd9a_crop_exact.jpg?w=2975&h=2048&q=85")',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  padding: '0',
  boxSizing: 'border-box',
  margin: 0,
  overflow: 'hidden',
  position: 'relative',
});

const LeaderboardContainer = styled('div')(({ theme }) => ({
  margin: '0',
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '5px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  padding: '5px 0px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1,
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '75%',
    height: '75%',
    margin: '10px',
  },
}));

const ScrollableContent = styled('div')({
  flex: 1,
  overflow: 'auto',
  height: 'calc(100% - 60px)', // Subtract search bar height
  padding: '0 8px 0 0',
  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#006747',
    borderRadius: '4px',
    '&:hover': {
      background: '#005238',
    },
  },
  '&::-webkit-scrollbar-corner': {
    background: '#f1f1f1',
  },
});

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Get all unique groups
  const groups = Array.from(new Set(mockPoolMembers.flatMap(member => 
    member.picks.map(pick => pick.group)
  ))).sort((a, b) => a - b);

  // Filter pool members based on search term
  const filteredMembers = mockPoolMembers.filter(member => {
    const memberName = member.name.toLowerCase();
    const picks = member.picks.map(pick => pick.name.toLowerCase());
    return memberName.includes(searchTerm.toLowerCase()) || 
           picks.some(pick => pick.includes(searchTerm.toLowerCase()));
  });

  return (
    <AppContainer>
      <LeaderboardContainer>
        <Box sx={{ p: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search pool members or golfers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'white',
                borderRadius: '4px',
              }
            }}
            size="small"
            sx={{ mb: 1 }}
          />
        </Box>
        <ScrollableContent>
          <Box sx={{ px: 1, pb: 1, pl: 0 }}>
            <TableContainer 
              component={Paper} 
              variant="outlined"
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                maxWidth: '100%',
                height: 'calc(100% - 16px)', // Account for margins
                margin: '0px 8px',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  width: '8px',
                  height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#006747',
                  borderRadius: '4px',
                  '&:hover': {
                    background: '#005238',
                  },
                },
                '&::-webkit-scrollbar-corner': {
                  background: '#f1f1f1',
                },
              }}
            >
              <Table 
                size="small" 
                stickyHeader 
                sx={{ 
                  minWidth: 'max-content',
                }}
              >
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#006747' }}>
                    <TableCell sx={{ 
                      fontWeight: 'bold', 
                      color: 'white', 
                      padding: '6px 8px', 
                      position: 'sticky', 
                      left: 0, 
                      zIndex: 3, 
                      backgroundColor: '#006747',
                      minWidth: '180px',
                      whiteSpace: 'nowrap',
                    }}>Pool Member</TableCell>
                    {groups.map(group => (
                      <TableCell key={group} sx={{ 
                        fontWeight: 'bold', 
                        color: 'white', 
                        padding: '6px 8px', 
                        textAlign: 'center',
                        minWidth: '150px',
                        whiteSpace: 'nowrap',
                        position: 'sticky',
                        top: 0,
                        zIndex: 2,
                        backgroundColor: '#006747',
                      }}>
                        Group {group}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredMembers
                    .sort((a, b) => parseInt(a.id) - parseInt(b.id))
                    .map((member, index) => (
                      <TableRow 
                        key={member.id}
                        sx={{ 
                          '&:nth-of-type(odd)': {
                            backgroundColor: '#fafafa',
                          },
                          '&:nth-of-type(even)': {
                            backgroundColor: 'white',
                          },
                        }}
                      >
                        <TableCell 
                          sx={{ 
                            padding: '6px 8px',
                            fontWeight: 'bold',
                            borderRight: '1px solid #e0e0e0',
                            position: 'sticky',
                            left: 0,
                            zIndex: 2,
                            backgroundColor: index % 2 === 0 ? '#fafafa' : 'white',
                            minWidth: '180px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {member.name}
                          </Typography>
                        </TableCell>
                        {groups.map(group => {
                          const pick = member.picks.find(p => p.group === group);
                          return (
                            <TableCell key={`${member.id}-${group}`} sx={{ 
                              padding: '6px 8px', 
                              textAlign: 'center',
                              minWidth: '150px',
                              whiteSpace: 'nowrap',
                            }}>
                              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {pick ? pick.name : '-'}
                              </Typography>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </ScrollableContent>
      </LeaderboardContainer>
    </AppContainer>
  );
}

export default App;
