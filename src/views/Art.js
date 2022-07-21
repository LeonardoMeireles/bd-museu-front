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

  const [loadingArtObjects, setLoadingArtObjects] = useState(false);
  const [selectedArtObjectsChart, setSelectedArtObjectsChart] = useState("data1");

  const [artObjectsData, setArtObjectsData] = useState();
  const [paintingData, setPaintingData] = useState();
  const [sculptureData, setSculptureData] = useState();
  const [othersData, setOthersData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/painting")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingArtObjects(false);
          setPaintingData(result);
        },
        (error) => {
          setLoadingArtObjects(false);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/sculpture")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setLoadingArtObjects(false);
          setSculptureData(result);
        },
        (error) => {
          setLoadingArtObjects(false);
          console.log(error);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/other")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setLoadingArtObjects(false);
          setOthersData(result);
        },
        (error) => {
          setLoadingArtObjects(false);
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
                    <CardTitle tag="h2">Tipos de Objetos</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {!loadingArtObjects && paintingData && othersData && sculptureData
                    ? (
                      <Bar
                      data={
                        {
                          labels: ["Pintura", "Escultura", "Outros"],
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
                              data: [paintingData.length, sculptureData.length, othersData.length]
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
                    id="art-data1"
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
                    id="art-data2"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                      active: selectedArtObjectsChart === "data2"
                    })}
                    onClick={() => {
                      setArtObjectsData([])
                      setSelectedArtObjectsChart("data2")
                    }}
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
                    onClick={() => {
                      setArtObjectsData([])
                      setSelectedArtObjectsChart("data3")
                    }}
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
                <Table className="tablesorter" responsive hover>
                  { selectedArtObjectsChart === "data1" && (
                  <thead className="text-primary">
                    <tr>
                      <th>ID</th>
                      <th>Altura</th>
                      <th>material</th>
                      <th>Estilo</th>
                    </tr>
                  </thead>
                  )}
                  { selectedArtObjectsChart === "data2" && (
                    <thead className="text-primary">
                    <tr>
                    <th>ID</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Material</th>
                    <th>Estilo</th>
                    </tr>
                    </thead>
                    )}
                  { selectedArtObjectsChart === "data3" && (
                    <thead className="text-primary">
                    <tr>
                    <th>ID</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Material</th>
                    <th>Estilo</th>
                    </tr>
                    </thead>
                    )
                  }
                  <tbody>
                  { selectedArtObjectsChart === "data1" && paintingData
                    && paintingData.map((eachItem) => {
                      return(
                        <tr>
                          <td>{eachItem.id}</td>
                          <td>{eachItem.paint}</td>
                          <td>{eachItem.style}</td>
                          <td>{eachItem.support} KG</td>
                        </tr>
                      )
                    })
                  }
                  { selectedArtObjectsChart === "data2" && sculptureData
                    && sculptureData.map((eachItem) => {
                    return(
                    <tr>
                    <td>{eachItem.id}</td>
                    <td>{eachItem.height}</td>
                    <td>{eachItem.weight}KG</td>
                    <td>{eachItem.material}</td>
                      <td>{eachItem.style}</td>

                    </tr>
                    )
                  })
                  }
                  { selectedArtObjectsChart === "data3" && othersData
                    && othersData.map((eachItem) => {
                    return(
                    <tr>
                    <td>{eachItem.id}</td>
                      <td>{eachItem.height}</td>
                      <td>{eachItem.weight}KG</td>
                      <td>{eachItem.material}</td>
                      <td>{eachItem.style}</td>
                    </tr>
                    )
                  })
                  }
                  {/*<tr>*/}
                  {/*  <td>01</td>*/}
                  {/*  <td>1517</td>*/}
                  {/*  <td>Manaus</td>*/}
                  {/*  <td>Saint Peter</td>*/}
                  {/*  <td>Uma arte mais do que...</td>*/}
                  {/*  <td>Renascentista</td>*/}
                  {/*  <td>Donatelo</td>*/}
                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*  <td>01</td>*/}
                  {/*  <td>1517</td>*/}
                  {/*  <td>Manaus</td>*/}
                  {/*  <td>Saint Peter</td>*/}
                  {/*  <td>Uma arte mais do que...</td>*/}
                  {/*  <td>Renascentista</td>*/}
                  {/*  <td>Donatelo</td>*/}
                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*  <td>01</td>*/}
                  {/*  <td>1517</td>*/}
                  {/*  <td>Manaus</td>*/}
                  {/*  <td>Saint Peter</td>*/}
                  {/*  <td>Uma arte mais do que...</td>*/}
                  {/*  <td>Renascentista</td>*/}
                  {/*  <td>Donatelo</td>*/}
                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*<td>01</td>*/}
                  {/*<td>1517</td>*/}
                  {/*<td>Manaus</td>*/}
                  {/*<td>Saint Peter</td>*/}
                  {/*<td>Uma arte mais do que...</td>*/}
                  {/*<td>Renascentista</td>*/}
                  {/*<td>Donatelo</td>*/}
                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*  <td>01</td>*/}
                  {/*  <td>1517</td>*/}
                  {/*  <td>Manaus</td>*/}
                  {/*  <td>Saint Peter</td>*/}
                  {/*  <td>Uma arte mais do que...</td>*/}
                  {/*  <td>Renascentista</td>*/}
                  {/*  <td>Donatelo</td>*/}
                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*  <td>01</td>*/}
                  {/*  <td>1517</td>*/}
                  {/*  <td>Manaus</td>*/}
                  {/*  <td>Saint Peter</td>*/}
                  {/*  <td>Uma arte mais do que...</td>*/}
                  {/*  <td>Renascentista</td>*/}
                  {/*  <td>Donatelo</td>*/}
                  {/*</tr>*/}
                  {/*<tr>*/}
                  {/*  <td>01</td>*/}
                  {/*  <td>1517</td>*/}
                  {/*  <td>Manaus</td>*/}
                  {/*  <td>Saint Peter</td>*/}
                  {/*  <td>Uma arte mais do que...</td>*/}
                  {/*  <td>Renascentista</td>*/}
                  {/*  <td>Donatelo</td>*/}
                  {/*</tr>*/}
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
