const mainTimeline = {
 position: "relative",

 }

 #A
 {
 padding: "5rem",
 fontSize: "60px",
 fontFamily: "'Poppins', sans-serif",
 textAlign: "center",
 marginBottom: "0",
 }

 h3
 {
 color: "#00ABB3",
 fontWeight: "500",
 fontStyle: "inherit",
 }

 p
 {
 padding: "2rem",
 fontSize: "20px",
 fontFamily: "'Montserrat',sans-serif",
 }

 section
 {
 padding: "5rem",
 }

 /* The actual timeline (the vertical ruler) */
 const mainTimeline::after = {
 content: """",
 position: "absolute",
 width: "6px",
 backgroundColor: "#B2B2B2",
 top: "0",
 bottom: "0",
 left: "50%",
 marginLeft: "-3px",
 }

 /* Container around content */
 const timeline = {
 position: "relative",
 backgroundColor: "inherit",
 borderRadius: "50%",
 width: "50%",
 }

 /* The circles on the timeline */
 const timeline::after = {
 content: """",
 position: "absolute",
 width: "25px",
 height: "25px",
 right: "-13px",
 backgroundColor: "#3C4048",
 border: "5px solid #00ABB3",
 top: "15px",
 borderRadius: "50%",
 zIndex: "1",
 }

 /* Place the container to the left */
 const left = {
 padding: "0px 40px 20px 0px",
 left: "0",
 }

 /* Place the container to the right */
 const right = {
 padding: "0px 0px 20px 40px",
 left: "50%",
 }

 /* Add arrows to the left container (pointing right) */
 const left::before = {
 content: "" "",
 position: "absolute",
 top: "18px",
 zIndex: "1",
 right: "30px",
 border: "medium solid white",
 borderWidth: "10px 0 10px 10px",
 borderColor: "transparent transparent transparent white",
 }

 /* Add arrows to the right container (pointing left) */
 const right::before = {
 content: "" "",
 position: "absolute",
 top: "18px",
 zIndex: "1",
 left: "30px",
 border: "medium solid white",
 borderWidth: "10px 10px 10px 0",
 borderColor: "transparent white transparent transparent",
 }

 /* Fix the circle for containers on the right side */
 const right::after = {
 left: "-12px",
 }

 /* Media queries - Responsive timeline on screens less than 600px wide */
 @media screen and (maxWidth: 850px) {
 /* Place the timelime to the left */
 const mainTimeline::after = {
 left: "31px",
 }

 /* Full-width containers */
 const timeline = {
 width: "100%",
 paddingLeft: "70px",
 paddingRight: "25px",
 }

 /* Make sure that all arrows are pointing leftwards */
 const timeline::before = {
 left: "60px",
 border: "medium solid white",
 borderWidth: "10px 10px 10px 0",
 borderColor: "transparent white transparent transparent",
 }

 /* Make sure all circles are at the same spot */
 .left::after,
 const right::after = {
 left: "18px",
 }

 const left::before = {
 right: "auto",
 }

 /* Make all right containers behave like the left ones */
 const right = {
 left: "0%",
 }
 }

 .footer
{

 backgroundColor: "#00ABB3",


}

#copyrgt
{
 textAlign: "center",
 color: "#3C4048",
 padding: "10px",
}
