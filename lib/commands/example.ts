import chalk from 'chalk';

// TODO type
const example = ({ blue }: any) => {
  if (blue) {
    return console.log(chalk.blue(`I'm blue, da ba dee da ba daa`));
  }

  console.log('Example message');
};

export default example;
