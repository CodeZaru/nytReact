import React from 'react';
import { render } from 'react-dom'
import Ionicon from 'react-ionicons'
import { Panel, Row, Col } from 'react-bootstrap';

const Article = props => (
    <Row className="ml-20 mr-20">
        <Panel style={{backgroundColor: "#CBCBAB"}}>
            <Col xs={10} sm={11}>
                <div className="article-container">
                    <div className="article-thumbnail">
                        <img src={`https://www.nytimes.com/${props.article.multimedia[1].url}`} alt={props.article.headline.main} />
                    </div>
                    <div className="article-info">
                        <h4>{props.article.headline.main}</h4>
                        <p>{props.article.snippet}</p>
                        <a href={props.article.web_url} target="_blank">Read Article</a>
                        <p>{props.article.byline.original}</p>
                    </div>
                </div>
            </Col>
            <Col xs={2} sm={1} className="fav-ic-container">
                             <div className="searchToggleColor" style={{backgroundColor: "white"}}>   
                <span onClick={() => props.saveArticle(props.article)}>
                <Ionicon icon="md-star-outline" rotate={true} fontSize="35px"
                    onClick={() => this.color="green"}  
                />                
                </span>
                </div>
            </Col>
        </Panel>
    </Row>
);

export default Article;
