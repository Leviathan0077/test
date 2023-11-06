import "./homepaage.css";
import bell from './bell.jpeg';
import home from './home.jpeg';
import menu from './hamburger.jpeg';
import shorts from './ytl.jpeg';
import subscription from './ytj.jpeg';
import channel from './cha.jpeg';
import thumbnail from './luffy-the-last-hope-yd.jpg';
import search from './search.jpeg';
import microphone from './WhatsApp Image 2023-11-06 at 2.39.39 PM (5).jpeg';
import ytlogo from './ytlogo.jpeg';


const HomePage = () => {





    return (
        <div className="main">
            <div className="navbar">
                <div className="menu-logo-container">
                    <input type="checkbox" id="check"></input>
                    <label for="check">
                        <img className="menu" src={menu} alt=""></img>


                    </label>

                    <img className="logo" src={ytlogo} alt="" />
                    <h1>YouTube</h1>
                </div>
                <div className="searchBox">
                    <input type="text" placeholder="Search" className="searchArea"></input>
                    <button className="searchBtn"><img src={search} alt="" class="searchLogo"></img></button>
                    <button className="mic"><img src={microphone} alt="" className="mic-logo"></img></button>
                </div>
                <div className="user-container">
                    <img src={bell} alt="" className="notifications"></img>
                    <img className="user" src={channel} alt=""></img>
                </div>
            </div>
            <div className="recommendation">
                <ul className="recommendation-list">
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                    <li>Gaming</li>
                </ul>
            </div>

            <div className="sidebar">
                <ul className="sidebar-nav">
                    <li class="side-home">
                        <img className="side-icons" src={home} alt=""></img>
                        <p class="side-names">Home</p>
                    </li>
                    <li className="side-shorts">
                        <img className="side-icons" src={shorts} alt=""></img>
                        <p className="side-names">Shorts</p>
                    </li>
                    <li className="side-subscription">
                        <img className="side-icons" src={subscription} alt=""></img>
                        <p className="side-names">Subscription</p>
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="videos-container">
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
                <div class="video-container">
                    <img src={thumbnail} alt="" class="thumbnail" />
                    <div class="video-details">
                        <img src={channel} alt="" class="channel-logo" />
                        <div class="video-title-container">
                            <p class="video-title">24 Years of Glory
                            </p>
                            <p class="channel-name">Eiichiro Sensei</p>
                            <p class="video-stats">
                                500 million views
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default HomePage;