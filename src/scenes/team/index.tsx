import { Box, Typography, useTheme } from '@mui/material';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';

import { Header } from '../../components/Header';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: (data: { row: { access: string } }) => {
        const access = data.row.access;

        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            sx={{
              backgroundColor:
                access === 'admin'
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
            }}
          >
            {access === 'admin' && (
              <AdminPanelSettingsOutlined />
            )}
            {access === 'manager' && <SecurityOutlined />}
            {access === 'user' && <LockOpenOutlined />}
            <Typography
              color={colors.grey[100]}
              sx={{ ml: '5px' }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="team"
        subtitle="Managin the team members"
      ></Header>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none !important',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none !important',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[600],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns as GridColumns}
        />
      </Box>
    </Box>
  );
};
