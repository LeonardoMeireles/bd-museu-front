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

  useEffect(() => {
    fetch("http://localhost:8080/art-object")
      .then(res => res.json())
      .then(
        (result) => {
          setLoadingArtObjects(false);
          setArtObjectsData(result);
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
                  {!loadingArtObjects
                    ? (
                      <Bar
                      data={chartExample3["artObjects"]}
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
                      setArtObjectsData([
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
                      setArtObjectsData([
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
                  <thead className="text-primary">
                  <tr>
                    <th>Id</th>
                    <th>Year</th>
                    <th>Origin</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Period</th>
                    <th>Artist Name</th>
                    <th className="text-center">Salary</th>
                  </tr>
                  </thead>
                  <tbody>
                  { artObjectsData
                    ? artObjectsData.map((eachItem) => {
                      return(
                        <tr>
                          <td>{eachItem.name}</td>
                          <td>{eachItem.country}</td>
                          <td>{eachItem.city}</td>
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default All;
