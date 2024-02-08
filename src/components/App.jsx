import { Alert } from "./Alert";

export default function App() {
  return (
    <>
      <Alert variant="success" outlined="true" elevated="false">Hello, user</Alert>
      <Alert variant="error" outlined="false" elevated="false">Error</Alert>
      <Alert variant="info" outlined="true" elevated="true">Hello World</Alert>
    </>
  );
}

// import { Product } from "./Product";
// import { Mailbox } from "./Mailbox";

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product
//         name="Tacos with Lime" 
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" 
//         price={10.99}/>

//       <Product
//         name="Fries and Burger" 
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640" 
//         price={14.29}/>

//       <Mailbox
//       username="Alex"
//       unreadMessages={[1, 2, 3]}/>
//     </div>
//   );
// }
