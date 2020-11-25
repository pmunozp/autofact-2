import React from 'react';
import DataService from "../services/dataService";
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            symbolId: this.props.symbol
        }
    }

    symbolLoaded(symbol) {
        symbol.data = symbol.data.reverse();
        this.setState((state, props) => {
            state.symbol = symbol;
            state.isLoading = false;
            return state;
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.symbolId !== this.props.symbol) {
            this.setState({ isLoading: true, symbolId: this.props.symbol, symbol: {} });
            this.symbolLoaded(DataService.getBySymbol(this.props.symbol));
        }
    }

    render() {
        if (!this.state.symbol) {
            return (<h1>Selecciona un simbolo</h1>);
        }
        else {
            if (this.state.isLoading) {
                return <span>El simbolo está siendo cargado...</span>;
            } else {
                let symbol = this.state.symbol;
                let ultimoPrecio = symbol.data[0];
                return (<div>
                    <h1>{symbol.symbol}</h1>
                    <div className="row">
                        <div className="col-lg-3 col-6">Ultimo Precio </div>
                        <div className="col-lg-3 col-6">{ultimoPrecio.bid}</div>
                        <div className="col-lg-3 col-6">Valor Central</div>
                        <div className="col-lg-3 col-6">{ultimoPrecio.trend.current_value}</div>
                        <div className="col-lg-3 col-6">Dirección</div>
                        <div className="col-lg-3 col-6">{ultimoPrecio.trend.dir === 1 ? <FontAwesomeIcon icon={faArrowUp} /> : ultimoPrecio.trend.dir === -1 ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowRight} />}</div>
                        <div className="col-lg-3 col-6">Desviación Estandar</div>
                        <div className="col-lg-3 col-6">{(ultimoPrecio.trend.std_dev_max - ultimoPrecio.trend.current_value).toFixed(6)}</div>
                        <div className="col-lg-3 col-6">Amplitud mínima</div>
                        <div className="col-lg-3 col-6">{ultimoPrecio.trend.std_dev_min}</div>
                        <div className="col-lg-3 col-6">Amplitud máxima</div>
                        <div className="col-lg-3 col-6">{ultimoPrecio.trend.std_dev_max}</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <br />
                            <h3>Últimos 15 datos</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Fecha</td>
                                        <td>Precio</td>
                                        <td>Tendencia</td>
                                        <td>StdDev</td>
                                        <td>StdDevMin</td>
                                        <td>StdDevMax</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {symbol.data.slice(0, 15).map((e) =>
                                        <tr key={e.id}>
                                            <td><Moment format="YYYY-MM-DDThh:mm:ss.SSS">{(e.id/1000000)}</Moment></td>
                                            <td>{e.bid}</td>
                                            <td>{(e.trend.std_dev_max - e.trend.current_value).toFixed(6)}</td>
                                            <td>{e.trend.current_value}</td>
                                            <td>{e.trend.std_dev_min}</td>
                                            <td>{e.trend.std_dev_max}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>);
            }
        }
    }
}

const mapStateToProps = state => {
    return { symbol: state.symbolSelection.symbol }
};

export default connect(mapStateToProps, null)(Detail);