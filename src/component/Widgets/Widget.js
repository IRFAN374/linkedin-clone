import React from 'react'
import '../../style/widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widget() {

    const newsArticles = (heading,subtitle)=>{
        return(
                <div className="widget__article">
                    <div className="widget__articleLeft">
                        <FiberManualRecordIcon />
                    </div>
                    <div className="widget__articleRight">
                        <h4>{heading}</h4>
                        <p>{subtitle}</p>
                    </div>
                </div>
        )
    }
    return (
        <div className="widgets">
            <div className="widget__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticles("Covid news","What Star Wars Can Teach Us About Covid")}
            {newsArticles("fake  news","Will Covid Survive the Recession?")}
            {newsArticles("random news","7 Unbelievable Things You Never Knew About Covid")}
            {newsArticles("fake news","Confessions: How I Got Addicted to Covid")}
            {newsArticles("ABCD news","What Star Wars Can Teach Us About Covid")}
            {newsArticles("ETC news","What Star Wars Can Teach Us About Covid")}
        </div>
    )
}

export default Widget
