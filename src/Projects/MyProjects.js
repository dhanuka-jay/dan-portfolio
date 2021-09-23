import { Card, Image, Button, Icon } from 'semantic-ui-react';
import './projects.css';
import nsl_cricket from '../AppImages/nsl_logo.jpg';


const MyProjects = () => {
    return (
        <div id="myprojects">
            <div className="project-desc">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem adipisci esse ab ex minus 
                    corrupti in maxime autem? Neque est amet porro dolores deleniti labore, consequatur facilis harum 
                    consectetur ad fuga explicabo suscipit atque obcaecati sequi eos impedit consequuntur! Excepturi 
                    voluptas dolores, corrupti provident dicta nesciunt dignissimos consequuntur. Nostrum!</p>
            </div>
            <div className="project-container">
                <Card.Group centered>
                    <Card>
                        <Image src={nsl_cricket} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>NSL Cricket</Card.Header>
                            <Card.Meta>
                                <span>Cricket Club - Canberra Northside</span>
                            </Card.Meta>
                            <Card.Description>
                                'Northside Legends - Canberra' Cricket Club website.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic icon labelPosition="left" color="red">
                                <Icon name="globe" color="black" />
                                <Button.Content>Website</Button.Content>
                            </Button>
                            <Button basic icon labelPosition="right" color="brown">
                                <Icon name="github" color="black"/>
                                Code
                            </Button>
                        </div>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Image src={nsl_cricket} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>NSL Cricket</Card.Header>
                            <Card.Meta>
                                <span>Cricket Club - Canberra Northside</span>
                            </Card.Meta>
                            <Card.Description>
                                'Northside Legends - Canberra' Cricket Club website.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic icon labelPosition="left" color="red">
                                <Icon name="globe" color="black" />
                                <Button.Content>Website</Button.Content>
                            </Button>
                            <Button basic icon labelPosition="right" color="brown">
                                <Icon name="github" color="black"/>
                                Code
                            </Button>
                        </div>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Image src={nsl_cricket} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>NSL Cricket</Card.Header>
                            <Card.Meta>
                                <span>Cricket Club - Canberra Northside</span>
                            </Card.Meta>
                            <Card.Description>
                                'Northside Legends - Canberra' Cricket Club website.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic icon labelPosition="left" color="red">
                                <Icon name="globe" color="black" />
                                <Button.Content>Website</Button.Content>
                            </Button>
                            <Button basic icon labelPosition="right" color="brown">
                                <Icon name="github" color="black"/>
                                Code
                            </Button>
                        </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        </div>
    )
}

export default MyProjects
