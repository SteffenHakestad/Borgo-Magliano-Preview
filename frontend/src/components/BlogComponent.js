import Linkify from "react-linkify";

export default function BlogComponent({
  ProfileName,
  ProfilePicture,
  BlogHeadline,
  BlogText,
  BlogImagePath,
  BlogImagePath2,

  createdAt,
}) {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <>
      <div className="blog-container">
        <div className="blog-header-container">
          <div className="blog-profile-picture-frame">
            <img
              className="blog-profile-picture"
              src={process.env.PUBLIC_URL + ProfilePicture}
              alt="Profile"
            />
          </div>
          <div className="blog-header-text-container">
            <div className="blog-profile-name">{ProfileName}</div>
            <div className="date-display">{formattedDate}</div>
          </div>
        </div>
        <h1 className="blog-headline"> {BlogHeadline}</h1>
        <Linkify>
          <p className="blog-text">{BlogText}</p>
        </Linkify>
        <div id="blog-image-container">
          <img
            className="blog-image"
            src={`${BlogImagePath}`}
            alt="Blog-media"
          />
          <img
            className="blog-image"
            src={`${BlogImagePath2}`}
            alt="Blog-media"
          />
        </div>
      </div>
    </>
  );
}
