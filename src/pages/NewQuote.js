import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from 'react-router-dom';
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http.js";
import {useEffect} from 'react'

const NewQuote = () => {
    const history = useHistory()
    const {sendRequest,status} = useHttp(addQuote)

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes')
        }
    },[status, history])

    const onAddQuoteHandler = (quoteData) => {
        sendRequest(quoteData)
    }   

    return (
        <>
            <QuoteForm isLoading = {status === 'pending'} onAddQuote = {onAddQuoteHandler}/>
        </>
    )
}

export default NewQuote;