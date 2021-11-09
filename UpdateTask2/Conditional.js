import React from "react";

export function Loading() {
  return (
    <div>
      <h1>The page is Loading... please wait</h1>
      <img src="logo192.png" />
    </div>
  );
}

export function Loaded() {
  return (
    <div>
      <h1>Some cool things about conditional rendering</h1>
    </div>
  );
}

function Conditional(props) {
  console.log(props.isLoading);
  // we can't show boolean (true or false) on html

  // Ternary conditional statement
  // conditional statement ? if it is true : if it is false

  //return props.isLoading ? <Loading /> : <Loaded />;

  //   if (props.isLoading) {
  //     return <Loading />;
  //   }
  //   return <Loaded />;

  //   return (
  //     <div>
  //       <h1>Temp</h1>
  //     </div>
  //   );
}

export default Loaded;
