import { Card, Row, Col, Image, Container } from "react-bootstrap";

// import images asseets
import minecraft from '../assets/trending/minecraft.jpg';
import farCry from '../assets/trending/farCry6.jpg';
import lol from '../assets/trending/lol.jpg';
import valorant from '../assets/trending/valorant.jpg';
import olliworld from '../assets/trending/olliworld.jpg';
import wow from '../assets/trending/wow.jpg';

const TrendingGame = () => {
    
    const Data = [
        minecraft,
        farCry,
        lol,
        valorant,
        olliworld,
        wow
    ];

    const name = [
        'Minecraft',
        'Far cry 6',
        'League of legends',
        'valorant',
        'Olli World',
        'World of Warcraft'
    ];

    return(
        <div >
            <Container>
                <br />
                    <h1 className="text-white text-center" id="trending">Trending Games</h1>
                <br />
                <Row>
                    {Data.map((data, index) => (
                    <Col md={4} key={index}>
                        <Card className="gameImage">
                        <Image alt=" Game" src={data} className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">{name[index]}</Card.Title>
                                    <Card.Text className="text-left">This is a wider card with narutal lead-in to additional content</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default TrendingGame;