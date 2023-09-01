import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
const apishaka1 =process.env.API_HOME1_CACHEBUSTER_URL;
// //API_HOME1_CACHEBUSTER_URL=http://localhost:3000/api/home1?cacheBuster=
// async function fetchIbya1() {
//     const cacheBuster = Date.now(); // Generate a http://localhost:3000/api/home?cacheBuster=${cacheBuster}` cache-busting parameter
//     const urlWithCacheBuster = `${apishaka1}?cacheBuster=${cacheBuster}`;
   
//     const response = await fetch( urlWithCacheBuster ,{
//         'method':"GET",
        
//     });
//     const ibyangombwa1 = await response.json();
//     return ibyangombwa1;
// }

// export async function GET (req,res) {
// const ibyangombwa1 = await fetchIbya1();
// const {searchParams} = new URL(req.url);
// const query = searchParams.get("query");
// const getFilteredIbyangombwa1 = ibyangombwa1.todos1.filter((todo)=>{
  
//     return todo.title.toLowerCase().includes(query.toLowerCase()) || todo.yourname.toLowerCase().includes(query.toLowerCase());
// })
// console.log("filtered",getFilteredIbyangombwa1);
// return NextResponse.json(getFilteredIbyangombwa1);
// }



export async function GET(request) {
    try {
        const cacheBuster = Date.now();
         const urlWithCacheBuster = `${apishaka1}${cacheBuster}`;
    
        const response = await fetch(urlWithCacheBuster , {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "e server at 'http://localhost:3000/", // Replace with your allowed origins
        "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
        "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    }
    
        });
        console.log("shaka1 search1 route",response);
        const ibyangombwa1 = await response.json();

        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');

        const filteredIbyangombwa1 = ibyangombwa1.todos1.filter((todo) => {
            return todo.title.toLowerCase().includes(query.toLowerCase()) || todo.izina.toLowerCase().includes(query.toLowerCase());
        });
  console.log("filteredtodo1",filteredIbyangombwa1);
        return NextResponse.json(
            filteredIbyangombwa1
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error("An error occurred while fetching data.", 500);
    }
}

