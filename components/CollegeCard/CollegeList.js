import React, { useEffect, useState } from "react";
import { db } from "../../../database/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from 'next/router'


import React from 'react'

const CollegeList = () => {
  return (
    <div>College List</div>
  )
}

export default CollegeList



























// interface Listing {
//   id: string;
//   name?: string;
//   shopImage?: string;
//   description?: string;
//   services?: string;
// }

// interface SearchCardProps {
//   searchQuery: string;
// }

// const SearchCard: React.FC<SearchCardProps> = ({ searchQuery }) => {
//   const [freeListings, setFreeListings] = useState<Listing[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const freeListingsCollection = collection(db, "FreeListing");
//         const snapshot = await getDocs(freeListingsCollection);
//         const data = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         })) as Listing[];

//         const filteredData = data.filter(
//           (listing) =>
//             (listing.name &&
//               listing.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
//             (listing.services &&
//               listing.services
//                 .toLowerCase()
//                 .includes(searchQuery.toLowerCase()))
//         );

//         setFreeListings(filteredData);
//       } catch (error) {
//         console.error("Error fetching data from Firestore: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (searchQuery) {
//       fetchData();
//     }
//   }, [searchQuery]);

//   return (
//     <>
//       {loading}
//       {!loading &&
//         freeListings.map((listing) => (
//           <div key={listing.id} className="grid grid-cols-5 gap-3">
//             <div>
//               <img src={listing.shopImage} alt={listing.shopImage} />
//             </div>
//             <div className="grid col-span-3">
//               <h2>{listing.name || "No Name Available"}</h2>
//               <p>{listing.description}</p>
//             </div>
//             <div>
//               <Link href={`/Details?query=${encodeURIComponent(listing.name || "")}`}>
//                   <button type="button">Show Details</button>
//               </Link>
//               <button type="button">Contact Us</button>
//             </div>
//           </div>
//         ))}
//     </>
//   );
// };

// export default SearchCard;
