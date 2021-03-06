import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Table from "./Table/Table.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    fontWeight: "3000",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="info">
            <h4 className={classes.cardTitleWhite}>
Classement            </h4>

          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={["Rank", "Name", "Email", "Score", "CV"]}
              tableData={[
                ["1", "Hsan Megdiche", "Hsan.megdiche@ensi-uma.tn", "87", <a href='/somefile.txt' download>CV.pdf</a>
              ],
                ["2", "Sami Ellouze", "sami.ellouze@ensi-uma.tn", "69",  <a href='/somefile.txt' download>CV.pdf</a>],
                ["3", "Mahdi Trabelsi", "mahdi.trabelsi@ensi-uma.tn", "45",  <a href='/somefile.txt' download>CV.pdf</a>],
                
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
