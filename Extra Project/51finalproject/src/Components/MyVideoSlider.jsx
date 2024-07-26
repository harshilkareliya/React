import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const PREFIX_URL =
  'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

class MyVideoSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: false,
      isRTL: false,
      slideDuration: 500,
      slideInterval: 2000, // changed to a reasonable interval for demonstration
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: {},
      useWindowKeyDown: true,
    };

    this.images = [
      {
        thumbnail: `https://ssl.gstatic.com/onebox/media/sports/videos/vita/e8ivh404INEMlISw_768x432.jpg`,
        original: `https://ssl.gstatic.com/onebox/media/sports/videos/vita/e8ivh404INEMlISw_768x432.jpg`,
        embedUrl:
          'https://www.hotstar.com/in/sports/cricket/tournaments/icc-mens-t20-world-cup-2024/1260164072/invincible-ind-ace-sa-lift-2nd-title/1540029928/sports-match-highlights/watch',
        description: 'Render custom slides (such as videos)',
        movieName : 'SA VS IND FINAL',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://ssl.gstatic.com/onebox/media/sports/videos/vita/e8ivh404INEMlISw_768x432.jpg`,
        original: `https://ssl.gstatic.com/onebox/media/sports/videos/vita/e8ivh404INEMlISw_768x432.jpg`,
        embedUrl:
          'https://www.hotstar.com/in/sports/cricket/tournaments/icc-mens-t20-world-cup-2024/1260164072/invincible-ind-ace-sa-lift-2nd-title/1540029928/sports-match-highlights/watch',
        description: 'Render custom slides (such as videos)',
        movieName : 'SA VS IND FINAL',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://ssl.gstatic.com/onebox/media/sports/videos/vita/e8ivh404INEMlISw_768x432.jpg`,
        original: `https://ssl.gstatic.com/onebox/media/sports/videos/vita/e8ivh404INEMlISw_768x432.jpg`,
        embedUrl:
          'https://www.hotstar.com/in/sports/cricket/tournaments/icc-mens-t20-world-cup-2024/1260164072/invincible-ind-ace-sa-lift-2nd-title/1540029928/sports-match-highlights/watch',
        description: 'Render custom slides (such as videos)',
        movieName : 'SA VS IND FINAL',
        renderItem: this._renderVideo.bind(this),
      },
      
    ];
  }

  componentDidMount() {
    this._imageGallery.play();
  }

  _onImageClick(event) {
    // console.debug(
    //   'clicked on image',
    //   event.target,
    //   'at index',
    //   this._imageGallery.getCurrentIndex()
    // );
  }

  _onImageLoad(event) {
    // console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    // console.debug('slid to index', index);
  }

  _onPause(index) {
    // console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    // console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    // console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({ [state]: event.target.value });
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 4; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail: `${PREFIX_URL}${i}t.jpg`,
      });
    }

    return images;
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {this.state.showVideo[item.embedUrl] ? (
          <div className="video-wrapper" style={{ width: '1200px' }}>
            <a
              className="close-video"
              onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
            ></a>
            <iframe
              width="560"
              height="315"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen
              style={{ width: '1200px', height: '600px' }}
            ></iframe>
          </div>
        ) : (
          <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <div className='image-gallery-imgs'>
              <img className="image-gallery-image" src={item.original} style={{ width: '1200px', height: '600px' }} />
            </div>
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: '0', left: 'initial' }}
              >
                {item.movieName}
              </span>
            )}
          </a>
        )}
      </div>
    );
  }

  render() {
    return (
      <section className="app">
        <ImageGallery
          ref={(i) => (this._imageGallery = i)}
          items={this.images}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />
      </section>
    );
  }
}

export default MyVideoSlider;
