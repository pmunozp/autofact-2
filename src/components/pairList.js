import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import DataService from "../services/dataService";
import {selectSymbol} from "../redux/actions";

import { connect } from 'react-redux'

class PairList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.selectSymbolFunction = this.selectSymbolFunction.bind(this);
    }

    componentDidMount() {
        this.loadedSymbols(DataService.getAll());
    }

    loadedSymbols(symbs) {
        this.setState((state, props) => {
            let symbols = symbs.map((symb) => {
                return (
                    <tr key={symb.symbol} onClick={this.selectSymbolFunction.bind(this,symb.symbol)}>
                        <td className="symbol">{symb.symbol}</td>
                        <td>
                            {symb.lastPrice.bid}
                        </td>
                        <td>
                            {symb.lastPrice.trend.dir === 1 ? <FontAwesomeIcon icon={faArrowUp} />:symb.lastPrice.trend.dir == -1 ? <FontAwesomeIcon icon={faArrowDown} />:<FontAwesomeIcon icon={faArrowRight} />}
                        </td>
                    </tr>);
            });
            return {
                symbolList: symbols
            }
        });
    }

    selectSymbolFunction(symbol){
        this.props.selectSymbol(symbol);
    }

    render() {
        if (this.state.symbolList) {
            if (this.state.symbolList.length > 0) {
                return (
                    <table className="sidebar-sticky pt-3 table-sm table text-center table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Símbolo</th>
                                <th>Ult. Precio</th>
                                <th>Tendencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.symbolList}
                        </tbody>
                    </table>
                );
            } else {
                return <span>Listado vac&iacute;o</span>;
            }

        } else {
            return <div>Cargando pares</div>;
        }
    }
}

export default connect(null, {selectSymbol}) (PairList);