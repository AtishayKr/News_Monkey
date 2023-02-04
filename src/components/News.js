import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d388fc1173a94d0da670c0caf8c878b0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(`${url}`);
    console.log(parseData);
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
    
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      console.log("you are in if condition");
    } else {
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews();
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">NewsMonkey - Top Headlines {this.props.category}</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.article.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container ">
            <div className="row justify-content-between">
              <button
                disabled={this.state.page <= 1}
                onClick={this.handlePrevClick}
                type="button"
                className=" col-1 btn btn-primary"
              >
                &#8592; Prev
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                // disabled
                onClick={this.handleNextClick}
                type="button"
                className=" col-1 btn btn-primary"
              >
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
