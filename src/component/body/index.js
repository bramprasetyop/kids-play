import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundImage: `url(${'https://animal-sounds.net/instruments/animals/images/backgrounds/forest_animals.jpg'})`,
    },
    gridList: {
        width: 1000,
        height: 930,
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    }
};

const tileData = [
    {
        id: 1,
        img: 'https://static.euronews.com/articles/stories/03/39/11/44/880x495_cmsv2_72eabe35-c105-57e5-94cf-a0380c44f60a-3391144.jpg',
        sound: "https://s3-ap-southeast-1.amazonaws.com/photo.all/Lion+Roar-SoundBible.com-718441804.mp3",
        title: 'LION',
        cols: 1,
    },
    {
        id: 2,
        img: 'https://i2.wp.com/respectfulinsolence.com/wp-content/uploads/2018/11/sheep.jpg?fit=1000%2C600&ssl=1',
        sound: 'https://s3-ap-southeast-1.amazonaws.com/photo.all/Sheep+Bleating-SoundBible.com-1373580685.mp3',
        title: 'SHEEP',
        cols: 1,
    },
    {
        img: 'https://c402277.ssl.cf1.rackcdn.com/photos/11552/images/hero_small/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
        title: 'ELEPHANT',
        sound:'https://s3-ap-southeast-1.amazonaws.com/photo.all/Asian+Elephant-SoundBible.com-1556118487.mp3',
        cols: 1,
    },
    {
        img: 'https://www-tc.pbs.org/wnet/nature/files/2014/10/RavenCrow-Main-1000x469.jpg',
        title: 'CROW',
        sound:'https://s3-ap-southeast-1.amazonaws.com/photo.all/Single+Crow-SoundBible.com-389950068.mp3',
        cols: 2,
    },
    {
        img: 'https://www.purelypoultry.com/images/pekin-ducklings_01.jpg',
        title: 'DUCK',
        sound:'https://s3-ap-southeast-1.amazonaws.com/photo.all/Quack+Quack-SoundBible.com-620056916.mp3',
        cols: 1,
    },
    {
        img: 'https://www.ucdavis.edu/sites/default/files/home-site/blogs/one-health/blog-posts/2018/cow-field-one-health-uc-davis.jpg',
        title: 'COW',
        sound:'https://s3-ap-southeast-1.amazonaws.com/photo.all/Cow-SoundBible.com-868293659.mp3',
        cols: 1,
    },
    {
        img: 'https://www.paulickreport.com/wp-content/uploads/2018/02/generic_horse.jpeg',
        title: 'HORSE',
        sound:'https://s3-ap-southeast-1.amazonaws.com/photo.all/Horse+Neigh-SoundBible.com-1126369713.mp3',
        cols: 1,
    },
    {
        img: 'https://static.euronews.com/articles/stories/03/39/11/44/880x495_cmsv2_72eabe35-c105-57e5-94cf-a0380c44f60a-3391144.jpg',
        title: 'LION',
        cols: 1,
    },
    {
        img: 'https://static.euronews.com/articles/stories/03/39/11/44/880x495_cmsv2_72eabe35-c105-57e5-94cf-a0380c44f60a-3391144.jpg',
        title: 'LION',
        cols: 1,
    },
    {
        img: 'https://static.euronews.com/articles/stories/03/39/11/44/880x495_cmsv2_72eabe35-c105-57e5-94cf-a0380c44f60a-3391144.jpg',
        title: 'LION',
        cols: 2,
    },

];


export default class MenuExamplePointing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            play: true,
        }
        this.audio = new Audio()
    }

    soundClick(sound) {
        this.audio = new Audio(sound)
        this.audio.play()
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList cellHeight={300} style={styles.gridList} cols={3}>
                    {tileData.map(tile => (
                        <GridListTile
                            key={tile.img}
                            cols={tile.cols || 1}
                        >
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                // title={tile.title}
                                titlePosition="top"
                                actionIcon={
                                    <Button onClick={this.soundClick.bind(this, tile.sound)} variant="contained" color="primary" style={styles.icon}>
                                        Play
                                    </Button>
                                }
                                actionPosition="left"
                                style={styles.titleBar}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
