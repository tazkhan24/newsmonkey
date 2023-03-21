import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card my-3">
        <span className="badge position-absolute top-0 rounded-pill text-bg-danger">
          {source}
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://media.cnn.com/api/v1/images/stellar/prod/230128065407-01-jerusalem-shooting-0128.jpg?c=16x9&q=w_800,c_fill"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small class="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
