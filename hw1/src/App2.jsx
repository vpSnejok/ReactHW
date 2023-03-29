// import { useState } from "react";
// import "./App.css";
// import Container from "./components/Container/Container";
// import Button from "./components/Button/Button";
// import Modal from "./components/Modal/Modal";

// const App2 = () => {
//   // state = {
//   //   isModalOpenFirst: false,
//   //   isModalOpenSecond: false,
//   // };

//   const [isModalOpenFirst, setIsModalOpenFirst] = useState(false);
//   const [isModalOpenSecond, setIsModalOpenSecond] = useState(false);

//   //   const handleOpenModal = (target) => {
//   //     // console.log(target);
//   //     setIsModalOpenFirst(true)
//   //    //  setState((prev) => (prev[target] = true));
//   //     // setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
//   //   };

//   const handleCloseModal = () => {
//     setIsModalOpenSecond(false);
//     setIsModalOpenFirst(false);
//     //  setState(() => ({
//     //    isModalOpenFirst: false,
//     //    isModalOpenSecond: false,
//     //  }));
//     // setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
//   };

//   return (
//     <Container>
//       <Button
//         text="opene frist modal"
//         action={() => setIsModalOpenFirst(true)}
//         classes="btn btn__green"
//       />
//       <Button
//         text="opene second modal"
//         classes="btn btn__red"
//         action={() => setIsModalOpenSecond(true)}
//       />
//       {isModalOpenFirst && (
//         <Modal
//           closeModal={handleCloseModal}
//           title="modal1"
//           text="modalText1"
//           closeBtn={true}
//         />
//       )}
//       {isModalOpenSecond && (
//         <Modal
//           closeModal={handleCloseModal}
//           title="modal2"
//           text="modalText 2"
//           closeBtn={false}
//         />
//       )}
//     </Container>
//   );
// };

// export default App2;
