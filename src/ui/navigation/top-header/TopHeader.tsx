import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Link,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function TopHeader() {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        borderBottom: 1,
        backgroundColor: "#fff",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <PhoneIcon sx={{ mr: 1 }} />
          <Link href="tel:+353852800343" underline="hover">
            085 280 0343
          </Link>
          <Box mx={2} display="flex" alignItems="center">
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2" color="textSecondary">
              <Link href="mailto:info@knockdoonyouthweek.com" underline="hover">
                info@knockdoonyouthweek.com
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton
            target={"_blank"}
            color="inherit"
            href="https://www.facebook.com/KnockadoonYouthWeek/"
            aria-label="facebook"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            target={"_blank"}
            color="inherit"
            href="https://www.youtube.com/user/Knockadoonyouthweek"
            aria-label="youtube"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            target={"_blank"}
            color="inherit"
            href="https://www.instagram.com/knockadoonyouthweek/"
            aria-label="instagram"
          >
            <InstagramIcon />
          </IconButton>
          {/*<IconButton*/}
          {/*  target={"_blank"}*/}
          {/*  color="inherit"*/}
          {/*  href="https://www.tiktok.com/@knockadoonyouthweek"*/}
          {/*  aria-label="tiktok"*/}
          {/*>*/}
          {/*  <TikTokIcon />*/}
          {/*</IconButton>*/}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
