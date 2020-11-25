import euraud from './data/EURAUD';
import eurcad from './data/EURCAD';
import eurjpy from './data/EURJPY';
import eurusd from './data/EURUSD';
import usdjpy from './data/USDJPY';

let data;

const DataService = {
    getAll: () => {
        if (data)
            return data;
        else
            return DataService.load();
    },
    getBySymbol: (symbol) => {
        let d = data.find((symb) => symbol === symb.symbol);
        return d;
    },

    // Metodo para cargar la data por defecto
    load: () => {
        data = [euraud, eurcad, eurjpy, eurusd, usdjpy].map((symbol) => {
            symbol.lastPrice = symbol.data[symbol.data.length - 1];
            return symbol;
        });
        return data;
    }
}

export default DataService;