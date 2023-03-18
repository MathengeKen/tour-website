import TripData from "./TripData";
import "./TripStyles.css";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={
            "https://media.istockphoto.com/id/1415959095/photo/reticulated-giraffe-walking-past-bushes-on-savannah.jpg?b=1&s=170667a&w=0&k=20&c=0jxtCtdVSX3R4d6KohVSJ64AnB-ZKuTBXhXNLtO0rg8="
          }
          heading="Trip in Kenya"
          text="Kenya is an enchanting country in East Africa, renowned for its diverse wildlife, stunning landscapes, and vibrant cultural heritage. It is home to some of the world's most spectacular game reserves and national parks, such as the Maasai Mara, Amboseli, and Tsavo, where visitors can witness some of Africa's most iconic animals, including lions, elephants, zebras, and giraffes, in their natural habitat. Kenya's coastline along the Indian Ocean is also a popular destination, with its pristine white sandy beaches and turquoise waters providing the perfect backdrop for relaxation and water sports."
        />
        <TripData
          image={
            "https://images.unsplash.com/photo-1596018138885-b88eb554411c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGF5c2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
          }
          heading="Trip in Malaysia"
          text="Malaysia is a captivating and diverse destination that offers visitors a wealth of experiences, from the bustling cityscapes of Kuala Lumpur to the serene rainforests of Borneo. This vibrant country is a melting pot of cultures, with influences from Malay, Chinese, Indian, and European traditions that blend together to create a unique and colorful atmosphere. Malaysia's natural beauty is unparalleled, with pristine beaches, tropical rainforests, and stunning highland landscapes that offer a range of outdoor activities such as hiking, snorkeling, and wildlife spotting. The island of Langkawi, on the west coast, is known for its white sandy beaches and crystal-clear waters, while the East Coast islands offer a more secluded and tranquil experience."
        />
        <TripData
          image={
            "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWd5cHR8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60"
          }
          heading="Trip in Egypt"
          text="Egypt is an ancient land of wonder and mystery that is steeped in history and culture. This North African country is renowned for its awe-inspiring monuments, including the Great Pyramids of Giza, the Sphinx, and the Valley of the Kings, which provide a glimpse into the lives of the pharaohs and their people. Egypt's rich cultural heritage is also reflected in its cuisine, music, art, and architecture, which are a blend of influences from ancient and modern civilizations. Visitors can explore the bustling markets, sample traditional dishes like koshari and falafel, and enjoy performances of traditional music and dance.."
        />
      </div>
    </div>
  );
}

export default Trip;
