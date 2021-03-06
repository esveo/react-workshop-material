const http = require("http");
const WebSocket = require("ws");

const requestDelay = 1000;
const handlers = [
  {
    methodPattern: /get/i,
    urlPattern: /satellites\/.+/i,
    handler: (req, res) => {
      const id = req.url.match(/satellites\/(.+)/)[1];
      const satellite = dummyData.find((s) => s.id === id);
      if (!satellite) {
        return fail(res, 404, `No satellite with id ${id}`);
      }
      setTimeout(() => {
        res.write(JSON.stringify(satellite));
        res.end();
      }, requestDelay);
    },
  },
  {
    methodPattern: /get/i,
    urlPattern: /satellites/i,
    handler: (req, res) => {
      setTimeout(() => {
        res.write(JSON.stringify(dummyData));
        res.end();
      }, requestDelay);
    },
  },
  {
    methodPattern: /post/i,
    urlPattern: /satellites/i,
    handler: (req, res) => {
      getPayload(req, (err, data) => {
        if (err) {
          console.error(err);
          return fail(res, 400, String(err));
        }
        if (dummyData.length > 50) {
          return fail(
            res,
            400,
            "You cannot store more than 50 satellites. Delete some before adding new ones."
          );
        }
        const { name, type, angle, reverse } = data;
        if (typeof name !== "string") {
          return fail(res, 400, "Name is a required field.");
        }
        if (
          typeof type !== "string" ||
          !["science", "military", "communication"].includes(type)
        ) {
          return fail(
            res,
            400,
            'Type must be one of "science", "military" and "communication".'
          );
        }
        if (typeof angle !== "number" || angle < 0 || angle > 360) {
          return fail(res, 400, "Angle must be a number between 0 and 360");
        }
        if (typeof reverse !== "boolean") {
          return fail(res, 400, "Reverse must be a boolean");
        }
        const newSatellite = {
          id: (Math.random(9999999) * 1000000).toFixed(0),
          name,
          angle,
          type,
          reverse,
        };
        dummyData.push(newSatellite);
        setTimeout(() => {
          res.write(JSON.stringify(newSatellite));
          res.statusCode = 201;
          res.end();
        }, requestDelay);
      });
    },
  },
  {
    methodPattern: /put/i,
    urlPattern: /satellites\/\d+/i,
    handler: (req, res) => {
      const id = req.url.match(/satellites\/(.+)/)[1];
      const satellite = dummyData.find((s) => s.id === id);
      if (!satellite) {
        return fail(res, 404, `No satellite with id ${id}`);
      }
      getPayload(req, (err, data) => {
        if (err) {
          console.error(err);
          return fail(res, 400, String(err));
        }
        const { name, type, angle, reverse } = data;
        if (typeof name !== "string") {
          return fail(res, 400, "Name is a required field.");
        }
        if (
          typeof type !== "string" ||
          !["science", "military", "communication"].includes(type)
        ) {
          return fail(
            res,
            400,
            'Type must be one of "science", "military" and "communication".'
          );
        }
        if (typeof angle !== "number" || angle < 0 || angle > 360) {
          return fail(res, 400, "Angle must be a number between 0 and 360.");
        }
        if (typeof reverse !== "boolean") {
          return fail(res, 400, "Reverse must be a boolean");
        }
        Object.assign(satellite, {
          name,
          angle,
          type,
          reverse,
        });
        setTimeout(() => {
          res.write(JSON.stringify(satellite));
          res.statusCode = 200;
          res.end();
        }, requestDelay);
      });
    },
  },
  {
    methodPattern: /delete/i,
    urlPattern: /satellites\/\d+/i,
    handler: (req, res) => {
      const id = req.url.match(/satellites\/(.+)/)[1];
      const satellite = dummyData.find((s) => s.id === id);
      if (!satellite) {
        return fail(res, 404, `No satellite with id ${id}`);
      }
      const index = dummyData.indexOf(satellite);
      dummyData.splice(index, 1);
      setTimeout(() => {
        res.statusCode = 200;
        res.end();
      }, requestDelay);
    },
  },
  {
    methodPattern: /.*/,
    urlPattern: /.*/,
    handler: (req, res) => {
      res.statusCode = 404;
      res.write(JSON.stringify("Backend running"));
      res.end();
    },
  },
];

