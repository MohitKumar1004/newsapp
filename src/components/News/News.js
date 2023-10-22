import React,{useEffect,useState} from 'react'
import NewsItem from '../NewsItem/NewsItem'
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
const News = (props) => {

    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)
    const capitalizeFunction = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1,string.length);
    }
        

    const updateNews = async () => {
        props.setProgress(0)
        setLoading(false)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        // console.log(parsedData)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(true)
        props.setProgress(100)
    }

    useEffect(()=>{
        document.title = `NewsMokey - ${capitalizeFunction(props.category)}`;
        updateNews(); // eslint-disable-next-line
    },[])
    // handlePrevClick = async () => {
    //     // console.log('Prev')
    //     // setState({loading: false})
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData)
    //     // setState({
    //     //     page:page-1,
    //     //     articles: parsedData.articles,
    //     //     loading: true
    //     // })
    //     await setState({page:page-1});
    //     updateNews();
    // }

    // handleNextClick = async () => {
    //     // console.log('Next')
    //     // setState({loading: false})
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData)
    //     // setState({
    //     //     page:page+1,
    //     //     articles: parsedData.articles,
    //     //     loading: true
    //     // })
    //     await setState({page:page+1});
    //     updateNews();
    // }

    const fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(page)
        // console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
    // console.log('render');
    // let id=(page-1)*20+1;
    let id=1;
    return (
    <>
        <h1 className='text-center' style={{margin:'30px 0px',marginTop:'90px'}}>NewsMonkey - Top {capitalizeFunction(props.category)} Headlines</h1>
        {!loading && <Spinner/>}
        <InfiniteScroll 
            dataLength={articles.length} 
            next={fetchMoreData} 
            hasMore={articles.length!==totalResults} 
            loader={<Spinner/>}
        >
            <div className='container overflow-hidden'>
                <div className="row overflow-hidden">
                    {/* {loading && articles.map((element)=>{ */}
                        {articles.map((element)=>{
                            return (
                            <div key={id++} className="col-md-4 vh-60 my-3 col-sm-12">
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        )
                        })}
                </div>
            </div>
        </InfiniteScroll>
    </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}
export default News;