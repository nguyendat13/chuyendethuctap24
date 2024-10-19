const BannerItem = (props) => {
    const banner = props.banner;
    return <img src={banner.image} className="rounded img-fluid" />;
  };
  
  export default BannerItem;
  