const dummyData = [
  {
    id: "0",
    name: "International Space Station",
    type: "science",
    angle: 15,
    reverse: false,
  },
  {
    id: "1",
    name: "Hubble Space Telescope",
    type: "science",
    angle: 40,
    reverse: true,
  },
  {
    id: "2",
    name: "GoldenEye",
    type: "military",
    angle: 66,
    reverse: true,
  },
  {
    id: "4",
    name: "Galaxy 14",
    type: "communication",
    angle: 110,
    reverse: false,
  },
  {
    id: "5",
    name: "GPS IIR-11",
    type: "communication",
    angle: 135,
    reverse: true,
  },
];

const wss = new WebSocket.Server({ noServer: true });

/**
 * @type {{  username: string | null, socket: WebSocket, dead: boolean }[]}
 */
let sockets = [];
wss.on("connection", (socket) => {
  const connection = { username: null, socket, dead: false };

  // sockets.forEach((s) => s.socket.send(JSON.stringify(welcomeMessage)));

  sockets.push(connection);

  socket.on("message", (data) => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.type === "CONNECT" && typeof parsed.username === "string") {
        connection.username = parsed.username;
        for (const s of sockets) {
          if (s.socket === socket) continue;
          s.socket.send(
            JSON.stringify({
              type: "NEW_CONNECTION",
              username: connection.username,
            })
          );
        }

        for (const s of sockets) {
          if (!s.username || s.socket === socket) continue;
          socket.send(
            JSON.stringify({
              type: "NEW_CONNECTION",
              username: s.username,
            })
          );
        }
      } else if (!connection.username) {
        socket.send(
          JSON.stringify({
            type: "ERROR",
            message:
              "Setup your username with `CONNECT` before sending messages",
          })
        );
      } else {
        for (const s of sockets) {
          if (s.socket === socket) continue;
          s.socket.send(data);
        }
      }
    } catch (err) {
      socket.send(
        JSON.stringify({
          type: "ERROR",
          message: "Recieved invalid message format. Has to be JSON",
        })
      );
    }
  });

  socket.on("pong", () => (connection.dead = false));

  socket.on("close", () => {
    sockets = sockets.filter((s) => s.socket !== socket);

    if (connection.username) {
      for (const s of sockets) {
        if (s.socket === socket) continue;
        s.socket.send(
          JSON.stringify({
            type: "CONNECTION_CLOSED",
            username: connection.username,
          })
        );
      }
    }
  });
  socket.on("error", () => socket.terminate());
});

setInterval(() => {
  let i = 0;
  log("validating connections");
  for (const s of sockets) {
    if (s.dead) {
      i++;
      s.socket.terminate();
    } else {
      s.dead = true;
      s.socket.ping("ping");
    }
  }
  log(`validating connections done, connections closed: ${i}`);
}, 10000);

const server = new http.Server((req, res, ...rest) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET,POST,DELETE,PUT");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  res.setHeader("Content-Type", "application/json");

  const handler = handlers.find((h) => {
    return !!req.method.match(h.methodPattern) && !!req.url.match(h.urlPattern);
  });

  try {
    handler.handler(req, res);
  } catch (err) {
    console.error(err);
    fail(res, 500, "Unknown error");
  }
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit("connection", ws, request);
  });
});

const port = process.env.PORT || 3002;
server.listen(port);
log("Server listening on port port");

function getPayload(req, callback) {
  let buffer = Buffer.alloc(0);
  req.on("data", (data) => (buffer = Buffer.concat([buffer, data])));
  req.on("end", () => {
    const payload = buffer.toString("utf-8");
    try {
      callback(null, (payload && JSON.parse(payload)) || {});
    } catch (err) {
      callback(err);
    }
  });
}

function fail(res, code, reason) {
  res.statusCode = code;
  res.write(JSON.stringify(reason));
  res.end();
}

function log(...args) {
  console.log(new Date().toISOString(), ...args);
}
