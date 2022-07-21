/*!

=========================================================
* Black Money React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useState} from "react";
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
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const [loadingCollections, setLoadingCollections] = useState(false);
  const [selectedCollectionsChart, setSelectedCollectionsChart] = useState("data1");
  const [collectionsData, setCollectionsData] = useState();

  const [borrowedMonth, setBorrowedMonth] = useState();
  const [borrowedYear, setBorrowedYear] = useState();
  const [mostBorrrowedMonth, setMostBorrrowedMonth] = useState();
  const [mostBorrrowedYear, setMostBorrrowedYear] = useState();




  useEffect(() => {
    fetch("http://localhost:8080/borrowed/borrowed-per-date/month")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setLoadingCollections(false);
          const labels = [];
          const data = [];
          result.forEach( (result) => {
            labels.push(result.date)
            data.push(result.quantity)
          })
          setBorrowedMonth(
            {
              labels: labels,
              datasets: [
                {
                  label: "Something",
                  fill: true,
                  borderColor: "#1f8ef1",
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#1f8ef1",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "#1f8ef1",
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 1,
                  data: data
                }
              ]
            }
          )
        },
        (error) => {
          setLoadingCollections(false);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/borrowed/borrowed-per-date/year")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingCollections(false);
          const labels = [];
          const data = [];
          result.forEach( (result) => {
            labels.push(result.date)
            data.push(result.quantity)
          })
          setBorrowedYear(
            {
              labels: labels,
              datasets: [
                {
                  label: "Something",
                  fill: true,
                  borderColor: "#1f8ef1",
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#1f8ef1",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "#1f8ef1",
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 1,
                  data: data
                }
              ]
            }
          )
        },
        (error) => {
          setLoadingCollections(false);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/collection/most-borrowed/month")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingCollections(false);
          setMostBorrrowedMonth(result);
        },
        (error) => {
          setLoadingCollections(false);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/collection/most-borrowed/year")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingCollections(false);
          setMostBorrrowedYear(result);
        },
        (error) => {
          setLoadingCollections(false);
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
                    <h5 className="card-category">Empréstimos</h5>
                    <CardTitle tag="h2">Número de empréstimos</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data"
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data")}
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
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2"
                        })}
                        onClick={() => setBgChartData("data2")}
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
                  {!loadingCollections && bigChartData==="data2"
                    ? (
                      <Bar
                        data={borrowedYear}
                        options={totalSpendingChart.options}
                      />
                    )
                    : (
                      <Bar
                        data={borrowedMonth}
                        options={totalSpendingChart.options}
                      />
                    )
                  }
                </div>
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
                <CardTitle tag="h4">Coleção com mais emprestimos</CardTitle>
              </CardHeader>
              <Col sm="6">
                <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <Button
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedCollectionsChart === "data1"
                    })}
                    color="info"
                    id="0"
                    size="sm"
                    onClick={() => setSelectedCollectionsChart("data1")}
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
                    id="1"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedCollectionsChart === "data2"
                    })}
                    onClick={() => setSelectedCollectionsChart("data2")}
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
                      <th>Nome da Coleção</th>
                      <th>Descrição</th>
                      <th>Pessoa para Contato</th>
                      <th>Telefone</th>
                      <th>Endereço</th>
                      <th>Data</th>
                      <th className="text-center">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                  { selectedCollectionsChart === 'data1' && mostBorrrowedMonth
                    && mostBorrrowedMonth.map((eachItem) => {
                      let splitDate = eachItem.borrowDate.toString().split("-")

                      return(
                        <tr>
                          <td>{eachItem.name}</td>
                          <td>{eachItem.description}</td>
                          <td>{eachItem.contactPerson}</td>
                          <td>{eachItem.telNumber}</td>
                          <td>{eachItem.address}</td>
                          <td>{splitDate[0] +"/" +splitDate[1]}</td>
                          <td className="text-center">{eachItem.type}</td>
                        </tr>
                      )
                    })
                  }
                  { selectedCollectionsChart === 'data2' && mostBorrrowedYear
                    && mostBorrrowedYear.map((eachItem) => {
                      return(
                        <tr>
                          <td>{eachItem.name}</td>
                          <td>{eachItem.description}</td>
                          <td>{eachItem.contactPerson}</td>
                          <td>{eachItem.telNumber}</td>
                          <td>{eachItem.address}</td>
                          <td>{eachItem.borrowDate.toString().split("-")[0]}</td>
                          <td className="text-center">{eachItem.type}</td>
                        </tr>
                      )
                    })
                  }
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

export default Dashboard;
