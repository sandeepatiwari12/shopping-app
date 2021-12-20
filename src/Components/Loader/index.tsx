import Typography from '@mui/material/Typography';
import Circle from '@mui/material/CircularProgress';
import React from 'react';
import styled from '@emotion/styled';
import Flex from '@components/Flex';

const StyledFlex = styled(Flex)`
    align-items: center;
    padding: 16px 0;
    justify-content: center;
`;

const Loader = () => {
    return (
        <StyledFlex>
            <Circle />
            <Typography ml={2}>Please Wait</Typography>
        </StyledFlex>
    )
}

export default Loader
