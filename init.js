const {execFile, exec, spawn, fork} = require("child_process");

const path = '.resources/ZORK1.DAT';
try {
    if (fs.existsSync(path)) {
        const zorkInst = spawn("/usr/bin/dfrotz" , ["./resources/ZORK1.DAT"]);

        zorkInst.stdout.pipe(process.stdout);
        process.stdin.pipe(zorkInst.stdin);
    }
} catch(err) {
    console.log("./resources/ZORK1.DAT Does not exist or is otherwise inaccessible.\n", err);
}

