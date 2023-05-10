import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials';
import {compare} from 'bcrypt'
import prismadb from '@/lib/prismadb'
export default NextAuth({
    providers: [
        Credentials({
            id:'credentials',
            name:'Credentials',
            // defining credentails 
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type : "password",

                }
            },
            // authorizing credentials
            async authorize( credentials){
                // if password or email is missing we will throw error email and password required
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Email and password required');
                }
                const user = await prismadb.user.findUnique({
                    // finding entered email with database
                    where:{
                        email: credentials.email 
                    }
                });
                // then we will match if user and its passowrd are existed in our database
                if(!user || !user.hashedPassword ){
                    throw new Error('Email does not exist ');
                }
                const isCorrectPassowrd = await compare(credentials.password,user.hashedPassword);
                // if the password is not corect then we will throw error
                    if(!isCorrectPassowrd){
                        throw new Error('Incorrect Password ');
                    }
                    return user;       
            }
        })
    ],
    // where to perform thsi action
    pages: {
        signIn : '/auth',

    },
    // debug it when it is in development
    debug : process.env.NODE_ENV === 'development',
    session : {
        strategy: 'jwt',
    },
    jwt: {
        secret : process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET,


})