import http from '../config/axiosConfig';

export const getTemperaturaAtual = () => {
    return http.get('/temperatura-atual');
}

export const getTemperaturaAlarme = () => {
    return http.get('/temperatura-alarmes');
}

export const getHistoricoTemperatura = () => {
    return http.get('/temperatura-historico');
}