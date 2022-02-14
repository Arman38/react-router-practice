import QuoteList from "../components/quotes/QuoteList";
import {useEffect} from 'react'
import {getAllQuotes} from '../lib/api.js'
import useHttp from '../hooks/use-http.js'
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const AllQuotes = () => {

    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes,true)

    useEffect(() => {
      sendRequest()
    },[sendRequest])

    if(status === 'pending') {
        return (
            <div className = 'centered'>
                <LoadingSpinner/>
            </div>
        )
    }

    if(error) {
        return (
            <div className = 'centered focused'>
                {error}
            </div>
        )
    }
    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
       return <NoQuotesFound/>
    }

    return (
        <>
         <h1> Allquotes </h1>
         <QuoteList quotes = {loadedQuotes}/>  
        </>
    )
}

export default AllQuotes;