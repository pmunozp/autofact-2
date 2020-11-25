import React from 'react';
import PairList from "../components/pairList";
import Detail from "../components/detail";

class PanelView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Panel de control</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed"
                        type="button" data-toggle="collapse" data-target="#sidebarMenu"
                        aria-controls="sidebarMenu" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Salir</a>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid" >
                    <div className="row" >
                        <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block sidebar collapse" >
                            <PairList > </PairList>
                        </nav>
                        <div className="ml-sm-auto col-md-8 col-lg-9 col-sm-auto pt-2">
                            <Detail> </Detail>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelView;