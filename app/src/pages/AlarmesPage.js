import React, { useState, useEffect } from 'react';
import { getTemperaturaAlarme } from '../services/api';
import {
    Typography,
    Box
} from '@material-ui/core';
import {
    Loading,
    Alerta
} from '../components';

const AlarmesPage = () => {
    const [temperatura, setTemperatura] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setLoading(true);

        getTemperaturaAlarme()
            .then(response => {
                setTemperatura(response.data);
                setLoading(false);
            })
            .catch(erro => {
                setLoading(false);
                setErro('Desculpe! Ocorreu um erro!');
            });
    }, []);

    return (
        <>
            {
                (() => {
                    if (loading)
                        return <Loading open={loading} />

                    if (erro)
                        return (
                            <Alerta severity="error"
                                text={erro} />
                        );

                    return temperatura &&
                        (
                            <Box display='flex'>
                                <Box p={1}>
                                    <Typography variant='h5' style={{ color: 'red' }} >
                                        Alerta de temperatura! Valor de risco:
                                    </Typography>
                                </Box>
                                <Box p={1}>
                                    <Typography variant='h5' style={{ color: 'red' }}>
                                        {temperatura.valor}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                })()
            }
        </>
    );
}

export default AlarmesPage;