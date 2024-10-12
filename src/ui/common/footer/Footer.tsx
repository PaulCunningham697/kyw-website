import { Box, Grid2, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Grid2
      component="footer"
      display="flex"
      id={"footer"}
      data-testid={"footer"}
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={10}
      paddingRight={5}
      gap={2}
      sx={{
        py: 2,
        width: "100%",
        position: "relative",
        bottom: 0,
        left: 0,
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 40,
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright © {new Date().getFullYear()} Knockadoon Youth Week. All
        rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {/*<Link*/}
        {/*  to={isLoggedIn ? "/privacy-policy" : "/legal/privacy-policy"}*/}
        {/*  id={"privacy-policy-link"}*/}
        {/*  data-testid={"privacy-policy-link"}*/}
        {/*>*/}
        {/*  {t("footer.privacyPolicy")}*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  to={*/}
        {/*    isLoggedIn ? "/terms-and-conditions" : "/legal/terms-and-conditions"*/}
        {/*  }*/}
        {/*  id={"terms-and-conditions-link"}*/}
        {/*  data-testid={"terms-and-conditions-link"}*/}
        {/*>*/}
        {/*  {t("footer.termsAndConditions")}*/}
        {/*</Link>*/}
        {/*<Link to={"/help"} id={"help-link"} data-testid={"help-link"}>*/}
        {/*  {t("footer.help")}*/}
        {/*</Link>*/}
      </Box>
    </Grid2>
  );
}
