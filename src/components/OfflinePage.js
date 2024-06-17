import offlineImage from "../Images/OfflineImage.jpg";
const OfflinePage = (props) => {
  return (
    <div className="offline-container">
      <div className="oops-text">Oops!</div>
      <img src={offlineImage} width="300px" height="300px" />
      <h1>Looks like you're offline, Please check your internet connection</h1>
    </div>
  );
};

export default OfflinePage;
