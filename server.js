// server.js

console.log("Server starting...");
console.log("Rendering Cyberpunk UI...");

const cyberpunkUI = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk Hello World</title>
    <style>
        body {
            background-color: #000;
            color: #00ff00;
            font-family: monospace;
            text-align: center;
            padding: 50px;
        }
        h1 {
            font-size: 3em;
            text-shadow: 0 0 10px #00ff00;
        }
        p {
            font-size: 1.5em;
        }
        .glow {
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from {
                text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #007700, 0 0 40px #007700;
            }
            to {
                text-shadow: 0 0 20px #00ff00, 0 0 30px #007700, 0 0 40px #007700, 0 0 50px #003300;
            }
        }
    </style>
</head>
<body>
    <h1 class="glow">Hello, Cyberpunk World!</h1>
    <p>System Online. Data Stream Active.</p>
</body>
</html>
`;

console.log(cyberpunkUI);
