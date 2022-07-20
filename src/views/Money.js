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



function Money(props) {

  const [loadingSpending, setLoadingSpending] = useState(false);
  const [selectedSpendingChart, setSelectedSpendingChart] = useState("totalSpendingMonthly");
  const [spendingData, setSpendingData] = useState([]);

  const [loadingBought, setLoadingBought] = useState(false);
  const [selectedBoughtChart, setSelectedBoughtChart] = useState("monthlyBoughtArt");
  const [artBoughtData, setArtBoughtData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/items")
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
          <Col >
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
                    onClick={() => {
                      setArtBoughtData([
                        {
                          id: 2,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 1200
                        },
                        {
                          id: 3,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 2420
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
                        {
                          id: 7,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 8,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 9,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 10,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 11,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 12,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                      ])
                      setSelectedBoughtChart("monthlyBoughtArt")
                    }}
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
                    onClick={() => {
                      setArtBoughtData([
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
                        {
                          id: 7,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 8,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 9,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 10,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 11,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 12,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 13,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 14,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 15,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                        {
                          id: 16,
                          title: 'Operários',
                          artistName: 'Tarsila do Amaral',
                          price: 50200
                        },
                      ])
                      setSelectedBoughtChart("annualBoughtArt")
                    }}
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
                <div className={"divMeu"}>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                    <th>Id</th>
                    <th>Titulo da Obra</th>
                    <th>Nome do Artista</th>
                    <th className="text-center">Preço</th>
                  </tr>
                  </thead>
                  <tbody>
                  { artBoughtData
                    ? artBoughtData.map((eachItem) => {
                      return(
                        <tr>
                          <td>{eachItem.id}</td>
                          <td>{eachItem.title}</td>
                          <td>{eachItem.artistName}</td>
                          <td className="text-center">${eachItem.price}</td>
                        </tr>
                      )
                    })
                    : null}
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
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Money;
