import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    imagesList: [],
    isLoading: false,
    error: null,
    isEmpty: false,
    isVisibleBtn: false,
  };
  componentDidMount() {
    // ImageService.getImages('cat', 1);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const { page: currentPage, per_page, photos, total_results }= await ImageService.getImages(query, page);
      if (photos.length === 0) {
        this.setState({ isEmpty: true });
        return;
      }
      this.setState(prevState => ({
        imagesList: [...prevState.imagesList, ...photos],
        isVisibleBtn: currentPage < Math.ceil(total_results / per_page),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => this.setState({ isLoading: false }), 1000);
    }
  };

  onSubmit = query => {
    console.log(query);
    this.setState({ 
      query, 
      page: 1, 
      imagesList: [], 
      isLoading: false,
      error: null,
      isEmpty: false,
      isVisibleBtn: false 
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { imagesList, isLoading, isEmpty, isVisibleBtn} = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Grid>
          {imagesList.map(({ id, alt, src: { small } }) => (
            <GridItem key={id}>
              <CardItem>
                <img src={small} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {isLoading && <Text textAlign="center">Loading ... </Text>}
        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {isVisibleBtn && (<Button type="buttom" onClick={this.onLoadMore} >
          Load more
        </Button>)}
      </>
    );
  }
}
