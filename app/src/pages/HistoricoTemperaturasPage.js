import React, { useState, useEffect } from 'react';
import { getHistoricoTemperatura } from '../services/api';
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    withStyles,
    makeStyles
} from '@material-ui/core';
import {
    Loading,
    Alerta
} from '../components';
import Moment from 'react-moment';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#4682B4',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const HistoricoTemperaturasPage = () => {
    const classes = useStyles();
    const [historico, setHistorico] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const obterHistoricoTemperatura = () => {
        setLoading(true);

        getHistoricoTemperatura()
            .then(response => {
                setHistorico(response.data);
                setLoading(false);
            })
            .catch(erro => {
                setLoading(false);
                setErro('Desculpe! Ocorreu um erro!');
            });
    }

    useEffect(() => {
        obterHistoricoTemperatura();
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

                    return historico &&
                        (
                            <TableContainer component={Paper} >
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Temperatura</StyledTableCell>
                                            <StyledTableCell>Data</StyledTableCell>
                                            <StyledTableCell>Status</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {historico.map((temperatura) => (
                                            <StyledTableRow key={temperatura.data}>
                                                <StyledTableCell component="th" scope="row">
                                                    {temperatura.valor}
                                                </StyledTableCell>
                                                <StyledTableCell><Moment format='DD/MM/YYYY'>{temperatura.data}</Moment></StyledTableCell>
                                                <StyledTableCell>{temperatura.status}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        );
                })()
            }
        </>
    );
}

export default HistoricoTemperaturasPage;