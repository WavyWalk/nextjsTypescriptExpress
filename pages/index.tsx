import * as React from 'react'
import {Col, Container, Row} from "reactstrap";
import Link from "next/link";

const Home: React.FC = () => {

    return <Container fluid className={"foo"}>
        <Col>
            <Row>
                <h1>The main page!</h1>
            </Row>
            <Link href={"/hello"}><a>to hello page</a></Link>
        </Col>
    </Container>
}

export default Home