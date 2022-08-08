import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 700,
    img,
    title,
    subheading,
    imgPosition = "top left",
    linkText,
    linkHref
  } = props;

  return (
    <React.Fragment>
      <div
        className="fullWidthHeader"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          alignItems: "center",
          margin: "100px 10%",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridRow: "1/1",
              gridColumn: "2/-1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridRow: "1/1",
              gridColumn: "2/-1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridRow: "1/1",
              gridColumn: "1/3",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen title"
                style={{
                  fontSize: "5000px !important",
                  backgroundColor: "black",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  fontFamily: "poppins-semibold,poppins,sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {title}
              </h1>
            )}
            {linkText && linkHref && (
              <span
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-2-widescreen"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  fontFamily: "poppins-semibold,poppins,sans-serif",
                  textTransform: "uppercase",
                }}
              >
                <a href={linkHref}>{linkText}</a>
              </span>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
