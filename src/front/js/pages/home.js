import React, { useContext } from "react";
import { Table, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
				<nav>
					<div className="nav nav-tabs d-flex justify-content-center bg-white" id="nav-tab" role="tablist">
						<button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
							role="tab" aria-controls="nav-home" aria-selected="true">
							<i class="fa-solid fa-user fa-2x"></i>
						</button>
						<button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button"
							role="tab" aria-controls="nav-profile" aria-selected="false">
							<i class="fa-solid fa-file-invoice-dollar fa-2x"></i>
						</button>
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
						<Table>
							<thead>
								<tr>
								<th>
									#
								</th>
								<th>
									Nombre
								</th>
								<th>
									Apellido
								</th>
								<th>
									Usuario
								</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<th scope="row">
									1
								</th>
								<td>
									Mark
								</td>
								<td>
									Otto
								</td>
								<td>
									@mdo
								</td>
								</tr>
								<tr>
								<th scope="row">
									2
								</th>
								<td>
									Jacob
								</td>
								<td>
									Thornton
								</td>
								<td>
									@fat
								</td>
								</tr>
								<tr>
								<th scope="row">
									3
								</th>
								<td>
									Larry
								</td>
								<td>
									the Bird
								</td>
								<td>
									@tbir
								</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
						<CardGroup>
							<Card>
								<CardImg
								alt="Card image cap"
								src="https://picsum.photos/318/180"
								top
								width="100%"
								/>
								<CardBody>
								<CardTitle tag="h5">
									Nombre de factura
								</CardTitle>
								<CardSubtitle
									className="mb-2 text-muted"
									tag="h6"
								>
									#...
								</CardSubtitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
								</CardText>
								<Button>
									Descargar
								</Button>
								</CardBody>
							</Card>
							<Card>
								<CardImg
								alt="Card image cap"
								src="https://picsum.photos/318/180"
								top
								width="100%"
								/>
								<CardBody>
								<CardTitle tag="h5">
									Nombre de factura
								</CardTitle>
								<CardSubtitle
									className="mb-2 text-muted"
									tag="h6"
								>
									#...
								</CardSubtitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
								</CardText>
								<Button>
									Descargar
								</Button>
								</CardBody>
							</Card>
							<Card>
								<CardImg
								alt="Card image cap"
								src="https://picsum.photos/318/180"
								top
								width="100%"
								/>
								<CardBody>
								<CardTitle tag="h5">
									Nombre de factura
								</CardTitle>
								<CardSubtitle
									className="mb-2 text-muted"
									tag="h6"
								>
									#...
								</CardSubtitle>
								<CardText>
									This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
								</CardText>
								<Button>
									Descargar
								</Button>
								</CardBody>
							</Card>
						</CardGroup>
					</div>
				</div>
		</div>
	);
};
