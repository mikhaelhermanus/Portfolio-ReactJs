import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toogleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <div className="projects-grid">
                        <Card shadow={5} style={{ minWidth: '350', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png)center / cover' }}> React Project </CardTitle>
                            <CardText>
                                Describe Here Your Project
                    </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="projects-grid">
                        <Card shadow={5} style={{ minWidth: '350', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png)center / cover' }}> React Project </CardTitle>
                            <CardText>
                                Describe Here Your Project
                    </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="projects-grid">

                        <Card shadow={5} style={{ minWidth: '350', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png)center / cover' }}> React Project </CardTitle>
                            <CardText>
                                Describe Here Your Project
                    </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Android</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Python</h1></div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Android</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                <Grid className="projects-grid">
                    <Cell coll={12}>
                        <div className="content">{this.toogleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;