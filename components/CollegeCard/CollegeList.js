import React, { useEffect, useState } from "react";
import { db } from "../../Database/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from 'next/router';

const CollegeList = () => {
  const router = useRouter();
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setLoading(true);
        const { program, category } = router.query;
        const collegesCollection = collection(db, "Colleges");
        const q = query(collegesCollection, where("program", "==", program), where("category", "==", category));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setColleges(data);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [router.query]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-8 mb-4">Colleges for {router.query.program} in {router.query.category}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {colleges.map(college => (
            <li key={college.id}>
              <Link href={`/college/${college.id}`}>
                <a>{college.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollegeList;



























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
