// import React from "react";
// import TextTransition, { presets } from "react-text-transition";

// const TEXTS = ["Happy", "17Th", "Birthday", "Kiddo!"];

// const colors = ["#ff595e", "#d1d646", "#00798c", "#edae49"];

// export const TypeAnimation = () => {
//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(
//       () => setIndex((index) => index + 1),
//       3000 // every 3 seconds
//     );
//     return () => clearTimeout(intervalId);
//   }, []);

//   return (
//     <h1>
//       <TextTransition
//         text={TEXTS[index % TEXTS.length]}
//         springConfig={presets.wobbly}
//         style={{ color: colors[index % colors.length] }}
//       />
//     </h1>
//   );
// };
