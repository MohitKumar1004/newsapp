import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    capitalizeFunction = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1,string.length);
    }

    constructor(props){
        super(props);
        console.log("This is my constructor from News Component");
        this.state={
            articles: [],
            loading: false,
            page:1,
            totalResults:0
        }
        document.title = `NewsMokey - ${this.capitalizeFunction(this.props.category)}`;
    }

    async updateNews(){
        this.props.setProgress(0)
        this.setState({loading: false})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.props.setProgress(70)
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: true
        })
        this.props.setProgress(100)
    }

    async componentDidMount(){
        console.log('cdm');
        // this.setState({loading: false})
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: true
        // })
        this.updateNews();
        this.setState({page:this.state.page+1})
    }

    // handlePrevClick = async () => {
    //     // console.log('Prev')
    //     // this.setState({loading: false})
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData)
    //     // this.setState({
    //     //     page:this.state.page-1,
    //     //     articles: parsedData.articles,
    //     //     loading: true
    //     // })
    //     await this.setState({page:this.state.page-1});
    //     this.updateNews();
    // }

    // handleNextClick = async () => {
    //     // console.log('Next')
    //     // this.setState({loading: false})
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData)
    //     // this.setState({
    //     //     page:this.state.page+1,
    //     //     articles: parsedData.articles,
    //     //     loading: true
    //     // })
    //     await this.setState({page:this.state.page+1});
    //     this.updateNews();
    // }

    fetchMoreData = async() => {
        await this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(this.state.page)
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }

    render() {
        // console.log('render');
        // let id=(this.state.page-1)*20+1;
        let id=1;
        return (
        <>
            <h1 className='text-center' style={{margin:'30px 0px'}}>NewsMonkey - Top {this.capitalizeFunction(this.props.category)} Headlines</h1>
            {!this.state.loading && <Spinner/>}
            <InfiniteScroll 
                dataLength={this.state.articles.length} 
                next={this.fetchMoreData} 
                hasMore={this.state.articles.length!==this.state.totalResults} 
                loader={<Spinner/>}
            >
                <div className='container overflow-hidden'>
                    <div className="row overflow-hidden">
                        {/* {this.state.loading && this.state.articles.map((element)=>{ */}
                            {this.state.articles.map((element)=>{
                                return (
                                <div key={id++} className="col-md-4 col-sm-12">
                                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                </div>
                            )
                            })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between my-4">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={()=>this.handlePrevClick()}>&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={()=>this.handleNextClick()}>Next &rarr;</button>
            </div> */}
        </>
        )
    }
}
