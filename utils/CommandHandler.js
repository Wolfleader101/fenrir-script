module.exports = CommandHandler = (data) => {
  let cmdRegex = /\print\((.*?)\)/g;
  let cmds = data.match(cmdRegex);
  if (cmds) {
    cmds.forEach((cmd) => {
      let inputRegex = /\(([^)]+)\)/g;
      if (cmd.length < 0) return;

      let input = inputRegex.exec(cmd)[1];

      console.log(input);
    });
  }
};
