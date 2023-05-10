import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
// prevent creating prisma client everytime 
if (process.env.NODE_ENV == 'production') global.prismadb = client;

export default client;
