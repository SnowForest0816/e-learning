import { React } from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import './Reports.css';
import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import TokenCard from '../comp/TokenCard.js';

import icon from '../../assets/img/4.png';
import image from '../../assets/img/casius-image1.png';
import tokencardimage1 from '../../assets/img/img-topic.png';
import tokencardimage2 from '../../assets/img/brain-card.png';
import tokencardimage3 from '../../assets/img/card2.png';
import leftArrow from '../../assets/img/left-arrow.png';
import rightArrow from '../../assets/img/right-arrow.png';


function Reports () {
    const tokenCards = [
        {
            'image': tokencardimage1,
            'title': 'Cell biology',
            'date': 'DECEMBER 31, 2022'
        },
        {
            'image': tokencardimage2,
            'title': 'Brain',
            'date': 'DECEMBER 31, 2022'
        },
        {
            'image': tokencardimage3,
            'title': 'History Exam',
            'date': 'DECEMBER 31, 2022'
        }
    ];

    const options = {
        chart: {
            type: "column"
        },
        plotOptions: {
            column: {
                stacking: "normal"
            }
        },
        series: [
            {
                data: [1, 3, 3.5, 2, 2, 0, 2.5]
            },
            {
                data: [1, 3, 1.5, 6.5, 2, 1.25, 2.5]
            },
            {
                data: [1, 3, 1.5, 2, 3.5, 1.25, 2.5]
            }
        ]
    }
  
    return (
        <div>
            <Header />

            <div className='reports-nav'>
                <div className='reports-nav-img'>
                    <img src={image} alt="" />
                </div>
                <div className='reports-nav-text'>
                    <h1>Reports</h1>
                    <p>See how you’re doing. Check out which topics you’ve got down and which ones may need some more revision.</p>
                    <p>Check out your scores, where your time should be spent, fun facts and how you stack up against others.</p>
                </div>
                <button>
                    Slect Subject
                    <img src={icon} alt="" />
                </button>
            </div>

            <div className='reports-main'>
                <h1>Activities Taken</h1>
                <div className="reports-token-cards">
                    <img src={leftArrow} alt="" />
                    {
                        tokenCards.map((item, index) => <div key={index}><TokenCard data={item} /></div>)
                    }
                    <img src={rightArrow} alt="" />
                </div>
            </div>

            <div className='reports-charts'>
                <div className='reports-charts-overview'>
                    <h1>Overview</h1>
                    <div className='select-bar'>
                        <select id="filter" name="filter">
                            <option value="all">All Section</option>
                        </select>
                        <select id="period" name="periodlist">
                            <option value="week">Last 7 days</option>
                        </select>
                    </div>
                    <div className='chart'>
                        <HighchartsReact
                            containerProps={{ className: "chart" }}
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </div>
                <div className='reports-charts-stats'>
                    <h1>Stats</h1>
                    <div className='chart-cards'>
                        <div className='chart-card'>
                            <h2>Flashcard</h2>
                            <p>25</p>
                            <svg class="svg-pi svg-pi-43">
                                <circle class="svg-pi-track" />
                                <circle class="svg-pi-indicator-flashcard" />
                            </svg>
                        </div>
                        <div className='chart-card'>
                            <h2>Exams Taken</h2>
                            <p>21</p>
                            <svg class="svg-pi svg-pi-43">
                                <circle class="svg-pi-track" />
                                <circle class="svg-pi-indicator-exam" />
                            </svg>
                        </div>
                        <div className='chart-card'>
                            <h2>Exams Taken</h2>
                            <p>21</p>
                            <svg class="svg-pi svg-pi-43">
                                <circle class="svg-pi-track" />
                                <circle class="svg-pi-indicator-exam" />
                            </svg>
                        </div>
                        <div className='chart-card'>
                            <h2>PRactice tests</h2>
                            <p>152</p>
                            <svg class="svg-pi svg-pi-73">
                                <circle class="svg-pi-track" />
                                <circle class="svg-pi-indicator-practice" />
                            </svg>
                        </div>
                        <div className='chart-card'>
                            <h2>PRactice tests</h2>
                            <p>152</p>
                            <svg class="svg-pi svg-pi-73">
                                <circle class="svg-pi-track" />
                                <circle class="svg-pi-indicator-test" />
                            </svg>
                        </div>
                        <div className='chart-card'>
                            <h2>PRactice tests</h2>
                            <p>152</p>
                            <svg class="svg-pi svg-pi-73">
                                <circle class="svg-pi-track" />
                                <circle class="svg-pi-indicator-practice" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Reports;