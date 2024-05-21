import PropTypes from 'prop-types';

const MovieCard = (props: any) =>  (
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={props.movie.imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.movie.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.movie.subtitle}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.description}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                </div>
            </div>
        </div>
    </div>
);

MovieCard.defaultProps = {
    movie: {
        imageUrl: '',
        title: 'Default Title',
        subtitle: 'Default Subtitle',
        description: 'Default Description',
    }
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string
    })
};

export default MovieCard;