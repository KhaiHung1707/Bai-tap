// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const tick = () => {
// root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };
//   setInterval(tick, 1000);

  //HIển Thị Thời Gian 

  import ReactDOM from "react-dom/client";

   const root = ReactDOM.createRoot(document.getElementById("root"));

     root.render(
       <div>
         <h1>Hello My PC</h1>
         <h4>Browser's details: {navigator.userAgent}</h4>
       </div>
     )
  //BT1 Taoj element thể hiện thông tin trình duyệt 

 