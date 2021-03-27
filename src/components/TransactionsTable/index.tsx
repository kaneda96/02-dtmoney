import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {

    useEffect(() =>{
        api.get('/transactions')       
        .then(data => console.log(data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titutlo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>                                  
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td className="deposit">R$12,00</td>
                        <td>Desenv</td>
                        <td>14/07/1996</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$120,00</td>
                        <td>Casa</td>
                        <td>14/07/1996</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}