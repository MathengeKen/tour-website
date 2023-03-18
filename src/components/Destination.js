import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destiantion</h1>
      <p>Tours give you the o1pportunity to see a lot within a ftime frame</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is a unique and picturesque attraction that draws tourists from all over the world. Located in the middle of a lake, the volcano is famous for its stunning crater lake and picturesque views. With our expert guides, you can experience the beauty and adventure of this natural wonder firsthand. Book your tour today and discover the magic of Taal Volcano!"
        image1="https://images.unsplash.com/photo-1621420561012-1adfa8e6bc2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFhbCUyMHZvbGNhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60"
        image2="https://images.unsplash.com/photo-1564221778350-e9c052164a57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGFhbCUyMHZvbGNhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldul is a favorite among hikers and outdoor enthusiasts for its challenging yet rewarding trails and breathtaking panoramic views of the sea and nearby islands. With our experienced guides, you can explore the mountain's lush forests, hidden waterfalls, and picturesque summit. Book your tour today and experience the thrill of conquering Mt. Daguldul!"
        image1="https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRhZ3VsZHVsJTIwbW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60"
        image2="https://images.unsplash.com/photo-1515310787031-25ac2d68610d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGFndWxkdWwlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
      />
    </div>
  );
};

export default Destination;
