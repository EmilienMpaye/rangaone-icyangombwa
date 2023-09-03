import {  NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'? ['https://rangaone-icyangombwa.vercel.app',]  : ['http://localhost:3000',"https://www.google.com"];

export function middleware(request){
    console.log('Middleware')
    
const origin = request.headers.get('origin');
console.log(request.method)
    console.log(request.url)


if(origin  && !allowedOrigins.includes(origin)){
    return new NextResponse(null, {
        status:404,
        statusText:"Bad Request",
       headers:{
        'Content-Type':'text/plain'
       }
    })
}

console.log(origin);
return NextResponse.next()
}
export const config = {
    matcher: ['/api/home1','/api/shaka1', '/api/shaka1/search1',],
}