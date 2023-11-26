import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


export default function Footer() {
  const text =
    "Henüz yolda iken size uygun dönüş yüklerinden haberdar olabilirsiniz. Aracınıza uygun yüklere teklif verebilirsiniz.Yükleme noktasına navigasyon desteği alabilirsiniz.Hiçbir komisyon ücreti ödemeden yükü alabilirsiniz.";
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const split = (text) =>
    text
      .split(".")
      .map((p) => (
        <Typography variant="body2" color="text.secondary">{`${capitalize(p)}.`}</Typography>
      ));

  return (

    <div>

      <Box
        sx={{
          py: 2,
          display: { xs: 'block', sm: 'flex' },
          alignItems: { sm: 'center' },
          justifyContent: { sm: 'space-between' },
          backgroundColor: "rgb(7 99 177 )"
        }}
      >
        <Typography color="text.secondary" variant="body2" style={{color:"#edf5f3",marginLeft:"10px"}}>
          Copyright  {new Date().getFullYear()}   ÇAK Yazılım LTD. ŞTi
        </Typography>
        <Box sx={{ py: { xs: 2, sm: 0 } }}>

          <Stack spacing={2} direction="row" sx={{textAlign:"center"}}>
            <p style={{fontWeight:"bold",fontFamily:"auto",color:"#edf5f3"}} >
             Bize Ulaşın!
            </p>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              // href="https://github.com/mui"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <CallIcon fontSize="medium" sx={{color:"white"}} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              //href="https://github.com/mui"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <EmailIcon fontSize="medium" sx={{color:"white"}} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mui"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <GitHubIcon fontSize="medium" sx={{color:"white"}} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/MUI_hq"
              aria-label="twitter"
              title="Twitter"
              size="medium"
            >
              <TwitterIcon fontSize="medium" sx={{color:"white"}} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/mui/"
              aria-label="linkedin"
              title="LinkedIn"
              size="medium"
            >
              <LinkedInIcon fontSize="medium" sx={{color:"white"}} />
            </IconButton>

          </Stack>

        </Box>
      </Box>
    </div>
    /* 
         <Container sx={{ backgroundColor: "#8d6e635e" }} maxWidth={'xxl'}>
          <div style={{ width: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', py: 4, }}>
              <Box>
    
               
    
              </Box>
    
              <Box>
                
    
              </Box>
              <Box>
               
              </Box>
    
            </Box>
          </div>
          <Divider />
          <Box
            sx={{
              py: 4,
              display: { xs: 'block', sm: 'flex' },
              alignItems: { sm: 'center' },
              justifyContent: { sm: 'space-between' },
            }}
          >
            <Typography color="text.secondary" variant="body2">
              Copyright © {new Date().getFullYear()} Material UI SAS.
            </Typography>
            <Box sx={{ py: { xs: 2, sm: 0 } }}>
              <Stack spacing={2} direction="row">
                <IconButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mui"
                  aria-label="github"
                  title="GitHub"
                  size="medium"
                >
                  <GitHubIcon fontSize="medium" color="secondary" />
                </IconButton>
    
                <IconButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/MUI_hq"
                  aria-label="twitter"
                  title="Twitter"
                  size="medium"
                >
                  <TwitterIcon fontSize="medium" color="secondary" />
                </IconButton>
                <IconButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/mui/"
                  aria-label="linkedin"
                  title="LinkedIn"
                  size="medium"
                >
                  <LinkedInIcon fontSize="medium" color="secondary" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Container>  */

  );
}