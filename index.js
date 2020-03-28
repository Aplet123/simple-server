const { Server, Socket } = require("net");
const port = process.env.PORT || 61324;
const server = new Server({}, function(conn) {
    let dat = "";
    console.log("connected")
    conn.on("data", function(d) {
        dat += d.toString("utf8");
        conn.end(`HTTP/1.1 200 OK\r\nContent-Length: ${dat.length}\r\n\r\n${dat}`);
        conn.destroy();
    });
});
server.listen(port, function() {
    console.log(`Server listening on port ${port}.`);
});
