import { FormEvent,    useState } from "react";
import Modal from 'react-modal';
import { useTransactions } from "../../hooks/useTransactions";

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from "./styles";



interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} = useTransactions();


    const[title,setTitle] = useState('');
    const[amount,setAmount] = useState(0);
    const[category,setCategory] = useState('');
    const[type, SetType] = useState('deposit');

   async function handleCreteNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });


        setTitle('');
        setAmount(0);
        setCategory('');
        SetType('deposit');
        onRequestClose();
    }

    return(
        <Container>
             <Modal 
       isOpen={isOpen} 
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       >
           <button type="button" onClick={onRequestClose} className="react-modal-close">
               <img src={closeImg} alt="Fechar modal" />
           </button>
           <Container onSubmit={handleCreteNewTransaction}>
             <h2>Cadastrar trasação</h2>
             <input placeholder="Title" onChange={event => setTitle(event.target.value)} value={title}/>
             <input type="number" onChange={event => setAmount(Number(event.target.value))} placeholder="Valor" value={amount}/>
             <TransactionTypeContainer>
                <RadioBox 
                type="button" 
                onClick={() => {SetType('deposit')}} 
                isActive={type === 'deposit'}
                activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                type="button"  
                onClick={() => {SetType('withdraw')}} 
                isActive={type === 'withdraw'}
                activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída"/>
                    <span>Saída</span>
                </RadioBox>
             </TransactionTypeContainer>
             <input type="text" placeholder="Categoria" onChange={event => setCategory(event.target.value)}  value={category}/>            
             <button type="submit">Cadastrar</button>
           </Container>          
        </Modal>
        </Container>
    );
}

