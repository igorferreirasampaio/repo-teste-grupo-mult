import React, { useState, useEffect, useCallback } from 'react';
import { getTemperaturaAtual } from '../services/api';
import {
    Typography,
    Button,
    Box
} from '@material-ui/core';
import { Cached as CachedIcon } from '@material-ui/icons';
import {
    Loading,
    Alerta
} from '../components';

const TemperaturaAtualPage = () => {
    const [temperatura, setTemperatura] = useState(null);
    const [corStatus, setCorStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const obterCorStatus = (status) => {
        if (status === 'ok') {
            setCorStatus('green');
        }
        else if (status === 'alerta') {
            setCorStatus('yellow');
        }
        else {
            setCorStatus('red');
        };
    }

    const obterTemperaturaAtual = useCallback(() => {
        setLoading(true);

        getTemperaturaAtual()
            .then(response => {
                const { status } = response.data;

                setTemperatura(response.data);
                obterCorStatus(status);
                setLoading(false);
            })
            .catch(erro => {
                setLoading(false);
                setErro('Desculpe! Ocorreu um erro!');
            });
    }, []);

    useEffect(() => {
        obterTemperaturaAtual();
    }, [obterTemperaturaAtual]);

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
                            <>
                                <Box display='flex'>
                                    <Box p={1}>
                                        <Typography variant='h5'>
                                            Temperatura:
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant='h5'>
                                            {temperatura.valor}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display='flex'>
                                    <Box p={1}>
                                        <Typography variant='h5'>
                                            Status:
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant='h5'
                                            style={{ color: corStatus }}>
                                            {temperatura.status}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display='flex'>
                                    <Box p={1}>
                                        <Button
                                            variant="contained"
                                            style={{ color: 'white', backgroundColor: '#4682B4' }}
                                            startIcon={<CachedIcon />}
                                            onClick={obterTemperaturaAtual}>
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Box>
                            </>
                        );
                })()
            }
        </>
    );
}

export default TemperaturaAtualPage;