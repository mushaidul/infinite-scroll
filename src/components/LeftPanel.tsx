import React from 'react';
import ExcludeTag from './ExcludeTag';
import IncludeTag from './IncludeTag';
import { Divider, TextField, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function LeftPanel(props: any) {

    return (
        <div style={{
            position: 'fixed',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            padding: '10px',
            backgroundColor: `${lightBlue[100]}`
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FilterAltIcon />
                <Typography variant='subtitle1' style={{ fontSize: '2rem', fontWeight: '400' }}>Filters</Typography>
            </div>

            <Divider style={{ width: '200px' }} />
            <IncludeTag token={props.token} setContacts={props.setContacts} setIncluded={props.setIncluded} />
            <ExcludeTag token={props.token} setExcluded={props.setExcluded} />

            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Typography style={{ marginBottom: '10px' }}>Message Received</Typography>
                <TextField
                    style={{ marginTop: '10px', marginRight: '10px', width: '150px' }}
                    id="outlined-number"
                    label="Min"
                    type="number"
                    onChange={(e) => props.setMinRec(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    style={{ marginTop: '10px', width: '150px' }}
                    id="outlined-number"
                    label="Max"
                    type="number"
                    onChange={(e) => props.setMaxRec(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>

            <div>
                <Typography>Message Sent</Typography>
                <TextField
                    style={{ marginTop: '10px', marginRight: '10px', width: '150px' }}
                    id="outlined-number"
                    label="Min"
                    type="number"
                    onChange={(e) => props.setMinSen(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    style={{ marginTop: '10px', width: '150px' }}
                    id="outlined-number"
                    label="Max"
                    type="number"
                    onChange={(e) => props.setMaxSen(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>



        </div>
    );
}

export default LeftPanel;