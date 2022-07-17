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

  const [loadingSpending, setLoadingSpending] = useState(false);
  const [selectedSpendingChart, setSelectedSpendingChart] = useState("totalSpendingMonthly");
  const [spendingData, setSpendingData] = useState();

  const [loadingBought, setLoadingBought] = useState(false);
  const [selectedBoughtChart, setSelectedBoughtChart] = useState("monthlyBoughtArt");
  const [artBoughtData, setArtBoughtData] = useState();

  const [loadingArtObjects, setLoadingArtObjects] = useState(false);
  const [selectedArtObjectsChart, setSelectedArtObjectsChart] = useState("");
  const [artObjectsData, setArtObjectsData] = useState();

  const [loadingStatus, setLoadingStatus] = useState(false);
  const [selectedStatusChart, setSelectedStatusChart] = useState("");
  const [statusData, setStatusData] = useState();

  // useEffect(() => {
  //   fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setLoadingSpending(false);
  //         setSpendingData({
  //           labels: [...result.labels],
  //           datasets: [
  //             {
  //               label: "My First dataset",
  //               fill: true,
  //               backgroundColor: gradientStroke,
  //               borderColor: "#1f8ef1",
  //               borderWidth: 2,
  //               borderDash: [],
  //               borderDashOffset: 0.0,
  //               pointBackgroundColor: "#1f8ef1",
  //               pointBorderColor: "rgba(255,255,255,0)",
  //               pointHoverBackgroundColor: "#1f8ef1",
  //               pointBorderWidth: 20,
  //               pointHoverRadius: 4,
  //               pointHoverBorderWidth: 15,
  //               pointRadius: 4,
  //               data: [...result.data]
  //             }
  //           ]
  //         });
  //       },
  //       (error) => {
  //         setLoadingSpending(false);
  //         console.log(error);
  //       }
  //     )
  // }, [])

  // useEffect(() => {
  //   fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setLoadingBought(false);
  //         setArtBoughtData(result);
  //       },
  //       (error) => {
  //         setLoadingSpending(false);
  //         console.log(error);
  //       }
  //     )
  // }, [])

  // useEffect(() => {
  //   fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setLoadingArtObjects(false);
  //         setArtObjectsData(result);
  //       },
  //       (error) => {
  //         setLoadingSpending(false);
  //         console.log(error);
  //       }
  //     )
  // }, [])

  // useEffect(() => {
  //   fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setLoadingStatus(false);
  //         setStatusData(result);
  //       },
  //       (error) => {
  //         setLoadingSpending(false);
  //         console.log(error);
  //       }
  //     )
  // }, [])

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
                    <CardTitle tag="h2">Total Gasto</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: selectedSpendingChart === "totalSpendingMonthly"
                        })}
                        color="info"
                        id="monthlySpent"
                        size="sm"
                        onClick={() => setSelectedSpendingChart("totalSpendingMonthly")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Mensal
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="annualSpent"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: selectedSpendingChart === "totalSpendingAnnual"
                        })}
                        onClick={() => setSelectedSpendingChart("totalSpendingAnnual")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Anual
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {!loadingSpending
                    ? (
                      <Line
                      data={totalSpendingChart[selectedSpendingChart]}
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
                <CardTitle tag="h4">Compras de Objetos</CardTitle>
              </CardHeader>
              <Col sm="6">
                <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <Button
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedBoughtChart === "monthlyBoughtArt"
                    })}
                    color="info"
                    id="boughtMonthly"
                    size="sm"
                    onClick={() => setSelectedBoughtChart("monthlyBoughtArt")}
                  >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Mensal
                        </span>
                    <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                  </Button>
                  <Button
                    color="info"
                    id="boughtAnnual"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedBoughtChart === "annualBoughtArt"
                    })}
                    onClick={() => setSelectedBoughtChart("annualBoughtArt")}
                  >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Anual
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
        {/*<Row>*/}
        {/*  <Col lg="4">*/}
        {/*    <Card className="card-chart">*/}
        {/*      <CardHeader>*/}
        {/*        <h5 className="card-category">Total Shipments</h5>*/}
        {/*        <CardTitle tag="h3">*/}
        {/*          <i className="tim-icons icon-bell-55 text-info" /> 763,215*/}
        {/*        </CardTitle>*/}
        {/*      </CardHeader>*/}
        {/*      <CardBody>*/}
        {/*        <div className="chart-area">*/}
        {/*          <Line*/}
        {/*            data={chartExample2.data}*/}
        {/*            options={chartExample2.options}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </CardBody>*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*  <Col lg="4">*/}
        {/*    <Card className="card-chart">*/}
        {/*      <CardHeader>*/}
        {/*        <h5 className="card-category">Daily Sales</h5>*/}
        {/*        <CardTitle tag="h3">*/}
        {/*          <i className="tim-icons icon-delivery-fast text-primary" />{" "}*/}
        {/*          3,500€*/}
        {/*        </CardTitle>*/}
        {/*      </CardHeader>*/}
        {/*      <CardBody>*/}
        {/*        <div className="chart-area">*/}
        {/*          <Bar*/}
        {/*            data={chartExample3.data}*/}
        {/*            options={chartExample3.options}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </CardBody>*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*  <Col lg="4">*/}
        {/*    <Card className="card-chart">*/}
        {/*      <CardHeader>*/}
        {/*        <h5 className="card-category">Completed Tasks</h5>*/}
        {/*        <CardTitle tag="h3">*/}
        {/*          <i className="tim-icons icon-send text-success" /> 12,100K*/}
        {/*        </CardTitle>*/}
        {/*      </CardHeader>*/}
        {/*      <CardBody>*/}
        {/*        <div className="chart-area">*/}
        {/*          <Line*/}
        {/*            data={chartExample4.data}*/}
        {/*            options={chartExample4.options}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      </CardBody>*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Tipos de Objetos de Arte</CardTitle>
              </CardHeader>
              <Col sm="6">
                <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <Button
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedArtObjectsChart === "data1"
                    })}
                    color="info"
                    id="0"
                    size="sm"
                    onClick={() => setSelectedArtObjectsChart("data1")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Pintura
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-single-02" />
                    </span>
                  </Button>
                  <Button
                    color="info"
                    id="1"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedArtObjectsChart === "data2"
                    })}
                    onClick={() => setSelectedArtObjectsChart("data2")}
                  >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Escultura
                        </span>
                    <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                  </Button>
                  <Button
                    color="info"
                    id="1"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedArtObjectsChart === "data3"
                    })}
                    onClick={() => setSelectedArtObjectsChart("data3")}
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Outros
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
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedStatusChart === "data1"
                    })}
                    color="info"
                    id="0"
                    size="sm"
                    onClick={() => setSelectedStatusChart("data1")}
                  >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Emprestados
                        </span>
                    <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                  </Button>
                  <Button
                    color="info"
                    id="1"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedStatusChart === "data2"
                    })}
                    onClick={() => setSelectedStatusChart("data2")}
                  >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Permanente
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
