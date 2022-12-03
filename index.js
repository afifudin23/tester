const Hapi = require("@hapi/hapi");

const init = async () => {
    const server = Hapi.server({
        port: 4000,
        host: "127.0.0.1"
    });
    
    server.route({
        method: "GET",
        path: "/testing",
        handler: (req, h) => h.response({
            status: "Mantepp",
            message: "Masukkkk Pak Ekooo!!!",
            framework: "Hapi Js"
        })
    });
    
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

init();