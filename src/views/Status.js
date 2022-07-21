import {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  totalSpendingChart,
  artBoughtChart,
  chartExample3,
  chartExample4
} from "variables/charts.js";



function All(props) {

  const [loadingStatus, setLoadingStatus] = useState(false);
  const [selectedStatusChart, setSelectedStatusChart] = useState("data4");
  const [permanentData, setPermanentData] = useState();
  const [borrowedData, setBorrowedData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/borrowed/objects")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingStatus(false);
          setBorrowedData(result);
        },
        (error) => {
          setLoadingStatus(false);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/permanent-collection/objects")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingStatus(false);
          setPermanentData(result);
        },
        (error) => {
          setLoadingStatus(false);
          console.log(error);
        }
      )
  }, [])

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Todos Objetos de Arte</h5>
                    <CardTitle tag="h2">Status</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {!loadingStatus && permanentData && borrowedData
                    ? (
                      <Bar
                      data={
                        {
                          labels: ["Emprestados", "Permanentes"],
                          datasets: [
                            {
                              label: "Número de Objetos de Arte",
                              fill: true,
                              borderColor: "#00d6b4",
                              borderWidth: 2,
                              borderDash: [],
                              borderDashOffset: 0.0,
                              pointBackgroundColor: "#00d6b4",
                              pointBorderColor: "rgba(255,255,255,0)",
                              pointHoverBackgroundColor: "#00d6b4",
                              pointBorderWidth: 20,
                              pointHoverRadius: 4,
                              pointHoverBorderWidth: 15,
                              pointRadius: 4,
                              data: [borrowedData.length, permanentData.length]
                            }
                          ]
                        }
                      }
                      options={totalSpendingChart.options}
                      />
                    )
                    : (<h1>Loading...</h1>)
                  }
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Divisão por status</CardTitle>
              </CardHeader>
              <Col sm="6">
                <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <Button
                    color="info"
                    id="data4"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: setSelectedStatusChart === "data4"
                    })}
                    onClick={() => {

                      setSelectedStatusChart("data4")
                    }}
                  >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Emprestado
                        </span>
                    <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                  </Button>
                  <Button
                    color="info"
                    id="data5"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: setSelectedStatusChart === "data5"
                    })}
                    onClick={() => {
                      setSelectedStatusChart("data5")
                    }}
                  >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Permanentes
                        </span>
                    <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                  </Button>
                </ButtonGroup>
              </Col>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {/*{ artBoughtChart[selectedBoughtChart]*/}
                  {/*  ? artBoughtChart[selectedBoughtChart].map((eachItem) => {*/}
                  {/*    return(*/}
                  {/*      <tr>*/}
                  {/*        <td>{eachItem.name}</td>*/}
                  {/*        <td>{eachItem.country}</td>*/}
                  {/*        <td>{eachItem.city}</td>*/}
                  {/*        <td className="text-center">${eachItem.price}</td>*/}
                  {/*      </tr>*/}
                  {/*    )*/}
                  {/*  })*/}
                  {/*  : null}*/}
                  <tr>
                    <td>Operarios</td>
                    <td>Emprestado</td>
                  </tr>
                  <tr>
                    <td>Minerva Hooper</td>
                    <td>Emprestado</td>
                  </tr>
                  <tr>
                    <td>Sage Rodriguez</td>
                    <td>Próprio</td>
                  </tr>
                  <tr>
                    <td>Philip Chaney</td>
                    <td>Próprio</td>
                  </tr>
                  <tr>
                    <td>Doris Greene</td>
                    <td>Emprestado</td>
                  </tr>
                  <tr>
                    <td>Mason Porter</td>
                    <td>Emprestado</td>
                  </tr>
                  <tr>
                    <td>Jon Porter</td>
                    <td>Próprio</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default All;
