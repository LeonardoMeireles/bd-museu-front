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

  const fakeData = {
    dataAnnual: [
      {
        id: 1,
        title: 'Virginia Maria',
        artistName: 'Arriba Donatelo',
        price: 10300,
        date:"16/05/2019"
      },
      {
        id: 13,
        title: 'Happiness',
        artistName: 'John Dofferman',
        price: 1000,
        date:"06/05/2019"
      },
      {
        id: 14,
        title: 'Maze',
        artistName: 'Maria Antonieta',
        price: 50500,
        date:"06/05/2020"
      },
      {
        id: 15,
        title: 'Saint Peter',
        artistName: 'Bonitchelo',
        price: 22500,
        date:"06/05/2020"
      },
      {
        id: 17,
        title: 'Grand Amusement',
        artistName: 'Epicacio D. Antonio',
        price: 20000,
        date:"14/11/2020"
      },
      {
        id: 18,
        title: 'Orgy with the Trans',
        artistName: 'The Killer Mamonas',
        price: 3630,
        date:"06/05/2021"
      },
      {
        id: 19,
        title: 'Saint Peter',
        artistName: 'Bonitchelo',
        price: 3630,
        date:"06/05/2021"
      },
      {
        id: 20,
        title: 'Saint Peter',
        artistName: 'Bonitchelo',
        price: 3630,
        date:"06/05/2022"
      },
      {
        id: 2,
        title: 'Operários',
        artistName: 'Tarsila do Amaral',
        price: 600,
        date:"19/01/2022"
      },
      {
        id: 3,
        title: 'Blue in Rio',
        artistName: 'Pixarlo',
        price: 520,
        date:"20/01/2022"
      },
      {
        id: 4,
        title: 'Canva and Cry',
        artistName: 'Eduardo Pinoquio',
        price: 2420,
        date:"12/02/2022"
      },
      {
        id: 5,
        title: 'Mama sua',
        artistName: 'Frederique D\'Art',
        price: 700,
        date:"09/03/2022"
      },
      {
        id: 6,
        title: 'Mada Star',
        artistName: 'Bonitchelo Guapo',
        price: 900,
        date:"17/04/2022"
      },
      {
        id: 7,
        title: 'Modus Operandis',
        artistName: 'Jorge de Souza',
        price: 750,
        date:"02/05/2022"
      },
      {
        id: 8,
        title: 'Maria em Braços',
        artistName: 'Santo Antonio',
        price: 450,
        date:"15/05/2022"
      },
      {
        id: 9,
        title: 'Santo Demonio',
        artistName: 'Chaves Companhia',
        price: 2200,
        date:"29/06/2022"
      },
      {
        id: 10,
        title: 'Vivendo Adoidado',
        artistName: 'Feris Bouler',
        price: 1014,
        date:"12/07/2022"
      },
      {
        id: 11,
        title: 'In your arms only',
        artistName: 'Eduran Sheran',
        price: 1110,
        date:"22/07/2022"
      },
      {
        id: 12,
        title: 'Saint Peter',
        artistName: 'Bonitchelo',
        price: 3630,
        date:"06/05/2022"
      },
    ],
    dataMonth: [
        {
          id: 2,
          title: 'Operários',
          artistName: 'Tarsila do Amaral',
          price: 600,
          date:"19/01/2022"
        },
        {
          id: 3,
          title: 'Blue in Rio',
          artistName: 'Pixarlo',
          price: 520,
          date:"20/01/2022"
        },
        {
          id: 4,
          title: 'Canva and Cry',
          artistName: 'Eduardo Pinoquio',
          price: 2420,
          date:"12/02/2022"
        },
        {
          id: 5,
          title: 'Mama sua',
          artistName: 'Frederique D\'Art',
          price: 700,
          date:"09/03/2022"
        },
        {
          id: 6,
          title: 'Mada Star',
          artistName: 'Bonitchelo Guapo',
          price: 900,
          date:"17/04/2022"
        },
        {
          id: 7,
          title: 'Modus Operandis',
          artistName: 'Jorge de Souza',
          price: 750,
          date:"02/05/2022"
        },
        {
          id: 8,
          title: 'Maria em Braços',
          artistName: 'Santo Antonio',
          price: 450,
          date:"15/05/2022"
        },
        {
          id: 9,
          title: 'Santo Demonio',
          artistName: 'Chaves Companhia',
          price: 2200,
          date:"29/06/2022"
        },
        {
          id: 10,
          title: 'Vivendo Adoidado',
          artistName: 'Feris Bouler',
          price: 1014,
          date:"12/07/2022"
        },
        {
          id: 11,
          title: 'In your arms only',
          artistName: 'Eduran Sheran',
          price: 1110,
          date:"22/07/2022"
        },
        {
          id: 12,
          title: 'Saint Peter',
          artistName: 'Bonitchelo',
          price: 3630,
          date:"06/05/2022"
        },
    ]
  }

  const [loadingSpending, setLoadingSpending] = useState(true);
  const [selectedSpendingChart, setSelectedSpendingChart] = useState("annual");
  const [spendingAnnualGraph, setSpendingDataGraph] = useState();
  const [spendingMonthlyGraph, setSpendingMonthlyDataGraph] = useState();


  const [loadingBought, setLoadingBought] = useState(false);
  const [selectedBoughtChart, setSelectedBoughtChart] = useState("monthlyBoughtArt");
  const [artBoughtData, setArtBoughtData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/permanent-collection/spent-per-date/year", {
      method: "GET",
      mode: "cors",
    })
      .then(res => res.json())
      .then(
        async (result) => {
          const labels = [];
          const data = [];
          result.forEach( (result) => {
            labels.push(result.date)
            data.push(result.quantity)
          })
          setSpendingDataGraph({
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
                  pointRadius: 4,
                  data: data
                }
              ]
            }
          );
          setLoadingSpending(false);
        },
        (error) => {
          setLoadingSpending(false);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/permanent-collection/spent-per-date/month", {
      method: "GET",
      mode: "cors",
    })
      .then(res => res.json())
      .then(
        async (result) => {
          const labels = [];
          const data = [];
          result.forEach( (result) => {
            labels.push(result.date)
            data.push(result.quantity)
          })
          setSpendingMonthlyDataGraph({
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
          );
          setLoadingSpending(false);
        },
        (error) => {
          setLoadingSpending(false);
          console.log(error);
        }
      )
  }, [])


  useEffect(() => {
    fetch("http://localhost:8080/permanent-collection/objects")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setLoadingBought(false);
          setArtBoughtData(result);
        },
        (error) => {
          setLoadingSpending(false);
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
                          active: selectedSpendingChart === "monthly"
                        })}
                        color="info"
                        id="monthlySpent"
                        size="sm"
                        onClick={() => setSelectedSpendingChart("monthly")}
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
                          active: selectedSpendingChart === "annual"
                        })}
                        onClick={() => setSelectedSpendingChart("annual")}
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
                  {!loadingSpending && selectedSpendingChart==="annual"
                    ? (
                      <Line
                        data={spendingAnnualGraph}
                        options={totalSpendingChart.options}
                      />
                    )
                    : (
                      <Line
                        data={spendingMonthlyGraph}
                        options={totalSpendingChart.options}
                      />
                    )
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
                      setArtBoughtData("dataMonth")
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
                      setArtBoughtData("dataAnnual")
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
                    <th>Titulo da Obra</th>
                    <th>Nome do Artista</th>
                    <th>Preço</th>
                    <th className="text-center">Date</th>

                  </tr>
                  </thead>
                  <tbody>
                  { artBoughtData
                    ? artBoughtData.map((eachItem) => {
                      return(
                        <tr>
                          <td>{eachItem.title}</td>
                          <td>{eachItem.artistName}</td>
                          <td className="text-center">${eachItem.price}</td>
                          <td>{eachItem.date}</td>
                        </tr>
                      )
                    })
                    : null}
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
