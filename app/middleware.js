import {  NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'? ['https://rangaone-icyangombwa.vercel.app','https://www.google.com']  : ['http://localhost:3000','http://localhost://3000/api/shaka1',"https://www.google.com"];

export function middleware(request){
const origin = request.headers.get('origin');
console.log("origin",origin)

if(origin && !allowedOrigins.includes(origin)||!origin){
    return new NextResponse(null, {
        status:404,
        statusText:"Bad Request",
       headers:{
        'Content-Type':'text/plain'
       }
    })
}
console.log("allowed",middleware);
console.log("allowed",origin);
return NextResponse.next()
}
export const config = {
    matcher:'/api/:path*',
}