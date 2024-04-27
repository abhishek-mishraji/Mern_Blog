
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
   


    background: url('https://as1.ftcdn.net/v2/jpg/01/51/58/88/1000_F_151588830_hwfXuWr7NskMHGgOCLwXO8Kycydg0tKX.jpg') center/55% repeat-x #000;

    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Heading = styled(Typography)`
    font-size: 70px;
    color: blue;
    line-height: 1
`;

// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     background: #FFFFFF;
// `;

const Banner = () => {

    return (
        <Image>
            <Heading>Bhakti</Heading>
            {/* <SubHeading>Welcome to pandey Blog</SubHeading> */}
        </Image>
    )
}

export default Banner;