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
  const [statusData, setStatusData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingStatus(false);
          setStatusData(result);
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
                  {!loadingStatus
                    ? (
                      <Bar
                      data={chartExample4["data"]}
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
                      setStatusData([
                        {
                          id: 1,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 2,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 3,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 4,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 5,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 6,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                      ])
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
                      setStatusData([
                        {
                          id: 1,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 2,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 3,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 4,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 5,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 6,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                      ])
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
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th className="text-center">Salary</th>
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
                    <td>Dakota Rice</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                    <td className="text-center">$36,738</td>
                  </tr>
                  <tr>
                    <td>Minerva Hooper</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td className="text-center">$23,789</td>
                  </tr>
                  <tr>
                    <td>Sage Rodriguez</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                    <td className="text-center">$56,142</td>
                  </tr>
                  <tr>
                    <td>Philip Chaney</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td className="text-center">$38,735</td>
                  </tr>
                  <tr>
                    <td>Doris Greene</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                    <td className="text-center">$63,542</td>
                  </tr>
                  <tr>
                    <td>Mason Porter</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                    <td className="text-center">$78,615</td>
                  </tr>
                  <tr>
                    <td>Jon Porter</td>
                    <td>Portugal</td>
                    <td>Gloucester</td>
                    <td className="text-center">$98,615</td>
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
