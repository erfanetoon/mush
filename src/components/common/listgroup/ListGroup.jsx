import React from "react";

const ListGroup = (props) => {
  const { genres, onGenresSelect, selectedItem } = props; 
  return (
    <div>
      <ul className="list-group">
        {genres.map((genre) => {
          return (
            <li
              key={genre._id}
              onClick={() =>onGenresSelect(genre)}
              className={selectedItem === genre ? "list-group-item active" : "list-group-item"}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;







// const ListGroup = (props) => {
//   return (
//     <div>
//       <ul className="list-group">
//         {props.items.map((item) => {
//           return (
//             <li key={item._id} className="list-group-item">
//               {item.name}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };





{/* <ul class="list-group">
        {genres.map((genre) => {
          return (
            <li key={genre._id} class="list-group-item">
              {genre.name}
            </li>
          );
        })}
      </ul> */}



//  <ul class="list-group">
//    <li class="list-group-item">Cras justo odio</li>
//  </ul>;