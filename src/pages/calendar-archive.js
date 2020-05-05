import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidenav from '../components/sidenav';



export default () => (
  <StaticQuery
    query={graphql`
    {
      allEvents: allDatasetCicCalendarArchiveCsv(filter: {Type: {eq: "Event"}}) {
        nodes {
          CLP
          Cost
          Date
          Description
          Location
          Sponsor
          Time
          Title
          Type
        }
      }
      allTrainings: allDatasetCicCalendarArchiveCsv(filter: {Type: {eq: "Training"}}) {
        nodes {
          CLP
          Cost
          Date
          Description
          Location
          Sponsor
          Time
          Title
          Type
        }
      }
      allMeetings: allDatasetCicCalendarArchiveCsv(filter: {Type: {eq: "Meeting"}}) {
        nodes {
          CLP
          Cost
          Date
          Description
          Location
          Sponsor
          Time
          Title
          Type
        }
      }
    }
  `}
    render={data => <CalendarPage data={data} />}
  />
)

const CalendarPage = ({ data }) => (

  <Layout>
    <SEO title="Calendar Archive" />
    <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
          
            <div className="usa-layout-docs__main desktop:grid-col-10 usa-prose">

            <div class="usa-alert usa-alert--warning usa-alert--slim">
                <div class="usa-alert__body">
                <p class="usa-alert__text">Looking for current events, trainings and meetings?</p>
                <a href="/calendar"><button class="usa-button">View Current Calendar</button></a>
                </div>
            </div>
            <a id="events"></a>
            <h2>Past Events</h2>
      {data.allEvents.nodes.length > 0 && data.allEvents.nodes.map(item => (
              <div class="grid-container">
              <hr />
              <div class="grid-row grid-gap-lg">
              <div class="tablet:grid-col-5">
              <h3>{item.Title}</h3>
              <ul>
              <li><b>Sponsored by: </b>{item.Sponsor}</li><li><b>Date: </b>{item.Date}</li>
              <li><b>Time: </b>{item.Time}</li><li><b>Location: </b>{item.Location}</li>
              <li><b>Cost: </b>{item.Cost}</li>
              <li><b>CLP Credits: </b>{item.CLP}</li>
              </ul>
              </div>
              <div class="tablet:grid-col-7">
              <b>Description:</b><p>{item.Description}</p>
              </div></div></div>
        ))}
<a id="training"></a>
<h2>Past Trainings</h2>
      {data.allTrainings.nodes.length > 0 && data.allTrainings.nodes.map(item => (
              <div class="grid-container">
              <hr />
              <div class="grid-row grid-gap-lg">
              <div class="tablet:grid-col-6">
              <h3>{item.Title}</h3>
              <ul>
              <li><b>Sponsored by: </b>{item.Sponsor}</li><li><b>Date: </b>{item.Date}</li>
              <li><b>Time: </b>{item.Time}</li><li><b>Location: </b>{item.Location}</li>
              <li><b>Cost: </b>{item.Cost}</li>
              <li><b>CLP Credits: </b>{item.CLP}</li>
              </ul>
              </div>
              <div class="tablet:grid-col-6">
              <b>Description:</b><p>{item.Description}</p>
              </div></div></div>
        ))}
<a id="meetings"></a>
<h2>Past Meetings</h2>
      {data.allMeetings.nodes.length > 0 && data.allMeetings.nodes.map(item => (
              <div class="grid-container">
              <hr />
              <div class="grid-row grid-gap-lg">
              <div class="tablet:grid-col-6">
              <h3>{item.Title}</h3>
              <ul>
              <li><b>Sponsored by: </b>{item.Sponsor}</li><li><b>Date: </b>{item.Date}</li>
              <li><b>Time: </b>{item.Time}</li><li><b>Location: </b>{item.Location}</li>
              </ul>
              </div>
              <div class="tablet:grid-col-6">
              <b>Description:</b><p>{item.Description}</p>
              </div></div></div>
        ))}
    
   
            </div>
          </div>
        </div>
      </div>
   
   
    
  </Layout>
)

