const converted = {
    ".main-timeline": { position: "relative" },
    "#A": {
      padding: "5rem",
      fontSize: "60px",
      fontFamily: "'Poppins', sans-serif",
      textAlign: "center",
      marginBottom: "0"
    },
    h3: { color: "#00ABB3", fontWeight: 500, fontStyle: "inherit" },
    p: {
      padding: "2rem",
      fontSize: "20px",
      fontFamily: "'Montserrat',sans-serif"
    },
    section: { padding: "5rem" },
    ".main-timeline::after": {
      content: '""',
      position: "absolute",
      width: "6px",
      backgroundColor: "#B2B2B2",
      top: "0",
      bottom: "0",
      left: "50%",
      marginLeft: "-3px"
    },
    ".timeline": {
      position: "relative",
      backgroundColor: "inherit",
      borderRadius: "50%",
      width: "50%"
    },
    ".timeline::after": {
      content: '""',
      position: "absolute",
      width: "25px",
      height: "25px",
      right: "-13px",
      backgroundColor: "#3C4048",
      border: "5px solid #00ABB3",
      top: "15px",
      borderRadius: "50%",
      zIndex: 1
    },
    ".left": { padding: "0px 40px 20px 0px", left: "0" },
    ".right": { padding: "0px 0px 20px 40px", left: "50%" },
    ".left::before": {
      content: '" "',
      position: "absolute",
      top: "18px",
      zIndex: 1,
      right: "30px",
      border: "medium solid white",
      borderWidth: "10px 0 10px 10px",
      borderColor: "transparent transparent transparent white"
    },
    ".right::before": {
      content: '" "',
      position: "absolute",
      top: "18px",
      zIndex: 1,
      left: "30px",
      border: "medium solid white",
      borderWidth: "10px 10px 10px 0",
      borderColor: "transparent white transparent transparent"
    },
    ".right::after": { left: "-12px" },
    "@media screen and (max-width: 850px)": {
      ".main-timeline::after": { left: "31px" },
      ".timeline": { width: "100%", paddingLeft: "70px", paddingRight: "25px" },
      ".timeline::before": {
        left: "60px",
        border: "medium solid white",
        borderWidth: "10px 10px 10px 0",
        borderColor: "transparent white transparent transparent"
      },
      ".left::after,\n    .right::after": { left: "18px" },
      ".left::before": { right: "auto" },
      ".right": { left: "0%" }
    },
    ".footer": { backgroundColor: "#00ABB3" },
    "#copyrgt": { textAlign: "center", color: "#3C4048", padding: "10px" }
  }
  