// async function createShape(shapeDescription) {
//     const apiUrl = "https://localhost:7227/api/shapes/create";
//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           shapeRequest: {
//             ShapeDescription: shapeDescription,
//           },
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to create shape.");
//       }
  
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       throw new Error("Failed to fetch data from the API.");
//     }
//   }
  
//   export default createShape;
  