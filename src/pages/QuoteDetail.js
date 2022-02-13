import {Route, useParams, Link, useRouteMatch} from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA =[
  {id: 'q1', author: 'Max Smitch', text: 'Learning JS is funny'},
  {id: 'q2', author: 'Max Swartch', text: 'Learning React is funny'}
]

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch()
    const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId)

    if(!quote) {
      return <p>No quote found</p>
    }
    return (
        <>
          <HighlightedQuote text ={quote.text} author = {quote.author}/>
          <Route path={match.path} exact>
            <div className='centered'>
              <Link className='btn--flat' to = {`${match.url}/comments`}>
                Load Comments
              </Link>
            </div>
          </Route>
          <Route path={`${match.path}/comments`}>
              <Comments/>
          </Route>
        </>
    )
}

export default QuoteDetail;