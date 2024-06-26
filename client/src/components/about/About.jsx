
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, YouTube } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
    
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
    color: blue;
    background: pink;
`;

const Text = styled(Typography)`

    color: blue;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">I  am Vivek Pandey</Typography>
                <Text variant="h5">I'm a Software Engineer based in India.
                    I made A blog by my Interenst<br />
                    If you are interested, you can view some of my favorite Blogs here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.youtube.com/@VivekPandeyVlogss" color="inherit" target="_blank"><YouTube /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>
                    or send me an Email
                    <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;