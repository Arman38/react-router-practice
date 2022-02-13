import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA =[
    {id: 'q1', author: 'Max Smitch', text: 'Learning JS is funny'},
    {id: 'q2', author: 'Max Swartch', text: 'Learning React is funny'}
]

const AllQuotes = () => {
    return (
        <>
         <h1> Allquotes </h1>
         <QuoteList quotes = {DUMMY_DATA}/>  
        </>
    )
}

export default AllQuotes;