import app from "fastify";
const port = 3000;



//# this is how you listen to the server
const start = async () => {
    try {
        await app.listen({ port })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start();