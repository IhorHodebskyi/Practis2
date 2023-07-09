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
  };
  componentDidMount() {
    // ImageService.getImages('cat', 1);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.getImeges(query, page);
    }
  }

  getImeges = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const response = await ImageService.getImages(query, page);
      console.log(response);
      this.setState({ imagesList: response.photos });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => this.setState({ isLoading: false }), 1000);
    }
  };

  onSubmit = query => {
    console.log(query);
    this.setState({ query });
  };

  render() {
    const { imagesList, isLoading } = this.state;
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
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
