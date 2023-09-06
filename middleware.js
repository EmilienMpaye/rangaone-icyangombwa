import {  NextResponse } from "next/server";

// const allowedOrigins = process.env.NODE_ENV === 'production'? '................' : [,'http://localhost:3000/api/*path',"https://www.google.com"];

export function middleware(request){
    console.log('Middleware')
    
// const origin = request.headers.get('origin');
// console.log(request.method)
//     console.log(request.url)


// if(origin  && !allowedOrigins.includes(origin)){
//     return new NextResponse(null, {
//         status:404,
//         statusText:"Bad Request",
//        headers:{
//         'Content-Type':'text/plain',
//         'Access-Control-Allow-Origin': '*',
//        }
//     })
 }

// console.log(origin);
//return NextResponse.next()
// }
// export const config = {
//     matcher: .....
// }